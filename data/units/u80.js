window.UNITS = window.UNITS || {};
window.UNITS[80] = {
  id: 80,
  title: "Possession",
  ar: "الملكية",
  idea: "نعبّر عن الملكية بـ **صفات الملكية** قبل الاسم (`my, your, his, her, its, our, their`)، أو **ضمائر الملكية** بدل الاسم (`mine, yours, his, hers, ours, theirs`)، أو **'s** بعد الاسم (`Ali's car`)، أو **of** (`the end of the film`).",
  uses: [
    ["صفة ملكية + اسم", "This is my car."],
    ["ضمير ملكية وحده", "This car is mine."],
    ["'s للأشخاص والحيوانات", "my brother's house"],
    ["of للأشياء", "the door of the room / the price of oil"]
  ],
  formula: [
    ["صفة", "{s:my, your, his, her, its, our, their} + noun"],
    ["ضمير", "{s:mine, yours, his, hers, ours, theirs} (no noun)"],
    ["'s", "Sara{x:'s} bag · the students{x:'} books (جمع ينتهي بـ s) · the children{x:'s} toys"],
    ["of", "the capital {x:of} France · the end {x:of} the year"]
  ],
  notes: [
    { title: "its لا it's",
      body: "`its` = ملكية (له / لها للأشياء). `it's` = it is.",
      en: "The company changed {s:its} name. · {s:It's} a big company." },
    { title: "his / her حسب المالك",
      body: "في العربية «سيارتها» تتبع المالكة. في الإنجليزية كذلك: `her` إذا كانت المالكة أنثى، بغض النظر عن الشيء.",
      en: "Sara loves {s:her} father. · Ali loves {s:his} mother." },
    { title: "'s مع الزمن",
      body: "نستخدم `'s` أيضًا مع كلمات الزمن والمدة.",
      en: "today{x:'s} news · a week{x:'s} holiday · two hours{x:'} drive" },
    { title: "a friend of mine",
      body: "= أحد أصدقائي.",
      en: "He's {x:a friend of mine}." }
  ],
  examples: [
    ["Is this pen {s:yours}? — No, it's {s:hers}.", "هل هذا قلمك؟ لا، إنه لها."],
    ["{s:My father}{x:'s} office is in the city centre.", "مكتب والدي في وسط المدينة."],
    ["The {x:students'} results were excellent.", "كانت نتائج الطلاب ممتازة."],
    ["The tree lost {s:its} leaves.", "فقدت الشجرة أوراقها."],
    ["The roof {x:of} the house needs repairing.", "سقف البيت يحتاج إلى إصلاح."]
  ],
  mistakes: [
    ["The dog wagged it's tail.", "The dog wagged its tail.", "الملكية: `its`."],
    ["This is my brother car.", "This is my brother's car.", "نحتاج 's."],
    ["That book is my.", "That book is mine.", "بلا اسم: `mine`."],
    ["Sara visited his grandmother.", "Sara visited her grandmother.", "المالكة أنثى: `her`."]
  ],
  ielts: {
    text: "خلط `his / her` من أكثر الأخطاء في **Speaking** عند العرب لأن العربية تربط الضمير بالشيء أحيانًا. وفي **Writing** خطأ `its / it's` يُلاحظ فورًا.",
    en: "Every country has its own culture, and people should be proud of their traditions."
  },
  questions: [
    { t: "mcq", q: "Is this your phone or ___?", o: ["my", "mine", "me", "I"], a: 1, why: "بلا اسم: `mine`." },
    { t: "mcq", q: "The company announced ___ results.", o: ["it's", "its", "it", "their's"], a: 1, why: "الملكية: `its`." },
    { t: "mcq", q: "My sister lost ___ wallet.", o: ["his", "her", "its", "hers"], a: 1, why: "المالكة أنثى: `her`." },
    { t: "mcq", q: "This is ___ car.", o: ["my father", "my father's", "my fathers", "of my father"], a: 1, why: "`my father's`." },
    { t: "mcq", q: "The ___ toys are everywhere.", o: ["childrens'", "children's", "childs'", "children"], a: 1, why: "جمع شاذ: `children's`." },
    { t: "mcq", q: "He's a friend of ___.", o: ["me", "my", "mine", "I"], a: 2, why: "`a friend of mine`." },
    { t: "fill", q: "That house is ___. We bought it last year. (we)", a: ["ours"], why: "`ours`." },
    { t: "fill", q: "Ahmed called ___ mother.", a: ["his"], why: "`his`." },
    { t: "fill", q: "The ___ (teachers) room is on the second floor.", ask: "اكتب الكلمة مع علامة الملكية.", a: ["teachers'"], why: "جمع ينتهي بـ s: `teachers'`." },
    { t: "fix", q: "The cat is eating it's food.", a: ["The cat is eating its food."], why: "`its`." },
    { t: "fix", q: "This bag is her.", a: ["This bag is hers."], why: "`hers`." },
    { t: "fix", q: "I went to my uncle house.", a: ["I went to my uncle's house."], why: "`uncle's`." },
    { t: "rewrite", q: "This car belongs to them. (Use: theirs)", ask: "أعد الصياغة.", a: ["This car is theirs."], why: "`theirs`." }
  ]
};
