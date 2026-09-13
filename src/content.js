// Edit this file to personalize the site. No other file needs to change
// for basic content updates.

export const profile = {
  name: 'Your Name',
  tagline: 'Software Engineer',
  intro:
    "I build things for the web. This is where I share my journey, the projects I've worked on, and how to reach me.",
  location: 'City, Country',
  email: 'you@example.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/yourusername' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { label: 'Twitter', url: 'https://twitter.com/yourusername' },
  ],
}

export const journey = [
  {
    year: '2020',
    title: 'Where it started',
    description:
      'Describe how you got into your field — a class, a project, a curiosity that stuck.',
  },
  {
    year: '2022',
    title: 'A turning point',
    description:
      'Describe a role, project, or decision that shaped your direction.',
  },
  {
    year: '2024',
    title: 'Where you are now',
    description:
      'Describe what you currently focus on and what you are building toward.',
  },
]

export const projects = [
  {
    title: 'Project One',
    description:
      'A short, concrete description of the project and the problem it solves.',
    tags: ['React', 'Node.js'],
    liveUrl: '',
    repoUrl: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description:
      'A short, concrete description of the project and the problem it solves.',
    tags: ['Python', 'ML'],
    liveUrl: '',
    repoUrl: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description:
      'A short, concrete description of the project and the problem it solves.',
    tags: ['TypeScript'],
    liveUrl: '',
    repoUrl: 'https://github.com/yourusername/project-three',
  },
]

export const resume = {
  summary:
    'One or two sentences summarizing your experience and what you specialize in.',
  highlights: [
    'A key skill or area of expertise',
    'A notable achievement or responsibility',
    'Another relevant qualification',
  ],
  // Place your resume PDF at public/resume.pdf — this link will then work.
  pdfPath: '/resume.pdf',
}
