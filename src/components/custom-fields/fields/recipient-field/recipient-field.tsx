import {TOrderRecipient} from "@/store/slices/orders";
import {SenderField} from "../sender-field/sender-field";
import {LabelValueText} from "../../technical/label-value-text/label-value-text";


type RecipientFieldProps = {
   value?: TOrderRecipient
}
export const RecipientField = ({
  value,
}: RecipientFieldProps) => {
  const {
    phones,
    ...rest
  } = value ?? {};

  return (
    <SenderField value={rest}>
      {phones?.length && (
        <LabelValueText
          vertical
          label="Контактные данные"
          value={(
            <ul>
              {phones.map(p => <li key={p.number}>{p.number}</li>)}
            </ul>
          )}
        />
      )}
    </SenderField>
  )
}