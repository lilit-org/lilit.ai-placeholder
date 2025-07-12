'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StarTeamLink() {
  const pathname = usePathname()
  const isJobsPage = pathname === '/careers'

  return (
    <div className="hidden md:block fixed z-40 bottom-6 left-6">
      <Link 
        href={isJobsPage ? "/" : "/careers"}
        className="values-link glow-link px-8 py-4"
        onMouseEnter={(e) => {
          e.currentTarget.classList.add('glow-link-hover');
          e.currentTarget.classList.remove('glow-link');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.add('glow-link');
          e.currentTarget.classList.remove('glow-link-hover');
        }}
      >
        <span className="font-bold">{isJobsPage ? "home" : "join us"}</span>
      </Link>
    </div>
  )
} 
