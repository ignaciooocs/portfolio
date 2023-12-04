import { technologies } from '@/utils/icons'
export default function Technologies() {

  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-xl text-slate-900 font-bold dark:text-white'>Tecnlogías</h3>
      <section className='flex gap-4 items-center flex-wrap '>
        {technologies.map((tech, index) => {
          const { Component, ...props } = tech;
          return (
            <section key={index} className='hover:scale-110 transition-all'>
              <Component {...props} />
            </section>
          )
        })}
      </section>
    </section>
  )
}