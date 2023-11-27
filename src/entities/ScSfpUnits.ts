import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScSfpIdols } from './ScSfpIdols';

@Index('UnitID', ['unitId'], { unique: true })
@Entity('SCSFP_Units', { schema: 'shinycolors_sfp' })
export class ScSfpUnits {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UnitID' })
  unitId: number;

  @Column('text', { name: 'UnitName' })
  unitName: string;

  @Column('text', { name: 'UnitHiragana' })
  unitHiragana: string;

  @Column('text', { name: 'Color1' })
  color1: string;

  @Column('text', { name: 'Color2' })
  color2: string;

  @Column('text', { name: 'UnitPV' })
  unitPv: string;

  @OneToMany(() => ScSfpIdols, (idols) => idols.unit)
  idols: ScSfpIdols[];
}
