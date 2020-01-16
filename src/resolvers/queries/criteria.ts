import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default async (_root: any, { id }: { id: number }) => {
  const taskRepo = getRepository(Criteria);
  const task = await taskRepo.findOne({ where: { id } });
  return task;
};
