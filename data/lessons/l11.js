window.LESSONS = window.LESSONS || {};
window.LESSONS[11] = {
  steps: [
    { k: "الفكرة", h: "جسر بين *الماضي* والحاضر",
      why: [
        "العربية ليس فيها زمن مثل هذا، لذلك يحتاج انتباهًا. المضارع التام يتحدث عن شيء من الماضي لكن عينك على **الآن**.",
        "إما لأن الوقت غير مهم أو غير محدد (تجربة)، أو لأن الأثر ظاهر الآن، أو لأن الوضع بدأ قبل وما زال مستمرًا."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "arrow", from: -0.7, to: 0, c: "accent", label: "She has worked here since 2018." }, { m: "dot", at: -0.7, c: "accent", label: "2018" }],
        legend: [["accent", "سهم من الماضي ينتهي عند الآن = **مضارع تام**"]] }],
      check: { q: "She ___ here since 2018 (and still works here).", o: ["worked", "has worked", "works"], a: 1, why: "بدأ في الماضي وما زال مستمرًا، فنستخدم المضارع التام." } },

    { k: "البناء", h: "have / has + التصريف الثالث",
      why: [
        "`have` مع `I / you / we / they`، و`has` مع `he / she / it` (نفس قاعدة الـ s).",
        "بعدها يأتي التصريف الثالث (past participle). في الأفعال المنتظمة يشبه الماضي (`worked`)، وفي الشاذة له شكل خاص يُحفظ."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {a:have} {v:finished}.", "", 0], ["They", "{s:They} {a:have} {v:finished}.", "", 0], ["She", "{s:She} {a:has} {v:finished}.", "", 1], ["He", "{s:He} {a:has} {v:finished}.", "", 1]],
        groups: [{ h: "I · you · we · they", res: "{a:have} + {v:done}" }, { h: "he · she · it", res: "{a:has} + {v:done}" }] },
        { t: "table", head: ["الفعل", "الماضي", "التصريف الثالث"], hl: 2, rows: [["go", "went", "gone"], ["see", "saw", "seen"], ["write", "wrote", "written"], ["take", "took", "taken"], ["do", "did", "done"], ["be", "was", "been"]] }],
      check: { q: "She has ___ home.", o: ["went", "gone", "go"], a: 1, why: "بعد `has` يأتي التصريف الثالث: `gone`، لا الماضي `went`." } },

    { k: "ثلاثة استخدامات", h: "متى نختاره؟",
      why: ["كل الاستخدامات فيها رابط بالحاضر: تجربتك حتى الآن، أو نتيجة تراها الآن، أو وضع ما زال قائمًا."],
      show: [{ t: "cards", items: [
        { i: "star", h: "تجربة بلا وقت", en: "I have visited Japan twice.", ar: "متى؟ غير مهم." },
        { i: "eye", h: "نتيجة ظاهرة الآن", en: "I've lost my keys.", ar: "لذلك لا أستطيع الدخول الآن." },
        { i: "arrow", h: "مستمر حتى الآن", en: "I've known him for ten years.", ar: "وما زلت أعرفه." }
      ] }],
      check: { q: "I can't open the door. I ___ my keys.", o: ["lost", "have lost"], a: 1, why: "النتيجة ظاهرة الآن (لا أستطيع فتح الباب)، فنستخدم المضارع التام." } },

    { k: "مع الماضي البسيط", h: "إذا ذكرت الوقت المنتهي ← *ماضٍ بسيط*",
      why: [
        "هذه أهم قاعدة: المضارع التام **لا يأتي** مع وقت ماضٍ محدد (`yesterday, last week, in 2019, ago`).",
        "السبب: هذه الكلمات تقطع الحدث عن الحاضر وتضعه هناك في الماضي، وهذا عمل الماضي البسيط."
      ],
      show: [{ t: "decide", q: "هل ذكرت وقتًا منتهيًا؟ (yesterday, in 2019, ago…)",
        opts: [
          { lab: "نعم", h: "ماضٍ بسيط", en: ["I {v:saw} that film last week."], c: "subj" },
          { lab: "لا", h: "مضارع تام", en: ["I {a:have} {v:seen} that film."], c: "accent" }
        ] }],
      check: { q: "I ___ him yesterday.", o: ["have seen", "saw"], a: 1, why: "`yesterday` وقت منتهٍ، فنستخدم الماضي البسيط." } },

    { k: "for و since", h: "for + مدة · since + بداية",
      why: [
        "مع الأوضاع المستمرة حتى الآن نذكر طول المدة أو نقطة البداية.",
        "`for` + مقدار الوقت (`ten years`). `since` + لحظة البداية (`2014`, `Monday`). في العربية كلاهما «منذ»، لذلك يختلطان."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["ten years", "I {a:have} {v:known} him {k:for} ten years.", "مدة ← for", 0], ["two days", "I {a:have} {v:been} ill {k:for} two days.", "مدة ← for", 0],
               ["2014", "I {a:have} {v:known} him {k:since} 2014.", "نقطة بداية ← since", 1], ["Monday", "I {a:have} {v:been} ill {k:since} Monday.", "نقطة بداية ← since", 1]],
        groups: [{ h: "for", sub: "مدة: ten years, a week" }, { h: "since", sub: "بداية: 2014, Monday, I was a child" }] }],
      check: { q: "I have worked here ___ five years.", o: ["since", "for", "from"], a: 1, why: "`five years` مدة، فنستخدم `for`." } },

    { k: "كلمات مساعدة", h: "ever · never · just · already · yet",
      why: [
        "هذه الكلمات تأتي كثيرًا مع المضارع التام لأنها كلها تتحدث عن «حتى الآن».",
        "`just, already, ever, never` قبل التصريف الثالث. و`yet` في آخر النفي والسؤال."
      ],
      show: [{ t: "table", head: ["الكلمة", "المعنى", "مثال"], rows: [["ever", "في حياتك؟ (سؤال)", "Have you {k:ever} been to Egypt?"], ["never", "أبدًا", "I've {k:never} tried it."], ["just", "للتو", "I've {k:just} eaten."], ["already", "بالفعل", "She's {k:already} left."], ["yet", "بعد (آخر الجملة)", "Have you finished {k:yet}?"]] },
        { t: "note", txt: "`has gone` = ذهب وما زال هناك. `has been` = زار وعاد.", en: "She has gone out. · I have been to Paris twice." }],
      check: { q: "I haven't finished my report ___.", o: ["already", "yet", "just"], a: 1, why: "`yet` في آخر الجملة المنفية." } }
  ],
  sum: [
    { h: "البناء", en: ["{s:I/you/we/they} {a:have} {v:seen}", "{s:he/she/it} {a:has} {v:seen}"] },
    { h: "متى؟", txt: "تجربة · نتيجة الآن · مستمر حتى الآن" },
    { h: "لا مع وقت منتهٍ", en: ["I {v:saw} it yesterday.", "I {a:have} {v:seen} it."] },
    { h: "for / since", en: ["{k:for} ten years · {k:since} 2014"] }
  ]
};

