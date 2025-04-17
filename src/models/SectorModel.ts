import mongoose , { Schema , Document} from "mongoose";

// esto es typeScript
export type SectorType = Document & { // Heredar todo el typado de document 
    sector : string
    direccion : string
    horario : HorarioType
    coordenadas: {
        type: "Point";
        coordinates: [number, number]; // [lng, lat]
    }

}

export type HorarioType =  { 
    apertura : string,
    cierre : string
}

const HorarioSchema = new Schema({
    apertura: {
      type: String, // ejemplo: "08:00"
      required: true,
      trim: true,
    },
    cierre: {
      type: String, // ejemplo: "18:00"
      required: true,
      trim: true,
    },
  }, { _id: false });

// esto es de mongoose
const SectorSchema : Schema = new Schema ({
    sector : {
        type : String,
        required : true,
        trim  : true // elimina los espacios 
    },

    direccion : { 
        type : String,
        required : true,
        trim  : true,
        unique : true
    } ,

    horario : {
        type: HorarioSchema, 
        required: true 
    },
    
    coordenadas: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        
        coordinates: {
            type: [Number], // array de números
            required: true,
        }, // [lng, lat]
    }
})

//añádiendo del modelo a mongose
const Sector = mongoose.model<SectorType>('Sector' , SectorSchema)
export default Sector