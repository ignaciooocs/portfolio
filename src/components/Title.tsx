import Image from "next/image";

export default function Title() {
  return (
    <section className="flex gap-3 title items-center">
      <figure className="rounded-full shadow-md">
        <Image src='/developer (1).png' alt="profile" width={25} height={25} className="rounded-full" priority />
      </figure>
      <h1 className='font-bold text-slate-900 dark:text-white'>Ignacio Mejías Cisternas</h1>
    </section>
  )
}