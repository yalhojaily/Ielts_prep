window.LESSONS = window.LESSONS || {};
window.LESSONS[10] = {
  steps: [
    { k: "الفكرة", h: "كان *جاريًا* في لحظة من الماضي",
      why: [
        "الماضي البسيط نقطة: حدث وانتهى. الماضي المستمر شريط: حدث كان في منتصفه عند لحظة معينة في الماضي.",
        "تخيّل أنك أوقفت فيديو عند الساعة 9 مساء أمس: ماذا كنت تفعل في تلك اللقطة؟ هذا هو الماضي المستمر."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: -0.75, to: -0.35, c: "accent", label: "I was watching the match." }, { m: "dot", at: -0.55, c: "ink", label: "9 p.m." }],
        legend: [["accent", "شريط في الماضي = **حدث كان جاريًا**"]] }],
      check: { q: "At 9 p.m. yesterday I ___ the match.", o: ["watched", "was watching"], a: 1, why: "لحظة محددة في الماضي والحدث كان جاريًا فيها، فنستخدم الماضي المستمر." } },

    { k: "البناء", h: "was / were + ing",
      why: [
        "نفس فكرة المضارع المستمر، لكن نحوّل `am / is / are` إلى ماضيها: `was / were`.",
        "`was` مع `I / he / she / it`، و`were` مع `you / we / they`. والنفي والسؤال بها بدون did."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {a:was} {v:read|ing}.", "", 0], ["She", "{s:She} {a:was} {v:read|ing}.", "", 0], ["We", "{s:We} {a:were} {v:read|ing}.", "", 1], ["They", "{s:They} {a:were} {v:read|ing}.", "", 1]],
        groups: [{ h: "I · he · she · it", res: "{a:was}" }, { h: "you · we · they", res: "{a:were}" }] },
        { t: "formula", rows: [["نفي", "{s:She} {a:wasn't} {v:listening}."], ["سؤال", "{q:What} {a:were} {s:you} {v:doing}?"]] }],
      check: { q: "We ___ football when it started to rain.", o: ["was playing", "were playing", "played"], a: 1, why: "مع `we` نستخدم `were` + `playing`." } },

    { k: "طويل وقصير", h: "حدث طويل *قطعه* حدث قصير",
      why: [
        "أشهر استخدام: حدثان في الماضي، أحدهما طويل كان جاريًا (مستمر)، والآخر قصير حدث في منتصفه (بسيط).",
        "الحدث الطويل هو الخلفية، والقصير هو المفاجأة التي قطعته."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: -0.9, to: -0.2, c: "subj", label: "I was driving" }, { m: "dot", at: -0.5, c: "accent", label: "my phone rang" }],
        legend: [["subj", "طويل جارٍ ← **was / were + ing**"], ["accent", "قصير قطعه ← **ماضٍ بسيط**"]] }],
      check: { q: "I ___ when my phone rang.", o: ["drove", "was driving"], a: 1, why: "القيادة حدث طويل كان جاريًا، والرنين حدث قصير قطعه." } },

    { k: "when و while", h: "when للقصير، while للطويل",
      why: [
        "`when` = عندما، وتأتي غالبًا قبل الحدث القصير. `while` = بينما، وتأتي قبل الحدث الطويل الجاري.",
        "المعنى واحد، والفرق في أين تضع الكلمة."
      ],
      show: [{ t: "compare", cols: [
        { h: "when + قصير", c: "accent", en: ["I {a:was} {v:reading} {k:when} the lights {v:went} out."] },
        { h: "while + طويل", c: "subj", en: ["{k:While} I {a:was} {v:reading}, the lights {v:went} out."] }
      ] }],
      check: { q: "___ she was cooking, the doorbell rang.", o: ["While", "During"], a: 0, why: "`while` قبل الحدث الطويل الجاري (فعل وفاعل). `during` تأتي قبل اسم فقط." } },

    { k: "الفرق في المعنى", h: "جملتان تبدوان متشابهتين",
      why: [
        "`When he arrived, we had dinner.` = وصل **ثم** تعشينا (حدثان متتاليان).",
        "`When he arrived, we were having dinner.` = كنا **في منتصف** العشاء عندما وصل."
      ],
      show: [{ t: "compare", cols: [
        { h: "متتاليان", c: "subj", tl: { marks: [{ m: "dot", at: -0.7, c: "ink", label: "arrived" }, { m: "dot", at: -0.35, c: "subj", label: "dinner", row: 1 }], labels: ["", "", ""], now: false }, en: ["When he arrived, we {v:had} dinner."] },
        { h: "في المنتصف", c: "accent", tl: { marks: [{ m: "wave", from: -0.9, to: -0.2, c: "accent", label: "having dinner" }, { m: "dot", at: -0.55, c: "ink", label: "arrived" }], labels: ["", "", ""], now: false }, en: ["When he arrived, we {a:were} {v:having} dinner."] }
      ] }],
      check: { q: "\"When I got home, my wife was cooking.\" Who started first?", o: ["I got home first.", "My wife started cooking first."], a: 1, why: "الطبخ كان جاريًا عندما وصلت، أي بدأ قبل وصولك." } },

    { k: "خلفية القصة", h: "وصف المشهد في القصة",
      why: [
        "عندما تحكي قصة (مثل IELTS Speaking Part 2)، ابدأ بالماضي المستمر لترسم المشهد، ثم استخدم الماضي البسيط للأحداث.",
        "ولا تنسَ: أفعال الحالة (`know, want`) لا تأتي بـ ing هنا أيضًا."
      ],
      show: [{ t: "ex", items: [["The sun {a:was} {v:shining} and people {a:were} {v:walking} by the sea.", "المشهد (خلفية)"], ["Suddenly, a man {v:shouted} and everyone {v:turned}.", "الأحداث"]] },
        { t: "fix", items: [["I was knowing the answer.", "I {v:knew} the answer.", "`know` فعل حالة."]] }],
      check: { q: "It was a cold night. The wind ___.", o: ["blew", "was blowing"], a: 1, why: "وصف المشهد في بداية القصة بالماضي المستمر." } }
  ],
  sum: [
    { h: "متى؟", txt: "حدث كان جاريًا في لحظة ماضية", en: ["At 9 p.m. I {a:was} {v:watching} TV."] },
    { h: "البناء", en: ["I/he/she/it {a:was} + ing", "you/we/they {a:were} + ing"] },
    { h: "طويل + قصير", en: ["I {a:was} {v:driving} when the phone {v:rang}."] },
    { h: "when / while", en: ["{k:when} + قصير · {k:while} + طويل"] }
  ]
};
