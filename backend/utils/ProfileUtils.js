import Account from "../models/Account";
import Profile from "../models/Profile";
import mongoose from "mongoose"
import { ACCOUNT_TYPES } from "./Constant";



export const createProfile = async (fullName,email,password,accountType,account) =>  {
    console.log("createProfile",fullName,email,password,accountType,account)
    

    const profile = await Profile.create({
        fullName,
        email,
        password,
        accountType,
        account
    })

    console.log('new profile', profile)
    res.status(200).json(profile)
    
}

export const getAccountProfile = async (account) => {
    const profile = await Profile.findOne({
        account : account,
    })
    .populate({
        path: "account",
        model: "Account",
        select: "number accountType status",
      })
      .exec();
    console.log(profile);
    return profile;
}

export const updateProfile = async (profileId, updateInfo) => {
    const profile = await Profile.findByIdAndUpdate(
        { _id: new ObjectId(profileId) },
        updateInfo,
        { new: true }
      ).exec();
    
      return profile;
}

