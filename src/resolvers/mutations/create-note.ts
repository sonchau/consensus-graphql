import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';
import { CreateNoteInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: CreateNoteInput }
): Promise<Note> => {
  if (!input.note) {
    throw new UserInputError('issue_empty', { errorKey: 'issue' });
  }
  const note = new Note();
  note.note = input.note;
  const noteRepo = getRepository(Note);
  await noteRepo.save(note);
  return note;
};
