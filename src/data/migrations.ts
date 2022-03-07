import { connection } from "./connection"

export const createTables = async () => {
  await connection.raw(`
    CREATE TABLE IF NOT EXISTS Z_NPH_Bycicles (
      id varchar(36) primary key,
      color varchar(255) not null, 
      gears int not null,
      brand varchar(255) not null,
      model varchar(255) not null,
      price float not null
    );

    CREATE TABLE IF NOT EXISTS Z_NPH_Bycicles_Sold (
      id varchar(36) primary key,
      bike_id varchar(36) not null,
      foreign key (bike_id) references Z_NPH_Bycicles(id)
    );
  `)
}