'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ValuesLink() {
  const pathname = usePathname()
  const isValuesPage = pathname === '/values'
  const isVisionPage = pathname === '/vision'

  return (
    <div className={`fixed z-40 top-6 md:top-8 ${isValuesPage ? 'right-6 md:right-8' : 'right-6 md:right-8'}`}>
      <Link 
        href={isValuesPage ? "/" : "/values"}
        className={`values-link glow-link px-4 py-2 ${isValuesPage ? '' : ''}`}
        onMouseEnter={(e) => {
          e.currentTarget.classList.add('glow-link-hover');
          e.currentTarget.classList.remove('glow-link');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.add('glow-link');
          e.currentTarget.classList.remove('glow-link-hover');
        }}
      >
        <span className="font-bold">{isValuesPage ? "home" : "our values"}</span>
      </Link>
    </div>
  )
} 
