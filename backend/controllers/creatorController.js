import mongoose from 'react'

const assistantSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
       },
    email : { 
        type:String, 
       required:true
   },
   password: { 
    type: String, 
    required: true },
   },
    { timestamps: true }
)

const Assistant = mongoose.model('Assisstant', assistantSchema);

export default Assistant;