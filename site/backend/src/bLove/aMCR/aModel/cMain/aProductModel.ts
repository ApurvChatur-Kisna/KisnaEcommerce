import mongoose from "mongoose";

import defaultSchemaUtility from "../../../cUtility/bDefaultSchemaUtility";


const schema = new mongoose.Schema({
  ...defaultSchemaUtility
})

export const ProductModel = mongoose.model("ProductModel", schema);
