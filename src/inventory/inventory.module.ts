import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { InventoryController } from './inventory.controllers';
import { inventorySchema } from './inventory.model';
import { InventoryService } from './inventory.service';

@Module({
    imports: [ MongooseModule.forFeature([{name: 'inventory', schema: inventorySchema}]) ],
    controllers: [ InventoryController],
    providers: [InventoryService]
})
export class InventoryModule {}
