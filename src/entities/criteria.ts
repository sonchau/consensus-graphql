import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Issue} from './issue'

@Entity()
export class Criteria {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  name: string = '';

  @Column({ type: 'int' })
  score: number | undefined;
  
  @ManyToOne(() => Issue, issue=> issue.criterias)
  issue: Issue | undefined;

}
