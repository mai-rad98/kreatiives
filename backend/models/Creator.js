import mongoose from 'mongoose'

const creatorSchema = mongoose.Schema({
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
       required: true 
    },

    role: {
        type : String,
        required: true
       },
   }, 
   
    { timestamps: true }
)

const Creator  = mongoose.model('Creator', creatorSchema);

export default Creator;