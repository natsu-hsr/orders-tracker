import {InputProps} from "antd/es/input";

export type FormItemInputProps = Partial<Pick<InputProps, 'value' | 'onChange' | 'disabled'>>