import type { Metadata } from "next";

export const metadata = {
  title: "BULEK EATS",
  description: "Official website of BULEK EATS food delivery service",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/public/logo.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
