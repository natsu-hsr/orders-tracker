import { SelectProps } from "antd";
import { TFilters } from "@/components/filters-form";

export const ordersFilters: TFilters = [
  {
    key: 'orderId',
    label: 'ID доставки',
    type: 'TEXT',
  },
  {
    key: 'status',
    label: 'Статус',
    type: 'STATUS_SELECT',
  },
];

export const statusFilters: SelectProps['options'] = [
  {label: 'Новый', value: 'Новый'},
  {label: 'Завершен', value: 'Завершен'},
];
