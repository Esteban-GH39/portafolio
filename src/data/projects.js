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
      demo: 'https://vigilancia-ia-1.onrender.com',
      github: 'https://github.com/Esteban-GH39/vigilancia-ia',
    },
  },
  {
    id: 'taskflow',
    featured: true,
    name: 'TaskFlow',
    tagline: 'Gestor de tareas con cuentas de usuario, filtros y estadísticas en vivo.',
    description:
      'Cada persona tiene su propio espacio protegido con inicio de sesión: crea, edita, filtra, busca y ordena sus tareas por estado, prioridad y fecha de vencimiento, con paginación y un resumen de cuántas están pendientes o vencidas.',
    problem:
      'Las listas de tareas sueltas (notas, chats, papeles) no permiten filtrar por estado o prioridad, no avisan de lo que ya venció y no separan las tareas de cada persona.',
    solution:
      'TaskFlow organiza las tareas por estado y prioridad, permite buscar por texto y ordenar por vencimiento, y muestra un resumen en vivo. Cada usuario solo ve y modifica lo suyo.',
    architecture: [
      { layer: 'Frontend', detail: 'React + Vite — Context API para la sesión, hooks propios y cambios de estado que se ven al instante.' },
      { layer: 'Backend', detail: 'Node.js + Express 5 — API REST con autenticación JWT, contraseñas con bcrypt, helmet y límite de peticiones.' },
      { layer: 'Validación', detail: 'Zod valida cada petición y devuelve errores claros por campo.' },
      { layer: 'Base de datos', detail: 'SQLite — consultas parametrizadas con filtros, orden y paginación resueltos en SQL.' },
      { layer: 'Calidad', detail: 'Pruebas de integración de la API con node:test, incluida una que comprueba el aislamiento entre usuarios.' },
      { layer: 'Despliegue', detail: 'Render — un solo servicio sirve la API y el frontend compilado.' },
    ],
    challenges: [
      'Garantizar que un usuario nunca vea ni modifique tareas de otro: cada consulta filtra por el dueño del token y una prueba lo verifica.',
      'Evitar que una actualización parcial pise los campos que no se enviaron: un error real detectado al probar, ahora cubierto con una prueba de regresión.',
      'Mostrar el cambio de estado al instante y revertirlo si el servidor lo rechaza, sin que una respuesta antigua pise a una más reciente.',
    ],
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'JWT', 'Zod'],
    features: [
      'Registro e inicio de sesión',
      'CRUD de tareas por usuario',
      'Filtros por estado y prioridad',
      'Búsqueda y orden por vencimiento',
      'Paginación',
      'Estadísticas y tareas vencidas',
    ],
    links: {
      // demo: 'https://TU-SERVICIO-TASKFLOW.onrender.com', // ← descomenta y pon la URL de Render
      github: 'https://github.com/Esteban-GH39/taskflow',
    },
    demoNote:
      'El demo usa un plan gratuito: la primera carga puede tardar hasta un minuto y los datos se reinician cada cierto tiempo.',
  },
  {
    id: 'shortly',
    featured: true,
    name: 'Shortly',
    tagline: 'Acortador de URLs con alias, caducidad y estadísticas de clics.',
    description:
      'Acorta una URL, personaliza el alias, ponle fecha de caducidad y mira cuántos clics recibe por día, de dónde llegan y desde qué tipo de dispositivo. No pide cuenta: cada navegador se identifica con un token anónimo.',
    problem:
      'Los enlaces largos son incómodos de compartir y, una vez enviados, no sabes si alguien los abrió, desde dónde ni cuándo.',
    solution:
      'Shortly genera un enlace corto (o el alias que elijas), redirige al destino y registra cada visita para mostrar los clics de los últimos 14 días, su origen y el dispositivo.',
    architecture: [
      { layer: 'Frontend', detail: 'React + Vite — useReducer para la lista y una gráfica de barras dibujada en SVG, sin librerías.' },
      { layer: 'Backend', detail: 'Node.js + Express 5 — API REST y redirecciones, con límite de creación de enlaces.' },
      { layer: 'Códigos', detail: 'Generación en base62 con crypto, resolviendo colisiones y bloqueando alias reservados.' },
      { layer: 'Caché', detail: 'Caché LRU propia (estructura Map) para resolver los enlaces más visitados sin tocar la base de datos.' },
      { layer: 'Base de datos', detail: 'SQLite — transacciones, índices y agregaciones con GROUP BY para las estadísticas.' },
      { layer: 'Calidad', detail: '18 pruebas unitarias y de integración con node:test.' },
    ],
    challenges: [
      'Usar redirección 302 en lugar de 301 para que el navegador no la guarde en caché y cada visita quede contada.',
      'Impedir el abuso del servicio: se bloquean protocolos como javascript: y data:, los alias reservados y los enlaces al propio servicio.',
      'Invalidar la caché al borrar un enlace para que deje de funcionar de inmediato, sin servir datos viejos.',
    ],
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'Zod'],
    features: [
      'Alias personalizados',
      'Fecha de caducidad',
      'Clics por día, origen y dispositivo',
      'Caché LRU',
      'Copia automática del enlace nuevo',
    ],
    links: {
      demo: 'https://shortly-61n9.onrender.com',
      github: 'https://github.com/Esteban-GH39/shortly',
    },
    demoNote:
      'El demo usa un plan gratuito: la primera carga puede tardar hasta un minuto y los enlaces creados se borran cuando el servicio se reinicia.',
  },
  {
    id: 'tienda-cqrs',
    featured: true,
    name: 'Tienda CQRS',
    tagline: 'Tienda en línea en vivo que muestra cómo se combinan CQRS, Kafka, RabbitMQ y WebSocket.',
    description:
      'Proyecto de Sistemas Distribuidos (Universidad Central): una tienda de pedidos con dos aplicaciones Angular (la Tienda y el Panel de administración), un servidor en Spring Boot, dos bases de datos y dos sistemas de mensajería, hecha para ver funcionando cómo encajan todas las piezas.',
    problem:
      'Conceptos como CQRS, mensajería de eventos y consistencia eventual son abstractos: en un diagrama se entienden, pero es difícil ver qué pasa realmente entre servicios cuando entra un pedido.',
    solution:
      'Cada pedido recorre el stack completo y una pestaña "Log del stack" muestra en tiempo real el momento exacto en que se usa cada herramienta. Un cambio hecho en una pantalla aparece al instante en todas las demás por WebSocket.',
    architecture: [
      { layer: 'Clientes', detail: 'Angular 18 — Tienda y Panel de administración como aplicaciones independientes que comparten servicios (API, tiempo real y log).' },
      { layer: 'Servidor', detail: 'Java 21 + Spring Boot 3.3 — comandos y consultas separados en código, en API y en base de datos (CQRS).' },
      { layer: 'Comandos', detail: 'PostgreSQL en Supabase — el pedido y su evento se guardan en una misma transacción (patrón outbox), con migraciones Flyway.' },
      { layer: 'Eventos', detail: 'Kafka — el outbox publica en un tópico y un proyector consume los eventos.' },
      { layer: 'Consultas', detail: 'MongoDB — copia del pedido ya preparada para mostrar; las consultas leen solo de ahí.' },
      { layer: 'Mensajería', detail: 'RabbitMQ — enruta los eventos a colas de trabajo (inventario, facturación, logística) y hace el broadcast.' },
      { layer: 'Tiempo real', detail: 'WebSocket (STOMP) — avisa a todas las pantallas cuando la copia de lectura ya está lista.' },
      { layer: 'Infraestructura', detail: 'Docker Compose para levantar todo el stack y GitHub Actions para la integración continua.' },
    ],
    challenges: [
      'Guardar el pedido y publicar su evento sin que uno ocurra sin el otro: el outbox lo resuelve dentro de una sola transacción.',
      'Convivir con la consistencia eventual: entre el comando y la consulta pasa un instante, por eso el aviso en vivo se envía solo cuando la copia de lectura ya está actualizada.',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'MongoDB', 'Kafka', 'RabbitMQ', 'WebSocket', 'Docker'],
    links: {
      github: 'https://github.com/Esteban-GH39/tienda-cqrs',
    },
  },
  {
    id: 'sporty-smash',
    featured: false,
    name: 'Sporty Smash',
    tagline: 'Juego de combinar balones (match-3) para dos jugadores, en HTML, CSS y JavaScript puro.',
    description:
      'Cada jugador elige su deportista y tiene 2:30 minutos para arrastrar un balón a una casilla vecina y alinear 3 o más iguales. Al terminar el tiempo de ambos, gana quien haya sumado más puntos.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://esteban-gh39.github.io/sporty-smash/',
      github: 'https://github.com/Esteban-GH39/sporty-smash',
    },
  },
  {
    id: 'parkfinder',
    featured: true,
    status: 'in-progress',
    name: 'ParkFinder',
    tagline: 'Buscar, reservar y pagar parqueadero desde el celular, y administrarlo desde el mismo sistema.',
    description:
      'Plataforma de parqueaderos con dos caras: una app móvil para que los conductores encuentren, reserven y paguen su espacio, y un panel para que cada administrador gestione sus cupos y el ingreso y salida de vehículos. Se desarrolla en equipo y vive en dos repositorios: la app (Flutter) y la API (Quarkus).',
    problem:
      'Encontrar parqueadero con cupo suele ser dar vueltas sin certeza, y quienes administran un parqueadero llevan reservas, cupos y pagos a mano, sin un registro confiable.',
    solution:
      'ParkFinder muestra los parqueaderos por zona con su detalle, permite reservar y pagar desde la app y guía al conductor hasta el lugar con una ruta en el mapa. Del otro lado, el administrador registra y edita su parqueadero, controla los cupos, valida la reserva por código y consulta el historial de ingresos.',
    architecture: [
      { layer: 'App móvil', detail: 'Flutter + Dart — pantallas separadas para el cliente (búsqueda, reserva, pago, billetera, calificaciones) y para el administrador.' },
      { layer: 'Mapas y rutas', detail: 'flutter_map con OpenStreetMap y OSRM, más geolocalización del dispositivo — sin llaves de API.' },
      { layer: 'Backend', detail: 'Java + Quarkus — API REST organizada por capas (modelo, aplicación, infraestructura, persistencia y DTO).' },
      { layer: 'Base de datos', detail: 'PostgreSQL, con Hibernate ORM y Panache.' },
      { layer: 'Documentación', detail: 'OpenAPI para documentar y probar los endpoints.' },
      { layer: 'Infraestructura', detail: 'Docker para empaquetar la API.' },
      { layer: 'Trabajo en equipo', detail: 'Una rama por historia de usuario y pull requests hacia develop en ambos repositorios.' },
    ],
    stack: ['Flutter', 'Dart', 'Java', 'Quarkus', 'PostgreSQL', 'OpenAPI', 'Docker'],
    links: {
      repos: [
        { label: 'API · Backend', url: 'https://github.com/Esteban-GH39/parkfinder-api' },
        { label: 'App · Flutter', url: 'https://github.com/Esteban-GH39/parkfinder-app' },
      ],
    },
    // videoUrl: 'https://youtu.be/XXXXXXXXXXX',
    // captions: { '01-busqueda.png': 'Búsqueda de parqueaderos por zona' },
  },
  {
    id: 'blog-esteban',
    featured: false,
    name: 'Blog personal',
    tagline: 'Devlog personal construido con Astro + CMS headless.',
    description:
      'Blog personal donde comparto notas sobre los proyectos en los que trabajo y lo que voy aprendiendo en el camino.',
    stack: ['Astro'],
    links: {
      github: 'https://github.com/Esteban-GH39/blog-esteban',
    },
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
  },
]