window.LESSONS = window.LESSONS || {};
window.LESSONS[38] = {
  steps: [
    { k: "الفكرة", h: "سؤال *مهذب* داخل جملة",
      why: [
        "السؤال المباشر (`Where is the bank?`) قد يبدو مفاجئًا مع شخص غريب. نجعله ألطف بوضعه داخل عبارة مثل `Could you tell me…?` أو `Do you know…?`.",
        "والقاعدة الأهم: بعد هذه العبارة يرجع السؤال إلى **ترتيب الجملة العادية**: الفاعل قبل الفعل."
      ],
      show: [{ t: "trans", items: [{ from: "{q:Where} {a:is} {s:the bank}?", to: "Could you tell me {q:where} {s:the bank} {a:is}?", chg: ["`is` رجعت بعد الفاعل"] }] }],
      check: { q: "Can you tell me where ___?", o: ["is the station", "the station is"], a: 1, why: "في السؤال غير المباشر الترتيب عادي: الفاعل ثم الفعل." } },

    { k: "لماذا", h: "لأن الجزء الثاني *لم يعد* سؤالًا",
      why: [
        "السؤال الحقيقي الآن هو العبارة الأولى (`Could you tell me…?`)، وهي التي فيها القلب.",
        "أما الجزء الثاني فصار مجرد معلومة داخل الجملة، فيأخذ ترتيب الخبر. لذلك أيضًا **تختفي** `do / does / did` ويرجع الفعل إلى شكله العادي."
      ],
      show: [{ t: "trans", items: [
        { from: "{q:What time} {a:does} {s:it} {v:open}?", to: "Do you know {q:what time} {s:it} {v:opens}?", chg: ["`does` اختفت", "`open` صارت `opens`"] },
        { from: "{q:Where} {a:did} {s:she} {v:go}?", to: "I wonder {q:where} {s:she} {v:went}.", chg: ["`did` اختفت", "`go` صارت `went`"] }
      ] }],
      check: { q: "Do you know what time the bank ___?", o: ["does open", "opens", "open"], a: 1, why: "`does` تختفي، والفعل يأخذ شكله العادي `opens`." } },

    { k: "نعم أو لا", h: "if / whether للسؤال بلا أداة",
      why: [
        "إذا كان السؤال الأصلي جوابه نعم أو لا (لا يوجد where أو what)، نضيف `if` أو `whether` لنربطه.",
        "ثم الترتيب العادي كالعادة."
      ],
      show: [{ t: "trans", items: [{ from: "{a:Is} {s:he} here?", to: "Do you know {k:if} {s:he} {a:is} here?" }, { from: "{a:Is} there a pharmacy near here?", to: "Do you know {k:whether} there {a:is} a pharmacy near here?" }] }],
      check: { q: "Do you know ___ coming?", o: ["is he", "if he is", "he is"], a: 1, why: "سؤال نعم/لا ← `if` + الترتيب العادي." } },

    { k: "عبارات البداية", h: "اختر البداية وراقب الترقيم",
      why: [
        "إذا بدأت بسؤال (`Could you tell me…? / Do you know…?`) تنتهي الجملة بعلامة استفهام.",
        "إذا بدأت بخبر (`I wonder… / I'm not sure…`) تنتهي بنقطة."
      ],
      show: [{ t: "build", lab: "اختر البداية",
        opts: [["Could you tell me", "Could you tell me {q:how much} {s:it} {v:costs}?", "سؤال ← ?", 0], ["Do you have any idea", "Do you have any idea {q:how much} {s:it} {v:costs}?", "سؤال ← ?", 0],
               ["I wonder", "I wonder {q:how much} {s:it} {v:costs}.", "خبر ← .", 1], ["I'm not sure", "I'm not sure {q:how much} {s:it} {v:costs}.", "خبر ← .", 1]],
        groups: [{ h: "ينتهي بـ ?" }, { h: "ينتهي بـ ." }] }],
      check: { q: "I wonder why she ___.", o: ["didn't come", "did not she come", "didn't she come"], a: 0, why: "ترتيب عادي بعد `I wonder`: `she didn't come`." } }
  ],
  sum: [
    { h: "الترتيب", en: ["Could you tell me where {s:the bank} {a:is}?"] },
    { h: "بلا do", en: ["Do you know what time {s:it} {v:opens}?"] },
    { h: "نعم/لا", en: ["Do you know {k:if} he is here?"] },
    { h: "الترقيم", en: ["Do you know…? · I wonder… ."] }
  ]
};

// تعمّق
window.LESSONS[38].steps.push(
  { k: "طريقة التحويل", h: "حوّل أي سؤال في ثلاث خطوات",
    why: [
      "**1.** ابدأ بعبارة التمهيد (`Could you tell me…` / `Do you know…`).",
      "**2.** انقل أداة الاستفهام كما هي (أو ضع `if` إذا لم توجد أداة).",
      "**3.** اكتب الباقي كجملة خبرية: الفاعل ثم الفعل، واحذف `do / does / did` وأعد الفعل لشكله الصحيح."
    ],
    show: [{ t: "build", lab: "اختر السؤال المباشر",
      opts: [
        ["Where is the toilet?", "Could you tell me {q:where} {s:the toilet} {a:is}?", "is رجعت بعد الفاعل", 0],
        ["When does the bank open?", "Do you know {q:when} {s:the bank} {v:opens}?", "does اختفت، open ← opens", 0],
        ["Why did he leave?", "Do you know {q:why} {s:he} {v:left}?", "did اختفت، leave ← left", 0],
        ["Can I park here?", "Do you know {k:if} {s:I} {a:can} {v:park} here?", "لا أداة ← if", 1],
        ["Has the train left?", "Could you tell me {k:whether} {s:the train} {a:has} {v:left}?", "", 1]
      ],
      groups: [{ h: "فيه أداة استفهام" }, { h: "نعم / لا ← if / whether" }] }],
    check: { q: "Do you know how much ___?", o: ["does this cost", "this costs", "costs this"], a: 1, why: "ترتيب خبري بلا does: `this costs`." } },

  { k: "في سياق", h: "اقرأ: حوار مهذب في الفندق",
    why: ["الأسئلة غير المباشرة تجعلك تبدو مهذبًا ومتمكنًا، وهي مفيدة في IELTS Speaking وفي الحياة. لاحظ ترتيب الكلمات بعد كل عبارة تمهيد."],
    show: [{ t: "passage", h: "في الاستقبال",
      en: "Excuse me, could you tell me {q:what time} breakfast {v:starts}? … Thank you. And do you know {k:if} there {a:is} a pharmacy near here? I was also wondering {q:whether} I {a:could} {v:check} out a bit later tomorrow. I'm not sure {q:what time} my taxi {a:will} {v:arrive}.",
      ar: "عذرًا، هل يمكن أن تخبرني متى يبدأ الإفطار؟ … شكرًا. وهل تعرف إن كانت هناك صيدلية قريبة؟ وكنت أتساءل أيضًا إن كان بإمكاني تسجيل الخروج متأخرًا قليلًا غدًا. لست متأكدًا متى ستصل سيارة الأجرة.",
      note: "بعد كل عبارة تمهيد جاء الفاعل قبل الفعل. والجملة الأخيرة تنتهي بنقطة لأنها بدأت بـ `I'm not sure`." }],
    check: { q: "Why does the last sentence end with a full stop?", o: ["It starts with \"I'm not sure\" (a statement).", "It is a direct question."], a: 0, why: "بدأت بعبارة خبرية ← نقطة." } }
);
