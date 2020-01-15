import { gql } from 'apollo-server-express';
import { TaskStatus } from '../entities/task';

export default gql`
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

  type Query {
    hello: String
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
    issue(id: Int!): Issue
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    changeStatus(id: Int!, status: TaskStatus!): Task
    deleteTask(id: Int!): Task
    createIssue(input: CreateIssue!): Issue
    updateIssue(input: UpdateIssue!): Issue
  }
`;

export interface CreateTaskInput {
  title: string;
}

export interface UpdateTaskInput {
  id: number;
  title: string;
  status: TaskStatus;
}

export interface CreateIssue {
  issue: string;
}

export interface UpdateIssue {
  id: number;
  issue: string;
}

