/**
 * ============================================================
 *  ARTI'S 20TH BIRTHDAY CELEBRATION SCRIPT
 * ============================================================
 *  - Cute Lovely Loading Screen with chime & music unlock
 *  - Flowing Pink Heart Bubbles
 *  - 3 Perfectly Centered Glowing Cake Candles
 *  - Direct Pre-Added Code Image Sources
 *  - Web Audio Synthesizer, Confetti & Love Notes
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Loading Screen
  initLoadingScreen();

  // 2. Heart Bubbles Stream
  initHeartBubbles();

  // 3. Particles Canvas
  initParticles();

  // 4. Content from CONFIG
  initContentFromConfig();

  // 5. Countdown to 1st Oct 2026 (20th Birthday)
  initCountdown();

  // 6. Interactive Cake with 3 Candles
  initCake();

  // 7. Polaroid Memory Gallery (Loaded directly from code img sources)
  initGallery();

  // 8. Love Letter
  initLetter();

  // 9. Why I Adore You Cards Grid
  initReasonsGrid();

  // 10. Surprise Gift Box
  initSurpriseBox();

  // 11. Romantic Audio Player
  initAudioPlayer();
});

/* ============================================================
   1. Cute Lovely Loading Screen
   ============================================================ */
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const barFill = document.getElementById('loader-bar-fill');
  const enterBtn = document.getElementById('loader-enter-btn');

  if (!loadingScreen) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 12;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (barFill) barFill.style.width = '100%';
      if (enterBtn) {
        enterBtn.style.display = 'inline-flex';
      }
    } else {
      if (barFill) barFill.style.width = `${progress}%`;
    }
  }, 120);

  function enterSite() {
    playCelebrationMelody();
    launchConfetti();

    // Start background music automatically on user's first click
    const toggleBtn = document.getElementById('audio-toggle-btn');
    if (window.bgAudioInstance && window.bgAudioInstance.paused) {
      window.bgAudioInstance.play().then(() => {
        const vinyl = document.getElementById('vinyl-icon');
        const status = document.getElementById('audio-status');
        if (vinyl) vinyl.classList.add('playing');
        if (toggleBtn) toggleBtn.innerHTML = '❚❚';
        if (status) status.textContent = 'Playing 💖';
      }).catch(() => {});
    }

    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.remove();
    }, 850);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', enterSite);
  }
}

/* ============================================================
   2. Pink Heart Bubbles Flowing Stream
   ============================================================ */
function initHeartBubbles() {
  const container = document.getElementById('heart-bubbles-container');
  if (!container) return;

  const heartIcons = ['💖', '💕', '💗', '💓', '🌸', '✨', '🎀', '💝'];

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'heart-bubble';

    const icon = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    bubble.textContent = icon;

    const size = Math.floor(Math.random() * 20) + 20; // 20px - 40px
    const startX = Math.random() * 95; // 0% - 95% vw
    const duration = (Math.random() * 4 + 5.5).toFixed(1); // 5.5s - 9.5s
    const driftX = (Math.random() * 60 - 30).toFixed(0); // -30px to +30px

    bubble.style.fontSize = `${size}px`;
    bubble.style.left = `${startX}vw`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty('--drift-x', `${driftX}px`);

    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeSound(600 + Math.random() * 300);
      bubble.style.transform = 'scale(1.8)';
      bubble.style.opacity = '0';
      setTimeout(() => bubble.remove(), 200);
    });

    container.appendChild(bubble);

    setTimeout(() => {
      if (bubble.parentElement) bubble.remove();
    }, duration * 1000);
  }

  for (let i = 0; i < 6; i++) {
    setTimeout(createBubble, i * 350);
  }

  setInterval(createBubble, 650);
}

/* ============================================================
   3. Background Particles Canvas (Soft Stars & Ambient Dust)
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(width > 768 ? 40 : 22, 45);

  class StarParticle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 15;
      this.size = Math.random() * 2.5 + 1.2;
      this.speedY = Math.random() * 0.5 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = Math.random() * 0.004 + 0.002;
      this.color = Math.random() > 0.5 ? '#ff9ebb' : '#fbd786';
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeSpeed;
      if (this.y < -20 || this.opacity <= 0) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new StarParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ============================================================
   4. Populate DOM from CONFIG
   ============================================================ */
