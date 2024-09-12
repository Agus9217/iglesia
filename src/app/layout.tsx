import type { Metadata } from "next";
import { Providers } from "./_provider/Provider";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
