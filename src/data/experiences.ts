import type { Experience } from "../interfaces/experienceObject"

export const experiences: Experience[] = [
  {
    company: 'Siemens',
    location: 'Atlanta, Georgia',
    period: "Summer '25",
    role: 'Embedded Systems Intern',
    bullets: [
      'Developed a system to do this',
      'I will make sure that I will hold up to that promise',
      'He might be willing to take the gamble of keeping me around',
      'Pretending like he was the target'
    ]
  },
  {
    company: 'Intel',
    location: 'Austin, Texas',
    period: "Summer '24",
    role: 'Software Engineering Intern',
    bullets: [
      'Optimized CPU performance algorithms',
      'Collaborated with hardware teams on chip validation',
      'Implemented debugging tools reducing testing time by 40%',
      'Contributed to open-source developer tools'
    ]
  },
  {
    company: 'Duke OIT',
    location: 'Durham, North Carolina',
    period: "Summer '23",
    role: 'Research Assistant',
    bullets: [
      'Built machine learning models for medical image analysis',
      'Published research on AI in healthcare diagnostics',
      'Led a team of 5 in prototype app development',
      'Presented findings at national CS conference'
    ]
  }
]
