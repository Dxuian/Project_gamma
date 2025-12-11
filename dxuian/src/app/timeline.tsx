"use server";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default async function TimelineDemo() {
  const data = [
    {
      title: "SDE1 at Magicpin",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">Software Development Engineer</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Working on India&apos;s 3rd largest food delivery app, building scalable solutions and features that impact millions of users.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Full-stack development with modern technologies
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Building high-performance features
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborating with cross-functional teams
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-96 h-48 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/Untitled.jpg"
                alt="Magicpin logo"
                className="rounded-xl h-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Intern at ZFA Labs",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">Software Development Intern</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked on cutting-edge mobile apps and websites, gaining hands-on experience in delivering innovative solutions.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Developed web applications and mobile solutions
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Learned industry best practices
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Contributed to client projects
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-96 h-48 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/sda.jpg"
                alt="ZFA Labs logo"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "DTU Student",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">Delhi Technological University</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Pursuing B.Tech at one of India&apos;s premier technological universities, building a strong foundation in  engineering.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Competitive programming and DSA
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ Full-stack development projects
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Technical clubs and hackathons
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-96 h-48 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/dtuy.webp"
                alt="DTU logo"
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return <Timeline data={data} />;
}
