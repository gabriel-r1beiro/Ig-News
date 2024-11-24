import { Header } from "@/components/Header";
import "../style/global.sass"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ig.news",
  description: "Generat",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
};
