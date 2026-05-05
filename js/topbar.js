/**
 * RedKiteCloud — topbar.js
 * Shared topbar. Change once — updates everywhere.
 */

function getRootPath() {
  const path = window.location.pathname;
  // If we're at root or index
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/redkitecloud/')) return '';
  // Inside docs/<module>/ — go up two levels
  return '../../';
}

function getActivePage() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/redkitecloud/')) return 'home';
  if (path.includes('certifications')) return 'certifications';
  if (path.includes('practice')) return 'practice';
  if (path.includes('about')) return 'about';
  return '';
}

function renderTopbar() {
  const el = document.getElementById('rkc-topbar');
  if (!el) return;

  const root   = getRootPath();
  const active = getActivePage();

  el.innerHTML = `
    <div class="topbar-left">
      <button class="topbar-hamburger" onclick="toggleSidebar()" aria-label="Menu">☰</button>
      <a href="${root}index.html" class="rkc-logo">
        <span class="r">Red</span><span class="r">Kite</span><span class="c1">C</span><span class="c2">l</span><span class="c3">o</span><span class="c4">u</span><span class="c1">d</span>
      </a>
      <nav class="topbar-nav">
        <a href="${root}index.html"              class="${active === 'home'           ? 'active' : ''}">Home</a>
        <a href="${root}certifications.html"     class="${active === 'certifications' ? 'active' : ''}">Certifications</a>
        <a href="${root}practice.html"           class="${active === 'practice'       ? 'active' : ''}">Practice</a>
        <a href="${root}about.html"              class="${active === 'about'          ? 'active' : ''}">About</a>
      </nav>
    </div>
    <div class="topbar-right">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input class="topbar-search" type="search" placeholder="Search tutorials..." id="rkc-search" oninput="rkcSearch(this.value)" />
      </div>
    </div>
    <div class="sidebar-overlay" id="sidebar-overlay" onclick="toggleSidebar()"></div>
  `;
}

/* ── Mobile sidebar toggle ────────────────────────────────── */
function toggleSidebar() {
  const sidebar = document.getElementById('rkc-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

/* ── Search — filters sidebar links ──────────────────────── */
function rkcSearch(query) {
  const q = query.trim().toLowerCase();
  const items = document.querySelectorAll('.sb-item[href]');

  if (!q) {
    items.forEach(i => i.style.display = '');
    // Collapse all topics back to original state
    document.querySelectorAll('.sb-topics').forEach(t => {
      if (!t.classList.contains('collapsed')) return;
      t.style.display = '';
    });
    return;
  }

  // Open all topic lists while searching
  document.querySelectorAll('.sb-topics').forEach(t => t.style.display = 'flex');

  items.forEach(item => {
    const match = item.textContent.trim().toLowerCase().includes(q);
    item.style.display = match ? '' : 'none';
  });
}

/* ── Copy code button ─────────────────────────────────────── */
function copyCode(btn) {
  const code = btn.closest('.code-block')?.querySelector('code');
  if (!code) return;
  navigator.clipboard.writeText(code.innerText).then(() => {
    btn.classList.add('copied');
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = 'Copy';
    }, 2000);
  });
}

/* ── Practice question answer check ──────────────────────── */
function checkAnswer(optionEl, isCorrect, explanation) {
  const question = optionEl.closest('.question');
  if (question.dataset.answered) return;
  question.dataset.answered = 'true';

  question.querySelectorAll('.option').forEach(opt => {
    if (opt === optionEl) {
      opt.classList.add(isCorrect ? 'correct' : 'wrong');
    } else if (opt.dataset.correct === 'true') {
      opt.classList.add('correct');
    }
  });

  const reveal = question.querySelector('.answer-reveal');
  if (reveal) {
    reveal.textContent = explanation;
    reveal.classList.add('show');
  }
}

/* ── TOC smooth scroll with topbar offset ─────────────────── */
function initTocLinks() {
  document.querySelectorAll('.toc a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      const offset = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderTopbar();
  initTocLinks();
});
