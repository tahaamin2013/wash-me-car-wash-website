import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbutton from "@/components/Topbutton";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RouteChangeListener } from "@/provider/RouteChangeListener";
import { OptinMonsterEmbed } from "@/provider/omEmbed";
import Script from "next/script";
import MyPopup from "@/components/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wash Me Car Wash Longview | The Only Handwash Tunnel Around!",
  description: "Wash Me Car Wash in Longview offers handwash tunnel services, featuring a unique approach that combines the convenience of a tunnel wash with the thoroughness of handwashing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <MyPopup />
        <Navbar />
        <Toaster />
        <Script
          type="text/javascript"
          src="https://a.omappapi.com/app/js/api.min.js"
        />
        <RouteChangeListener />
        {children}
        <Topbutton />
        <Footer />
      </body>
    </html>
  );
}
