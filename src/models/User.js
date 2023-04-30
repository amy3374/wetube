import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

const User = mongoose("User", userSchema);
export default User;
