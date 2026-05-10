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
          width="40" 
          height="48" 
          viewBox="0 0 40 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 transform translate-y-1"
        >
          {/* Horizontal crossbar (light blue) */}
          <rect x="0" y="0" width="40" height="8" fill={lightBlue} />
          {/* Vertical stem (dark blue) with angled cut on top-left */}
          <path d="M12 16 L18 8 L28 8 L28 48 L12 48 Z" fill={darkBlue} />
        </svg>

        {/* Text next to T */}
        <span 
          className="font-sans font-bold tracking-tight" 
          style={{ fontSize: '44px', color: lightBlue, lineHeight: '1', marginLeft: '-2px' }}
        >
          rans
        </span>

        {/* Custom i with dark blue dot */}
        <div className="flex flex-col items-center justify-end mx-[1px]" style={{ height: '32px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: darkBlue, marginBottom: '4px' }} />
          <div style={{ width: '6px', height: '24px', backgroundColor: lightBlue }} />
        </div>

        {/* Rest of the text */}
        <span 
          className="font-sans font-bold tracking-tight" 
          style={{ fontSize: '44px', color: lightBlue, lineHeight: '1' }}
        >
          tcare
        </span>
      </div>

      {/* "logistics" subtitle */}
      <span
        className="font-sans uppercase tracking-[0.45em]"
        style={{
          fontSize: '14px',
          color: greyColor,
          marginTop: '6px',
          marginLeft: '4px',
          fontWeight: 400,
        }}
      >
        logistics
      </span>
    </button>
  )
}
