import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className={inter.className}>
        {/* <MyPopup /> */}
        <Navbar />
        {children}
        {/* <Topbutton /> */}
        <Footer />
        <Script
          id="omappapi-script"
          dangerouslySetInnerHTML={{
            __html: `(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,36493,41469);`,
          }}
        />
      </body>
    </html>
  );
}
