"use server"
import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';


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


import { InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

interface ProjectCardProps extends Project {
  className?: string;
}

async function ProjectCard({
  name,
  description,
  thumbnail,
  slug,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md',
        className
      )}
    >
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`Image of ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-96 w-full object-cover transition-transform duration-200 hover:scale-110"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ''}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="z-[2]" asChild>
                  <Link href={ slug}>
                    <InfoIcon />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      <Link href={slug} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;
