"use client";

import CustomTableContainer from "@/components/custom-table/custom-table-container";
import { ordersMockColumns } from "@/mocks/orders/columns";
import { ordersFilters } from "@/mocks/orders/filters";
import { selectOrdersData, TOrder } from "@/store/slices/orders";
import { useAppSelector } from "@/store/config/hooks";


export default function Orders() {
  const ordersData = useAppSelector(selectOrdersData);

  return (
    <CustomTableContainer<TOrder>
      filters={ordersFilters}
      columns={ordersMockColumns}
      dataSource={ordersData}
    />
  );
}