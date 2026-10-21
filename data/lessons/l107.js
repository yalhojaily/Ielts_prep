window.LESSONS = window.LESSONS || {};
window.LESSONS[107] = {
  steps: [
    { k: "الفكرة", h: "هرم الوقت: at · on · in",
      why: [
        "فكر في الوقت كهرم: `at` لأصغر نقطة (الساعة). `on` لليوم (التاريخ واليوم). `in` للفترات الأطول (شهر، سنة، فصل، قرن، جزء من اليوم).",
        "كلما كبرت المدة انتقلت من at إلى on إلى in."
      ],
      show: [{ t: "scale", cap: "من النقطة إلى الفترة الطويلة",
        items: [["at", 0, "الساعة", "`at 7:30` · `at noon` · `at night`"], ["on", 50, "اليوم", "`on Friday` · `on 10 June` · `on my birthday`"], ["in", 100, "الفترة", "`in March` · `in 2025` · `in summer` · `in the morning`"]],
        start: 1 }],
      check: { q: "I was born ___ 1990.", o: ["at", "on", "in"], a: 2, why: "سنة ← `in`." } },

    { k: "جرّب", h: "اختر الوقت وراقب حرف الجر",
      why: ["لاحظ: `in the morning` لكن `on Monday morning` (لأنه يوم محدد)، و`at night` استثناء."],
      show: [{ t: "build", lab: "اختر",
        opts: [["10 a.m.", "The meeting starts {k:at} 10 a.m.", "", 0], ["night", "I sleep late {k:at} night.", "استثناء", 0], ["Friday", "See you {k:on} Friday.", "", 1], ["Monday morning", "{k:on} Monday morning", "يوم محدد ← on", 1], ["July", "{k:in} July", "", 2], ["the morning", "{k:in} the morning", "", 2], ["summer", "We travel {k:in} summer.", "", 2]],
        groups: [{ h: "at" }, { h: "on" }, { h: "in" }] },
        { t: "fix", items: [["in Monday", "{k:on} Monday", ""], ["at 2020", "{k:in} 2020", ""], ["on the night", "{k:at} night", ""]] }],
      check: { q: "The shop opens ___ Saturday morning.", o: ["in", "on", "at"], a: 1, why: "يوم محدد ← `on`." } },

    { k: "بلا حرف", h: "next week · last year: *بلا* حرف جر",
      why: [
        "مع `this, next, last, every` لا نضع حرف جر أبدًا: `next week`، لا `in next week`.",
        "وكذلك `today, tomorrow, yesterday`."
      ],
      show: [{ t: "fix", items: [["I'll call you in next week.", "I'll call you {k:next week}.", ""], ["I visited them at last Friday.", "I visited them {k:last Friday}.", ""]] }],
      check: { q: "We're moving ___.", o: ["in next month", "next month"], a: 1, why: "`next` بلا حرف جر." } },

    { k: "المدة", h: "until أم by · in two days",
      why: [
        "`until` = حتى (الفعل مستمر حتى تلك اللحظة). `by` = في موعد أقصاه (قبلها أو عندها).",
        "و`in` + مدة = **بعد** هذه المدة من الآن: `in two days` = بعد يومين."
      ],
      show: [{ t: "compare", cols: [{ h: "until = حتى (استمرار)", c: "subj", en: ["I'll wait {k:until} 5."] }, { h: "by = قبل أو عند", c: "accent", en: ["Send it {k:by} 5."] }] },
        { t: "ex", items: [["The course starts {k:in} two weeks.", "بعد أسبوعين من الآن"], ["I've lived here {k:for} 3 years / {k:since} 2020.", "الدرس 11"]] }],
      check: { q: "Please submit the report ___ Thursday.", o: ["until", "by"], a: 1, why: "موعد أقصى ← `by`." } }
  ],
  sum: [
    { h: "at", en: ["at 7:30 · at noon · at night"] },
    { h: "on", en: ["on Friday · on 5 May · on Monday morning"] },
    { h: "in", en: ["in July · in 2025 · in the morning"] },
    { h: "بلا حرف", en: ["next week · last year · every day"] }
  ]
};
