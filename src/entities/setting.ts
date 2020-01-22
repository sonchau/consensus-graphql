import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text'})
  task: string = '';

  @Column({ type: 'text'})
  criteria: string = '';

  @Column({ type: 'int' })
  score: number | undefined;
}
