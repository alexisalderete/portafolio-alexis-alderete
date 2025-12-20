import { Code2 } from "lucide-react";
import { scrollToSection } from "./utils/scrollUtils";

export function Header() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="border-b border-border/40 bg-background/75 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Alexis Rolando Alderete Araujo</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
          >
            Home
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'habilidades')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
          >
            Habilidades
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'proyectos')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
          >
            Proyectos
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}