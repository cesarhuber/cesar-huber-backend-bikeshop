import app from "./app";
import { createTables } from "./data/migrations";
import { addBycicle } from "./endpoints/addBycicle";
import { changeByciclePrice } from "./endpoints/changeByciclePrice";
import { getBycicles } from "./endpoints/getBycicles";
import { sellBycicle } from "./endpoints/sellBycicle";

app.post('/bycicles', addBycicle)

app.post('/bycicles/:bikeid', sellBycicle)

app.put('/bycicles/:bikeid', changeByciclePrice)

app.get('/bycicles', getBycicles)