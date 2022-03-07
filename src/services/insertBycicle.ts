import { connection } from "../data/connection";
import { Bycicle } from "../types/Bycicle";

export const insertBycicle = async (bike: Bycicle): Promise<void> => {
  await connection('Z_NPH_Byciles').insert(bike)
}