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



document.querySelectorAll('.carousel').forEach(carousel => {
  const images = Array.from(carousel.querySelectorAll('img'));
  let currentIndex = 0;

  const showImage = (index) => {
    images.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
  };

  showImage(currentIndex);

  carousel.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});



// Selecciona el contenedor principal del carrusel
const proyectosCarousel = document.querySelector('#proyectos > .proyecto-item');
const track = proyectosCarousel.querySelector('.carrete-track');
const slides = Array.from(track.querySelectorAll('.proyecto'));
const prevBtn = proyectosCarousel.querySelector('.prev');
const nextBtn = proyectosCarousel.querySelector('.next');

let currentIndex = 0;

// Función para mostrar la imagen actual
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
};

// Inicializa mostrando la primera imagen
showSlide(currentIndex);

// Eventos de botones
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});


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


const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

// Detecta idioma inicial por la página
if(window.location.href.includes("indexEn.html")) {
  btnEn.classList.add("activo");
} else {
  btnEs.classList.add("activo");
}

// Cambiar idioma al hacer click
btnEs.addEventListener("click", () => {
  window.location.href = "index.html";
  btnEs.classList.add("activo");
  btnEn.classList.remove("activo");
});

btnEn.addEventListener("click", () => {
  window.location.href = "indexEn.html";
  btnEn.classList.add("activo");
  btnEs.classList.remove("activo");
});
