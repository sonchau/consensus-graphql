import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';
import { Issue } from '../../entities/issue';
import { Setting } from '../../entities/setting';
import { Criteria } from '../../entities/criteria';
import { Note } from '../../entities/note';

export default async (_root: any) => {
  // clear Task
  const taskRepo = getRepository(Task);
  await taskRepo.clear();

  // clear Issue
  const issueRepo = getRepository(Issue);
  await issueRepo.clear();

  // clear Setting
  const settingRepo = getRepository(Setting);
  await settingRepo.clear();

  // clear Criteria
  const criteriaRepo = getRepository(Criteria);
  await criteriaRepo.clear();
  
  // clear Note
  const noteRepo = getRepository(Note);
  await noteRepo.clear();

  return true;
};

