import { Request, Response } from "express";
import { getAllBycicles } from "../data/getAllBycicles";
import { getByciclesByColor } from "../data/getByciclesByColor";
import { getByciclesByPriceRange } from "../data/getByciclesByPriceRange";

export const getBycicles = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const color = req.query.color as string
    const {price, range} = req.body

    let result = await getAllBycicles()

    if (color) result = await getByciclesByColor(color)
    if (price && range) result = await getByciclesByPriceRange(price, range)

    if (!result) {
      errorCode = 404
      throw new Error('Nenhuma bicicleta encontrada')
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}