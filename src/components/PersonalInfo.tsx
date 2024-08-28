import Image from "next/image";
import SocialNetwork from "./SocialNetwork";

export default function PersonalInfo() {
  return (
    <section className=''>
      <section className="flex flex-col md:flex-row items-center gap-6 personal">
        <figure className="h-36 w-36 rounded-full border-2 shadow-sm dark:shadow-md dark:shadow-gray-500">
          <Image src='/profile.jpg' alt="profile" width={150} height={150} className="rounded-full h-full w-full object-cover object-bottom" priority />
        </figure>
        <section className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Ignacio Mejías Cisternas</h2>
          <p className="text-lg md:text-lg">Desarrollador Web <span className="text-pink-500 font-bold">FullStack</span></p>
          <SocialNetwork />
        </section>
      </section>
    </section>
  )
}