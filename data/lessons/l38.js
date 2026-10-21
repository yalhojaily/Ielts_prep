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
