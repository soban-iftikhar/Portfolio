import React, { Component } from 'react';
import { projects, certificates, certFilters, stack, quips } from './data/index.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Stack from './components/Stack.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import CertLightbox from './components/CertLightbox.jsx';

/*
 * App owns all interactive state (theme, carousels, modal, game, cursor trail)
 * and passes a single view model `v` to each section component.
 */
class App extends Component {
  togglePx = () => this.setState({ px: !this.state.px });

  state = { px: false, theme: null, pj: 0, modal: -1, stackTab: 0, certFilter: 'all', certActive: 0, cfHover: false, lightbox: false, fName: '', fMail: '', fMsg: '' };

  /* ---------------- Content ---------------- */
  P = projects;

  C = certificates;

  F = certFilters;

  S = stack;

  /* ---------------- Refs ---------------- */
  setRoot = (el) => { this.rootEl = el; };
  setEditor = (el) => { this.edEl = el; };
  setAvatar = (el) => { this.avEl = el; };
  setTrack = (el) => { this.trackEl = el; };
  setFill = (el) => { this.fillEl = el; };
  setRing = (el) => { this.ringEl = el; };
  setWorld = (el) => { this.worldEl = el; };
  setTrail = (el) => { this.trailEl = el; };
  setCf = (el) => { this.cfEl = el; };

