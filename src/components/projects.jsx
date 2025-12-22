import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Optimización de Flota Vehicular (en desarrollo)",
    description: "Aplicación web para optimización de rutas logísticas para múltiples vehículos.",
    details: [
      "Desarrollo de una aplicación web orientada a optimizar rutas para varios camiones",
      "Proyecto utilizado como trabajo final de grado",
      "Sistema de planificación y seguimiento en tiempo real"
    ],
    demo: "#", // Sin demo disponible
    // github: "#",
    image: "./optimizacion-rutas.png",
    tags: ["Python", "PostgreSQL", "Docker", "React", "Tailwind"],
    hasDemo: false // Sin demo disponible
  },
  {
    title: "Sistema de Gestión Institucional",
    description: "Sistema integral de gestión para instituciones educativas con múltiples módulos administrativos y académicos.",
    details: [
      "Implementación y despliegue en hosting",
      "Módulos: pagos, contabilidad, inscripciones, factura autoimpresa, etc.",
      "Acceso multiusuario con diferentes perfiles y permisos"
    ],
    demo: "https://sistema-institucional-demo.com", // URL de demo activa
    github: "https://github.com/alexisalderete/sistema-gestion-instituto-publico",
    image: "./citic-sistema-gestion.png",
    tags: ["PHP", "MVC", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "PhpOffice", "fpdf"],
    hasDemo: true // Indicador de demo disponible
  },
  {
    title: "Portal Académico",
    description: "Plataforma web moderna para gestión académica con acceso diferenciado para estudiantes y docentes.",
    details: [
      "Implementación y despliegue en hosting",
      "Gestión de inscripciones, calificaciones, materiales/tareas, visualización de pagos realizados",
      "Acceso para estudiantes y docentes con interfaces personalizadas"
    ],
    demo: "#", // Sin demo disponible
    github: "https://github.com/alexisalderete/portal-academico-publico",
    image: "./citic-portal-academico.png",
    tags: ["PHP", "MVC API", "MySQL", "React", "Tailwind"],
    hasDemo: false // Sin demo disponible
  }
  
  // {
  //   title: "E-commerce Full Stack",
  //   description: "Plataforma de comercio electrónico completa con panel de administración y pasarela de pagos.",
  //   details: [
  //     "Carrito de compras con persistencia de sesión",
  //     "Panel de administración para gestión de productos",
  //     "Integración con pasarela de pagos Stripe"
  //   ],
  //   demo: "https://ecommerce-demo.alexisalderete.com", // URL de demo activa
  //   github: "https://github.com/alexisalderete/ecommerce-fullstack",
  //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
  //   hasDemo: true // Indicador de demo disponible
  // }
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground dark:text-white">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-xl border border-border dark:border-slate-800 bg-card dark:bg-slate-900 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Imagen del proyecto */}
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.hasDemo && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30">
                      Demo Activa
                    </span>
                  )}
                </div>
              </div>
              
              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground dark:text-white mb-3">{project.title}</h3>
                <p className="text-muted-foreground dark:text-slate-300 mb-4">{project.description}</p>
                
                {/* Detalles del proyecto */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground dark:text-white mb-2 text-sm">Características:</h4>
                  <ul className="space-y-1">
                    {project.details.map((detail, index) => (
                      <li key={index} className="text-sm text-muted-foreground dark:text-slate-400 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tecnologías */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground dark:text-white mb-2 text-sm">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Enlaces */}
                <div className="flex justify-between items-center pt-4 border-t border-border dark:border-slate-800">
                  {/* Botón GitHub - Siempre visible */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 dark:bg-slate-800 text-primary dark:text-white hover:bg-primary/20 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <BsGithub className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  
                  {/* Botón Demo - Solo visible si tiene demo */}
                  {project.hasDemo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors group"
                    >
                      <HiExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Ver Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed">
                      <HiExternalLink className="h-5 w-5 opacity-50" />
                      <span className="text-sm font-medium">Demo no disponible</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}