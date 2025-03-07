import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './db/db.config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SongsModule, SequelizeModule.forRoot(databaseConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs')
    //consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method: RequestMethod.POST})
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController)
  }
}
