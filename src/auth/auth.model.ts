import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    title: {type: String, required: true}
});
