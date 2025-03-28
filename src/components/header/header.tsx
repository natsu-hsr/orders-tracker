import Image from "next/image";
import Link from "next/link";
import {Col, Row} from "antd";

import PandaLogo from "@/assets/panda.svg";
import {HeaderBurger} from "./header-burger";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s["header-content"]}>
        <div className={s.logo}>
          <Image src={PandaLogo} alt="PandaParcels Logo" width={40} height={40} />
          <span className={s.title}>PandaParcels</span>
        </div>

        <div className={s["nav-desktop"]}>
          <Row gutter={[16, 16]}>
            <Col>
              <Link href="/">Главная</Link>
            </Col>
            <Col>
              <Link href="/orders">Список заказов</Link>
            </Col>
          </Row>
        </div>

        <HeaderBurger />
      </div>
    </header>
  );
}