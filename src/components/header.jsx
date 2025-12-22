// components/header.jsx
import { Code2 } from "lucide-react";
import { IoMenu, IoClose } from "react-icons/io5";
import { scrollToSection } from "./utils/scrollUtils";
import { 
  MENU_ITEMS, 
  handleMobileNavClick,
  useIsMobile,
  useMobileMenuEffects 
} from "./utils/mobileMenuUtils";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Usar efectos del menú
  useMobileMenuEffects(isMenuOpen, setIsMenuOpen);

  const handleNavClick = (e, sectionId) => {
    handleMobileNavClick(e, sectionId, scrollToSection, () => setIsMenuOpen(false));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
          >
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Alexis Rolando Alderete Araujo</span>
          </button>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Botón hamburguesa para móvil */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors text-primary/90"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <IoMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      
      {/* Menú móvil - overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="fixed top-16 left-0 right-0 bg-background border-t border-border/40 shadow-lg animate-in slide-in-from-top-5 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col p-4">
              {MENU_ITEMS.map((item) => (
                <button 
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="py-4 px-4 text-left text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}