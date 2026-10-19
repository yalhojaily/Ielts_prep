window.UNITS = window.UNITS || {};
window.UNITS[119] = {
  id: 119,
  title: "Deciding and hedging",
  ar: "اتخاذ القرار والتحفّظ في الكلام",
  idea: "**التحفّظ** (hedging) هو التعبير عن الرأي دون مبالغة أو تعميم: `It seems that...`, `I tend to think...`, `Generally speaking...`. و**التعبير عن القرار والتردد**: `I've decided to...`, `I can't make up my mind`, `I'm leaning towards...`. وهما من سمات الكلام الناضج والأكاديمي.",
  uses: [
    ["التحفظ في الرأي", "I'd say..., It seems to me that..., I tend to..."],
    ["تخفيف التعميم", "Generally speaking, ..., In most cases, ..., To some extent, ..."],
    ["القرار", "I've decided to... / I'm going to go with..."],
    ["التردد", "I'm torn between..., I haven't made up my mind yet."]
  ],
  formula: [
    ["رأي", "{x:I'd say} / {x:I tend to think} / {x:It seems to me} that..."],
    ["أفعال", "{x:appear to, seem to, tend to} + verb"],
    ["ظروف", "{x:probably, possibly, generally, largely, arguably}"],
    ["قرار", "{x:I've decided to} · {x:I'm leaning towards} + -ing / noun · {x:I'm torn between} A and B"]
  ],
  notes: [
    { title: "تجنب المطلق",
      body: "`All people...`, `Everyone knows...`, `It is always...` تعميمات يصعب الدفاع عنها. استبدلها بـ `Many people`, `It is often...`.",
      en: "{x:Many} people believe... (not: All people believe)" },
    { title: "would للتلطيف",
      body: "`I would say`, `I would argue` أكثر تحفظًا من `I say / I think`.",
      en: "{x:I would argue} that the benefits are greater." },
    { title: "to some extent",
      body: "مثالية في أسئلة `To what extent do you agree?`.",
      en: "I agree {x:to some extent}, but..." }
  ],
  examples: [
    ["{x:It seems} that more people are working from home.", "يبدو أن عددًا متزايدًا يعمل من البيت."],
    ["Young people {x:tend to} spend more time online.", "يميل الشباب إلى قضاء وقت أطول على الإنترنت."],
    ["{x:Generally speaking}, public schools are good here.", "بشكل عام، المدارس الحكومية جيدة هنا."],
    ["I'm {x:torn between} studying in the UK and in Canada.", "أنا متردد بين الدراسة في بريطانيا وكندا."],
    ["I {x:haven't made up my mind} yet.", "لم أتخذ قراري بعد."]
  ],
  mistakes: [
    ["All people agree that...", "Most people agree that... / It is widely agreed that...", "تجنب التعميم."],
    ["I tend to watching TV.", "I tend to watch TV.", "`tend to` + الفعل الأصلي."],
    ["I am leaning towards to accept.", "I'm leaning towards accepting.", "`towards` + -ing."],
    ["I didn't make my mind yet.", "I haven't made up my mind yet.", "`make up my mind`."]
  ],
  ielts: {
    text: "التحفظ من أهم مهارات **Writing Task 2** و**Speaking Part 3**. الممتحن يقدّر الرأي المتوازن: `To some extent, I agree, but...`, `This is arguably...`, `In many cases...`. الأحكام المطلقة تضعف حجتك.",
    en: "I'd say that, generally speaking, technology has improved education, although it seems to have reduced students' attention spans to some extent."
  },
  questions: [
    { t: "mcq", q: "___, people in cities have busier lives.", o: ["Generally speaking", "All people", "Absolutely", "Never"], a: 0, why: "تحفظ: `Generally speaking`." },
    { t: "mcq", q: "Children ___ learn languages faster than adults.", o: ["tend to", "tend", "are tending", "tends to"], a: 0, why: "`tend to`." },
    { t: "mcq", q: "I'm ___ between the blue car and the white one.", o: ["torn", "leaning", "deciding", "made"], a: 0, why: "`torn between`." },
    { t: "mcq", q: "I haven't made ___ my mind yet.", o: ["on", "up", "out", "in"], a: 1, why: "`make up my mind`." },
    { t: "mcq", q: "I agree with this statement ___.", o: ["to some extent", "to some extents", "in some extent", "at some extent"], a: 0, why: "`to some extent`." },
    { t: "fill", q: "It ___ that the economy is recovering.", a: ["seems", "appears"], why: "`It seems that`." },
    { t: "fill", q: "I'm leaning ___ accepting the offer.", a: ["towards", "toward"], why: "`leaning towards`." },
    { t: "fill", q: "I've ___ to study medicine.", a: ["decided"], why: "`I've decided to`." },
    { t: "fix", q: "All people want to live in big cities.", a: ["Many people want to live in big cities.", "Most people want to live in big cities.", "A lot of people want to live in big cities."], why: "تجنب التعميم." },
    { t: "fix", q: "Teenagers tend to spending a lot of time online.", a: ["Teenagers tend to spend a lot of time online."], why: "`tend to spend`." },
    { t: "fix", q: "I didn't make my mind about the job.", a: ["I haven't made up my mind about the job.", "I haven't made my mind up about the job.", "I didn't make up my mind about the job."], why: "`make up my mind`." },
    { t: "rewrite", q: "Technology is bad for children. (Make it more cautious with: can)", ask: "أعد الصياغة بتحفظ.", a: ["Technology can be bad for children.", "Technology can be harmful for children."], why: "`can be` تخفف الحكم." }
  ]
};
