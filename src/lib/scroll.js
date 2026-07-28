export function scrollToSection(target) {
  if (!target) return;
  const id = typeof target === 'string' ? target.replace(/^#/, "") : "";
  
  if (!id || id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    // Offset for fixed Navbar (62px) + DisclaimerBar (36px) + breathing room
    const headerOffset = 110;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  }
}
