import {
  FaFileAlt,
  FaBoxes,
  FaSnowflake,
  FaChartLine,
  FaTruck,
  FaExclamationTriangle,
} from 'react-icons/fa'

export const features = [
  {
    id: 1,
    icon: FaFileAlt,
    title: 'Customs Clearance',
    description:
      'Expert navigation of complex customs regulations ensures smooth, compliant, and expedited clearance across all international borders.',
    highlight: true,
  },
  {
    id: 2,
    icon: FaBoxes,
    title: 'Cargo Consolidation',
    description:
      'Maximize efficiency and minimize costs by consolidating multiple smaller shipments into a single optimized container.',
    highlight: false,
  },
  {
    id: 3,
    icon: FaSnowflake,
    title: 'Perishable Goods Handling',
    description:
      'Specialized cold-chain logistics and controlled environment transport ensuring your perishable goods arrive fresh and intact.',
    highlight: false,
  },
  {
    id: 4,
    icon: FaChartLine,
    title: 'Supply Chain & Inventory Management',
    description:
      'End-to-end visibility and intelligent inventory solutions that optimize your supply chain from origin to final destination.',
    highlight: true,
  },
  {
    id: 5,
    icon: FaTruck,
    title: 'Transportation, Tracking & Delivery',
    description:
      'Real-time tracking across air, sea, and land freight with guaranteed last-mile delivery to your specified location.',
    highlight: false,
  },
  {
    id: 6,
    icon: FaExclamationTriangle,
    title: 'Oversized & Dangerous Goods',
    description:
      'Certified handling and specialized transport for oversized cargo and hazardous materials, fully compliant with international safety standards.',
    highlight: false,
  },
]
