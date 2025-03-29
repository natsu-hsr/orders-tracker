import {Metadata} from "next";

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
      {children}
    </div>
  );
}