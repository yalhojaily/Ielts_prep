window.UNITS = window.UNITS || {};
window.UNITS[104] = {
  id: 104,
  title: "“Enough” and “too”",
  ar: "Enough و Too",
  idea: "`too` = **أكثر من اللازم** (معنى سلبي) وتأتي **قبل** الصفة: `too hot`. `enough` = **بالقدر الكافي** وتأتي **بعد** الصفة (`old enough`) و**قبل** الاسم (`enough money`). وكلاهما يأتي كثيرًا مع `to + verb`.",
  uses: [
    ["too + صفة", "This coffee is too hot to drink."],
    ["صفة + enough", "He's not old enough to drive."],
    ["enough + اسم", "We don't have enough time."],
    ["too much / too many", "There are too many cars."]
  ],
  formula: [
    ["too", "{x:too} + {v:adjective} ({x:for sb}) ({a:to} {v:verb})"],
    ["enough صفة", "{v:adjective} + {x:enough} ({a:to} {v:verb})"],
    ["enough اسم", "{x:enough} + {v:noun}"],
    ["too much / many", "{x:too much} + غير معدود · {x:too many} + جمع"]
  ],
  notes: [
    { title: "too ليست very",
      body: "`very` تقوية محايدة. `too` تعني وجود مشكلة.",
      en: "It's {x:very} expensive, but I'll buy it. · It's {x:too} expensive. I can't buy it." },
    { title: "موقع enough",
      body: "بعد الصفة والظرف، وقبل الاسم.",
      en: "fast {x:enough} · {x:enough} chairs" },
    { title: "for + شخص",
      body: "لذكر الشخص المتأثر نضع `for + شخص` قبل `to`.",
      en: "This box is {x:too} heavy {x:for me} {a:to} {v:carry}." }
  ],
  examples: [
    ["The shoes are {x:too} small. I need a bigger size.", "الحذاء صغير جدًا. أحتاج مقاسًا أكبر."],
    ["Is the room big {x:enough} for ten people?", "هل الغرفة كبيرة بما يكفي لعشرة أشخاص؟"],
    ["I didn't have {x:enough} money {a:to} {v:buy} it.", "لم يكن لدي مال كافٍ لشرائه."],
    ["There's {x:too much} sugar in this tea.", "في هذا الشاي سكر كثير جدًا."],
    ["He spoke {x:too} quickly {x:for me} {a:to} {v:understand}.", "تكلم بسرعة لم أستطع معها الفهم."]
  ],
  mistakes: [
    ["It's enough big.", "It's big enough.", "`enough` بعد الصفة."],
    ["I don't have money enough.", "I don't have enough money.", "`enough` قبل الاسم."],
    ["The film was too good! I loved it.", "The film was very good! I loved it.", "`too` سلبية."],
    ["There are too much people.", "There are too many people.", "معدود: `too many`."]
  ],
  ielts: {
    text: "في **Writing Task 2** عند وصف المشكلات: `There are too many cars in city centres`, `Many people do not earn enough to...`, `Housing is too expensive for young people to afford`.",
    en: "In many cities, housing is too expensive for young people to afford, and public transport is not reliable enough."
  },
  questions: [
    { t: "mcq", q: "This bag is ___ heavy. I can't lift it.", o: ["enough", "too", "very enough", "so much"], a: 1, why: "مشكلة: `too`." },
    { t: "mcq", q: "Are you ___ to drive?", o: ["enough old", "old enough", "too old enough", "enough old to"], a: 1, why: "`old enough`." },
    { t: "mcq", q: "We don't have ___ to finish today.", o: ["time enough", "enough time", "too time", "time too"], a: 1, why: "`enough time`." },
    { t: "mcq", q: "There are ___ people in this room. It's crowded.", o: ["too much", "too many", "enough", "very many"], a: 1, why: "معدود: `too many`." },
    { t: "mcq", q: "The tea is too hot ___ drink.", o: ["for", "to", "enough", "that"], a: 1, why: "`too hot to drink`." },
    { t: "mcq", q: "He didn't run ___ to win.", o: ["fast enough", "enough fast", "too fast", "fastly enough"], a: 0, why: "`fast enough`." },
    { t: "fill", q: "I ate ___ much. I feel sick.", a: ["too"], why: "`too much`." },
    { t: "fill", q: "Is the water warm ___ to swim?", a: ["enough"], why: "`warm enough`." },
    { t: "fill", q: "The question was too difficult ___ me to answer.", a: ["for"], why: "`too difficult for me`." },
    { t: "fix", q: "This room isn't enough big.", a: ["This room isn't big enough.", "This room is not big enough."], why: "`big enough`." },
    { t: "fix", q: "I don't have money enough to buy a car.", a: ["I don't have enough money to buy a car."], why: "`enough money`." },
    { t: "fix", q: "There is too many traffic today.", a: ["There is too much traffic today."], why: "غير معدود: `too much`." },
    { t: "rewrite", q: "He is very young. He can't vote. (Use: too ... to)", ask: "اكتب جملة واحدة.", a: ["He is too young to vote.", "He's too young to vote."], why: "`too young to vote`." }
  ]
};
