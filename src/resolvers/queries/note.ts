import { getRepository } from 'typeorm';
import {Issue} from '../../entities/issue';

//NOTE: this id is the issueId from issue table
export default async (_root: any, { id }: { id: number }) => {
  //console.log('issueId', id)
  let issueRepository = getRepository(Issue);
  let issue = await issueRepository.findOne({ where: { id: id }, relations: ["note"] });
  //console.log('issue', issue, 'note', issue!.note)
  const returnedNote = issue!.note

  return returnedNote;
};
