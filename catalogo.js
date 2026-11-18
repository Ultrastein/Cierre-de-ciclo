// Catalogo de temas 2026 (compartido por la app de alumnos y el panel del profe).
// Para agregar o cambiar temas del proximo año, editar SOLO este archivo.
/* ===== CONTENIDOS (Grilla 2026 · Bereshit) ===== */
const AREAS = {
  alf:{n:'Alfabetización digital',e:'💻',c:'var(--c-alf)',hex:'#4cc9f0'},
  ciu:{n:'Ciudadanía digital',e:'🛡️',c:'var(--c-ciu)',hex:'#2ecc71'},
  pyr:{n:'Programación y robótica',e:'🤖',c:'var(--c-pyr)',hex:'#e94560'},
  mak:{n:'Maker e ingeniería',e:'🔧',c:'var(--c-mak)',hex:'#ffd700'},
  ia:{n:'Inteligencia Artificial',e:'🧠',c:'var(--c-ia)',hex:'#b388ff'},
  pro:{n:'Proyectos',e:'🌍',c:'var(--c-pro)',hex:'#ff9f43'}
};
const T = (a,em,n,d)=>({a,em,n,d});
const COMUN = [
  T('alf','🌐','Exploradores de la Web','Buscar información en internet y saber si es confiable'),
  T('alf','⌨️','Mecanografía','Escribir rápido y bien con el teclado'),
  T('alf','🤝','Creadores colaborativos','Trabajar en equipo en el mismo documento en línea'),
  T('alf','📝','El escritor digital (Google Docs)','Formato, títulos, imágenes y textos prolijos'),
  T('alf','📽️','Historias con diapositivas','Armar presentaciones en Google Presentaciones'),
  T('alf','📊','Magia con números y cuadritos','Planillas de cálculo: celdas, fórmulas y gráficos'),
  T('alf','🏁','El Gran Desafío Digital','Clase integradora de todo lo aprendido'),
  T('ciu','👣','Nuestra huella y seguridad digital','Qué dejamos en internet y cómo cuidarnos'),
  T('ciu','©️','Derechos de autor','Usar contenido ajeno de forma correcta y citar'),
  T('ciu','🦫','Desafío Bebras','Retos de lógica y pensamiento computacional'),
  T('pyr','⚙️','Poleas con Lego Spike','Construcción e ingeniería con sistemas de poleas'),
  T('pyr','🏗️','Lego WeDo: estructuras robustas','Construir estructuras firmes que no se caigan'),
  T('pyr','💡','Robot articulado con luces','Armar un robot con partes móviles y luces'),
  T('pyr','🦈','Scratch: Tiburón','Programar un juego con personajes y movimiento'),
  T('pyr','🔵','Ozobot programado en la compu','Programar al Ozobot con bloques (Ozoblockly)'),
  T('pyr','🧩','Compute It','Resolver niveles de programación cada vez más difíciles'),
  T('pyr','🧱','Pilas Bloques (nivel intermedio)','Algoritmos, repeticiones y condicionales con bloques'),
  T('pyr','🧊','Tinkercad: diseño 3D','Diseñar piezas en 3D y mandarlas a imprimir'),
  T('mak','🚀','Desafío aterrizaje','Diseñar algo que proteja una carga al caer'),
  T('mak','❤️','Pulsómetro','Construir un medidor de pulso'),
  T('pro','📐','GeoGebra','Geometría y matemática con herramientas digitales'),
  T('pro','🎤','Proyecto Integrador','Proyecto final con muestra para presentar')
];
const EXTRA = {
  5:[
    T('pyr','🧲','Lego Spike','Construir y programar con Lego Spike'),
    T('pyr','📟','micro:bit','Programar una placa con LEDs, botones y sensores'),
    T('mak','🌱','Fuentes de energía e impacto ambiental','Energías renovables y cómo afectan al planeta'),
    T('ia','🏠','Usos cotidianos de la IA','Dónde aparece la IA en nuestra vida diaria'),
    T('ia','⚖️','¿Qué es un sesgo?','Cuando la IA es injusta o se equivoca por los datos'),
    T('ia','🧑‍💻','La IA como asistente','Usar la IA para ayudarnos, no para que haga todo'),
    T('ia','📜','Nuestras reglas para usar IA','Acordar cómo usar la IA de forma responsable')
  ],
  6:[
    T('pyr','🏓','Scratch: Ping Pong','Programar un juego con rebotes y puntaje'),
    T('mak','🎲','Probabilidad (con Matemática)','Clase compartida: azar, experimentos y datos'),
    T('ia','🎭','Estereotipos en la IA','Cómo la IA puede repetir prejuicios'),
    T('ia','🔒','Privacidad y seguridad con IA','Qué datos NO compartir con una IA'),
    T('ia','🧑‍💻','IA como asistente para programar','Pedirle ayuda a una IA para entender código'),
    T('ia','🗣️','Debate final sobre IA','Argumentar a favor y en contra')
  ],
  7:[
    T('pyr','⛏️','Studio Code: Minecraft Adventure','Programar personajes de Minecraft con bloques'),
    T('mak','🎈','Auto robot a globo','Construir un auto que avanza con aire'),
    T('mak','⚡','Fuentes de energía y redes de distribución','Cómo llega la electricidad a nuestras casas'),
    T('ia','🧑‍💻','IA como asistente para programar','Pedirle ayuda a una IA para entender código'),
    T('ia','🖼️','¿De quién es un contenido hecho con IA?','Autoría, derechos y creaciones con IA'),
    T('ia','📚','¿Cómo aprende una IA?','Datos, entrenamiento y patrones'),
    T('ia','🌎','Debate: IA, ética y futuro','Pensar el futuro de la IA con argumentos')
  ]
};
