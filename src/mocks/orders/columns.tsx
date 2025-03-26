import {TableProps} from "antd";
import { TOrder } from "@/store/slices/orders";
import Link from "next/link";

export const ordersMockColumns: TableProps<TOrder>['columns'] = [
  {
    dataIndex: 'orderId',
    key: 'orderId',
    title: 'ID доставки',
  },
  {
    dataIndex: 'status',
    key: 'status',
    title: 'Статус',
  },
  {
    dataIndex: 'createdDate',
    key: 'createdDate',
    title: 'Дата создания',
  },
  {
    dataIndex: 'shippingAddress',
    key: 'shippingAddress',
    title: 'Адрес отправки',
  },
  {
    dataIndex: 'deliveryAddress',
    key: 'deliveryAddress',
    title: 'Адрес доставки',
  },
  {
    dataIndex: 'about',
    key: 'about',
    title: '',
    render: (_, record: TOrder) => (
      <Link
        href={`/orders/${record.orderId}`}
      >Подробнее
      </Link>
    )
  },
];
