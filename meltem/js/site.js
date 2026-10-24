(function () {
  const C = window.MELTEM;
  const page = document.documentElement.dataset.page || 'home';

  function applyMeta() {
    const meta = C.pages[page];
    if (!meta) return;
    document.title = meta.metaTitle;
    setMeta('description', meta.metaDescription);
    setMeta('og:title', meta.metaTitle, true);
    setMeta('og:description', meta.metaDescription, true);
    setMeta('twitter:title', meta.metaTitle, true);
    setMeta('twitter:description', meta.metaDescription, true);
  }

  function setMeta(name, content, property) {
    const attr = property ? 'property' : 'name';
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function phrases(list, sep) {
    return list
      .map((item, i) => {
        const bit = `<span lang="${item.lang}">${escapeHtml(item.text)}</span>`;
        return i < list.length - 1 ? `${bit}<span aria-hidden="true">${sep}</span>` : bit;
      })
      .join('');
  }

  function proverb(item) {
    return `<p class="proverb">
      <span lang="${item.lang}">${escapeHtml(item.text)}</span>
      <span class="translation">${escapeHtml(item.translation)}</span>
    </p>`;
  }

  function windSvg() {
    return `<div class="wind" aria-hidden="true">
      <svg viewBox="0 0 1200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 90 C 160 20, 280 150, 430 70 S 720 10, 900 80 S 1120 130, 1180 40" stroke="#1B3A8A" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M40 50 C 200 110, 340 10, 500 60 S 780 140, 960 55 S 1140 20, 1190 90" stroke="#7C8C5A" stroke-width="1.1" stroke-linecap="round"/>
        <path d="M10 110 C 180 80, 260 40, 400 100 S 700 30, 880 110 S 1100 70, 1195 115" stroke="#A8323E" stroke-opacity="0.55" stroke-width="1" stroke-linecap="round"/>
      </svg>
    </div>`;
  }

  function drawn() {
    return `<div class="drawn" aria-hidden="true">
      <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 14 C 40 2, 70 22, 110 10 S 180 4, 238 16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    </div>`;
  }

  function header() {
    const links = C.nav
      .map((item) => {
        const current = item.id === page ? ' aria-current="page"' : '';
        return `<a href="${item.href}"${current}>${escapeHtml(item.label)}</a>`;
      })
      .join('');
    const ctaHref = page === 'home' ? '#interest' : C.cta.href;
    return `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="wrap header-inner">
          <a class="wordmark" href="index.html">
            ${escapeHtml(C.site.wordmark)}
            <span>Art Fellowship</span>
          </a>
          <div class="header-actions">
            <div class="nav-panel" id="nav-panel">
              <nav class="site-nav" aria-label="Main">${links}</nav>
            </div>
            <a class="btn btn-primary btn-header" href="${ctaHref}">${escapeHtml(C.cta.label)}</a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-panel">Menu</button>
          </div>
        </div>
      </header>`;
  }

  function footer() {
    const phrase = C.site.footerPhrase;
    return `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <p>${escapeHtml(C.site.tagline)}</p>
          <p class="footer-links">
            <a href="${C.site.emailHref}">${escapeHtml(C.site.email)}</a>
            <a href="${C.site.linkedinHref}" rel="noopener noreferrer">${escapeHtml(C.site.linkedinLabel)}</a>
          </p>
          <p>${escapeHtml(C.site.footerNote)}</p>
          <p class="footer-phrase">
            <span lang="${phrase.lang}">${escapeHtml(phrase.text)}</span>
            <span class="translation">${escapeHtml(phrase.translation)}</span>
          </p>
        </div>
      </footer>`;
  }

  function home() {
    const h = C.home;
    const pillars = h.pillars
      .map(
        (p) => `
        <article class="card pillar">
          <p class="verb">${escapeHtml(p.verb)}</p>
          <h3 class="foreign-title" lang="${p.lang}">${escapeHtml(p.title)}</h3>
          <span class="translation">${escapeHtml(p.translation)}</span>
          <p>${escapeHtml(p.body)}</p>
        </article>`,
      )
      .join('');
    const takeaways = h.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    const fields = h.form.fields
      .map((field) => {
        const req = field.required ? ' required' : '';
        const auto = field.autocomplete ? ` autocomplete="${field.autocomplete}"` : '';
        const optional = field.optional
          ? ` <span class="optional">(optional)</span>`
          : '';
        const control =
          field.type === 'textarea'
            ? `<textarea id="${field.name}" name="${field.name}"${req}></textarea>`
            : `<input id="${field.name}" name="${field.name}" type="${field.type}"${req}${auto}>`;
        return `<div class="field">
          <label for="${field.name}">${escapeHtml(field.label)}${optional}</label>
          ${control}
        </div>`;
      })
      .join('');
    const buttons = h.heroButtons
      .map(
        (b) =>
          `<a class="btn ${b.kind === 'primary' ? 'btn-primary' : 'btn-ghost'}" href="${b.href}">${escapeHtml(b.label)}</a>`,
      )
      .join('');

    return `
      <section class="hero">
        <div class="wrap">
          ${windSvg()}
          <p class="welcome">${phrases(h.welcome, ' · ')}</p>
          <h1>${escapeHtml(h.title)}</h1>
          <p class="lede">${escapeHtml(h.oneLiner)}</p>
          <p class="subline">${escapeHtml(h.subline)}</p>
          <div class="hero-actions">${buttons}</div>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(h.pillarsHeading)}</h2>
          ${drawn()}
          <div class="grid-3">${pillars}</div>
        </div>
      </section>
      <section class="band">
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(h.takeawaysHeading)}</h2>
          <ul class="takeaways">${takeaways}</ul>
        </div>
      </section>
      <section>
        <div class="wrap prose">
          <h2 class="section-title">${escapeHtml(h.whyHeading)}</h2>
          <p>${escapeHtml(h.whyBody)}</p>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(h.noteHeading)}</h2>
          <blockquote class="note-card">
            <p>${escapeHtml(h.noteBody)}</p>
            <footer>— ${escapeHtml(h.noteSign)}</footer>
          </blockquote>
        </div>
      </section>
      <section class="band" id="interest">
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(h.form.heading)}</h2>
          <p class="intro-line">${phrases(h.form.subphrases, ' · ')}</p>
          <p class="translation" style="margin-top:0">${escapeHtml(h.form.subTranslation)}</p>
          <form class="form" action="${C.site.formEndpoint}" method="POST">
            <input type="hidden" name="_subject" value="Meltem Art Fellowship — expression of interest">
            ${fields}
            <label class="check">
              <input type="checkbox" name="unpaid" value="yes" required>
              <span>${escapeHtml(h.form.checkbox)}</span>
            </label>
            <button class="btn btn-primary" type="submit">${escapeHtml(h.form.submit)}</button>
            <p class="form-status" data-status role="status" aria-live="polite" hidden></p>
            <p class="hint"><!-- FORM ENDPOINT PLACEHOLDER: set site.formEndpoint in js/content.js -->${escapeHtml(h.form.endpointHint)}</p>
          </form>
        </div>
      </section>`;
  }

  function personLinks(links) {
    if (!links.length) return '';
    return `<p class="links">${links
      .map(
        (link) =>
          `<a href="${link.href}" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`,
      )
      .join('')}</p>`;
  }

  function team() {
    const t = C.team;
    const m = t.mentor;
    const fellows = t.fellows
      .map(
        (f) => `
        <article class="card fellow${f.placeholder ? ' placeholder' : ''}">
          <img class="portrait" src="${f.photo}" alt="${escapeHtml(f.photoAlt)}" width="320" height="320">
          <h3>${escapeHtml(f.name)}</h3>
          <p>${escapeHtml(f.bio)}</p>
          ${personLinks(f.links)}
        </article>`,
      )
      .join('');
    return `
      <section class="hero">
        <div class="wrap">
          <p class="intro-line">${phrases(t.introPhrases, ' · ')}</p>
          <p class="translation" style="margin-top:0">${escapeHtml(t.introTranslation)}</p>
          <h1 class="section-title" style="margin-top:1rem">Team</h1>
          <p class="lede">${escapeHtml(t.intro)}</p>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(t.mentorHeading)}</h2>
          ${drawn()}
          <article class="card mentor">
            <img class="portrait" src="${m.photo}" alt="${escapeHtml(m.photoAlt)}" width="400" height="500">
            <div class="person">
              <h3>${escapeHtml(m.name)}</h3>
              <p>${escapeHtml(m.bio)}</p>
              ${personLinks(m.links)}
            </div>
          </article>
          <p class="quiet">${escapeHtml(t.futureMentors)}</p>
        </div>
      </section>
      <section class="band">
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(t.cohortHeading)}</h2>
          <div class="fellows">${fellows}</div>
        </div>
      </section>`;
  }

  function fellowship() {
    const f = C.fellowship;
    const steps = f.steps
      .map(
        (s) => `<li>
          <div>
            <h3>${escapeHtml(s.title)}</h3>
            <p>${escapeHtml(s.body)}</p>
          </div>
        </li>`,
      )
      .join('');
    const logs = f.logs
      .map(
        (l) => `<article class="card">
          <h3 class="foreign-title" style="font-size:1.6rem">${escapeHtml(l.title)}</h3>
          <p>${escapeHtml(l.body)}</p>
        </article>`,
      )
      .join('');
    const receive = f.receive.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    const qa = f.qa
      .map(
        (item, i) => `
        <div class="faq-item">
          <h3>
            <button type="button" aria-expanded="false" aria-controls="faq-${i}" id="faq-${i}-btn">
              ${escapeHtml(item.q)}
            </button>
          </h3>
          <div class="panel" id="faq-${i}" role="region" aria-labelledby="faq-${i}-btn" hidden>
            <p>${escapeHtml(item.a)}</p>
          </div>
        </div>`,
      )
      .join('');

    return `
      <section class="hero">
        <div class="wrap prose">
          ${windSvg()}
          <h1 class="section-title">The Fellowship</h1>
          <p>${escapeHtml(f.intro)}</p>
          ${proverb(f.proverb)}
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(f.stepsHeading)}</h2>
          ${drawn()}
          <ol class="steps">${steps}</ol>
        </div>
      </section>
      <section class="band">
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(f.logsHeading)}</h2>
          <div class="grid-3" style="grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))">${logs}</div>
          <p class="prose">${escapeHtml(f.stats)}</p>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(f.timeHeading)}</h2>
          <p class="hours">${f.timeBody.replace(
            '100 hours',
            '<strong>100 hours</strong>',
          )}</p>
        </div>
      </section>
      <section class="band">
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(f.receiveHeading)}</h2>
          <ul class="takeaways">${receive}</ul>
        </div>
      </section>
      <section>
        <div class="wrap">
          <h2 class="section-title">${escapeHtml(f.qaHeading)}</h2>
          <div class="faq">${qa}</div>
        </div>
      </section>
      <section class="closing">
        <div class="wrap">
          ${proverb(f.closing)}
        </div>
      </section>`;
  }

  const views = { home, team, fellowship };

  applyMeta();
  document.body.innerHTML = `${header()}<main id="main">${(views[page] || home)()}</main>${footer()}`;

  const toggle = document.querySelector('.nav-toggle');
  const panel = document.getElementById('nav-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
    });
  }

  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panelEl = document.getElementById(button.getAttribute('aria-controls'));
      document.querySelectorAll('.faq-item button').forEach((other) => {
        if (other === button) return;
        other.setAttribute('aria-expanded', 'false');
        const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
        if (otherPanel) otherPanel.hidden = true;
      });
      button.setAttribute('aria-expanded', String(!expanded));
      if (panelEl) panelEl.hidden = expanded;
    });
  });

  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-status]');
      if (!form.reportValidity()) return;
      const endpoint = C.site.formEndpoint;
      const placeholder = endpoint.includes('YOUR_FORM_ID');
      try {
        if (!placeholder) {
          const response = await fetch(endpoint, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' },
          });
          if (!response.ok) throw new Error('send-failed');
        }
        status.hidden = false;
        status.classList.remove('is-error');
        status.innerHTML = C.home.form.successHtml;
        form.querySelectorAll('input, textarea, button[type="submit"]').forEach((el) => {
          if (el.type !== 'hidden') el.disabled = true;
        });
        if (placeholder) {
          status.innerHTML += ` <span class="hint">${escapeHtml(C.home.form.endpointHint)}</span>`;
        }
      } catch (err) {
        status.hidden = false;
        status.classList.add('is-error');
        status.textContent = C.home.form.error;
      }
    });
  }
})();
