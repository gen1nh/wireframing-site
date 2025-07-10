// Throttle helper
function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

// Scroll Reveal
const scrollElements = document.querySelectorAll('.scroll-reveal');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  scrollElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', throttle(revealOnScroll, 200));
window.addEventListener('load', revealOnScroll);

// Fade-in da imagem da hero
const fadeInImage = document.querySelector('.fade-in-left');
window.addEventListener('load', () => {
  if (fadeInImage) fadeInImage.classList.add('active');
});

// Animação no clique dos botões
const ctas = document.querySelectorAll('.btn-primary');
ctas.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 300);
  });
});

// Hover nos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});

// Toggle Menu Mobile
const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('header nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('active'));

// Fechar menu clicando fora
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove('active');
  }
});