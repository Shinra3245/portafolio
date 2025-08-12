
(() => {
  const cloud = document.querySelector('.cloud');
  if (!cloud) return;

  const isMobile = window.matchMedia('(max-width: 400px)').matches;
  if (isMobile) return;



  const MAX_DROPS = 20;
  const SPAWNS_PER_SEC = 15;
  const CHARSET = "01ｱｳｴｵｶｷｸｹｺｻｼｽﾀﾁﾂﾃﾄ";
  const target = cloud.querySelector('.pixel-cloud') || cloud;

  let activeDrops = 0;

  const randomChar = () => CHARSET[(Math.random() * CHARSET.length) | 0];
  const rainWidth = () => (target.clientWidth || 0);

  function spawnDrop() {
    if (activeDrops >= MAX_DROPS) return;
    const w = rainWidth(); if (!w) return;

    const d = document.createElement('div');
    d.className = 'drop';
    d.textContent = randomChar();

    d.style.left = ((Math.random() * w) | 0) + 'px';
    d.style.fontSize = (isMobile ? 18 : 20 + Math.random() * 3) + 'px';
    d.style.animationDuration = (isMobile ? (1.2 + Math.random() * 0.6) : (1 + Math.random() * 1)).toFixed(2) + 's';

    activeDrops++;
    d.addEventListener('animationend', () => { d.remove(); activeDrops--; }, { once: true });
    cloud.appendChild(d);
  }


  let last = performance.now();
  let acc = 0;
  const step = 1000 / SPAWNS_PER_SEC;

  function loop(now) {
    acc += now - last; last = now;
    while (acc >= step) { spawnDrop(); acc -= step; }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);


  const style = document.createElement('style');
  style.textContent = `.drop{will-change: transform,opacity;}`;
  document.head.appendChild(style);
})();
