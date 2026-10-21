window.LESSONS = window.LESSONS || {};
window.LESSONS[99] = {
  steps: [
    { k: "الفكرة", h: "ly ← more · قصيرة ← er",
      why: [
        "الظروف المنتهية بـ `ly` طويلة، فنقارنها بـ `more` و`the most`: `more carefully`.",
        "والظروف القصيرة (`fast, hard, early, late`) تأخذ `er / est` مثل الصفات: `faster`."
      ],
      show: [{ t: "build", lab: "اختر الظرف",
        opts: [["slowly", "{k:more} slowly → {k:the most} slowly", "", 0], ["carefully", "{k:more} carefully → {k:the most} carefully", "", 0], ["fast", "{v:fast|er} → the {v:fast|est}", "", 1], ["early", "{v:earl|ier} → the {v:earl|iest}", "", 1], ["hard", "{v:hard|er} → the {v:hard|est}", "", 1]],
        groups: [{ h: "-ly ← more / most" }, { h: "قصير ← -er / -est" }] },
        { t: "fix", items: [["She drives carefuller than me.", "She drives {k:more carefully} than me.", ""], ["I arrived more early.", "I arrived {v:earlier}.", ""]] }],
      check: { q: "Could you speak ___?", o: ["slowlier", "more slowly"], a: 1, why: "ظرف بـ ly ← `more slowly`." } },

    { k: "الشاذ", h: "well ← better ← best",
      why: ["نفس الشاذ في الصفات: `well` ← `better` ← `best`، و`badly` ← `worse` ← `worst`."],
      show: [{ t: "map", cols: [{ h: "الظرف ← مقارنة ← تفضيل", c: "accent", k: "v", rows: [["well", "better · best"], ["badly", "worse · worst"], ["far", "further · furthest"]] }] },
        { t: "fix", items: [["He plays more good.", "He plays {v:better}.", ""], ["He worked the most hard.", "He worked {k:the} {v:hardest}.", ""]] }],
      check: { q: "She did ___ in the second test.", o: ["more well", "better"], a: 1, why: "`well` ← `better`." } },

    { k: "as … as", h: "as carefully as",
      why: ["للمساواة مع الظروف: `as` + الظرف في صورته الأصلية + `as`، مثل الصفات."],
      show: [{ t: "big", items: ["He doesn't drive {k:as} carefully {k:as} his wife."], cap: "زوجته أكثر حذرًا" }],
      check: { q: "I can't run as ___ as you.", o: ["fast", "faster"], a: 0, why: "الصورة الأصلية بين as…as." } }
  ],
  sum: [
    { h: "-ly", en: ["more carefully · the most carefully"] },
    { h: "قصير", en: ["faster · earlier · the hardest"] },
    { h: "شاذ", en: ["better · worse · further"] },
    { h: "مساواة", en: ["as carefully as"] }
  ]
};
