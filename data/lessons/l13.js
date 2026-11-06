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
      check: { q: "He failed because he ___.", o: ["hasn't studied", "hadn't studied", "doesn't study"], a: 1, why: "عدم الدراسة كان **قبل** الرسوب، فنستخدم الماضي التام. (`didn't study` مقبولة أيضًا في الكلام، لكن الماضي التام يوضح الترتيب.)" } },

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

// تعمّق
window.LESSONS[13].steps.push(
  { k: "متى ضروري", h: "متى يجب الماضي التام ومتى *يكفي* البسيط؟",
    why: [
      "الماضي التام ليس إجباريًا في كل قصة. إذا ذكرت الأحداث **بترتيب حدوثها** فالماضي البسيط يكفي: `I woke up, had breakfast and left.`",
      "نحتاجه فقط عندما **نرجع إلى الوراء**: نذكر حدثًا متأخرًا أولًا ثم نتكلم عن شيء حدث قبله. حينها الماضي التام هو الإشارة التي تقول للسامع: «هذا حدث قبل».",
      "ولذلك يكثر مع `when`, `by the time`, `because`, `realised`, `found out`."
    ],
    show: [{ t: "compare", cols: [
      { h: "بالترتيب ← ماضٍ بسيط يكفي", c: "subj", en: ["I {v:locked} the door, {v:got} in the car and {v:drove} to work."] },
      { h: "رجوع للوراء ← ماضٍ تام", c: "accent", en: ["When I {v:got} to work, I {v:realised} I {a:had} {v:left} my laptop at home."] }
    ] }],
    check: { q: "I got to the airport and found out that my flight ___ cancelled.", o: ["has been", "had been"], a: 1, why: "الإلغاء حدث **قبل** وصولي واكتشافي ← الماضي التام." } },

  { k: "في سياق", h: "اقرأ: قصة فيها رجوع للوراء",
    why: ["هذه قصة قصيرة من نوع IELTS Speaking Part 2 (Describe a time when…). لاحظ أن الأحداث الرئيسية بالماضي البسيط، وما سبقها بالماضي التام."],
    show: [{ t: "passage", h: "قصة في Speaking Part 2",
      en: "Last summer I {v:arrived} at the hotel late at night. I {v:was} very tired because I {a:had} {v:been} on the plane for twelve hours. At reception, they {v:told} me that they {a:had} {v:given} my room to someone else. I {a:had} {v:booked} it two months earlier! In the end, they {v:upgraded} me to a suite.",
      ar: "في الصيف الماضي وصلت إلى الفندق متأخرًا في الليل. كنت متعبًا جدًا لأنني كنت في الطائرة اثنتي عشرة ساعة. في الاستقبال أخبروني أنهم أعطوا غرفتي لشخص آخر. كنت قد حجزتها قبل شهرين! وفي النهاية رقّوني إلى جناح.",
      note: "الأحداث بالترتيب (`arrived, told, upgraded`) ماضٍ بسيط. ما حدث قبلها (`had been, had given, had booked`) ماضٍ تام." }],
    check: { q: "Which happened first?", o: ["They told me about the room.", "They gave my room to someone else."], a: 1, why: "`had given` ماضٍ تام ← حدث قبل `told`." } }
);

// طبّق على نفسك
window.LESSONS[13].apply = [
  {"p": "صف موقفًا وصلت فيه متأخرًا: ما الذي كان قد حدث قبل وصولك؟", "use": "{k:When} {s:I} {v:arrived}, {s:the meeting} {a:had} {k:already} {v:started}.", "m": ["When I got to the station, the train had already left."], "c": [["استخدمت `had + v3`", "\\bhad\\s+(already\\s+|just\\s+)?(\\w+ed|left|gone|begun|finished|eaten|taken|seen|done|written|been)\\b"], ["الحدث الثاني بالماضي البسيط (`when I arrived…`)", "\\b(when|by the time|before)\\b"]]},
  {"p": "اكتب عن شيء فعلته لأول مرة، وأنك لم تكن قد فعلته قبل ذلك.", "use": "{s:I} {a:had} {n:never} {v:been} … before.", "m": ["I visited London in 2018. I had never been to Europe before."], "c": [["استخدمت `had never + v3`", "\\bhad\\s+never\\s+\\w+\\b"]]}
];
