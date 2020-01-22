import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';

export default async (_root: any, { id }: { id: number }) => {
  const taskRepo = getRepository(Setting);
  const task = await taskRepo.findOne({ where: { id } });
  return task;
};
