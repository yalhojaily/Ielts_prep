window.LESSONS = window.LESSONS || {};
window.LESSONS[48] = {
  steps: [
    { k: "أربع خطوات", h: "لنقل *أي* كلام",
      why: ["كل ما تعلمته في هذا القسم يجتمع في أربع خطوات. طبّقها بالترتيب على أي جملة."],
      show: [{ t: "chain", items: [
        { h: "اختر فعل النقل", en: "said · told · asked · advised" },
        { h: "غيّر الضمائر", en: "I → he · my → his" },
        { h: "أرجع الزمن", en: "is → was · will → would" },
        { h: "غيّر الزمان والمكان", en: "tomorrow → the next day" }
      ] },
        { t: "trans", items: [{ from: "“I {a:will} {v:call} you tomorrow.”", to: "She said she {a:would} {v:call} me the next day.", chg: ["said", "I → she · you → me", "will → would", "tomorrow → the next day"] }] }],
      check: { q: "\"I'm busy today.\" → She said she ___ busy ___.", o: ["is / today", "was / that day", "was / today"], a: 1, why: "`am` ← `was`، و`today` ← `that day`." } },

    { k: "ثلاثة أنواع", h: "خبر · سؤال · أمر",
      why: ["لكل نوع من الكلام شكل مختلف في النقل. اختر النوع وراقب."],
      show: [{ t: "build", lab: "اختر النوع",
        opts: [["خبر", "“I'm busy.” → She {v:said} (that) she {a:was} busy.", "said + إرجاع الزمن", 0], ["سؤال", "“Are you OK?” → He {v:asked} {k:if} I {a:was} OK.", "asked + ترتيب عادي", 1],
               ["أمر", "“Sit down.” → He {v:told} me {a:to} {v:sit} down.", "told + to", 2], ["أمر منفي", "“Don't worry.” → She {v:told} me {n:not} {a:to} {v:worry}.", "told + not to", 2]],
        groups: [{ h: "خبر", res: "said (that)…" }, { h: "سؤال", res: "asked if / wh-…" }, { h: "أمر", res: "told sb (not) to…" }] }],
      check: { q: "\"Don't worry.\" → She told me ___.", o: ["don't worry", "not to worry", "to don't worry"], a: 1, why: "الأمر المنفي: `told me not to` + الفعل." } },

    { k: "جدول الإرجاع", h: "كل التغييرات في مكان واحد",
      why: ["راجع الجدولين قبل التمارين. هذا كل ما تحتاجه."],
      show: [{ t: "row", items: [
        { t: "map", cols: [{ h: "الزمن", c: "accent", k: "a", rows: [["present", "past"], ["past", "past perfect"], ["present perfect", "past perfect"], ["will · can · may", "would · could · might"], ["must", "had to"]] }] },
        { t: "map", cols: [{ h: "الوقت", c: "subj", k: "k", rows: [["today", "that day"], ["yesterday", "the day before"], ["tomorrow", "the next day"], ["last week", "the week before"], ["ago", "before"]] }] }
      ] }],
      check: { q: "\"I came two days ago.\" → He said he had come two days ___.", o: ["ago", "before"], a: 1, why: "`ago` تصبح `before` في الكلام المنقول." } },

    { k: "مراجعة الأخطاء", h: "أخطاء تجمع القواعد كلها",
      why: ["حاول أن تعرف القاعدة المكسورة في كل جملة قبل أن تقرأ التصحيح."],
      show: [{ t: "fix", items: [
        ["He asked me what did I want.", "He asked me what I {v:wanted}.", "سؤال منقول ← ترتيب عادي."],
        ["She told me to don't worry.", "She told me {n:not} {a:to} {v:worry}.", "أمر منفي ← not to."],
        ["He said me he was tired.", "He {v:told} me he was tired.", "tell + شخص."],
        ["They said they will come tomorrow.", "They said they {a:would} come the next day.", "إرجاع الزمن والوقت."]
      ] }],
      check: { q: "He ___ me he was tired.", o: ["said", "told"], a: 1, why: "بعده شخص مباشرة ← `told`." } }
  ],
  sum: [
    { h: "خبر", en: ["She {v:said} she {a:was} busy."] },
    { h: "سؤال", en: ["He {v:asked} {k:if} I {a:was} OK."] },
    { h: "أمر", en: ["He {v:told} me ({n:not}) {a:to} sit."] },
    { h: "الإرجاع", en: ["is → was · will → would · ago → before"] }
  ]
};
