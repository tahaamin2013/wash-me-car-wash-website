import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbutton from "@/components/Topbutton";
import { Toaster } from "@/components/ui/sonner";
import Loader from "@/lib/Loader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RouteChangeListener } from "@/provider/RouteChangeListener";
import { OptinMonsterEmbed } from "@/provider/omEmbed";
import Script from "next/script";
import LeadGenForm from "@/components/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wash Me Car Wash Longview | The Only Handwash Tunnel Around!!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <Loader>
          {/* <Memberships /> */}
          <LeadGenForm />
          <Navbar />
          <Toaster />
          <Script
            type="text/javascript"
            src="https://a.omappapi.com/app/js/api.min.js"
          ></Script>
          <RouteChangeListener />
          {/* <OptinMonsterEmbed /> */}
          {children}
          <Topbutton /> <Footer />
        </Loader>
      </body>
    </html>
  );
}
