import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test1} from './backend/controllers/Aprobado.controller.js';
import {test2} from './backend/controllers/Reprobado.controller.js';
import {test3}  from "./backend/controllers/Remediales.controllers.js";
dotenv.config();

mongoose.connect(process.env.url)

.then(()=>{
    console.log("Funciona la conexion :)")
})
.catch(()=>{
    console.log("No funciono la conexion :(")
})

const app = express();
app.use(cors())

app.listen(4000,() =>{
    console.log("Mi servidor funciona :))")
})

test1()
test2()
test3()