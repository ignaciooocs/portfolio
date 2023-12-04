import Image from 'next/image'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
export default function SocialNetwork() {
  return (
    <section className='flex gap-4 mt-4'>
      <IoLogoGithub className='hover:opacity-70 cursor-pointer ' fontSize={25} />
      <IoLogoLinkedin className='hover:opacity-70 cursor-pointer ' color='#0A66C2' fontSize={25} />
      <Image className='hover:opacity-70 cursor-pointer ' src='/new.png' alt='gmail' width={25} height={25} />
    </section>
  )
}