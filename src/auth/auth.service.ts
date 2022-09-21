import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";

@Injectable({})
export class AuthService {
    constructor(@InjectModel('products') private productSchema: Model<any>){}
    login(){
        return `hai called function login ${process.env.MONGO_URI}`
    }

    signup(){
        return 'hai called function signup'
    }

    async add_numbers(){
        const products = await this.productSchema.find()
        return products
    }
}