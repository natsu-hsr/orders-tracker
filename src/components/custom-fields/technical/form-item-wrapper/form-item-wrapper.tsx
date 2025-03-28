import Flex from "antd/es/flex";
import cn from 'classnames';
import {ReactNode} from "react";

import s from './form-item-wrapper.module.scss';

type FormItemWrapperProps = {
  className?: cn.Argument;
  children: ReactNode;
}
export const FormItemWrapper = ({children, className}: FormItemWrapperProps) => (
  <Flex
    className={cn(s['border'], className)}
    vertical
    align="start"
    gap={2}
  >
    {children}
  </Flex>
)