window.LESSONS = window.LESSONS || {};
window.LESSONS[16] = {
  steps: [
    { k: "خريطة الماضي", h: "أربعة أزمنة على خط واحد",
      why: [
        "كل أزمنة الماضي تجيب عن سؤال مختلف. انظر إليها معًا على الخط الزمني قبل أن تختار.",
        "البسيط نقطة منتهية. المستمر شريط جارٍ. التام نقطة أسبق. والمضارع التام سهم يصل إلى الآن."
      ],
      show: [{ t: "timeline",
        marks: [
          { m: "arrow", from: -0.3, to: 0, c: "verb", label: "has called 3 times today" },
          { m: "wave", from: -0.75, to: -0.45, c: "be", label: "was driving" },
          { m: "dot", at: -0.9, c: "accent", label: "had left", row: 0 },
          { m: "dot", at: -0.6, c: "subj", label: "called", row: 1 }
        ],
        legend: [["subj", "ماضٍ بسيط"], ["be", "ماضٍ مستمر"], ["accent", "ماضٍ تام"], ["verb", "مضارع تام"]] }],
      check: { q: "She ___ three times today.", o: ["called", "has called", "had called"], a: 1, why: "`today` لم ينتهِ بعد، فالحدث مرتبط بالحاضر ← مضارع تام." } },

    { k: "ثلاثة أسئلة", h: "اسأل نفسك بالترتيب",
      why: ["بدل الحفظ، اسأل هذه الأسئلة عن الحدث، وأول «نعم» تحدد الزمن."],
      show: [{ t: "chain", items: [
        { h: "مرتبط بالآن؟", en: "{a:have} + {v:done}", ar: "مضارع تام" },
        { h: "قبل حدث ماضٍ آخر؟", en: "{a:had} + {v:done}", ar: "ماضٍ تام" },
        { h: "كان جاريًا في لحظة؟", en: "{a:was} + {v:doing}", ar: "ماضٍ مستمر" },
        { h: "انتهى في وقت محدد؟", en: "{v:did}", ar: "ماضٍ بسيط" }
      ] }],
      check: { q: "When the phone rang, I ___ a shower.", o: ["had", "was having", "have had"], a: 1, why: "كنت في منتصف الاستحمام عندما رنّ الهاتف ← ماضٍ مستمر." } },

    { k: "تام أم بسيط", h: "this year أم last year؟",
      why: [
        "المحك بين المضارع التام والماضي البسيط: هل الفترة **انتهت**؟",
        "`this year, today, this week` لم تنتهِ ← مضارع تام. `last year, yesterday, in 2019` انتهت ← ماضٍ بسيط."
      ],
      show: [{ t: "build", lab: "اختر الفترة",
        opts: [["this year", "I {a:have} {v:travelled} a lot {k:this year}.", "الفترة لم تنتهِ ← مضارع تام", 0], ["today", "I {a:have} {v:drunk} three coffees {k:today}.", "الفترة لم تنتهِ ← مضارع تام", 0],
               ["last year", "I {v:travelled} a lot {k:last year}.", "الفترة انتهت ← ماضٍ بسيط", 1], ["yesterday", "I {v:drank} three coffees {k:yesterday}.", "الفترة انتهت ← ماضٍ بسيط", 1]],
        groups: [{ h: "مضارع تام", sub: "فترة لم تنتهِ" }, { h: "ماضٍ بسيط", sub: "فترة انتهت" }] }],
      check: { q: "I ___ Rome last summer.", o: ["have visited", "visited"], a: 1, why: "`last summer` فترة انتهت ← ماضٍ بسيط." } },

    { k: "قصة كاملة", h: "ثلاثة أزمنة في قصة واحدة",
      why: [
        "في IELTS Speaking Part 2 تحكي قصة. استخدم الأزمنة الثلاثة معًا:",
        "**المستمر** يرسم الخلفية، و**البسيط** يسرد الأحداث الرئيسية بالترتيب، و**التام** يرجع لما حدث قبلها."
      ],
      show: [{ t: "ex", items: [
        ["It {a:was} {v:raining} heavily.", "الخلفية ← ماضٍ مستمر"],
        ["I {v:got} to the airport late and {v:ran} to the gate.", "الأحداث ← ماضٍ بسيط"],
        ["But my flight {a:had} already {v:left}.", "ما حدث قبل ← ماضٍ تام"]
      ] }],
      check: { q: "When I arrived, the meeting ___.", o: ["already finished", "had already finished"], a: 1, why: "الاجتماع انتهى **قبل** وصولي ← ماضٍ تام." } },

    { k: "used to", h: "والعادة المنتهية: used to",
      why: ["إذا أردت التأكيد على أن العادة **لم تعد موجودة**، استخدم `used to` بدل الماضي البسيط."],
      show: [{ t: "compare", cols: [
        { h: "معلومة فقط", c: "subj", en: ["I {v:smoked} for five years."] },
        { h: "كانت عادة وانتهت", c: "accent", en: ["I {a:used to} {v:smoke}, but I {v:stopped} in 2018."] }
      ] }],
      check: { q: "I ___ here since 2010.", o: ["am living", "lived", "have lived"], a: 2, why: "`since 2010` وضع مستمر حتى الآن ← مضارع تام." } }
  ],
  sum: [
    { h: "ماضٍ بسيط", en: ["She {v:called} me yesterday."] },
    { h: "ماضٍ مستمر", en: ["She {a:was} {v:driving} when…"] },
    { h: "ماضٍ تام", en: ["She {a:had} {v:left} before I called."] },
    { h: "مضارع تام", en: ["She {a:has} {v:called} 3 times today."] }
  ]
};

