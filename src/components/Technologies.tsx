import { technologies } from '@/utils/icons'
import Technology from './Technology';

export default function Technologies() {

  return (
    <section className='flex flex-col gap-6'>
      <h3 className='text-xl text-slate-900 font-bold dark:text-white'>Tecnologías</h3>
      <section className='flex gap-4 items-center flex-wrap '>
        {technologies.map((tech, index) => {
          const { Component, ...props } = tech;
          return (
            <Technology key={index} name={tech.name || ''}>
              <Component {...props} />
            </Technology>
          )
        })}
      </section>
    </section>
  )
}