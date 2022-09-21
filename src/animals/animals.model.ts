import mongoose from "mongoose";

export const animalSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    }
})