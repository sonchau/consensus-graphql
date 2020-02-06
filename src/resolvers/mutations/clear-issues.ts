import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';

export default async (_root: any) => {
  const issueRepo = getRepository(Issue);
  await issueRepo.clear();
  return true;
};
