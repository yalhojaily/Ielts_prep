window.LESSONS = window.LESSONS || {};
window.LESSONS[118] = {
  steps: [
    { k: "التصحيح", h: "صحّح نفسك أو غيرك *بلطف*",
      why: [
        "في المحادثة الحقيقية يخطئ الجميع. المهم أن تصحح بسرعة وطبيعية، لا أن تتوقف أو ترتبك.",
        "في IELTS Speaking، تصحيح نفسك لا يخفض درجتك، بل يُظهر وعيك باللغة."
      ],
      show: [{ t: "compare", cols: [
        { h: "تصحيح نفسك", c: "subj", en: ["I mean…", "Sorry, I meant…", "Or rather…", "I go—sorry, I {v:went} there last year."] },
        { h: "تصحيح غيرك بلطف", c: "accent", en: ["{k:Actually}, it's on Tuesday.", "{k:In fact}, …", "I'm not sure that's right."] }
      ] }],
      check: { q: "Polite way to correct someone:", o: ["No, you're wrong.", "Actually, I think it's on Tuesday."], a: 1, why: "`Actually, I think…` لطيفة." } },

    { k: "actually", h: "actually = في الحقيقة، *لا* حاليًا",
      why: [
        "فخ مشهور: `actually` تشبه الكلمة الفرنسية والإسبانية بمعنى «حاليًا»، لكنها في الإنجليزية تعني **في الحقيقة**.",
        "للحاضر استخدم `currently` أو `at the moment`."
      ],
      show: [{ t: "compare", cols: [{ h: "actually = في الحقيقة", c: "subj", en: ["{k:Actually}, I'm a teacher, not a student."] }, { h: "currently = حاليًا", c: "accent", en: ["I'm {k:currently} working in Riyadh."] }] },
        { t: "fix", items: [["Actually I live in Riyadh. (حاليًا)", "{k:Currently}, I live in Riyadh.", ""]] }],
      check: { q: "___, I'm working on a new project.", o: ["Actually (= now)", "At the moment"], a: 1, why: "للحاضر ← `At the moment`." } },

    { k: "تغيير الموضوع", h: "By the way · Anyway",
      why: [
        "`By the way` = بالمناسبة: تفتح موضوعًا **جديدًا** لا علاقة له.",
        "`Anyway` = على أي حال: **ترجع** إلى الموضوع الأصلي بعد خروج عنه. لا تخلط بينهما."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["By the way", "{k:By the way}, have you seen Ahmed recently?", "موضوع جديد", 0], ["Speaking of which", "{k:Speaking of which}, how's your new car?", "موضوع مرتبط", 0], ["Anyway", "{k:Anyway}, let's get back to the plan.", "عودة للموضوع", 1], ["Going back to", "{k:Going back to} what I said, …", "عودة", 1]],
        groups: [{ h: "موضوع جديد" }, { h: "العودة" }] }],
      check: { q: "(after a long side story) \"___, as I was saying, the plan is ready.\"", o: ["By the way", "Anyway"], a: 1, why: "العودة للموضوع ← `Anyway`." } },

    { k: "التوضيح", h: "In other words · What I meant was",
      why: ["لإعادة الفكرة بكلمات أبسط أو أوضح. لاحظ: `In other words` بالجمع دائمًا."],
      show: [{ t: "ex", items: [["{k:In other words}, we need more time.", "بعبارة أخرى"], ["{k:What I meant was} that it's too expensive.", ""]] },
        { t: "fix", items: [["In other word, …", "{k:In other words}, …", ""]] }],
      check: { q: "Choose the correct phrase:", o: ["In other word,", "In other words,"], a: 1, why: "`words` بالجمع." } }
  ],
  sum: [
    { h: "تصحيح", en: ["I mean… · Actually, …"] },
    { h: "actually", en: ["= في الحقيقة · currently = حاليًا"] },
    { h: "موضوع جديد", en: ["By the way, …"] },
    { h: "عودة", en: ["Anyway, … · Going back to…"] }
  ]
};
