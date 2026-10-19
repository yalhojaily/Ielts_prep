window.UNITS = window.UNITS || {};
window.UNITS[51] = {
  id: 51,
  title: "Infinitives and participles",
  ar: "المصدر واسم الفاعل والمفعول",
  idea: "**المصدر** `to + verb` يعبر عن الغرض وبعد كثير من الأفعال والصفات. و**صيغة -ing** تعمل كاسم (`Swimming is fun`) أو صفة. و**التصريف الثالث** يأتي كصفة بمعنى المفعول. ومن أشهر الأخطاء الخلط بين `-ed` و`-ing` في الصفات.",
  uses: [
    ["الغرض: to", "I went to the bank to get money."],
    ["-ing كاسم (فاعل الجملة)", "Reading improves your vocabulary."],
    ["-ing بعد حروف الجر", "I'm interested in learning Chinese."],
    ["صفات -ed / -ing", "The film was boring. I was bored."]
  ],
  formula: [
    ["to + verb", "{s:I} {v:want} {a:to} {v:learn}. · It's easy {a:to} {v:use}."],
    ["-ing", "{v:Smoking} is bad. · I'm good at {v:cooking}."],
    ["-ing صفة", "an {v:exciting} match · a {v:confusing} rule"],
    ["-ed صفة", "{s:I} was {v:excited}. · {s:She} felt {v:confused}."]
  ],
  notes: [
    { title: "-ing أم -ed؟",
      body: "`-ing` تصف الشيء الذي يسبب الشعور. `-ed` تصف الشخص الذي يشعر.",
      en: "The lecture was {v:boring}, so I was {v:bored}. · The news is {v:shocking}. We are {v:shocked}." },
    { title: "بعد حرف الجر دائمًا -ing",
      body: "`interested in, good at, afraid of, before, after, without` + `-ing`.",
      en: "Think {x:before} {v:speaking}. · He left {x:without} {v:saying} goodbye." },
    { title: "صفة + to",
      body: "`It's important/difficult/easy/necessary to + verb`.",
      en: "It's {x:important} {a:to} {v:sleep} well." },
    { title: "in order to / so as to",
      body: "صيغة أرسمية للغرض، ونفيها `in order not to`.",
      en: "We left early {a:in order to} {v:avoid} traffic." }
  ],
  examples: [
    ["{s:I}'m saving money {a:to} {v:buy} a house.", "أدخر المال لأشتري بيتًا."],
    ["{v:Learning} a language {v:takes} time.", "تعلم لغة يستغرق وقتًا."],
    ["{s:She}'s afraid of {v:flying}.", "تخاف من الطيران."],
    ["{s:The results} were {v:surprising}.", "كانت النتائج مفاجئة."],
    ["{s:I} felt {v:disappointed} with the service.", "شعرت بخيبة أمل من الخدمة."]
  ],
  mistakes: [
    ["I am boring in this class.", "I am bored in this class.", "أنت الذي تشعر بالملل: `bored`. (`I am boring` = أنا ممل!)"],
    ["I went to the market for buy food.", "I went to the market to buy food.", "الغرض: `to + verb`."],
    ["I'm interested in learn English.", "I'm interested in learning English.", "بعد حرف الجر `-ing`."],
    ["Swim is good exercise.", "Swimming is good exercise.", "الفعل كفاعل للجملة: `-ing`."]
  ],
  ielts: {
    text: "خطأ `bored / boring` و`interested / interesting` شائع جدًا في **Speaking**. وفي **Writing Task 2** جمل مثل `Studying abroad has many benefits` (اسم بـ -ing فاعلًا) و`It is essential to...` ترفع مستوى أسلوبك.",
    en: "Living in a big city can be exciting, but many people feel stressed by the constant noise."
  },
  questions: [
    { t: "mcq", q: "The film was so ___ that I fell asleep.", o: ["bored", "boring", "bore", "boredom"], a: 1, why: "الفيلم سبب الملل: `boring`." },
    { t: "mcq", q: "I'm very ___ in history.", o: ["interesting", "interested", "interest", "interests"], a: 1, why: "شعورك: `interested`." },
    { t: "mcq", q: "She went to the pharmacy ___ some medicine.", o: ["for buying", "to buy", "for buy", "buy"], a: 1, why: "الغرض: `to buy`." },
    { t: "mcq", q: "___ too much sugar is bad for you.", o: ["Eat", "Eating", "To eating", "Eaten"], a: 1, why: "فاعل الجملة: `Eating`." },
    { t: "mcq", q: "He's good at ___ problems.", o: ["solve", "to solve", "solving", "solved"], a: 2, why: "بعد `at`: `-ing`." },
    { t: "mcq", q: "It's difficult ___ a job these days.", o: ["finding", "to find", "find", "found"], a: 1, why: "`It's difficult to`." },
    { t: "fill", q: "We were ___ (shock) by the news.", a: ["shocked"], why: "الشعور: `shocked`." },
    { t: "fill", q: "The match was really ___ (excite).", a: ["exciting"], why: "الشيء: `exciting`." },
    { t: "fill", q: "He left without ___ (say) goodbye.", a: ["saying"], why: "بعد `without`: `-ing`." },
    { t: "fix", q: "I was very interesting in the lecture.", a: ["I was very interested in the lecture."], why: "شعورك: `interested`." },
    { t: "fix", q: "I study English for get a better job.", a: ["I study English to get a better job.", "I study English in order to get a better job."], why: "الغرض: `to get`." },
    { t: "fix", q: "Smoke is not allowed here.", a: ["Smoking is not allowed here."], why: "اسم النشاط: `Smoking`." },
    { t: "rewrite", q: "I went to Jeddah because I wanted to visit my aunt. (Use: to)", ask: "أعد الصياغة بالمصدر للغرض.", a: ["I went to Jeddah to visit my aunt."], why: "`to visit`." }
  ]
};
