import { modelo3 } from '../models/RemedialesPagados.model.js';

export const test3 = () => {
    console.log("llamando la funcion desde el servidor")
}
modelo3.create({
    Alumno:"Karim",
    Estatus:"Reprobado"

})