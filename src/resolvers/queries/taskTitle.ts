import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';

export default async (_root: any, { title }: { title:  string }) => {
  console.log('task title')
  const taskRepo = getRepository(Task);
  const task = await taskRepo.findOne({ where: { title } });
  console.log('task', task)
  return task;
};