// تعمّق
window.LESSONS[16].steps.push(
  { k: "زمن واحد يغيّر القصة", h: "اختر الزمن وراقب كيف يتغير *المعنى*",
    why: [
      "الجملة نفسها (`When I arrived, …`) تحكي قصة مختلفة حسب الزمن الذي تختاره للجزء الثاني. هذا أفضل تمرين لفهم الفرق بين أزمنة الماضي.",
      "اسأل: هل الحدث الثاني جاء **بعد** وصولي، أم كان **جاريًا** عند وصولي، أم **انتهى قبل** وصولي؟"
    ],
    show: [{ t: "build", lab: "اختر زمن الجزء الثاني",
      opts: [
        ["ماضٍ بسيط", "When I arrived, they {v:started} the meeting.", "وصلت ← ثم بدأوا (بعد وصولي)", 0],
        ["ماضٍ مستمر", "When I arrived, they {a:were} {v:discussing} the budget.", "كانوا في منتصف النقاش عند وصولي", 1],
        ["ماضٍ تام", "When I arrived, the meeting {a:had} {v:finished}.", "انتهى قبل وصولي (فاتني)", 2]
      ],
      groups: [{ h: "بعد", sub: "ماضٍ بسيط" }, { h: "أثناء", sub: "ماضٍ مستمر" }, { h: "قبل", sub: "ماضٍ تام" }] }],
    check: { q: "When we got to the cinema, the film ___. We missed the beginning.", o: ["started", "was starting", "had started"], a: 2, why: "فاتتنا البداية ← الفيلم بدأ **قبل** وصولنا ← ماضٍ تام." } },

  { k: "في سياق", h: "اقرأ: أربعة أزمنة في قصة واحدة",
    why: ["هذه قصة من نوع IELTS Speaking Part 2. حاول قبل قراءة الملاحظة أن تحدد سبب كل زمن ملون."],
    show: [{ t: "passage", h: "Describe a memorable journey",
      en: "I{a:'ve} {v:travelled} to many countries, but my trip to Turkey {v:was} the most memorable. It {a:was} {v:snowing} when we {v:landed} in Istanbul. We {v:took} a taxi to the hotel, but when we {v:got} there, we {v:discovered} that the hotel {a:had} {v:lost} our booking. Luckily, the manager {v:found} us another room.",
      ar: "سافرت إلى بلدان كثيرة، لكن رحلتي إلى تركيا كانت الأكثر رسوخًا في الذاكرة. كان الثلج يتساقط عندما هبطنا في إسطنبول. أخذنا سيارة أجرة إلى الفندق، لكن عندما وصلنا اكتشفنا أن الفندق أضاع حجزنا. ولحسن الحظ وجد لنا المدير غرفة أخرى.",
      note: "`'ve travelled` = تجربة حتى الآن. `was snowing` = خلفية المشهد. `landed, took, got, discovered, found` = الأحداث بالترتيب. `had lost` = حدث قبلها." }],
    check: { q: "Why \"It was snowing\"?", o: ["It describes the background scene.", "It happened before landing."], a: 0, why: "الماضي المستمر يرسم خلفية المشهد عند حدث رئيسي (الهبوط)." } }
);
