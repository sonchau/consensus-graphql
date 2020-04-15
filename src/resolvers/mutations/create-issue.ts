import { getRepository } from 'typeorm';
import { Issue } from '../../entities/issue';
import { CreateIssueInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';
import {Note} from '../../entities/note';

export default async (
  _root: any,
  { input }: { input: CreateIssueInput }
): Promise<Issue> => {
  if (!input.issue) {
    throw new UserInputError('issue_empty', { errorKey: 'issue' });
  }
  const issue = new Issue();
  issue.issue = input.issue;
  issue.user = input.user

  const issueRepo = getRepository(Issue);
  await issueRepo.save(issue);
  //console.log('issue Repo', savedIssueRepo)

  const note = new Note()
  note.note = ''
  note.issue = issue //this is the connection of note and issue

  const noteRepo = getRepository(Note);
  await noteRepo.save(note);

  return issue;
};
