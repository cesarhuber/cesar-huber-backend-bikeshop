import { Bycicle } from "../types/Bycicle"
import { connection } from "./connection"

export const getBycicleById = async (bikeId: string): Promise<Bycicle> => {
  const [bike] = await connection('Z_NPH_Bycicles').where('bike_id', bikeId)
  return bike
}