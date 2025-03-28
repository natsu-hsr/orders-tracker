'use client'

import {Input} from "antd";
import {FormItemInputProps} from "../../custom-fields.types";

type TBoolFieldTranscript = {
  onTrue: string;
  onFalse: string;
}
type BoolFieldProps = FormItemInputProps & {
  transcript?: TBoolFieldTranscript;
}
export const BoolField = ({
  value,
  transcript = {
    onTrue: 'Да',
    onFalse: 'Нет',
  },
  ...rest
}: BoolFieldProps) => (
  <Input
    value={value ? transcript.onTrue : transcript.onFalse}
    {...rest}
  />
)