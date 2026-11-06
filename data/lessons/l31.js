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

// تعمّق
window.LESSONS[31].steps.push(
  { k: "أخطاء شائعة", h: "أربعة أخطاء تتكرر في كل أنواع الشرط",
    why: [
      "معظم أخطاء الشرط تعود إلى أربع قواعد. إذا أتقنتها تجنبت 90٪ من الأخطاء:",
      "**1.** لا `will / would` بعد `if`. **2.** النوع 2 = ماضٍ بسيط + `would`، لا تخلطه مع `will`. **3.** النوع 3 = `would have` + تصريف ثالث، لا `would had`. **4.** `unless` معناها منفي، فالفعل بعدها مثبت."
    ],
    show: [{ t: "fix", items: [
      ["If I would know, I would tell you.", "If I {v:knew}, I {a:would} tell you.", "قاعدة 1"],
      ["If I had more money, I will buy a car.", "…, I {a:would} buy a car.", "قاعدة 2: لا تخلط الأنواع"],
      ["If they had come, we would had fun.", "…, we {a:would have} {v:had} fun.", "قاعدة 3"],
      ["Unless you don't hurry, you'll be late.", "{k:Unless} you {v:hurry}, you'll be late.", "قاعدة 4"]
    ] }],
    check: { q: "If you ___ any questions, call me.", o: ["will have", "have", "would have"], a: 1, why: "النوع 1: مضارع بعد `if`." } },

  { k: "في سياق", h: "اقرأ: كل الأنواع في نص واحد",
    why: ["هذه إجابة على سؤال IELTS Speaking Part 3 عن التكنولوجيا. حاول أن تحدد نوع كل جملة شرط قبل قراءة الملاحظة."],
    show: [{ t: "passage", h: "إجابة في Speaking Part 3",
      en: "If you {v:use} your phone before bed, you {v:sleep} badly; that's a well-known fact. If young people {v:spend} less time online, they{a:'ll} {v:have} more time for sport. Personally, if I {v:didn't} {v:have} a smartphone, I{a:'d} {v:read} more books. And if smartphones {a:hadn't} {v:been} invented, our lives {a:would have} {v:been} very different.",
      ar: "إذا استخدمت هاتفك قبل النوم تنام بشكل سيئ، وهذه حقيقة معروفة. إذا قضى الشباب وقتًا أقل على الإنترنت فسيكون لديهم وقت أكثر للرياضة. أما أنا فلو لم يكن عندي هاتف ذكي لقرأت كتبًا أكثر. ولو لم تُخترع الهواتف الذكية لكانت حياتنا مختلفة جدًا.",
      note: "الأولى نوع 0 (حقيقة)، الثانية نوع 1 (ممكن)، الثالثة نوع 2 (خيال الآن)، الرابعة نوع 3 (ماضٍ لم يحدث)." }],
    check: { q: "\"If smartphones hadn't been invented, our lives would have been different\" is…", o: ["Type 1", "Type 2", "Type 3"], a: 2, why: "`had` + v3 و`would have` + v3 ← النوع 3." } }
);

// طبّق على نفسك
window.LESSONS[31].apply = [
  {"p": "اكتب ثلاث جمل شرط عن دراستك للإنجليزية: نوع 1 ونوع 2 ونوع 3.", "use": "If + present → will · If + past → would · If + had v3 → would have v3", "m": ["If I practise every day, I'll improve quickly. If I lived in London, I would speak better. If I had started earlier, I would have taken the exam last year."], "c": [["نوع 1 (`will`)", "\\bif\\b[^.]*\\b(will|'ll)\\b"], ["نوع 2 (`would` + فعل)", "\\bwould\\s+(?!have)\\w+"], ["نوع 3 (`would have + v3`)", "\\bwould have\\s+\\w+"]]},
  {"p": "أكمل بصدق: `If I could change one thing in my city, …`", "use": "{k:If} {s:I} {a:could} …, {s:I} {a:would} …", "m": ["If I could change one thing in my city, I would build more parks."], "c": [["`would` في جزء النتيجة", "\\bwould\\b"]]}
];
