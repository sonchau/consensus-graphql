import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';

export default (_root: any) => {
  const issueRepo = getRepository(Issue);
  const issues = issueRepo.find();
  return issues;
};
