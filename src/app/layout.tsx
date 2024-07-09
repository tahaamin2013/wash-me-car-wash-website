import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbutton from "@/components/Topbutton";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RouteChangeListener } from "@/provider/RouteChangeListener";
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
        {/* <MyPopup /> */}
        <Navbar />
        <Toaster />
        <RouteChangeListener />
        {children}
        <Topbutton />
        <Footer />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,36493,41469);`,
          }}
        />
      </body>
    </html>
  );
}
