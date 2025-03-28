import {TOrderPackage} from "@/store/slices/orders"
import {LabelValueText} from "../../technical/label-value-text/label-value-text";

type PackageItemProps = {
  orderPackage: TOrderPackage
}
export const PackageItem = ({orderPackage}: PackageItemProps) => (
  <>
    <LabelValueText label="Штрихкод" value={orderPackage.barcode ?? '-'} />
    <LabelValueText label="Вес" value={orderPackage.weight ?? '-'} />
    <LabelValueText label="Длина" value={orderPackage.length ?? '-'} />
    <LabelValueText label="Ширина" value={orderPackage.width ?? '-'} />
    <LabelValueText label="Высота" value={orderPackage.height ?? '-'} />
    <LabelValueText
      vertical
      label="Список товаров"
      value={
        <ol>
          {orderPackage.items.map(i => (
            <li key={i.name}>
              <LabelValueText label="Наименование" value={i.name ?? '-'} />
              <LabelValueText label="Количество" value={i.amount ?? '-'} />
              <LabelValueText label="Стоимость" value={i.cost ?? '-'} />
            </li>
          ))}
        </ol>
      }
    />
  </>
);
