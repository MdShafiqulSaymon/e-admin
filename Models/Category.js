import mongoose from "mongoose";
const { v4: uuidv4 } = require('uuid');

const categorySchema = new mongoose.Schema({
    id: { type: String, default: uuidv4, unique: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    totalProducts:{type:Number,default:0},
    subtitle: { type: String },
    images: [String],
    createdAt: { type: Date, default: Date.now }
  });

export default mongoose.models.Category || mongoose.model("Category", categorySchema);