function randomText() {
  const text = "@!@#$*^()";
  return text[Math.floor(Math.random() * text.length)];
}

function rain() {
  const cloud = document.querySelector('.cloud');
  const maxDrops = 100; 

  
  if (cloud.querySelectorAll('.drop').length > maxDrops) return;

  const e = document.createElement('div');
  e.classList.add('drop');
  cloud.appendChild(e);

  const left = Math.floor(Math.random() * 300);
  const size = Math.random() * 1.5;
  const duration = Math.random() * 1;

  e.innerText = randomText();
  e.style.left = left + 'px';
  e.style.fontSize = 0.5 * size + 'em';
  e.style.animationDuration = 1 + duration + 's';


  setTimeout(() => {
    if (cloud.contains(e)) {
      cloud.removeChild(e);
    }
  }, (1 + duration) * 1000);
}

const isMobile = window.innerWidth <= 480;
const maxDrops = isMobile ? 40 : 100;


setInterval(rain, dropInterval);
