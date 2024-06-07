import "./globals.css";

import styles from "./ui/styles.module.css";

import { ThemeProvider } from "@/components/theme-provider"


import type { Metadata } from "next";
export const metadata: Metadata = {
  //@ts-ignore
  title: {
    default: 'DXU',
  },
  description: "Portfolio website built by dxu using Next.js and Tailwind CSS.",
  authors: [{ name: 'dxu' }],
  creator: 'Unnat bharol',
  publisher: 'Unnat bharol @ vercel ',

};

export default async  function RootLayout({
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
import { Toaster } from "@/components/ui/toaster"
function Container({ children }: { children: any }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

