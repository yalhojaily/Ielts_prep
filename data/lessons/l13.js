window.LESSONS = window.LESSONS || {};
window.LESSONS[13] = {
  steps: [
    { k: "الفكرة", h: "الماضي *قبل* الماضي",
      why: [
        "عندما نحكي عن حدثين في الماضي، ونريد أن نوضح أن أحدهما وقع **قبل** الآخر، نضع الأسبق في الماضي التام.",
        "الحدث الأحدث يبقى ماضيًا بسيطًا، وهو نقطة المرجع. والماضي التام يرجع خطوة إلى الخلف منها."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "dot", at: -0.75, c: "accent", label: "the train had left" }, { m: "dot", at: -0.35, c: "subj", label: "I arrived", row: 1 }],
        legend: [["accent", "الأسبق ← **had + التصريف الثالث**"], ["subj", "الأحدث ← **ماضٍ بسيط**"]] }],
      check: { q: "When I arrived, the train ___.", o: ["left", "had left"], a: 1, why: "القطار غادر **قبل** وصولي، فالحدث الأسبق بالماضي التام." } },

    { k: "البناء", h: "had + التصريف الثالث",
      why: [
        "`had` واحدة مع كل الضمائر، وبعدها التصريف الثالث نفسه الذي تعلمته في المضارع التام (`gone, seen, eaten`).",
        "النفي `hadn't`، والسؤال بتقديم `Had`. ولا نحتاج did أبدًا."
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:I / she / they} {a:had} {v:finished}."], ["نفي", "{s:She} {a:hadn't} {v:eaten} anything."], ["سؤال", "{a:Had} {s:you} {v:met} him before?"]] },
        { t: "fix", items: [["I had went there before.", "I {a:had} {v:gone} there before.", "بعد `had` التصريف الثالث."], ["She didn't had eaten.", "She {a:hadn't} {v:eaten}.", ""]] }],
      check: { q: "He failed because he ___.", o: ["didn't study", "hadn't studied", "hasn't studied"], a: 1, why: "عدم الدراسة كان **قبل** الرسوب، فنستخدم الماضي التام." } },

    { k: "المعنى يتغير", h: "اختر الزمن وراقب ترتيب الأحداث",
      why: [
        "الماضي التام ليس زينة: وجوده أو غيابه يغيّر ترتيب الأحداث.",
        "مع الماضي البسيط: وصلتُ ثم طبخت زوجتي. مع الماضي التام: الطعام كان جاهزًا قبل وصولي."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [
          ["cooked", "When I got home, my wife {v:cooked} dinner.", "وصلتُ أولًا، ثم بدأت تطبخ.", 0],
          ["had cooked", "When I got home, my wife {a:had} {v:cooked} dinner.", "الطبخ انتهى قبل وصولي، والطعام جاهز.", 1]
        ],
        groups: [{ h: "وصلت ← ثم طبخت" }, { h: "طبخت ← ثم وصلت" }] }],
      check: { q: "\"When we arrived, the film had started.\" Did we see the beginning?", o: ["Yes", "No"], a: 1, why: "الفيلم بدأ **قبل** وصولنا، فلم نشاهد البداية." } },

    { k: "كلمات مساعدة", h: "by the time · before · after",
      why: [
        "`by the time` (بحلول الوقت الذي) تأتي كثيرًا مع الماضي التام لأنها تعني: قبل أن يحدث كذا كان قد حدث كذا.",
        "مع `before` و`after` الترتيب واضح من الكلمة نفسها، فالماضي التام **اختياري** معهما."
      ],
      show: [{ t: "ex", items: [
        ["{k:By the time} we {v:arrived}, the film {a:had} {v:started}.", "بحلول وصولنا كان الفيلم قد بدأ."],
        ["{k:After} she {a:had} {v:finished} / {v:finished}, she {v:left}.", "الصيغتان صحيحتان مع after."],
        ["I {a:had} never {v:seen} snow {k:before} I {v:went} to Canada.", "تجربة حتى نقطة في الماضي."]
      ] }],
      check: { q: "By the time the police came, the thief ___.", o: ["escaped", "had escaped"], a: 1, why: "`By the time` تعني أن الهروب تمّ قبل وصول الشرطة." } },

    { k: "انتبه", h: "'d قد تكون had أو would",
      why: [
        "الاختصار `'d` له معنيان. الحل: انظر إلى ما بعده.",
        "إذا جاء بعده تصريف ثالث (`gone, eaten`) فهو `had`. وإذا جاء بعده فعل أصلي (`go, eat`) فهو `would`.",
        "وتذكّر: لا ماضي تام بدون حدث ماضٍ آخر نقيس عليه. `I had seen him yesterday` خطأ."
      ],
      show: [{ t: "compare", cols: [
        { h: "'d + تصريف ثالث = had", c: "accent", en: ["She'd {v:gone}. = She {a:had} gone."] },
        { h: "'d + فعل أصلي = would", c: "subj", en: ["She'd {v:go}. = She {a:would} go."] }
      ] }],
      check: { q: "\"They'd left before noon.\" 'd = ?", o: ["had", "would"], a: 0, why: "بعدها `left` تصريف ثالث، فهي `had`." } }
  ],
  sum: [
    { h: "متى؟", txt: "الحدث الأسبق من حدثين ماضيين", en: ["When I arrived, the train {a:had} {v:left}."] },
    { h: "البناء", en: ["{a:had} + {v:gone / seen / finished}"] },
    { h: "كلمات", en: ["by the time · before · after · already"] },
    { h: "'d", en: ["'d + gone = had", "'d + go = would"] }
  ]
};
