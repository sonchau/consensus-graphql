import hello from './queries/hello';
// Task
import createTask from './mutations/create-task';
import updateTask from './mutations/update-task';
import changeStatus from './mutations/change-status';
import deleteTask from './mutations/delete-task';
import tasks from './queries/tasks';
import task from './queries/task';
import taskTitle from './queries/taskTitle';
import clearTasks from './mutations/clear-tasks';

// Issue
import issue from './queries/issue';
import issues from './queries/issues';
import createIssue from './mutations/create-issue';
import updateIssue from './mutations/update-issue';
import deleteIssue from './mutations/delete-issue';
import clearIssues from './mutations/clear-issues';
//import changeIssue from './subscription/change-issue';
import pubsub from '../subscription/pubsub';

// Criteria
import criteria from './queries/criteria';
import criterias from './queries/criterias';
import createCriteria from './mutations/create-criteria';
import updateCriteria from './mutations/update-criteria';
import deleteCriteria from './mutations/delete-criteria';
import clearCriterias from './mutations/clear-criterias';


// Setting
import setting from './queries/setting';
import settingByTaskName from './queries/settingByTaskName';
import settings from './queries/settings';
import createSetting from './mutations/create-setting';
import updateSetting from './mutations/update-setting';
import deleteSetting from './mutations/delete-setting';
import clearSettings from './mutations/clear-settings';

// Note
import note from './queries/note';
import notes from './queries/notes';
import createNote from './mutations/create-note';
import updateNote from './mutations/update-note';
import deleteNote from './mutations/delete-note';
import clearNotes from './mutations/clear-notes';


// Reset
import reset from './mutations/reset';

export default {
  Query: {
    hello,
    tasks,
    task,
    taskTitle,
    issue,
    issues,
    note,
    notes,
    criteria,
    criterias,
    setting,
    settings,
    settingByTaskName
  },
  Mutation: {
    createTask,
    updateTask,
    changeStatus,
    deleteTask,
    clearTasks,
    createIssue,
    updateIssue,
    deleteIssue,
    clearIssues,
    createCriteria,
    updateCriteria,
    deleteCriteria,
    clearCriterias,
    createSetting,
    updateSetting,
    deleteSetting,
    clearSettings,
    createNote,
    updateNote,
    deleteNote,
    clearNotes,
    reset
  },
  Subscription: {
    changeIssue: {
      subscribe: () => pubsub.asyncIterator(["issueTitleChanged"]),
    }
  }
};
