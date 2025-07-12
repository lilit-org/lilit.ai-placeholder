'use client'

export default function CEOLink() {
  return (
    <div className="ceo-link group">
      <a 
        href="https://www.bt3gl.xyz" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="ceo-link-text glow-link"
        onMouseEnter={(e) => {
          e.currentTarget.classList.add('glow-link-hover');
          e.currentTarget.classList.remove('glow-link');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.add('glow-link');
          e.currentTarget.classList.remove('glow-link-hover');
        }}
      >
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <span className="text-3xl md:text-5xl group-hover:animate-bounce">👩🏼‍💼</span>
          <span className="group-hover:animate-pulse font-bold">the steward</span>
        </div>
      </a>
    </div>
  )
}
