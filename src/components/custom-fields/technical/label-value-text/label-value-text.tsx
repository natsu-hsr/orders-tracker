import {Flex} from 'antd';
import cn from 'classnames';
import {ReactNode} from 'react';

import s from './label-value-text.module.scss';

type LabelValueTextProps = {
  label: string;
  value: string | ReactNode;
  vertical?: boolean
}
export const LabelValueText = ({
  value,
  label,
  vertical,
}: LabelValueTextProps) => (
  <Flex
    vertical={vertical}
  >
    <div className={cn(s.label, !vertical && s.gap)}>{label}:</div>
    <div className={s.value}>{value}</div>
  </Flex>
)