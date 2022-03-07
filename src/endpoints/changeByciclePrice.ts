import {Request, Response} from 'express'
import { getBycicleById } from '../data/getBycicleById'
import { updateByciclePrice } from '../data/updateByciclePrice'

export const changeByciclePrice = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const bikeId = req.params.bikeid
    const price = Number(req.query.price)

    if (!bikeId || !price) {
      errorCode = 422
      throw new Error('Todas as informações precisam ser preenchidas')
    }

     const bike = await getBycicleById(bikeId)

    if (!bike) {
      errorCode = 404
      throw new Error('ID da bicicleta não encontrado')
    }

    const currentPrice = bike.getByciclePrice()

    if (currentPrice === price) {
      errorCode = 422
      throw new Error(`O preço desta bicicleta já está em ${price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    }

    await updateByciclePrice(bikeId, price)

    res.status(200).send('Preço alterado com sucesso!')

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}