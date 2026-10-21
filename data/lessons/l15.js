window.LESSONS = window.LESSONS || {};
window.LESSONS[15] = {
  steps: [
    { k: "الفكرة", h: "كنتُ أفعل… *ولم أعد*",
      why: [
        "`used to` + الفعل الأصلي تعني: هذا كان عادة أو حالة في الماضي، والآن **لم يعد صحيحًا**.",
        "الماضي البسيط يقول ما حدث فقط. أما `used to` فتضيف معنى المقارنة: كان، والآن تغيّر."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "dots", from: -0.95, to: -0.3, n: 6, c: "accent", label: "I used to play football." }, { m: "x", at: 0, label: "now: not anymore" }],
        legend: [["accent", "تكرار في الماضي ثم توقف"]] }],
      check: { q: "I ___ in Taif, but now I live in Riyadh.", o: ["use to live", "used to live", "used to living"], a: 1, why: "حالة في الماضي انتهت: `used to` + الفعل الأصلي `live`." } },

    { k: "البناء", h: "النفي والسؤال: use *بدون* d",
      why: [
        "في الإثبات نكتب `used to`. في النفي والسؤال نستخدم `did / didn't`، وتعلمت أن الفعل بعد `did` يعود إلى أصله، لذلك نكتب `use to` بدون d.",
        "وبعد `to` دائمًا الفعل الأصلي، لا ing."
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:I} {a:used to} {v:live} in Taif."], ["نفي", "{s:I} {a:didn't} {a:use to} {v:like} coffee."], ["سؤال", "{a:Did} {s:you} {a:use to} {v:play} games?"]] },
        { t: "fix", items: [["Did you used to play tennis?", "{a:Did} you {a:use to} {v:play} tennis?", ""], ["I use to live in Jeddah.", "I {a:used to} {v:live} in Jeddah.", "في الإثبات `used`."]] }],
      check: { q: "I didn't ___ like vegetables.", o: ["used to", "use to"], a: 1, why: "بعد `didn't` نكتب `use to` بدون d." } },

    { k: "would", h: "would للذكريات المتكررة",
      why: [
        "`would` + الفعل الأصلي تصف أيضًا أفعالًا تكررت في الماضي، وتستعمل كثيرًا عند سرد الذكريات.",
        "لكنها تصلح **للأفعال فقط** (أشياء نفعلها)، ولا تصلح للحالات: السكن، الملكية، المشاعر، الشكل. هذه لها `used to` وحدها."
      ],
      show: [{ t: "decide", q: "هل هو فعل متكرر (حدث) أم حالة؟",
        opts: [
          { lab: "حدث متكرر", h: "used to أو would", en: ["We {a:would} {v:swim} every evening.", "We {a:used to} {v:swim} every evening."], c: "verb" },
          { lab: "حالة", h: "used to فقط", en: ["I {a:used to} {v:have} long hair.", "There {a:used to} {v:be} a cinema here."], c: "accent" }
        ] }],
      check: { q: "When I was a child, I ___ a dog.", o: ["would have", "used to have"], a: 1, why: "امتلاك كلب حالة، و`would` لا تصلح للحالات." } },

    { k: "لا تخلط", h: "used to ≠ be used to",
      why: [
        "`be used to` تركيب مختلف تمامًا: يعني «معتاد على» شيء ما الآن، ويأتي بعده اسم أو فعل مع `ing`.",
        "الفرق في وجود `be` (am / is / are) قبلها."
      ],
      show: [{ t: "compare", cols: [
        { h: "used to + فعل", c: "accent", txt: "عادة في الماضي انتهت", en: ["I {a:used to} {v:wake} up early."] },
        { h: "be used to + ing", c: "subj", txt: "معتاد على (الآن)", en: ["I {a:am used to} {v:waking} up early."] }
      ] }],
      check: { q: "\"I'm used to driving in Riyadh.\" means:", o: ["I drove in Riyadh in the past.", "Driving in Riyadh is normal for me now."], a: 1, why: "`be used to` = معتاد على، والكلام عن الآن." } }
  ],
  sum: [
    { h: "used to", txt: "عادة أو حالة ماضية انتهت", en: ["I {a:used to} {v:live} here."] },
    { h: "نفي وسؤال", en: ["{a:didn't use to} · {a:Did} you {a:use to}…?"] },
    { h: "would", txt: "للأفعال المتكررة فقط", en: ["We {a:would} {v:play} outside."] },
    { h: "لا تخلط", en: ["I'm {a:used to} {v:waking} early. = معتاد"] }
  ]
};
