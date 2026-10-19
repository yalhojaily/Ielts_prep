window.UNITS = window.UNITS || {};
window.UNITS[103] = {
  id: 103,
  title: "“So” and “such”",
  ar: "So و Such للتوكيد",
  idea: "كلاهما يعني «جدًا / إلى هذا الحد» للتوكيد. `so` + **صفة أو ظرف** (`so hot`). `such` + **اسم** (مع صفة أو بدونها): `such a hot day`. ومع `that` تعبران عن النتيجة: `It was so hot that we stayed in`.",
  uses: [
    ["so + صفة", "The film was so boring."],
    ["such + a + صفة + اسم مفرد", "It was such a boring film."],
    ["such + صفة + جمع / غير معدود", "They are such nice people. / It was such good news."],
    ["so / such ... that للنتيجة", "He was so tired that he fell asleep."]
  ],
  formula: [
    ["so", "{x:so} + {v:adjective / adverb}"],
    ["such", "{x:such a / an} + {v:adjective} + {v:singular noun}"],
    ["such جمع", "{x:such} + {v:adjective} + {v:plural / uncountable}"],
    ["نتيجة", "{x:so} {v:hot} {x:that} · {x:such} {v:a hot day} {x:that}"]
  ],
  notes: [
    { title: "so much / so many",
      body: "مع الأسماء والكميات.",
      en: "{x:so many} people · {x:so much} money · {x:so few} options" },
    { title: "such a لا a such",
      body: "الترتيب: `such a nice day`، لا `a such nice day`.",
      en: "{x:such a} beautiful view" }
  ],
  examples: [
    ["The weather is {x:so} {v:nice} today!", "الطقس جميل جدًا اليوم!"],
    ["It's {x:such a} {v:beautiful} city.", "إنها مدينة جميلة جدًا."],
    ["I was {x:so} tired {x:that} I went to bed at 8.", "كنت متعبًا جدًا حتى إنني نمت الثامنة."],
    ["There were {x:so many} people {x:that} we couldn't get in.", "كان هناك عدد كبير من الناس حتى إننا لم نستطع الدخول."],
    ["They gave us {x:such} useful advice.", "أعطونا نصيحة مفيدة جدًا."]
  ],
  mistakes: [
    ["It was so a good film.", "It was such a good film. / The film was so good.", "مع الاسم: `such a`."],
    ["She is such kind.", "She is so kind.", "مع الصفة وحدها: `so`."],
    ["a such nice man", "such a nice man", "`such a`."],
    ["such an useful advice", "such useful advice", "`advice` غير معدود بلا a."]
  ],
  ielts: {
    text: "في **Speaking Part 2** للتعبير عن مشاعرك: `It was such an amazing experience that I'll never forget it.` وفي **Writing Task 2**: `The problem is so serious that governments must act.`",
    en: "It was such a memorable trip that I still think about it, and the people were so welcoming."
  },
  questions: [
    { t: "mcq", q: "The food was ___ delicious.", o: ["such", "so", "such a", "so a"], a: 1, why: "صفة وحدها: `so`." },
    { t: "mcq", q: "It was ___ interesting lecture.", o: ["so", "such", "such an", "so an"], a: 2, why: "صفة + اسم مفرد: `such an`." },
    { t: "mcq", q: "They are ___ friendly people.", o: ["such", "so", "such a", "so a"], a: 0, why: "جمع: `such`." },
    { t: "mcq", q: "There were ___ cars that we couldn't park.", o: ["so much", "such many", "so many", "such"], a: 2, why: "معدود: `so many`." },
    { t: "mcq", q: "He spoke ___ quickly that I didn't understand.", o: ["so", "such", "such a", "very"], a: 0, why: "ظرف: `so`." },
    { t: "fill", q: "I've never seen ___ a big house.", a: ["such"], why: "`such a`." },
    { t: "fill", q: "She was ___ happy that she cried.", a: ["so"], why: "`so happy that`." },
    { t: "fill", q: "We had ___ much fun at the party.", a: ["so"], why: "`so much`." },
    { t: "fix", q: "It was so a hot day.", a: ["It was such a hot day.", "The day was so hot."], why: "`such a`." },
    { t: "fix", q: "He is such clever.", a: ["He is so clever."], why: "`so clever`." },
    { t: "fix", q: "She gave me such a good advice.", a: ["She gave me such good advice."], why: "`advice` غير معدود." },
    { t: "rewrite", q: "The exam was very difficult. Many students failed. (Use: so ... that)", ask: "اربط الجملتين.", a: ["The exam was so difficult that many students failed."], why: "`so difficult that`." }
  ]
};
