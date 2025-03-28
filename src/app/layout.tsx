import "./globals.css";
import "antd/dist/reset.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/header";
import {StoreProvider} from "@/store/config/store-provider";

const inter = Inter({subsets: ["latin", "cyrillic"], display: "swap"});

export const metadata: Metadata = {
  title: "PandaParcels | Главная",
  description: "PandaParcels - сайт по отслеживанию заказов",
  icons: {
    icon: './panda.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="body-wrapper">
          <StoreProvider>
            <Header />
            <main className="main-wrapper">
              {children}
            </main>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
