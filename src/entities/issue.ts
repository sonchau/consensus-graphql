import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import {Note} from './note';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  issue: string = '';

  @OneToOne(() => Note, note => note.issue)
  note: Note | undefined;

}
