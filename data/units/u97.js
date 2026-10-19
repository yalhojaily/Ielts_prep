window.UNITS = window.UNITS || {};
window.UNITS[97] = {
  id: 97,
  title: "Superlative adjectives",
  ar: "صيغة التفضيل (الأكثر / الأفعل)",
  idea: "للمقارنة بين **ثلاثة أشياء فأكثر** لتحديد الأعلى: الصفة القصيرة `the + -est` (`the tallest`)، والطويلة `the most + صفة` (`the most beautiful`). ودائمًا مع `the`. وبعدها غالبًا `in` + مكان أو `of` + مجموعة.",
  uses: [
    ["قصيرة", "Burj Khalifa is the tallest building in the world."],
    ["طويلة", "This is the most expensive restaurant in town."],
    ["شاذة", "the best, the worst, the furthest"],
    ["مع المضارع التام", "It's the best film I've ever seen."]
  ],
  formula: [
    ["قصيرة", "{x:the} old{v:est} · {x:the} big{v:gest} · {x:the} eas{v:iest}"],
    ["طويلة", "{x:the most} beautiful · {x:the least} expensive"],
    ["شاذة", "good → {x:the} {v:best} · bad → {x:the} {v:worst} · far → {x:the} {v:furthest}"],
    ["in / of", "the best student {x:in} the class · the youngest {x:of} the three"]
  ],
  notes: [
    { title: "in للمكان والمجموعة الكبيرة",
      body: "`in the world, in my family, in the class`. و`of` للعدد أو الفترة: `of all, of the three, of the year`.",
      en: "the hottest month {x:of} the year · the biggest city {x:in} Saudi Arabia" },
    { title: "one of the + superlative + جمع",
      body: "الاسم بعدها جمع.",
      en: "{x:one of the} best {v:players} (not: player)" },
    { title: "ever مع المضارع التام",
      body: "بعد صيغة التفضيل نستخدم كثيرًا `I have ever + v3` بمعنى «في حياتي كلها».",
      en: "the most delicious meal I{a:'ve} {x:ever} {v:eaten}" }
  ],
  examples: [
    ["Madinah is {x:the} {v:calmest} city I know.", "المدينة أهدأ مدينة أعرفها."],
    ["It was {x:the} {v:best} day of my life.", "كان أجمل يوم في حياتي."],
    ["This is {x:the most} important decision {x:of} my career.", "هذا أهم قرار في مسيرتي."],
    ["She's {x:one of the} {v:smartest} people I've met.", "إنها من أذكى الناس الذين قابلتهم."],
    ["Which is {x:the least} expensive option?", "ما الخيار الأقل تكلفة؟"]
  ],
  mistakes: [
    ["He is tallest boy in the class.", "He is the tallest boy in the class.", "نحتاج `the`."],
    ["the most biggest", "the biggest", "لا نجمع most و -est."],
    ["one of the best player", "one of the best players", "الاسم جمع."],
    ["the best of the world", "the best in the world", "للمكان: `in`."]
  ],
  ielts: {
    text: "في **Writing Task 1** لتحديد أعلى وأدنى قيمة: `the highest figure`, `the most significant increase`, `the lowest proportion`. ولا يخلو تقرير من هذه البنية.",
    en: "China had the highest number of internet users, while the lowest figure was recorded in Canada."
  },
  questions: [
    { t: "mcq", q: "Mount Everest is ___ mountain in the world.", o: ["the higher", "the highest", "highest", "the most high"], a: 1, why: "`the highest`." },
    { t: "mcq", q: "This is ___ book I've ever read.", o: ["the most interesting", "the more interesting", "most interesting", "the interestingest"], a: 0, why: "طويلة: `the most`." },
    { t: "mcq", q: "That was ___ meal I've ever had.", o: ["the worse", "the baddest", "the worst", "worst"], a: 2, why: "شاذة: `the worst`." },
    { t: "mcq", q: "He's the youngest ___ my brothers.", o: ["in", "of", "from", "than"], a: 1, why: "مجموعة: `of`." },
    { t: "mcq", q: "Riyadh is the largest city ___ Saudi Arabia.", o: ["of", "in", "from", "at"], a: 1, why: "مكان: `in`." },
    { t: "mcq", q: "She is one of the best ___ in the team.", o: ["player", "players", "playing", "play"], a: 1, why: "جمع." },
    { t: "fill", q: "August is the ___ (hot) month of the year.", a: ["hottest"], why: "مضاعفة t: `hottest`." },
    { t: "fill", q: "This is the ___ (easy) question in the test.", a: ["easiest"], why: "`easiest`." },
    { t: "fill", q: "It was the ___ (good) holiday we've ever had.", a: ["best"], why: "`best`." },
    { t: "fix", q: "She is most beautiful girl in the class.", a: ["She is the most beautiful girl in the class."], why: "نحتاج `the`." },
    { t: "fix", q: "It's the most cheapest hotel.", a: ["It's the cheapest hotel.", "It is the cheapest hotel."], why: "لا most." },
    { t: "fix", q: "He is the richest man of the world.", a: ["He is the richest man in the world."], why: "`in the world`." },
    { t: "rewrite", q: "No other building in the city is as tall as this one. (Use: the tallest)", ask: "أعد الصياغة.", a: ["This is the tallest building in the city.", "This building is the tallest in the city.", "This one is the tallest building in the city."], why: "`the tallest ... in`." }
  ]
};
