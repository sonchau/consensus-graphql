import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  issue: string = '';

}
