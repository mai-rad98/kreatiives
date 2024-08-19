import Account from "../models/Account";
import Profile from "../models/Profile";
import mongoose from "mongoose";
const ObjectId = Types.ObjectId;


export const createAccount = async(password,accountType) => {
    const account = await new Account({password,accountType}).save()

    return account
}

export const getUser = async(email,accountType) => {
    const account = await findOne({email: email, accountType: accountType}).exec()
    return account
}

export const getUserById = async(id) => {
    const account = await findOne({id: id}).select("-password")
    .exec();

  console.log(account);
  return account;
}

export const updateAccount = async(accountID, updateInfo) => {
    const account = await findOneAndUpdate(
        { _id: new ObjectId(accountID) },
        updateInfo,
        { new: true }
      ).exec();
    
      return account;
}

export const getAccountProfile = async(account) => {
    const  profile = await _findOne({
        account: new ObjectId(account),
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

export const getAccountsProfile = async(profiles) => {
    const profile = await find({
        account: { $in: profiles.map((record) => new ObjectId(record)) },
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


