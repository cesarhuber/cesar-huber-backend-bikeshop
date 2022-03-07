import app from "./app";
import { createTables } from "./data/migrations";
import { addBycicle } from "./endpoints/addBycicle";
import { changeByciclePrice } from "./endpoints/changeByciclePrice";
import { sellBycicle } from "./endpoints/sellBycicle";

createTables()

app.post('/bycicles', addBycicle)

app.post('/bycicles/:bikeid', sellBycicle)

app.put('/bycicles/:bikeid', changeByciclePrice)

app.get('/bycicles')