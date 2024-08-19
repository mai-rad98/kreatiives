const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const profileSchema = new mongoose.Schema(
  {
  
    propic: { type: String },
    profileType: String,
    location: { type: ObjectId },
    account: {
      required: true,
      type: ObjectId,
      ref: "Account",
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    read: "secondaryPreferred",
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;