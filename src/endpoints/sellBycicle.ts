import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { BikeSold } from "../types/BycicleSold";
import { insertBycicleSold } from "../data/insertBycicleSold";

export const sellBycicle = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const bikeId = req.params.bikeid

    if (!bikeId) {
      errorCode = 422
      throw new Error('É necessário informar o ID da bicicleta vendida')
    }

    const id = generateId()

    const bike: BikeSold = {id, bike_id: bikeId}

    await insertBycicleSold(bike)

    res.status(201).send('Bicicleta vendida com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}