import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
@Module({
  imports: [
    MongooseModule.forRoot(process?.env?.DB_URL),
    ApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
