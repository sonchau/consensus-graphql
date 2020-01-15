import hello from './queries/hello';
import createTask from './mutations/create-task';
import updateTask from './mutations/update-task';
import changeStatus from './mutations/change-status';
import deleteTask from './mutations/delete-task';
import tasks from './queries/tasks';
import task from './queries/task';
import issue from './queries/issue';
import createIssue from './mutations/create-issue';
import updateIssue from './mutations/update-issue';

export default {
  Query: {
    hello,
    tasks,
    task,
    issue
  },
  Mutation: {
    createTask,
    updateTask,
    changeStatus,
    deleteTask,
    createIssue,
    updateIssue
  }
};
