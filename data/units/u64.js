window.UNITS = window.UNITS || {};
window.UNITS[64] = {
  id: 64,
  title: "Articles overview",
  ar: "مراجعة أدوات التعريف",
  idea: "اسأل ثلاثة أسئلة: 1) هل الاسم **معدود مفرد**؟ لا بد له من أداة (a / an / the / my...). 2) هل هو **محدد** يعرفه السامع؟ إذن `the`. 3) هل أتحدث **عمومًا** عن جمع أو غير معدود؟ إذن بلا أداة.",
  uses: [
    ["معدود مفرد نكرة", "I need a pen."],
    ["أي اسم محدد", "The pen on the desk is mine."],
    ["جمع عام", "Pens are cheap."],
    ["غير معدود عام", "Information is power."]
  ],
  formula: [
    ["مفرد معدود", "{x:a / an / the / my / this} + book (never just: book)"],
    ["جمع", "{x:\u00d8} books (عام) \u00b7 {x:the} books (محددة)"],
    ["غير معدود", "{x:\u00d8} advice (عام) \u00b7 {x:the} advice he gave (محددة)"]
  ],
  notes: [
    { title: "the + of",
      body: "عندما نحدد الاسم بعبارة بعده (`of..., that..., in...`) نستخدم `the`.",
      en: "{x:the} history {x:of} Saudi Arabia \u00b7 {x:the} people {x:in} my office" },
    { title: "عام أم محدد؟ نفس الكلمة",
      body: "الكلمة نفسها تأتي بلا أداة عندما نقصد الجميع عمومًا، ومع `the` عندما نقصد مجموعة محددة.",
      en: "{x:\u00d8} Children need love. (all children) \u00b7 {x:The} children are in the garden. (our children)" },
    { title: "the + صفة = مجموعة",
      body: "`the rich, the poor, the elderly, the young` تعني فئة من الناس وتعامل كجمع.",
      en: "{x:The} elderly {v:need} more support." }
  ],
  examples: [
    ["{x:\u00d8} Unemployment is a serious problem.", "البطالة مشكلة خطيرة."],
    ["{x:The} unemployment rate rose in 2020.", "ارتفع معدل البطالة في 2020."],
    ["I read {x:an} interesting article about {x:\u00d8} inflation.", "قرأت مقالًا مثيرًا عن التضخم."],
    ["{x:The} government should help {x:the} poor.", "على الحكومة مساعدة الفقراء."]
  ],
  mistakes: [
    ["I have car.", "I have a car.", "مفرد معدود يحتاج أداة."],
    ["The people need jobs. (in general)", "People need jobs.", "عام: بلا the."],
    ["History of Islam is fascinating.", "The history of Islam is fascinating.", "محدد بـ of: `the`."],
    ["The poor needs help.", "The poor need help.", "`the poor` = جمع."]
  ],
  ielts: {
    text: "قبل تسليم **Writing** راجع كل اسم مفرد معدود: هل له أداة؟ وكل `the`: هل هي لشيء محدد فعلًا؟ هذه المراجعة وحدها قد ترفع درجة **Grammatical Accuracy**.",
    en: "The number of tourists has increased because travel has become cheaper and the internet makes booking easy."
  },
  questions: [
    { t: "mcq", q: "___ unemployment is a global problem.", o: ["The", "-", "An", "A"], a: 1, why: "عام: بلا أداة." },
    { t: "mcq", q: "___ unemployment rate in Spain is high.", o: ["The", "-", "An", "A"], a: 0, why: "محدد: `The`." },
    { t: "mcq", q: "I need ___ advice about investing.", o: ["an", "a", "-", "the a"], a: 2, why: "`advice` غير معدود: بلا a." },
    { t: "mcq", q: "___ rich should pay more taxes.", o: ["-", "The", "A", "Rich"], a: 1, why: "`the rich` = فئة." },
    { t: "mcq", q: "She bought ___ umbrella.", o: ["a", "an", "-", "the a"], a: 1, why: "`an umbrella`." },
    { t: "mcq", q: "I love ___ music of the 1970s.", o: ["-", "a", "the", "an"], a: 2, why: "محدد بـ of: `the`." },
    { t: "fill", q: "My father bought ___ new car last week.", a: ["a"], why: "مفرد نكرة: `a`." },
    { t: "fill", q: "___ elderly often feel lonely.", a: ["The"], why: "`The elderly`." },
    { t: "fill", q: "What's ___ capital of Turkey?", a: ["the"], why: "شيء محدد فريد: `the`." },
    { t: "fix", q: "I bought book yesterday.", a: ["I bought a book yesterday."], why: "مفرد معدود: `a`." },
    { t: "fix", q: "The technology changes our lives.", a: ["Technology changes our lives."], why: "عام: بلا the." },
    { t: "fix", q: "He gave me an useful advice.", a: ["He gave me useful advice.", "He gave me some useful advice.", "He gave me a useful piece of advice."], why: "`advice` غير معدود." },
    { t: "fix", q: "Quality of education is improving.", a: ["The quality of education is improving."], why: "محدد بـ of: `The quality`." }
  ]
};
