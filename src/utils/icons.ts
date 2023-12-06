import Image from 'next/image'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoNpm, IoLogoDocker } from 'react-icons/io5'
import { FcLinux } from 'react-icons/fc'
import { SiExpress, SiGit, SiExpo, SiNestjs, SiMongodb, SiPrisma, SiReactquery, SiRedux, SiTailwindcss, SiTypescript, SiYarn, SiNextdotjs, SiOracle, SiPython, SiReact } from "react-icons/si";

export const technologies = [
  { Component: IoLogoHtml5, fontSize: 35, color: '#D34317', name: 'HTML' },
  { Component: IoLogoCss3, fontSize: 35, color: '#2465F4', name: 'CSS' },
  { Component: IoLogoJavascript, fontSize: 35, color: '#F5DD1B', name: 'JavaScript' },
  { Component: SiTypescript, fontSize: 30, color: '#007ACC', name: 'TypeScript' },
  { Component: SiTailwindcss, fontSize: 35, color: '#38BDF8', name: 'TailwindCSS' },
  { Component: SiReact, fontSize: 35, color: '#57D8FF', name: 'React' },
  { Component: SiReactquery, fontSize: 35, color: '#E0234E', name: 'React Query' },
  { Component: SiRedux, fontSize: 35, color: '#764ABC', name: 'Redux' },
  { Component: SiNextdotjs, fontSize: 35, name: 'Next.js' },
  { Component: SiExpo, fontSize: 35, name: 'Expo' },
  { Component: IoLogoNodejs, fontSize: 35, color: '#488A47', name: 'Node.js' },
  { Component: SiExpress, fontSize: 35, name: 'Express' },
  { Component: SiNestjs, fontSize: 35, color: '#E0234E', name: 'Nestjs' },
  { Component: SiPrisma, fontSize: 35, color: '#2D3748', name: 'Prisma' },
  { Component: IoLogoDocker, fontSize: 35, color: '#066BD5', name: 'Docker' },
  { Component: SiGit, fontSize: 35, color: '#F34F29', name: 'Git' },
  { Component: IoLogoNpm, fontSize: 35, color: '#CB3837', name: 'NPM' },
  { Component: SiYarn, fontSize: 35, color: '#2C8EBB', name: 'Yarn' },
  { Component: SiMongodb, fontSize: 35, color: '#47A248', name: 'MongoDB' },
  { Component: SiPython, fontSize: 35, color: '#3776AB', name: 'Python' },
  { Component: SiOracle, fontSize: 35, color: '#E80005', name: 'Oracle' },
  { Component: FcLinux, fontSize: 35, name: 'Linux' },
];