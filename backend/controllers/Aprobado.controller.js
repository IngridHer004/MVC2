import {modelo1} from '../models/Aprobado.model.js'

export const test1 = () => {
    console.log("llamando la funcion desde el servidor")
}

modelo1.create({
    nombre:"Diego Josue",
    apepat:"Palos",
    apemat:"Padilla",
    promedio:"9.6"
})
