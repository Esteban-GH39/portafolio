// Proyectos mostrados en la sección Projects.
// `featured: true` activa el layout ampliado en la tarjeta.

export const projects = [
  {
    id: 'tablemaster',
    featured: true,
    name: 'TableMaster',
    tagline: 'Gestión de torneos de tenis de mesa, de principio a final.',
    description:
      'Plataforma web para administrar jugadores, torneos, grupos y eliminatorias directas de tenis de mesa. Calcula rankings automáticamente y conserva el historial completo de cada partido.',
    problem:
      'Los clubes y ligas amateur de tenis de mesa suelen organizar torneos con hojas de cálculo y grupos de chat, lo que genera errores en el fixture, rankings desactualizados y resultados que se pierden entre mensajes.',
    solution:
      'TableMaster centraliza todo el ciclo del torneo: inscripción de jugadores, sorteo de grupos, llaves de eliminación directa, captura de resultados en tiempo real y un ranking que se recalcula automáticamente después de cada partido.',
    architecture: [
      { layer: 'Frontend', detail: 'React — paneles de torneo, brackets interactivos y rankings en vivo.' },
      { layer: 'Backend', detail: 'Node.js + Express — API REST con controladores por dominio (jugadores, torneos, partidos).' },
      { layer: 'Base de datos', detail: 'PostgreSQL — modelo relacional para jugadores, torneos, grupos, partidos y resultados.' },
      { layer: 'Infraestructura', detail: 'Docker + Docker Compose para levantar API y base de datos con un solo comando.' },
      { layer: 'Documentación', detail: 'Swagger para documentar y probar cada endpoint de la API.' },
    ],
    challenges: [
      'Diseñar un modelo de datos que soporte tanto fase de grupos como eliminación directa sin duplicar lógica de partidos.',
      'Calcular el ranking automáticamente evitando recorridos costosos sobre el historial completo en cada actualización.',
      'Mantener la integridad de los cruces del bracket cuando un resultado se corrige después de haberse registrado.',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Swagger'],
    features: [
      'CRUD completo de jugadores',
      'Creación y gestión de torneos',
      'Sistema de grupos',
      'Eliminatorias directas',
      'Registro de resultados',
      'Ranking automático',
      'Historial de partidos',
    ],
    links: {
      github: 'https://github.com/Esteban-GH39/tablemaster',
    },
    image: null,
  },
  {
    id: 'proximo-proyecto',
    featured: false,
    placeholder: true,
    name: 'Próximo proyecto',
    tagline: 'Este espacio está reservado para el siguiente proyecto en construcción.',
    description: 'Nuevo proyecto en camino — pronto encontrarás aquí más trabajo de Esteban.',
    stack: [],
    features: [],
    links: {},
    image: null,
  },
]
