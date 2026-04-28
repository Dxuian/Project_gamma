import "./globals.css";

import styles from "./ui/styles.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

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
 
export const inter = Inter({ subsets: ['latin'] });
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true";
const enableSpeedInsights = process.env.NEXT_PUBLIC_ENABLE_VERCEL_SPEED_INSIGHTS === "true";
console.log("Analytics enabled:", enableAnalytics, "Speed Insights enabled:", enableSpeedInsights);
export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.bodyc} ${inter.className} antialiased`}>
      {enableSpeedInsights ? <SpeedInsights /> : null}
      {enableAnalytics ? <Analytics /> : null}
        <Container >{children}</Container>
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

