"use client"
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./wrapper/Footer";
import Header from "./wrapper/Header";
import { Providers } from "./redux/Providers";
import Drawer from "./components/drawer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
