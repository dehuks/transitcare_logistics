import { scrollToSection } from '@/utils/scroll'

export default function Logo({ light = false }) {
  const lightBlue = light ? '#ffffff' : '#29aae1';
  const darkBlue = light ? '#e2e8f0' : '#1b63a9';
  const greyColor = light ? '#cbd5e1' : '#888888';

  return (
    <button onClick={() => scrollToSection('hero')} aria-label="Go to top" className="flex flex-col items-start leading-none group cursor-pointer transition-opacity hover:opacity-90">
      <div className="flex items-baseline" style={{ marginBottom: '-2px' }}>
        {/* Custom T glyph */}
        <svg 
          width="27" 
          height="33" 
          viewBox="0 0 40 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 transform translate-y-[2px]"
        >
          {/* Horizontal crossbar (light blue) */}
          <rect x="0" y="0" width="40" height="8" fill={lightBlue} />
          {/* Vertical stem (dark blue) with angled cut on top-left */}
          <path d="M12 16 L18 8 L28 8 L28 48 L12 48 Z" fill={darkBlue} />
        </svg>

        {/* Text next to T */}
        <span 
          className="font-sans font-bold tracking-tight" 
          style={{ fontSize: '30px', lineHeight: '1', marginLeft: '-2px' }}
        >
          <span style={{ color: lightBlue }}>rans</span>
          {/* Custom i with dark blue dot and light blue stem using text gradient */}
          <span 
            style={{ 
              backgroundImage: `linear-gradient(to bottom, ${darkBlue} 33%, ${lightBlue} 33%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            i
          </span>
          <span style={{ color: lightBlue }}>tcare</span>
        </span>
      </div>

      {/* "logistics" subtitle */}
      <span
        className="font-sans uppercase tracking-[0.45em]"
        style={{
          fontSize: '10px',
          color: greyColor,
          marginTop: '4px',
          marginLeft: '3px',
          fontWeight: 400,
        }}
      >
        logistics
      </span>
    </button>
  )
}
