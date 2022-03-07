import { connection } from "./connection"

export const updateByciclePrice = async (bikeId: string, price: number): Promise<void> => {
  await connection('Z_NPH_Bycicles').where('bike_id', bikeId).update({price})
}