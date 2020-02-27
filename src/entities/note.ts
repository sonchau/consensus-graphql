import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Issue} from './issue'

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  note: string = '';

  @OneToOne(() => Issue, issue=> issue.note, { onDelete: 'CASCADE' })
  @JoinColumn()
  issue: Issue | undefined;


}
