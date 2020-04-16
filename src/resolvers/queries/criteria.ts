import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default async (_root: any, { id }: { id: number }) => {
  const criteriaRepo = getRepository(Criteria);
  const criteria = await criteriaRepo.findOne({ where: { id }, relations: ["issue"] });
  return criteria;
};
