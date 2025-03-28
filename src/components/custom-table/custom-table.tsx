'use client'

import Table from "antd/es/table";
import {CustomTableCommonProps} from "./custom-table.types";

type CustomTableProps<T> = CustomTableCommonProps<T>;

export const CustomTable = <T,>(props: CustomTableProps<T>) => {
  return (
    <Table<T>
      rowKey={props.rowKey ?? 'id'}
      scroll={{
        scrollToFirstRowOnChange: true,
        x: 'max-content',
      }}
      bordered
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '25', '50'],
      }}
      {...props}
    />
  )
}