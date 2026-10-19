window.UNITS = window.UNITS || {};
window.UNITS[61] = {
  id: 61,
  title: "Making deductions",
  ar: "الاستنتاج",
  idea: "عندما نستنتج شيئًا من أدلة: `must` = متأكد أنه صحيح، `can't` = متأكد أنه غير صحيح، `might / may / could` = ممكن. وللماضي نضيف `have + v3`: `must have been`.",
  uses: [
    ["متأكد من الصحة", "He's been working all day. He must be tired."],
    ["متأكد من الخطأ", "That can't be Ali. He's in London."],
    ["احتمال", "She might be at the gym."],
    ["استنتاج عن الماضي", "The ground is wet. It must have rained."]
  ],
  formula: [
    ["حاضر", "{s:It} {a:must / might / can't} {v:be} true."],
    ["حاضر مستمر", "{s:She} {a:must} {a:be} {v:sleeping}."],
    ["ماضٍ", "{s:He} {a:must have / might have / can't have} {v:forgotten}."]
  ],
  notes: [
    { title: "can't لا mustn't",
      body: "عكس `must` في الاستنتاج هو `can't`، وليس `mustn't` (الذي يعني المنع).",
      en: "It {a:can't} {v:be} 5 o'clock already! (not: mustn't)" },
    { title: "couldn't have للماضي",
      body: "`can't have` و`couldn't have` بنفس المعنى للماضي.",
      en: "She {a:couldn't have} {v:seen} me. I was hiding." },
    { title: "سلّم اليقين",
      body: "`must` (95%) > `may / might / could` (50%) > `can't` (5%).",
      en: "" }
  ],
  examples: [
    ["{s:The lights} are off. {s:They} {a:must} {v:be} out.", "الأنوار مطفأة. لا بد أنهم خرجوا."],
    ["{s:You} {a:can't} {v:be} hungry. You've just eaten!", "لا يمكن أن تكون جائعًا. أكلت للتو!"],
    ["{s:He}'s not answering. {s:He} {a:might} {v:be} driving.", "لا يرد. ربما يقود."],
    ["{s:I} {a:must have} {v:left} my phone in the car.", "لا بد أنني تركت هاتفي في السيارة."],
    ["{s:She} {a:can't have} {v:finished} already.", "مستحيل أن تكون قد انتهت بالفعل."]
  ],
  mistakes: [
    ["He mustn't be at home. The car isn't there.", "He can't be at home.", "النفي في الاستنتاج: `can't`."],
    ["She must be forgot.", "She must have forgotten.", "الماضي: `must have + v3`."],
    ["It might rained yesterday.", "It might have rained yesterday.", "الماضي: `might have + v3`."]
  ],
  ielts: {
    text: "في **Speaking Part 3** عند التكهن بأسباب ظاهرة: `This must be because...`, `It might have been caused by...`. وفي **Academic Writing** يساعد على تحفظ النتائج.",
    en: "The decline in sales might have been caused by the increase in online shopping."
  },
  questions: [
    { t: "mcq", q: "She's crying. She ___ upset.", o: ["must be", "can't be", "mustn't be", "must have"], a: 0, why: "متأكد: `must be`." },
    { t: "mcq", q: "That ___ the right answer. It makes no sense.", o: ["mustn't be", "can't be", "must be", "might"], a: 1, why: "متأكد من الخطأ: `can't`." },
    { t: "mcq", q: "I can't find my keys. I ___ them at the office.", o: ["must leave", "must have left", "must left", "can't leave"], a: 1, why: "ماضٍ: `must have left`." },
    { t: "mcq", q: "“Where's Omar?” “I'm not sure. He ___ in the library.”", o: ["must be", "might be", "can't be", "must have"], a: 1, why: "غير متأكد: `might`." },
    { t: "mcq", q: "He ___ the email. He would have replied.", o: ["can't have received", "must have received", "mustn't receive", "can't receive"], a: 0, why: "متأكد من عدم الحدوث في الماضي." },
    { t: "fill", q: "The streets are wet. It ___ (must / rain) last night.", a: ["must have rained"], why: "`must have rained`." },
    { t: "fill", q: "You ___ (can't / be) serious!", a: ["can't be", "cannot be"], why: "`can't be`." },
    { t: "fill", q: "She didn't come. She ___ (might / forget).", a: ["might have forgotten", "may have forgotten"], why: "`might have forgotten`." },
    { t: "fill", q: "He's not answering. He ___ (must / sleep).", a: ["must be sleeping"], why: "استنتاج عن حدث جارٍ: `must be sleeping`." },
    { t: "fix", q: "She mustn't be at work. Her bag is here.", a: ["She can't be at work. Her bag is here."], why: "`can't`." },
    { t: "fix", q: "They must have went home.", a: ["They must have gone home."], why: "`gone`." },
    { t: "rewrite", q: "I'm sure he was tired after the trip. (Use: must)", ask: "أعد الصياغة.", a: ["He must have been tired after the trip."], why: "`must have been`." }
  ]
};
