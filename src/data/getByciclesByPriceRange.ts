import { Bycicle } from "../types/Bycicle";
import { connection } from "./connection";

export const getByciclesByPriceRange = async (price: number, range: string): Promise<Bycicle[]> => {
  let comparison = '<='
  if (range === 'GTE') comparison = '>='
  const result = await connection('Z_NPH_Bycicles').where('price', comparison, price)
  return result
}