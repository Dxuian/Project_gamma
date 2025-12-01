import "./globals.css";

import styles from "./ui/styles.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

import type { Metadata, Viewport } from "next";

// Viewport configuration for better mobile performance
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
};

export const metadata: Metadata = {
  //@ts-ignore
  title: {
    default: 'DXU',
  },
  description: "Portfolio website built by dxu using Next.js and Tailwind CSS.",
  authors: [{ name: 'dxu' }],
  creator: 'Unnat bharol',
  publisher: 'Unnat bharol @ vercel ',
  keywords: ['Next.js', 'React', 'JavaScript','Portfolio','Blog' , 'Tailwind CSS','dxu' , 'dxuian' , 'unnat bharol'  ,'technology' , 'Open source0' , 'Knowledge',
    "Javascript",
  "HTML5",
  "CSS3",
  "C++",
  "Python",
  "Numpy",
  "Pandas",
  "Scikit-learn",
  "Tensorflow",
  "Typescript",
  "VS Code",
  "Git",
  "Github",
  "Node.js",
  "Drizzle",
  "Fastify",
  "Django",
  "Next.js",
  "Supabase",
  "Render",
  "Microsoft Azure",
  "Docker",
  "SQLite",
  "MySQL",
  "PostgreSQL",
  "Chrome",
  "Babel",
  "C",
  "React",
  "Ubuntu",
  "Windows",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "Jupyter",
  "Linux",
  "Shadcnui",
  "Webpack",
  'Engineering',
  'Software',
  'Computer Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Science', 
  'Electrical Engineering',
  'Internships',
  'Internship',
  'Learning',
  'Programming',
  'Coding',
  'Looking for new opportunities',
  'Web Development',
  'Frontend',
  'Backend',
  'Fullstack', 
  'Open Source',
  'Github',
  'Git',
  'Version Control',
  ]

};

import { Inter } from 'next/font/google';
 
// Optimize font loading with display swap for better LCP
export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${styles.bodyc} ${inter.className} antialiased`}>
        <SpeedInsights />
        <Analytics />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
import { Toaster } from "@/components/ui/toaster"
function Container({ children }: { children: any }) {
  return (
    <ThemeProvider  attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

