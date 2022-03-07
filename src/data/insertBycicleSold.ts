import { BikeSold } from "../types/BycicleSold";
import { connection } from "./connection";

export const insertBycicleSold = async (bike: BikeSold): Promise<void> => {
  await connection('Z_NPH_Bycicles_Sold').insert(bike)
}