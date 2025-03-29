import {CheckCircleTwoTone, CloseCircleTwoTone} from "@ant-design/icons"
import {ReactNode} from "react";

import {TOrderSender} from "@/store/slices/orders"
import {FormItemWrapper} from "../../technical/form-item-wrapper/form-item-wrapper";
import {LabelValueText} from "../../technical/label-value-text/label-value-text";

type SenderFieldProps = {
  value?: Partial<TOrderSender>
  children?: ReactNode;
}
export const SenderField = ({
  value,
  children,
}: SenderFieldProps) => {
  const {
    company,
    name,
    passportRequirementsSatisfied,
  } = value ?? {};

  return (
    <FormItemWrapper>
      <LabelValueText label="Компания" value={company ?? '-'}/>
      <LabelValueText label="Ответственный" value={name ?? '-'}/>
      <LabelValueText
        label="Статус верификации"
        value={passportRequirementsSatisfied ? (
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
          />
        ) : (
          <CloseCircleTwoTone
            twoToneColor="#eb2f96"
          />
        )}
      />
      {children}
    </FormItemWrapper>
  );
}