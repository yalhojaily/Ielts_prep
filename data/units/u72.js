window.UNITS = window.UNITS || {};
window.UNITS[72] = {
  id: 72,
  title: "Abstract and concrete nouns",
  ar: "الأسماء المجردة والمحسوسة",
  idea: "الاسم **المحسوس** شيء تراه أو تلمسه (`table, water, child`). الاسم **المجرد** فكرة أو شعور أو صفة (`freedom, happiness, education`). المجرد غالبًا غير معدود، ويُشتق كثيرًا من صفة أو فعل بلواحق مثل `-ness, -ment, -tion, -ity`.",
  uses: [
    ["محسوس", "car, building, tree, money"],
    ["مجرد", "love, honesty, success, knowledge, growth"],
    ["المجرد العام بلا the", "Happiness is important."],
    ["المجرد المحدد مع the", "the happiness of children"]
  ],
  formula: [
    ["-ness", "happy → {v:happiness} · kind → {v:kindness} · aware → {v:awareness}"],
    ["-ment", "develop → {v:development} · improve → {v:improvement}"],
    ["-tion / -sion", "educate → {v:education} · decide → {v:decision}"],
    ["-ity / -dom / -ship", "able → {v:ability} · free → {v:freedom} · friend → {v:friendship}"]
  ],
  notes: [
    { title: "الأسلوب الأكاديمي يحب المجرد",
      body: "تحويل الأفعال والصفات إلى أسماء مجردة (nominalisation) يجعل الكتابة أكثر رسمية.",
      en: "Prices increased quickly. → There was a rapid {v:increase} in prices." },
    { title: "معدود في بعض المعاني",
      body: "بعض المجردات تصبح معدودة بمعنى محدد: `an experience` (تجربة)، `a success` (نجاح محدد)، `a difficulty`.",
      en: "It was {x:a} great {v:experience}. · He has a lot of {v:experience}." }
  ],
  examples: [
    ["{v:Education} is the key to {v:development}.", "التعليم مفتاح التنمية."],
    ["{v:Honesty} is the best policy.", "الصدق أفضل سياسة."],
    ["There has been a significant {v:improvement} in air quality.", "حدث تحسن ملحوظ في جودة الهواء."],
    ["The {v:freedom} to choose is important.", "حرية الاختيار مهمة."]
  ],
  mistakes: [
    ["The happiness is important.", "Happiness is important.", "المجرد العام بلا the."],
    ["He has many knowledges.", "He has a lot of knowledge.", "`knowledge` غير معدود."],
    ["The develop of the city.", "The development of the city.", "الاسم: `development`."],
    ["I made a decide.", "I made a decision.", "الاسم: `decision`."]
  ],
  ielts: {
    text: "في **Writing Task 2** الأسماء المجردة أساس الأسلوب الأكاديمي: `the importance of`, `the development of`, `a lack of`, `the growth in`. ومعرفة اشتقاقها ترفع **Lexical Resource**.",
    en: "A lack of awareness about healthy eating has led to an increase in obesity."
  },
  questions: [
    { t: "mcq", q: "___ is more important than money.", o: ["The health", "Health", "A health", "Healthy"], a: 1, why: "مجرد عام بلا the." },
    { t: "mcq", q: "There has been a big ___ in sales.", o: ["improve", "improvement", "improving", "improved"], a: 1, why: "الاسم: `improvement`." },
    { t: "mcq", q: "Thank you for your ___.", o: ["kind", "kindly", "kindness", "kinded"], a: 2, why: "الاسم: `kindness`." },
    { t: "mcq", q: "He doesn't have much ___ of computers.", o: ["knowledges", "knowledge", "know", "a knowledge"], a: 1, why: "`knowledge` غير معدود." },
    { t: "mcq", q: "The ___ of the city has been rapid.", o: ["grow", "growth", "growing", "grown"], a: 1, why: "الاسم: `growth`." },
    { t: "fill", q: "Most people want ___ (free) and security.", a: ["freedom"], why: "`freedom`." },
    { t: "fill", q: "Our ___ (friend) started at university.", a: ["friendship"], why: "`friendship`." },
    { t: "fill", q: "I need to make a ___ (decide) soon.", a: ["decision"], why: "`decision`." },
    { t: "fill", q: "She has the ___ (able) to lead a team.", a: ["ability"], why: "`ability`." },
    { t: "fix", q: "The education is very important.", a: ["Education is very important."], why: "عام بلا the." },
    { t: "fix", q: "There is a lack of aware about this problem.", a: ["There is a lack of awareness about this problem."], why: "الاسم: `awareness`." },
    { t: "rewrite", q: "Unemployment rose sharply. (Begin with: There was a sharp ...)", ask: "أعد الصياغة بالاسم.", a: ["There was a sharp rise in unemployment.", "There was a sharp increase in unemployment."], why: "`a sharp rise in`." }
  ]
};
