/* محرك الرسوم التوضيحية: يحوّل وصفًا بسيطًا (JSON) إلى رسم داخل صفحة القاعدة.
   الأنواع: timeline, transform, groups, nested, flow, scale, chain, matrix
   كل الرسوم تتكيف مع عرض الشاشة وتأخذ ألوانها من متغيرات CSS (الوضع الفاتح والداكن). */
(function () {
  "use strict";

  var AR = /[؀-ۿ]/;
  var uid = 0;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // {s:..} {a:..} {v:..} {n:..} {q:..} {x:..}
  function tok(str) {
    return esc(str).replace(/\{([savnqx]):([^}]*)\}/g, function (_, t, w) {
      return '<span class="tk tk-' + t + '">' + w + "</span>";
    }).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }
  // نص عربي، والإنجليزي داخل `...`
  function rich(str) {
    return String(str).split("`").map(function (part, i) {
      if (i % 2) return '<span class="en">' + tok(part) + "</span>";
      return esc(part).replace(/\{([savnqx]):([^}]*)\}/g, '<span class="en tk tk-$1">$2</span>').replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    }).join("");
  }
  // يختار تلقائيًا: عربي = rich، إنجليزي = tok
  function auto(str) {
    str = String(str);
    return AR.test(str) ? rich(str) : '<span class="en" dir="ltr">' + tok(str) + "</span>";
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function svgNS(tag, attrs) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function arrowDefs(svg, id) {
    var defs = svgNS("defs", {});
    var m = svgNS("marker", { id: id, viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
    m.appendChild(svgNS("path", { d: "M1 1 L9 5 L1 9 z", "class": "ah" }));
    defs.appendChild(m);
    svg.appendChild(defs);
  }

  // ---------- السجل: إعادة الرسم عند تغيّر العرض ----------
  var registry = [];
  function redrawAll(force) {
    registry = registry.filter(function (e) { return document.body.contains(e.fig); });
    registry.forEach(function (e) {
      var w = e.body.clientWidth;
      if (force || w !== e.w) { e.w = w; R[e.spec.type].draw(e); }
    });
  }
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { redrawAll(false); }, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { redrawAll(true); });

  function render(container, spec) {
    var fig = el("figure", "viz viz-" + spec.type);
    if (spec.title) fig.appendChild(el("figcaption", "viz-title", rich(spec.title)));
    var body = el("div", "viz-body");
    fig.appendChild(body);
    if (spec.caption) fig.appendChild(el("p", "viz-cap", rich(spec.caption)));
    container.appendChild(fig);
    var r = R[spec.type];
    if (!r) return fig;
    var e = { fig: fig, body: body, spec: spec, w: body.clientWidth };
    r.build(e);
    if (r.draw) { registry.push(e); r.draw(e); }
    return fig;
  }

  // =====================================================
  var R = {};

  // ---------- 1) الخط الزمني ----------
  // marks: {k:'point'|'span'|'repeat'|'arrow', at|from,to, label, tone:'alt'|'muted', n}
  R.timeline = {
    build: function (e) { e.body.classList.add("tl"); },
    draw: function (e) {
      var s = e.spec, marks = s.marks || [];
      var W = Math.max(300, e.body.clientWidth || 600);
      var pad = 16, rowH = 50, top = 6;
      var axisY = top + marks.length * rowH + 16;
      var H = axisY + 44;
      var X = function (v) { return pad + (v + 1) / 2 * (W - 2 * pad); };
      var id = "tl" + (++uid);
      var svg = svgNS("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, role: "img", "class": "tl-svg" });
      arrowDefs(svg, id);
      e.body.innerHTML = "";
      e.body.appendChild(svg);

      function text(x, y, str, cls) {
        var isAr = AR.test(str);
        var cw = isAr ? 6.4 : 6.9, w = str.length * cw;
        var anchor = "middle";
        if (x - w / 2 < 2) { x = 2; anchor = "start"; }
        else if (x + w / 2 > W - 2) { x = W - 2; anchor = "end"; }
        var t = svgNS("text", { x: x, y: y, "text-anchor": anchor, "class": "tl-label " + (isAr ? "ar " : "en ") + (cls || ""), direction: "ltr" });
        t.textContent = str;
        svg.appendChild(t);
      }
      function guide(x, y) { svg.appendChild(svgNS("line", { x1: x, y1: y, x2: x, y2: axisY, "class": "tl-guide" })); }

      // خط "الآن"
      if (s.now !== false) {
        svg.appendChild(svgNS("line", { x1: X(0), y1: top, x2: X(0), y2: axisY + 6, "class": "tl-now" }));
      }
      // المحور
      svg.appendChild(svgNS("line", { x1: pad, y1: axisY, x2: W - pad, y2: axisY, "class": "tl-axis", "marker-end": "url(#" + id + ")" }));
      var lab = s.axis || ["الماضي", "الآن", "المستقبل"];
      text(pad, axisY + 22, lab[0], "axis");
      if (s.now !== false) {
        svg.appendChild(svgNS("circle", { cx: X(0), cy: axisY, r: 5, "class": "tl-nowdot" }));
        text(X(0), axisY + 22, lab[1], "axis now");
      }
      text(W - pad, axisY + 22, lab[2], "axis");

      marks.forEach(function (m, i) {
        var y = top + i * rowH, my = y + 34, ly = y + 16;
        var tone = "tl-" + (m.tone || "main");
        if (m.k === "point") {
          var px = X(m.at);
          guide(px, my);
          svg.appendChild(svgNS("circle", { cx: px, cy: my, r: 7, "class": "tl-dot " + tone }));
          if (m.label) text(px, ly, m.label, tone);
        } else if (m.k === "span") {
          var a = X(m.from), b = X(m.to);
          guide(a, my); guide(b, my);
          svg.appendChild(svgNS("rect", { x: a, y: my - 6, width: Math.max(8, b - a), height: 12, rx: 6, "class": "tl-span " + tone }));
          if (m.label) text((a + b) / 2, ly, m.label, tone);
        } else if (m.k === "repeat") {
          var f = X(m.from), t = X(m.to), n = m.n || Math.max(3, Math.round((m.to - m.from) * 4));
          svg.appendChild(svgNS("line", { x1: f, y1: my, x2: t, y2: my, "class": "tl-thread " + tone }));
          for (var k = 0; k < n; k++) {
            var cx = n === 1 ? (f + t) / 2 : f + (t - f) * k / (n - 1);
            svg.appendChild(svgNS("circle", { cx: cx, cy: my, r: 5, "class": "tl-dot " + tone }));
          }
          if (m.label) text((f + t) / 2, ly, m.label, tone);
        } else if (m.k === "arrow") {
          var x1 = X(m.from), x2 = X(m.to);
          var p = svgNS("path", { d: "M" + x1 + " " + (my + 4) + " Q " + (x1 + x2) / 2 + " " + (my - 20) + " " + x2 + " " + (my + 4), "class": "tl-arc " + tone, "marker-end": "url(#" + id + ")" });
          svg.appendChild(p);
          svg.appendChild(svgNS("circle", { cx: x1, cy: my + 4, r: 3.5, "class": "tl-dot " + tone }));
          if (m.label) text((x1 + x2) / 2, ly - 2, m.label, tone);
        }
      });
    }
  };

  // ---------- 2) حركة الكلمات بين جملتين أو أكثر ----------
  // rows: [{label, words:['s:She','+a:does','-n:not','text'], arrow:'label'}], links: [[row, fromWord, toWord, label]]
  function parseWord(w) {
    var m = /^([+-])?(?:([savnqx]):)?([\s\S]*)$/.exec(w);
    return { mod: m[1] || "", tone: m[2] || "", text: m[3] };
  }
  R.transform = {
    build: function (e) {
      var s = e.spec, b = e.body;
      b.classList.add("tf");
      e.words = [];
      s.rows.forEach(function (row, ri) {
        var r = el("div", "tf-row");
        if (row.label) r.appendChild(el("div", "tf-label", rich(row.label)));
        var ws = el("div", "tf-words");
        ws.setAttribute("dir", "ltr");
        ws.setAttribute("lang", "en");
        e.words[ri] = [];
        row.words.forEach(function (w) {
          var p = parseWord(w);
          var sp = el("span", "w" + (p.tone ? " tk tk-" + p.tone : "") + (p.mod === "+" ? " w-add" : "") + (p.mod === "-" ? " w-del" : ""));
          sp.textContent = p.text;
          ws.appendChild(sp);
          e.words[ri].push(sp);
        });
        r.appendChild(ws);
        b.appendChild(r);
        if (ri < s.rows.length - 1) {
          var gap = el("div", "tf-gap");
          if (row.arrow) gap.appendChild(el("span", "tf-gap-label", rich(row.arrow)));
          b.appendChild(gap);
        }
      });
      e.svg = svgNS("svg", { "class": "tf-svg", "aria-hidden": "true" });
      b.appendChild(e.svg);
    },
    draw: function (e) {
      var s = e.spec, svg = e.svg, box = e.body.getBoundingClientRect();
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      svg.setAttribute("width", box.width);
      svg.setAttribute("height", box.height);
      svg.setAttribute("viewBox", "0 0 " + box.width + " " + box.height);
      var id = "tf" + (++uid);
      arrowDefs(svg, id);
      (s.links || []).forEach(function (L) {
        var a = e.words[L[0]] && e.words[L[0]][L[1]], z = e.words[L[0] + 1] && e.words[L[0] + 1][L[2]];
        if (!a || !z) return;
        var ra = a.getBoundingClientRect(), rz = z.getBoundingClientRect();
        var x1 = ra.left + ra.width / 2 - box.left, y1 = ra.bottom - box.top + 2;
        var x2 = rz.left + rz.width / 2 - box.left, y2 = rz.top - box.top - 3;
        var dy = Math.max(14, (y2 - y1) * 0.55);
        var tone = parseWord(s.rows[L[0]].words[L[1]]).tone || "x";
        svg.appendChild(svgNS("path", {
          d: "M" + x1 + " " + y1 + " C " + x1 + " " + (y1 + dy) + " " + x2 + " " + (y2 - dy) + " " + x2 + " " + y2,
          "class": "tf-link lk-" + tone, "marker-end": "url(#" + id + ")"
        }));
        if (L[3]) {
          var t = svgNS("text", { x: (x1 + x2) / 2 + 6, y: (y1 + y2) / 2 + 4, "class": "tf-link-label" + (AR.test(L[3]) ? " ar" : " en"), "text-anchor": "start" });
          t.textContent = L[3];
          svg.appendChild(t);
        }
      });
    }
  };

  // ---------- 3) دوائر المجموعات (انتماء / مقارنة) ----------
  // hub: عنوان مركزي تخرج منه أسهم إلى المجموعات. vs: true لوضع علامة مقابلة بين المجموعات.
  R.groups = {
    build: function (e) {
      var s = e.spec, b = e.body;
      b.classList.add("gr");
      if (s.hub) { b.classList.add("has-hub"); e.hub = el("div", "gr-hub", rich(s.hub)); b.appendChild(e.hub); }
      var row = el("div", "gr-row");
      e.row = row;
      e.bubbles = [];
      s.groups.forEach(function (g, i) {
        if (i && s.vs) row.appendChild(el("span", "gr-vs", s.vsLabel ? rich(s.vsLabel) : "مقابل"));
        var bb = el("div", "bubble" + (g.tone ? " tone-" + g.tone : ""));
        bb.appendChild(el("div", "b-label", auto(g.label)));
        if (g.sub) bb.appendChild(el("div", "b-sub", rich(g.sub)));
        if (g.items && g.items.length) {
          var it = el("div", "b-items");
          if (!g.items.some(function (x) { return AR.test(x); })) it.setAttribute("dir", "ltr");
          g.items.forEach(function (x) {
            var c = el("span", "chip" + (AR.test(x) ? " chip-ar" : ""), auto(x));
            it.appendChild(c);
          });
          bb.appendChild(it);
        }
        row.appendChild(bb);
        e.bubbles.push(bb);
      });
      b.appendChild(row);
      if (s.hub) { e.svg = svgNS("svg", { "class": "gr-svg", "aria-hidden": "true" }); b.appendChild(e.svg); }
    },
    draw: function (e) {
      var s = e.spec;
      var narrow = e.body.clientWidth < 600 || e.bubbles.length > 4;
      e.body.classList.toggle("narrow", narrow);
      if (!s.hub) return;
      var svg = e.svg, box = e.body.getBoundingClientRect();
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      svg.setAttribute("width", box.width); svg.setAttribute("height", box.height);
      svg.setAttribute("viewBox", "0 0 " + box.width + " " + box.height);
      var id = "gr" + (++uid);
      arrowDefs(svg, id);
      var h = e.hub.getBoundingClientRect();
      if (!narrow) {
        var hx = h.left + h.width / 2 - box.left, hy = h.bottom - box.top;
        e.bubbles.forEach(function (bb) {
          var r = bb.getBoundingClientRect();
          var x = r.left + r.width / 2 - box.left, y = r.top - box.top - 2;
          svg.appendChild(svgNS("path", { d: "M" + hx + " " + hy + " C " + hx + " " + (hy + 22) + " " + x + " " + (y - 22) + " " + x + " " + y, "class": "gr-link", "marker-end": "url(#" + id + ")" }));
        });
      } else {
        // عمود فقري على الجهة اليمنى (بداية السطر العربي) وأسهم أفقية إلى كل دائرة
        var sx = box.width - 12, sy = h.bottom - box.top;
        var last = e.bubbles[e.bubbles.length - 1].getBoundingClientRect();
        var endY = last.top + Math.min(28, last.height / 2) - box.top;
        svg.appendChild(svgNS("path", { d: "M" + sx + " " + sy + " L " + sx + " " + endY, "class": "gr-link" }));
        e.bubbles.forEach(function (bb) {
          var r = bb.getBoundingClientRect();
          var y = r.top + Math.min(28, r.height / 2) - box.top, x = r.right - box.left + 2;
          svg.appendChild(svgNS("path", { d: "M" + sx + " " + y + " L " + x + " " + y, "class": "gr-link", "marker-end": "url(#" + id + ")" }));
        });
      }
    }
  };

  // ---------- 4) دوائر متداخلة (الأصغر داخل الأكبر) ----------
  // rings: من الداخل إلى الخارج [{label, note, items}]
  R.nested = {
    build: function (e) {
      var rings = e.spec.rings, n = rings.length;
      e.body.classList.add("ns");
      function make(i) { // i من الخارج (n-1) إلى الداخل (0)
        var r = rings[i];
        var d = el("div", "ring lvl-" + (n - 1 - i) + (i === 0 ? " core" : ""));
        var head = el("div", "ring-head");
        head.appendChild(el("span", "ring-label", auto(r.label)));
        if (r.note) head.appendChild(el("span", "ring-note", rich(r.note)));
        d.appendChild(head);
        if (r.items && r.items.length) {
          var it = el("div", "b-items");
          if (!r.items.some(function (x) { return AR.test(x); })) it.setAttribute("dir", "ltr");
          r.items.forEach(function (x) { it.appendChild(el("span", "chip" + (AR.test(x) ? " chip-ar" : ""), auto(x))); });
          d.appendChild(it);
        }
        if (i > 0) d.appendChild(make(i - 1));
        return d;
      }
      e.body.appendChild(make(n - 1));
    }
  };

  // ---------- 5) مخطط القرار (سؤال ← نعم / لا) ----------
  // steps: [{q, yes}], else: '...'
  R.flow = {
    build: function (e) {
      var s = e.spec, b = e.body;
      b.classList.add("fl");
      if (s.start) b.appendChild(el("div", "fl-start", rich(s.start)));
      s.steps.forEach(function (st, i) {
        if (i || s.start) b.appendChild(el("div", "fl-no", i ? "لا" : ""));
        var row = el("div", "fl-row");
        var q = el("div", "fl-q");
        q.appendChild(el("span", "fl-qmark", "؟"));
        q.appendChild(el("span", "fl-qtext", auto(st.q)));
        row.appendChild(q);
        row.appendChild(el("div", "fl-yes", "<span>نعم</span>"));
        row.appendChild(el("div", "fl-a", auto(st.yes)));
        b.appendChild(row);
      });
      if (s["else"]) {
        b.appendChild(el("div", "fl-no", "لا"));
        var last = el("div", "fl-row fl-last");
        last.appendChild(el("div", "fl-a fl-else", auto(s["else"])));
        b.appendChild(last);
      }
    }
  };

  // ---------- 6) السلّم / المقياس ----------
  // items: [{label, v (0-100), note}], ends: ['أقل','أكثر'], values: true لإظهار الرقم
  R.scale = {
    build: function (e) {
      var s = e.spec, b = e.body;
      b.classList.add("sc");
      if (s.ends) {
        var ends = el("div", "sc-ends");
        ends.appendChild(el("span", "", rich(s.ends[0])));
        ends.appendChild(el("span", "", rich(s.ends[1])));
        b.appendChild(ends);
      }
      s.items.forEach(function (it) {
        var r = el("div", "sc-row");
        r.appendChild(el("div", "sc-label", auto(it.label)));
        var tr = el("div", "sc-track");
        var f = el("i", "sc-fill");
        f.style.width = Math.max(3, Math.min(100, it.v)) + "%";
        tr.appendChild(f);
        if (s.values) tr.appendChild(el("span", "sc-val", it.v + "%"));
        r.appendChild(tr);
        if (it.note) r.appendChild(el("div", "sc-note", rich(it.note)));
        b.appendChild(r);
      });
    }
  };

  // ---------- 7) السلسلة (خطوات متتابعة بأسهم) ----------
  // steps: [{t, s}], arrows: ['label'...], dir: 'ltr' (افتراضي) أو 'rtl'
  R.chain = {
    build: function (e) {
      var s = e.spec, b = e.body, rtl = s.dir === "rtl";
      b.classList.add("ch");
      b.setAttribute("dir", rtl ? "rtl" : "ltr");
      s.steps.forEach(function (st, i) {
        if (i) {
          var a = el("div", "ch-arrow");
          if (s.arrows && s.arrows[i - 1]) a.appendChild(el("span", "ch-alabel", auto(s.arrows[i - 1])));
          a.appendChild(el("span", "ch-glyph", rtl ? "←" : "→"));
          b.appendChild(a);
        }
        var box = el("div", "ch-step" + (st.hi ? " hi" : ""));
        box.appendChild(el("div", "ch-t", auto(st.t)));
        if (st.s) box.appendChild(el("div", "ch-s", rich(st.s)));
        b.appendChild(box);
      });
    }
  };

  // ---------- 8) جدول ملون ----------
  R.matrix = {
    build: function (e) {
      var s = e.spec;
      var wrap = el("div", "mx-wrap");
      var t = el("table", "mx");
      if (s.cols) {
        var th = el("thead"), tr = el("tr");
        s.cols.forEach(function (c) { tr.appendChild(el("th", "", rich(c))); });
        th.appendChild(tr); t.appendChild(th);
      }
      var tb = el("tbody");
      s.rows.forEach(function (row) {
        var tr2 = el("tr");
        row.forEach(function (c, i) { tr2.appendChild(el(i === 0 ? "th" : "td", "", auto(c))); });
        tb.appendChild(tr2);
      });
      t.appendChild(tb);
      wrap.appendChild(t);
      e.body.appendChild(wrap);
    }
  };

  window.Diagrams = { render: render, redraw: function () { redrawAll(true); }, _rich: rich, _tok: tok };
})();
