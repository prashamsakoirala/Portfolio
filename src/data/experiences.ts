import type { Experience } from "../interfaces/experienceObject"

export const experiences: Experience[] = [
  {
    company: 'Siemens',
    location: 'Atlanta, Georgia',
    period: "Summer '25",
    role: 'Embedded Systems Intern',
    bullets: [
      'Built a Modbus TCP device on a microcontroller platform supporting all standard register types, achieving 100% test coverage via black-box testing.',
      'Developed a multi-protocol network layer and high-performance Modbus server for robust Ethernet and Wi-Fi communication.',
      'Integrated a TFT display using MVC architecture with event-driven controls, real-time serial output, and Figma-designed layouts for intuitive device management.'
    ]
  },
  {
    company: 'Intel',
    location: 'Rio Rancho, New Mexico',
    period: "Summer '24",
    role: 'Engineering Intern',
    bullets: [
      'Created a React.js/Python/SQL notification system flagging delayed units, cutting lot tracking time by 70%.',
      'Expanded internal knowledge base and training materials for semiconductor fabrication and wafer processes.',
      'Improved data reliability by mapping identifiers, monitoring lifecycles, and identifying split points to prevent data loss.'
    ]
  },
  {
    company: 'Duke OIT',
    location: 'Durham, North Carolina',
    period: "Summer '23",
    role: 'Software Engineering Intern',
    bullets: [
      'Developed an interactive dashboard with Pandas, GeoPandas, and Holoviews to visualize malaria outbreaks in Peru.',
      'Analyzed 60,000+ time-series records to correlate climate trends with outbreak patterns.',
      'Designed an interactive district-level map with filters for year and region analysis.',
      'Collaborated with researchers to align tools with study objectives and deliver actionable insights.'
    ]    
  }  
]
