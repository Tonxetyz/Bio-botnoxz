// Bright starfield with occasional falling stars
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [], fallingStars = [];
  const STAR_COUNT_BASE = 140;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.round(STAR_COUNT_BASE * (w*h) / (1280*800));
    stars = Array.from({length: Math.max(60, count)}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.7 + 0.25,
      base: Math.random()*0.55 + 0.45,
      speed: Math.random()*0.02 + 0.005,
      phase: Math.random()*Math.PI*2,
      depth: Math.random()*0.6 + 0.2
    }));
  }

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5);
    my = (e.clientY / window.innerHeight - 0.5);
  });

  let t = 0;
  function addFallingStar(){
    fallingStars.push({
      x: Math.random() * w * .9,
      y: Math.random() * h * .45,
      length: 70 + Math.random() * 110,
      speed: 7 + Math.random() * 6,
      life: 0,
      maxLife: 35 + Math.random() * 22
    });
  }
  setInterval(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && Math.random() > .2) addFallingStar();
  }, 1800);

  function draw(){
    t += 1;
    ctx.clearRect(0,0,w,h);
    for(const s of stars){
      const twinkle = s.base + Math.sin(t*s.speed + s.phase) * 0.35;
      const px = s.x + mx * 22 * s.depth;
      const py = s.y + my * 22 * s.depth;
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(245,246,250,${Math.max(0, Math.min(1, twinkle))})`;
      ctx.fill();
    }
    fallingStars = fallingStars.filter(s => {
      const progress = s.life / s.maxLife;
      const alpha = Math.sin(progress * Math.PI);
      const x2 = s.x - s.length * .72;
      const y2 = s.y - s.length;
      const gradient = ctx.createLinearGradient(s.x, s.y, x2, y2);
      gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      s.x += s.speed * .72;
      s.y += s.speed;
      s.life++;
      return s.life < s.maxLife;
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();

  // Copy-to-clipboard buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try{
        await navigator.clipboard.writeText(text);
      }catch(e){
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1400);
    });
  });

  // Cursor-follow glow on buttons
  document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
