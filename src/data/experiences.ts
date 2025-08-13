import type { Experience } from "../interfaces/experienceObject"

export const experiences: Experience[] = [
  {
    company: 'Siemens',
    location: 'Atlanta, Georgia',
    period: "Summer '25",
    role: 'Embedded Systems Intern',
    bullets: [
      'Engineered a fully interoperable Modbus TCP communication device on a microcontroller-based embedded platform supporting all standard register types, enabling seamless integration with any third-party Modbus client while achieving 100% test coverage via comprehensive black-box testing.',
      'Designed and implemented an abstracted, multi-protocol network layer and a high-performance Modbus server that accurately parses requests, executes register operations, and returns protocol-compliant responses, ensuring robust communication over both Ethernet and Wi-Fi networks.',
      'Enhanced user experience and maintainability by applying MVC architecture to integrate a TFT display with event-driven controls, real-time serial output visualization, and UI layouts designed with Figma, delivering intuitive device management adaptable across diverse client environments.'
    ]
  },
  {
    company: 'Intel',
    location: 'Rio Rancho, New Mexico',
    period: "Summer '24",
    role: 'Engineering Intern',
    bullets: [
      'Developed an automated notification system using React.js, Python, and SQL to flag units on hold over 24 hours, helping engineers prioritize urgent tasks and improve production efficiency, reducing lot tracking time by 70%.',
      'Expanded and organized the internal knowledge base and training materials on semiconductor fabrication and wafer process flows, speeding up onboarding and improving engineer understanding.',
      'Improved product quality and data reliability by monitoring device lifecycles, mapping unique identifiers across processes, and identifying data split points to prevent information loss.',
    ]
  },
  {
    company: 'Duke OIT',
    location: 'Durham, North Carolina',
    period: "Summer '23",
    role: 'Software Engineering Intern',
    bullets: [
      'Leveraged advanced Python libraries, including Pandas, GeoPandas, and Holoviews, to develop an interactive dashboard for Duke’s Nicholas School of the Environment, enabling real-time visualization of malaria outbreaks across Peru',
      'Conducted analysis on over 60,000 rows of time series data, identifying correlations between climate patterns and malaria outbreaks to enhance predictive modeling for future outbreaks',
      'Designed a dynamic district-level map with interactive filters, enabling researchers to track and analyze malaria outbreaks across years and regions',
      'Collaborated with Duke researchers in biweekly meetings to align with research goals and deliver actionable insights supporting ongoing studies'
    ]    
  }
]
