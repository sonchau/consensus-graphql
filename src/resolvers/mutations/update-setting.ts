import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';
import { UpdateSettingInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: UpdateSettingInput }
): Promise<Setting> => {

  if (!input.score) {
    throw new UserInputError('score_empty', { errorKey: 'score' });
  }
  const settingRepo = getRepository(Setting);
  const setting = await settingRepo.findOne({ where: { id: input.id } });

  if (!setting) {
    throw new UserInputError('setting_not_found', { errorKey: 'general' });
  }

  if(input.task) {
    setting.task = input.task;
  }
  
  if(input.criteria) {
    setting.criteria = input.criteria;
  }
  
  setting.score = input.score;

  await settingRepo.save(setting);
  return setting;
};
