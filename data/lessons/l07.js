window.LESSONS = window.LESSONS || {};
window.LESSONS[7] = {
  steps: [
    { k: "الفكرة", h: "حدث *انتهى* في وقت معروف",
      why: [
        "الماضي البسيط يصف شيئًا بدأ وانتهى قبل الآن، والمتكلم يعرف متى حدث (أمس، سنة 2019، قبل ثلاث سنوات).",
        "الحدث مقطوع عن الحاضر: لا يهمنا أثره الآن، بل أنه وقع وانتهى هناك."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "dot", at: -0.55, c: "accent", label: "I visited Istanbul in 2019." }],
        legend: [["accent", "نقطة في الماضي = **حدث منتهٍ في وقت معروف**"]] }],
      check: { q: "I ___ my degree in 2015.", o: ["finish", "finished", "am finishing"], a: 1, why: "`in 2015` وقت منتهٍ في الماضي، فنستخدم الماضي البسيط." } },

    { k: "شكل واحد", h: "فعل واحد مع *كل* الضمائر",
      why: [
        "خبر جيد: الماضي البسيط لا يهتم بالفاعل. لا توجد s للغائب ولا تغيير مع الجمع: `I worked, she worked, they worked`.",
        "الاستثناء الوحيد هو فعل `be`: `was` مع `I / he / she / it`، و`were` مع `you / we / they`."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {v:work|ed} yesterday.", "", 0], ["She", "{s:She} {v:work|ed} yesterday.", "", 0], ["They", "{s:They} {v:work|ed} yesterday.", "", 0], ["He", "{s:He} {v:work|ed} yesterday.", "", 0]],
        groups: [{ h: "كل الضمائر", res: "{v:worked}" }] },
        { t: "map", cols: [{ h: "be في الماضي", c: "be", k: "a", rows: [["I · he · she · it", "was"], ["you · we · they", "were"]] }] }],
      check: { q: "They ___ happy with the result.", o: ["was", "were"], a: 1, why: "مع `they` نستخدم `were`." } },

    { k: "كتابة ed", h: "الأفعال المنتظمة: + ed",
      why: [
        "معظم الأفعال تأخذ `ed`. وكما في `s` و`ing`، هناك تعديلات صغيرة تحافظ على النطق:",
        "إذا انتهى الفعل بـ `e` نضيف `d` فقط. الساكن + `y` يصبح `ied`. والفعل القصير ساكن-علة-ساكن نضاعف آخره (`stop → stopped`)."
      ],
      show: [{ t: "rules", tryLab: "اضغط على فعل ↑",
        items: [
          { cond: "معظم الأفعال", sym: "+ ed", pairs: [["work", "work", "ed"], ["play", "play", "ed"]] },
          { cond: "ينتهي بـ e", sym: "+ d", pairs: [["live", "live", "d"], ["move", "move", "d"]] },
          { cond: "ساكن + y", sym: "y → ied", pairs: [["study", "stud", "ied"], ["try", "tr", "ied"]] },
          { cond: "ساكن · علة · ساكن", sym: "+ حرف + ed", pairs: [["stop", "stopp", "ed"], ["plan", "plann", "ed"]] }
        ],
        try: [["visit", "visit", "ed", 0], ["enjoy", "enjoy", "ed", 0], ["arrive", "arrive", "d", 1], ["carry", "carr", "ied", 2], ["drop", "dropp", "ed", 3]] }],
      check: { q: "She ___ medicine in Egypt.", o: ["studyed", "studied", "studed"], a: 1, why: "`study` = ساكن + y، فنحوّل y إلى `ied`." } },

    { k: "الأفعال الشاذة", h: "أفعال لها شكل خاص *يُحفظ*",
      why: [
        "أكثر الأفعال استعمالًا في الكلام اليومي شاذة، لأنها قديمة جدًا في اللغة وحافظت على أشكالها القديمة.",
        "لا قاعدة لها، لكن حفظها في مجموعات متشابهة يسهّل الأمر. ولا نقول `buyed` أو `goed`."
      ],
      show: [{ t: "map", cols: [
        { h: "تغيّر حرف العلة", c: "accent", k: "v", rows: [["go", "went"], ["see", "saw"], ["come", "came"], ["take", "took"], ["get", "got"], ["make", "made"]] },
        { h: "تنتهي بـ ought / aught · ولا تتغير", c: "subj", k: "v", rows: [["buy", "bought"], ["think", "thought"], ["teach", "taught"], ["have", "had"], ["put", "put"], ["cut", "cut"]] }
      ] }],
      check: { q: "Yesterday I ___ a new phone.", o: ["buyed", "bought", "buy"], a: 1, why: "`buy` شاذ، وماضيه `bought`." } },

    { k: "كلمات الوقت", h: "ago تأتي *بعد* المدة",
      why: [
        "كلمات مثل `yesterday, last week, in 2010` تخبرك أن الوقت منتهٍ، فتختار الماضي البسيط.",
        "و`ago` = «قبل» لكنها تأتي **بعد** المدة: `three years ago`. لا نقول `before three years`، فهذه ترجمة حرفية من العربية."
      ],
      show: [{ t: "fix", items: [["Before three years I moved here.", "I moved here three years {k:ago}.", "المدة أولًا ثم `ago`."]] },
        { t: "cards", items: [{ i: "calendar", h: "كلمات الماضي البسيط", tags: ["yesterday", "last week", "last year", "in 2010", "two days ago", "when I was a child"] }] }],
      check: { q: "I started this job ___.", o: ["before two years", "two years ago", "since two years"], a: 1, why: "`ago` تأتي بعد المدة: `two years ago`." } },

    { k: "لا was مع فعل", h: "was لا تجتمع مع فعل ماضٍ",
      why: [
        "`was` فعل مستقل للحالة والمكان: `It was cold.` ولا نضعه قبل فعل آخر في الماضي البسيط.",
        "الجملة في الماضي البسيط فيها فعل واحد: إما `was` وإما `went`، لا الاثنان."
      ],
      show: [{ t: "fix", items: [["I was go to the market.", "I {v:went} to the market.", ""], ["She was finished the work.", "She {v:finished} the work.", ""]] }],
      check: { q: "Choose the correct sentence.", o: ["I was see him yesterday.", "I saw him yesterday."], a: 1, why: "فعل واحد في الماضي البسيط: `saw`." } }
  ],
  sum: [
    { h: "متى؟", txt: "حدث انتهى في وقت معروف", en: ["I {v:visited} Istanbul in 2019."] },
    { h: "شكل واحد", en: ["I / she / they {v:worked}", "was (I/he/she/it) · were (you/we/they)"] },
    { h: "منتظم وشاذ", en: ["lived · studied · stopped", "went · saw · bought"] },
    { h: "الوقت", en: ["yesterday · last week · three years {k:ago}"] }
  ]
};
