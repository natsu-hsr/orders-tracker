"use client";

import Title from "antd/es/typography/Title";

import {CustomTableContainer} from "@/components/custom-table";
import {ordersMockColumns} from "@/mocks/orders/columns";
import {ordersFilters} from "@/mocks/orders/filters";
import {selectOrdersData, TOrder} from "@/store/slices/orders";
import {useAppSelector} from "@/store/config/hooks";

export default function Orders() {
  const ordersData = useAppSelector(selectOrdersData);

  return (
    <>
      <Title level={2}>Таблица заказов</Title>
      <CustomTableContainer<TOrder>
        rowKey="orderId"
        filters={ordersFilters}
        columns={ordersMockColumns}
        dataSource={ordersData}
      />
    </>
  );
}