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
      demo: 'https://tablemaster-frontend.onrender.com',
      github: 'https://github.com/Esteban-GH39/tablemaster',
    },
    image: null,
  },
  {
    id: 'vigilancia-ia',
    featured: true,
    name: 'Vigilancia IA',
    tagline: 'Vigilancia en tiempo real con detección de objetos y análisis de comportamiento.',
    description:
      'Sistema inteligente de vigilancia que combina detección de movimiento, detección de objetos con YOLOv8 y análisis de comportamiento (merodeo, velocidad sospechosa) para generar alertas automáticas, con un dashboard web en vivo. Desarrollado en equipo para la asignatura Práctica de Ingeniería II — Universidad Central.',
    problem:
      'Los sistemas de videovigilancia tradicionales solo graban: requieren que una persona esté mirando la pantalla para detectar algo anómalo, lo que hace casi imposible reaccionar a tiempo ante comportamientos sospechosos.',
    solution:
      'Vigilancia IA analiza el video en tiempo real, detecta personas y objetos con YOLOv8, evalúa patrones de comportamiento como merodeo o desplazamientos a velocidad sospechosa, y genera alertas automáticas sin depender de que alguien esté observando la transmisión.',
    architecture: [
      { layer: 'Backend', detail: 'FastAPI (Python) — API REST + WebSocket para transmisión de video en tiempo real.' },
      { layer: 'Visión por computador', detail: 'OpenCV + Ultralytics YOLOv8 para detección de movimiento y de objetos/personas.' },
      { layer: 'Análisis', detail: 'Módulo propio de análisis de comportamiento (merodeo, velocidad) y sistema de alertas.' },
      { layer: 'Persistencia', detail: 'SQLAlchemy + SQLite para el historial de eventos y alertas.' },
      { layer: 'Frontend', detail: 'HTML/CSS/JavaScript — dashboard en vivo consumiendo video vía WebSocket.' },
      { layer: 'Infraestructura', detail: 'Docker para empaquetar backend, modelo YOLOv8 y dependencias del sistema (OpenCV, ffmpeg).' },
    ],
    challenges: [
      'Procesar video en tiempo real con un modelo de detección de objetos sin saturar la API ni introducir latencia perceptible.',
      'Diseñar reglas de análisis de comportamiento (merodeo, velocidad) que generen alertas útiles sin exceso de falsos positivos.',
      'Adaptar el sistema para un despliegue en la nube sin cámara física, usando un video de referencia en bucle sin tocar la lógica de detección.',
    ],
    stack: ['Python', 'FastAPI', 'OpenCV', 'YOLOv8', 'SQLAlchemy', 'WebSockets', 'Docker'],
    features: [
      'Detección de movimiento en tiempo real',
      'Detección de personas y objetos (YOLOv8)',
      'Análisis de comportamiento (merodeo, velocidad)',
      'Alertas automáticas',
      'Dashboard web en vivo vía WebSocket',
      'Historial de eventos y alertas',
    ],
    links: {
      demo: 'https://vigilancia-ia-demo.onrender.com',
      github: 'https://github.com/Esteban-GH39/vigilancia-ia',
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
