import Biography from '@/components/Biography'
import PersonalInfo from '@/components/PersonalInfo'
import SendEmail from '@/components/SendEmail'
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <section className='flex flex-col gap-20 pb-14'>
      <PersonalInfo />
      <hr />
      <Biography />
      <hr />
      <Technologies />
      <hr />
      <SendEmail />
      <hr />
    </section>
  )
}
