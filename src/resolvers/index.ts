import hello from './queries/hello';
import createTask from './mutations/create-task';
import updateTask from './mutations/update-task';
import changeStatus from './mutations/change-status';
import deleteTask from './mutations/delete-task';
import tasks from './queries/tasks';
import task from './queries/task';
import taskTitle from './queries/taskTitle';
import issue from './queries/issue';
import criteria from './queries/criteria';
import criterias from './queries/criterias';
import createIssue from './mutations/create-issue';
import updateIssue from './mutations/update-issue';
import createCriteria from './mutations/create-criteria';
import updateCriteria from './mutations/update-criteria';
import deleteCriteria from './mutations/delete-criteria';

export default {
  Query: {
    hello,
    tasks,
    task,
    taskTitle,
    issue,
    criteria,
    criterias
  },
  Mutation: {
    createTask,
    updateTask,
    changeStatus,
    deleteTask,
    createIssue,
    updateIssue,
    createCriteria,
    updateCriteria,
    deleteCriteria
  }
};
