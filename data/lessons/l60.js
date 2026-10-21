window.LESSONS = window.LESSONS || {};
window.LESSONS[60] = {
  steps: [
    { k: "الفكرة", h: "must أم have to؟ *من* يفرض؟",
      why: [
        "كلاهما يعني «يجب». الفرق في مصدر الإلزام:",
        "`must` = المتكلم نفسه يرى ذلك ضروريًا، أو قاعدة مكتوبة رسمية. `have to` = إلزام من الخارج: القانون، العمل، الظروف."
      ],
      show: [{ t: "compare", cols: [
        { h: "must: أنا أرى ذلك", c: "accent", en: ["I {a:must} {v:call} my mother tonight.", "All visitors {a:must} {v:sign} in."] },
        { h: "have to: مفروض عليّ", c: "subj", en: ["I {a:have to} {v:wear} a uniform at work.", "She {a:has to} {v:work} late."] }
      ] }],
      check: { q: "I ___ wear a uniform. It's the company rule.", o: ["must", "have to"], a: 1, why: "إلزام من الخارج (قاعدة الشركة) ← `have to`." } },

    { k: "النفي", h: "mustn't = ممنوع · don't have to = *لا داعي*",
      why: [
        "هذا أهم فرق في الدرس، والمعنى يختلف تمامًا:",
        "`mustn't` = ممنوع، لا تفعل. `don't have to` = ليس ضروريًا، أنت حر."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["mustn't", "You {a:mustn't} {v:smoke} here.", "ممنوع!", 0], ["mustn't", "You {a:mustn't} {v:park} here.", "ممنوع!", 0], ["don't have to", "You {a:don't have to} {v:come} if you're busy.", "ليس ضروريًا، لك الخيار", 1], ["don't have to", "You {a:don't have to} {v:wear} a tie.", "لا داعي", 1]],
        groups: [{ h: "mustn't", sub: "ممنوع" }, { h: "don't have to", sub: "ليس ضروريًا" }] }],
      check: { q: "It's free. You ___ pay.", o: ["mustn't", "don't have to"], a: 1, why: "ليس ضروريًا ← `don't have to`." } },

    { k: "الماضي والمستقبل", h: "must ليس لها ماضٍ: had to",
      why: [
        "`must` لا تتغير وليس لها ماضٍ. للماضي نستخدم `had to`، وللمستقبل `will have to`.",
        "و`have to` تتغير مع الفاعل (`has to`) وتحتاج `do` في السؤال والنفي."
      ],
      show: [{ t: "formula", rows: [["ماضٍ", "I {a:had to} {v:leave} early yesterday."], ["مستقبل", "You{a:'ll have to} {v:wait}."], ["سؤال", "{a:Do} you {a:have to} {v:work} tomorrow?"]] },
        { t: "fix", items: [["I musted work yesterday.", "I {a:had to} {v:work} yesterday.", ""], ["He have to go.", "He {a:has to} {v:go}.", ""]] }],
      check: { q: "___ you have to work tomorrow?", o: ["Must", "Do", "Have"], a: 1, why: "`have to` تحتاج `Do` في السؤال." } },

    { k: "need و supposed", h: "needn't · be supposed to",
      why: [
        "`needn't` أو `don't need to` = لا حاجة (مثل `don't have to`).",
        "`be supposed to` = من المفترض (حسب قاعدة أو اتفاق)، وكثيرًا ما توحي بأن ذلك لم يحدث."
      ],
      show: [{ t: "ex", items: [["You {a:needn't} {v:worry}.", "لا داعي للقلق"], ["Do I {a:need to} {v:bring} anything?", ""], ["You{a:'re supposed to} {v:be} here at 8!", "كان المفروض (لكنك تأخرت)"]] }],
      check: { q: "\"We're supposed to finish by 5\" means:", o: ["It is the plan / rule.", "It is forbidden."], a: 0, why: "`be supposed to` = من المفترض حسب الخطة." } }
  ],
  sum: [
    { h: "must", en: ["I {a:must} call her. (رأيي)"] },
    { h: "have to", en: ["I {a:have to} wear a uniform. (مفروض)"] },
    { h: "النفي", en: ["mustn't = ممنوع", "don't have to = لا داعي"] },
    { h: "الماضي", en: ["{a:had to}"] }
  ]
};
