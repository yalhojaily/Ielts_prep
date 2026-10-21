window.LESSONS = window.LESSONS || {};
window.LESSONS[98] = {
  steps: [
    { k: "الفكرة", h: "الصفة تصف *الاسم* · الظرف يصف *الفعل*",
      why: [
        "الصفة تجيب: كيف هو الشيء؟ `a careful driver` (سائق حذر).",
        "الظرف يجيب: كيف يحدث الفعل؟ `He drives carefully` (يقود بحذر). ويتكون غالبًا بإضافة `ly` إلى الصفة."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["صفة", "He is a {k:careful} {o:driver}.", "تصف driver (الاسم)", 0], ["ظرف", "He {v:drives} {k:careful|ly}.", "يصف drives (الفعل)", 1], ["صفة", "She is a {k:quick} {o:learner}.", "", 0], ["ظرف", "She {v:learns} {k:quick|ly}.", "", 1]],
        groups: [{ h: "صفة ← اسم" }, { h: "ظرف ← فعل" }] },
        { t: "fix", items: [["He drives careful.", "He drives {k:carefully}.", ""]] }],
      check: { q: "Please speak ___.", o: ["slow", "slowly"], a: 1, why: "يصف الفعل `speak` ← ظرف `slowly`." } },

    { k: "الشاذ", h: "good ← *well* · fast ← fast",
      why: [
        "بعض الظروف شاذة: `good` ← `well`. و`fast, hard, early, late` تبقى كما هي.",
        "انتبه: `hardly` ليست ظرف `hard`، بل تعني **بالكاد**. و`lately` تعني **مؤخرًا**."
      ],
      show: [{ t: "compare", cols: [
        { h: "الظرف الصحيح", c: "verb", en: ["She cooks {k:well}.", "He works {k:hard}. (بجد)", "He runs {k:fast}."] },
        { h: "معنى مختلف!", c: "neg", en: ["He {k:hardly} works. (بالكاد يعمل)", "I haven't seen him {k:lately}. (مؤخرًا)"] }
      ] },
        { t: "fix", items: [["She sings very good.", "She sings very {k:well}.", ""], ["I worked hardly.", "I worked {k:hard}.", ""]] }],
      check: { q: "She did ___ in the exam.", o: ["good", "well"], a: 1, why: "يصف الفعل ← `well`." } },

    { k: "المكان", h: "الظرف *بعد* المفعول",
      why: [
        "الظرف يأتي بعد الفعل، لكن إذا كان للفعل مفعول فالظرف يأتي **بعد المفعول**، لا بينهما.",
        "`He speaks fluently English` خطأ. الفعل ومفعوله لا ينفصلان."
      ],
      show: [{ t: "big", items: ["{s:He} {v:speaks} {o:English} {k:fluently}."], cap: "فعل + مفعول + ظرف" },
        { t: "fix", items: [["He opened quietly the door.", "He opened {o:the door} {k:quietly}.", ""]] }],
      check: { q: "Choose the correct order.", o: ["She did carefully the work.", "She did the work carefully."], a: 1, why: "الظرف بعد المفعول." } },

    { k: "الاستثناءات", h: "looks happy · friendly *ليست* ظرفًا",
      why: [
        "بعد أفعال الربط (`look, seem, feel, taste`) نستخدم **الصفة** لا الظرف (الدرس 49): `She looks happy`.",
        "وبعض الكلمات تنتهي بـ `ly` لكنها **صفات**: `friendly, lovely, lonely`. للظرف نقول `in a friendly way`."
      ],
      show: [{ t: "ex", items: [["She {a:looks} {k:happy}.", "صفة بعد فعل الربط"], ["I'm not {k:well} today.", "well صفة = بصحة جيدة"], ["She smiled {k:in a friendly way}.", "friendly صفة"]] }],
      check: { q: "The soup tastes ___.", o: ["good", "well"], a: 0, why: "بعد فعل الربط `tastes` ← صفة." } }
  ],
  sum: [
    { h: "صفة / ظرف", en: ["a careful driver · drives {k:carefully}"] },
    { h: "شاذ", en: ["well · fast · hard · early"] },
    { h: "المكان", en: ["speaks English {k:fluently}"] },
    { h: "انتبه", en: ["hardly = بالكاد · looks happy"] }
  ]
};
