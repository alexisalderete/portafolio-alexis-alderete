import { ArrowDown } from "lucide-react";
import { scrollToSection } from "./utils/scrollUtils";

export function Hero() {
  const handleProjectsClick = (e) => {
    e.preventDefault();
    scrollToSection('proyectos');
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-blue-900/20 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Full-Stack Developer
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Desarrollador apasionado creando aplicaciones web modernas y responsivas con un enfoque en la experiencia
            del usuario y el código limpio.
          </p>
          <button 
            onClick={handleProjectsClick}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-primary/80 text-white font-medium transition-colors shadow-lg shadow-primary/20 cursor-pointer"
          >
            Ver Mis Proyectos
            <ArrowDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}