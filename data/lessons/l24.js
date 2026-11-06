window.LESSONS = window.LESSONS || {};
window.LESSONS[24] = {
  steps: [
    { k: "الفكرة", h: "المفعول به *يتقدم* ويصبح فاعلًا",
      why: [
        "في الجملة العادية (المبني للمعلوم) يبدأ الكلام بمن فعل الفعل. في المبني للمجهول نبدأ بالشيء الذي **وقع عليه** الفعل.",
        "نفعل ذلك عندما يكون الفاعل غير معروف (سُرقت سيارتي)، أو غير مهم، أو عندما نريد التركيز على الشيء نفسه."
      ],
      show: [{ t: "trans", items: [{ from: "{s:People} {v:speak} {o:Arabic} in Morocco.", to: "{s:Arabic} {a:is} {v:spoken} in Morocco.", chg: ["المفعول `Arabic` صار في الأول", "be + تصريف ثالث", "`people` حُذف"] }] }],
      check: { q: "My car ___ last night.", o: ["stole", "was stolen", "is stealing"], a: 1, why: "لا نعرف السارق، والسيارة وقع عليها الفعل ← مجهول: `was stolen`." } },

    { k: "البناء", h: "be + التصريف الثالث",
      why: [
        "الفعل الأساسي في المجهول **دائمًا** تصريف ثالث (`made, built, spoken`).",
        "والزمن كله يظهر في `be` فقط. غيّر الزمن وراقب كيف يتغير `be` بينما يبقى `built` ثابتًا."
      ],
      show: [{ t: "build", lab: "اختر الزمن",
        opts: [["مضارع بسيط", "{s:Houses} {a:are} {v:built} here.", "", 0], ["ماضٍ بسيط", "{s:The house} {a:was} {v:built} in 1990.", "", 0],
               ["مضارع مستمر", "{s:A hospital} {a:is being} {v:built}.", "", 0], ["مضارع تام", "{s:The bridge} {a:has been} {v:built}.", "", 0], ["مستقبل", "{s:A school} {a:will be} {v:built}.", "", 0]],
        groups: [{ h: "be يتغير · built ثابت" }] }],
      check: { q: "The car ___ every year.", o: ["is repair", "is repaired", "repairs"], a: 1, why: "be + التصريف الثالث: `is repaired`." } },

    { k: "متى نستخدمه", h: "ثلاثة أسباب",
      why: ["الهدف دائمًا: أن نضع في بداية الجملة الشيء الأهم بالنسبة لنا."],
      show: [{ t: "cards", items: [
        { i: "question", h: "الفاعل مجهول أو غير مهم", en: "My phone was stolen." },
        { i: "target", h: "التركيز على الشيء", en: "English is spoken in many countries." },
        { i: "book", h: "الأسلوب العلمي والرسمي", en: "The samples are tested in a lab.", ar: "مهم في Writing Task 1 (وصف العمليات)" }
      ] }],
      check: { q: "Best for describing a process (Task 1):", o: ["Workers pack the bottles.", "The bottles are packed."], a: 1, why: "في وصف العمليات نركز على المنتج لا على العامل ← مجهول." } },

    { k: "by", h: "by + الفاعل… *عند الحاجة* فقط",
      why: [
        "إذا كان من فعل الفعل معلومة مهمة أو جديدة، نذكره بعد `by`.",
        "أما إذا كان واضحًا أو غير مهم (`by people`, `by someone`) فنحذفه."
      ],
      show: [{ t: "compare", cols: [
        { h: "معلومة مهمة ← نذكرها", c: "verb", en: ["This house {a:was} {v:designed} {k:by} a famous architect."] },
        { h: "غير مهمة ← نحذفها", c: "neg", en: ["Rice {a:is} {v:grown} in Asia. (لا: … {d:by people})"] }
      ] }],
      check: { q: "Which sentence is most natural?", o: ["The letter was delivered by someone.", "The letter was delivered this morning."], a: 1, why: "`by someone` لا تضيف معلومة، فنحذفها." } },

    { k: "أفعال لازمة", h: "happen و arrive *لا* تُبنى للمجهول",
      why: [
        "المجهول يحتاج مفعولًا يتحول إلى فاعل. الأفعال التي لا تأخذ مفعولًا أصلًا (`happen, arrive, die, sleep, go`) لا يمكن أن تكون مجهولة.",
        "في العربية نقول «حدث الحادث» ولا نقول «أُحدث». كذلك في الإنجليزية: `It happened`."
      ],
      show: [{ t: "fix", items: [["The accident was happened at night.", "The accident {v:happened} at night.", ""], ["He was died in 2010.", "He {v:died} in 2010.", ""]] }],
      check: { q: "The problem ___ last week.", o: ["was happened", "happened"], a: 1, why: "`happen` فعل لازم، لا يُبنى للمجهول." } }
  ],
  sum: [
    { h: "البناء", en: ["{a:be} + {v:done}"] },
    { h: "الزمن في be", en: ["{a:is} / {a:was} / {a:has been} / {a:will be} {v:built}"] },
    { h: "by", txt: "فقط إذا كان الفاعل مهمًا", en: ["designed {k:by} a famous architect"] },
    { h: "لا مجهول", en: ["happen · arrive · die"] }
  ]
};

