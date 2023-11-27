import {
  Controller,
  Get,
  Headers,
  NotFoundException,
  Query,
} from '@nestjs/common';

import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private infoService: InfoService) {}

  @Get('idolList')
  async getIdolList() {
    return await this.infoService.getIdollist();
  }

  @Get('idolInfo')
  async getIdolInfo(
    @Query('idolId') idolId: number,
    @Headers('CF-IPCountry') country: string,
    @Headers('X-Forwarded-For') forwarder: string,
  ) {
    if (
      isNaN(idolId) ||
      idolId < 1 ||
      (idolId > 28 && idolId < 801) ||
      idolId > 803
    ) {
      throw new NotFoundException(`Idol Id ${idolId} not found`);
    }
    console.log(`${country} user accessing iInfo ${idolId}`);
    console.log(`Forwarded by ${forwarder}`);

    return await this.infoService.getIdolInfo(idolId);
  }

  @Get('unitInfo')
  async getUnitInfo() {
    return this.infoService.getUnitInfo();
  }
}
