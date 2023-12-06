'use client';
import FontBold from "./FontBold";

export default function Biography() {
  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-xl font-bold dark:text-white'>Sobre Mi</h2>
      <section>
        <p className='text-lg text-slate-900 dark:text-white'>
          Soy un Desarrollador
          <FontBold text=' FullStack ' color='pink' />
          especializado, con 2 años de experiencia en la creación de
          <FontBold text=' Aplicaciones Web' color='blue' />.
          Mi principal área de enfoque es el desarrollo
          <FontBold text=' Frontend ' color='pink' />
          utilizando <b>ReactJS</b> con <b>TypeScript</b> y su entorno asociado.
          Además, poseo sólidos conocimientos en desarrollo
          <FontBold text=' Backend ' color='pink' />
          con el entorno de <b>NodeJS</b>.
        </p>
        <p className='text-lg text-slate-900 dark:text-white'>
          Me gusta aprender constantemente sobre nuevas tecnologías y mantenerme al día con las últimas tendencias.,
          Actualmente estoy cursando la carrera
          <FontBold text=' Analista Programador ' color='blue' />
          del
          <FontBold text=' Centro de Formacion Técnica INACAP' color='pink' />
        </p>
      </section>
    </section>
  )
}