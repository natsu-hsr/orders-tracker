"use client";

import {Input, InputNumber} from "antd";
import {CustomSelect} from "@/components/custom-fields/fields/custom-select/custom-select";
import {statusFilters} from "@/mocks/orders/filters";
import {TFilter} from "./filters-form.types";

type FiltersFormResolverArgs = {
  type: TFilter["type"];
};

export const resolveFilterItemsByType = ({type}: FiltersFormResolverArgs) => {
  switch (type) {
    case "TEXT":
      return <Input />;
    case "NUMBER":
      return <InputNumber />;
    case "STATUS_SELECT":
      return <CustomSelect options={statusFilters} />;
    default:
      return <Input />;
  }
};