import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Issue} from './issue'

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  note: string = '';

  // @OneToOne(type => Issue, issue=> issue.id)
  // @JoinColumn()
  // issueId: number | undefined;

  @OneToOne(type => Issue, issue=> issue.note)
  @JoinColumn()
  issue: Issue | undefined;

  //working
  // @OneToOne(type => Issue)
  // @JoinColumn()
  // issue: Issue | undefined


}
