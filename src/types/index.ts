export interface ITask {
  title: string;
  dueDate: string;
  status: boolean;
}

export type ITaskKeys = keyof ITask;

export interface ITable {
  title: string;
  subheading?: string;
  head: string[];
  data: ITask[];
}
