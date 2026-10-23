/* قواعد الإنجليزية: الفهرس، مشغّل الدروس (شاشة لكل فكرة)، الاختبارات، وحفظ التقدم في المتصفح. */
(function () {
  "use strict";

  // ================= أدوات عامة =================
  var KEY = "grammar-progress-v1";
  function loadProgress() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function saveProgress(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function record(key, pct) {
    var p = loadProgress(), old = p[key] || { best: 0, attempts: 0 };
    p[key] = { best: Math.max(old.best || 0, pct), last: pct, attempts: (old.attempts || 0) + 1, date: new Date().toISOString().slice(0, 10) };
    saveProgress(p);
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function btn(cls, html, fn) { var b = el("button", cls, html); b.type = "button"; if (fn) b.addEventListener("click", fn); return b; }
  var AR = /[؀-ۿ]/;
  var COLORS = { accent: "var(--accent)", subj: "var(--subj)", verb: "var(--verb)", be: "var(--be)", end: "var(--end)", neg: "var(--neg)", qw: "var(--qw)", muted: "var(--muted)", ok: "var(--ok)", bad: "var(--bad)", ink: "var(--ink)",
                 s: "var(--subj)", v: "var(--verb)", a: "var(--be)", n: "var(--neg)", q: "var(--qw)", k: "var(--accent)", e: "var(--end)" };
  function col(c) { return COLORS[c] || c || "var(--accent)"; }
  function dirA(t) { return AR.test(String(t || "")) ? ' dir="rtl"' : ""; }

  // {s:He} {v:work|s} {a:is} {n:not} {q:Where} {k:مفتاح} {o:object} {x:رمادي} {e:s} {d:محذوف}
  var TOK = /\{([savnqkoxed]):([^{}]*)\}/g;
  function tokInner(t, w, pills) {
    var parts = w.split("|"), body = esc(parts[0]) + (parts.length > 1 ? '<span class="b-e pop">' + esc(parts[1]) + "</span>" : "");
    if (t === "e") return '<span class="b-e">' + esc(w) + "</span>";
    if (t === "d") return '<span class="b-d">' + esc(w) + "</span>";
    if (pills) return t === "x" ? '<span class="b-x">' + body + "</span>" : '<span class="blk b-' + t + '">' + body + "</span>";
    return '<span class="t-' + t + '">' + body + "</span>";
  }
  // نص إنجليزي ملوّن داخل السطر
  function tk(s) {
    var out = "", last = 0, m; TOK.lastIndex = 0; s = String(s == null ? "" : s);
    while ((m = TOK.exec(s))) { out += esc(s.slice(last, m.index)) + tokInner(m[1], m[2], false); last = TOK.lastIndex; }
    return (out + esc(s.slice(last))).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }
  // جملة بقطع ملونة كبيرة
  function pills(s) {
    var out = "", last = 0, m; TOK.lastIndex = 0; s = String(s == null ? "" : s);
    function plain(t) { return esc(t).replace(/(^|\s)\+(\s|$)/g, '$1<span class="plus">+</span>$2'); }
    while ((m = TOK.exec(s))) { out += plain(s.slice(last, m.index)) + tokInner(m[1], m[2], true); last = TOK.lastIndex; }
    return out + plain(s.slice(last));
  }
  // نص عربي، والإنجليزي بين `...`
  function rich(s) {
    s = String(s == null ? "" : s).replace(/`\s*\+\s*`/g, " + ");
    return s.split("`").map(function (p, i) {
      if (i % 2) return '<span class="en' + (p.length <= 26 ? " nw" : "") + '" style="font-weight:700">' + tk(p) + "</span>";
      var out = "", last = 0, m; TOK.lastIndex = 0;
      while ((m = TOK.exec(p))) { out += esc(p.slice(last, m.index)) + '<span class="en">' + tokInner(m[1], m[2], false) + "</span>"; last = TOK.lastIndex; }
      out += esc(p.slice(last));
      return out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
    }).join("");
  }
  function head1(s) { return rich(s).replace(/<em>/g, "<em>"); }

  function groupIndexOf(id) {
    for (var i = 0; i < CATALOG.length; i++) for (var j = 0; j < CATALOG[i].units.length; j++) if (CATALOG[i].units[j][0] === id) return i;
    return -1;
  }
  function unitName(id) {
    var gi = groupIndexOf(id); if (gi < 0) return "";
    var u = CATALOG[gi].units.filter(function (x) { return x[0] === id; })[0];
    return u ? u[1] : "";
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ================= تصحيح الإجابات =================
  function normalize(s) {
    s = String(s).toLowerCase().replace(/[‘’ʼ`]/g, "'").replace(/[“”]/g, '"');
    s = s.replace(/\b(do|does|did|is|are|was|were|has|have|had|could|would|should)nt\b/g, "$1 not")
         .replace(/\bcant\b/g, "cannot").replace(/\blets\b/g, "let us").replace(/\bim\b/g, "i am");
    s = s.replace(/won't/g, "will not").replace(/can't/g, "cannot").replace(/shan't/g, "shall not")
         .replace(/n't/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are")
         .replace(/\b(he|she|it|that|what|who|there|where|here)'s\b/g, "$1 is")
         .replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/\blet's\b/g, "let us");
    return s.replace(/[.,!?;:"]/g, " ").replace(/\s+/g, " ").trim();
  }
  function isCorrect(given, answers) {
    var g = normalize(given); if (!g) return false;
    return answers.some(function (a) { return normalize(a) === g; });
  }

  function ring(pct, label) {
    var r = 64, c = 2 * Math.PI * r;
    return '<svg viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="' + r + '" fill="none" stroke="var(--soft)" stroke-width="12"/>' +
      '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="' + (pct >= 80 ? "var(--ok)" : "var(--accent)") + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - Math.max(0, Math.min(100, pct)) / 100)).toFixed(1) + '" transform="rotate(-90 75 75)"/>' +
      '<text x="75" y="75" text-anchor="middle" dominant-baseline="central" direction="ltr" font-family="Cairo, sans-serif" font-weight="800" font-size="' + (label && label.length > 4 ? 26 : 32) + '" fill="var(--ink)">' + esc(label != null ? label : pct + "%") + "</text></svg>";
  }


  // ================= الوضع الليلي =================
  var THEME_KEY = "grammar-theme";
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  }
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  function themeBtn() {
    var b = el("button", "theme-btn"); b.type = "button";
    function paint() { var d = isDark(); b.innerHTML = d ? SUN : MOON; b.title = d ? "الوضع النهاري" : "الوضع الليلي"; b.setAttribute("aria-label", b.title); }
    b.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      document.querySelectorAll(".theme-btn").forEach(function (x) { x._paint && x._paint(); });
    });
    b._paint = paint; paint();
    return b;
  }

  // ================= الأسئلة =================
  function qtextHTML(q) {
    var t = q.q || "";
    if (AR.test(t) && t.indexOf("___") < 0) return '<div class="qtext ar-q">' + rich(t) + "</div>";
    return '<div class="qtext">' + esc(t).replace(/_{3,}/g, '<span class="blank">&nbsp;</span>') + "</div>";
  }
  function mcq(box, q, onDone) {
    box.insertAdjacentHTML("beforeend", qtextHTML(q));
    var opts = el("div", "opts"), fb = el("div", "fb"); fb.hidden = true;
    var bs = q.o.map(function (o, k) {
      var b = btn("opt", esc(o), function () {
        bs.forEach(function (x) { x.disabled = true; });
        var ok = k === q.a;
        b.classList.add(ok ? "ok" : "no");
        if (!ok) bs[q.a].classList.add("ok");
        fb.className = "fb " + (ok ? "ok" : "no");
        fb.innerHTML = '<b class="st">' + (ok ? "✓ صحيح" : "✗ ليس تمامًا") + "</b>" + rich(q.why);
        fb.hidden = false;
        if (onDone) onDone(ok);
      });
      if (AR.test(o)) { b.style.direction = "rtl"; b.style.textAlign = "right"; }
      opts.appendChild(b); return b;
    });
    box.appendChild(opts); box.appendChild(fb);
  }
  function written(box, q, onDone) {
    box.insertAdjacentHTML("beforeend", qtextHTML(q));
    var row = el("div", "ansrow"), inp = el("input"); inp.type = "text"; inp.setAttribute("dir", "ltr"); inp.autocomplete = "off"; inp.spellcheck = false;
    inp.setAttribute("autocapitalize", "off");
    inp.placeholder = q.t === "fill" ? "Type the missing word(s)" : "Type the full sentence";
    var fb = el("div", "fb"); fb.hidden = true;
    var chk = btn("btn", "تحقق", submit);
    function submit() {
      if (!inp.value.trim()) { inp.focus(); return; }
      var ok = isCorrect(inp.value, q.a);
      inp.disabled = true; chk.disabled = true;
      fb.className = "fb " + (ok ? "ok" : "no");
      fb.innerHTML = '<b class="st">' + (ok ? "✓ صحيح" : "✗ ليس تمامًا") + "</b>" + (ok && q.a.length === 1 ? "" : '<div class="model">' + esc(q.a[0]) + "</div>") + rich(q.why);
      fb.hidden = false; onDone(ok);
    }
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    row.appendChild(inp); row.appendChild(chk);
    box.appendChild(row); box.appendChild(fb);
    setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 60);
  }
  var TYPES = { mcq: "اختر الإجابة", fill: "أكمل الفراغ", fix: "صحّح الخطأ", rewrite: "أعد الصياغة" };
  var ASK = { mcq: "اختر الإجابة المناسبة.", fill: "اكتب الكلمة المناسبة.", fix: "في الجملة خطأ. اكتبها صحيحة كاملة.", rewrite: "أعد كتابة الجملة كما هو مطلوب." };

  // اختبار سؤالًا سؤالًا
  function runQuiz(root, qs, o) {
    var qi = 0, right = 0, wrong = [];
    function show() {
      root.innerHTML = "";
      if (qi >= qs.length) return finish();
      var q = qs[qi];
      root.appendChild(el("div", "qhead", '<span class="count">' + (qi + 1) + " / " + qs.length + '</span><div class="qbar"><i style="width:' + (qi / qs.length * 100) + '%"></i></div>'));
      var card = el("div", "card qcard");
      var top = '<div><span class="qtype">' + TYPES[q.t] + '</span> · <span class="qask">' + rich(q.ask || ASK[q.t]) + "</span>";
      if (q.src) top += ' <a class="qsrc" href="unit.html#u' + q.src + '">القاعدة ' + pad(q.src) + "</a>";
      card.insertAdjacentHTML("beforeend", top + "</div>");
      var nextB = btn("btn", qi === qs.length - 1 ? "النتيجة ←" : "السؤال التالي ←", function () { qi++; show(); });
      nextB.hidden = true;
      function done(ok) { if (ok) right++; else wrong.push(q); nextB.hidden = false; try { nextB.focus({ preventScroll: true }); } catch (e) {} }
      if (q.t === "mcq") mcq(card, q, done); else written(card, q, done);
      card.appendChild(nextB);
      root.appendChild(card);
    }
    function finish() {
      var pct = qs.length ? Math.round(right / qs.length * 100) : 0;
      if (o.key != null) record(o.key, pct);
      var box = el("div", "card done-ring");
      box.innerHTML = ring(pct) + "<h2>" + right + " من " + qs.length + " إجابات صحيحة</h2>" +
        '<p class="note">' + (pct >= 80 ? (o.goodMsg || "ممتاز، أتقنت هذا الجزء.") : (o.badMsg || "راجع الشرح ثم أعد المحاولة. الهدف 80٪.")) + "</p>";
      if (o.showWrongUnits && wrong.length) {
        var ids = []; wrong.forEach(function (q) { if (q.src && ids.indexOf(q.src) < 0) ids.push(q.src); });
        ids.sort(function (a, b) { return a - b; });
        box.insertAdjacentHTML("beforeend", '<p class="note" style="margin:0">راجع هذه القواعد:</p><div class="wrong-list">' + ids.map(function (id) { return '<a href="unit.html#u' + id + '">' + pad(id) + "</a>"; }).join("") + "</div>");
      }
      var acts = el("div", "actions"); acts.style.justifyContent = "center";
      if (wrong.length) acts.appendChild(btn("btn ghost", "أعد الأسئلة الخاطئة فقط", function () { var w = wrong.slice(); qs = w; qi = 0; right = 0; wrong = []; o.key = null; show(); }));
      acts.appendChild(btn("btn ghost", o.againLabel || "أعد التمارين كلها", function () { qs = o.restart ? o.restart() : o.all; o.key = o.origKey; qi = 0; right = 0; wrong = []; show(); }));
      if (o.after) acts.appendChild(btn("btn", o.after[0], o.after[1]));
      box.appendChild(acts);
      root.appendChild(box);
    }
    o.all = qs; o.origKey = o.key;
    show();
  }

  // ================= أيقونات =================
  var IC = {
    repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    now: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="7"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    question: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5 2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4L2.4 16a2 2 0 0 1 2.8-2.8L7 15"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 3-1 5-4 5zM14 21c3 0 7-1 7-8V5h-7v7h4c0 3-1 5-4 5z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    plane: '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    scale: '<path d="M12 3v18M5 21h14M7 7l-4 8h8zM17 7l-4 8h8zM5 7h14"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/>',
    door: '<path d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3M13 20h9M10 12v.01M13 4.6v16.8a.6.6 0 0 1-.8.6L5 20V5.6a1 1 0 0 1 .7-1L12.2 3a.6.6 0 0 1 .8.6z"/>',
    money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    gift: '<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
    sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    cloud: '<path d="M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (IC[n] || IC.bulb) + "</svg>"; }

  // ================= لبنات الشرح =================
  function gridFor(n) { return n >= 4 ? "grid4" : n === 3 ? "grid3" : n === 2 ? "grid2" : ""; }
  var B = {};

  // خط زمني: المواضع من -1 (الماضي) إلى 1 (المستقبل)، و0 = الآن
  B.timeline = function (s) {
    var marks = s.marks || [], ROW = 44;
    var bands = marks.filter(function (m) { return m.m === "band" || m.m === "wave" || m.m === "arrow"; });
    var rows = 0; bands.forEach(function (m, i) { if (m.row == null) m.row = i; rows = Math.max(rows, m.row + 1); });
    var belowRows = 0; marks.forEach(function (m) { if ((m.m === "dot" || m.m === "dots" || m.m === "x") && m.label) belowRows = Math.max(belowRows, (m.row || 0) + 1); });
    var lineY = 18 + rows * ROW + (rows ? 6 : 10), H = lineY + 18 + belowRows * 26 + 6;
    function x(v) { return ((Math.max(-1, Math.min(1, v)) + 1) / 2 * 100).toFixed(2) + "%"; }
    var nowAt = s.nowAt != null ? s.nowAt : 0;
    var h = '<div class="tl"><div class="tl-area" data-h="' + H + '" data-line="' + lineY + '" style="height:' + H + 'px">';
    h += '<div class="tl-line" style="top:' + lineY + 'px"></div>';
    if (s.now !== false) h += '<div class="tl-now" style="left:' + x(nowAt) + ';top:4px;bottom:0"></div>';
    var delay = 0;
    marks.forEach(function (m) {
      var c = col(m.c);
      if (m.m === "band" || m.m === "wave" || m.m === "arrow") {
        var top = lineY - 24 - m.row * ROW, from = m.from != null ? m.from : -1, to = m.to != null ? m.to : 1;
        var mid = (from + to) / 2;
        if (m.m === "arrow") h += '<div class="tl-arrow" style="left:' + x(from) + ";right:calc(100% - " + x(to) + ");top:" + (top + 5) + "px;background:" + c + ";border-color:" + c + '"></div>';
        else h += '<div class="tl-band' + (m.m === "wave" ? " wave" : "") + '" style="left:' + x(from) + ";right:calc(100% - " + x(to) + ");top:" + top + "px;background:" + c + '"></div>';
        if (m.label) h += '<span class="tl-tag" style="left:' + x(m.lx != null ? m.lx : mid) + ";top:" + (top - 22) + "px;color:" + c + '">' + tk(m.label) + "</span>";
      } else if (m.m === "dots") {
        var n = m.n || 6, f = m.from != null ? m.from : -0.9, t = m.to != null ? m.to : 0.9;
        for (var i = 0; i < n; i++) { h += '<span class="tl-dot" style="left:' + x(f + (t - f) * (n === 1 ? 0.5 : i / (n - 1))) + ";top:" + lineY + "px;background:" + c + ";animation-delay:" + (delay += .04).toFixed(2) + 's"></span>'; }
        if (m.label) h += '<span class="tl-tag" style="left:' + x(m.lx != null ? m.lx : (f + t) / 2) + ";top:" + (lineY + 14 + (m.row || 0) * 26) + "px;color:" + c + '">' + tk(m.label) + "</span>";
      } else if (m.m === "dot" || m.m === "x") {
        if (m.m === "dot") h += '<span class="tl-dot" style="left:' + x(m.at) + ";top:" + lineY + "px;background:" + c + ";animation-delay:" + (delay += .05).toFixed(2) + 's"></span>';
        else h += '<span class="tl-x" style="left:' + x(m.at) + ";top:" + lineY + 'px">✕</span>';
        if (m.label) h += '<span class="tl-tag" style="left:' + x(m.lx != null ? m.lx : m.at) + ";top:" + (lineY + 14 + (m.row || 0) * 26) + "px;color:" + (m.m === "x" ? "var(--bad)" : c) + '">' + tk(m.label) + "</span>";
      }
    });
    h += "</div>";
    var L = s.labels || ["الماضي", "الآن", "المستقبل"];
    if (!L[0] && !L[1] && !L[2]) return finishTl(h + "</div>", s);
    h += '<div class="tl-labels" style="direction:ltr;position:relative;height:30px;display:block">' +
      '<span style="position:absolute;left:0">' + rich(L[0]) + "</span>" +
      (L[1] ? '<b style="position:absolute;left:' + x(nowAt) + ';transform:translateX(-50%);white-space:nowrap">' + rich(L[1]) + "</b>" : "") +
      '<span style="position:absolute;right:0">' + rich(L[2]) + "</span></div></div>";
    return finishTl(h, s);
  };
  // يمنع تداخل عناوين الخط الزمني: يحرّك العنوان المتداخل صفًّا إلى الأسفل أو الأعلى، ويبقيه داخل البطاقة
  function fixTl(area) {
    var tags = [].slice.call(area.querySelectorAll(".tl-tag"));
    if (!tags.length || !area.offsetWidth) return;
    tags.forEach(function (t) { t.style.marginTop = ""; t.style.marginLeft = ""; });
    var ar = area.getBoundingClientRect(), placed = [], extra = 0;
    tags.forEach(function (t) {
      var r = t.getBoundingClientRect(), dx = 0;
      if (r.left < ar.left - 4) dx = ar.left - 4 - r.left;
      if (r.right > ar.right + 4) dx = ar.right + 4 - r.right;
      if (dx) t.style.marginLeft = dx + "px";
      var below = parseFloat(t.style.top) > parseFloat(area.dataset.line || 0), shift = 0;
      for (var guard = 0; guard < 6; guard++) {
        r = t.getBoundingClientRect();
        var hit = placed.some(function (p) { var q = p.getBoundingClientRect(); return r.left < q.right + 6 && r.right > q.left - 6 && r.top < q.bottom && r.bottom > q.top; });
        if (!hit) break;
        shift += below ? 22 : -22; t.style.marginTop = shift + "px";
      }
      if (below && shift > extra) extra = shift;
      placed.push(t);
    });
    area.style.height = (parseFloat(area.dataset.h) + extra) + "px";
  }
  // يمنع تداخل كلمات السلّم على الشاشات الضيقة
  function fixScale(sc) {
    var spans = [].slice.call(sc.querySelectorAll(".fq > span"));
    if (!spans.length || !sc.offsetWidth) return;
    spans.forEach(function (t) { t.style.marginLeft = ""; t.style.bottom = ""; t.style.top = ""; });
    var R = sc.getBoundingClientRect(), placed = [], maxUp = 0, maxDn = 0;
    spans.forEach(function (t) {
      var up = t.parentNode.classList.contains("up"), r = t.getBoundingClientRect(), dx = 0;
      if (r.left < R.left) dx = R.left - r.left;
      if (r.right > R.right) dx = R.right - r.right;
      if (dx) t.style.marginLeft = dx + "px";
      var off = 22;
      for (var g = 0; g < 6; g++) {
        r = t.getBoundingClientRect();
        var hit = placed.some(function (p) { var q = p.getBoundingClientRect(); return r.left < q.right + 4 && r.right > q.left - 4 && r.top < q.bottom && r.bottom > q.top; });
        if (!hit) break;
        off += r.height + 2;
        if (up) t.style.bottom = off + "px"; else t.style.top = off + "px";
      }
      var extra = off - 22;
      if (up) maxUp = Math.max(maxUp, extra); else maxDn = Math.max(maxDn, extra);
      placed.push(t);
    });
    sc.style.paddingTop = (52 + maxUp) + "px"; sc.style.paddingBottom = (54 + maxDn) + "px";
  }
  function fixAllTl(root) { root = root || document; [].forEach.call(root.querySelectorAll(".tl-area"), fixTl); [].forEach.call(root.querySelectorAll(".scale"), fixScale); }
  window.addEventListener("resize", function () { fixAllTl(); });

  function finishTl(h, s) {
    var card = el("div", "card", h);
    if (s.legend) {
      var lg = el("div", "legend2"); lg.style.marginTop = "6px";
      s.legend.forEach(function (l) { lg.insertAdjacentHTML("beforeend", '<span><i class="sw" style="background:' + col(l[0]) + '"></i> ' + rich(l[1]) + "</span>"); });
      card.appendChild(lg);
    }
    if (s.cap) card.insertAdjacentHTML("beforeend", '<div class="cap" style="margin-top:6px">' + rich(s.cap) + "</div>");
    return card;
  }

  // بطاقات حالات بأيقونات
  B.cards = function (s) {
    var g = el("div", gridFor(s.items.length));
    s.items.forEach(function (it) {
      var c = el("div", "card use");
      var h = (it.i ? '<div class="ico">' + icon(it.i) + "</div>" : "") + "<h2>" + rich(it.h) + "</h2>";
      if (it.txt) h += '<div class="cap">' + rich(it.txt) + "</div>";
      if (it.en) h += '<div class="ex en">' + tk(it.en) + "</div>";
      if (it.ar) h += '<div class="ar">' + rich(it.ar) + "</div>";
      if (it.tags) h += '<div class="tags en">' + it.tags.map(function (t) { return '<span class="tag">' + tk(t) + "</span>"; }).join("") + "</div>";
      c.innerHTML = h; g.appendChild(c);
    });
    return g;
  };

  // اختر وراقب: كل خيار يغيّر الجملة
  B.build = function (s) {
    var card = el("div", "card"); card.style.display = "grid"; card.style.gap = "8px";
    var pick = el("div", "pick en"); pick.setAttribute("role", "group");
    if (s.lab) pick.appendChild(el("div", "lab", rich(s.lab)));
    var sent = el("div", "sentence"); sent.setAttribute("aria-live", "polite");
    var note = el("div", "bnote");
    var grps = [];
    var gwrap = null;
    if (s.groups) {
      gwrap = el("div", "groups");
      s.groups.forEach(function (g) {
        var d = el("div", "grp", '<div class="who' + (AR.test(g.h) ? "" : " en") + '">' + rich(g.h) + "</div>" + (g.sub ? '<div class="sub">' + rich(g.sub) + "</div>" : "") + (g.res ? '<div class="res">' + tk(g.res) + "</div>" : ""));
        grps.push(d); gwrap.appendChild(d);
      });
    }
    var buttons = s.opts.map(function (o, i) {
      var b = btn("", tk(o[0]), function () { set(i); });
      if (AR.test(o[0])) b.style.direction = "rtl";
      pick.appendChild(b); return b;
    });
    function set(i) {
      buttons.forEach(function (b, k) { b.setAttribute("aria-pressed", k === i ? "true" : "false"); });
      var o = s.opts[i];
      sent.innerHTML = pills(o[1]);
      [].forEach.call(sent.children, function (c, k) { c.classList.add("pop"); c.style.animationDelay = (k * 0.03) + "s"; });
      note.innerHTML = o[2] ? rich(o[2]) : "";
      grps.forEach(function (g, k) { g.classList.toggle("lit", o[3] === k); });
    }
    card.appendChild(pick); card.appendChild(sent); card.appendChild(note);
    if (gwrap) card.appendChild(gwrap);
    set(s.start || 0);
    return card;
  };

  // صيغة الجملة
  B.formula = function (s) {
    var card = el("div", "card formula");
    if (s.h) card.appendChild(el("h2", "", rich(s.h)));
    s.rows.forEach(function (r) {
      card.appendChild(el("div", "f-row", (r[0] ? '<div class="lab">' + rich(r[0]) + "</div>" : "") + '<div class="parts">' + pills(r[1]) + "</div>" + (r[2] ? '<div class="cap">' + rich(r[2]) + "</div>" : "")));
    });
    return card;
  };

  // مقارنة جنبًا إلى جنب
  B.compare = function (s) {
    var g = el("div", gridFor(s.cols.length));
    s.cols.forEach(function (c) {
      var d = el("div", "card cmp"); d.style.setProperty("--cc", col(c.c));
      var h = "<h2>" + rich(c.h) + "</h2>";
      if (c.txt) h += '<div class="txt">' + rich(c.txt) + "</div>";
      d.innerHTML = h;
      if (c.tl) { var t = B.timeline(c.tl); t.className = ""; d.appendChild(t); }
      if (c.en) d.appendChild(el("div", "lines", c.en.map(function (e) { return '<div class="line"' + dirA(e) + '>' + tk(e) + "</div>"; }).join("")));
      if (c.ar) d.insertAdjacentHTML("beforeend", '<div class="ar2">' + rich(c.ar) + "</div>");
      if (c.foot) d.insertAdjacentHTML("beforeend", '<div class="cap">' + rich(c.foot) + "</div>");
      g.appendChild(d);
    });
    return g;
  };

  // ربط بالأسهم
  B.map = function (s) {
    var cols = s.cols || [s];
    var g = el("div", gridFor(cols.length));
    cols.forEach(function (c) {
      var d = el("div", "card map");
      if (c.h) d.appendChild(el("h2", "", rich(c.h))).style.color = col(c.c);
      c.rows.forEach(function (r) {
        var right = /\{[a-z]:/.test(r[1]) ? pills(r[1]) : '<span class="blk b-' + (c.k || "v") + '">' + esc(r[1]) + "</span>";
        var left = AR.test(r[0]) ? '<span style="direction:rtl;display:inline-block">' + rich(r[0]) + "</span>" : tk(r[0]);
        d.appendChild(el("div", "map-row", '<span class="l">' + left + '</span><span class="ar2"></span><span class="r">' + right + "</span>"));
      });
      if (c.note) d.insertAdjacentHTML("beforeend", '<div class="note">' + rich(c.note) + "</div>");
      g.appendChild(d);
    });
    return g;
  };

  // قواعد الكتابة مع تجربة
  B.rules = function (s) {
    var wrap = el("div"); wrap.style.display = "grid"; wrap.style.gap = "14px";
    var g = el("div", gridFor(s.items.length) + " rg"), tiles = [];
    s.items.forEach(function (it) {
      var d = el("div", "card rule", '<div class="cond">' + rich(it.cond) + '</div><div class="sym">' + esc(it.sym) + "</div>" +
        (it.pairs || []).map(function (p) { return '<div class="pair">' + esc(p[0]) + ' <span class="arrow">→</span> ' + esc(p[1]) + (p[2] ? '<span class="b-e">' + esc(p[2]) + "</span>" : "") + "</div>"; }).join(""));
      tiles.push(d); g.appendChild(d);
    });
    wrap.appendChild(g);
    if (s.try) {
      var c = el("div", "card"); c.style.display = "grid"; c.style.gap = "12px";
      var pk = el("div", "pick en"), res = el("div", "result", '<span style="color:var(--muted);font-weight:600;font-size:1rem">' + (s.tryLab || "اختر كلمة ↑") + "</span>");
      res.setAttribute("aria-live", "polite");
      s.try.forEach(function (t) {
        var b = btn("", esc(t[0]), function () {
          [].forEach.call(pk.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          tiles.forEach(function (d, k) { d.classList.toggle("lit", k === t[3]); });
          res.innerHTML = (s.pre ? '<span style="color:var(--muted)">' + esc(s.pre) + "</span> " : "") + esc(t[0]) + ' <span class="arrow">→</span> <span style="color:var(--verb)">' + esc(t[1]) + '<span class="b-e pop">' + esc(t[2]) + "</span></span>";
        });
        pk.appendChild(b);
      });
      c.appendChild(pk); c.appendChild(res); wrap.appendChild(c);
    }
    return wrap;
  };

  // سلّم بدرجات مع جمل تتغير
  B.scale = function (s) {
    var wrap = el("div"); wrap.style.display = "grid"; wrap.style.gap = "14px";
    var card = el("div", "card"), sc = el("div", "scale"), tr = el("div", "scale-track");
    sc.appendChild(tr); card.appendChild(sc);
    if (s.cap) card.insertAdjacentHTML("beforeend", '<div class="cap" style="text-align:center">' + rich(s.cap) + "</div>");
    var snote = el("div", "bnote"); snote.style.marginTop = "8px"; snote.setAttribute("aria-live", "polite");
    if (s.items.some(function (f) { return f[3]; })) card.appendChild(snote);
    wrap.appendChild(card);
    var lines = null;
    if (s.lines) {
      lines = el("div", s.lines.length > 1 ? "grid2" : "");
      s.lines.forEach(function (l) {
        var txt = typeof l === "string" ? l : l[1], h = typeof l === "string" ? "" : l[0];
        lines.appendChild(el("div", "card sc-lines", (h ? "<h2>" + rich(h) + "</h2>" : "") + '<div class="s">' + pills(txt).replace("[]", '<span class="slot" data-slot></span>') + "</div>"));
      });
      wrap.appendChild(lines);
    }
    var bs = s.items.map(function (f, i) {
      var b = btn("fq " + (i % 2 ? "dn" : "up"), "<span>" + esc(f[0]) + (f[2] ? "<small>" + esc(f[2]) + "</small>" : "") + "</span>", function () { set(i); });
      b.style.left = f[1] + "%"; tr.appendChild(b); return b;
    });
    function set(i) {
      bs.forEach(function (b, k) { b.setAttribute("aria-pressed", k === i ? "true" : "false"); });
      wrap.querySelectorAll("[data-slot]").forEach(function (x) { x.textContent = s.items[i][0]; });
      if (s.items[i][3]) snote.innerHTML = rich(s.items[i][3]);
    }
    set(s.start != null ? s.start : s.items.length - 1);
    return wrap;
  };

  // أمثلة مع الترجمة
  B.ex = function (s) {
    var card = el("div", "card exs");
    if (s.h) card.appendChild(el("h2", "", rich(s.h)));
    s.items.forEach(function (e) { card.appendChild(el("div", "exi", '<div class="s"' + dirA(e[0]) + '>' + tk(e[0]) + "</div>" + (e[1] ? '<div class="ar2">' + rich(e[1]) + "</div>" : ""))); });
    return card;
  };

  // خطأ ← صواب
  B.fix = function (s) {
    var card = el("div", "card fixes");
    if (s.h) card.appendChild(el("h2", "", rich(s.h)));
    s.items.forEach(function (f) {
      card.appendChild(el("div", "fixi", '<div class="w"><span class="x">' + esc(f[0]) + '</span><span class="arrow">→</span><span class="v">' + tk(f[1]) + "</span></div>" + (f[2] ? '<div class="cap">' + rich(f[2]) + "</div>" : "")));
    });
    return card;
  };

  // جدول
  B.table = function (s) {
    var card = el("div", "card");
    if (s.h) card.appendChild(el("h2", "", rich(s.h)));
    var h = '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + s.head.map(function (x) { return "<th>" + rich(x) + "</th>"; }).join("") + "</tr></thead><tbody>";
    s.rows.forEach(function (r) {
      h += "<tr>" + r.map(function (c, k) {
        var lab = ' data-l="' + esc(String(s.head[k] || "").replace(/[`*]/g, "")) + '"';
        return "<td" + lab + (s.hl === k ? ' class="hl"' : "") + (!AR.test(c) ? ' dir="ltr" style="text-align:left;font-weight:700"' : "") + ">" + (AR.test(c) ? rich(c) : tk(c)) + "</td>";
      }).join("") + "</tr>";
    });
    card.insertAdjacentHTML("beforeend", h + "</tbody></table></div>");
    return card;
  };

  // ملاحظة
  B.note = function (s) {
    var labs = { warn: "انتبه", tip: "نصيحة", "": "تذكّر" };
    return el("div", "note-box " + (s.kind || ""), '<span class="lab">' + (s.lab || labs[s.kind || ""]) + "</span><div>" + rich(s.txt) + "</div>" + (s.en ? '<div class="line en">' + tk(s.en) + "</div>" : ""));
  };

  // تحويل جملة إلى أخرى
  B.trans = function (s) {
    var items = s.items || [s];
    var g = el("div", gridFor(items.length));
    items.forEach(function (it) {
      var d = el("div", "card trans");
      if (it.h) d.appendChild(el("h2", "", rich(it.h)));
      d.insertAdjacentHTML("beforeend", '<div class="s"' + dirA(it.from) + '>' + tk(it.from) + '</div><div class="down"><i></i>' + (it.chg ? '<div class="chg">' + it.chg.map(function (c) { return "<span>" + rich(c) + "</span>"; }).join("") + "</div>" : "") + '</div><div class="s"' + dirA(it.to) + '>' + tk(it.to) + "</div>");
      g.appendChild(d);
    });
    return g;
  };

  // خطوات متتابعة
  B.chain = function (s) {
    var w = el("div", "chain");
    s.items.forEach(function (it, i) {
      if (i) w.appendChild(el("div", "sep", "←"));
      w.appendChild(el("div", "card ci", '<span class="n">' + (i + 1) + "</span>" + (it.h ? "<h2>" + rich(it.h) + "</h2>" : "") + (it.en ? '<div class="line"' + dirA(it.en) + '>' + tk(it.en) + "</div>" : "") + (it.ar ? '<div class="cap">' + rich(it.ar) + "</div>" : "")));
    });
    return w;
  };

  // سؤال قرار بفرعين
  B.decide = function (s) {
    var w = el("div", "decide");
    w.appendChild(el("div", "qbox", rich(s.q)));
    var br = el("div", "br");
    s.opts.forEach(function (o, i) {
      var d = el("div", "card bx"); d.style.setProperty("--cc", col(o.c || (i ? "bad" : "ok")));
      d.innerHTML = '<span class="yn">' + rich(o.lab || (i ? "لا" : "نعم")) + "</span>" + (o.h ? "<h2>" + rich(o.h) + "</h2>" : "") +
        (o.en || []).map(function (e) { return '<div class="line"' + dirA(e) + '>' + tk(e) + "</div>"; }).join("") + (o.txt ? '<div class="cap">' + rich(o.txt) + "</div>" : "");
      br.appendChild(d);
    });
    w.appendChild(br);
    return w;
  };

  // جملة كبيرة واحدة بقطع ملونة
  B.big = function (s) {
    var card = el("div", "card");
    if (s.h) card.appendChild(el("h2", "", rich(s.h)));
    (s.items || [s.en]).forEach(function (e) { var d = el("div", "sentence", pills(e)); if (AR.test(e)) d.dir = "rtl"; card.appendChild(d); });
    if (s.cap) card.insertAdjacentHTML("beforeend", '<div class="cap" style="text-align:center">' + rich(s.cap) + "</div>");
    return card;
  };

  // صف من لبنات متجاورة
  B.row = function (s) {
    var g = el("div", gridFor(s.items.length));
    s.items.forEach(function (b) { g.appendChild(block(b)); });
    return g;
  };

  function block(b) {
    var f = B[b.t];
    if (!f) return el("div", "note", "");
    return f(b);
  }

  // ================= صفحة الدرس =================
  function loadScript(src, cb) {
    var s = document.createElement("script");
    s.src = src; s.onload = function () { cb(true); }; s.onerror = function () { cb(false); };
    document.head.appendChild(s);
  }

  // درس احتياطي من بيانات القاعدة إن لم يُكتب ملف الدرس
  function autoLesson(u) {
    var steps = [{ k: "الفكرة", h: u.ar, why: [u.idea], show: u.uses && u.uses.length ? [{ t: "cards", items: u.uses.map(function (x) { return { h: x[0], en: x[1] }; }) }] : [] }];
    if (u.formula && u.formula.length) steps.push({ k: "البناء", h: "كيف نبني الجملة؟", show: [{ t: "formula", rows: u.formula }] });
    (u.notes || []).forEach(function (n) {
      steps.push({ k: n.title.length > 22 ? "قاعدة" : n.title, h: n.title, why: [n.body], show: n.en ? [{ t: "ex", items: n.en.split(" · ").map(function (e) { return [e]; }) }] : [] });
    });
    if (u.examples && u.examples.length) steps.push({ k: "أمثلة", h: "أمثلة من الحياة", show: [{ t: "ex", items: u.examples }] });
    return { steps: steps };
  }

  function renderUnit(root) {
    var m = /(\d+)/.exec(location.hash || ""), id = m ? parseInt(m[1], 10) : 1;
    if (id < 1 || id > 120) id = 1;
    var token = (renderUnit.seq = (renderUnit.seq || 0) + 1);
    window.UNITS = window.UNITS || {}; window.LESSONS = window.LESSONS || {};
    function withUnit(cb) { if (window.UNITS[id]) cb(); else loadScript("data/units/u" + pad(id) + ".js", cb); }
    function withLesson(cb) { if (window.LESSONS[id]) cb(); else loadScript("data/lessons/l" + pad(id) + ".js", cb); }
    withUnit(function () {
      withLesson(function () {
        if (token !== renderUnit.seq) return;
        var u = window.UNITS[id];
        if (!u) { root.innerHTML = '<p style="padding:30px">لم يُعثر على القاعدة. <a href="index.html">العودة للفهرس</a></p>'; return; }
        buildLesson(root, id, u, window.LESSONS[id] || autoLesson(u));
      });
    });
  }

  function buildLesson(root, id, u, L) {
    var gi = groupIndexOf(id), g = CATALOG[gi];
    document.body.className = "c-" + (g ? g.color : "red");
    document.title = pad(id) + " " + u.ar + " | قواعد الإنجليزية";
    root.innerHTML = "";

    var app = el("div", "app");
    var top = el("header", "top"), topIn = el("div", "top-in");
    topIn.appendChild(el("div", "top-row", '<div class="badge">' + pad(id) + '</div><div class="ttl"><b>' + esc(u.ar) + '</b><span class="en">' + esc(u.title) + '</span></div><a class="home" href="index.html">الفهرس ←</a>'));
    topIn.firstChild.appendChild(themeBtn());
    var stepsNav = el("nav", "steps"); stepsNav.setAttribute("aria-label", "خطوات الدرس");
    topIn.appendChild(stepsNav); top.appendChild(topIn);
    var stage = el("main", "stage");
    var bot = el("footer", "bot"), botIn = el("div", "bot-in");
    var prev = btn("btn ghost", "→ السابق"), count = el("span", "count"), next = btn("btn", "التالي ←");
    botIn.appendChild(prev); botIn.appendChild(count); botIn.appendChild(next); bot.appendChild(botIn);
    app.appendChild(top); app.appendChild(stage); app.appendChild(bot);
    root.appendChild(app);

    var screens = [], n = 0;
    function addScreen(title, kicker, h1, lead) {
      n++;
      var s = el("section", "screen"); s.dataset.title = title;
      var hd = el("div", "head", '<span class="kicker">الخطوة ' + n + " · " + esc(kicker || title) + "</span>" + (h1 ? "<h1>" + head1(h1) + "</h1>" : "") + (lead ? '<p class="lead">' + rich(lead) + "</p>" : ""));
      s.appendChild(hd); stage.appendChild(s); screens.push(s);
      return s;
    }

    // شاشات الشرح
    L.steps.forEach(function (st) {
      var s = addScreen(st.k, st.kicker || st.k, st.h, st.lead);
      if (st.why && st.why.length) s.appendChild(el("div", "explain", st.why.map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("")));
      (st.show || []).forEach(function (b) { s.appendChild(block(b)); });
      if (st.check) {
        var box = el("div", "check"); box.appendChild(el("div", "lab", "تحقق سريع"));
        mcq(box, st.check); s.appendChild(box);
      }
    });

    // الأخطاء الشائعة
    if (u.mistakes && u.mistakes.length) {
      var ms = addScreen("احذر", "أخطاء شائعة", "اضغط على كل بطاقة لترى التصحيح");
      var fg = el("div", "grid2");
      u.mistakes.forEach(function (mk) {
        var b = btn("flip", '<div class="flip-in"><div class="face f"><div class="s x">' + esc(mk[0]) + '</div><div class="hint">اضغط لترى الصحيح</div></div>' +
          '<div class="face b"><div class="s v">' + esc(mk[1]) + '</div><div class="why">' + rich(mk[2]) + "</div></div></div>", function () { b.classList.toggle("on"); });
        fg.appendChild(b);
      });
      ms.appendChild(fg);
    }

    // التمارين
    var qsScreen = addScreen("تدرّب", "تدرّب", "سؤال واحد في كل مرة", u.questions.length + " سؤالًا. احصل على 80٪ لتنتقل وأنت مطمئن.");
    var quizBox = el("div", "quiz"); qsScreen.appendChild(quizBox);
    var practiceIndex = screens.length - 1;

    // الخلاصة
    var ss = addScreen("الخلاصة", "الخلاصة", "الدرس في بطاقة واحدة");
    var sumCards = L.sum || (u.formula || []).slice(0, 4).map(function (f) { return { h: f[0], en: [f[1]] }; });
    var sg = el("div", "sum");
    sumCards.forEach(function (c) {
      sg.appendChild(el("div", "card", "<h2>" + rich(c.h) + "</h2>" + (c.txt ? "<div>" + rich(c.txt) + "</div>" : "") + (c.en || []).map(function (e) { return '<div class="line"' + dirA(e) + '>' + tk(e) + "</div>"; }).join("")));
    });
    ss.appendChild(sg);
    if (u.ielts) ss.appendChild(el("div", "card ielts", "<h2>في IELTS</h2><p>" + rich(u.ielts.text) + "</p>" + (u.ielts.en ? '<div class="line">' + tk(u.ielts.en) + "</div>" : "")));
    var acts = el("div", "actions");
    acts.appendChild(btn("btn ghost", "أعد التمارين", function () { go(practiceIndex); }));
    if (id < 120) { var a = el("a", "btn", "الدرس التالي: " + pad(id + 1) + " ←"); a.href = "unit.html#u" + (id + 1); acts.appendChild(a); }
    else { var a2 = el("a", "btn", "العودة للفهرس"); a2.href = "index.html"; acts.appendChild(a2); }
    ss.appendChild(acts);
    var un = el("div", "unit-nav");
    un.innerHTML = (id > 1 ? '<a href="unit.html#u' + (id - 1) + '">→ السابق: <b class="en">' + esc(unitName(id - 1)) + "</b></a>" : "<span></span>") +
      (g ? '<a href="review.html#s' + gi + '">اختبار قسم «' + esc(g.ar) + "» ←</a>" : "");
    ss.appendChild(un);

    // الاختبار
    runQuiz(quizBox, u.questions, { key: id, goodMsg: "ممتاز، أتقنت القاعدة. انتقل إلى الخلاصة.", badMsg: "راجع شاشات الشرح ثم أعد المحاولة. الهدف 80٪.", after: ["الخلاصة ←", function () { go(screens.length - 1); }] });

    // التنقل
    var cur = 0, seen = {};
    screens.forEach(function (s, i) {
      var b = btn("", "", function () { go(i); });
      b.title = s.dataset.title; b.setAttribute("aria-label", (i + 1) + ". " + s.dataset.title);
      stepsNav.appendChild(b);
    });
    function go(i) {
      if (i < 0 || i >= screens.length) return;
      var back = i < cur;
      screens[cur].classList.remove("on", "back");
      cur = i; seen[i] = true;
      screens[i].classList.add("on"); screens[i].classList.toggle("back", back);
      [].forEach.call(stepsNav.children, function (b, k) { b.className = k === i ? "cur" : seen[k] ? "done" : ""; });
      prev.disabled = i === 0;
      next.disabled = i === screens.length - 1;
      count.innerHTML = (i + 1) + " / " + screens.length + '<span class="ct-t"> · ' + esc(screens[i].dataset.title) + "</span>";
      stage.scrollTop = 0;
      fixAllTl(screens[i]);
      try { history.replaceState(null, "", "#u" + id + "-s" + (i + 1)); } catch (e) {}
    }
    prev.addEventListener("click", function () { go(cur - 1); });
    next.addEventListener("click", function () { go(cur + 1); });
    document.onkeydown = function (e) {
      if (e.target.tagName === "INPUT" || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "ArrowLeft") go(cur + 1);
      if (e.key === "ArrowRight") go(cur - 1);
    };
    var sx = null, sy = null;
    stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5 && !(e.target.closest && e.target.closest(".scale, .tbl-wrap"))) go(cur + (dx > 0 ? 1 : -1));
      sx = null;
    });
    var sm = /-s(\d+)/.exec(location.hash || "");
    go(sm ? Math.min(screens.length, Math.max(1, +sm[1])) - 1 : 0);
  }

  // ================= اختبار القسم =================
  var REVIEW_SIZE = 20;
  function renderReview(root) {
    var m = /s(\d+)/.exec(location.hash || ""), gi = m ? parseInt(m[1], 10) : 0, g = CATALOG[gi];
    if (!g) { root.innerHTML = '<p style="padding:30px">القسم غير موجود. <a href="index.html">العودة للفهرس</a></p>'; return; }
    document.body.className = "c-" + g.color;
    document.title = "اختبار " + g.ar + " | قواعد الإنجليزية";
    var ids = g.units.map(function (x) { return x[0]; }), pool = [], left = ids.length;
    window.UNITS = window.UNITS || {};
    ids.forEach(function (id) {
      var done = function () {
        var u = window.UNITS[id];
        if (u) u.questions.forEach(function (q) { var c = {}; for (var k in q) c[k] = q[k]; c.src = id; pool.push(c); });
        if (--left === 0) build();
      };
      if (window.UNITS[id]) done(); else loadScript("data/units/u" + pad(id) + ".js", done);
    });
    function build() {
      root.innerHTML = "";
      var first = ids[0], last = ids[ids.length - 1];
      var app = el("div", "app"); app.style.gridTemplateRows = "auto 1fr auto";
      app.appendChild(el("header", "top", '<div class="top-in"><div class="top-row"><div class="badge">' + pad(first) + "–" + pad(last) + '</div><div class="ttl"><b>اختبار: ' + esc(g.ar) + '</b><span class="en">' + esc(g.en) + '</span></div><a class="home" href="index.html">الفهرس ←</a></div></div>'));
      app.querySelector(".top-row").appendChild(themeBtn());
      var stage = el("main", "stage"), sc = el("section", "screen on");
      sc.appendChild(el("div", "head", '<span class="kicker">اختبار القسم</span><h1>' + Math.min(REVIEW_SIZE, pool.length) + " سؤالًا من كل قواعد القسم</h1>" + '<p class="lead">أسئلة مختلطة تتغير كل مرة. بجانب كل سؤال رقم قاعدته لتراجعها إن أخطأت.</p>'));
      var qb = el("div", "quiz"); sc.appendChild(qb); stage.appendChild(sc); app.appendChild(stage);
      var prevG = CATALOG[gi - 1], nextG = CATALOG[gi + 1];
      app.appendChild(el("footer", "bot", '<div class="bot-in">' + (prevG ? '<a class="btn ghost" href="review.html#s' + (gi - 1) + '">→ ' + esc(prevG.ar) + "</a>" : "<span></span>") +
        '<span class="count">القسم ' + (gi + 1) + " من " + CATALOG.length + "</span>" + (nextG ? '<a class="btn ghost" href="review.html#s' + (gi + 1) + '">' + esc(nextG.ar) + " ←</a>" : "<span></span>") + "</div>"));
      root.appendChild(app);
      function pickQs() { return shuffle(pool).slice(0, REVIEW_SIZE); }
      runQuiz(qb, pickQs(), { key: "s" + gi, showWrongUnits: true, restart: pickQs, againLabel: "اختبار جديد بأسئلة أخرى", goodMsg: "ممتاز، أتقنت هذا القسم.", badMsg: "راجع القواعد التي أخطأت فيها ثم أعد الاختبار." });
    }
  }

  // ================= الفهرس =================
  function renderHome(root) {
    var prog = loadProgress(), total = 0, done = 0, started = 0, nextId = null;
    CATALOG.forEach(function (g) { g.units.forEach(function (u) {
      total++; var p = prog[u[0]];
      if (p) started++;
      if (p && p.best >= 80) done++; else if (nextId === null) nextId = u[0];
    }); });
    var pct = Math.round(done / total * 100);
    document.getElementById("hero-ring").innerHTML = ring(pct);
    document.getElementById("stat-done").textContent = done;
    document.getElementById("stat-started").textContent = started;
    document.getElementById("stat-total").textContent = total;
    var go = document.getElementById("continue-btn"), target = nextId || 1;
    go.href = "unit.html#u" + target;
    go.textContent = (started ? "تابع من القاعدة " : "ابدأ بالقاعدة ") + pad(target) + " ←";
    var AR_NAMES = window.UNIT_AR || {};
    CATALOG.forEach(function (g, gi) {
      var mastered = 0;
      var lis = g.units.map(function (u) {
        var id = u[0], p = prog[id];
        if (p && p.best >= 80) mastered++;
        var st = !p ? '<span class="state todo" title="لم تبدأ"></span>' : '<span class="state ' + (p.best >= 80 ? "done" : "mid") + '">' + p.best + "%</span>";
        var star = IELTS_PRIORITY.indexOf(id) !== -1 ? '<span class="star" title="أولوية في IELTS">★</span>' : "";
        var ar = AR_NAMES[id];
        return '<li><a href="unit.html#u' + id + '"><span class="num">' + pad(id) + '</span><span class="nm">' + (ar ? "<b>" + esc(ar) + star + "</b><span>" + esc(u[1]) + "</span>" : '<b class="en" style="text-align:right">' + esc(u[1]) + star + "</b>") + "</span>" + st + "</a></li>";
      }).join("");
      var sp = prog["s" + gi];
      var sec = el("section", "sec-card c-" + g.color);
      sec.innerHTML = '<header class="sec-head">' + ring(Math.round(mastered / g.units.length * 100), mastered + "/" + g.units.length) +
        '<div><h2>' + esc(g.ar) + '</h2><div class="sec-meta"><span class="en">' + esc(g.en) + "</span><span>" + pad(g.units[0][0]) + "–" + pad(g.units[g.units.length - 1][0]) + "</span></div></div></header>" +
        '<ol class="rules">' + lis + "</ol>" +
        '<a class="review-link" href="review.html#s' + gi + '">اختبار القسم' + (sp ? " · " + sp.best + "%" : "") + " ←</a>";
      root.appendChild(sec);
    });
  }

  window.GrammarSite = { normalize: normalize, isCorrect: isCorrect, blocks: B };
  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("home-root"); if (h) renderHome(h);
    var slot = document.getElementById("theme-slot"); if (slot) slot.appendChild(themeBtn());
    var r = document.getElementById("review-root");
    if (r) { renderReview(r); window.addEventListener("hashchange", function () { renderReview(r); }); }
    var u = document.getElementById("unit-root");
    if (u) {
      renderUnit(u);
      var lastId = (/(\d+)/.exec(location.hash || "") || [])[1];
      window.addEventListener("hashchange", function () {
        var id = (/(\d+)/.exec(location.hash || "") || [])[1];
        if (id !== lastId) { lastId = id; renderUnit(u); }
      });
    }
  });
})();
