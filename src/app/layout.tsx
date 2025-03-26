import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header/header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

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
          <Header />
          <main className="main-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
