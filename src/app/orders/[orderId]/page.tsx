'use client'

import {LeftCircleTwoTone} from "@ant-design/icons";
import {Alert, Button, Row, Skeleton, Space} from "antd";
import Title from "antd/es/typography/Title";
import {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";

import {findOrderDetailsById, TOrderDetails } from "@/store/slices/orders";
import {OrderDetailsForm} from "@/components/order-details-form";

import s from './page.module.scss';

export const OrderDetails = () => {
  const router = useRouter();
  const {orderId} = useParams();

  const [orderDetails, setOrderDetails] = useState<TOrderDetails | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Для хранения ошибки

  // имитация загрузки данных с сервера
  useEffect(() => {
    if (!orderId) {
      setError("ID заказа не указан");
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      try {
        const searchedOrder = findOrderDetailsById({orderId: orderId as string});
        if (searchedOrder) {
          setOrderDetails(searchedOrder);
        } else {
          setError("Заказ не найден");
        }
      } catch (err) {
        console.error('Ошибка получаения заказа', err);
        setError("Произошла ошибка при получении деталей заказа");
      } finally {
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [orderId]);
  
  return (
    <Space
      className={s.wrapper}
      direction="vertical"
    >
      <Row
        className={s.title}
        align="middle"
        justify="space-between"
      >
        <Title level={2}>
          Информация о заказе {orderId}
        </Title>
        <Button
          type="primary"
          icon={<LeftCircleTwoTone />}
          onClick={() => router.back()}
        >
          Назад
        </Button>
      </Row>
      
      <Skeleton
        loading={isLoading}
        active={isLoading}
      >
        {
          orderDetails ? (
            <OrderDetailsForm
              mode='view'
              order={orderDetails}
            />
          ) : (
            <Alert
              type="error"
              description={`Произошла ошибка при получении деталей заказа${error && ` "${error}"`}`}
            />
          )
        }
      </Skeleton>
    </Space>
  )
}

export default OrderDetails