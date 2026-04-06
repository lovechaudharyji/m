import type { Metadata } from "next";
import "./globals.css";
import { PageLoadGate } from "./_components/shared";

export const metadata: Metadata = {
  title: "MountAura",
  description: "Weekend escapes for busy professionals.",
  icons: {
    icon: [{ url: "/images/mountaura.png", type: "image/png", sizes: "32x32" }],
    shortcut: [{ url: "/images/mountaura.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/images/mountaura.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PageLoadGate>{children}</PageLoadGate>
      </body>
    </html>
  );
}
