'use client'
import useDarkMode from '@/hooks/useDarkMode'
import usePosition from '@/hooks/usePosition'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import Title from './Title'

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const mostrarElemento = usePosition()

  return (
    <header className='w-full py-6 px-9 flex justify-center sticky top-0 bg-white bg-opacity-40 dark:bg-slate-900 dark:bg-opacity-40'>
      <section className={`flex ${mostrarElemento ? 'justify-between' : 'justify-end'} w-11/12 sm:w-3/4`}>
        {mostrarElemento && <Title />}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <IoMoonOutline fontSize={25} className='title' /> : <IoSunnyOutline className='title' fontSize={25} />}
        </button>
      </section>
    </header>
  )
}