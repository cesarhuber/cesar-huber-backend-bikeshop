import app from "./app";
import { createTables } from "./data/migrations";
import { addBycicle } from "./endpoints/addBycicle";
import { sellBycicle } from "./endpoints/sellBycicle";

createTables()

app.post('/bycicles', addBycicle)

app.post('/bycicles/:bikeid', sellBycicle)