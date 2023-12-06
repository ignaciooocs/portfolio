'use client'
export default function FontBold({ text, color }: { text: string, color: string }) {
  return <span className={`text-${color}-500 font-bold`}>{text}</span>
}