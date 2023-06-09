import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

userSchema.pre("save", async function () {
  console.log("users password", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("hash password", this.password);
});
const User = mongoose.model("User", userSchema);

export default User;
