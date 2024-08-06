import { Schema,model } from "mongoose";

const remediales = new Schema({
    Alumno:{
        type:String
    },
    Estatus:{
        type:String
    }
})

export const modelo3 = new model('Remediales',remediales)