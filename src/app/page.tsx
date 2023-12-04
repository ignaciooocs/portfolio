import PersonalInfo from '@/components/PersonalInfo'
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <section className='flex flex-col gap-20'>
      <PersonalInfo />
      <hr />
      <Technologies />
    </section>
  )
}
