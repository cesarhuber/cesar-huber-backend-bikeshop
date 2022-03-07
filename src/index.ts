import app from "./app";
import { createTables } from "./data/migrations";
import { addBycicle } from "./endpoints/addBycicle";

createTables()

app.post('/bycicles', addBycicle)