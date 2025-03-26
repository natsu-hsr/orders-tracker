"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { Layout, Button, Col, Drawer, Menu, Row } from "antd";
import Image from "next/image";
import PandaLogo from "@/assets/panda.svg";

import s from "./header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Layout.Header className={s.header}>
      <div className={s["header-content"]}>
        <div className={s.logo}>
          <Image src={PandaLogo} alt="PandaParcels Logo" width={40} height={40} />
          <span className={s.title}>PandaParcels</span>
        </div>

        <div className={s["nav-desktop"]}>
          <Row gutter={[16, 16]}>
            <Col>
              <Link
                className={pathname === "/" ? s.active : ""}
                href="/"
              >Главная
              </Link>
            </Col>
            <Col>
              <Link
                className={pathname === "/orders" ? s.active : ""}
                href="/orders"
              >Список заказов
              </Link>
            </Col>
          </Row>
        </div>

        <div className={s["nav-mobile"]}>
          <Button
            className={s["menu-button"]}
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            title="Навигация"
            placement="right"
            onClose={onClose}
            open={open}
            width={250}
          >
            <Menu
              className={s["ant-menu"]}
              mode="inline"
              selectedKeys={[pathname]}
            >
              <Menu.Item key="/">
                <Link
                  href="/"
                  onClick={onClose}
                >Главная
                </Link>
              </Menu.Item>
              <Menu.Item key="/orders">
                <Link
                  href="/orders"
                  onClick={onClose}
                >Список заказов
                </Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </Layout.Header>
  );
};