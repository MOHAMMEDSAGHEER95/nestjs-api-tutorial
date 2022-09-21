import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { animalController } from './animals.controllers';
import { animalSchema } from './animals.model';
import { animalsService } from './animals.service';
@Module({
    imports: [MongooseModule.forFeature([{'name':'animals', 'schema': animalSchema}])],
    controllers: [animalController],
    providers: [animalsService]
})
export class AnimalsModule {}
