import { Body, Controller, Get, Post } from "@nestjs/common";
import { animalsService } from "./animals.service";


@Controller('animals')
export class animalController{
    constructor(private animalService: animalsService){}

    @Get()
    getLog(){
        return this.animalService.animals()
    }

    @Post()
    insertAnimal(
        @Body('name') title: string
    ): any {
        return this.animalService.animalInsert(title)
    }
}

