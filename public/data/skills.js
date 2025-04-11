import { FaCode, FaTools, FaDatabase } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'

export const skills = {
  languages: {
    title: 'Programming Languages',
    icon: FaCode,
    items: [
        { name: 'Java', experience: '5 years' },
        { name: 'Python', experience: '4 years' },
        { name: 'JavaScript', experience: '3 years' },
        { name: 'C++/C', experience: '2 years' },
        { name: 'Assembly', experience: '1 year' },
        { name: 'SAS', experience: '3 years' },
        { name: 'R', experience: '2.5 years' },
    ]
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    icon: DiReact,
    items: [
        { name: 'React', experience: '2.5 years' },
        { name: 'Node.js', experience: '2.5 years' },
        { name: 'Selenium', experience: '2 years' },
        { name: 'TensorFlow', experience: '1 year' },
        { name: 'Flask', experience: '1 year' },
    ]
  },
  tools: {
    title: 'Dev Tools & DevOps',
    icon: FaTools,
    items: [
        { name: 'Git', experience: '3 years' },
        { name: 'JUnit Test', experience: '2 years' },
        { name: 'Docker', experience: '1 year' },
        { name: 'AWS', experience: '1 year' },
        { name: 'Kubernetes', experience: '1 year' }
    ]
  },
  databases: {
    title: 'Databases',
    icon: FaDatabase,
    items: [
        { name: 'MongoDB', experience: '2 years' },
        { name: 'PostgreSQL', experience: '1.5 years' },
        { name: 'MySQL', experience: '1.5 years' },
    ]
  }
}