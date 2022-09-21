import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { productSchema } from "./auth.model"


@Module({
    imports: [ MongooseModule.forFeature([{name: 'products', schema: productSchema}])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}