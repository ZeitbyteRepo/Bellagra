/* ── Bellagra — Shared Scripts ────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll background ─────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll reveal ─────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ── Video placeholder click → native controls ─────── */
  document.querySelectorAll('.feature-media').forEach(container => {
    const video = container.querySelector('video');
    const playOverlay = container.querySelector('.feature-play');
    if (!video || !playOverlay) return;

    const showOverlay = () => { playOverlay.style.opacity = '1'; };
    const hideOverlay = () => { playOverlay.style.opacity = '0'; };

    container.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        hideOverlay();
      } else {
        video.pause();
        showOverlay();
      }
    });

    video.addEventListener('play', hideOverlay);
    video.addEventListener('pause', showOverlay);
    video.addEventListener('ended', showOverlay);
  });

  /* ── Hero video (if present) ───────────────────────── */
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo && heroVideo.tagName === 'VIDEO') {
    heroVideo.muted = true;
    heroVideo.loop = true;
    heroVideo.playsInline = true;
    heroVideo.play().catch(() => {});
  }

});
