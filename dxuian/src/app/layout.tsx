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
export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.bodyc} ${inter.className} antialiased`}>
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

