import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';

export default async (_root: any) => {
  const settingRepo = getRepository(Setting);
  await settingRepo.clear();
  return true;
};
