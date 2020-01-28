import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';
import { UserInputError } from 'apollo-server-core';

export default async (_root: any, { id }: { id: number }) => {
  const issueRepo = getRepository(Issue);
  const issue = await issueRepo.findOne({ id });

  if (!issue) {
    throw new UserInputError('issue_not_found', { errorKey: 'general' });
  }

  await issueRepo.delete(id);

  return issue;
};
