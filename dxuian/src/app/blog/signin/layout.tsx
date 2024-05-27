import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
  title: "DXU's blog",
  description: "lets talk",
};



export default function RootLayout({children}: {children: any }) {
  return (
    <div>
      {children}
    </div>
  );
}
