import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';

export default async (_root: any, { id }: { id: number }) => {
  const issueRepo = getRepository(Issue);
  const issue = await issueRepo.findOne({ where: { id } });
  return issue;
};
