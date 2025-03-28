import {Metadata} from "next";

export async function generateMetadata({
  params,
}: {
  params: {orderId: string};
}): Promise<Metadata> {
  const param = await params
  const {orderId} = param;
  return {
    title: `Заказ ${orderId} | PandaParcels`,
    description: `Информация о заказе ${orderId}`,
  };
}

export default function OrderInfoLayout({
  children,
}: {
  children: React.ReactNode;
  params: {orderId: string};
}) {
  return (
    <div>
      {children}
    </div>
  );
}