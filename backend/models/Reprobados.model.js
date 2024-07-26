import {Schema,model} from 'mongoose'

export const A = new Schema({
    nombre:{
        type:String
    },
    apellidoP:{
        type:String
    },
    apellidoM:{
        type:String
    },
    promedio:{
        type:Number
    }
})

export const modelo = new model('Reprobados',A)