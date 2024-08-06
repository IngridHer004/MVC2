import {Schema,model} from 'mongoose'

export const reprob = new Schema({
    nombre:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    promedio:{
        type:Number
    }
})

export const modelo = new model('Reprobados',reprob)