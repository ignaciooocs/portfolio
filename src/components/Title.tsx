import Image from "next/image";

export default function Title() {
  return (
    <section className="flex gap-3 title items-center z-50">
      <figure className="h-8 w-8 rounded-full shadow-md">
        <Image src='/profile.jpg' alt="profile" width={100} height={100} className="rounded-full h-full w-full object-cover object-bottom" priority />
      </figure>
      <h1 className='font-bold text-slate-900 dark:text-white'>Ignacio Mejías Cisternas</h1>
    </section>
  )
}