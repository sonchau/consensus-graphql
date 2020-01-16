import { getRepository } from 'typeorm';
import { Criteria } from '../../entities/criteria';

export default (_root: any) => {
  const criteriaRepo = getRepository(Criteria);
  const criterias = criteriaRepo.find();
  return criterias;
};
