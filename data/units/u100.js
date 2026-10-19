window.UNITS = window.UNITS || {};
window.UNITS[100] = {
  id: 100,
  title: "Adverbs of degree",
  ar: "ظروف الدرجة",
  idea: "ظروف الدرجة تقوّي أو تضعّف الصفة أو الظرف: `very, extremely, really` (تقوية)، `quite, fairly, rather, pretty` (إلى حد ما)، `slightly, a bit` (قليلًا). وتأتي **قبل الصفة** مباشرة.",
  uses: [
    ["تقوية", "It's extremely hot."],
    ["متوسط", "The film was quite good."],
    ["تخفيف", "I'm a bit tired."],
    ["مع المقارنة", "much bigger, slightly cheaper, far better"]
  ],
  formula: [
    ["قوي", "{x:extremely, incredibly, really, very, so} + {v:adjective}"],
    ["متوسط", "{x:quite, fairly, rather, pretty} + {v:adjective}"],
    ["ضعيف", "{x:slightly, a bit, a little} + {v:adjective}"],
    ["مقارنة", "{x:much, far, a lot, slightly, a bit} + {v:-er}"]
  ],
  notes: [
    { title: "rather للسلبي غالبًا",
      body: "`rather` تعني «إلى حد ما» وتأتي غالبًا مع صفات سلبية أو مفاجئة.",
      en: "It's {x:rather} expensive. · The test was {x:rather} difficult." },
    { title: "a bit لا تأتي مع الإيجابي قبل اسم",
      body: "`a bit` غير رسمية وتأتي مع السلبي غالبًا، ولا تأتي قبل صفة + اسم.",
      en: "It's {x:a bit} cold. (not: a bit cold day)" },
    { title: "too ليست very",
      body: "`too` = أكثر من اللازم (سلبي). راجع القاعدة 104.",
      en: "It's {x:very} hot. (fine) · It's {x:too} hot to go out. (problem)" }
  ],
  examples: [
    ["The view was {x:incredibly} {v:beautiful}.", "كان المنظر جميلًا للغاية."],
    ["The hotel was {x:fairly} {v:clean}.", "كان الفندق نظيفًا إلى حد ما."],
    ["I'm {x:slightly} {v:worried} about the exam.", "أنا قلق قليلًا بشأن الاختبار."],
    ["This phone is {x:much} {v:better} than my old one.", "هذا الهاتف أفضل بكثير من القديم."],
    ["It was {x:pretty} {v:good}, actually.", "كان جيدًا إلى حد ما في الحقيقة."]
  ],
  mistakes: [
    ["very much tired", "very tired", "`very` مع الصفة مباشرة."],
    ["It's very better.", "It's much better.", "مع المقارنة: `much`."],
    ["The test was too easy, I loved it.", "The test was very easy, I loved it.", "`too` سلبية."],
    ["a bit expensive car", "a rather expensive car / a slightly expensive car", "`a bit` لا تأتي قبل صفة + اسم."]
  ],
  ielts: {
    text: "في **Writing Task 1** ظروف الدرجة تجعل الوصف دقيقًا: `slightly higher`, `considerably lower`, `significantly more`. وفي **Speaking** تجنب تكرار `very`؛ نوّع بـ `really, extremely, quite`.",
    en: "Spending on housing was considerably higher in 2020, while transport costs were only slightly lower."
  },
  questions: [
    { t: "mcq", q: "This car is ___ faster than mine.", o: ["very", "much", "too", "so"], a: 1, why: "مع المقارنة: `much`." },
    { t: "mcq", q: "The exam was ___ difficult, but I passed.", o: ["quite", "too", "enough", "much"], a: 0, why: "إلى حد ما: `quite`." },
    { t: "mcq", q: "The figure was ___ higher in 2020 (only 1%).", o: ["significantly", "slightly", "extremely", "much"], a: 1, why: "فرق صغير: `slightly`." },
    { t: "mcq", q: "I'm ___ tired. I'm going to bed.", o: ["extremely", "slightly much", "much", "far"], a: 0, why: "تقوية: `extremely`." },
    { t: "mcq", q: "The film was ___ boring. I almost fell asleep.", o: ["rather", "much", "far", "slight"], a: 0, why: "`rather` مع السلبي." },
    { t: "fill", q: "London is ___ more expensive than Madinah. (a big difference)", a: ["much", "far", "a lot", "considerably", "significantly"], why: "فرق كبير: `much / far`." },
    { t: "fill", q: "I'm a ___ hungry. Let's eat something small.", a: ["bit", "little"], why: "`a bit`." },
    { t: "fill", q: "The weather was ___ good, so we went to the beach.", a: ["very", "quite", "really", "pretty", "fairly", "extremely"], why: "تقوية أو متوسط." },
    { t: "fix", q: "This laptop is very cheaper than that one.", a: ["This laptop is much cheaper than that one.", "This laptop is a lot cheaper than that one.", "This laptop is far cheaper than that one."], why: "`much cheaper`." },
    { t: "fix", q: "I am very much tired today.", a: ["I am very tired today.", "I'm very tired today."], why: "`very tired`." },
    { t: "fix", q: "The weather was very perfect for the picnic.", a: ["The weather was absolutely perfect for the picnic.", "The weather was perfect for the picnic."],
      why: "`perfect` صفة مطلقة لا تأتي مع `very` (القاعدة 93)." },
    { t: "rewrite", q: "The difference was big. Prices in 2023 were higher than in 2022. (Use: considerably)", ask: "اكتب جملة واحدة تبدأ بـ Prices in 2023 ...", a: ["Prices in 2023 were considerably higher than in 2022."], why: "`considerably higher`." }
  ]
};
