import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';
import { UpdateNoteInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';
//import {Issue} from '../../entities/issue';

export default async (
  _root: any,
  { input }: { input: UpdateNoteInput }
): Promise<Note> => {
  if (!input.note) {
    throw new UserInputError('note_empty', { errorKey: 'note' });
  }
  console.log('input', input, 'input.issueId', input.issueId)
  const noteRepo = getRepository(Note);
  const note = await noteRepo.findOne({ where: { issueId: input.issueId } });

  if (!note) {
    throw new UserInputError('note_not_found', { errorKey: 'general' });
  }

  note.note = input.note;
  await noteRepo.save(note);

  // let issueRepository = getRepository(Issue);
  // let issue = await issueRepository.findOne({ where: { id: input.id }, relations: ["note"] });
  // console.log('issue', issue)

  return note

};
