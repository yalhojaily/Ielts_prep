window.LESSONS = window.LESSONS || {};
window.LESSONS[63] = {
  steps: [
    { k: "الفكرة", h: "a للنكرة · the للمعرفة · *لا شيء* للعام",
      why: [
        "هذه من أصعب القواعد على العرب، لأن «ال» العربية تُستخدم أكثر بكثير من `the`. نقول «الماء ضروري» و«الحياة جميلة»، والإنجليزية لا تضع `the` هنا.",
        "الفكرة: `a / an` = واحد غير محدد. `the` = شيء محدد يعرفه السامع. **بلا أداة** = الحديث العام عن جمع أو غير معدود."
      ],
      show: [{ t: "cards", items: [
        { i: "plus", h: "a / an", txt: "واحد · أول مرة نذكره", en: "I saw {k:a} cat in the garden." },
        { i: "target", h: "the", txt: "محدد · يعرفه السامع", en: "{k:The} cat was black." },
        { i: "globe", h: "بلا أداة", txt: "كلام عام", en: "Cats are independent." }
      ] }],
      check: { q: "___ life is beautiful.", o: ["The", "A", "(nothing)"], a: 2, why: "كلام عام عن الحياة ← بلا أداة: `Life is beautiful.`" } },

    { k: "a أم an", h: "الصوت، لا الحرف",
      why: [
        "`an` قبل **صوت** علة، و`a` قبل **صوت** ساكن. المهم هو النطق لا الكتابة.",
        "`university` تبدأ بحرف علة لكن تُنطق «يو» (ساكن) ← `a university`. و`hour` تبدأ بـ h لكنها صامتة ← `an hour`."
      ],
      show: [{ t: "build", lab: "اختر الكلمة",
        opts: [["book", "{k:a} book", "", 0], ["apple", "{k:an} apple", "", 1], ["university", "{k:a} university", "تُنطق «يو»", 0], ["hour", "{k:an} hour", "h صامتة", 1], ["engineer", "{k:an} engineer", "", 1], ["European", "{k:a} European", "تُنطق «يو»", 0]],
        groups: [{ h: "a + صوت ساكن" }, { h: "an + صوت علة" }] }],
      check: { q: "She's ___ honest person.", o: ["a", "an"], a: 1, why: "`honest` الـ h صامتة، والصوت الأول علة ← `an`." } },

    { k: "الكلام العام", h: "«الناس» و«الماء»… *بلا* the",
      why: [
        "عندما تتحدث عن شيء **عمومًا** (كل الماء، كل الناس، التعليم كمفهوم) لا تضع أداة مع الجمع وغير المعدود.",
        "استخدم `the` فقط عندما تقصد مجموعة **محددة** يعرفها السامع."
      ],
      show: [{ t: "compare", cols: [
        { h: "عام ← بلا أداة", c: "subj", en: ["Water is essential.", "People like music.", "Education is important."] },
        { h: "محدد ← the", c: "accent", en: ["{k:The} water in this bottle is cold.", "{k:The} people in my office are friendly."] }
      ] }],
      check: { q: "___ education is important for every child.", o: ["The", "(nothing)"], a: 1, why: "التعليم كمفهوم عام ← بلا أداة." } },

    { k: "الوظائف", h: "He's *an* engineer",
      why: [
        "في العربية نقول «هو مهندس» بلا أداة. في الإنجليزية الاسم المعدود المفرد **لا يقف وحده** أبدًا، فنحتاج `a / an` مع المهنة.",
        "قاعدة ذهبية: الاسم المعدود المفرد يحتاج دائمًا أداة أو كلمة قبله (`a, the, my, this`)."
      ],
      show: [{ t: "fix", items: [["He is engineer.", "He is {k:an} engineer.", ""], ["I have car.", "I have {k:a} car.", ""]] }],
      check: { q: "My sister is ___ doctor.", o: ["(nothing)", "a", "the"], a: 1, why: "المهنة مع اسم معدود مفرد ← `a doctor`." } },

    { k: "حالات the", h: "متى نضع the دائمًا؟",
      why: ["هذه الأسماء تأخذ `the` لأنها فريدة أو محددة بطبيعتها، فاحفظها كمجموعات:"],
      show: [{ t: "row", items: [
        { t: "cards", items: [{ i: "check", h: "مع the", tags: ["the sun · the moon", "the Red Sea · the Nile", "the USA · the UK · the UAE", "the best · the first", "play the piano"] }] },
        { t: "cards", items: [{ i: "x", h: "بلا أداة", tags: ["Saudi Arabia · Riyadh", "have breakfast", "play football", "speak Arabic", "go to work / bed"] }] }
      ] }],
      check: { q: "I went to ___ Saudi Arabia last year.", o: ["the", "(nothing)"], a: 1, why: "معظم الدول بلا أداة." } }
  ],
  sum: [
    { h: "a / an", en: ["{k:a} book · {k:an} hour · He's {k:an} engineer."] },
    { h: "the", en: ["{k:the} cat (التي ذكرتها) · {k:the} sun"] },
    { h: "بلا أداة", en: ["Life is beautiful. · People like music."] },
    { h: "قاعدة ذهبية", txt: "الاسم المعدود المفرد لا يقف وحده" }
  ]
};

