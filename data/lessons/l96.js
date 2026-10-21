window.LESSONS = window.LESSONS || {};
window.LESSONS[96] = {
  steps: [
    { k: "المساواة", h: "as … as = *بنفس* القدر",
      why: [
        "`as` + صفة + `as` تعني أن الشيئين متساويان: `She is as tall as her mother.`",
        "الصفة هنا في صورتها **الأصلية**: `as tall as`، لا `as taller as`. ولا نستخدم `like` في الجزء الثاني."
      ],
      show: [{ t: "big", items: ["My car is {k:as} {v:fast} {k:as} yours."], cap: "متساويان" },
        { t: "fix", items: [["as taller as", "{k:as} tall {k:as}", ""], ["She is as tall like her mother.", "She is as tall {k:as} her mother.", ""]] }],
      check: { q: "Ali is as ___ as his brother.", o: ["clever", "cleverer"], a: 0, why: "الصفة الأصلية بين as…as." } },

    { k: "النفي", h: "not as … as = *أقل* من",
      why: [
        "`not as … as` تعني أن الأول **أقل**: `Taif is not as hot as Jeddah` = الطائف أقل حرارة.",
        "طريقة لبقة للمقارنة، خصوصًا مع الصفات الإيجابية: `This book isn't as good as the first one.`"
      ],
      show: [{ t: "compare", cols: [{ h: "not as hot as", c: "subj", en: ["Taif is {k:not as} hot {k:as} Jeddah."] }, { h: "= أقل", c: "accent", en: ["Taif is {k:less} hot than Jeddah.", "Jeddah is hotter than Taif."] }] }],
      check: { q: "\"The test wasn't as difficult as I expected\" means it was…", o: ["easier than expected", "harder than expected"], a: 0, why: "`not as difficult` = أقل صعوبة." } },

    { k: "المضاعفة", h: "twice as big as",
      why: [
        "للمقارنة بالنسب: `twice` (ضعف)، `three times` (ثلاثة أضعاف)، `half` (نصف) قبل `as…as`.",
        "مفيدة جدًا في Writing Task 1. ومع الأسماء: `as much money as`, `as many people as`."
      ],
      show: [{ t: "ex", items: [["A house in Riyadh costs {k:twice as} much {k:as} one in Taif.", ""], ["Sales were {k:three times as} high {k:as} last year.", ""], ["There were {k:as many} visitors {k:as} in 2019.", "مع اسم معدود"]] },
        { t: "fix", items: [["twice as bigger as", "{k:twice as} big {k:as}", ""]] }],
      check: { q: "Our flat is ___ yours.", o: ["twice as big as", "twice bigger as"], a: 0, why: "`twice as` + صفة أصلية + `as`." } },

    { k: "the same as", h: "the same as · عبارات ثابتة",
      why: [
        "للتطابق نستخدم `the same as` (لا `the same like`)، أو `the same` + اسم + `as`.",
        "وعبارات ثابتة شائعة: `as soon as possible, as far as I know, as long as`."
      ],
      show: [{ t: "ex", items: [["My phone is {k:the same as} yours.", ""], ["She's {k:the same} age {k:as} me.", ""], ["Please reply {k:as soon as possible}.", ""], ["{k:As far as I know}, the shop is closed.", "على حد علمي"]] }],
      check: { q: "My answer is the same ___ yours.", o: ["like", "as"], a: 1, why: "`the same as`." } }
  ],
  sum: [
    { h: "مساواة", en: ["as tall as"] },
    { h: "أقل", en: ["not as hot as"] },
    { h: "نسب", en: ["twice as big as · as many … as"] },
    { h: "تطابق", en: ["the same as"] }
  ]
};
