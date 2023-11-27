import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScSfpIdols } from '../../entities/ScSfpIdols';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScSfpIdols])],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
