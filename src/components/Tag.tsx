export default function Tag({ name }: { name: string }) {
  return (
    <span
      className="flex w-max bg-slate-900 text-white dark:text-slate-900 dark:bg-white font-bold py-2 px-3 rounded-md absolute top-[-50px]"
    >
      {name}
      <span className='bg-slate-900 dark:bg-white w-2 h-2 rotate-45 absolute bottom-[-4px] left-3' />
    </span>
  )
}