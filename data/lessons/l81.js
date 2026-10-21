window.LESSONS = window.LESSONS || {};
window.LESSONS[81] = {
  steps: [
    { k: "الفكرة", h: "جملة تحدد *أي واحد* نقصد",
      why: [
        "`The man is a pilot.` أي رجل؟ لا نعرف. نضيف جملة صلة تحدده: `The man who lives next door is a pilot.`",
        "بدون هذه الجملة لا يكتمل المعنى، لذلك اسمها «محددة» ولا نضع حولها فواصل."
      ],
      show: [{ t: "trans", items: [{ from: "The man is a pilot. (أي رجل؟)", to: "The man {k:who lives next door} is a pilot.", chg: ["جملة الصلة حددت الرجل"] }] }],
      check: { q: "The woman ___ lives next door is a teacher.", o: ["(nothing)", "who"], a: 1, why: "`who` فاعل الجملة (هي تسكن)، فلا يُحذف." } },

    { k: "who · which · that", h: "شخص أم شيء؟",
      why: [
        "`who` للأشخاص، و`which` للأشياء، و`that` تصلح للاثنين (وهي الأشيع في الكلام).",
        "و`whose` للملكية، و`where` للمكان، و`when` للزمان."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["شخص", "The man {k:who} lives next door…", "", 0], ["شيء", "The car {k:which} I bought…", "", 0], ["الاثنان", "The car {k:that} I bought…", "", 0], ["ملكية", "The woman {k:whose} son won…", "", 1], ["مكان", "the city {k:where} I was born", "", 1], ["زمان", "the day {k:when} we met", "", 1]],
        groups: [{ h: "who / which / that" }, { h: "whose / where / when" }] },
        { t: "fix", items: [["The man which I met was friendly.", "The man {k:who} I met…", "شخص ← who"]] }],
      check: { q: "This is the student ___ phone rang in class.", o: ["who", "whose"], a: 1, why: "ملكية (هاتفه) ← `whose`." } },

    { k: "لا تكرر الضمير", h: "الكتاب الذي قرأتُ*ه*… بلا it",
      why: [
        "في العربية نقول «الكتاب الذي قرأتُه» (الهاء تعود للكتاب). في الإنجليزية `that` نفسها تقوم بهذا الدور، فلا نضيف `it`.",
        "`the book that I read it` خطأ شائع جدًا عند العرب."
      ],
      show: [{ t: "fix", items: [["The book that I read it was long.", "The book {k:that} I read was long.", ""], ["the house which we bought it", "the house {k:which} we bought", ""]] }],
      check: { q: "The film that we watched ___ boring.", o: ["it was", "was"], a: 1, why: "لا نكرر الضمير، والفعل `was` للجملة الرئيسية." } },

    { k: "متى نحذف", h: "نحذف who / that إذا جاء بعده *فاعل*",
      why: [
        "انظر إلى الكلمة بعد `who / which / that`:",
        "إذا جاء **فعل** مباشرة ← هي الفاعل ولا تُحذف. إذا جاء **فاعل جديد** (I, we, my friend) ← هي المفعول ويمكن حذفها."
      ],
      show: [{ t: "compare", cols: [
        { h: "بعدها فعل ← لا تُحذف", c: "neg", en: ["the man {k:who} {v:called}", "people {k:who} {v:work} here"] },
        { h: "بعدها فاعل ← يمكن حذفها", c: "verb", en: ["the man ({k:who}) {s:I} met", "the book ({k:that}) {s:I'm} reading"] }
      ] }],
      check: { q: "In which sentence can we remove \"that\"?", o: ["The bus that goes to the airport.", "The bus that I took."], a: 1, why: "بعدها فاعل (`I`) ← مفعول ← يمكن حذفها." } },

    { k: "where", h: "where + جملة *كاملة*",
      why: [
        "`where` = `in which`، ويأتي بعدها فاعل وفعل: `the town where I grew up`.",
        "إذا جاء بعد المكان فعل مباشرة (المدينة **تملك**)، فالمدينة فاعل، ونستخدم `which / that`."
      ],
      show: [{ t: "compare", cols: [{ h: "where + فاعل + فعل", c: "subj", en: ["the town {k:where} {s:I} grew up"] }, { h: "that + فعل", c: "accent", en: ["the town {k:that} {v:has} a castle"] }] }],
      check: { q: "This is the city ___ has the biggest mosque.", o: ["where", "that"], a: 1, why: "بعدها فعل مباشرة ← `that`." } }
  ],
  sum: [
    { h: "الأدوات", en: ["who (شخص) · which (شيء) · that (الاثنان)"] },
    { h: "أخرى", en: ["whose · where · when"] },
    { h: "لا تكرر", en: ["the book that I read (لا it)"] },
    { h: "الحذف", en: ["the man (who) I met"] }
  ]
};
