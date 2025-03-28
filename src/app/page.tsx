import {Col, Row} from 'antd'
import Title from "antd/es/typography/Title"
import Link from 'next/link'

import {SearchOrderField} from "@/components/custom-fields/fields/search-order-field/search-order-field";

import s from './page.module.scss';


export default function Home() {
  return (
    <Row justify="center" align="middle">
      <Col xs={24} md={18} lg={12}>
        <div className={s.content}>
          <Title level={1} className={s.title}>
            Добро пожаловать на сайт заказов
          </Title>

          <p className={s.description}>
            Для получения информации введите номер заказа в поле ввода ниже
          </p>

          <SearchOrderField />

          <div className={s.link}>
            Или перейдите к <Link href="/orders">списку заказов</Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}
