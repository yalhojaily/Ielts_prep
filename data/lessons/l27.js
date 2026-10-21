window.LESSONS = window.LESSONS || {};
window.LESSONS[27] = {
  steps: [
    { k: "الفكرة", h: "فعل ناقص + *be* + التصريف الثالث",
      why: [
        "بعد الأفعال الناقصة (`can, must, should, may, might, could`) يأتي الفعل الأصلي دائمًا. وفي المجهول الفعل الأصلي هو `be`.",
        "لذلك الصيغة ثلاث قطع، ولا تتغير القطعتان الأوليان أبدًا: لا `be` تصبح `is`، ولا `can` تأخذ s."
      ],
      show: [{ t: "build", lab: "اختر الفعل الناقص",
        opts: [["must", "{s:Phones} {a:must} {a:be} {v:switched} off.", "قاعدة إلزامية", 0], ["should", "{s:This problem} {a:should} {a:be} {v:solved} quickly.", "نصيحة / رأي", 0],
               ["can", "{s:Tickets} {a:can} {a:be} {v:bought} online.", "إمكانية", 0], ["might", "{s:The match} {a:might} {a:be} {v:cancelled}.", "احتمال", 0], ["has to", "{s:The fee} {a:has to} {a:be} {v:paid} today.", "إلزام", 0]],
        groups: [{ h: "modal + be + v3" }] }],
      check: { q: "This form must ___ in black ink.", o: ["complete", "be completed", "completed"], a: 1, why: "بعد `must` في المجهول: `be` + التصريف الثالث." } },

    { k: "أخطاء الصيغة", h: "be لا تتغير، والفعل *دائمًا* تصريف ثالث",
      why: ["أكثر الأخطاء تأتي من نسيان قطعة أو تغيير `be`. القطع الثلاث ثابتة الشكل."],
      show: [{ t: "fix", items: [["This must be finish today.", "This {a:must be} {v:finished} today.", ""], ["The rules should followed.", "The rules {a:should be} {v:followed}.", ""], ["It can been done.", "It {a:can be} {v:done}.", ""]] }],
      check: { q: "The museum can ___ free on Fridays.", o: ["be visited", "been visited", "visited"], a: 0, why: "`can` + `be` + `visited`." } },

    { k: "الرأي في المقال", h: "should be… في Writing Task 2",
      why: [
        "في المقال تقترح حلولًا للمشكلات. المجهول مع `should` يجعل الاقتراح عامًا وموضوعيًا، دون أن تحدد من يجب أن يفعل.",
        "هذا يعطي أسلوبًا أكاديميًا أقوى من `I think people should…` المتكرر."
      ],
      show: [{ t: "compare", cols: [
        { h: "بسيط ومتكرر", c: "subj", en: ["The government should spend more money on education."] },
        { h: "أكاديمي", c: "accent", en: ["More money {a:should be} {v:spent} on education.", "Stricter laws {a:must be} {v:introduced}."] }
      ] }],
      check: { q: "Choose the passive version:", o: ["People should recycle plastic.", "Plastic should be recycled."], a: 1, why: "`should be recycled` = مجهول." } },

    { k: "الماضي", h: "should have been = *كان يجب* أن…",
      why: [
        "للحديث عن الماضي: فعل ناقص + `have been` + التصريف الثالث.",
        "`should have been` للنقد: كان يجب ولم يحدث. `could have been` لشيء كان ممكنًا ولم يحدث."
      ],
      show: [{ t: "ex", items: [["The accident {a:could have been} {v:avoided}.", "كان من الممكن تجنب الحادث (لكنه وقع)."], ["The problem {a:should have been} {v:reported} immediately.", "كان يجب الإبلاغ فورًا (ولم يحدث)."]] }],
      check: { q: "It should have ___ checked.", o: ["be", "been", "being"], a: 1, why: "للماضي: `should have been` + التصريف الثالث." } }
  ],
  sum: [
    { h: "الصيغة", en: ["{a:modal} + {a:be} + {v:done}"] },
    { h: "أمثلة", en: ["{a:must be} {v:paid} · {a:can be} {v:seen}"] },
    { h: "في المقال", en: ["More money {a:should be} {v:spent}…"] },
    { h: "الماضي", en: ["{a:should have been} {v:done}"] }
  ]
};
