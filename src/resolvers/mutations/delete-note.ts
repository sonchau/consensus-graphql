import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';
import { UserInputError } from 'apollo-server-core';

export default async (_root: any, { id }: { id: number }) => {
  const noteRepo = getRepository(Note);
  const note = await noteRepo.findOne({ id });

  if (!note) {
    throw new UserInputError('note_not_found', { errorKey: 'general' });
  }

  await noteRepo.delete(id);

  return note;
};
