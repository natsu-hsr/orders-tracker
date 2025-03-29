'use client'

import {Row} from 'antd'
import {TFilters, FiltersForm} from "@/components/filters-form";
import {CustomTable} from "./custom-table"
import {CustomTableCommonProps} from "./custom-table.types";

import s from './custom-table-container.module.scss';

export type CustomTableContainerProps<T> = CustomTableCommonProps<T> & {
  filters?: Readonly<TFilters>;
}
export const CustomTableContainer = <T,>({
  filters,
  ...tableProps
}: CustomTableContainerProps<T>) => {
  return (
    <div>
      {filters?.length && (
        <Row
          className={s.actions}
          justify="end"
        >
          <FiltersForm filters={filters} />
        </Row>
      )}
      <CustomTable<T>
        {...tableProps}
      />
    </div>
  )
}