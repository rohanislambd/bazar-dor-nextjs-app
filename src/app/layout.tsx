import type { Metadata } from "next";
import {Hind_Siliguri} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import { Toaster } from "react-hot-toast";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

 
export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F0F5F0]">
        <Header/>
        
          <Marquee/>
     

        {children}
           <Toaster />
        
        </body>
    </html>
  );
}
