import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import {Note} from './note';
import {Criteria} from './criteria';

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

  @OneToMany(() => Criteria, criteria => criteria.issue, { cascade: true })
  criterias: Criteria[] | undefined;
}