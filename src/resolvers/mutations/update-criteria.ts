import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';
import { UpdateCriteriaInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: UpdateCriteriaInput }
): Promise<Criteria> => {
  if (!input.name) {
    throw new UserInputError('name_empty', { errorKey: 'name' });
  }
  if (!input.score) {
    throw new UserInputError('score_empty', { errorKey: 'score' });
  }
  const criteriaRepo = getRepository(Criteria);
  const criteria = await criteriaRepo.findOne({ where: { id: input.id } });

  if (!criteria) {
    throw new UserInputError('criteria_not_found', { errorKey: 'general' });
  }

  criteria.name = input.name;
  criteria.score = input.score;

  await criteriaRepo.save(criteria);
  return criteria;
};
