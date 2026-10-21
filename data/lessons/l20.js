window.LESSONS = window.LESSONS || {};
window.LESSONS[20] = {
  steps: [
    { k: "الفكرة", h: "سيكون *جاريًا* في لحظة من المستقبل",
      why: [
        "تذكّر الماضي المستمر: أوقفنا الفيديو عند لحظة في الماضي. هنا نفعل الشيء نفسه لكن في المستقبل.",
        "في هذا الوقت غدًا، ماذا ستكون تفعل؟ «سأكون في الطائرة»: الحدث سيكون في منتصفه عند تلك اللحظة."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: 0.3, to: 0.75, c: "accent", label: "I'll be flying to London." }, { m: "dot", at: 0.55, c: "ink", label: "this time tomorrow" }],
        legend: [["accent", "شريط في المستقبل = **حدث سيكون جاريًا**"]] }],
      check: { q: "This time tomorrow I ___ on the beach.", o: ["will lie", "will be lying"], a: 1, why: "لحظة محددة في المستقبل والحدث سيكون جاريًا فيها." } },

    { k: "البناء", h: "will be + ing",
      why: [
        "`will` (ثابتة مع كل الضمائر) + `be` (ثابتة) + الفعل مع `ing`.",
        "النفي `won't be` والسؤال `Will … be …ing?`"
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:I / she / they} {a:will be} {v:working} at 5."], ["نفي", "{s:He} {a:won't be} {v:coming} to the meeting."], ["سؤال", "{a:Will} {s:you} {a:be} {v:staying} long?"]] },
        { t: "fix", items: [["I will be work at 5.", "I {a:will be} {v:working} at 5.", ""], ["She will being late.", "She {a:will be} late.", ""]] }],
      check: { q: "Don't call at 9. I ___.", o: ["will drive", "will be driving", "will driving"], a: 1, why: "سأكون في منتصف القيادة عند التاسعة." } },

    { k: "كلمات الوقت", h: "لحظة محددة في المستقبل",
      why: ["هذا الزمن يحتاج لحظة مستقبلية نقيس عليها، لذلك يأتي مع تعبيرات مثل هذه:"],
      show: [{ t: "cards", items: [{ i: "clock", h: "تعبيرات تدل عليه", tags: ["this time tomorrow", "at 8 p.m. tonight", "this time next week", "in ten years' time"] }] },
        { t: "ex", items: [["{k:At 10 tomorrow}, I{a:'ll be} {v:sitting} in the exam hall.", ""], ["{k:In ten years}, most cars {a:will be} {v:running} on electricity.", ""]] }],
      check: { q: "At 8 tonight we ___ dinner, so come at 9.", o: ["will have", "will be having"], a: 1, why: "عند الثامنة سنكون في منتصف العشاء." } },

    { k: "سؤال مهذب", h: "Will you be…ing? ألطف من Will you…?",
      why: [
        "`Will you…?` قد تُفهم طلبًا مباشرًا. أما `Will you be …ing?` فتسأل عن خطة الشخص فقط، دون ضغط.",
        "لذلك تستعمل قبل طلب شيء: هل ستمر بمكتب البريد؟ (إذا نعم) هل يمكنك إرسال هذا؟"
      ],
      show: [{ t: "compare", cols: [
        { h: "مباشر (طلب)", c: "neg", en: ["Will you use the car tonight?"] },
        { h: "مهذب (سؤال عن الخطة)", c: "verb", en: ["{a:Will} you {a:be} {v:using} the car tonight?"] }
      ] }],
      check: { q: "Most polite way to ask about plans:", o: ["Will you come to the meeting?", "Will you be coming to the meeting?"], a: 1, why: "`Will you be coming` تسأل عن الخطة بلطف." } }
  ],
  sum: [
    { h: "البناء", en: ["{a:will be} + {v:verb-ing}"] },
    { h: "متى؟", txt: "حدث جارٍ في لحظة مستقبلية", en: ["This time tomorrow I'll be flying."] },
    { h: "كلمات", en: ["this time tomorrow · at 8 tonight"] },
    { h: "سؤال مهذب", en: ["Will you be using the car?"] }
  ]
};
