window.LESSONS = window.LESSONS || {};
window.LESSONS[31] = {
  steps: [
    { k: "سؤالان", h: "متى؟ وهل هو *ممكن*؟",
      why: [
        "لاختيار نوع الشرط لا تحتاج حفظ جدول. اسأل سؤالين عن الشرط:",
        "**متى؟** (حاضر/مستقبل أم ماضٍ؟) و**هل هو ممكن؟** (حقيقي أم خيالي؟). الإجابتان تقودانك إلى النوع."
      ],
      show: [{ t: "decide", q: "هل الشرط في الماضي (انتهى)؟",
        opts: [
          { lab: "نعم", h: "النوع 3", en: ["If I{a:'d} {v:known}, I{a:'d have} {v:come}."], c: "accent" },
          { lab: "لا، حاضر أو مستقبل", h: "هل هو ممكن؟ ← 0 أو 1 أو 2", en: ["ممكن: If I {v:pass}, I'll celebrate. (1)", "خيالي: If I {v:could} fly, I'd travel. (2)"], c: "subj" }
        ] }],
      check: { q: "If I'd known about the party, I ___.", o: ["would come", "would have come", "will come"], a: 1, why: "الشرط في الماضي (لم أعرف) ← النوع 3." } },

    { k: "زر واحد، أربع جمل", h: "الجملة نفسها في الأنواع الأربعة",
      why: ["اضغط على كل نوع وراقب كيف ترجع الأزمنة خطوة إلى الوراء كلما ابتعدنا عن الواقع."],
      show: [{ t: "build", lab: "اختر النوع",
        opts: [["0", "If you {v:press} it, it {v:opens}.", "حقيقة: دائمًا يحدث", 0], ["1", "If you {v:press} it, it {a:will} {v:open}.", "ممكن الآن أو غدًا", 0],
               ["2", "If you {v:pressed} it, it {a:would} {v:open}.", "خيالي أو بعيد الاحتمال", 1], ["3", "If you {a:had} {v:pressed} it, it {a:would have} {v:opened}.", "لم يحدث في الماضي", 1]],
        groups: [{ h: "حقيقي", sub: "0 · 1" }, { h: "خيالي", sub: "2 · 3" }] }],
      check: { q: "If I had more money, I ___ a car.", o: ["will buy", "would buy", "would have bought"], a: 1, why: "`had` في الشرط (خيال الآن) ← النوع 2: `would buy`." } },

    { k: "1 أم 2", h: "حسب *رأيك* أنت",
      why: [
        "الجملة نفسها قد تكون من النوع 1 أو 2، والفرق في رأيك: هل تراها محتملة أم بعيدة؟",
        "إذا كنت متفائلًا بالوظيفة ← النوع 1. إذا كنت تراها صعبة المنال ← النوع 2."
      ],
      show: [{ t: "compare", cols: [
        { h: "أراها محتملة (1)", c: "verb", en: ["If I {v:get} the job, I{a:'ll} {v:move}."] },
        { h: "أراها بعيدة (2)", c: "accent", en: ["If I {v:got} the job, I{a:'d} {v:move}."] }
      ] }],
      check: { q: "\"If I won the lottery, I'd buy a house.\" The speaker thinks winning is…", o: ["likely", "unlikely"], a: 1, why: "النوع 2 = يراه بعيد الاحتمال." } },

    { k: "'d", h: "'d في جملة الشرط",
      why: [
        "`'d` تظهر في الجزأين بمعنيين مختلفين، وما بعدها يحدد:",
        "`'d` + تصريف ثالث = `had` (غالبًا في جزء if). `'d` + فعل أصلي أو `have` = `would` (في النتيجة)."
      ],
      show: [{ t: "big", items: ["If I{a:'d} {v:known}, I{a:'d have} {v:told} you."], cap: "الأولى = had (بعدها known) · الثانية = would (بعدها have)" }],
      check: { q: "If they had come, we would ___ fun.", o: ["had", "have had", "has"], a: 1, why: "النوع 3: `would have` + `had`." } }
  ],
  sum: [
    { h: "0", en: ["If you {v:press} it, it {v:opens}."] },
    { h: "1", en: ["If you {v:press} it, it {a:will} open."] },
    { h: "2", en: ["If you {v:pressed} it, it {a:would} open."] },
    { h: "3", en: ["If you {a:had} {v:pressed} it, it {a:would have} opened."] }
  ]
};
