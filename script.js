let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      header.style.background = '#191919'
    } else {
      header.style.background = 'transparent'
    }
  })

// Inicialização da Swiper
var swiper = new Swiper('.mySwiper', {
  loop: true, // Permite que o slider continue após o último slide
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Paginadores clicáveis
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1, // Quantidade de slides visíveis ao mesmo tempo
  spaceBetween: 30, // Espaço entre os slides
});
