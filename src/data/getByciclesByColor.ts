import { Bycicle } from "../types/Bycicle";
import { connection } from "./connection";

export const getByciclesByColor = async (color: string): Promise<Bycicle[]> => {
  const result = await connection('Z_NPH_Bycicles').where('color', 'like', `%${color}%`)
  return result
}