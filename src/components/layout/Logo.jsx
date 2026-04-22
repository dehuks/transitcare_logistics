import { scrollToSection } from '@/utils/scroll'

export default function Logo({ light = false }) {
  return (
    <button onClick={() => scrollToSection('hero')} aria-label="Go to top" className="flex flex-col items-start leading-none">
      {/* Wordmark row */}
      <div className="flex items-baseline">
        {/* Custom T glyph */}
        <span className="relative flex flex-col items-center mr-0.5" style={{ width: 28, height: 52 }}>
          {/* Crossbar */}
          <span
            className="absolute top-0 left-0"
            style={{
              width: 28,
              height: 7,
              backgroundColor: light ? '#ffffff' : '#1e3a8a',
              borderRadius: 1,
            }}
          />
          {/* Accent square on crossbar */}
          <span
            className="absolute top-0 left-0"
            style={{
              width: 10,
              height: 10,
              backgroundColor: light ? '#93c5fd' : '#2563eb',
              borderRadius: 1,
            }}
          />
          {/* Stem */}
          <span
            className="absolute"
            style={{
              top: 7,
              left: 9,
              width: 10,
              height: 45,
              backgroundColor: light ? '#ffffff' : '#1e3a8a',
              borderRadius: 1,
            }}
          />
        </span>

        {/* "ransitcare" */}
        <span
          className="font-display font-black tracking-tight"
          style={{
            fontSize: 28,
            color: light ? '#ffffff' : '#1e3a8a',
            lineHeight: 1,
          }}
        >
          ransitcare
        </span>
      </div>

      {/* "logistics" subtitle */}
      <span
        className="font-display font-medium tracking-widest uppercase"
        style={{
          fontSize: 9,
          letterSpacing: '0.35em',
          color: light ? '#93c5fd' : '#2563eb',
          marginTop: 2,
          marginLeft: 1,
        }}
      >
        logistics
      </span>
    </button>
  )
}
