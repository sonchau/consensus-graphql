import { getRepository } from 'typeorm';
import { Note } from '../../entities/note';
import { UpdateNoteInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';
import {Issue} from '../../entities/issue';

export default async (
  _root: any,
  { input }: { input: UpdateNoteInput }
): Promise<Note> => {
  if (!input.note) {
    throw new UserInputError('note_empty', { errorKey: 'note' });
  }
  //console.log('input', input, 'input.issueId', input.id)

  // Step1: Need to find the note base on issue
  let issueRepository = getRepository(Issue);
  let issue = await issueRepository.findOne({ where: { id: input.id }, relations: ["note"] });
  //console.log('issue', issue)

  const returnedNote = issue!.note

  // Step 2: get the note repo and then update it with new value
  // Can not access directly from Note table due to issueId is the foreinge key
  const noteRepo = getRepository(Note);
  const note = await noteRepo.findOne({ where: { id: returnedNote!.id } });

  //console.log('note', note)
  if (!note) {
    throw new UserInputError('note_not_found', { errorKey: 'general' });
  }

  note.note = input.note;
  await noteRepo.save(note);
  return note
};
