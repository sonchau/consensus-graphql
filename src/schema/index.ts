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
  }

  input CreateIssue {
    issue: String!
  }

  input UpdateIssue {
    id: Int!
    issue: String
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

#Query
  type Query {
    hello: String
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
    taskTitle(title: String!): Task
    issue(id: Int!): Issue
    
    criteria(id: Int!): Criteria
    criterias: [Criteria!]!
  }

#Mutation

  type Mutation {
    #Task
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    changeStatus(id: Int!, status: TaskStatus!): Task
    deleteTask(id: Int!): Task
    
    #Issue
    createIssue(input: CreateIssue!): Issue
    updateIssue(input: UpdateIssue!): Issue

    #Criteria
    createCriteria(input: CreateCriteriaInput!): Criteria
    updateCriteria(input: UpdateCriteriaInput!): Criteria
    deleteCriteria(id: Int!): Criteria
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
export interface CreateIssue {
  issue: string;
}

export interface UpdateIssue {
  id: number;
  issue: string;
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