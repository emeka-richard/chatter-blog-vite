const scrollToSection = (id: string): void => {
    // const section = document.getElementById(id);
    const section: HTMLElement | null = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  export default scrollToSection;
  