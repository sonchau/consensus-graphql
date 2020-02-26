import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';

export default (_root: any) => {
  const noteRepo = getRepository(Note);
  const notes = noteRepo.find();
  return notes;
};
