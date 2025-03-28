"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname } from "next/navigation";
import {MenuOutlined} from "@ant-design/icons";
import {Button, Drawer, Menu} from "antd";

import s from "./header.module.scss";

export const HeaderBurger = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className={s["nav-mobile"]}>
      <Button className={s["menu-button"]} icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Навигация"
        placement="right"
        onClose={onClose}
        open={open}
        width={250}
      >
        <Menu className={s["ant-menu"]} mode="inline" selectedKeys={[pathname]}>
          <Menu.Item key="/">
            <Link href="/" onClick={onClose}>
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key="/orders">
            <Link href="/orders" onClick={onClose}>
              Список заказов
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}