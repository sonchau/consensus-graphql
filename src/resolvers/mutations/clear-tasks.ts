import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';

export default async (_root: any) => {
  const taskRepo = getRepository(Task);
  await taskRepo.clear();
  return true;
};
