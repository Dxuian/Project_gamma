

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  
        < >{children}</>  
    
  );
}