function initContentFromConfig() {
  if (typeof CONFIG === 'undefined') return;

  document.title = `Happy 20th Birthday ${CONFIG.name}! ✨💖`;
  document.querySelectorAll('.dynamic-name').forEach(el => el.textContent = CONFIG.name);
  document.querySelectorAll('.dynamic-nickname').forEach(el => el.textContent = CONFIG.nickname);

  const heroTaglineEl = document.getElementById('hero-tagline');
  if (heroTaglineEl && CONFIG.heroTagline) {
    heroTaglineEl.textContent = CONFIG.heroTagline;
  }

  const milestonesContainer = document.getElementById('milestones-grid');
  if (milestonesContainer && CONFIG.milestones) {
    milestonesContainer.innerHTML = CONFIG.milestones.map(m => `
      <div class="milestone-card">
        <div class="milestone-number">${m.number}</div>
        <div class="milestone-label">${m.label}</div>
      </div>
    `).join('');
  }
}

/* ============================================================
   5. Countdown Timer to 1st Oct 2026
   ============================================================ */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  const countdownTitle = document.getElementById('countdown-status-title');

  if (!daysEl || !CONFIG.birthdayDate) return;

  function update() {
    const target = new Date(CONFIG.birthdayDate).getTime();
    const now = new Date().getTime();
    let diff = target - now;

    if (diff <= 0) {
      if (countdownTitle) {
        countdownTitle.textContent = `🎉 Today is Arti's 20th Birthday! Celebrating All Day Long! 💖`;
      }
      diff = Math.abs(diff);
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   6. Interactive Cake with EXACTLY 3 Candles
   ============================================================ */
function initCake() {
  const candlesRow = document.getElementById('candles-row');
  const blowBtn = document.getElementById('blow-candles-btn');
  const banner = document.getElementById('cake-celebration-banner');
  const cakePrompt = document.getElementById('cake-prompt');

  if (!candlesRow) return;

  if (CONFIG.cake) {
    if (cakePrompt && CONFIG.cake.wishText) {
      cakePrompt.textContent = CONFIG.cake.wishText;
    }
    const bannerMsg = document.getElementById('cake-banner-message');
    if (bannerMsg && CONFIG.cake.afterBlowWish) {
      bannerMsg.textContent = CONFIG.cake.afterBlowWish;
    }
  }

  const totalCandles = 3;
  const candleColors = ['pink', 'gold', 'pink'];
  candlesRow.innerHTML = '';
  for (let i = 0; i < totalCandles; i++) {
    const candle = document.createElement('div');
    candle.className = `candle candle-${candleColors[i]}`;
    candle.innerHTML = `
      <div class="flame" id="flame-${i}"></div>
      <div class="wick"></div>
      <div class="smoke"></div>
    `;
    candle.addEventListener('click', () => extinguishFlame(i));
    candlesRow.appendChild(candle);
  }

  let extinguishedCount = 0;

  function extinguishFlame(index) {
    const flame = document.getElementById(`flame-${index}`);
    if (flame && !flame.classList.contains('extinguished')) {
      flame.classList.add('extinguished');
      extinguishedCount++;
      playChimeSound(340 + index * 140);

      if (extinguishedCount === totalCandles) {
        celebrateCakeBlowout();
      }
    }
  }

  function extinguishAll() {
    for (let i = 0; i < totalCandles; i++) {
      const flame = document.getElementById(`flame-${i}`);
      if (flame) flame.classList.add('extinguished');
    }
    extinguishedCount = totalCandles;
    celebrateCakeBlowout();
  }

  function celebrateCakeBlowout() {
    playCelebrationMelody();
    launchConfetti();
    if (banner) banner.style.display = 'block';
    if (cakePrompt) {
      cakePrompt.textContent = "✨ All 3 candles blown out! Happy 20th Birthday, Arti! 💖 ✨";
    }
    if (blowBtn) {
      blowBtn.textContent = "Light 3 Candles Again 🕯️";
      blowBtn.onclick = relightCandles;
    }
  }

  function relightCandles() {
    for (let i = 0; i < totalCandles; i++) {
      const flame = document.getElementById(`flame-${i}`);
      if (flame) flame.classList.remove('extinguished');
    }
    extinguishedCount = 0;
    if (banner) banner.style.display = 'none';
    if (cakePrompt && CONFIG.cake) {
      cakePrompt.textContent = CONFIG.cake.wishText;
    }
    if (blowBtn) {
      blowBtn.textContent = "Blow Out All Candles 🌬️";
      blowBtn.onclick = extinguishAll;
    }
  }

  if (blowBtn) {
    blowBtn.onclick = extinguishAll;
  }
}

/* ============================================================
   Sound Synthesis via Web Audio API
   ============================================================ */
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playChimeSound(freq = 440) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.4, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.65);
  } catch (e) {}
}

