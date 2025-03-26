"use client";

import Select, {type SelectProps } from "antd/es/select";

type CustomSelectProps = Pick<SelectProps, "options"> &
  Partial<Pick<SelectProps, "value" | "defaultValue" | "onChange">>;

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  ...rest
}) => {
  return (
    <Select
      {...rest}
      defaultValue={defaultValue}
      options={options}
      allowClear
    />
  );
};