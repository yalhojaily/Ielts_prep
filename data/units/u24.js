window.UNITS = window.UNITS || {};
window.UNITS[24] = {
  id: 24,
  title: "The passive",
  ar: "المبني للمجهول",
  idea: "في المبني للمجهول يصبح **المفعول به فاعلًا**، لأن الحدث أو الشيء المتأثر أهم من الفاعل، أو لأن الفاعل غير معروف. صيغته: فعل `be` في الزمن المناسب + **التصريف الثالث**.",
  uses: [
    ["الفاعل غير معروف أو غير مهم", "My car was stolen."],
    ["التركيز على الحدث أو النتيجة", "English is spoken in many countries."],
    ["الأسلوب الرسمي والعلمي", "The samples are tested in a laboratory."]
  ],
  formula: [
    ["مبني للمعلوم", "{s:People} {v:speak} Arabic in Morocco."],
    ["مبني للمجهول", "{s:Arabic} {a:is} {v:spoken} in Morocco."],
    ["المضارع البسيط", "{s:It} {a:is / are} {v:made} ..."],
    ["المضارع المستمر", "{s:The road} {a:is being} {v:repaired}."],
    ["المضارع التام", "{s:The decision} {a:has been} {v:made}."]
  ],
  notes: [
    { title: "by + الفاعل",
      body: "نذكر الفاعل بعد `by` فقط إذا كان مهمًا أو معلومة جديدة.",
      en: "This house {a:was} {v:designed} {x:by} a famous architect." },
    { title: "الأفعال اللازمة لا تُبنى للمجهول",
      body: "الأفعال التي لا تأخذ مفعولًا (`happen, arrive, die, sleep`) لا تأتي بالمجهول. لا نقول `It was happened`.",
      en: "The accident {v:happened} last night." },
    { title: "be يحمل الزمن",
      body: "الفعل الأساسي دائمًا تصريف ثالث، والزمن يظهر في `be` فقط.",
      en: "{a:is} {v:built} · {a:was} {v:built} · {a:has been} {v:built} · {a:will be} {v:built}" }
  ],
  examples: [
    ["{s:Coffee} {a:is} {v:grown} in Brazil and Colombia.", "يُزرع البن في البرازيل وكولومبيا."],
    ["{s:The results} {a:are} {v:published} every month.", "تُنشر النتائج كل شهر."],
    ["{s:A new hospital} {a:is being} {v:built} near my house.", "يُبنى مستشفى جديد قرب بيتي."],
    ["{s:The meeting} {a:has been} {v:cancelled}.", "أُلغي الاجتماع."],
    ["{s:Our flight} {a:has been} {v:delayed} by two hours.", "تأخرت رحلتنا ساعتين."]
  ],
  mistakes: [
    ["The car is repair every year.", "The car is repaired every year.", "بعد `is` في المجهول نحتاج التصريف الثالث."],
    ["The accident was happened at night.", "The accident happened at night.", "`happen` لازم لا يُبنى للمجهول."],
    ["English speaks in many countries.", "English is spoken in many countries.", "اللغة لا تتكلم؛ نحتاج المجهول."],
    ["The letter has be sent.", "The letter has been sent.", "بعد `has` نحتاج `been`."]
  ],
  ielts: {
    text: "من أهم القواعد في الاختبار. **Writing Task 1** في وصف العمليات (process diagrams) يعتمد كليًا على المجهول. وفي **Task 2** يجعل أسلوبك أكثر أكاديمية: `It is often argued that...`.",
    en: "First, the raw materials are collected and cleaned. They are then crushed and heated to a high temperature."
  },
  questions: [
    { t: "mcq", q: "Rice ___ in many Asian countries.", o: ["grows", "is grown", "is grow", "grown"], a: 1,
      why: "الرز يُزرع (لا يزرع نفسه): `is grown`." },
    { t: "mcq", q: "The windows ___ every week.", o: ["clean", "are cleaned", "is cleaned", "are clean"], a: 1,
      why: "الفاعل جمع: `are cleaned`." },
    { t: "mcq", q: "The bridge ___ at the moment.", o: ["is repaired", "is being repaired", "repairs", "has repaired"], a: 1,
      why: "الآن: المضارع المستمر المجهول `is being repaired`." },
    { t: "mcq", q: "The accident ___ on the highway last night.", o: ["was happened", "happened", "is happened", "was happen"], a: 1,
      why: "`happen` فعل لازم لا يُبنى للمجهول: `happened`." },
    { t: "mcq", q: "All the tickets ___ already.", o: ["have sold", "have been sold", "has been sold", "are sell"], a: 1,
      why: "المضارع التام المجهول: `have been sold`." },
    { t: "fill", q: "These cars ___ (make) in Japan.", a: ["are made"],
      why: "مضارع بسيط مجهول: `are made`." },
    { t: "fill", q: "The office ___ (clean) right now.", a: ["is being cleaned"],
      why: "مستمر مجهول: `is being cleaned`." },
    { t: "fill", q: "My laptop ___ (steal). I can't find it anywhere!", a: ["has been stolen"],
      why: "نتيجة حاضرة: `has been stolen`." },
    { t: "fill", q: "This medicine must ___ (keep) in a cool place.", a: ["be kept"],
      why: "بعد `must`: `be` + التصريف الثالث." },
    { t: "fix", q: "The emails are send automatically.", a: ["The emails are sent automatically."],
      why: "التصريف الثالث لـ send هو `sent`." },
    { t: "fix", q: "The problem was happened yesterday.", a: ["The problem happened yesterday."],
      why: "`happen` لا يُبنى للمجهول." },
    { t: "rewrite", q: "People speak French in Canada.", ask: "حوّل الجملة إلى المبني للمجهول.",
      a: ["French is spoken in Canada."],
      why: "المفعول `French` يصبح فاعلًا + `is spoken`." },
    { t: "rewrite", q: "They have built a new school.", ask: "حوّل الجملة إلى المبني للمجهول.",
      a: ["A new school has been built."],
      why: "`have built` تصبح `has been built`، ونحذف `by them`." }
  ]
};
