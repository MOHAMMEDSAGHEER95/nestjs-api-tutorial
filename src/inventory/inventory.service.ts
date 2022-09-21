import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";

@Injectable({})
export class InventoryService{
    constructor(@InjectModel('inventory') private inventorySchema: Model<any>){}


    async getItems(){
        return await this.inventorySchema.find() 
    }

    async addItem(title){
        const product = new  this.inventorySchema({
            title
        })
        const result = await product.save();
        return result._id

    }
}