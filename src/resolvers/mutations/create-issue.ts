import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';
import { CreateIssueInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: CreateIssueInput }
): Promise<Issue> => {
  if (!input.issue) {
    throw new UserInputError('issue_empty', { errorKey: 'issue' });
  }
  const issue = new Issue();
  issue.issue = input.issue;
  const issueRepo = getRepository(Issue);
  await issueRepo.save(issue);
  return issue;
};
