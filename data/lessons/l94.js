window.LESSONS = window.LESSONS || {};
window.LESSONS[94] = {
  steps: [
    { k: "الفكرة", h: "قصيرة + er · طويلة: more",
      why: [
        "للمقارنة بين شيئين: الصفة **القصيرة** (مقطع واحد) نضيف لها `er`: `taller`. والصفة **الطويلة** (مقطعان أو أكثر) نضع قبلها `more`: `more expensive`.",
        "ثم `than` (من). لا `from`، ولا نجمع `more` مع `er`."
      ],
      show: [{ t: "build", lab: "اختر الصفة",
        opts: [["old", "{v:old|er} than", "قصيرة", 0], ["big", "{v:bigg|er} than", "قصيرة + مضاعفة", 0], ["easy", "{v:eas|ier} than", "y ← ier", 0], ["expensive", "{k:more} {v:expensive} than", "طويلة", 1], ["important", "{k:more} {v:important} than", "طويلة", 1]],
        groups: [{ h: "قصيرة ← er" }, { h: "طويلة ← more" }] },
        { t: "fix", items: [["He is taller from me.", "He is taller {k:than} me.", ""], ["more bigger", "{v:bigger}", ""]] }],
      check: { q: "Gold is ___ silver.", o: ["expensiver than", "more expensive than", "more expensive from"], a: 1, why: "طويلة ← `more` + `than`." } },

    { k: "الشاذ", h: "good ← better · bad ← worse",
      why: ["أكثر الصفات استعمالًا شاذة في المقارنة، فاحفظها. لا نقول `more good` ولا `badder`."],
      show: [{ t: "map", cols: [{ h: "الصفة ← المقارنة", c: "accent", k: "v", rows: [["good", "better"], ["bad", "worse"], ["far", "farther / further"], ["much / many", "more"], ["little", "less"]] }] }],
      check: { q: "My new job is ___ than the old one.", o: ["more good", "gooder", "better"], a: 2, why: "`good` ← `better`." } },

    { k: "التقوية", h: "much cheaper · *لا* very cheaper",
      why: [
        "لتقوية المقارنة («أرخص بكثير») نستخدم `much, far, a lot`. ولتخفيفها («أكبر بقليل») `a bit, slightly, a little`.",
        "`very` لا تأتي مع صيغة المقارنة."
      ],
      show: [{ t: "scale", cap: "مقدار الفرق",
        items: [["slightly", 15, "بقليل"], ["a bit", 35, ""], ["a lot", 70, ""], ["much / far", 100, "بكثير"]],
        lines: ["This phone is [] cheaper."], start: 3 },
        { t: "fix", items: [["very cheaper", "{k:much} cheaper", ""]] }],
      check: { q: "The new model is ___ faster.", o: ["very", "much"], a: 1, why: "مع المقارنة ← `much`." } },

    { k: "less و than me", h: "less للعكس · than me / than I am",
      why: [
        "`less` + صفة للعكس: `less expensive` (أقل غلاءً).",
        "بعد `than`: في الكلام `than me`، وفي الرسمي `than I am`."
      ],
      show: [{ t: "ex", items: [["This phone is {k:less} expensive than that one.", ""], ["He's taller {k:than} me. = He's taller {k:than} I am.", ""]] }],
      check: { q: "Taif is ___ than Jeddah.", o: ["less hot", "less hotter"], a: 0, why: "`less` + الصفة الأصلية." } }
  ],
  sum: [
    { h: "قصيرة", en: ["older · bigger · easier"] },
    { h: "طويلة", en: ["{k:more} expensive than"] },
    { h: "شاذة", en: ["better · worse · further"] },
    { h: "تقوية", en: ["{k:much} cheaper (لا very)"] }
  ]
};
