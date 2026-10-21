window.LESSONS = window.LESSONS || {};
window.LESSONS[53] = {
  steps: [
    { k: "الفكرة", h: "أريد *منك* أن…: want + شخص + to",
      why: [
        "في العربية نقول «أريد أن تأتي». الترجمة الحرفية `I want that you come` خطأ.",
        "في الإنجليزية نضع الشخص مباشرة بعد الفعل، ثم `to` + الفعل: `I want you to come.` كثير من الأفعال تأخذ هذا النمط."
      ],
      show: [{ t: "build", lab: "اختر الفعل",
        opts: [["want", "I {v:want} {s:you} {a:to} {v:come}.", "", 0], ["ask", "She {v:asked} {s:me} {a:to} {v:wait}.", "", 0], ["advise", "He {v:advised} {s:me} {a:to} {v:rest}.", "", 0],
               ["encourage", "My parents {v:encouraged} {s:me} {a:to} {v:study} abroad.", "", 0], ["allow", "They {v:allowed} {s:us} {a:to} {v:leave}.", "", 0]],
        groups: [{ h: "فعل + شخص + to + فعل", sub: "want, ask, tell, advise, allow, encourage, expect, invite, remind, warn" }] },
        { t: "fix", items: [["I want that you help me.", "I {v:want} {s:you} {a:to} {v:help} me.", ""]] }],
      check: { q: "I'd like ___ me.", o: ["that you call", "you to call", "you call"], a: 1, why: "`would like` + شخص + to + فعل." } },

    { k: "make و let", h: "make / let + شخص + فعل *بلا to*",
      why: [
        "`make` (أجبر أو تسبّب) و`let` (سمح) استثناء: بعد الشخص يأتي الفعل الأصلي **بلا to**.",
        "لكن في المجهول ترجع `to`: `I was made to wait.`"
      ],
      show: [{ t: "compare", cols: [
        { h: "make = أجبر / تسبّب", c: "accent", en: ["My boss {v:made} {s:me} {v:work} late.", "The film {v:made} {s:me} {v:cry}."] },
        { h: "let = سمح", c: "verb", en: ["{v:Let} {s:me} {v:help}.", "They don't {v:let} {s:us} {v:use} phones."] }
      ] },
        { t: "fix", items: [["He made me to wait.", "He {v:made} me {v:wait}.", ""], ["Let me to explain.", "{v:Let} me {v:explain}.", ""]] }],
      check: { q: "Please let me ___.", o: ["to know", "know", "knowing"], a: 1, why: "`let` + شخص + فعل أصلي بلا to." } },

    { k: "help", h: "help + شخص + (to) فعل",
      why: ["`help` مرنة: يمكن أن يأتي بعد الشخص الفعل مع `to` أو بدونها، والمعنى واحد."],
      show: [{ t: "big", items: ["She {v:helped} {s:me} ({a:to}) {v:move}."], cap: "الصيغتان صحيحتان" }],
      check: { q: "Can you help me ___ this box?", o: ["carry", "to carry", "both are correct"], a: 2, why: "`help` تقبل الفعل مع to أو بدونها." } },

    { k: "مفعولان", h: "give someone something",
      why: [
        "بعض الأفعال (`give, send, show, lend, buy, bring, offer`) تأخذ مفعولين: شخصًا وشيئًا.",
        "ترتيبان صحيحان: الشخص أولًا بلا حرف جر، أو الشيء أولًا ثم `to / for` + الشخص."
      ],
      show: [{ t: "compare", cols: [
        { h: "الشخص أولًا", c: "subj", en: ["She {v:sent} {s:me} {o:a message}.", "He {v:gave} {s:me} {o:a gift}."] },
        { h: "الشيء أولًا + to / for", c: "accent", en: ["She {v:sent} {o:a message} {k:to} me.", "He {v:bought} {o:a gift} {k:for} his wife."] }
      ] },
        { t: "note", kind: "warn", txt: "`explain` و`describe` لا يأخذان الشخص أولًا: `explain the problem to me`، لا `explain me`." }],
      check: { q: "Which is NOT correct?", o: ["He showed me the photos.", "He showed the photos to me.", "He explained me the rule."], a: 2, why: "`explain` لا يأخذ الشخص مباشرة." } }
  ],
  sum: [
    { h: "+ sb + to", en: ["I want {s:you} {a:to} {v:come}."] },
    { h: "make / let", en: ["made {s:me} {v:wait} · let {s:me} {v:help}"] },
    { h: "help", en: ["helped me (to) move"] },
    { h: "مفعولان", en: ["gave {s:me} a gift · gave a gift {k:to} me"] }
  ]
};
