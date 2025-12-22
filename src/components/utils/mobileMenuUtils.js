/**
 * Funciones básicas para el menú móvil
 */
import { useState } from "react";
import { useEffect } from "react";
// Configuración del menú
export const MENU_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

/**
 * Maneja el scroll y cierra el menú
 */
export const handleMobileNavClick = (e, sectionId, scrollToSection, closeMenu) => {
  e.preventDefault();
  scrollToSection(sectionId);
  if (closeMenu) closeMenu();
};

/**
 * Detectar si es dispositivo móvil
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

/**
 * Maneja los efectos del menú (Escape y scroll)
 */
export const useMobileMenuEffects = (isMenuOpen, setIsMenuOpen) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setIsMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
};