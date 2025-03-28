import { TableProps } from "antd/es/table";

export type CustomTableCommonProps<T> = (Pick<TableProps<T>, 'columns' | 'dataSource'>) & {
  rowKey?: keyof T;
}