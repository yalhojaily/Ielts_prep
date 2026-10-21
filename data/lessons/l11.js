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