  /* ---------------- Lifecycle ---------------- */
  componentDidMount() {
    if (this.state.theme === null && this.props.startTheme !== 'dark' && this.props.startTheme !== 'light') {
      try { if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) this.setState({ theme: 'light' }); } catch (e) {}
    }
    this.armReveal(0);
    this.startEditor(0);
    this.armWorld(0);
    this.armTrail(0);
    this.armCertFront(0);
  }

  /* Each time the certificates come into view, start from the AI Hackathon National Finalist card. */
  armCertFront(tries) {
    const el = this.cfEl;
    if (!el) { if (tries < 25) this.cfWait = setTimeout(() => this.armCertFront(tries + 1), 150); return; }
    if (typeof IntersectionObserver === 'undefined') return;
    this.cio = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting && !this.cfSeen) { this.cfSeen = true; this.setState({ certFilter: 'all', certActive: 0 }); }
      if (!en.isIntersecting) this.cfSeen = false;
    }), { threshold: 0.25 });
    this.cio.observe(el);
  }

  /* ---------------- "Job Hunt Run" footer game ----------------
     Click / tap / Space to start and jump. Hit a hurdle and it's game over.
     One rAF loop runs only while playing AND on screen; background layers are CSS-only. */
  armWorld(tries) {
    const w = this.worldEl;
    if (!w) { if (tries < 25) this.worldWait = setTimeout(() => this.armWorld(tries + 1), 150); return; }
    const q = (sel) => w.querySelector(sel);
    let best = 0;
    try { best = parseInt(localStorage.getItem('jhr-best') || '0', 10) || 0; } catch (e) {}
    const G = this.g = {
      w, walker: q('.walker'), quip: q('.quip'), offer: q('.offer'), title: q('.g-title'), sub: q('.g-sub'),
      h: q('.g-h'), c: q('.g-c'), o: q('.g-o'), b: q('.g-b'),
      state: 'idle', visible: false, y: 0, vy: 0, air: false, hurdles: 0, coffee: 0, offers: 0, best, last: 0, raf: 0,
      W: w.clientWidth, items: []
    };
    G.b.textContent = best;
    w.querySelectorAll('.ob').forEach((el) => G.items.push({ el, kind: 'ob', x: -400, done: false }));
    w.querySelectorAll('.cup').forEach((el) => G.items.push({ el, kind: 'cup', x: -400, done: false }));
    if (this.reduced()) w.classList.add('still');
    if (typeof ResizeObserver !== 'undefined') { this.wro = new ResizeObserver(() => { G.W = w.clientWidth; }); this.wro.observe(w); }
    const vis = (on) => {
      G.visible = on;
      w.classList.toggle('run', on && G.state !== 'over' && !(G.state === 'idle' && this.reduced()));
      if (on && G.state === 'play' && !G.raf) { G.last = 0; G.raf = requestAnimationFrame(this.gameTick); }
      if (!on && G.raf) { cancelAnimationFrame(G.raf); G.raf = 0; }
    };
    if (typeof IntersectionObserver === 'undefined') { vis(true); return; }
    this.wio = new IntersectionObserver((es) => es.forEach((en) => vis(en.isIntersecting)));
    this.wio.observe(w);
  }

  gameStart() {
    const G = this.g;
    G.state = 'play'; G.y = 0; G.vy = 0; G.air = false; G.hurdles = 0; G.coffee = 0; G.offers = 0;
    G.h.textContent = '0'; G.c.textContent = '0'; G.o.textContent = '0';
    G.walker.classList.remove('air'); G.walker.style.transform = '';
    const order = G.items.slice().sort(() => Math.random() - 0.5);
    let x = G.W + 160;
    order.forEach((it) => { it.x = x; it.done = false; it.el.classList.remove('got'); x += 300 + Math.random() * 240; });
    G.w.classList.remove('idle', 'over', 'still'); G.w.classList.add('run');
    if (G.visible && !G.raf) { G.last = 0; G.raf = requestAnimationFrame(this.gameTick); }
  }

  gameOver() {
    const G = this.g;
    G.state = 'over';
    if (G.raf) { cancelAnimationFrame(G.raf); G.raf = 0; }
    if (G.hurdles > G.best) { G.best = G.hurdles; G.b.textContent = G.best; try { localStorage.setItem('jhr-best', String(G.best)); } catch (e) {} }
    G.w.classList.remove('run'); G.w.classList.add('over');
    G.title.textContent = 'REJECTED!';
    G.sub.textContent = 'Hurdles ' + G.hurdles + ' · Best ' + G.best + ' · click to retry';
    this.say("Let's circle back…");
  }

  gameTick = (t) => {
    const G = this.g;
    if (G.state !== 'play') { G.raf = 0; return; }
    const dt = G.last ? Math.min(0.04, (t - G.last) / 1000) : 0;
    G.last = t;
    const v = 160, px = G.W * 0.16;
    if (G.air) {
      G.vy -= 1800 * dt; G.y += G.vy * dt;
      if (G.y <= 0) { G.y = 0; G.vy = 0; G.air = false; G.walker.classList.remove('air'); }
      G.walker.style.transform = 'translateY(' + (-Math.round(G.y / 5) * 5) + 'px)';
    }
    let far = 0;
    for (const it of G.items) if (it.x > far) far = it.x;
    for (const it of G.items) {
      it.x -= v * dt;
      if (it.kind === 'ob') {
        // hitbox: crate body vs runner body (a little forgiving on both sides)
        if (it.x < px + 36 && it.x + 30 > px + 8 && G.y < 30) { it.el.style.transform = 'translateX(' + Math.round(it.x) + 'px)'; this.gameOver(); return; }
        if (!it.done && it.x + 34 < px) {
          it.done = true; G.hurdles++; G.h.textContent = G.hurdles;
          if (G.hurdles % 6 === 0) this.gameOffer();
        }
      } else if (!it.done && Math.abs(it.x - px) < 26 && G.y < 34) {
        it.done = true; it.el.classList.add('got'); G.coffee++; G.c.textContent = G.coffee;
      }
      if (it.x < -120) {
        const gap = Math.max(230, 430 - G.hurdles * 8) + Math.random() * 240;
        it.x = Math.max(G.W + 60, far + gap); far = it.x;
        it.done = false; it.el.classList.remove('got');
      }
      it.el.style.transform = 'translateX(' + Math.round(it.x) + 'px)';
    }
    G.raf = requestAnimationFrame(this.gameTick);
  };

  gameJump() {
    const G = this.g; if (!G || G.air) return;
    G.air = true; G.vy = 660; G.walker.classList.add('air');
    if (Math.random() < 0.3) this.say(this.QUIPS[Math.floor(Math.random() * this.QUIPS.length)]);
  }

  gameOffer() {
    const G = this.g; G.offers++; G.o.textContent = G.offers;
    G.offer.classList.remove('show'); void G.offer.offsetWidth; G.offer.classList.add('show');
    this.say('Negotiating salary…');
  }

  say(text) {
    const G = this.g; if (!G || !G.quip) return;
    G.quip.textContent = text; G.quip.classList.add('show');
    clearTimeout(this.quipT); this.quipT = setTimeout(() => G.quip.classList.remove('show'), 1500);
  }

  QUIPS = quips;

  gameInput() { const G = this.g; if (!G) return; if (G.state === 'play') this.gameJump(); else this.gameStart(); }
  gameTap = (e) => { if (e.button > 0) return; e.preventDefault(); this.gameInput(); };
  gameKey = (e) => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowUp') { e.preventDefault(); this.gameInput(); } };

  armTrail(tries) {
    const t = this.trailEl;
    if (!t) { if (tries < 25) this.trailWait = setTimeout(() => this.armTrail(tries + 1), 150); return; }
    let fine = false;
    try { fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) {}
    if (!fine || this.reduced()) return;
    this.dots = Array.prototype.slice.call(t.querySelectorAll('i'));
    this.tp = this.dots.map(() => ({ x: 0, y: 0 }));
    this.trailOK = true;
  }

  /* One rAF loop while the cursor moves; each square eases toward the one ahead, then the loop stops. */
  trailTick = () => {
    let px = this.mx, py = this.my, moving = false;
    for (let i = 0; i < this.tp.length; i++) {
      const p = this.tp[i];
      p.x += (px - p.x) * 0.42; p.y += (py - p.y) * 0.42;
      if (Math.abs(px - p.x) > 0.6 || Math.abs(py - p.y) > 0.6) moving = true;
      const gx = Math.round(p.x / 4) * 4, gy = Math.round(p.y / 4) * 4;
      this.dots[i].style.transform = 'translate3d(' + (gx + 4) + 'px,' + (gy + 6) + 'px,0) scale(' + (1 - i * 0.075).toFixed(3) + ')';
      px = p.x; py = p.y;
    }
    if (moving) this.trailRaf = requestAnimationFrame(this.trailTick);
    else { this.trailRaf = 0; this.trailEl.classList.remove('on'); }
  };


  componentWillUnmount() {
    if (this.io) this.io.disconnect();
    clearInterval(this.edTimer);
    clearTimeout(this.revealTimer);
    clearTimeout(this.edWait);
    clearTimeout(this.worldWait);
    clearTimeout(this.trailWait);
    if (this.wio) this.wio.disconnect();
    if (this.cio) this.cio.disconnect();
    clearTimeout(this.cfWait);
    if (this.wro) this.wro.disconnect();
    if (this.g && this.g.raf) cancelAnimationFrame(this.g.raf);
    clearTimeout(this.quipT);
    cancelAnimationFrame(this.trailRaf);
    cancelAnimationFrame(this.rafA); cancelAnimationFrame(this.rafB); cancelAnimationFrame(this.rafC);
  }

  reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  /* Scroll reveal: elements only start hidden once the observer is attached. */
  armReveal(tries) {
    const root = this.rootEl;
    if (!root) { if (tries < 25) this.revealTimer = setTimeout(() => this.armReveal(tries + 1), 120); return; }
    if (typeof IntersectionObserver === 'undefined') return;
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); this.io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    root.querySelectorAll('.rv').forEach((el) => this.io.observe(el));
    root.classList.add('rv-on');
  }

  /* Editor typing loop: reveals one line at a time, holds, then switches file. */
  startEditor(tries) {
    const ed = this.edEl;
    if (!ed) { if (tries < 25) this.edWait = setTimeout(() => this.startEditor(tries + 1), 120); return; }
    if (this.reduced()) return;
    ed.classList.add('run');
    let file = 0, step = 0, hold = 0;
    const lines = () => ed.querySelectorAll('.code.c' + file + ' .ln');
    this.edTimer = setInterval(() => {
      if (document.hidden) return;
      const ls = lines();
      if (step < ls.length) {
        ls.forEach((l) => l.classList.remove('cur'));
        ls[step].classList.add('t', 'cur');
        step++;
      } else if (++hold > 12) {
        ls.forEach((l) => l.classList.remove('t', 'cur'));
        file = 1 - file; step = 0; hold = 0;
        ed.setAttribute('data-f', String(file));
      }
    }, 420);
  }

  /* ---------------- Helpers ---------------- */
  pad(n) { return n < 10 ? '0' + n : String(n); }
  theme() {
    if (this.state.theme) return this.state.theme;
    return this.props.startTheme === 'light' ? 'light' : 'dark';
  }
  certList() { const f = this.state.certFilter; return f === 'all' ? this.C : this.C.filter((c) => c.key === f); }
  certGo(i) { const n = this.certList().length; this.setState({ certActive: ((i % n) + n) % n }); }
  cardStep() {
    const t = this.trackEl; if (!t || !t.children.length) return 0;
    const first = t.querySelector('.pcard'); if (!first) return 0;
    return first.getBoundingClientRect().width + 28;
  }

  /* ---------------- Global pointer: avatar eyes follow the cursor ---------------- */
  onRootMove = (e) => {
    const root = this.rootEl, av = this.avEl;
    if (!root) return;
    const x = e.clientX;
    if (this.trailOK && e.pointerType === 'mouse') {
      this.mx = e.clientX; this.my = e.clientY;
      if (!this.tpInit) { this.tp.forEach((p) => { p.x = this.mx; p.y = this.my; }); this.tpInit = true; }
      this.trailEl.classList.add('on');
      if (!this.trailRaf) this.trailRaf = requestAnimationFrame(this.trailTick);
    }
    cancelAnimationFrame(this.rafA);
    this.rafA = requestAnimationFrame(() => {
      let cx = window.innerWidth / 2;
      if (av) { const r = av.getBoundingClientRect(); if (r.width) cx = r.left + r.width / 2; }
      const dx = x - cx;
      root.style.setProperty('--ex', dx < -60 ? '-1px' : (dx > 60 ? '1px' : '0px'));
    });
  };

  /* Hero spotlight follows the cursor (CSS vars only, no re-render) */
  onHeroMove = (e) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    cancelAnimationFrame(this.rafB);
    this.rafB = requestAnimationFrame(() => { el.style.setProperty('--cx', x + 'px'); el.style.setProperty('--cy', y + 'px'); });
  };

  /* ---------------- Theme ---------------- */
  toggleTheme = () => this.setState({ theme: this.theme() === 'dark' ? 'light' : 'dark' });

  /* ---------------- Projects carousel ---------------- */
  onTrackScroll = () => {
    if (this.rafC) return;
    this.rafC = requestAnimationFrame(() => {
      this.rafC = 0;
      const t = this.trackEl; if (!t) return;
      const max = t.scrollWidth - t.clientWidth;
      const p = max > 0 ? t.scrollLeft / max : 0;
      if (this.fillEl) this.fillEl.style.transform = 'scaleX(' + Math.max(0.11, Math.min(1, 0.11 + p * 0.89)) + ')';
      const step = this.cardStep();
      let idx = step ? Math.round(t.scrollLeft / step) : 0;
      if (max - t.scrollLeft < 4) idx = this.P.length - 1;
      idx = Math.max(0, Math.min(this.P.length - 1, idx));
      if (idx !== this.state.pj) this.setState({ pj: idx });
    });
  };
  pjStep(dir) {
    const t = this.trackEl; if (!t) return;
    const max = t.scrollWidth - t.clientWidth, step = this.cardStep();
    if (dir > 0 && t.scrollLeft >= max - 4) t.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir < 0 && t.scrollLeft <= 4) t.scrollTo({ left: max, behavior: 'smooth' });
    else t.scrollBy({ left: dir * step, behavior: 'smooth' });
  }
  pjPrev = () => this.pjStep(-1);
  pjNext = () => this.pjStep(1);
  pjKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); this.pjNext(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); this.pjPrev(); }
  };
  /* Mouse drag-to-scroll; touch and trackpads use native scrolling. Capture starts only once a real drag begins so clicks still work. */
  dragStart = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !this.trackEl) return;
    this.drag = { x: e.clientX, sl: this.trackEl.scrollLeft, id: e.pointerId, on: false };
  };
  dragMove = (e) => {
    const d = this.drag, t = this.trackEl; if (!d || !t) return;
    const dx = e.clientX - d.x;
    if (!d.on && Math.abs(dx) > 6) { d.on = true; t.classList.add('is-drag'); try { t.setPointerCapture(d.id); } catch (err) {} }
    if (d.on) t.scrollLeft = d.sl - dx;
  };
  dragEnd = () => {
    const d = this.drag, t = this.trackEl; this.drag = null;
    if (!d || !d.on || !t) return;
    this.justDragged = true; setTimeout(() => { this.justDragged = false; }, 60);
    const step = this.cardStep();
    t.classList.remove('is-drag');
    if (step) t.scrollTo({ left: Math.round(t.scrollLeft / step) * step, behavior: 'smooth' });
  };

  /* ---------------- Project modal ---------------- */
  openModal(i) { if (this.justDragged) return; this.setState({ modal: i }); }
  closeModal = () => this.setState({ modal: -1 });
  modalPrev = () => { const n = this.P.length; this.setState({ modal: (this.state.modal - 1 + n) % n }); };
  modalNext = () => { const n = this.P.length; this.setState({ modal: (this.state.modal + 1) % n }); };
  modalKey = (e) => {
    if (e.key === 'Escape') this.closeModal();
    else if (e.key === 'ArrowRight') this.modalNext();
    else if (e.key === 'ArrowLeft') this.modalPrev();
  };
  stop = (e) => e.stopPropagation();

  /* ---------------- Certificates ---------------- */
  certPrev = () => this.certGo(this.state.certActive - 1);
  certNext = () => this.certGo(this.state.certActive + 1);
  certAuto = () => { if (this.props.autoplay !== false && !this.state.cfHover && !this.state.lightbox) this.certNext(); };
  cfEnter = () => this.setState({ cfHover: true });
  cfLeave = () => this.setState({ cfHover: false });
  /* Swipe or mouse-drag the deck; the ring follows the pointer, then snaps to the next card. */
  cfDown = (e) => { if (e.button > 0) return; this.swipe = { x: e.clientX, y: e.clientY, id: e.pointerId, on: false }; };
  cfMove = (e) => {
    const s = this.swipe; if (!s) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (!s.on && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      s.on = true;
      try { e.currentTarget.setPointerCapture(s.id); } catch (err) {}
      if (this.ringEl) this.ringEl.style.transition = 'none';
    }
    if (s.on && this.ringEl) this.ringEl.style.transform = 'translateX(' + (dx * 0.35) + 'px)';
  };
  cfUp = (e) => {
    const s = this.swipe; this.swipe = null; if (!s) return;
    if (this.ringEl) { this.ringEl.style.transition = ''; this.ringEl.style.transform = ''; }
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (s.on && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      this.cfSwiped = true; setTimeout(() => { this.cfSwiped = false; }, 60);
      if (dx < 0) this.certNext(); else this.certPrev();
    }
  };
  certKey = (e) => {
    if (this.state.lightbox) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); this.certNext(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); this.certPrev(); }
  };
  openLb = () => this.setState({ lightbox: true });
  closeLb = () => this.setState({ lightbox: false });
  lbKey = (e) => { if (e.key === 'Escape') this.closeLb(); };

  /* ---------------- Contact form ---------------- */
  setName = (e) => this.setState({ fName: e.target.value });
  setMail = (e) => this.setState({ fMail: e.target.value });
  setMsg = (e) => this.setState({ fMsg: e.target.value });

  renderVals() {
    const s = this.state;
    const theme = this.theme();

    const projects = this.P.map((p, i) => ({
      ...p,
      num: this.pad(i + 1),
      top: p.tech.slice(0, 4),
      img: p.img || null,
      mk: { leads: p.k === 'leads', bol: p.k === 'bol', lms: p.k === 'lms', sw: p.k === 'sw', hm: p.k === 'hm', nb: p.k === 'nb' },
      open: () => this.openModal(i)
    }));
    const mi = s.modal >= 0 ? s.modal : 0;
    const mp = { ...this.P[mi], num: this.pad(mi + 1) };
    const n = this.P.length;

    const stack = this.S.map((g, i) => ({
      ...g,
      count: this.pad(g.items.length),
      cls: i === s.stackTab ? 'on' : '',
      sel: i === s.stackTab ? 'true' : 'false',
      pick: () => this.setState({ stackTab: i })
    }));
    const sg = this.S[s.stackTab];

    const list = this.certList();
    const ca = Math.min(s.certActive, list.length - 1);
    const cn = list.length;
    const certs = list.map((c, i) => {
      /* circular offset so the deck loops: the last card sits left of the first */
      let off = ((i - ca) % cn + cn) % cn;
      if (off > cn / 2) off -= cn;
      const abs = Math.abs(off);
      const side = off === 0 ? 0 : (off < 0 ? 1 : -1);
      return {
        img: c.img,
        n: i + 1,
        aria: off === 0 ? 'View ' + c.title + ' full size' : 'Show ' + c.title,
        tab: abs > 1 ? '-1' : '0',
        tf: 'translateX(' + (off * 44) + '%) translateZ(' + (-abs * 180) + 'px) rotateY(' + (side * 34) + 'deg)',
        op: abs > 2 ? 0 : 1,
        z: 50 - abs,
        cls: off === 0 ? 'mid' : (abs > 2 ? 'side gone' : 'side'),
        dot: off === 0 ? 'on' : '',
        go: () => this.setState({ certActive: i }),
        pick: () => { if (this.cfSwiped) return; if (off === 0) this.openLb(); else this.setState({ certActive: i }); }
      };
    });
    const c0 = list[ca] || this.C[0];
    const cur = { ...c0, cid: c0.cid || 'Not listed', verify: c0.verify || null };
    const filters = this.F.map((f) => {
      const on = f.key === s.certFilter;
      return {
        ...f,
        count: f.key === 'all' ? this.C.length : this.C.filter((c) => c.key === f.key).length,
        cls: on ? 'on' : '',
        pressed: on ? 'true' : 'false',
        pick: () => this.setState({ certFilter: f.key, certActive: 0 })
      };
    });

    const subj = 'Project inquiry' + (s.fName ? ' from ' + s.fName : '');
    const body = (s.fMsg || '') + (s.fMail ? '\n\nReply to: ' + s.fMail : '');
    const mailHref = 'mailto:sobaniftikhar1098@gmail.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);

    return {
      setRoot: this.setRoot, setEditor: this.setEditor, setAvatar: this.setAvatar,
      setTrack: this.setTrack, setFill: this.setFill, setRing: this.setRing,
      setWorld: this.setWorld, setTrail: this.setTrail, setCf: this.setCf, gameTap: this.gameTap, gameKey: this.gameKey,
      pxCls: s.px ? 'px-on' : '', pxPressed: s.px ? 'true' : 'false', pxLabel: s.px ? 'back to photo' : '8-bit mode', togglePx: this.togglePx,
      theme, isDark: theme === 'dark', isLight: theme === 'light',
      themeLabel: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      toggleTheme: this.toggleTheme, onRootMove: this.onRootMove, onHeroMove: this.onHeroMove,

      projects, pjNum: this.pad(s.pj + 1),
      pjPrev: this.pjPrev, pjNext: this.pjNext, pjKey: this.pjKey, onTrackScroll: this.onTrackScroll,
      dragStart: this.dragStart, dragMove: this.dragMove, dragEnd: this.dragEnd,

      modalOpen: s.modal >= 0, mp,
      mpPrevName: this.P[(mi - 1 + n) % n].name, mpNextName: this.P[(mi + 1) % n].name,
      closeModal: this.closeModal, modalPrev: this.modalPrev, modalNext: this.modalNext, modalKey: this.modalKey, stop: this.stop,

      stack, stackCmd: sg.cmd, stackCount: sg.items.length, stackLine: sg.line,

      filters, certs, cur,
      certCounter: ca + 1, certTotal: list.length,
      cfState: this.props.autoplay === false ? 'stopped' : (s.cfHover || s.lightbox ? 'paused' : ''),
      certPrev: this.certPrev, certNext: this.certNext, certAuto: this.certAuto, certKey: this.certKey,
      cfEnter: this.cfEnter, cfLeave: this.cfLeave, cfDown: this.cfDown, cfMove: this.cfMove, cfUp: this.cfUp,
      lightbox: s.lightbox, openLb: this.openLb, closeLb: this.closeLb, lbKey: this.lbKey,

      setName: this.setName, setMail: this.setMail, setMsg: this.setMsg, mailHref
    };
  }

  render() {
    const v = this.renderVals();
    const { theme, setRoot, setTrail, onRootMove } = v;
    return (
      <div className="sb" data-theme={theme} ref={setRoot} onPointerMove={onRootMove}>
        <div className="trail" ref={setTrail} aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <Nav v={v} />
        <Hero v={v} />
        <About v={v} />
        <Projects v={v} />
        <Experience v={v} />
        <Stack v={v} />
        <Certificates v={v} />
        <Contact v={v} />
        <ProjectModal v={v} />
        <CertLightbox v={v} />
      </div>
    );
  }
}

export default App;
