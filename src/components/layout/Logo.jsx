import logoSvg from '../../assets/transitcare-logo.svg'
import logoLightSvg from '../../assets/transitcare-logo-light.svg'
import { scrollToSection } from '@/utils/scroll'

export default function Logo({ light = false }) {
  return (
    <button onClick={() => scrollToSection('hero')} aria-label="Go to top">
      <img
        src={light ? logoLightSvg : logoSvg}
        alt="Transitcare Logistics"
        className="h-10 w-auto"
      />
    </button>
  )
}
