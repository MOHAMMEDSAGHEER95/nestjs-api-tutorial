import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule,UserModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
