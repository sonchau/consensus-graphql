import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';

export default async (_root: any) => {
  const noteRepo = getRepository(Note);
  await noteRepo.clear();
  return true;
};
