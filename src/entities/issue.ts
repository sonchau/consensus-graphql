import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import {Note} from './note';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  issue: string = '';

  @Column({ type: 'text'})
  user: string = '';

  @OneToOne(() => Note, note => note.issue, { onDelete: 'CASCADE' })
  note: Note | undefined;
}