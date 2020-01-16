import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Criteria {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  name: string = '';

  @Column({ type: 'int' })
  score: number | undefined;
}