// تعمّق
window.LESSONS[63].steps.push(
  { k: "أول مرة ثم the", h: "a عند *أول* ذكر · the بعدها",
    why: [
      "عندما تذكر شيئًا لأول مرة لا يعرفه السامع، تستخدم `a / an`. بعد أن ذكرته صار معروفًا لكما معًا، فتستخدم `the`.",
      "الفكرة: `the` تعني «الذي تعرفه أنت أيضًا». لذلك نقول `the sun` (واحدة يعرفها الجميع) و`Close the door` (الباب الذي نراه كلانا)."
    ],
    show: [{ t: "ex", items: [
      ["I bought {k:a} laptop and {k:a} phone. {k:The} laptop was cheap, but {k:the} phone was expensive.", "أول ذكر ← a · ثم ← the"],
      ["Can you close {k:the} window, please?", "النافذة التي نراها كلانا"],
      ["{k:The} moon is very bright tonight.", "قمر واحد يعرفه الجميع"]
    ] }],
    check: { q: "We stayed in a hotel near the beach. ___ hotel had a big pool.", o: ["A", "The"], a: 1, why: "الفندق ذُكر من قبل ← معروف ← `The`." } },

  { k: "اختبر الفرق", h: "عام أم محدد؟ اختر الجملة",
    why: [
      "أكثر خطأ عند العرب: وضع `the` في الكلام العام لأننا نقول «ال» في العربية.",
      "اختبار سريع: هل تتحدث عن **كل** الأشياء من هذا النوع (عام) أم عن مجموعة **محددة** تعرفها؟ العام بلا أداة."
    ],
    show: [{ t: "build", lab: "اختر",
      opts: [
        ["عام", "Money can't buy happiness.", "كل المال، كمفهوم ← بلا the", 0],
        ["محدد", "{k:The} money in my wallet is not enough.", "مال محدد ← the", 1],
        ["عام", "Children need love.", "كل الأطفال ← بلا the", 0],
        ["محدد", "{k:The} children in my class are clever.", "أطفال محددون ← the", 1],
        ["عام", "Technology has changed education.", "مفاهيم عامة ← بلا the", 0]
      ],
      groups: [{ h: "عام ← بلا أداة" }, { h: "محدد ← the" }] }],
    check: { q: "___ technology is changing our lives.", o: ["The", "(nothing)"], a: 1, why: "التكنولوجيا كمفهوم عام ← بلا أداة." } },

  { k: "في سياق", h: "اقرأ: الأدوات في فقرة مقال",
    why: ["في مقالات IELTS يكثر الكلام العام، لذلك تكثر الأسماء بلا أداة. لاحظ كل `the` في الفقرة: لماذا جاءت؟"],
    show: [{ t: "passage", h: "فقرة من مقال",
      en: "Education is the key to success in modern society. Students who have access to technology often perform better, and {k:the} internet has made information available to everyone. However, {k:the} cost of {k:a} good university is rising, and {k:the} government should help families with {k:the} lowest incomes.",
      ar: "التعليم مفتاح النجاح في المجتمع الحديث. الطلاب الذين يملكون وصولًا إلى التكنولوجيا يؤدون غالبًا بشكل أفضل، وجعل الإنترنت المعلومات متاحة للجميع. لكن تكلفة الجامعة الجيدة ترتفع، وعلى الحكومة أن تساعد الأسر ذات الدخل الأدنى.",
      note: "`Education, Students, technology, information` = عام بلا أداة. `the internet / the government` = واحد معروف. `the cost of` = محدد بـ of. `the lowest` = تفضيل." }],
    check: { q: "Why is there no article before \"Education\" at the start?", o: ["It is used in a general sense.", "It is a proper name."], a: 0, why: "التعليم كمفهوم عام ← بلا أداة." } }
);
