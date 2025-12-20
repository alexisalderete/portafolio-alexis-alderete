export const scrollToSection = (sectionId, offset = 64) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = offset; // Altura del navbar
    const targetPosition = section.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};