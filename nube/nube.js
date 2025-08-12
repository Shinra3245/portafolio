
(function drawPixelCloud() {
    const isMobile = window.matchMedia('(max-width: 400px)').matches;
    if (isMobile) return;

    const USE_THEME = true;

    const cvs = document.getElementById('pixelCloud');
    if (!cvs) return;
    const ctx = cvs.getContext('2d', { alpha: true });
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.imageSmoothingEnabled = false;

    const theme = getComputedStyle(document.documentElement).getPropertyValue('--clr').trim() || '#0f0';
    const C = "000f000f000fff00fff0f";
    const data =
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@IIIA@@@@@@@@@@@@@@@@@@@@@@@@I@@HIIIIA@@@@@@@@@@@@@@@@@@@@@@HII@IIIIII@@@@@@@@@@@@@@@@@@@@@@IIIIIIIIIIA@@@@@@@@@@@@@@@@@@@@HIIIIIIIIIII@@@@@@@@@@@@@@@@@@@@IIIIIIIIIIIIA@@@@@@@@@@@@@@@@@@@IIIIIIIIIIIIIIA@@@@@@@@@@@@@@@HIIIIIIIIIIIIIIII@@@@@@@@@@@@@@HIIIIIIIIIIIIIIIIIA@@@@@@@@@@@@HIIIIIIIIIIIIIIIIIIA@@@@@@@@@@@@IIIIIIIIIIIIIIIIIIIA@@@@@@@@@@HIIIIIIIIIIIIIIIIIIIIIIIA@@@@@@@IIIIIIIIIIIIIIIIIIIIIIIII@@@@@@@IIIIIIIIIIIIIIIIIIIIIIIIIA@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIIA@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIII@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIII@@@@@IIIIIIIIIIIIIIIIIIIIIIIIIII@@@@HIIIIIIIIIIIIIIIIIIIIIIIIIIIIA@@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIA@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII@IIIIIIIIIIIIIIIIIIIIIII@IIIIIII@HIIIIIIAIIIIIIIIIIIIIIA@HIIIIIA@@IIIIII@HIIIIIIAIIIIII@@@IIIII@@@HIIIIA@@IIIIII@HIIIIA@@@HIIIA@@@@IIII@@@@IIIIA@@IIII@@@@@III@@@@@@@@@@@@@@HI@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";


    const P = new Uint8Array(64 * 64);
    let k = 0;
    for (let i = 0; i < data.length; i++) {
        const z = data.charCodeAt(i);
        P[k++] = z & 7;
        P[k++] = (z >> 3) & 7;
    }

    const S = 64;
    if (USE_THEME) {
        ctx.fillStyle = theme;
        for (let j = 0; j < S; j++) {
            for (let i = 0; i < S; i++) {
                if (P[j * S + i]) ctx.fillRect(i, j, 1, 1);
            }
        }
    } else {

        const palette = Array.from({ length: 8 }, (_, idx) =>
            idx === 0 ? null : '#' + C.slice(3 * (idx - 1), 3 * (idx - 1) + 3)
        );
        for (let j = 0; j < S; j++) {
            for (let i = 0; i < S; i++) {
                const v = P[j * S + i];
                if (!v) continue;
                ctx.fillStyle = palette[v] || theme;
                ctx.fillRect(i, j, 1, 1);
            }
        }
    }
})();



(function () {
  var v = document.getElementById('rainVideo');
  if (!v) return;

  
  var isMobile = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 768px)').matches;
  if (!isMobile) return; 

  function tryPlay() {
    
    v.muted = true;
    v.playsInline = true;
    v.setAttribute('muted','');
    v.setAttribute('playsinline','');
    v.setAttribute('webkit-playsinline','');

    var p = v.play();
    if (p && p.catch) {
      
      p.catch(function(){ });
    }
  }

  
  requestAnimationFrame(function(){ setTimeout(tryPlay, 0); });

  
  v.addEventListener('canplay', tryPlay);

  
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) tryPlay();
  });

  
  ['touchstart','click'].forEach(function (evt) {
    window.addEventListener(evt, tryPlay, { passive: true });
  });
})();


