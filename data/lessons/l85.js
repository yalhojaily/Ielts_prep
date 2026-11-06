window.LESSONS = window.LESSONS || {};
window.LESSONS[85] = {
  steps: [
    { k: "الفكرة", h: "«يوجد» = There is / There are",
      why: [
        "في العربية نقول «في مدينتي حدائق كثيرة» بلا فعل. في الإنجليزية لا بد من فعل: نبدأ بـ `There is / There are`.",
        "الترجمة الحرفية `In my city have many parks` أو `It has a mall` من أشهر أخطاء العرب."
      ],
      show: [{ t: "trans", items: [{ from: "في مدينتي حدائق كثيرة.", to: "{s:There} {v:are} many parks in my city." }] },
        { t: "fix", items: [["In my city have many parks.", "{s:There} {v:are} many parks in my city.", ""], ["It has a big mall in Riyadh.", "{s:There} {v:is} a big mall in Riyadh.", ""]] }],
      check: { q: "___ a pharmacy near my house.", o: ["It has", "There is", "Have"], a: 1, why: "«يوجد» ← `There is`." } },

    { k: "is أم are", h: "الفعل يطابق ما *بعده*",
      why: ["في `There is / are` الفاعل الحقيقي يأتي بعد الفعل. مفرد أو غير معدود ← `is`. جمع ← `are`."],
      show: [{ t: "build", lab: "اختر",
        opts: [["a book", "{s:There} {v:is} a book.", "مفرد", 0], ["some water", "{s:There} {v:is} some water.", "غير معدود", 0], ["three books", "{s:There} {v:are} three books.", "جمع", 1], ["many people", "{s:There} {v:are} many people.", "جمع", 1]],
        groups: [{ h: "There is" }, { h: "There are" }] }],
      check: { q: "There ___ many people at the event.", o: ["is", "are"], a: 1, why: "`many people` جمع ← `are`." } },

    { k: "كل الأزمنة", h: "There was · There will be · There has been",
      why: [
        "`There` تعمل في كل الأزمنة، والفعل `be` هو الذي يتغير.",
        "`There has been` مفيدة جدًا في Writing Task 1 لوصف التغيرات: `There has been a sharp increase in prices.`"
      ],
      show: [{ t: "ex", items: [["{s:There} {v:was} an accident.", "ماضٍ"], ["{s:There} {v:will be} a meeting.", "مستقبل"], ["{s:There} {v:has been} a sharp increase in prices.", "مضارع تام"], ["{s:There} {a:might} {v:be} a problem.", "مع modal"], ["{v:Is} {s:there} a bank near here?", "سؤال"]] }],
      check: { q: "___ a significant rise in unemployment since 2020.", o: ["There was", "There has been"], a: 1, why: "`since 2020` ← مضارع تام: `There has been`." } },

    { k: "There أم It", h: "There للجديد · It للمعروف",
      why: [
        "`There` تقدم شيئًا **جديدًا** لأول مرة. بعد أن صار معروفًا، نشير إليه بـ `It`.",
        "وانتبه للكتابة: `there` (يوجد) · `they're` (they are) · `their` (ملكهم). النطق واحد."
      ],
      show: [{ t: "ex", items: [["{s:There}'s a new café. {s:It}'s next to the bank.", "جديد ← There · معروف ← It"], ["{s:There} are two cars. {s:They're} red. {s:Their} owner is Ali.", ""]] }],
      check: { q: "___ are three options.", o: ["Their", "There", "They're"], a: 1, why: "«يوجد» ← `There`." } }
  ],
  sum: [
    { h: "يوجد", en: ["{s:There} {v:is} a… · {s:There} {v:are} two…"] },
    { h: "الأزمنة", en: ["there was · there will be · there has been"] },
    { h: "لا تقل", en: ["In my city have… · It has a mall…"] },
    { h: "There / It", en: ["There's a café. It's new."] }
  ]
};

// طبّق على نفسك
window.LESSONS[85].apply = [
  {"p": "صف حيّك: ماذا يوجد فيه وماذا لا يوجد.", "use": "There {a:is} a … · There {a:are} some … · There {a:isn't} any …", "m": ["There is a big mosque in my street. There are two supermarkets nearby. There isn't a cinema."], "c": [["`There is` + مفرد", "\\bthere (is|'s)\\s+(a|an|one)\\b"], ["`There are` + جمع", "\\bthere are\\s+\\w+"], ["لم تكتب `It has` أو `there have` بمعنى يوجد", "!\\b(there have|there has)\\s+(a|an|many|some|two)\\b"]]},
  {"p": "اكتب جملة بـ `there was / there were / there will be`.", "use": "There {a:were} … · There {a:will be} …", "m": ["There were many people at the wedding. There will be a new hospital next year."], "c": [["`there` + زمن آخر", "\\bthere (was|were|will be|has been|have been)\\b"]]}
];
