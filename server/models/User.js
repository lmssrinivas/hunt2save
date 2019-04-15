import mongoose from "mongoose";
const Schema = mongoose.Schema;
import SchemaUtil from '../utils/schema.util';

const UserSchema = new Schema({
  id:SchemaUtil.getPropDefination(String,true,true),
  name:SchemaUtil.getPropDefination(String,true),
  email:SchemaUtil.getPropDefination(String,true),
});


const User = mongoose.model("User", UserSchema);

export default User;