// تعمّق
window.LESSONS[24].steps.push(
  { k: "خطوات التحويل", h: "حوّل أي جملة إلى المجهول في 4 خطوات",
    why: [
      "التحويل له خطوات ثابتة، وإذا اتبعتها لن تخطئ:",
      "**1.** خذ المفعول وضعه في أول الجملة. **2.** حدّد زمن الفعل الأصلي. **3.** ضع `be` بنفس الزمن (ومطابقًا للفاعل الجديد). **4.** أضف التصريف الثالث، ثم `by` + الفاعل إذا كان مهمًا."
    ],
    show: [{ t: "chain", items: [
      { h: "الجملة", en: "The company {v:employs} 500 people." },
      { h: "المفعول أولًا", en: "500 people …" },
      { h: "be بنفس الزمن", en: "500 people {a:are} …", ar: "مضارع + جمع" },
      { h: "+ التصريف الثالث", en: "500 people {a:are} {v:employed} by the company." }
    ] },
      { t: "trans", items: [
        { h: "ماضٍ", from: "They {v:built} the bridge in 1990.", to: "The bridge {a:was} {v:built} in 1990." },
        { h: "مضارع تام", from: "Someone {a:has} {v:stolen} my bike.", to: "My bike {a:has been} {v:stolen}." }
      ] }],
    check: { q: "\"They are repairing the road.\" → The road ___.", o: ["is repaired", "is being repaired", "has repaired"], a: 1, why: "مضارع مستمر ← `is being` + التصريف الثالث." } },

  { k: "في سياق", h: "اقرأ: وصف عملية (Writing Task 1)",
    why: ["في IELTS Task 1 قد يُطلب منك وصف عملية تصنيع. المجهول هنا هو الأسلوب الطبيعي، لأن المهم هو المنتج وما يحدث له، لا العامل."],
    show: [{ t: "passage", h: "How chocolate is made",
      en: "First, the cocoa beans {a:are} {v:picked} and {v:left} in the sun to dry. They {a:are} then {v:transported} to a factory, where they {a:are} {v:roasted} and {v:crushed}. Next, sugar and milk {a:are} {v:added}, and the mixture {a:is} {v:heated}. Finally, the chocolate {a:is} {v:poured} into moulds and {v:packed}.",
      ar: "أولًا تُقطف حبوب الكاكاو وتُترك في الشمس لتجف. ثم تُنقل إلى مصنع حيث تُحمّص وتُطحن. بعد ذلك يُضاف السكر والحليب ويُسخّن الخليط. وأخيرًا تُصب الشوكولاتة في قوالب وتُعبّأ.",
      note: "كل الأفعال مجهولة لأن الكلام عن الحبوب والشوكولاتة. ولاحظ كلمات الترتيب: `First, then, Next, Finally`." }],
    check: { q: "Why don't we write \"Workers pick the beans\"?", o: ["Because the workers are not important here.", "Because \"pick\" is irregular."], a: 0, why: "المهم المنتج لا العامل ← مجهول." } }
);
