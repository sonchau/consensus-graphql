import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';
import { UserInputError } from 'apollo-server-core';

export default async (_root: any, { id }: { id: number }) => {
  const settingRepo = getRepository(Setting);
  const setting = await settingRepo.findOne({ id });

  if (!setting) {
    throw new UserInputError('setting_not_found', { errorKey: 'general' });
  }

  await settingRepo.delete(id);

  return setting;
};
