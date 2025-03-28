"use client";

import {Button, Drawer, Empty, Row} from "antd";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import {useForm} from "antd/es/form/Form";
import {useState} from "react";
import isEmpty from "lodash/isEmpty";

import {useAppDispatch, useAppSelector} from "@/store/config/hooks";
import {ordersSliceActions, selectOrdersAppliedFilters} from "@/store/slices/orders";
import {TOrderFilters} from "@/store/slices/orders/orders-slice-types";
import {TFilters} from "./filters-form.types";
import {resolveFilterItemsByType} from "./filters-form-resolver";

import s from "./filters-form.module.scss";

export type FiltersFormProps = {
  filters: Readonly<TFilters>;
};

export const FiltersForm = ({filters}: FiltersFormProps) => {
  const dispatch = useAppDispatch();
  const [form] = useForm<TOrderFilters>();
  const [open, setOpen] = useState(false);

  const appliedFilters = useAppSelector(selectOrdersAppliedFilters);

  const showDrawer = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const applyFilters = (values: TOrderFilters) => {
    dispatch(ordersSliceActions.setFilters(values));
    handleClose();
  };

  const handleClear = () => {
    dispatch(ordersSliceActions.resetFilters());
    handleClose();
  };

  if (!filters?.length) {
    return <Empty description="Список пуст" />;
  }

  return (
    <>
      <Button
        type={isEmpty(appliedFilters) ? "primary" : "default"}
        onClick={showDrawer}
      >
        {isEmpty(appliedFilters) ? "Фильтры" : "Изменить фильтры"}
      </Button>
      <Drawer title="Список фильтров" onClose={handleClose} open={open}>
        <Row className={s.actions} justify="space-between">
          <Button type="primary" onClick={() => form.submit()}>
            Применить
          </Button>
          <Button onClick={handleClear}>Очистить</Button>
        </Row>
        <Form
          form={form}
          layout="vertical"
          onFinish={applyFilters}
          initialValues={appliedFilters}
        >
          {filters.map(f => (
            <FormItem key={f.key} name={f.key} label={f.label}>
              {resolveFilterItemsByType({ type: f.type })}
            </FormItem>
          ))}
        </Form>
      </Drawer>
    </>
  );
}