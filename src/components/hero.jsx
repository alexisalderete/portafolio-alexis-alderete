import { ArrowDown } from "lucide-react";
import { scrollToSection } from "./utils/scrollUtils";
import { FaArrowDown } from "react-icons/fa";

export function Hero() {
  const handleProjectsClick = (e) => {
    e.preventDefault();
    scrollToSection('proyectos');
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
              Desarrollador de software
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
              <FaArrowDown className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Image section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular image container */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-primary/20">
                {/* Replace this image with your actual photo */}
                <img
                  src="./foto-alexis.jpg" // Ruta a tu imagen
                  alt="Foto de perfil"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "./foto-alexis.jpg";
                  }}
                />
              </div>
              
              {/* Optional decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-500/10 -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}