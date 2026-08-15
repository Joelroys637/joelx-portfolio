// ============================================================
// தமிழ் தா கெத்து — shared interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ---------- copy-code buttons ---------- */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.code-card') || btn.closest('.leaf-card');
      const codeEl = card ? card.querySelector('pre') : null;
      if (!codeEl) return;
      const text = codeEl.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = original; }, 1600);
      });
    });
  });

  /* ---------- scrollspy for the tutorial table of contents ---------- */
  const tocLinks = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  const sections = tocLinks
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const setActive = (id) => {
      tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }

  /* ---------- top nav active-link highlight (home vs tutorial) ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links > a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.split('#')[0] === path) a.classList.add('active');
  });
});
