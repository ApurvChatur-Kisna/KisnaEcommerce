import mongoose from "mongoose";

import defaultSchemaUtility from "../../../cUtility/bDefaultSchemaUtility";


const schema = new mongoose.Schema({
  ...defaultSchemaUtility
})

export const RoleModel = mongoose.model("RoleModel", schema);