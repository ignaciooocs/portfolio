import Image from 'next/image'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoNpm, IoLogoDocker } from 'react-icons/io5'
import { FcLinux } from 'react-icons/fc'
import { SiExpress, SiGit, SiExpo, SiNestjs, SiMongodb, SiPrisma, SiReactquery, SiRedux, SiTailwindcss, SiTypescript, SiYarn } from "react-icons/si";

export const technologies = [
  { Component: IoLogoHtml5, fontSize: 35, color: '#D34317' },
  { Component: IoLogoCss3, fontSize: 35, color: '#2465F4' },
  { Component: IoLogoJavascript, fontSize: 35, color: '#F5DD1B' },
  { Component: SiTypescript, fontSize: 25, color: '#007ACC' },
  { Component: SiTailwindcss, fontSize: 35, color: '#38BDF8' },
  { Component: IoLogoReact, fontSize: 35, color: '#57D8FF' },
  { Component: SiReactquery, fontSize: 35, color: '#E0234E' },
  { Component: SiRedux, fontSize: 35, color: '#764ABC' },
  { Component: SiExpo, fontSize: 35 },
  { Component: IoLogoNodejs, fontSize: 35, color: '#488A47' },
  { Component: SiExpress, fontSize: 35 },
  { Component: SiNestjs, fontSize: 35, color: '#E0234E' },
  { Component: SiPrisma, fontSize: 35, color: '#2D3748' },
  { Component: IoLogoDocker, fontSize: 35, color: '#066BD5' },
  { Component: SiGit, fontSize: 35, color: '#F34F29' },
  { Component: IoLogoNpm, fontSize: 35, color: '#CB3837' },
  { Component: SiYarn, fontSize: 35, color: '#2C8EBB' },
  { Component: SiMongodb, fontSize: 35, color: '#47A248' },
  { Component: Image, src: '/python.png', alt: 'python', width: 35, height: 35 },
  { Component: Image, src: '/oracle.png', alt: 'oracle', width: 35, height: 35 },
  { Component: FcLinux, fontSize: 35 },
];