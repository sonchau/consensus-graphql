import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';

export default async (_root: any, { issueId }: { issueId: number }) => {
  const taskRepo = getRepository(Note);
  const task = await taskRepo.findOne({ where: { issueId } });
  return task;
};
