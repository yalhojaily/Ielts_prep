window.UNITS = window.UNITS || {};
window.UNITS[23] = {
  id: 23,
  title: "Future overview",
  ar: "مراجعة صيغ المستقبل",
  idea: "لا يوجد زمن مستقبل واحد في الإنجليزية. اختر الصيغة حسب **مدى يقينك وطبيعة الخطة**: قرار لحظي، أو خطة مقررة، أو ترتيب، أو جدول، أو حدث جارٍ، أو مكتمل في المستقبل.",
  uses: [
    ["قرار لحظي / رأي / وعد ← will", "I'll answer it."],
    ["خطة مقررة / دليل حاضر ← going to", "I'm going to study law."],
    ["ترتيب بموعد ← المضارع المستمر", "I'm meeting Ali at 6."],
    ["جدول رسمي ← المضارع البسيط", "The match starts at 9."]
  ],
  formula: [
    ["will", "{s:I} {a:will} {v:help} you."],
    ["going to", "{s:I} {a:am going to} {v:apply}."],
    ["مستمر", "{s:I} {a:am} {v:flying} on Monday."],
    ["will be -ing", "{s:I} {a:will be} {v:working} at 5."],
    ["will have", "{s:I} {a:will have} {v:finished} by 5."]
  ],
  notes: [
    { title: "سؤال الاختيار الأول",
      body: "هل قررت قبل الكلام؟ نعم ← `going to` أو المستمر. لا ← `will`.",
      en: "Oh, it's raining. I{a:'ll} {v:take} an umbrella. (decided now)" },
    { title: "درجات اليقين",
      body: "من الأقوى إلى الأضعف: `will definitely, will probably, is likely to, may, might, probably won't, definitely won't`.",
      en: "Prices {a:are likely to} {v:fall}. · It {a:might} {v:snow}." },
    { title: "أدوات الزمن",
      body: "لا تنسَ: لا `will` بعد `when, if, as soon as, until, before, after`.",
      en: "I'll call you {x:when} I {v:get} home." }
  ],
  examples: [
    ["{s:I}{a:'m going to} {v:take} IELTS in March, so I{a:'m} {v:starting} a course next week.", "سأختبر IELTS في مارس، لذلك سأبدأ دورة الأسبوع القادم."],
    ["{s:The course} {v:begins} on Sunday at 4.", "تبدأ الدورة يوم الأحد الساعة 4."],
    ["{x:This time next month}, {s:I}{a:'ll be} {v:studying} every day.", "في مثل هذا الوقت من الشهر القادم سأكون أذاكر كل يوم."],
    ["{x:By March}, {s:I}{a:'ll have} {v:covered} all the grammar.", "بحلول مارس سأكون قد غطيت كل القواعد."],
    ["{s:I} think {s:I}{a:'ll} {v:pass}.", "أعتقد أنني سأنجح."]
  ],
  mistakes: [
    ["I will meet my boss at 3. (arranged)", "I'm meeting my boss at 3.", "للترتيب المحدد مع شخص: المضارع المستمر أكثر طبيعية."],
    ["Look at the sky! It will rain.", "Look at the sky! It's going to rain.", "دليل حاضر: `going to`."],
    ["I'll tell you if I will find it.", "I'll tell you if I find it.", "لا `will` بعد `if`."]
  ],
  ielts: {
    text: "في **Speaking Part 3** يُسأل عن المستقبل كثيرًا. نوّع: ابدأ بـ `I think ... will`، ثم أضف `is likely to` أو `might`، واستخدم `will have` مرة واحدة إن أمكن. هذا التنوع يرفع درجة **Grammatical Range**.",
    en: "Cities are likely to become more crowded, and by 2050 most people will have moved to urban areas."
  },
  questions: [
    { t: "mcq", q: "“The phone is ringing.” “OK, I ___ it.”", o: ["'m going to answer", "'ll answer", "answer", "'m answering"], a: 1,
      why: "قرار لحظي: `will`." },
    { t: "mcq", q: "I've decided. I ___ a new laptop.", o: ["'ll buy", "'m going to buy", "buy", "'ll have bought"], a: 1,
      why: "قرار مسبق: `going to`." },
    { t: "mcq", q: "My flight ___ at 6:15 a.m.", o: ["leaves", "will be leaving", "is going to leave", "will have left"], a: 0,
      why: "جدول رسمي: المضارع البسيط." },
    { t: "mcq", q: "Don't call at 9. I ___ my presentation.", o: ["'ll give", "'ll be giving", "give", "'ll have given"], a: 1,
      why: "حدث جارٍ في لحظة مستقبلية." },
    { t: "mcq", q: "By the time you read this letter, I ___ .", o: ["'ll leave", "'ll have left", "leave", "'m leaving"], a: 1,
      why: "اكتمال قبل نقطة مستقبلية." },
    { t: "mcq", q: "Watch out! You ___ that glass!", o: ["'ll drop", "'re going to drop", "drop", "'ll be dropping"], a: 1,
      why: "دليل حاضر: `going to`." },
    { t: "fill", q: "I ___ (see) the dentist tomorrow at 11. It's booked.", a: ["am seeing", "'m seeing"],
      why: "ترتيب محدد." },
    { t: "fill", q: "I promise I ___ (not / tell) anyone.", a: ["won't tell", "will not tell"],
      why: "وعد: `won't`." },
    { t: "fill", q: "We'll start as soon as everyone ___ (arrive).", a: ["arrives"],
      why: "بعد `as soon as`: المضارع البسيط." },
    { t: "fix", q: "Look at those black clouds. It will rain.", a: ["Look at those black clouds. It's going to rain.", "Look at those black clouds. It is going to rain."],
      why: "توقع بدليل حاضر: `going to`." },
    { t: "fix", q: "By 2030 I will finish my PhD.", a: ["By 2030 I will have finished my PhD.", "By 2030 I'll have finished my PhD."],
      why: "اكتمال قبل موعد: المستقبل التام." },
    { t: "fix", q: "When I will be older, I will travel the world.", a: ["When I am older, I will travel the world.", "When I'm older, I'll travel the world.", "When I am older, I'll travel the world."],
      why: "بعد `when`: المضارع." },
    { t: "rewrite", q: "Maybe it will snow tonight. (Use: might)", ask: "أعد الصياغة.",
      a: ["It might snow tonight."],
      why: "`might` + الفعل الأصلي لاحتمال أضعف." }
  ]
};
