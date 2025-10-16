import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小鼠帝国 - 官方网站",
  description: "小鼠帝国官方网站，为公民提供政府服务和信息。纪念从'低盐大鼠'到小鼠帝国的伟大历程。",
  keywords: ["小鼠帝国", "政府服务", "公民服务", "班级纪念", "低盐大鼠"],
  authors: [{ name: "小鼠帝国政府" }],
  openGraph: {
    title: "小鼠帝国 - 官方网站",
    description: "小鼠帝国官方网站，为公民提供政府服务和信息",
    siteName: "小鼠帝国",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小鼠帝国 - 官方网站",
    description: "小鼠帝国官方网站，为公民提供政府服务和信息",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
