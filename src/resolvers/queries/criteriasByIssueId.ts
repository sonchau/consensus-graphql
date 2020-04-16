import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default async (_root: any, { issueId }: { issueId: number }) => {
  const criteriaRepo = getRepository(Criteria);
  const criterias = await criteriaRepo.find({ issue: { id : issueId } });
  //console.log('criterias', criterias, 'issueId', issueId)
  return criterias;
};
