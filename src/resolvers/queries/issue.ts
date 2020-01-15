import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';

export default async (_root: any, { id }: { id: number }) => {
  const taskRepo = getRepository(Issue);
  const task = await taskRepo.findOne({ where: { id } });
  return task;
};
