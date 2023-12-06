'use client'
import { useState } from "react"
import Tag from "./Tag"

export default function Technology({ children, name }: { children: React.ReactNode, name: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (mode: boolean) => {
    setIsHovered(mode)
  }

  return (
    <section className='flex hover:scale-110 transition-all relative' onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      {isHovered && <Tag name={name} />}
      {children}
    </section>
  )
}