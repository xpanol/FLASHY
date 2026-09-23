/* ==========================================================
   GLOSARIO-DATA.JS
   Aquí vive TODO el vocabulario bilingüe (ES/EN).
   Para añadir palabras nuevas: entra en la categoría que
   corresponda y añade una línea más al array "entries":
   ["palabra en español", "word in english"],
   Para crear una categoría nueva, copia un bloque { id:...,
   label:..., title:..., entries:[...] } completo y cambia
   sus valores.
   ========================================================== */

const GLOSSARY=[
  { id:"general-digital", label:"General", title:"General Digital / Lo Digital en General", entries:[
    ["Digital","Digital"],["En línea / Online","Online"],["Fuera de línea / Offline","Offline"],
    ["Plataforma","Platform"],["Aplicación / App","Application / App"],["Interfaz de usuario","User Interface (UI)"],
    ["Experiencia de usuario","User Experience (UX)"],["Accesibilidad","Accessibility"],["Usabilidad","Usability"],
    ["Responsive / Adaptable","Responsive"],["Móvil primero","Mobile First"],["Nativo (app)","Native (app)"],
    ["Híbrido (app)","Hybrid (app)"],["Navegador","Browser"],["Dispositivo","Device"],["Escritorio / Desktop","Desktop"]
  ]},
  { id:"acciones", label:"Acciones", title:"Acciones Digitales / Digital Actions", entries:[
    ["Iniciar sesión","Log in"],["Cerrar sesión","Log out"],["Crear una cuenta","Create an account"],
    ["Registrarse","Sign up"],["Rellenar un formulario","Fill out a form"],["Enviar (un formulario)","Submit"],
    ["Hacer clic","Click"],["Hacer doble clic","Double-click"],["Hacer clic derecho","Right-click"],
    ["Tocar (pantalla táctil)","Tap"],["Mantener pulsado","Long-press / Press and hold"],["Desplazarse / hacer scroll","Scroll"],
    ["Deslizar","Swipe"],["Arrastrar y soltar","Drag and drop"],["Hacer zoom / acercar","Zoom in"],
    ["Alejar / reducir el zoom","Zoom out"],["Pellizcar para hacer zoom","Pinch to zoom"],["Seleccionar","Select"],
    ["Marcar la casilla","Check the box"],["Desmarcar la casilla","Uncheck the box"],["Copiar","Copy"],
    ["Pegar","Paste"],["Cortar","Cut"],["Deshacer","Undo"],["Rehacer","Redo"],["Guardar","Save"],
    ["Guardar como","Save as"],["Descargar","Download"],["Subir / cargar (un archivo)","Upload"],
    ["Adjuntar un archivo","Attach a file"],["Abrir un enlace","Open a link"],["Abrir una pestaña nueva","Open a new tab"],
    ["Cerrar una pestaña","Close a tab"],["Cerrar la ventana","Close the window"],["Minimizar","Minimize"],
    ["Maximizar","Maximize"],["Actualizar / refrescar la página","Refresh the page"],["Buscar","Search"],
    ["Filtrar","Filter"],["Ordenar","Sort"],["Activar","Turn on / Enable"],["Desactivar","Turn off / Disable"],
    ["Instalar","Install"],["Desinstalar","Uninstall"],["Actualizar (el software)","Update"],["Reiniciar","Restart"],
    ["Apagar","Shut down"],["Encender","Turn on"],["Conectar","Connect"],["Desconectar","Disconnect"],
    ["Sincronizar","Sync"],["Restablecer la contraseña","Reset the password"],["Cambiar la contraseña","Change the password"],
    ["Verificar el correo electrónico","Verify the email"],["Habilitar la verificación en dos pasos","Enable two-factor authentication (2FA)"],
    ["Bloquear","Block"],["Silenciar","Mute"],["Denunciar / reportar","Report"],["Compartir pantalla","Share screen"],
    ["Grabar la pantalla","Record the screen"],["Hacer una captura de pantalla","Take a screenshot"],["Escribir / teclear","Type"],
    ["Pulsar una tecla","Press a key"],["Arrastrar el cursor","Drag the cursor"],["Marcar como favorito / guardar","Bookmark"],
    ["Fijar (un mensaje, una pestaña)","Pin"],["Anclar en la parte superior","Pin to top"],["Archivar","Archive"],
    ["Eliminar / borrar","Delete"],["Restaurar","Restore"],["Vaciar la papelera","Empty the trash"],["Exportar","Export"],
    ["Importar","Import"],["Duplicar","Duplicate"],["Renombrar","Rename"]
  ]},
  { id:"web", label:"Web & Dev", title:"Web & Desarrollo / Web & Development", entries:[
    ["Sitio web","Website"],["Página de aterrizaje","Landing Page"],["Página de inicio","Homepage"],["Dominio","Domain"],
    ["URL","URL (Uniform Resource Locator)"],["Alojamiento web","Web Hosting"],["Servidor","Server"],["Backend","Backend"],
    ["Frontend","Frontend"],["Base de datos","Database"],["API","API (Application Programming Interface)"],
    ["Código fuente","Source Code"],["Desarrollo ágil","Agile Development"],["Versión beta","Beta Version"],
    ["Control de versiones","Version Control"],["Integración continua","Continuous Integration (CI)"],["Despliegue","Deployment"],
    ["Entorno de pruebas","Testing Environment / Staging"],["Caché","Cache"],["Cookie","Cookie"]
  ]},
  { id:"marketing", label:"Marketing", title:"Marketing Digital / Digital Marketing", entries:[
    ["Marketing digital","Digital Marketing"],["Marketing de contenidos","Content Marketing"],["Marketing de influencers","Influencer Marketing"],
    ["Marketing de afiliados","Affiliate Marketing"],["Marketing por correo electrónico","Email Marketing"],["Marketing entrante","Inbound Marketing"],
    ["Marketing saliente","Outbound Marketing"],["Embudo de ventas","Sales Funnel"],["Recorrido del cliente","Customer Journey"],
    ["Punto de contacto","Touchpoint"],["Propuesta de valor","Value Proposition"],["Público objetivo","Target Audience"],
    ["Segmentación","Segmentation"],["Posicionamiento de marca","Brand Positioning"],["Identidad de marca","Brand Identity"],
    ["Notoriedad de marca","Brand Awareness"],["Reconocimiento de marca","Brand Recognition"],["Estrategia de contenido","Content Strategy"],
    ["Calendario editorial","Editorial Calendar"],["Automatización de marketing","Marketing Automation"]
  ]},
  { id:"seo", label:"SEO", title:"SEO & Contenido / SEO & Content", entries:[
    ["Posicionamiento en buscadores","Search Engine Optimization (SEO)"],["Palabra clave","Keyword"],["Palabra clave de cola larga","Long-tail Keyword"],
    ["Intención de búsqueda","Search Intent"],["Volumen de búsqueda","Search Volume"],["Dificultad de palabra clave","Keyword Difficulty"],
    ["SEO en página","On-page SEO"],["SEO técnico","Technical SEO"],["SEO fuera de página","Off-page SEO"],["Enlace de retroceso","Backlink"],
    ["Autoridad de dominio","Domain Authority (DA)"],["Texto ancla","Anchor Text"],["Mapa del sitio","Sitemap"],["Robots.txt","Robots.txt"],
    ["Etiqueta de título","Title Tag"],["Meta descripción","Meta Description"],["Datos estructurados","Structured Data / Schema"],
    ["Velocidad de página","Page Speed"],["Experiencia de página","Page Experience"],["Señales de usuario","User Signals"]
  ]},
  { id:"social", label:"Social Media", title:"Redes Sociales / Social Media", entries:[
    ["Redes sociales","Social Media"],["Publicación","Post"],["Historia","Story"],["Reel / Video corto","Reel / Short Video"],
    ["Hilo","Thread"],["Hashtag (#)","Hashtag (#)"],["Mención","Mention"],["Nombre de usuario","Handle / Username"],["Etiqueta","Tag"],
    ["Seguidor","Follower"],["Alcance","Reach"],["Alcance orgánico","Organic Reach"],["Impresiones","Impressions"],
    ["Interacción / Engagement","Engagement"],["Tasa de interacción","Engagement Rate"],["Me gusta","Like"],["Compartir","Share"],
    ["Comentario","Comment"],["Guardar (publicación)","Save"],["Viralidad","Virality"],["Comunidad en línea","Online Community"],
    ["Gestión de comunidades","Community Management"],["Escucha social","Social Listening"],["Monitorización de marca","Brand Monitoring"]
  ]},
  { id:"analytics", label:"Analytics", title:"Analytics & Métricas / Analytics & Metrics", entries:[
    ["Analítica web","Web Analytics"],["Indicador clave de rendimiento","Key Performance Indicator (KPI)"],["Métrica","Metric"],
    ["Panel de control","Dashboard"],["Tráfico web","Web Traffic"],["Tráfico orgánico","Organic Traffic"],["Fuente de tráfico","Traffic Source"],
    ["Sesión","Session"],["Usuario único","Unique User"],["Páginas vistas","Pageviews"],["Tasa de rebote","Bounce Rate"],
    ["Tiempo en página","Time on Page"],["Profundidad de desplazamiento","Scroll Depth"],["Tasa de conversión","Conversion Rate (CR)"],
    ["Embudo de conversión","Conversion Funnel"],["Objetivo","Goal"],["Evento (analítica)","Event (analytics)"],["Seguimiento","Tracking"],
    ["Etiqueta (tag)","Tag"],["Píxel de seguimiento","Tracking Pixel"],["Atribución","Attribution"],["Modelo de atribución","Attribution Model"],
    ["Prueba A/B","A/B Test"],["Test multivariante","Multivariate Test"],["Cohorte","Cohort"],["Segmento","Segment"],["Informe","Report"],
    ["Cuadro de mando","Scorecard"]
  ]},
  { id:"paid", label:"Paid Media", title:"Paid Media & Publicidad / Paid Media & Advertising", entries:[
    ["Medios pagados","Paid Media"],["Publicidad digital","Digital Advertising"],["Anuncio","Ad / Advertisement"],["Campaña","Campaign"],
    ["Conjunto de anuncios","Ad Set"],["Creatividad publicitaria","Ad Creative"],["Texto del anuncio","Ad Copy"],["Puja","Bid"],
    ["Presupuesto","Budget"],["Coste por clic","Cost Per Click (CPC)"],["Coste por mil impresiones","Cost Per Mille (CPM)"],
    ["Coste por adquisición","Cost Per Acquisition (CPA)"],["Retorno de la inversión publicitaria","Return on Ad Spend (ROAS)"],
    ["Retorno de la inversión","Return on Investment (ROI)"],["Subasta de anuncios","Ad Auction"],["Puntuación de calidad","Quality Score"],
    ["Frecuencia","Frequency"],["Límite de frecuencia","Frequency Cap"],["Red de display","Display Network"],
    ["Remarketing / Retargeting","Remarketing / Retargeting"],["Segmentación por audiencia","Audience Targeting"],
    ["Público similar","Lookalike Audience"],["Exclusión de audiencia","Audience Exclusion"]
  ]},
  { id:"ecommerce", label:"E-commerce", title:"E-commerce & Conversión / E-commerce & Conversion", entries:[
    ["Comercio electrónico","E-commerce"],["Tienda en línea","Online Store"],["Carrito de compra","Shopping Cart"],["Proceso de pago","Checkout"],
    ["Pasarela de pago","Payment Gateway"],["Pedido","Order"],["Factura","Invoice"],["Devolución","Return / Refund"],
    ["Tasa de abandono de carrito","Cart Abandonment Rate"],["Valor medio del pedido","Average Order Value (AOV)"],
    ["Valor del ciclo de vida del cliente","Customer Lifetime Value (CLV / LTV)"],["Coste de adquisición de cliente","Customer Acquisition Cost (CAC)"],
    ["Optimización de la tasa de conversión","Conversion Rate Optimization (CRO)"],["Cuello de botella","Bottleneck"],
    ["Llamada a la acción","Call to Action (CTA)"],["Botón de llamada a la acción","CTA Button"],["Formulario de captación","Lead Capture Form"],
    ["Página de agradecimiento","Thank You Page"],["Upselling","Upselling"],["Venta cruzada","Cross-selling"]
  ]},
  { id:"email", label:"Email", title:"Email Marketing", entries:[
    ["Lista de correo","Mailing List"],["Suscriptor","Subscriber"],["Tasa de apertura","Open Rate"],["Tasa de clics en email","Click-through Rate (CTR)"],
    ["Tasa de cancelación de suscripción","Unsubscribe Rate"],["Tasa de rebote de email","Email Bounce Rate"],["Spam / Correo no deseado","Spam / Junk Mail"],
    ["Doble confirmación","Double Opt-in"],["Segmentación de lista","List Segmentation"],["Automatización de correo","Email Automation"],
    ["Secuencia de bienvenida","Welcome Sequence"],["Correo de recuperación","Re-engagement Email"],["Plantilla de correo","Email Template"],
    ["Remitente","Sender"],["Asunto del correo","Subject Line"],["Preencabezado","Preheader"],["Capacidad de entrega","Deliverability"],
    ["Lista negra","Blacklist"]
  ]},
  { id:"data", label:"Datos", title:"Datos & Privacidad / Data & Privacy", entries:[
    ["Dato / Dato personal","Data / Personal Data"],["Conjunto de datos","Dataset"],["Big Data","Big Data"],["Minería de datos","Data Mining"],
    ["Visualización de datos","Data Visualization"],["Inteligencia artificial","Artificial Intelligence (AI)"],["Aprendizaje automático","Machine Learning (ML)"],
    ["Algoritmo","Algorithm"],["Reglamento General de Protección de Datos","General Data Protection Regulation (GDPR)"],["Protección de datos","Data Protection"],
    ["Consentimiento","Consent"],["Política de privacidad","Privacy Policy"],["Datos propios (first-party)","First-party Data"],
    ["Datos de terceros","Third-party Data"],["Cookie de terceros","Third-party Cookie"],["Anonimización de datos","Data Anonymization"],
    ["Brecha de datos","Data Breach"],["Ciberseguridad","Cybersecurity"]
  ]},
  { id:"saas", label:"SaaS", title:"SaaS & Herramientas / SaaS & Tools", entries:[
    ["Software como servicio","Software as a Service (SaaS)"],["Nube / Cloud","Cloud"],["Suscripción","Subscription"],["Prueba gratuita","Free Trial"],
    ["Modelo freemium","Freemium Model"],["Plan de precios","Pricing Plan"],["Integración","Integration"],["Complemento / Plugin","Plugin / Add-on"],
    ["Panel de administración","Admin Panel"],["Acceso de usuario","User Access"],["Rol de usuario","User Role"],["Incorporación de usuarios","User Onboarding"],
    ["Tasa de abandono (SaaS)","Churn Rate"],["Ingresos recurrentes mensuales","Monthly Recurring Revenue (MRR)"],
    ["Ingresos recurrentes anuales","Annual Recurring Revenue (ARR)"],["Satisfacción del cliente","Customer Satisfaction (CSAT)"],
    ["Puntuación neta del promotor","Net Promoter Score (NPS)"]
  ]},
  { id:"project", label:"Proyectos", title:"Gestión de Proyectos / Project Management", entries:[
    ["Gestión de proyectos","Project Management"],["Hoja de ruta","Roadmap"],["Hito","Milestone"],["Entregable","Deliverable"],
    ["Plazo / Fecha límite","Deadline"],["Partes interesadas","Stakeholders"],["Reunión de lanzamiento","Kickoff Meeting"],
    ["Resumen ejecutivo","Executive Summary / Brief"],["Alcance del proyecto","Project Scope"],["Control de cambios","Change Management"],
    ["Riesgo","Risk"],["Dependencia","Dependency"],["Sprint","Sprint"],["Retrospectiva","Retrospective"],["Tablero Kanban","Kanban Board"],
    ["Cuello de botella (proceso)","Bottleneck (process)"],["Capacidad","Capacity"],["Priorización","Prioritization"]
  ]},
  { id:"comms", label:"Comunicación", title:"Comunicación Profesional / Professional Communication", entries:[
    ["Reunión de sincronización","Sync Meeting"],["Actualización de estado","Status Update"],["Seguimiento","Follow-up"],
    ["Resumen de reunión","Meeting Summary"],["Acta de reunión","Minutes of Meeting (MOM)"],["Orden del día","Agenda"],
    ["Acción a realizar","Action Item"],["Responsable","Owner / Responsible"],["Plazo de entrega","Turnaround Time (TAT)"],
    ["Fuera de oficina","Out of Office (OOO)"],["Copia en el correo","CC (Carbon Copy)"],["Copia oculta","BCC (Blind Carbon Copy)"],
    ["Adjunto","Attachment"],["Hilo de conversación","Thread"],["Canal de comunicación","Communication Channel"],["Retroalimentación","Feedback"],
    ["Aprobación","Approval / Sign-off"],["Revisión","Review / Revision"],["Versión final","Final Version"]
  ]},
  { id:"simbolos", label:"Símbolos", title:"Símbolos & Operadores / Symbols & Operators", entries:[
    ["@ — arroba","@ — at sign / at symbol"],["# — almohadilla / numeral / hashtag","# — hash / pound sign / hashtag"],
    ["% — porcentaje","% — percent sign"],["& — ampersand / y comercial","& — ampersand"],["* — asterisco","* — asterisk"],
    ["/ — barra diagonal","/ — slash / forward slash"],["\\ — barra invertida","\\ — backslash"],["| — barra vertical / pleca","| — pipe / vertical bar"],
    ["- — guion / menos","- — hyphen / minus sign"],["_ — guion bajo","_ — underscore"],["~ — virgulilla / tilde","~ — tilde"],
    [". — punto",". — dot / period / full stop"],[", — coma",", — comma"],["; — punto y coma","; — semicolon"],[": — dos puntos",": — colon"],
    ["! — signo de exclamación (cierre)","! — exclamation mark"],["¡ — signo de exclamación (apertura)","¡ — inverted exclamation mark (Spanish only)"],
    ["? — signo de interrogación (cierre)","? — question mark"],["¿ — signo de interrogación (apertura)","¿ — inverted question mark (Spanish only)"],
    ["\" \" — comillas dobles","\" \" — double quotation marks"],["' ' — comilla simple / apóstrofe","' ' — single quote / apostrophe"],
    ["« » — comillas angulares / latinas","« » — angle quotes / guillemets"],["… — puntos suspensivos","… — ellipsis"],
    ["( ) — paréntesis","( ) — parentheses / round brackets"],["[ ] — corchetes","[ ] — square brackets"],["{ } — llaves","{ } — curly brackets / braces"],
    ["< > — corchetes angulares","< > — angle brackets / chevrons"],["+ — más","+ — plus sign"],["= — igual","= — equals sign"],
    ["≠ — distinto / no igual","≠ — not equal to"],["> — mayor que","> — greater than"],["< — menor que","< — less than"],
    ["≥ — mayor o igual que","≥ — greater than or equal to"],["≤ — menor o igual que","≤ — less than or equal to"],
    ["^ — acento circunflejo / caret","^ — caret / circumflex"],["° — grado","° — degree sign"],["€ — euro","€ — euro sign"],
    ["$ — dólar","$ — dollar sign"],["£ — libra esterlina","£ — pound sterling sign"],["¥ — yen / yuan","¥ — yen / yuan sign"],
    ["© — copyright / derechos de autor","© — copyright symbol"],["® — marca registrada","® — registered trademark"],["™ — marca comercial","™ — trademark symbol"],
    ["→ — flecha derecha","→ — right arrow"],["← — flecha izquierda","← — left arrow"],["↑ — flecha arriba","↑ — up arrow"],
    ["↓ — flecha abajo","↓ — down arrow"],["↔ — flecha bidireccional horizontal","↔ — left-right arrow"],["• — viñeta / punto de lista","• — bullet point"],
    ["– — raya corta","– — en dash"],["' — acento / tilde (en teclado)","' — accent / diacritic key"],["´ — acento agudo","´ — acute accent"],
    ["` — acento grave / backtick","` — grave accent / backtick"],["¨ — diéresis","¨ — diaeresis / umlaut"],["ñ — eñe (letra española)","ñ — ñ (Spanish letter)"],
    ["á é í ó ú — vocales con tilde","á é í ó ú — vowels with acute accent"],["ü — u con diéresis","ü — u with umlaut"]
  ]}
];
