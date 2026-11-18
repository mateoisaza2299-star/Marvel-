document.documentElement.classList.add("js");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("motion");
window.__mcMotion = "pending";
window.setTimeout(function () {
  if (window.__mcMotion === "ready") return;
  document.documentElement.classList.add("motion-ready");
}, 300);

const pintarMarca = () => {
  document.querySelectorAll("[data-logo]").forEach((nodo) => {
    // Único lugar del logo. Para usar una imagen, sustituye el bloque de abajo por:
    // const img = document.createElement("img");
    // img.src = "img/logo.png";
    // img.alt = "Marvel Peluquería";
    // nodo.appendChild(img);
    // nodo.dataset.logoListo = "1";
    // return;
    if (nodo.dataset.logoListo === "1") return;
    nodo.dataset.logoListo = "1";
    nodo.replaceChildren();
    const marca = document.createElement("span");
    marca.className = "marca";
    const linea = () => {
      const span = document.createElement("span");
      span.className = "marca-linea";
      span.setAttribute("aria-hidden", "true");
      return span;
    };
    const nombre = document.createElement("span");
    nombre.className = "marca-nombre";
    nombre.textContent = "MARVEL";
    marca.append(linea(), nombre, linea());
    const script = document.createElement("span");
    script.className = "marca-script";
    script.textContent = "Peluquería";
    nodo.append(marca, script);
  });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pintarMarca);
else pintarMarca();
