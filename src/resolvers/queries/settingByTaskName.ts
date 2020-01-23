import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';

export default async (_root: any, { task }: { task: string }) => {
  const settingRepo = getRepository(Setting);
  const settings = await settingRepo.find({ where: { task } });
  return settings;
};
