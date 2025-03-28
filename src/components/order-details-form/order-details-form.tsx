'use client'

import Form from "antd/es/form";
import {useForm} from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input";
import TextArea from "antd/es/input/TextArea";
import {Col, Row} from "antd";
import cn from 'classnames';

import {TOrderDetails} from "../../store/slices/orders"
import {
  BoolField,
  CostField,
  SenderField,
  RecipientField,
  LocationField,
  PackagesField,
} from "../custom-fields";

import s from './order-details-form.module.scss';

type OrderDetailsFormProps = {
  mode: 'view' | 'edit';
  order: TOrderDetails;
}
export const OrderDetailsForm = ({
  mode,
  order
}: OrderDetailsFormProps) => {
  const [form] = useForm<TOrderDetails>();

  const isDisabled = mode === 'view';
  
  return (
    <Form
      className={cn(s.wrapper, s[`wrapper_${mode}-mode`])}
      form={form}
      layout="vertical"
      initialValues={order}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <FormItem name="orderId" label="Идентификатор заказа">
            <Input disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="isReturn" label="Подлежит возврату">
            <BoolField disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="cdekNumber" label="Номер заказа">
            <Input disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem label="Стоимость">
            <CostField currency={order.itemsCostCurrency} cost={order.deliveryRecipientCost} disabled={isDisabled} />
          </FormItem>
        </Col>


        <Col xs={24}>
          <FormItem name="comment" label="Комментарий">
            <TextArea disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} lg={8}>
          <FormItem name="sellerName" label="Продавец" initialValue={order?.seller?.name}>
            <Input disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <FormItem name="shipmentPoint" label="Пункт назначения">
            <Input disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <FormItem name="deliveryPoint" label="Пункт отправки">
            <Input disabled={isDisabled} />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="sender" label="Отправитель">
            <SenderField />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="recipient" label="Получатель">
            <RecipientField />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="fromLocation" label="Адрес отправки">
            <LocationField />
          </FormItem>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <FormItem name="toLocation" label="Адрес получателя">
            <LocationField />
          </FormItem>
        </Col>

        <Col xs={24}>
          <FormItem name="packages" label="Товары">
            <PackagesField />
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}