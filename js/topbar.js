/**
 * RedKiteCloud — topbar.js
 * Shared topbar. Change once — updates everywhere.
 */

function getHomeHref() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/redkitecloud/')) {
    return 'index.html';
  }
  // Inside docs/<module>/ — go up two levels
  return '../../index.html';
}

function renderTopbar() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  const homeHref = getHomeHref();

  topbar.innerHTML = `
    <!-- Hamburger (mobile) -->
    <button class="hamburger" onclick="toggleSidebar()" aria-label="Toggle menu">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6"  x2="19" y2="6"/>
        <line x1="3" y1="11" x2="19" y2="11"/>
        <line x1="3" y1="16" x2="19" y2="16"/>
      </svg>
    </button>

    <!-- Logo -->
    <a class="logo" href="${homeHref}" aria-label="RedKiteCloud home">
      <span class="logo-red">RedKite</span>
      <span class="logo-c">C</span><span class="logo-l">l</span><span class="logo-o">o</span><span class="logo-u">u</span><span class="logo-d">d</span>
    </a>

    <!-- Search -->
    <div class="topbar-search">
      <svg class="search-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="6.5" cy="6.5" r="4.5"/>
        <path d="M10 10l3.5 3.5"/>
      </svg>
      <input
        type="search"
        id="topbar-search-input"
        placeholder="Search tutorials…"
        autocomplete="off"
        aria-label="Search tutorials"
        oninput="handleSearch(this.value)"
      />
    </div>

    <!-- Right side -->
    <div class="topbar-right">
      <span class="topbar-badge">Free</span>
      <a
        class="github-link"
        href="https://github.com/redkitecloud/azure-tutorial"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        GitHub
      </a>
    </div>

    <!-- Mobile sidebar overlay -->
    <div class="sidebar-overlay" id="sidebar-overlay" onclick="toggleSidebar()"></div>
  `;
}

/**
 * Toggle mobile sidebar
 */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

/**
 * Basic client-side search — filters sidebar links by title.
 * For a full search, replace with Algolia / Pagefind later.
 */
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  const links = document.querySelectorAll('.sidebar-link');

  if (!q) {
    // Reset: show all, restore module open states
    links.forEach(l => { l.parentElement.style.display = ''; });
    document.querySelectorAll('.sidebar-module').forEach(m => {
      m.querySelector('.sidebar-topics').style.display = '';
    });
    return;
  }

  // Open all modules while searching
  document.querySelectorAll('.sidebar-module').forEach(m => {
    m.querySelector('.sidebar-topics').style.display = 'flex';
  });

  links.forEach(link => {
    const title = link.textContent.trim().toLowerCase();
    link.parentElement.style.display = title.includes(q) ? '' : 'none';
  });
}

// Copy-to-clipboard for code blocks
function copyCode(btn) {
  const block  = btn.closest('.code-block');
  const code   = block?.querySelector('code');
  if (!code) return;

  navigator.clipboard.writeText(code.innerText).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M2 6l3 3 5-5"/>
      </svg> Copied!
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="3" y="1" width="7" height="9" rx="1"/>
          <path d="M1 3h2M1 5h2M1 7h2"/>
        </svg> Copy
      `;
    }, 2000);
  });
}

// Practice question answer reveal
function checkAnswer(optionEl, isCorrect, explanation) {
  const question = optionEl.closest('.question');
  if (question.dataset.answered) return;
  question.dataset.answered = 'true';

  // Mark all options
  question.querySelectorAll('.option').forEach(opt => {
    if (opt === optionEl) {
      opt.classList.add(isCorrect ? 'correct' : 'wrong');
    } else if (opt.dataset.correct === 'true') {
      opt.classList.add('correct');
    }
  });

  // Show explanation
  const reveal = question.querySelector('.answer-reveal');
  if (reveal) {
    reveal.textContent = explanation;
    reveal.classList.add('show');
  }
}

// Init topbar on DOM ready
document.addEventListener('DOMContentLoaded', renderTopbar);
