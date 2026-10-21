window.LESSONS = window.LESSONS || {};
window.LESSONS[109] = {
  steps: [
    { k: "الفكرة", h: "صفة + حرف جر *ثابت*",
      why: [
        "كثير من الصفات يتبعها حرف جر لا يتغير: `good at`, `interested in`, `afraid of`.",
        "لا منطق يحكمها، لذلك احفظ الصفة مع حرفها كأنهما كلمة واحدة. وبعد حرف الجر: اسم أو `ing`."
      ],
      show: [{ t: "build", lab: "اختر حرف الجر",
        opts: [["at", "I'm {v:good} {k:at} maths.", "good · bad · surprised", 0], ["of", "She's {v:afraid} {k:of} flying.", "afraid · proud · tired · aware · full", 0], ["in", "He's {v:interested} {k:in} history.", "interested", 0], ["for", "She's {v:responsible} {k:for} the team.", "famous · responsible", 0], ["about", "I'm {v:worried} {k:about} the exam.", "worried · excited", 0], ["to", "It's {v:similar} {k:to} mine.", "similar · married · addicted", 0], ["with", "I'm {v:satisfied} {k:with} the result.", "satisfied · angry (with sb)", 0]],
        groups: [{ h: "صفة + حرف جر ثابت" }] },
        { t: "fix", items: [["I'm good in English.", "I'm good {k:at} English.", ""], ["She is interested about art.", "She is interested {k:in} art.", ""]] }],
      check: { q: "My parents are proud ___ me.", o: ["of", "for", "with"], a: 0, why: "`proud of`." } },

    { k: "مع الأسماء", h: "اسم + حرف جر: increase *in* · impact *on*",
      why: [
        "الأسماء أيضًا لها حروف جر ثابتة، وهذه الأهم لـ IELTS Writing (Task 1 و2):",
        "التغيير ← `in`. السبب والحاجة ← `for`. التأثير ← `on`. الحل ← `to`."
      ],
      show: [{ t: "map", cols: [
        { h: "in", c: "subj", k: "k", rows: [["an increase", "in prices"], ["a rise / fall", "in unemployment"]] },
        { h: "for / on / to", c: "accent", k: "k", rows: [["the reason", "for the problem"], ["the demand", "for housing"], ["an impact / effect", "on health"], ["a solution", "to the problem"]] }
      ] },
        { t: "fix", items: [["The reason of the problem.", "The reason {k:for} the problem.", ""], ["It has an effect in health.", "It has an effect {k:on} health.", ""]] }],
      check: { q: "Technology has a huge impact ___ education.", o: ["in", "on", "to"], a: 1, why: "`impact on`." } },

    { k: "تفاصيل", h: "increase in ≠ increase of",
      why: [
        "`an increase in prices` = في الشيء نفسه. `an increase of 10%` = بمقدار.",
        "و`different from` هو الأصح في الاختبار."
      ],
      show: [{ t: "compare", cols: [{ h: "in = في الشيء", c: "subj", en: ["a rise {k:in} unemployment"] }, { h: "of = بمقدار", c: "accent", en: ["a rise {k:of} 5%"] }] },
        { t: "ex", items: [["Riyadh is {v:different} {k:from} Jeddah.", ""]] }],
      check: { q: "There was an increase ___ 15% in sales.", o: ["in", "of"], a: 1, why: "بمقدار ← `of 15%`." } }
  ],
  sum: [
    { h: "صفات", en: ["good at · interested in · afraid of"] },
    { h: "صفات", en: ["responsible for · similar to · worried about"] },
    { h: "أسماء", en: ["increase in · reason for · impact on · solution to"] },
    { h: "in / of", en: ["a rise in prices · a rise of 5%"] }
  ]
};
