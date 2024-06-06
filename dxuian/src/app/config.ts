export interface Project {
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
    name: 'Personal Portfolio/blog Website',
    slug: '/',
    description:
      'A personal portfolio + blog to showcase your programming projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/portfolio.jpg'
  },
  {
    name: 'Keychamp',
    slug: 'https://keychamp.onrender.com/handler',
    description:
      'A platform where people can compete to see who is better at typing and can compete real-time.',
    thumbnail: '/kc.jpg'
  },
  {
    name: 'Youtube shorts blocker - chrome extension',
    slug: 'https://github.com/Dxuian/Youtube-shorts-blocker-extension',
    description:
    'A Chrome extension that allows users to block YouTube shorts for a distraction-free viewing experience.',
    thumbnail: '/ytshort.gif'
  },
];

export { projects };
