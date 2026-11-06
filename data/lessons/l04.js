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

// تعمّق
window.LESSONS[4].steps.push(
  { k: "بسيط أم مستمر", h: "نفس الفعل… *معنيان* مختلفان",
    why: [
      "أصعب ما في هذا الدرس ليس البناء، بل الاختيار. السؤال الذي يحسم: هل أتحدث عن شيء **ثابت في حياتي**، أم عن شيء **يجري الآن أو مؤقت**؟",
      "لاحظ أن الفعل نفسه يتغير معناه: `I work in a bank` = هذه وظيفتي. `I'm working in a bank` = أعمل هناك هذه الفترة فقط (مثلًا تدريب صيفي).",
      "ولذلك المستمر يوحي دائمًا بأن الشيء **سينتهي** قريبًا، والبسيط يوحي بأنه **مستقر**."
    ],
    show: [{ t: "build", lab: "اختر الموقف",
      opts: [
        ["وظيفتي الدائمة", "I {v:work} in a bank.", "ثابت ← بسيط", 0],
        ["تدريب هذا الصيف", "I{a:'m} {v:working} in a bank this summer.", "مؤقت ← مستمر", 1],
        ["أسكن هنا", "She {v:lives} in Jeddah.", "سكنها الدائم", 0],
        ["إقامة مؤقتة", "She{a:'s} {v:living} with her aunt until she finds a flat.", "حتى تجد شقة ← مؤقت", 1],
        ["هوايتي", "He {v:plays} tennis.", "عادة ← بسيط", 0],
        ["الآن في الملعب", "He{a:'s} {v:playing} tennis right now.", "يجري الآن ← مستمر", 1]
      ],
      groups: [{ h: "ثابت / عادة ← بسيط" }, { h: "الآن / مؤقت ← مستمر" }] }],
    check: { q: "I ___ at my uncle's house until my flat is ready.", o: ["stay", "am staying"], a: 1, why: "`until my flat is ready` تعني أن الإقامة مؤقتة ← المستمر." } },

  { k: "في سياق", h: "اقرأ: المستمر داخل نص حقيقي",
    why: ["هذا نوع الإجابة الذي يطلبه الممتحن في IELTS Speaking Part 1 عندما يسأل: `What are you doing these days?` لاحظ كيف يجتمع البسيط (للثابت) والمستمر (للمؤقت) في فقرة واحدة."],
    show: [{ t: "passage", h: "إجابة في Speaking Part 1",
      en: "I {v:work} as an accountant, but at the moment I{a:'m} {v:preparing} for the IELTS exam, so I{a:'m} {v:studying} every evening. I usually {v:go} to the gym after work, but these days I{a:'m} {v:spending} that time on grammar. My English {a:is} {v:getting} better, and I{a:'m} {v:enjoying} the challenge.",
      ar: "أعمل محاسبًا، لكنني حاليًا أستعد لاختبار IELTS، لذلك أذاكر كل مساء. عادةً أذهب إلى النادي بعد العمل، لكن هذه الأيام أقضي ذلك الوقت في القواعد. لغتي الإنجليزية تتحسن، وأنا أستمتع بالتحدي.",
      note: "`work` و`go` = ثابت وعادة. كل ما يحدث **هذه الفترة** جاء بالمستمر، ومعه كلمات مثل `at the moment` و`these days`." }],
    check: { q: "In the text, why is \"I'm studying every evening\" continuous?", o: ["It is a permanent habit.", "It is a temporary situation (these weeks only)."], a: 1, why: "المذاكرة كل مساء مرتبطة بفترة الاستعداد للاختبار، أي وضع مؤقت." } }
);

// طبّق على نفسك
window.LESSONS[4].apply = [
  {"p": "صف ما يحدث حولك الآن في ثلاث جمل.", "use": "{s:I}{a:'m} {v:sit}{e:ting} … · {s:My son} {a:is} {v:play}{e:ing} …", "m": ["I'm sitting in my office. My colleague is talking on the phone. It's raining outside."], "c": [["استخدمت `am / is / are + ing`", "\\b(am|is|are|'m|'s|'re)\\s+(\\w+\\s+)?\\w+ing\\b"], ["لم تنسَ `am / is / are` (`I sitting` ✗)", null]]},
  {"p": "اكتب عن مشروع أو شيء مؤقت تعمل عليه هذه الفترة.", "use": "{s:I}{a:'m} {v:study}{e:ing} … {k:these days}.", "m": ["These days I'm preparing for IELTS. I'm also reading a book about investing."], "c": [["استخدمت المستمر لشيء مؤقت", "\\b(am|is|are|'m|'s|'re)\\s+(also\\s+)?\\w+ing\\b"], ["استخدمت كلمة زمن مؤقت مثل `these days / this month / at the moment`", "\\b(these days|this (week|month|year)|at the moment|currently|now)\\b"]]}
];
