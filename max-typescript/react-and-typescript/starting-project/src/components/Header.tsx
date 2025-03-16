import { ReactNode } from 'react'

interface HeaderProps {
  image: {
    src: string
    alt: string
  }, 
  children: ReactNode,  // Allow any React Node as children
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}
