// import { Github, Linkedin } from "lucide-react"

import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "Proyecto Alpha",
    description: "Una plataforma de e-commerce completamente funcional lorem ...",
    demo: "https://ecommerce-platform.com",
    github: "https://github.com/alexisalderete",
    image: "/ecommerce-platform-interface.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Proyecto Beta",
    description: "Una API RESTful para una aplicación de redes sociales... ",
    demo: "https://ecommerce-platform.com",
    github: "https://github.com/alexisalderete",
    image: "/code-editor-dark-theme.png",
    tags: ["Python", "Django", "PostgreSQL"],
  }
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Proyectos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-colors shadow-sm">
              <div className="relative h-64 bg-muted">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-muted-foreground mb-4">
                  Demo: <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demo}</a>
                </p>
                <p className="text-muted-foreground mb-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors " //aumentar de tamaño
                  >
                    <BsGithub className="h-6 w-6" />
                  </a>
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}