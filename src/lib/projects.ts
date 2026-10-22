export type Project = {
  id: string
  title: string
  category: string
  color: string
  tag: string
  rotation: number
  offsetY: number
  year: number
  description: string
  light?: boolean
}

export const projects: Project[] = [
  {
    id: 'slash-branding',
    title: 'Slash Branding',
    category: 'Visual Identity',
    color: '#FF4757',
    tag: '01',
    rotation: -9,
    offsetY: 15,
    year: 2024,
    description: 'Sistema completo de identidade visual para uma gravadora independente.',
  },
  {
    id: 'dark-fest',
    title: 'Dark Fest',
    category: 'Event Design',
    color: '#1A1A2E',
    tag: '02',
    rotation: -3,
    offsetY: -20,
    year: 2024,
    description: 'Série de cartazes para um festival de música underground.',
    light: true,
  },
  {
    id: 'neon-specimen',
    title: 'Neon Specimen',
    category: 'Typography',
    color: '#CCFF00',
    tag: '03',
    rotation: 5,
    offsetY: 8,
    year: 2024,
    description: 'Typeface experimental e booklet de espécime tipográfico.',
  },
  {
    id: 'mesa-ui',
    title: 'Mesa UI',
    category: 'Product Design',
    color: '#E8F0FF',
    tag: '04',
    rotation: -1,
    offsetY: -14,
    year: 2023,
    description: 'Design system e interface para uma ferramenta de produtividade.',
  },
  {
    id: 'campo-editorial',
    title: 'Campo Editorial',
    category: 'Photography',
    color: '#5A8A4A',
    tag: '05',
    rotation: 8,
    offsetY: 20,
    year: 2023,
    description: 'Livro fotográfico sobre paisagens rurais brasileiras.',
    light: true,
  },
  {
    id: 'wave-motion',
    title: 'Wave Motion',
    category: 'Motion Design',
    color: '#6C63FF',
    tag: '06',
    rotation: -6,
    offsetY: -8,
    year: 2023,
    description: 'Motion graphics reel para uma plataforma de streaming.',
    light: true,
  },
]

export const getProject = (id: string) => projects.find((p) => p.id === id)
