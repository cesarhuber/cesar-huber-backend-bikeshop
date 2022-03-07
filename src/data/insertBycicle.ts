import { connection } from "./connection";
import { Bycicle } from "../types/Bycicle";

export const insertBycicle = async (bike: Bycicle): Promise<void> => {
  await connection('Z_NPH_Bycicles').insert(bike)
}