import {modelo} from '../models/Reprobados.model.js'

export const test2 = () => {
    console.log("llamando la funcion desde el servidor")
}

modelo.create({
    nombre:"Brandon",
    apellidoP:"Martinez",
    apellidoM:"Castillo",
    promedio:"5"
})
