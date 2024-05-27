import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
// import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "DXU's blog",
  description: "lets talk",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({children}: {children: any }) {
  return (
    <div>
      {children}
    </div>
  );
}
