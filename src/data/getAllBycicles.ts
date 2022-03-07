import { Bycicle } from "../types/Bycicle"
import { connection } from "./connection"

export const getAllBycicles = async (): Promise<Bycicle[]> => {
  const result = await connection('Z_NPH_Bycicles')
  return result
}