// تعمّق
window.LESSONS[11].steps.push(
  { k: "قصة كاملة", h: "التام يفتح الحديث · البسيط يكمل التفاصيل",
    why: [
      "في الكلام الحقيقي يأتي الزمنان معًا بترتيب ثابت تقريبًا: نبدأ بالمضارع التام لنذكر التجربة أو الخبر **بلا وقت**، ثم بمجرد أن نذكر **متى أو كيف** ننتقل إلى الماضي البسيط.",
      "السبب: السؤال عن التفاصيل (متى؟ أين؟ مع من؟) يربط الحدث بوقت منتهٍ في الماضي، فيصبح ماضيًا بسيطًا.",
      "هذا النمط يتكرر كثيرًا في IELTS Speaking: `Have you ever…?` ثم `When did you…?`"
    ],
    show: [{ t: "chain", items: [
      { h: "خبر بلا وقت", en: "I{a:'ve} {v:been} to Japan.", ar: "مضارع تام" },
      { h: "سؤال عن التفاصيل", en: "{q:When} {a:did} you {v:go}?", ar: "ماضٍ بسيط" },
      { h: "التفاصيل", en: "I {v:went} in 2019. It {v:was} amazing.", ar: "ماضٍ بسيط" }
    ] },
      { t: "ex", items: [
        ["“{a:Have} you ever {v:eaten} sushi?” “Yes, I {v:tried} it last year in Dubai.”", "السؤال بالتام، والتفاصيل بالبسيط"],
        ["“I{a:'ve} {v:lost} my wallet!” “Oh no! Where {a:did} you {v:lose} it?”", "الخبر بالتام، والسؤال عن المكان بالبسيط"]
      ] }],
    check: { q: "\"I've visited Cairo.\" \"Really? When ___ there?\"", o: ["have you been", "did you go"], a: 1, why: "`When` تسأل عن وقت منتهٍ ← ماضٍ بسيط." } },

  { k: "since أم ago", h: "ثلاث طرق للتعبير عن نفس المدة",
    why: [
      "العرب يخلطون كثيرًا بين `since` و`for` و`ago` لأن العربية تستعمل «منذ» لها كلها.",
      "`for` + مدة، و`since` + بداية، وكلاهما مع **المضارع التام** (الوضع مستمر الآن). أما `ago` فتعني «قبل» وتأتي مع **الماضي البسيط** (حدث انتهى)."
    ],
    show: [{ t: "build", lab: "نفس المعلومة بثلاث صيغ (بدأت العمل قبل 5 سنوات)",
      opts: [
        ["for", "I{a:'ve} {v:worked} here {k:for} five years.", "مدة + مضارع تام", 0],
        ["since", "I{a:'ve} {v:worked} here {k:since} 2021.", "نقطة البداية + مضارع تام", 0],
        ["ago", "I {v:started} working here five years {k:ago}.", "حدث البداية انتهى + ماضٍ بسيط", 1]
      ],
      groups: [{ h: "for / since ← مضارع تام", sub: "الوضع مستمر حتى الآن" }, { h: "ago ← ماضٍ بسيط", sub: "لحظة البداية فقط" }] }],
    check: { q: "I moved to Riyadh three years ___.", o: ["for", "since", "ago"], a: 2, why: "`moved` حدث انتهى في الماضي ← `ago`." } },

  { k: "في سياق", h: "اقرأ: إجابة كاملة بالزمنين",
    why: ["هذه إجابة على سؤال IELTS: `How long have you lived in your city?` لاحظ أين جاء المضارع التام وأين تحوّل الكلام إلى الماضي البسيط."],
    show: [{ t: "passage", h: "إجابة في Speaking Part 1",
      en: "I{a:'ve} {v:lived} in Riyadh {k:for} about ten years. My family {v:moved} here when I {v:was} at university. The city {a:has} {v:changed} a lot {k:since} then: they{a:'ve} {v:built} a metro, and many new parks {a:have} {v:opened}. Last year I {v:visited} my hometown, and it {v:felt} very small.",
      ar: "أسكن في الرياض منذ نحو عشر سنوات. انتقلت عائلتي إلى هنا عندما كنت في الجامعة. تغيّرت المدينة كثيرًا منذ ذلك الحين: بنوا قطارًا، وافتُتحت حدائق جديدة كثيرة. في السنة الماضية زرت مدينتي الأصلية، وبدت صغيرة جدًا.",
      note: "التام = الوضع المستمر حتى الآن والتغيرات التي نرى نتيجتها. البسيط = أحداث في وقت منتهٍ (`when I was`، `last year`)." }],
    check: { q: "Why is \"moved\" in the past simple?", o: ["It has a result now.", "It happened at a finished time (when I was at university)."], a: 1, why: "الانتقال مرتبط بوقت منتهٍ ← ماضٍ بسيط." } }
);

