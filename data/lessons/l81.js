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

// تعمّق
window.LESSONS[81].steps.push(
  { k: "دمج جملتين", h: "اصنع جملة صلة من جملتين",
    why: [
      "جملة الصلة في الحقيقة جملتان دمجناهما. الطريقة: ابحث عن الاسم المشترك في الجملتين، واستبدل الضمير في الجملة الثانية بـ `who / which / that`، ثم ضعها **مباشرة بعد** الاسم.",
      "انتبه: الضمير الأصلي (`he, it, them`) **يختفي**، لأن `who / which` أخذت مكانه. لهذا `that I read it` خطأ."
    ],
    show: [{ t: "trans", items: [
      { h: "فاعل", from: "I met a man. {s:He} speaks six languages.", to: "I met a man {k:who} speaks six languages.", chg: ["He ← who"] },
      { h: "مفعول", from: "This is the phone. I bought {o:it} yesterday.", to: "This is the phone ({k:that}) I bought yesterday.", chg: ["it ← that (يمكن حذفها)"] },
      { h: "ملكية", from: "I know a woman. {s:Her} son is a pilot.", to: "I know a woman {k:whose} son is a pilot.", chg: ["Her ← whose"] },
      { h: "مكان", from: "This is the café. We met {o:there}.", to: "This is the café {k:where} we met.", chg: ["there ← where"] }
    ] }],
    check: { q: "\"I have a friend. His father is a judge.\" →", o: ["I have a friend who his father is a judge.", "I have a friend whose father is a judge."], a: 1, why: "`His` (ملكية) ← `whose`، ولا نكرر `his`." } },

  { k: "في سياق", h: "اقرأ: جمل الصلة في وصف شخص",
    why: ["جمل الصلة تجعل الوصف دقيقًا ومترابطًا، وهي مثالية في IELTS Speaking Part 2 (Describe a person who…). لاحظ أداة الربط في كل مرة."],
    show: [{ t: "passage", h: "Describe a person who inspired you",
      en: "I'd like to talk about my uncle, a man {k:who} taught me a lot. He's an engineer {k:who} built his own company from nothing. He lives in a small town {k:where} everyone knows him. The advice ({k:that}) he gave me when I was young is something ({k:that}) I still follow. He's a person {k:whose} patience I really admire.",
      ar: "أود أن أتحدث عن عمي، الرجل الذي علمني الكثير. هو مهندس بنى شركته من لا شيء. يسكن في بلدة صغيرة يعرفه فيها الجميع. والنصيحة التي أعطاني إياها وأنا صغير شيء ما زلت أتبعه. إنه شخص أعجب حقًا بصبره.",
      note: "`who` = شخص فاعل. `where` = مكان. `(that)` بين قوسين = يمكن حذفها لأن بعدها فاعل (`he`, `I`). `whose` = ملكية." }],
    check: { q: "Why can \"that\" be removed in \"The advice (that) he gave me\"?", o: ["Because a new subject (he) follows it.", "Because advice is uncountable."], a: 0, why: "بعدها فاعل جديد ← هي مفعول ← يمكن حذفها." } }
);

// طبّق على نفسك
window.LESSONS[81].apply = [
  {"p": "عرّف ثلاثة أشياء أو أشخاص بجمل صلة محددة.", "use": "a person {k:who} … · a place {k:where} … · the thing {k:that} …", "m": ["A pharmacist is a person who prepares medicine. A library is a place where you can borrow books. This is the phone that I bought last week."], "c": [["`who` للأشخاص", "\\bwho\\s+\\w+"], ["`which / that` للأشياء", "\\b(which|that)\\s+\\w+"], ["لم تكرر الضمير (`the book that I read it` ✗)", "!\\b(that|which|who)\\s+\\w+\\s+\\w+\\s+(it|him|her|them)\\b\\."]]},
  {"p": "اكتب جملة صلة مع `whose`.", "use": "the man {k:whose} car …", "m": ["I have a friend whose father is a pilot."], "c": [["`whose` + اسم", "\\bwhose\\s+\\w+"]]}
];
