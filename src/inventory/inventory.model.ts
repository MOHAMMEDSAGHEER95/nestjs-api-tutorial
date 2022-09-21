import mongoose from "mongoose";

export const inventorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
})