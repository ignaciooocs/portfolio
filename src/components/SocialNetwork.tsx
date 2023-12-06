'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { handleSendEmail } from '@/utils/function'
export default function SocialNetwork() {
  return (
    <section className='flex gap-4 mt-4'>
      <Link href='https://github.com/ignaciooocs' target='_blank' >
        <IoLogoGithub className='hover:opacity-70 cursor-pointer ' fontSize={30} />
      </Link>
      <Link href='https://www.linkedin.com/in/ignacio-mej%C3%ADas-cisternas-ba1092245/' target='_blank'>
        <IoLogoLinkedin className='hover:opacity-70 cursor-pointer ' color='#0A66C2' fontSize={30} />
      </Link>
      <Image onClick={() => handleSendEmail('ignaciomejiascisternas@gmail')} className='hover:opacity-70 cursor-pointer ' src='/new.png' alt='gmail' width={30} height={30} />
    </section>
  )
}