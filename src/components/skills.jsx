import { SiJavascript, SiReact, SiPython, SiPhp, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiDjango, SiDocker, SiMysql, SiPostgresql, SiGithub } from "react-icons/si";
import { DiGit, DiJava, DiMsqlServer  } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiXampp } from "react-icons/si";
import { RiSettings5Fill } from "react-icons/ri";
import { GrHostMaintenance } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";


const skills = [
  // Lenguajes de programación
  { 
    category: "Lenguajes de programación",
    items: [
      { icon: SiPython, name: "Python", description: "Lenguaje multipropósito", color: "text-blue-500" },
      { icon: SiPhp, name: "PHP", description: "Backend web", color: "text-purple-500" },
      { icon: SiJavascript, name: "JavaScript", description: "Lenguaje web", color: "text-yellow-500" },
      { icon: DiJava, name: "Java", description: "Lenguaje OOP", color: "text-red-500" },
    ]
  },
  
  // Desarrollo Web
  { 
    category: "Desarrollo Web",
    items: [
      { icon: SiHtml5, name: "HTML5", description: "Estructura web", color: "text-orange-500" },
      { icon: SiCss3, name: "CSS3", description: "Estilos web", color: "text-blue-400" },
      { icon: SiBootstrap, name: "Bootstrap", description: "Framework CSS", color: "text-purple-600" },
      { icon: SiTailwindcss, name: "Tailwind CSS", description: "Utility-first CSS", color: "text-cyan-500" },
      { icon: SiReact, name: "React", description: "Frontend framework", color: "text-cyan-400" },
      { icon: SiDjango, name: "Django", description: "Python framework", color: "text-green-600" },
      { icon: IoCloudDone, name: "API REST", description: "Servicios web", color: "text-green-500" }, // AÑADIDO AQUÍ
    ]
  },
  
  // DevOps / Infraestructura
  { 
    category: "DevOps / Infraestructura",
    items: [
      { icon: SiDocker, name: "Docker", description: "Contenedores", color: "text-blue-400" },
      { icon: GrHostMaintenance, name: "Hosting Web", description: "Deploy & Config", color: "text-green-500" },
      { icon: RiSettings5Fill, name: "Config. Entornos", description: "Prod/Dev", color: "text-white" },
    ]
  },
  
  // Base de datos
  { 
    category: "Base de datos",
    items: [
      { icon: SiMysql, name: "MySQL", description: "Base de datos", color: "text-blue-600" },
      { icon: SiPostgresql, name: "PostgreSQL", description: "Base de datos", color: "text-blue-500" },
      { icon: DiMsqlServer, name: "SQL Server", description: "Base de datos", color: "text-red-600" },
    ]
  },
  
  // Redes
  { 
    category: "Redes",
    items: [
      { icon: FaNetworkWired, name: "Redes", description: "Instalación & Config", color: "text-indigo-500" },
    ]
  },
  
  // Herramientas
  { 
    category: "Herramientas",
    items: [
      { icon: DiGit, name: "Git", description: "Control versiones", color: "text-red-500" },
      { icon: SiGithub, name: "GitHub", description: "Repositorios", color: "text-white dark:text-white" },
      { icon: BiLogoVisualStudio, name: "VS Code", description: "Editor código", color: "text-blue-500" },
      { icon: DiJava, name: "NetBeans", description: "IDE Java", color: "text-red-400" },
      { icon: SiMysql, name: "MySQL Workbench", description: "Admin DB", color: "text-blue-500" },
      { icon: SiPostgresql, name: "pgAdmin", description: "Admin PostgreSQL", color: "text-blue-400" },
      { icon: SiXampp, name: "XAMPP", description: "Entorno PHP", color: "text-orange-500" },
    ]
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-background dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground dark:text-white">
          HABILIDADES TÉCNICAS
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
          Conjunto completo de tecnologías y herramientas que utilizo en desarrollo
        </p>

        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="p-5 rounded-xl border dark:border-slate-800 bg-card dark:bg-slate-900 hover:border-primary transition-all shadow-sm hover:shadow-md group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-lg dark:bg-slate-800 group-hover:scale-110 transition-transform ${skill.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground dark:text-white">{skill.name}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}