import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
    <html
      lang="en"
      className={`${montserrat.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
