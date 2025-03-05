import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './db/db.config';

@Module({
  imports: [SongsModule, SequelizeModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
