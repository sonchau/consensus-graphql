import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';
import { UserInputError } from 'apollo-server-core';

export default async (_root: any, { id }: { id: number }) => {
  const criteriaRepo = getRepository(Criteria);
  const criteria = await criteriaRepo.findOne({ id });

  if (!criteria) {
    throw new UserInputError('criteria_not_found', { errorKey: 'general' });
  }

  await criteriaRepo.delete(id);

  return criteria;
};
