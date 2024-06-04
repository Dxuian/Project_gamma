// "use server"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./ui/styles.module.css";

import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DXU",
  description: "HI!!!!!!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.bodyc}>
        <Container >{children}</Container>
      </body>
    </html>
  );
}


function Container({ children }: { children: any }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div>
      {children}
      </div>
    </ThemeProvider>
  )
}

