'use client'

import {Input} from "antd";
import {TOrderDetails} from "@/store/slices/orders"
import {FormItemInputProps} from "../../custom-fields.types";

type CostFieldProps = {
  currency: TOrderDetails['itemsCostCurrency'];
  cost: TOrderDetails['deliveryRecipientCost']
} & FormItemInputProps;
export const CostField = ({
  currency,
  cost,
  ...rest
}: CostFieldProps) => {
  const {
    value,
    vat_sum,
  } = cost;

  return (
    <Input
      {...rest}
      value={`${value} ${currency}, в том числе НДС ${vat_sum} ${currency}`}
    />
  )
}