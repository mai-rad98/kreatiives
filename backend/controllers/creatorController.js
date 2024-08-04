import Creator from "../models/Creator.js";


// add new creator
export const newCreator = async(req,res) => {
try{
     //request body
     const {name,email,password,role} = req.body

     //check request body 
     console.log("Request", req.body)
 
     //create creator
     const creator = await  Creator.create({
         name,
         email,
         password,
         role
     })
     console.log("Created creator", creator)
     res.status(200).json(creator)

}catch(err){
    console.log("Error creating creator",err)
}}

//get all creators
export const getAllCreators = async (req, res) => {
try{
    const creator = await Creator.find()
    res.status(200).json(creator)
}catch(err){
    console.log("Error getting creators",err)
}

}