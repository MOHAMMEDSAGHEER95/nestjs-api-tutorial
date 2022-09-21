import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { animalSchema } from "./animals.model";

@Injectable({})
export class animalsService{
    
    constructor(@InjectModel('animals') private animalSchema:Model<any>){}
    
    animals(){
        return this.animalSchema.find()
    }

    animalInsert(name){
        return new this.animalSchema({name}).save()
    }
}