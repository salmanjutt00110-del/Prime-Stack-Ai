export function scrollToSection(target) {
  if (!target) return;
  const id = typeof target === 'string' ? target.replace(/^#/, "") : "";
  
  if (!id || id === "home") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  }

  const scroll = () => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for fixed Navbar (approx 70-80px for desktop/mobile)
      const headerOffset = window.innerWidth < 768 ? 75 : 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      return true;
    }
    return false;
  };

  if (!scroll()) {
    // Retry in case section is rendering or dynamically loading
    const timer1 = setTimeout(scroll, 80);
    const timer2 = setTimeout(scroll, 250);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }
}
