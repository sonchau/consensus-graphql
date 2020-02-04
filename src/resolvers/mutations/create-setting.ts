import { getRepository } from 'typeorm';
import { Setting } from '../../entities/setting';
import { CreateSettingInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: CreateSettingInput }
): Promise<Setting> => {
  if (!input.task) {
    throw new UserInputError('task_empty', { errorKey: 'task' });
  }
  if (!input.criteria) {
    throw new UserInputError('criteria_empty', { errorKey: 'criteria' });
  }
  const setting = new Setting();
  setting.task = input.task;
  setting.criteria = input.criteria;
  setting.score = input.score;
  setting.taskId = input.taskId;
  setting.criteriaId = input.criteriaId;

  const settingRepo = getRepository(Setting);
  await settingRepo.save(setting);
  return setting;
};
