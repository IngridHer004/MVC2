import {modelo} from '../models/Aprobado.model.js'

export const test = () => {
    console.log("llamando la funcion desde el servidor")
}

modelo.create({
    nombre:"Brandon",
    apellidoP:"Martinez",
    apellidoM:"Castillo",
    promedio:"10"
})
