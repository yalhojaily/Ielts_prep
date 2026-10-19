/* محرك الموقع: الفهرس، صفحة القاعدة، التمارين والتصحيح، وحفظ التقدم في المتصفح. */
(function () {
  "use strict";

  // ---------- حفظ التقدم ----------
  var KEY = "grammar-progress-v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* التخزين غير متاح */ }
  }

  // ---------- أدوات ----------
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  // {s:He} {a:is} {v:working} {n:not} {q:Do} {x:...}  ->  spans ملونة
  function tokens(str) {
    return esc(str).replace(/\{([savnqx]):([^}]*)\}/g, function (_, t, w) {
      return '<span class="tk tk-' + t + '">' + w + "</span>";
    }).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }
  // نص عربي مع مقاطع إنجليزية داخل `...`
  function rich(str) {
    str = String(str).replace(/`\s*\+\s*`/g, " + "); // `is` + `writing` -> مقطع إنجليزي واحد
    return esc(str).replace(/`([^`]+)`/g, '<span class="en">$1</span>').replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }

  function groupOf(id) {
    for (var i = 0; i < CATALOG.length; i++) {
      for (var j = 0; j < CATALOG[i].units.length; j++) if (CATALOG[i].units[j][0] === id) return CATALOG[i];
    }
    return null;
  }

  // ---------- تطبيع الإجابات ----------
  function normalize(s) {
    s = String(s).toLowerCase().replace(/[‘’ʼ`]/g, "'").replace(/[“”]/g, '"');
    // اختصارات كُتبت بدون الفاصلة العلوية: doesnt, dont, isnt, lets, im ...
    s = s.replace(/\b(do|does|did|is|are|was|were|has|have|had|could|would|should)nt\b/g, "$1 not")
         .replace(/\bcant\b/g, "cannot").replace(/\blets\b/g, "let us").replace(/\bim\b/g, "i am");
    s = s.replace(/won't/g, "will not").replace(/can't/g, "cannot").replace(/shan't/g, "shall not")
         .replace(/n't/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are")
         .replace(/\b(he|she|it|that|what|who|there|where|here)'s\b/g, "$1 is")
         .replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/\blet's\b/g, "let us");
    s = s.replace(/[.,!?;:"]/g, " ").replace(/\s+/g, " ").trim();
    return s;
  }
  function isCorrect(given, answers) {
    var g = normalize(given);
    if (!g) return false;
    return answers.some(function (a) { return normalize(a) === g; });
  }

  // =====================================================
  // الصفحة الرئيسية
  // =====================================================
  function renderHome(root) {
    var prog = loadProgress();
    var total = 0, available = AVAILABLE.length, done = 0;
    CATALOG.forEach(function (g) { total += g.units.length; });
    AVAILABLE.forEach(function (id) { if (prog[id] && prog[id].best >= 80) done++; });

    document.getElementById("stat-total").textContent = total;
    document.getElementById("stat-ready").textContent = available;
    document.getElementById("stat-done").textContent = done;

    CATALOG.forEach(function (g) {
      var list = el("ol", { class: "rules" });
      var ready = 0;
      g.units.forEach(function (u) {
        var id = u[0], isAvail = AVAILABLE.indexOf(id) !== -1, p = prog[id];
        if (isAvail) ready++;
        var name;
        if (isAvail) name = el("a", { class: "name", href: "unit.html#u" + id, lang: "en" }, [u[1]]);
        else name = el("span", { class: "name", lang: "en" }, [u[1]]);
        if (IELTS_PRIORITY.indexOf(id) !== -1) name.appendChild(el("span", { class: "star", title: "أولوية في IELTS", text: "★" }));
        var state;
        if (!isAvail) state = el("span", { class: "state soon", text: "قريبًا" });
        else if (!p) state = el("span", { class: "state todo", text: "ابدأ" });
        else state = el("span", { class: "state " + (p.best >= 80 ? "done" : "mid"), text: p.best + "%" });
        list.appendChild(el("li", { class: "rule" + (isAvail ? "" : " locked") }, [el("span", { class: "num", text: pad(id) }), name, state]));
      });
      var gi = CATALOG.indexOf(g), sp = prog["s" + gi];
      var head = el("div", { class: "group-head" }, [
        el("h2", { text: g.ar }), el("span", { class: "en", text: g.en }),
        el("span", { class: "count", text: ready + " / " + g.units.length }),
        ready ? el("a", { class: "review-link", href: "review.html#s" + gi,
          text: "اختبار القسم" + (sp ? " · " + sp.best + "%" : "") }) : null
      ]);
      root.appendChild(el("section", { class: "group c-" + g.color }, [head, list]));
    });
  }

  // =====================================================
  // صفحة القاعدة
  // =====================================================
  function unitIdFromHash() {
    var m = /(\d+)/.exec(location.hash || "");
    return m ? parseInt(m[1], 10) : AVAILABLE[0];
  }

  function loadUnit(id, cb) {
    window.UNITS = window.UNITS || {};
    if (window.UNITS[id]) return cb(window.UNITS[id]);
    var s = document.createElement("script");
    s.src = "data/units/u" + pad(id) + ".js";
    s.onload = function () { cb(window.UNITS[id]); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  function renderUnitPage(root) {
    var id = unitIdFromHash();
    loadUnit(id, function (u) {
      root.innerHTML = "";
      if (!u) {
        root.appendChild(el("p", { html: "هذه القاعدة لم تُكتب بعد. <a href=\"index.html\">العودة للفهرس</a>" }));
        return;
      }
      var g = groupOf(id);
      document.body.className = "c-" + (g ? g.color : "red");
      document.title = pad(id) + " " + u.title + " | قواعد الإنجليزية";
      buildUnit(root, u, g);
      window.scrollTo(0, 0);
    });
  }

  function buildUnit(root, u, g) {
    var idx = AVAILABLE.indexOf(u.id);
    var prev = AVAILABLE[idx - 1], next = AVAILABLE[idx + 1];

    // شريط علوي
    var pager = el("div", { class: "pager" }, [
      el("a", { href: prev ? "unit.html#u" + prev : "#", "aria-disabled": prev ? "false" : "true", text: "→ السابقة" }),
      el("a", { href: next ? "unit.html#u" + next : "#", "aria-disabled": next ? "false" : "true", text: "التالية ←" })
    ]);
    root.appendChild(el("nav", { class: "topbar" }, [el("a", { href: "index.html", text: "→ الفهرس" }), pager]));

    // العنوان
    root.appendChild(el("header", { class: "lesson-head" }, [
      el("div", { class: "tab" }, [el("span", { class: "n", text: pad(u.id) }), el("span", { class: "g", text: g ? g.ar : "" })]),
      el("h1", { text: u.ar }),
      el("div", { class: "en-title", lang: "en", text: u.title })
    ]));

    // الفكرة
    var ideaSec = el("section", { class: "block" }, [el("h2", { text: "الفكرة" }), el("p", { class: "idea", html: rich(u.idea) })]);
    if (u.uses && u.uses.length) {
      var ul = el("ul", { class: "uses" });
      u.uses.forEach(function (x) {
        ul.appendChild(el("li", {}, [el("div", { html: rich(x[0]) + (x[1] ? '<br><span class="en">' + esc(x[1]) + "</span>" : "") })]));
      });
      ideaSec.appendChild(ul);
    }
    root.appendChild(ideaSec);

    // الصيغة
    if (u.formula && u.formula.length) {
      var tb = el("tbody");
      u.formula.forEach(function (r) {
        tb.appendChild(el("tr", {}, [el("th", { text: r[0] }), el("td", { html: tokens(r[1]) })]));
      });
      var key = el("div", { class: "key" }, [
        el("span", { class: "tk-s", text: "الفاعل" }), el("span", { class: "tk-a", text: "الفعل المساعد" }),
        el("span", { class: "tk-v", text: "الفعل الأساسي" }), el("span", { class: "tk-n", text: "النفي" })
      ]);
      root.appendChild(el("section", { class: "block" }, [
        el("h2", { text: "الصيغة" }),
        el("div", { class: "formula-wrap" }, [el("table", { class: "formula" }, [tb])]), key
      ]));
    }

    // ملاحظات
    if (u.notes && u.notes.length) {
      var notes = el("div", { class: "notes" });
      u.notes.forEach(function (n) {
        var box = el("div", { class: "note" }, [el("h3", { text: n.title }), el("p", { html: rich(n.body) })]);
        if (n.en) box.appendChild(el("div", { class: "en-block", lang: "en", html: tokens(n.en) }));
        notes.appendChild(box);
      });
      root.appendChild(el("section", { class: "block" }, [el("h2", { text: "قواعد تفصيلية" }), notes]));
    }

    // أمثلة
    if (u.examples && u.examples.length) {
      var exs = el("div", { class: "examples" });
      u.examples.forEach(function (e) {
        exs.appendChild(el("div", { class: "ex" }, [
          el("div", { class: "en-block", lang: "en", html: tokens(e[0]) }), el("div", { class: "ar", text: e[1] })
        ]));
      });
      root.appendChild(el("section", { class: "block" }, [el("h2", { text: "أمثلة" }), exs]));
    }

    // أخطاء شائعة
    if (u.mistakes && u.mistakes.length) {
      var ms = el("div", { class: "mistakes" });
      u.mistakes.forEach(function (m) {
        ms.appendChild(el("div", { class: "mistake" }, [
          el("div", { class: "pair", lang: "en" }, [el("span", { class: "wrong", text: m[0] }), el("span", { class: "right", text: m[1] })]),
          el("div", { class: "why", html: rich(m[2]) })
        ]));
      });
      root.appendChild(el("section", { class: "block" }, [el("h2", { text: "أخطاء شائعة عند المتعلم العربي" }), ms]));
    }

    // IELTS
    if (u.ielts) {
      var box = el("section", { class: "block ielts" }, [el("h2", { text: "في اختبار IELTS" }), el("p", { html: rich(u.ielts.text) })]);
      if (u.ielts.en) box.appendChild(el("div", { class: "en-block", lang: "en", html: tokens(u.ielts.en) }));
      root.appendChild(box);
    }

    // التمارين
    buildQuiz(root, u);

    if (g) {
      var gi = CATALOG.indexOf(g), gu = g.units[g.units.length - 1][0];
      if (u.id === gu || !next) root.appendChild(el("div", { class: "result" }, [
        el("span", { text: "انتهيت من قواعد قسم «" + g.ar + "». اختبر نفسك بأسئلة مختلطة من القسم كله." }),
        el("a", { class: "btn", href: "review.html#s" + gi, text: "ابدأ اختبار القسم" })
      ]));
    }
    root.appendChild(el("footer", { class: "foot", html: "الشروح والأمثلة والتمارين مكتوبة لهذا الموقع، وترتيب القواعد يتبع فهرس الكتاب." + (g ? " · <a href=\"review.html#s" + CATALOG.indexOf(g) + "\">اختبار هذا القسم</a>" : "") }));
  }

  // =====================================================
  // التمارين
  // =====================================================
  var TYPE_LABEL = { mcq: "اختر الإجابة", fill: "أكمل الفراغ", fix: "صحّح الخطأ", rewrite: "أعد الصياغة" };
  var TYPE_ASK = {
    mcq: "اختر الكلمة المناسبة للفراغ.",
    fill: "اكتب الكلمة أو الكلمات المناسبة للفراغ.",
    fix: "في الجملة خطأ واحد. اكتب الجملة صحيحة كاملة.",
    rewrite: "أعد كتابة الجملة كما هو مطلوب."
  };

  function buildQuiz(root, u) {
    var qs = u.questions || [];
    var state = qs.map(function () { return null; }); // true / false / null
    var sec = el("section", { class: "block", id: "practice" });
    var okBar = el("i", { class: "m-ok" }), badBar = el("i", { class: "m-bad" });
    var scoreText = el("span");
    sec.appendChild(el("div", { class: "quiz-head" }, [
      el("h2", { text: "تمارين" }),
      el("div", { class: "scorebar" }, [scoreText, el("div", { class: "meter", "aria-hidden": "true" }, [okBar, badBar])])
    ]));
    var list = el("ol", { class: "qs" });
    sec.appendChild(list);
    var result = el("div", { class: "result" }); result.hidden = true;
    var retryWrong = el("button", { class: "btn", type: "button", text: "أعد الأسئلة الخاطئة فقط" });
    var retryAll = el("button", { class: "btn ghost", type: "button", text: "ابدأ التمارين من جديد" });
    sec.appendChild(result);
    sec.appendChild(el("div", { class: "quiz-foot" }, [retryWrong, retryAll]));
    root.appendChild(sec);

    var cards = [];

    function update() {
      var answered = 0, right = 0;
      state.forEach(function (s) { if (s !== null) { answered++; if (s) right++; } });
      scoreText.textContent = right + " صحيحة من " + answered + " (الإجمالي " + qs.length + ")";
      okBar.style.width = (right / qs.length * 100) + "%";
      badBar.style.width = ((answered - right) / qs.length * 100) + "%";
      retryWrong.disabled = !state.some(function (s) { return s === false; });
      if (answered === qs.length) {
        var pct = Math.round(right / qs.length * 100);
        var prog = loadProgress();
        var prev = prog[u.id] || { best: 0, attempts: 0 };
        prog[u.id] = { best: Math.max(prev.best, pct), last: pct, attempts: (prev.attempts || 0) + 1, date: new Date().toISOString().slice(0, 10) };
        saveProgress(prog);
        var msg = pct >= 90 ? "ممتاز. انتقل إلى القاعدة التالية." :
                  pct >= 80 ? "جيد جدًا. راجع الأسئلة الخاطئة ثم انتقل." :
                  pct >= 60 ? "مقبول. اقرأ قسم «قواعد تفصيلية» مرة أخرى ثم أعد الأسئلة الخاطئة." :
                              "تحتاج مراجعة. اقرأ الشرح من البداية ثم أعد التمارين كلها.";
        result.innerHTML = "<b>" + pct + "%</b><span>" + right + " من " + qs.length + " إجابات صحيحة. " + msg + "</span>" +
          (prev.best ? '<span class="hint">أفضل نتيجة سابقة: ' + prev.best + "%</span>" : "");
        result.hidden = false;
      } else result.hidden = true;
    }

    qs.forEach(function (q, i) {
      var card = makeQuestion(q, function (ok) { state[i] = ok; update(); });
      cards.push(card);
      list.appendChild(card.node);
    });

    retryWrong.addEventListener("click", function () {
      var first = null;
      state.forEach(function (s, i) { if (s === false) { cards[i].reset(); state[i] = null; if (!first) first = cards[i].node; } });
      update();
      if (first) first.scrollIntoView({ block: "center" });
    });
    retryAll.addEventListener("click", function () {
      cards.forEach(function (c, i) { c.reset(); state[i] = null; });
      update();
      list.scrollIntoView({ block: "start" });
    });
    update();
  }

  function questionText(q) {
    return esc(q.q).replace(/___/g, '<span class="blank">&nbsp;</span>');
  }

  function makeQuestion(q, onDone) {
    var node = el("li", { class: "q" });
    var top = el("div", { class: "q-top" }, [el("span", { class: "q-type", text: TYPE_LABEL[q.t] }), el("span", { class: "q-ask", html: rich(q.ask || TYPE_ASK[q.t]) })]);
    if (q.src) top.appendChild(el("a", { class: "q-src", href: "unit.html#u" + q.src, text: "القاعدة " + pad(q.src) }));
    node.appendChild(top);
    node.appendChild(el("div", { class: "q-text", lang: "en", html: questionText(q) }));
    var body = el("div");
    node.appendChild(body);
    var fb = el("div", { class: "feedback" }); fb.hidden = true;
    node.appendChild(fb);

    function showFeedback(ok, extra) {
      node.classList.toggle("is-ok", ok);
      node.classList.toggle("is-bad", !ok);
      fb.className = "feedback " + (ok ? "ok" : "bad");
      var html = '<span class="verdict">' + (ok ? "✓ إجابة صحيحة" : "✗ إجابة غير صحيحة") + "</span>";
      if (extra) html += extra;
      html += "<span>" + rich(q.why) + "</span>";
      fb.innerHTML = html;
      fb.hidden = false;
      onDone(ok);
    }

    var reset;
    if (q.t === "mcq") {
      var opts = el("div", { class: "opts", role: "group" });
      var buttons = q.o.map(function (o, k) {
        var b = el("button", { class: "opt", type: "button", lang: "en", text: o });
        b.addEventListener("click", function () {
          buttons.forEach(function (x) { x.disabled = true; });
          var ok = k === q.a;
          b.classList.add(ok ? "picked-ok" : "picked-bad");
          if (!ok) buttons[q.a].classList.add("reveal");
          showFeedback(ok);
        });
        opts.appendChild(b);
        return b;
      });
      body.appendChild(opts);
      reset = function () {
        buttons.forEach(function (x) { x.disabled = false; x.className = "opt"; });
      };
    } else {
      var input = el("input", { type: "text", lang: "en", dir: "ltr", autocomplete: "off", autocapitalize: "off", spellcheck: "false",
        placeholder: q.t === "fill" ? "Type the missing word(s)" : "Type the full sentence", "aria-label": "الإجابة" });
      var check = el("button", { class: "btn", type: "button", text: "تحقق" });
      var row = el("div", { class: "answer-row" }, [input, check]);
      body.appendChild(row);
      if (q.hint) body.appendChild(el("div", { class: "hint", html: "تلميح: " + rich(q.hint) }));
      var submit = function () {
        if (!input.value.trim()) { input.focus(); return; }
        var ok = isCorrect(input.value, q.a);
        input.disabled = true; check.disabled = true;
        showFeedback(ok, ok ? "" : '<span class="model" lang="en">' + esc(q.a[0]) + "</span>");
      };
      check.addEventListener("click", submit);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
      reset = function () { input.disabled = false; check.disabled = false; input.value = ""; };
    }

    return {
      node: node,
      reset: function () { reset(); fb.hidden = true; node.classList.remove("is-ok", "is-bad"); }
    };
  }

  // =====================================================
  // اختبار القسم: أسئلة مختلطة من كل قواعد القسم
  // =====================================================
  var REVIEW_SIZE = 20;
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function renderReviewPage(root) {
    var m = /s(\d+)/.exec(location.hash || ""), gi = m ? parseInt(m[1], 10) : 0;
    var g = CATALOG[gi];
    root.innerHTML = "";
    if (!g) { root.appendChild(el("p", { html: "القسم غير موجود. <a href=\"index.html\">العودة للفهرس</a>" })); return; }
    document.body.className = "c-" + g.color;
    document.title = "اختبار " + g.ar + " | قواعد الإنجليزية";
    var ids = g.units.map(function (u) { return u[0]; }).filter(function (id) { return AVAILABLE.indexOf(id) !== -1; });
    var pool = [], left = ids.length;
    if (!left) { root.appendChild(el("p", { text: "لا توجد قواعد جاهزة في هذا القسم بعد." })); return; }
    ids.forEach(function (id) {
      loadUnit(id, function (u) {
        if (u) u.questions.forEach(function (q) { var c = {}; for (var k in q) c[k] = q[k]; c.src = id; pool.push(c); });
        if (--left === 0) build();
      });
    });
    function build() {
      var prev = CATALOG[gi - 1], next = CATALOG[gi + 1];
      root.appendChild(el("nav", { class: "topbar" }, [
        el("a", { href: "index.html", text: "→ الفهرس" }),
        el("div", { class: "pager" }, [
          el("a", { href: prev ? "review.html#s" + (gi - 1) : "#", "aria-disabled": prev ? "false" : "true", text: "→ القسم السابق" }),
          el("a", { href: next ? "review.html#s" + (gi + 1) : "#", "aria-disabled": next ? "false" : "true", text: "القسم التالي ←" })
        ])
      ]));
      var first = ids[0], last = ids[ids.length - 1];
      root.appendChild(el("header", { class: "lesson-head" }, [
        el("div", { class: "tab" }, [el("span", { class: "n", text: pad(first) + "–" + pad(last) }), el("span", { class: "g", text: "اختبار القسم" })]),
        el("h1", { text: "اختبار: " + g.ar }),
        el("p", { class: "lead-note", text: Math.min(REVIEW_SIZE, pool.length) + " سؤالًا مختارًا عشوائيًا من كل قواعد القسم. بجانب كل سؤال رقم قاعدته لتراجعها إن أخطأت. كل مرة تفتح الصفحة تحصل على أسئلة مختلفة." })
      ]));
      var qs = shuffle(pool).slice(0, REVIEW_SIZE);
      buildQuiz(root, { id: "s" + gi, questions: qs });
      var again = el("button", { class: "btn", type: "button", text: "اختبار جديد بأسئلة أخرى" });
      again.addEventListener("click", function () { renderReviewPage(root); window.scrollTo(0, 0); });
      root.appendChild(el("div", { class: "quiz-foot" }, [again]));
      window.scrollTo(0, 0);
    }
  }

  // ---------- تشغيل ----------
  window.GrammarSite = { renderHome: renderHome, renderUnitPage: renderUnitPage, _normalize: normalize, _isCorrect: isCorrect };
  document.addEventListener("DOMContentLoaded", function () {
    var home = document.getElementById("home-root");
    if (home) renderHome(home);
    var review = document.getElementById("review-root");
    if (review) {
      renderReviewPage(review);
      window.addEventListener("hashchange", function () { renderReviewPage(review); });
    }
    var unit = document.getElementById("unit-root");
    if (unit) {
      renderUnitPage(unit);
      window.addEventListener("hashchange", function () { renderUnitPage(unit); });
    }
  });
})();
