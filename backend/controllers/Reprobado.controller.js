import {modelo} from '../models/Reprobados.model.js'

export const test2 = () => {
    console.log("llamando la funcion desde el servidor")
}

modelo.create({
    nombre:"Carlos Daniel",
    apepat:"Gurierrez",
    apemat:"Novoa",
    promedio:"6.7"
})
