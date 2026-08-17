import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already taken"],
  },
  email: {
    type: String,
    unique: [true, "Account already exists with this email address"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const userModel = mongo.model("users", userSchema)

export default userModel;