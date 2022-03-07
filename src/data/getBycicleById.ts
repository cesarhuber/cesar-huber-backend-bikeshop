import { Bycicle } from "../types/Bycicle"
import { connection } from "./connection"

export const getBycicleById = async (bikeId: string): Promise<Bycicle | undefined> => {
  const [bike] = await connection('Z_NPH_Bycicles').where('id', bikeId)
  if (bike) return new Bycicle(bike.id, bike.color, bike.gears, bike.brand, bike.model, bike.price)
}