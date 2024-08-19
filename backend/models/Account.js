import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const accountSchema = mongoose.Schema({
    fullName :{
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

    accountType: {
        type : String,
        required: true
       },
       hasProfile : {type: Boolean, default: false}
   }, 
   
    { timestamps: true }
)

//validating user password 
accountSchema.methods.comparePassword = function comparePassword(
    candidatePassword,
    cb
){
    bcrypt.compare(candidatePassword,this.password,(err,isMatch) => {
        cb(err,isMatch)
    })
}

const Account  = mongoose.model('Account', accountSchema);

export default Account;