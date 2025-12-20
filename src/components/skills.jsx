
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiHtml5, SiCss3, SiPostgresql, SiGit } from "react-icons/si";
import { DiGit } from "react-icons/di"; // Git tiene otro ícono en 'Di'

const skills = [
  { icon: SiJavascript, name: "JavaScript", description: "Lenguaje", color: "text-yellow-500" },
  { icon: SiReact, name: "React", description: "Framework", color: "text-cyan-500" },
  { icon: SiNodedotjs, name: "Node.js", description: "Entorno", color: "text-green-500" },
  { icon: SiPython, name: "Python", description: "Lenguaje", color: "text-blue-500" },
  { icon: SiHtml5, name: "HTML5", description: "Markup", color: "text-orange-500" },
  { icon: SiCss3, name: "CSS3", description: "Estilos", color: "text-blue-400" },
  { icon: SiPostgresql, name: "SQL", description: "Base de Datos", color: "text-purple-500" },
  { icon: DiGit, name: "Git", description: "Herramienta", color: "text-red-500" },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-background dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground dark:text-white">Habilidades</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div 
                key={skill.name} 
                className="p-6 rounded-xl border dark:border-slate-800 bg-card dark:bg-slate-900 hover:border-primary transition-all shadow-sm"
              >
                <Icon className={`h-8 w-8 mb-4 ${skill.color}`} />
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}