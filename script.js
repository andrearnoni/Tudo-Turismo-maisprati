document.addEventListener("DOMContentLoaded", function () {
  const API_URL = "https://randomuser.me/api/";

  async function fetchTestimonial() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const testimonial = data.results[0];
      return testimonial;
    } catch (error) {
      console.error("Erro ao buscar relato:", error);
      return null;
    }
  }

  async function fetchAndDisplayTestimonials() {
    const testimonials = await Promise.all([
      fetchTestimonial(),
      fetchTestimonial(),
      fetchTestimonial(),
    ]);

    testimonials.forEach((testimonial, index) => {
      if (testimonial) {
        const card = document.querySelectorAll(".card-testemunho")[index];

        const imgElement = card.querySelector("img");
        imgElement.src = testimonial.picture.medium;
        imgElement.alt = `${testimonial.name.first} ${testimonial.name.last}`;

        const nameElement = card.querySelector("h5");
        nameElement.textContent = `${testimonial.name.first} ${testimonial.name.last}`;

        const locationElement = card.querySelector("h6");
        locationElement.textContent = `${testimonial.location.city} - ${testimonial.location.state}`;
      }
    });
  }

  fetchAndDisplayTestimonials();
});

function mostrarMenu() {
  $("nav#nav-esquerda ul.menu-principal").css("display", "flex");
  $("nav#nav-esquerda ul.menu-principal").addClass(
    "animate__animated animate__fadeInRight animate__slow"
  );

  $("nav#nav-esquerda ul#icone-menu li#menu").css("display", "none");
  $("nav#nav-esquerda ul#icone-menu li#menuX").css("display", "flex");
}

function esconderMenu() {
  $("nav#nav-esquerda ul.menu-principal").css("display", "none");
  $("nav#nav-esquerda ul#icone-menu li#menu").css("display", "flex");
  $("nav#nav-esquerda ul#icone-menu li#menuX").css("display", "none");
}

let controle = true;

$("nav#nav-esquerda ul#icone-menu").click(function () {
  if (controle) {
    mostrarMenu();
    controle = false;
  } else {
    esconderMenu();
    controle = true;
  }
});
