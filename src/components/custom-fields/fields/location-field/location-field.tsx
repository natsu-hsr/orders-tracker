import {TOrderLocation} from "../../../../store/slices/orders"

import {LabelValueText} from "../../technical/label-value-text/label-value-text";
import {FormItemWrapper} from "../../technical/form-item-wrapper/form-item-wrapper";

type LocationFieldProps = {
  value?: TOrderLocation
}
export const LocationField = ({
  value,
}: LocationFieldProps) => {
  const {
    code,
    city,
    country,
    region,
    address,
    postalCode,
  } = value ?? {};

  return (
    <FormItemWrapper>
      <LabelValueText label="Код" value={code ?? '-'}/>
      <LabelValueText label="Регион" value={region ?? '-'}/>
      <LabelValueText label="Страна" value={country ?? '-'}/>
      <LabelValueText label="Город" value={city ?? '-'}/>
      <LabelValueText label="Адрес" value={address ?? '-'}/>
      <LabelValueText label="Индекс" value={postalCode ?? '-'}/>
    </FormItemWrapper>
  );
}
