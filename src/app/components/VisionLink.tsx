'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function VisionLink() {
  const pathname = usePathname()
  const isVisionPage = pathname === '/vision'
  const isValuesPage = pathname === '/values'

  return (
    <div className={`fixed z-40 top-6 md:top-8 ${isVisionPage ? 'left-6 md:left-8' : 'left-6 md:left-8'}`}>
      <Link 
        href={isVisionPage ? "/" : "/vision"}
        className={`values-link glow-link px-4 py-2 ${isVisionPage ? '' : ''}`}
        onMouseEnter={(e) => {
          e.currentTarget.classList.add('glow-link-hover');
          e.currentTarget.classList.remove('glow-link');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.add('glow-link');
          e.currentTarget.classList.remove('glow-link-hover');
        }}
      >
        <span className="font-bold">{isVisionPage ? "home" : "our vision"}</span>
      </Link>
    </div>
  )
}
