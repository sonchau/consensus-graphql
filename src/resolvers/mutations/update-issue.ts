import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';
import { UpdateIssueInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';
import pubsub from '../../subscription/pubsub';

export default async (
  _root: any,
  { input }: { input: UpdateIssueInput }
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
  pubsub.publish("issueTitleChanged", {
    changeIssue: issue
  });

  await issueRepo.save(issue);
  return issue;
};
