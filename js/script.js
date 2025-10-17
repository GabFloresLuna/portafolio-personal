document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente 🚀");

  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (btn && nav) {
    // Oculta en móvil por defecto
    if (window.matchMedia("(max-width: 640px)").matches) nav.setAttribute("hidden", "");
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      if (nav.hasAttribute("hidden")) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
    });

    // Muestra nav al redimensionar a desktop
    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        nav.setAttribute("hidden", "");
      } else {
        nav.removeAttribute("hidden");
      }
    });
  }
});