function playCelebrationMelody() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => playChimeSound(freq), i * 160);
    });
  } catch (e) {}
}

/* ============================================================
   Confetti Fireworks Effect
   ============================================================ */
function launchConfetti() {
  const count = 130;
  const confettiCanvas = document.createElement('canvas');
  confettiCanvas.style.position = 'fixed';
  confettiCanvas.style.top = '0';
  confettiCanvas.style.left = '0';
  confettiCanvas.style.width = '100vw';
  confettiCanvas.style.height = '100vh';
  confettiCanvas.style.pointerEvents = 'none';
  confettiCanvas.style.zIndex = '9999';
  document.body.appendChild(confettiCanvas);

  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const colors = ['#ff4071', '#ff758c', '#ffb8d2', '#fbd786', '#ffffff', '#ffd1dc'];
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 20,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 14,
      gravity: 0.35,
      alpha: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = 0;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.alpha -= 0.007;

      if (p.alpha > 0) {
        alive++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    }

    if (alive > 0) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      confettiCanvas.remove();
    }
  }
  update();
}

/* ============================================================
   7. Polaroid Memory Lane Gallery (Direct Image Sources)
   ============================================================ */
function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDate = document.getElementById('modal-date');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close-btn');

  if (!galleryGrid || !CONFIG.memories) return;

  galleryGrid.innerHTML = CONFIG.memories.map((m, idx) => `
    <div class="polaroid-card" data-index="${idx}">
      <div class="polaroid-tape"></div>
      <div class="polaroid-img-wrapper">
        <img class="polaroid-img" src="${m.image}" alt="${m.title}" loading="lazy" />
      </div>
      <div class="polaroid-caption">
        <h4 class="polaroid-title">${m.title}</h4>
        <div class="polaroid-date">${m.date}</div>
        <p class="polaroid-desc">${m.description}</p>
      </div>
    </div>
  `).join('');

  galleryGrid.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(600px) rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-index');
      const memory = CONFIG.memories[idx];
      if (memory && modal) {
        modalImg.src = memory.image;
        modalTitle.textContent = memory.title;
        modalDate.textContent = memory.date;
        modalDesc.textContent = memory.description;
        modal.classList.add('active');
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', () => modal.classList.remove('active'));
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* ============================================================
   8. Love Letter (Interactive Envelope Box)
   ============================================================ */
function initLetter() {
  const envelopeBox = document.getElementById('envelope-box');
  const sealBtn = document.getElementById('wax-seal-btn');
  const refoldBtn = document.getElementById('letter-refold-btn');
  const greetingEl = document.getElementById('letter-greeting');
  const bodyEl = document.getElementById('letter-body');
  const closingEl = document.getElementById('letter-closing');
  const signatureEl = document.getElementById('letter-signature');

  if (CONFIG.letter) {
    if (greetingEl && CONFIG.letter.greeting) greetingEl.textContent = CONFIG.letter.greeting;
    if (bodyEl && CONFIG.letter.body) bodyEl.textContent = CONFIG.letter.body;
    if (closingEl && CONFIG.letter.closing) closingEl.textContent = CONFIG.letter.closing;
    if (signatureEl && CONFIG.letter.signature) signatureEl.textContent = CONFIG.letter.signature;
  }

  function openEnvelope() {
    if (!envelopeBox || envelopeBox.classList.contains('is-opened')) return;
    envelopeBox.classList.add('is-opened');
    playCelebrationMelody();
    launchConfetti(90);

    // Subtle smooth scroll into view for the unfolded letter
    setTimeout(() => {
      envelopeBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
  }

  function closeEnvelope(e) {
    if (e) e.stopPropagation();
    if (!envelopeBox) return;
    envelopeBox.classList.remove('is-opened');
    playChimeSound(440);
  }

  if (envelopeBox) {
    envelopeBox.addEventListener('click', (e) => {
      // Don't trigger if already opened or clicking inside the letter sheet
      if (!envelopeBox.classList.contains('is-opened')) {
        openEnvelope();
      }
    });
  }

  if (sealBtn) {
    sealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  if (refoldBtn) {
    refoldBtn.addEventListener('click', closeEnvelope);
  }
}

/* ============================================================
   9. "Why I Adore You, Arti" Cards Grid
   ============================================================ */
function initReasonsGrid() {
  const grid = document.getElementById('reasons-grid');
  if (!grid || !CONFIG.reasons || !CONFIG.reasons.length) return;

  grid.innerHTML = CONFIG.reasons.map((r, i) => {
    const icon = r.icon || "✨";
    const title = r.title || `Reason #${i + 1}`;
    const desc = r.description || r;
    return `
      <div class="reason-card-luxury">
        <div class="reason-card-icon">${icon}</div>
        <h3 class="reason-card-title serif-title">${title}</h3>
        <p class="reason-card-text">${desc}</p>
      </div>
    `;
  }).join('');
}

/* ============================================================
   10. Surprise Gift Box
   ============================================================ */
function initSurpriseBox() {
  const boxCard = document.getElementById('gift-box-card');
  const tapPrompt = document.getElementById('gift-tap-prompt');
  const revealedDiv = document.getElementById('surprise-revealed');
  const surpriseMsg = document.getElementById('surprise-message');
  const surpriseCoupon = document.getElementById('surprise-coupon');

  if (CONFIG.surprise) {
    if (tapPrompt && CONFIG.surprise.tapPrompt) tapPrompt.textContent = CONFIG.surprise.tapPrompt;
    if (surpriseMsg && CONFIG.surprise.message) surpriseMsg.textContent = CONFIG.surprise.message;
    if (surpriseCoupon && CONFIG.surprise.couponCode) surpriseCoupon.textContent = CONFIG.surprise.couponCode;
  }

  let unwrapped = false;
  if (boxCard) {
    boxCard.addEventListener('click', () => {
      if (!unwrapped) {
        unwrapped = true;
        playCelebrationMelody();
        launchConfetti();
        if (tapPrompt) tapPrompt.style.display = 'none';
        if (revealedDiv) revealedDiv.style.display = 'block';
        boxCard.style.borderColor = '#fbd786';
        boxCard.style.boxShadow = '0 0 45px rgba(251, 215, 134, 0.45)';
      }
    });
  }
}

/* ============================================================
   11. Romantic Audio Player
   ============================================================ */
function initAudioPlayer() {
  const pill = document.getElementById('audio-player-pill');
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const vinylIcon = document.getElementById('vinyl-icon');
  const audioTitle = document.getElementById('audio-title');
  const audioStatus = document.getElementById('audio-status');

  if (!CONFIG.music || !pill) return;

  const audio = new Audio();
  audio.loop = true;
  audio.volume = 0.5;
  audio.src = CONFIG.music.url || "assets/music.mp3";
  window.bgAudioInstance = audio;

  // Graceful fallback to backup URL if custom local file has loading or format issues
  audio.addEventListener('error', () => {
    if (CONFIG.music.fallbackUrl && audio.src !== CONFIG.music.fallbackUrl) {
      console.warn("Custom music file not found or couldn't play. Switching to romantic fallback melody.");
      audio.src = CONFIG.music.fallbackUrl;
    }
  });

  if (audioTitle) {
    audioTitle.textContent = CONFIG.music.title || "Our Song";
    if (CONFIG.music.artist) {
      audioTitle.title = `${CONFIG.music.title} - ${CONFIG.music.artist}`;
    }
  }

  let isPlaying = false;

  function togglePlay() {
    getAudioContext();
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      if (vinylIcon) vinylIcon.classList.remove('playing');
      if (toggleBtn) toggleBtn.innerHTML = '▶';
      if (audioStatus) audioStatus.textContent = 'Paused';
    } else {
      audio.play().then(() => {
        isPlaying = true;
        if (vinylIcon) vinylIcon.classList.add('playing');
        if (toggleBtn) toggleBtn.innerHTML = '❚❚';
        if (audioStatus) audioStatus.textContent = 'Playing 💖';
      }).catch(() => {
        if (audioStatus) audioStatus.textContent = 'Tap to Play';
      });
    }
  }

  pill.addEventListener('click', togglePlay);
}