// طبّق على نفسك
window.LESSONS[11].apply = [
  {"p": "اكتب ثلاث تجارب في حياتك (لا تذكر متى).", "use": "{s:I}{a:'ve} {k:never} {v:been} to … · {s:I}{a:'ve} {v:read} …", "m": ["I've been to Turkey twice. I've never tried sushi. I've read many books about investing."], "c": [["استخدمت `have / has + v3`", "\\b(have|has|'ve|'s)\\s+(never\\s+|already\\s+|just\\s+|ever\\s+)?(been|seen|read|tried|visited|done|had|eaten|met|written|made|lived|worked|learned|learnt|travelled|traveled|\\w+ed)\\b"], ["لم تذكر وقتًا محددًا (`yesterday / in 2019`)", "!\\b(yesterday|last (week|year|month)|in \\d{4}|ago)\\b"]]},
  {"p": "اكتب عن شيء بدأ في الماضي ومستمر حتى الآن (`for / since`).", "use": "{s:I}{a:'ve} {v:lived} here {k:for} … / {k:since} …", "m": ["I've lived in Riyadh since 2010. I've known my best friend for twenty years."], "c": [["استخدمت `for` أو `since`", "\\b(for|since)\\b"], ["استخدمت `have / has + v3`", "\\b(have|has|'ve|'s)\\s+(\\w+ed|known|been|had|lived)\\b"]]}
];
