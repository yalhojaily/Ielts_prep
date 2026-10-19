window.UNITS = window.UNITS || {};
window.UNITS[92] = {
  id: 92,
  title: "Adjectives",
  ar: "الصفات",
  idea: "الصفة في الإنجليزية تأتي **قبل الاسم** (`a big house`) أو **بعد فعل الربط** (`The house is big`). ولا تتغير أبدًا مع الجمع أو المؤنث: `big houses` لا `bigs houses`. وعند اجتماع أكثر من صفة لها ترتيب ثابت.",
  uses: [
    ["قبل الاسم", "a beautiful city"],
    ["بعد فعل الربط", "The city is beautiful. / She looks tired."],
    ["لا تتغير", "a tall man, two tall men, a tall woman"],
    ["ترتيب الصفات", "a lovely small old wooden table"]
  ],
  formula: [
    ["الموقع", "{x:adjective} + {v:noun}: a {x:new} {v:car}"],
    ["ترتيب", "رأي → حجم → عمر → شكل → لون → أصل → مادة → الغرض + {v:noun}"],
    ["مثال", "a {x:beautiful} {x:big} {x:old} {x:red} {x:Turkish} {x:silk} {v:carpet}"]
  ],
  notes: [
    { title: "OSASCOMP",
      body: "اختصار لحفظ الترتيب: Opinion, Size, Age, Shape, Colour, Origin, Material, Purpose. في الواقع نستخدم 2 أو 3 صفات فقط.",
      en: "a {x:nice} {x:little} {v:café} · an {x:old} {x:Italian} {x:car}" },
    { title: "صفات لا تأتي إلا بعد الفعل",
      body: "`afraid, alone, asleep, awake, alive, alike` لا تأتي قبل الاسم.",
      en: "The baby is {x:asleep}. (not: an asleep baby → a sleeping baby)" },
    { title: "-ed / -ing",
      body: "راجع القاعدة 51: `interesting` للشيء و`interested` للشعور.",
      en: "a {x:boring} lecture · {x:bored} students" }
  ],
  examples: [
    ["We stayed in a {x:small} {x:traditional} hotel.", "أقمنا في فندق تقليدي صغير."],
    ["The food tastes {x:delicious}.", "الطعام لذيذ."],
    ["She bought a {x:beautiful} {x:black} {x:leather} bag.", "اشترت حقيبة جلدية سوداء جميلة."],
    ["They are {x:very} {x:friendly} people.", "إنهم أناس ودودون جدًا."],
    ["Is the baby still {x:awake}?", "هل ما زال الطفل مستيقظًا؟"]
  ],
  mistakes: [
    ["a house big", "a big house", "الصفة قبل الاسم."],
    ["They are kinds people.", "They are kind people.", "الصفة لا تُجمع."],
    ["a wooden old table", "an old wooden table", "العمر قبل المادة."],
    ["an afraid child", "a frightened child / The child is afraid.", "`afraid` بعد الفعل فقط."]
  ],
  ielts: {
    text: "في **Speaking Part 2** الوصف يعتمد على الصفات. تنويعها (بدل `good, nice, bad`) يرفع **Lexical Resource**: `stunning, cosy, crowded, spacious, vibrant`. وترتيبها الصحيح يعكس الدقة.",
    en: "It's a lovely little coastal town with narrow streets and colourful old houses."
  },
  questions: [
    { t: "mcq", q: "She has ___.", o: ["a car new", "a new car", "new a car", "a news car"], a: 1, why: "الصفة قبل الاسم." },
    { t: "mcq", q: "They are ___ students.", o: ["cleverer", "clevers", "clever", "clevering"], a: 2, why: "الصفة لا تتغير." },
    { t: "mcq", q: "I bought ___ table.", o: ["a wooden round", "a round wooden", "a wood round", "round a wooden"], a: 1, why: "الشكل قبل المادة." },
    { t: "mcq", q: "He has ___ eyes.", o: ["blue beautiful", "beautiful blue", "beautifuls blue", "blue and beautifully"], a: 1, why: "الرأي قبل اللون." },
    { t: "mcq", q: "The children are ___.", o: ["asleep", "sleep", "asleeps", "sleeping asleep"], a: 0, why: "`asleep` بعد الفعل." },
    { t: "mcq", q: "It was a ___ car.", o: ["Japanese small old", "small old Japanese", "old Japanese small", "Japanese old small"], a: 1, why: "الحجم ثم العمر ثم الأصل." },
    { t: "fill", q: "This soup smells ___ (good). (adjective)", a: ["good"], why: "بعد فعل الربط صفة." },
    { t: "fill", q: "These are very ___ (expensive) shoes.", ask: "اكتب الصفة كما هي.", a: ["expensive"], why: "لا تتغير مع الجمع." },
    { t: "fix", q: "We visited a city very beautiful.", a: ["We visited a very beautiful city."], why: "الصفة قبل الاسم." },
    { t: "fix", q: "They are importants people.", a: ["They are important people."], why: "الصفة لا تُجمع." },
    { t: "fix", q: "She wore a silk red dress.", a: ["She wore a red silk dress."], why: "اللون قبل المادة." },
    { t: "rewrite", q: "The house is old. It is big. It is white. (Make one phrase: a ... house)", ask: "اكتب الصفات بترتيبها الصحيح.", a: ["a big old white house"], why: "الحجم ثم العمر ثم اللون." }
  ]
};
