"use server"
import React from 'react';
import ProjectCard from './project-card';

import Reveal from './reveal';





 interface Project {
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
}

const projects: Project[] = [
  {
    name: 'NeuraForex',
    slug: 'https://neuraforex.azurewebsites.net/',
    description:
      'A Web app that helps users track forex activites  and lets them predict future prices to increase gains.',
    thumbnail: '/nf.jpg'
  },
  {
    name: 'Youtube shorts blocker - chrome extension',
    slug: 'https://addons.mozilla.org/en-US/firefox/addon/youtube-shorts-remover-ultra/',
    description:
    'A Browser extension that allows users to block YouTube shorts for a distraction-free viewing experience.',
    thumbnail: '/ytshort.gif'
  },
  {
    name: 'Keychamp',
    slug: 'https://keychamp.onrender.com/handler',
    description:
      'A platform where people can compete to see who is better at typing and can compete real-time.',
    thumbnail: '/kc.jpg'
  },
  {
    name: 'Personal Portfolio/blog Website',
    slug: '/',
    description:
      'A personal portfolio + blog to showcase your programming projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/portfolio.jpg'
  },

];





import MotionWrap from './motion-wrap';

async function Projects() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Projects
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my projects where I&apos;ve turned code into cool,
            functional stuff.
          </p>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              slug={project.slug}
              name={project.name}
              description={project.description}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
