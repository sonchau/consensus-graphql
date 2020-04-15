import { gql } from 'apollo-server-express';
import { TaskStatus } from '../entities/task';

export default gql`

#Task
  enum TaskStatus {
    ${Object.keys(TaskStatus).join('\n')}
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }
  
#Issue
  type Issue {
    id: Int!
    issue: String!
    user: String!
  }

  input CreateIssueInput {
    issue: String!
    user: String!
  }

  input UpdateIssueInput {
    id: Int!
    issue: String
  }

#Note
  type Note {
    id: Int!
    note: String!
    #issue: Issue
  }

  input CreateNoteInput {
    note: String!
    
  }

  input UpdateNoteInput {
    id: Int! #this is the issue Id, forgeign key of note table
    note: String
  }

#Criteria
  type Criteria {
    id: Int!
    name: String!
    score: Int!
  }

  input CreateCriteriaInput {
    name: String!
    score: Int!
  }

  input UpdateCriteriaInput {
    id: Int!
    name: String!
    score: Int!
  }

#Setting
type Setting {
    id: Int!
    task: String!
    criteria: String!
    score: Int!
    taskId: Int!
    criteriaId: Int!
  }

  input CreateSettingInput {
    task: String!
    criteria: String!
    score: Int!
    taskId: Int!
    criteriaId: Int!
  }

  input UpdateSettingInput {
    id: Int!
    task: String
    criteria: String
    score: Int!
    taskId: Int
    criteriaId: Int
  }

#Query
  type Query {
    hello: String
    #task
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
    taskTitle(title: String!): Task

    #issue
    issue(id: Int!): Issue
    issues: [Issue]!

    #note
    note(id: Int): Note
    notes: [Note]!
    
    #criteria
    criteria(id: Int!): Criteria
    criterias: [Criteria!]!

    #setting
    setting(id: Int!): Setting
    settingByTaskName(task: String!): [Setting!]!
    settings: [Setting!]!
  }

#Mutation

  type Mutation {
    #Task
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    changeStatus(id: Int!, status: TaskStatus!): Task
    deleteTask(id: Int!): Task
    clearTasks: Boolean

    #Issue
    createIssue(input: CreateIssueInput!): Issue
    updateIssue(input: UpdateIssueInput!): Issue
    deleteIssue(id: Int!): Issue
    clearIssues: Boolean

    #Note
    createNote(input: CreateNoteInput!): Note
    updateNote(input: UpdateNoteInput!): Note
    deleteNote(id: Int!): Note
    clearNotes: Boolean

    #Criteria
    createCriteria(input: CreateCriteriaInput!): Criteria
    updateCriteria(input: UpdateCriteriaInput!): Criteria
    deleteCriteria(id: Int!): Criteria
    clearCriterias: Boolean

    #Setting
    createSetting(input: CreateSettingInput!): Setting
    updateSetting(input: UpdateSettingInput!): Setting
    deleteSetting(id: Int!): Setting
    clearSettings: Boolean

    #Reset
    reset: Boolean
  }

#Subscription  
  type Subscription {
    changeIssue: Issue
  }
`;

// Task interface
export interface CreateTaskInput {
  title: string;
}

export interface UpdateTaskInput {
  id: number;
  title: string;
  status: TaskStatus;
}

// Issue Interface
export interface CreateIssueInput {
  issue: string;
  user: string
}

export interface UpdateIssueInput {
  id: number;
  issue: string;
}

// Note Interface
export interface CreateNoteInput {
  note: string;
}

export interface UpdateNoteInput {
  note: string;
  id: number;
}

// Criteria interface
export interface CreateCriteriaInput {
  name: string;
  score: number;
}

export interface UpdateCriteriaInput {
  id: number;
  name: string;
  score: number;
}

// Setting interface
export interface CreateSettingInput {
  task: string;
  criteria: string;
  score: number;
  taskId: number;
  criteriaId: number;
}

export interface UpdateSettingInput {
  id: number;
  task: string;
  criteria: string;
  score: number;
  taskId: number;
  criteriaId: number;
}