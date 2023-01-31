export interface ITask {
  title: string;
  dueDate: string;
  status: boolean;
}

export type ITaskKeys = keyof ITask;

export interface ITableConfig {
  title: string;
  subheading?: string;
  head: string[];
  data: ITask[];
}

export interface ITable {
  config: ITableConfig;
}

export interface ILink {
  text: string;
  path: string;
}
