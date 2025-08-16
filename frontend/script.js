// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Mostrar 2 segundos y luego desaparecer
  setTimeout(() => {
    loader.classList.add('oculto');

    // Remover del DOM después del fade
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000);
});

// GMDI
const gmdiImgs = [
  "assets/img/GMDI/1a.jpg",
  "assets/img/GMDI/1.jpg",
  "assets/img/GMDI/3.jpg",
  "assets/img/GMDI/4.jpg",
  "assets/img/GMDI/5.jpg",
  "assets/img/GMDI/6.jpg",
  "assets/img/GMDI/7.JPG"
];
let gmdiIndex = 0;
setInterval(() => {
  gmdiIndex = (gmdiIndex + 1) % gmdiImgs.length;
  document.querySelector("#gmdi .catalogo-img").src = gmdiImgs[gmdiIndex];
}, 3000); // cambia cada 3 segundos

// MM
const mmImgs = [
  "assets/img/MM/a.jpeg",
  "assets/img/MM/b.jpeg",
  "assets/img/MM/c.jpeg",
  "assets/img/MM/d.jpeg",
  "assets/img/MM/e.jpeg",
  "assets/img/MM/f.jpeg",
  "assets/img/MM/g.jpeg",
  "assets/img/MM/h.jpeg",
  "assets/img/MM/i.jpeg",
  "assets/img/MM/j.jpeg",
  "assets/img/MM/k.jpeg"
];
let mmIndex = 0;
setInterval(() => {
  mmIndex = (mmIndex + 1) % mmImgs.length;
  document.querySelector("#mm .catalogo-img").src = mmImgs[mmIndex];
}, 3000);

// Renders
const rendersImgs = [
  "assets/img/render/rend1.jpeg",
  "assets/img/render/rend2.jpeg",
  "assets/img/render/rend3.jpeg",
  "assets/img/render/rend4.jpeg",
  "assets/img/render/rend5.jpeg",
  "assets/img/render/rend6.jpeg",
  "assets/img/render/rend7.jpeg",
  "assets/img/render/rend8.jpeg",
  "assets/img/render/rend9.jpeg"
];
let rendersIndex = 0;
setInterval(() => {
  rendersIndex = (rendersIndex + 1) % rendersImgs.length;
  document.querySelector("#renders .catalogo-img").src = rendersImgs[rendersIndex];
}, 3000);

// Modal formulario
const modal = document.getElementById("modalFormulario");
const btnAbrir = document.getElementById("abrirFormulario");
const btnCerrar = document.getElementById("cerrarFormulario");

btnAbrir.addEventListener("click", () => {
  modal.style.display = "block";
});

btnCerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
});

// Enviar formulario con EmailJS
document.getElementById("formularioContacto").addEventListener("submit", (e) => {
  e.preventDefault();
  
  emailjs.send(
    'service_o6ptdjl',      // tu Service ID
    'template_hixqosh',     // tu Template ID
    {
      name: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      message: e.target.descripcion.value
    }
  ).then(() => {
    alert("Mensaje enviado con éxito!");
    modal.style.display = "none";
    e.target.reset();
  }, (error) => {
    console.error(error);
    alert("Error al enviar el mensaje, intenta nuevamente.");
  });
});
