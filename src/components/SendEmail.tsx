'use client'
import { IoSend, IoCopy } from 'react-icons/io5'
import { useState } from 'react'
import Tag from './Tag'
import { handleSendEmail } from '@/utils/function'
import SocialNetwork from './SocialNetwork'
export default function SendEmail() {
  const [isHovered, setIsHovered] = useState({
    send: false,
    copy: false
  })

  const [isCopied, setIsCopied] = useState(false)

  const textToCopy = "ignaciomejiascisternas@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  };

  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-xl font-bold text-slate-900 dark:text-white'>Social</h2>
      <section className='flex gap-4'>
        <input className='bg-gray-400 w-full md:w-6/12 text-slate-900 dark:text-white bg-opacity-30 font-bold py-2 px-3 rounded-md' value='ignaciomejiascisternas@gmail.com' disabled readOnly />
        <section className='flex justify-center items-center gap-2'>
          <div
            className='bg-gray-400 text-slate-900 dark:text-white bg-opacity-30 font-bold py-2 px-3 rounded-md hover:scale-110 transition-all'
            onMouseEnter={() => setIsHovered({ ...isHovered, send: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, send: false })}
            onClick={() => handleSendEmail(textToCopy)}
          >
            {isHovered.send && <Tag name='Enviar Correo' />}
            <IoSend />

          </div>
          <div
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered({ ...isHovered, copy: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, copy: false })}
            className='bg-gray-400 text-slate-900 dark:text-white bg-opacity-30 font-bold py-2 px-3 rounded-md hover:scale-110 transition-all'
          >
            {isHovered.copy && <Tag name='Copiar' />}
            {isCopied && <Tag name='Email copiado!' />}
            <IoCopy />
          </div>
        </section>
      </section>
      <SocialNetwork />
    </section>
  )
}