(function drawPixelCloudFromEncoded64() {
  const USE_THEME_COLOR = true;
  const canvas = document.getElementById('pixelCloud');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--clr').trim() || '#0f0';

  const C = "000f000f000fff00fff0f";
  const data =
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@IIIA@@@@@@@@@@@@@@@@@@@@@@@@I@@HIIIIA@@@@@@@@@@@@@@@@@@@@@@HII@IIIIII@@@@@@@@@@@@@@@@@@@@@@IIIIIIIIIIA@@@@@@@@@@@@@@@@@@@@HIIIIIIIIIII@@@@@@@@@@@@@@@@@@@@IIIIIIIIIIIIA@@@@@@@@@@@@@@@@@@@IIIIIIIIIIIIIIA@@@@@@@@@@@@@@@HIIIIIIIIIIIIIIII@@@@@@@@@@@@@@HIIIIIIIIIIIIIIIIIA@@@@@@@@@@@@HIIIIIIIIIIIIIIIIIIA@@@@@@@@@@@@IIIIIIIIIIIIIIIIIIIA@@@@@@@@@@HIIIIIIIIIIIIIIIIIIIIIIIA@@@@@@@IIIIIIIIIIIIIIIIIIIIIIIII@@@@@@@IIIIIIIIIIIIIIIIIIIIIIIIIA@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIIA@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIII@@@@@HIIIIIIIIIIIIIIIIIIIIIIIIII@@@@@IIIIIIIIIIIIIIIIIIIIIIIIIII@@@@HIIIIIIIIIIIIIIIIIIIIIIIIIIIIA@@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIA@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII@IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII@IIIIIIIIIIIIIIIIIIIIIII@IIIIIII@HIIIIIIAIIIIIIIIIIIIIIA@HIIIIIA@@IIIIII@HIIIIIIAIIIIII@@@IIIII@@@HIIIIA@@IIIIII@HIIIIA@@@HIIIA@@@@IIII@@@@IIIIA@@IIII@@@@@III@@@@@@@@@@@@@@HI@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";

  const P = [];
  data.replace(/./g, ch => {
    const z = ch.charCodeAt(0);
    P.push(z & 7);
    P.push((z >> 3) & 7);
  });

  const S = 64; // tamaño del sprite
  for (let j = 0; j < S; j++) {
    for (let i = 0; i < S; i++) {
      const v = P[j * S + i];
      if (!v) continue;
      ctx.fillStyle = USE_THEME_COLOR ? themeColor : ('#' + C.substr(3 * (v - 1), 3) || '#0f0');
      ctx.fillRect(i, j, 1, 1);
    }
  }
})();
