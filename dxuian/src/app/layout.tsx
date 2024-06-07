// "use server"
import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import styles from "./ui/styles.module.css";

import { ThemeProvider } from "@/components/theme-provider"

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
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
function Container({ children }: { children: any }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>

      {children}
      <Toaster />
    </ThemeProvider>
  )
}

