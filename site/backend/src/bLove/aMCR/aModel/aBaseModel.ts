import mongoose from "mongoose";

import defaultSchema from "../../../bLove/cUtility/bDefaultSchemaUtility";


const schema = new mongoose.Schema({
  ...defaultSchema
})

export const BaseModel = mongoose.model("BaseModel", schema);