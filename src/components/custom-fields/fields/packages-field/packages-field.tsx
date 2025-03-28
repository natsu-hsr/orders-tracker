import {Col, Row} from "antd";

import {TOrderPackages} from "@/store/slices/orders";
import {PackageItem} from "./package-item";

import s from './packages-field.module.scss'

type PackagesFieldProps = {
  value?: TOrderPackages;
}
export const PackagesField = ({
  value,
}: PackagesFieldProps) => {

  return (
    <Row className={s.wrapper} gutter={[16, 16]} wrap>
      {value?.map((p) => (
        <Col key={p.barcode} xs={24} sm={12} lg={6}>
          <PackageItem orderPackage={p} />
        </Col>
      ))}
    </Row>
  )
}
