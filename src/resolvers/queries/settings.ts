import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';

export default (_root: any) => {
  const settingRepo = getRepository(Setting);
  const settings = settingRepo.find();
  return settings;
};
