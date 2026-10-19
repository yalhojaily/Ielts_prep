window.UNITS = window.UNITS || {};
window.UNITS[21] = {
  id: 21,
  title: "The future perfect",
  ar: "المستقبل التام",
  idea: "`will have` + التصريف الثالث يصف حدثًا **سيكون قد اكتمل قبل** وقت معين في المستقبل. ننظر من نقطة مستقبلية إلى الوراء.",
  uses: [
    ["اكتمال قبل موعد مستقبلي", "By 2030, I will have paid off my loan."],
    ["مدة حتى نقطة مستقبلية", "Next month, we will have been married for ten years."]
  ],
  formula: [
    ["إثبات", "{s:I / she / they} {a:will have} {v:finished}"],
    ["نفي", "{s:He} {a:won't have} {v:arrived} by then."],
    ["سؤال", "{a:Will} {s:you} {a:have} {v:finished} by Friday?"],
    ["المستمر", "{s:I} {a:will have been} {v:working} here for 5 years."]
  ],
  notes: [
    { title: "by",
      body: "`by` تعني «في موعد أقصاه / قبل»، وهي أهم إشارة لهذا الزمن: `by Monday, by the end of the year, by the time...`.",
      en: "{x:By the time} you {v:arrive}, I{a:'ll have} {v:cooked} dinner." },
    { title: "المستقبل التام المستمر",
      body: "`will have been` + `-ing` للتركيز على المدة حتى نقطة مستقبلية.",
      en: "In June, she {a:will have been} {v:teaching} for 20 years." }
  ],
  examples: [
    ["{s:I}{a:'ll have} {v:finished} the report by noon.", "سأكون قد أنهيت التقرير قبل الظهر."],
    ["{x:By 2040}, {s:the city} {a:will have} {v:doubled} in size.", "بحلول 2040 سيكون حجم المدينة قد تضاعف."],
    ["{s:They} {a:won't have} {v:left} before 6.", "لن يكونوا قد غادروا قبل السادسة."],
    ["{a:Will} {s:you} {a:have} {v:read} it by tomorrow?", "هل ستكون قد قرأته بحلول الغد؟"]
  ],
  mistakes: [
    ["By next year I will finish my degree.", "By next year I will have finished my degree.", "مع `by` + وقت مستقبلي للاكتمال نستخدم المستقبل التام."],
    ["I will have finish it.", "I will have finished it.", "بعد `will have` التصريف الثالث."],
    ["By the time you will arrive, I'll have left.", "By the time you arrive, I'll have left.", "بعد `by the time` نستخدم المضارع."]
  ],
  ielts: {
    text: "قليل الاستخدام لكنه مؤثر في **Writing Task 1** عند وصف التوقعات (projections): `By 2050, the figure will have reached...`. وفي **Speaking Part 3** للتوقعات البعيدة.",
    en: "According to the projection, by 2040 the proportion of elderly people will have risen to nearly 25%."
  },
  questions: [
    { t: "mcq", q: "By the end of this year, I ___ 20 books.", o: ["will read", "will have read", "have read", "will be read"], a: 1,
      why: "اكتمال قبل نقطة مستقبلية: `will have read`." },
    { t: "mcq", q: "Don't worry. They ___ the work by Friday.", o: ["will have finished", "will have finish", "have finished", "will finished"], a: 0,
      why: "`will have` + التصريف الثالث." },
    { t: "mcq", q: "By the time you ___ , we will have eaten.", o: ["will arrive", "arrive", "will have arrived", "arriving"], a: 1,
      why: "بعد `By the time` نستخدم المضارع." },
    { t: "mcq", q: "Next year, she ___ here for a decade.", o: ["will have been working", "will work", "is working", "has worked"], a: 0,
      why: "مدة حتى نقطة مستقبلية: المستقبل التام المستمر." },
    { t: "fill", q: "By 2030, scientists ___ (find) a cure.", a: ["will have found", "'ll have found"],
      why: "`will have` + `found`." },
    { t: "fill", q: "I ___ (not / finish) by 5, so please wait.", a: ["won't have finished", "will not have finished"],
      why: "نفي: `won't have finished`." },
    { t: "fill", q: "By the time we get there, the film ___ (start).", a: ["will have started", "'ll have started"],
      why: "سيكون قد بدأ قبل وصولنا." },
    { t: "fill", q: "Will you ___ (complete) the form by tomorrow?", ask: "اكتب الكلمتين: have + التصريف الثالث", a: ["have completed"],
      why: "`Will you have completed...?`" },
    { t: "fix", q: "By next June, I will have pass the IELTS.", a: ["By next June, I will have passed the IELTS.", "By next June, I'll have passed the IELTS."],
      why: "التصريف الثالث: `passed`." },
    { t: "fix", q: "By 2035, the population will grow to 10 million.", a: ["By 2035, the population will have grown to 10 million."],
      why: "`By + سنة مستقبلية` للاكتمال: `will have grown`." },
    { t: "fix", q: "I will have went home by then.", a: ["I will have gone home by then.", "I'll have gone home by then."],
      why: "التصريف الثالث لـ go هو `gone`." },
    { t: "rewrite", q: "The project will end on 30 June. (Begin with: By July, the project ...)", ask: "أعد الصياغة بالمستقبل التام.",
      a: ["By July, the project will have ended.", "By July, the project will have finished."],
      why: "`will have ended`." }
  ]
};
