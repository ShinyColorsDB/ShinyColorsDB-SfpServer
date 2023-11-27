import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
//import { ScheduleModule } from '@nestjs/schedule';
//import { DataSource } from 'typeorm';

/*Entities*/
import { ScSfpIdols } from './entities/ScSfpIdols';
import { ScSfpUnits } from './entities/ScSfpUnits';

/*Modules*/
import { InfoModule } from './modules/info/info.module';

@Module({
  imports: [
    InfoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env?.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [ScSfpIdols, ScSfpUnits],
      logging: false,
      synchronize: process.env.ENV_PRODUCTION != 'true',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
