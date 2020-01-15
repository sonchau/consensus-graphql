import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';
import { UpdateIssue } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: UpdateIssue }
): Promise<Issue> => {
  if (!input.issue) {
    throw new UserInputError('issue_empty', { errorKey: 'issue' });
  }

  const issueRepo = getRepository(Issue);
  const issue = await issueRepo.findOne({ where: { id: input.id } });

  if (!issue) {
    throw new UserInputError('issue_not_found', { errorKey: 'general' });
  }

  issue.issue = input.issue;
  await issueRepo.save(issue);
  return issue;
};
