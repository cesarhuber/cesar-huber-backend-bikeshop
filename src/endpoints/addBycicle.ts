import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { insertBycicle } from "../services/insertBycicle";
import { Bycicle } from "../types/Bycicle";

export const addBycicle = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {color, gears, brand, model, price} = req.body

    if (!color || !gears || !brand || !model || !price) {
      errorCode = 422
      throw new Error('Todas as informações precisam ser preenchidas')
    }

    const id = generateId()

    const bike = new Bycicle(id, color, gears, brand, model, price)

    await insertBycicle(bike)

    res.status(201).send('Bicicleta cadastrada com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}