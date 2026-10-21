window.LESSONS = window.LESSONS || {};
window.LESSONS[4] = {
  steps: [
    { k: "الفكرة", h: "المضارع المستمر = يحدث *الآن* وسينتهي",
      why: [
        "المضارع البسيط يصف ما هو ثابت أو متكرر. أما المستمر فيصف حدثًا **في منتصفه**: بدأ قبل قليل، ويجري الآن، وسينتهي.",
        "لذلك نرسمه شريطًا قصيرًا حول «الآن» لا يمتد إلى الماضي والمستقبل كله."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: -0.25, to: 0.25, c: "accent", label: "She is talking on the phone." }],
        legend: [["accent", "شريط قصير حول الآن = **حدث جارٍ ومؤقت**"]] }],
      check: { q: "Look! The baby ___.", o: ["sleeps", "is sleeping"], a: 1, why: "`Look!` تعني أن الحدث يجري أمامك الآن، فنستخدم المستمر." } },

    { k: "البناء", h: "جزءان لا ينفصلان: be + ing",
      why: [
        "الصيغة دائمًا من قطعتين: `am / is / are` ثم الفعل مع `-ing`. الأولى تحدد الزمن (الآن) والفاعل، والثانية تحمل المعنى.",
        "في العربية نقول «أنا أقرأ الآن» بدون فعل مساعد، لذلك يكثر حذف `am / is / are`. بدونها الجملة خاطئة."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [
          ["I", "{s:I} {a:am} {v:read|ing}.", "", 0], ["He", "{s:He} {a:is} {v:read|ing}.", "", 1], ["She", "{s:She} {a:is} {v:read|ing}.", "", 1],
          ["You", "{s:You} {a:are} {v:read|ing}.", "", 2], ["We", "{s:We} {a:are} {v:read|ing}.", "", 2], ["They", "{s:They} {a:are} {v:read|ing}.", "", 2]
        ], start: 0,
        groups: [{ h: "I", res: "{a:am}" }, { h: "he · she · it", res: "{a:is}" }, { h: "you · we · they", res: "{a:are}" }] },
        { t: "fix", items: [["I working now.", "{s:I} {a:am} {v:working} now.", "لا تحذف `am`."]] }],
      check: { q: "They ___ football now.", o: ["playing", "are playing", "are play"], a: 1, why: "نحتاج القطعتين: `are` + `playing`." } },

    { k: "النفي والسؤال", h: "be يقوم بكل العمل",
      why: [
        "لأن في الجملة فعل `be`، فلا نحتاج `do` أبدًا في المستمر.",
        "النفي: `not` بعد `am / is / are`. السؤال: نقدّم `am / is / are` على الفاعل."
      ],
      show: [{ t: "formula", rows: [
        ["إثبات", "{s:She} {a:is} {v:working}."],
        ["نفي", "{s:She} {a:is} {n:not} {v:working}. → {a:isn't}"],
        ["سؤال", "{a:Is} {s:she} {v:working}? · {q:What} {a:is} {s:she} {v:doing}?"]
      ] }],
      check: { q: "___ you listening to me?", o: ["Do", "Are", "Is"], a: 1, why: "المستمر يستعمل `be` في السؤال، ومع `you` نستخدم `Are`." } },

    { k: "كتابة ing", h: "ثلاث حالات خاصة في الكتابة",
      why: [
        "معظم الأفعال نضيف لها `ing` مباشرة. لكن هناك ثلاث حالات تحافظ على نطق الكلمة:",
        "الـ `e` الصامتة في الآخر تُحذف (`write → writing`). والفعل القصير المنتهي بـ ساكن-علة-ساكن نضاعف آخره حتى يبقى حرف العلة قصيرًا (`run → running`). و`ie` تصبح `y` (`lie → lying`)."
      ],
      show: [{ t: "rules", tryLab: "اضغط على فعل لترى قاعدته ↑",
        items: [
          { cond: "e صامتة في الآخر", sym: "e → ing", pairs: [["make", "mak", "ing"], ["write", "writ", "ing"]] },
          { cond: "ساكن · علة · ساكن", sym: "+ حرف + ing", pairs: [["sit", "sitt", "ing"], ["stop", "stopp", "ing"]] },
          { cond: "ينتهي بـ ie", sym: "ie → ying", pairs: [["lie", "l", "ying"], ["die", "d", "ying"]] }
        ],
        try: [["come", "com", "ing", 0], ["take", "tak", "ing", 0], ["run", "runn", "ing", 1], ["swim", "swimm", "ing", 1], ["tie", "t", "ying", 2], ["play", "play", "ing", -1], ["read", "read", "ing", -1]] }],
      check: { q: "He is ___ on the chair.", o: ["siting", "sitting", "sitteing"], a: 1, why: "`sit` = ساكن-علة-ساكن، فنضاعف الـ t: `sitting`." } },

    { k: "استخدامات أخرى", h: "ليس فقط «هذه اللحظة»",
      why: [
        "الفكرة المشتركة دائمًا: شيء **مؤقت أو متغير**. لذلك يصلح المستمر لهذه الفترة (هذا الشهر) حتى لو لم يكن يحدث في هذه الثانية.",
        "ويصلح أيضًا لوصف تغيّر يحدث تدريجيًا، ولخطة مرتبة في المستقبل القريب."
      ],
      show: [{ t: "cards", items: [
        { i: "now", h: "هذه اللحظة", en: "She's talking on the phone.", tags: ["now", "Look!", "Listen!"] },
        { i: "calendar", h: "هذه الفترة (مؤقت)", en: "I'm staying with my uncle this month.", tags: ["this week", "these days"] },
        { i: "arrow", h: "تغيّر تدريجي", en: "Prices are rising.", tags: ["getting", "increasing"] },
        { i: "flag", h: "خطة مرتبة قريبة", en: "We're meeting him tomorrow.", tags: ["tomorrow", "tonight"] }
      ] }],
      check: { q: "I ___ a great book about investing these days.", o: ["read", "am reading"], a: 1, why: "`these days` = فترة مؤقتة، حتى لو لم تكن تقرأ في هذه الثانية." } },

    { k: "أفعال الحالة", h: "بعض الأفعال *لا* تأخذ ing",
      why: [
        "الـ ing تعني حدثًا يجري ويتحرك. لكن بعض الأفعال تصف **حالة** ثابتة لا حركة فيها: المعرفة (`know, understand`)، والرغبة (`want, need`)، والمشاعر (`like, love`)، والملكية (`own`).",
        "هذه لا «تجري»، فتبقى بسيطة حتى لو كان المعنى «الآن». (التفصيل في الدرس 5 والدرس 50.)"
      ],
      show: [{ t: "fix", items: [["I am wanting a coffee.", "{s:I} {v:want} a coffee.", "`want` حالة، لا حدث."], ["I am knowing the answer.", "{s:I} {v:know} the answer.", ""]] }],
      check: { q: "I ___ what you mean.", o: ["am understanding", "understand"], a: 1, why: "`understand` فعل حالة، فلا يأتي بـ ing." } }
  ],
  sum: [
    { h: "متى؟", txt: "الآن · هذه الفترة · تغيّر · خطة قريبة", en: ["She's talking on the phone."] },
    { h: "البناء", en: ["{s:I} {a:am} {v:working}", "{s:he / she / it} {a:is} {v:working}", "{s:you / we / they} {a:are} {v:working}"] },
    { h: "نفي وسؤال", en: ["{s:She} {a:isn't} {v:working}.", "{a:Are} {s:you} {v:working}?"] },
    { h: "انتبه", txt: "أفعال الحالة تبقى بسيطة", en: ["I {v:know} · I {v:want} · I {v:like}"] }
  ]
};
