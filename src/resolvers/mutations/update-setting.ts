import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';
import { UpdateSettingInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: UpdateSettingInput }
): Promise<Setting> => {
  if (!input.task) {
    throw new UserInputError('taskempty', { errorKey: 'task' });
  }
  if (!input.criteria) {
    throw new UserInputError('criteria_empty', { errorKey: 'criteria' });
  }
  if (!input.score) {
    throw new UserInputError('score_empty', { errorKey: 'score' });
  }
  const settingRepo = getRepository(Setting);
  const setting = await settingRepo.findOne({ where: { id: input.id } });

  if (!setting) {
    throw new UserInputError('setting_not_found', { errorKey: 'general' });
  }

  setting.task = input.task;
  setting.criteria = input.criteria;
  setting.score = input.score;

  await settingRepo.save(setting);
  return setting;
};
