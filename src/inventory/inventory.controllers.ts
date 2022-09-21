import { Body, Controller, Get, Post } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

@Controller('inventory')
export class InventoryController{
    constructor(private inventoryService: InventoryService){}

    @Get()
    async get_list(){
        return await this.inventoryService.getItems()
    }

    @Post()
    async insertItems(
        @Body('title') prodTitle: string
    ): Promise<any> {
        return await this.inventoryService.addItem(prodTitle)
    }
}