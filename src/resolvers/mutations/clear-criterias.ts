import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default async (_root: any) => {
  const criteriaRepo = getRepository(Criteria);
  await criteriaRepo.clear();
  return true;
};
