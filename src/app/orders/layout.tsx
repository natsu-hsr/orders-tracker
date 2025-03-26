import { Metadata } from "next";
import Title from "antd/es/typography/Title";

export const metadata: Metadata = {
  title: "Заказы | PandaParcels",
};

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Title level={2}>Таблица заказов</Title>
      {children}
    </div>
  );
}