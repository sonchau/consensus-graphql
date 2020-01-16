import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';
import { CreateCriteriaInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: CreateCriteriaInput }
): Promise<Criteria> => {
  if (!input.name) {
    throw new UserInputError('name_empty', { errorKey: 'name' });
  }
  const criteria = new Criteria();
  criteria.name = input.name;
  criteria.score = input.score;
  const criteriaRepo = getRepository(Criteria);
  await criteriaRepo.save(criteria);
  return criteria;
};
