import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default async (_root: any, { issueId }: { issueId: number }) => {
  const criteriaRepo = getRepository(Criteria);
  const criterias = await criteriaRepo.find({ where: { issue: { id : issueId } }, relations: ["issue"]});
  //console.log('criterias', criterias, 'issueId', issueId)
  return criterias;
};
