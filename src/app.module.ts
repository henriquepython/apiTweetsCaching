import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { DatabaseService } from './database/database.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path/posix';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    TweetsModule,
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
