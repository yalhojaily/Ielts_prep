window.LESSONS = window.LESSONS || {};
window.LESSONS[80] = {
  steps: [
    { k: "قبل الاسم أم بدله", h: "my car · the car is *mine*",
      why: [
        "**صفة الملكية** تأتي قبل الاسم: `my car, her bag`.",
        "**ضمير الملكية** يقف **وحده** بدل الاسم، لتجنب تكراره: `This car is mine` (= my car)."
      ],
      show: [{ t: "map", cols: [{ h: "قبل اسم ← وحده", c: "subj", k: "s", rows: [["my", "mine"], ["your", "yours"], ["his", "his"], ["her", "hers"], ["our", "ours"], ["their", "theirs"]] }] },
        { t: "fix", items: [["That book is my.", "That book is {s:mine}.", ""]] }],
      check: { q: "Is this pen ___? — No, it's hers.", o: ["your", "yours"], a: 1, why: "وحدها بلا اسم ← `yours`." } },

    { k: "his أم her", h: "تتبع *المالك* لا الشيء",
      why: [
        "`his` إذا كان المالك ذكرًا، و`her` إذا كانت المالكة أنثى. الشيء المملوك لا يؤثر أبدًا.",
        "`Sara visited his grandmother` خطأ شائع، لأن سارة أنثى: `her grandmother`."
      ],
      show: [{ t: "compare", cols: [{ h: "المالك ذكر ← his", c: "subj", en: ["Ali loves {s:his} mother."] }, { h: "المالكة أنثى ← her", c: "accent", en: ["Sara loves {s:her} father."] }] }],
      check: { q: "Sara visited ___ grandmother.", o: ["his", "her"], a: 1, why: "المالكة سارة (أنثى) ← `her`." } },

    { k: "'s أم of", h: "Ali's car · the end of the film",
      why: [
        "`'s` مع **الأشخاص والحيوانات**: `my brother's house`. وإذا كان الجمع ينتهي بـ s نضع الفاصلة فقط: `the students' books`.",
        "`of` مع **الأشياء** غالبًا: `the door of the room`, `the price of oil`. و`'s` أيضًا مع الزمن: `today's news`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["شخص", "my brother{k:'s} house", "", 0], ["جمع بـ s", "the students{k:'} books", "الفاصلة فقط", 0], ["جمع شاذ", "the children{k:'s} toys", "", 0], ["زمن", "today{k:'s} news", "", 0], ["شيء", "the end {k:of} the film", "", 1], ["شيء", "the price {k:of} oil", "", 1]],
        groups: [{ h: "'s", sub: "أشخاص · حيوانات · زمن" }, { h: "of", sub: "أشياء" }] },
        { t: "fix", items: [["This is my brother car.", "This is my brother{k:'s} car.", ""]] }],
      check: { q: "The ___ results were excellent. (many students)", o: ["student's", "students'"], a: 1, why: "جمع ينتهي بـ s ← الفاصلة بعده: `students'`." } },

    { k: "its", h: "its = ملكية · it's = it is",
      why: [
        "خطأ شائع حتى عند الإنجليز: `its` (بدون فاصلة) = له / لها للأشياء. `it's` = `it is`.",
        "الفاصلة العليا هنا تعني حرفًا محذوفًا، لا ملكية."
      ],
      show: [{ t: "compare", cols: [{ h: "its = ملكية", c: "subj", en: ["The company changed {s:its} name."] }, { h: "it's = it is", c: "accent", en: ["{s:It's} a big company."] }] },
        { t: "note", lab: "تعبير مفيد", txt: "`a friend of mine` = أحد أصدقائي.", en: "He's a friend of mine." }],
      check: { q: "The dog wagged ___ tail.", o: ["it's", "its"], a: 1, why: "ملكية ← `its`." } }
  ],
  sum: [
    { h: "قبل الاسم", en: ["my · your · his · her · its · our · their"] },
    { h: "وحده", en: ["mine · yours · hers · ours · theirs"] },
    { h: "'s / of", en: ["Ali's car · the end of the film"] },
    { h: "انتبه", en: ["its ≠ it's"] }
  ]
};
