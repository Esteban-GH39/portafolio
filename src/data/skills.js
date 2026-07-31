// Categorías de habilidades técnicas mostradas en la sección Skills.
// Los iconos se importan desde lucide-react en el componente que consume este archivo.

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'MonitorSmartphone',
    description: 'Interfaces rápidas, accesibles y mantenibles.',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    description: 'APIs sólidas con reglas de negocio claras.',
    items: ['Node.js', 'Express', 'REST APIs', 'Validación de datos', 'Manejo de errores'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    description: 'Modelos de datos pensados para escalar.',
    items: ['PostgreSQL', 'SQL', 'Modelamiento relacional'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    description: 'Flujo de trabajo profesional de principio a fin.',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Swagger', 'Thunder Client', 'pnpm'],
  },
]
