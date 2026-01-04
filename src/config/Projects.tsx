import Gemini from '@/components/technologies/Gemini';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'AI-Powered Tweet Generator',
    description:
      'A chrome extension that generates engaging tweets from selected webpage text using Google Gemini AI.',
    image: '/project/chrome-extesnion.png',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Google Gemini', icon: <Gemini key="gemini" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/tharun099/tweet-generator-chrome-extension',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/tweet-generator',
    isWorking: true,
  },
    {
    title: 'SAAS for School Management',
    description:
      "A system designed to help admins manage student and staff data with real-time updates and centralized control.",
    image: '/project/inprogress.png',
    link: 'https://trackademy-tau.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Supabase', icon: <Supabase key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },

    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: false,
  },
  //   {
  //   title: 'Gemini Suite',
  //   description:
  //     'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
  //   image: '/project/quest.png',
  //   video: '#',
  //   link: '#',
  //   technologies: [
  //     { name: 'Next.js', icon: <NextJs key="nextjs" /> },
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'Vercel', icon: <Vercel key="vercel" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
  //   ],
  //   github: '#',
  //   live: '#',
  //   details: false,
  //   projectDetailsPageSlug: '/projects/the-quest',
  //   isWorking: true,
  // },
    {
    title: 'Ridemate',
    description:
      'A route-based travel assistance platform that shows nearby hotels, fuel stations, and popular places along a user-selected route in real time.',
    image: '/project/inprogress.png',
    link: 'https://v0-ride-mate-app-design.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      {name:'Supabase', icon: <Supabase key="supabase" /> },
    ],
    github: 'https://github.com/tharun7026/v0-ride-mate-app-design',
    live: 'https://v0-ride-mate-app-design.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/ridemate',
    isWorking: false,
  },
  {
    title: 'PMS (College-Wide Platform)',
    description:
      'A procurement management system to manage vendors, orders, payments, quotations etc for my college.',
    image: '/project/procurement.png',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      {name:'React', icon: <ReactIcon key="react" /> },
      {name:'Node.js', icon: <NodeJs key="nodejs" /> },
      {name:'MongoDB', icon: <MongoDB key="mongodb" /> },
      {name:'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'AI-Powered Career Intelligence Platform',
    description:
      'Transform your daily work into career gold with AI-powered career tracking and content generation.',
    image: '/project/storystack.png',
    link: 'https://storystack-professional-journal.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/tharun099/storystack-professional-journal',
    live: 'https://storystack-professional-journal.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
  },
  ];
