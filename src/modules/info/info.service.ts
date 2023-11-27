import { Injectable } from '@nestjs/common';
import { DataSource, Not } from 'typeorm';

import { ScSfpIdols } from '../../entities/ScSfpIdols';
import { ScSfpUnits } from '../../entities/ScSfpUnits';

@Injectable()
export class InfoService {
  constructor(private dataSource: DataSource) {}

  async getIdollist(): Promise<ScSfpIdols[]> {
    return this.dataSource.getRepository(ScSfpIdols).find({
      select: ['idolId', 'idolName'],
      where: { idolId: Not(0) },
      order: { idolId: 'ASC' },
    });
  }

  async getIdolInfo(id: number): Promise<ScSfpIdols> {
    return this.dataSource
      .getRepository(ScSfpIdols)
      .createQueryBuilder('idol')
      .leftJoinAndSelect('idol.unit', 'unit')
      .where('idol.idolId = :id', { id: id })
      .getOne();
  }

  async getUnitInfo(): Promise<ScSfpUnits[]> {
    return this.dataSource
      .getRepository(ScSfpUnits)
      .createQueryBuilder('unit')
      .leftJoinAndSelect('unit.idols', 'idol')
      .where('unit.unitId != :id1', { id1: 0 })
      .orderBy('unit.unitId', 'ASC')
      .addOrderBy('idol.idolId', 'ASC')
      .getMany();
  }
}
