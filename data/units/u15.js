window.UNITS = window.UNITS || {};
window.UNITS[15] = {
  id: 15,
  title: "“Used to” and “would”",
  ar: "used to و would للعادات الماضية",
  idea: "`used to` + الفعل الأصلي تعني «كنت أفعل ذلك عادةً، ولم أعد أفعله». و`would` + الفعل تصف أيضًا **أفعالًا متكررة** في الماضي، لكنها لا تُستخدم للحالات (مثل السكن والملكية والمشاعر).",
  uses: [
    ["عادة ماضية انتهت", "I used to play football every day."],
    ["حالة ماضية لم تعد صحيحة (used to فقط)", "There used to be a cinema here."],
    ["تكرار في ذكريات وقصص (would)", "Every summer we would visit our grandparents."]
  ],
  formula: [
    ["إثبات", "{s:I} {a:used to} {v:live} in Taif."],
    ["نفي", "{s:I} {a:didn't use to} {v:like} coffee."],
    ["سؤال", "{a:Did} {s:you} {a:use to} {v:play} games?"],
    ["would", "{s:My father} {a:would} {v:read} to us every night."]
  ],
  notes: [
    { title: "use بدون d في النفي والسؤال",
      body: "مع `did / didn't` نكتب `use to` بدون d، مثل أي فعل بعد did.",
      en: "{a:Did} you {a:use to} {v:live} here? · I {a:didn't use to} {v:smoke}." },
    { title: "would للأفعال فقط",
      body: "`would` لا تصلح مع أفعال الحالة: نقول `I used to have a bike` وليس `I would have a bike` بمعنى العادة.",
      en: "I {a:used to} {v:have} long hair. · We {a:would} {v:swim} every evening." },
    { title: "لا تخلط مع be used to",
      body: "`be used to + -ing` تعني «معتاد على»، وهي تركيب مختلف تمامًا.",
      en: "I {a:am used to} {v:waking} up early. (= معتاد)" }
  ],
  examples: [
    ["{s:I} {a:used to} {v:work} in a bank.", "كنت أعمل في بنك (ولم أعد)."],
    ["{s:This street} {a:used to} {v:be} very quiet.", "كان هذا الشارع هادئًا جدًا."],
    ["{s:We} {a:would} {v:spend} hours playing in the street.", "كنا نقضي ساعات نلعب في الشارع."],
    ["{a:Did} {s:you} {a:use to} {v:wear} glasses?", "هل كنت تلبس نظارة؟"],
    ["{s:She} {a:didn't use to} {v:enjoy} reading.", "لم تكن تستمتع بالقراءة."]
  ],
  mistakes: [
    ["I use to live in Jeddah.", "I used to live in Jeddah.", "في الإثبات `used to` بحرف d."],
    ["Did you used to play tennis?", "Did you use to play tennis?", "بعد `Did` نكتب `use` بدون d."],
    ["I used to living in a small town.", "I used to live in a small town.", "بعد `used to` الفعل الأصلي."],
    ["When I was a child, I would have a dog.", "When I was a child, I used to have a dog.", "`have` بمعنى الملكية حالة، فلا تأتي مع `would`."]
  ],
  ielts: {
    text: "في **Speaking Part 3** يسألك الممتحن كثيرًا عن التغيّر بين الماضي والحاضر (`How has ... changed?`). `used to` هنا مثالية: `People used to..., but nowadays...`.",
    en: "People used to write letters, but nowadays almost everyone communicates through messaging apps."
  },
  questions: [
    { t: "mcq", q: "I ___ tea, but now I prefer coffee.", o: ["use to drink", "used to drink", "used to drinking", "would drink"], a: 1,
      why: "عادة ماضية انتهت: `used to` + الفعل الأصلي." },
    { t: "mcq", q: "Did you ___ in a big house?", o: ["used to live", "use to live", "use to living", "used live"], a: 1,
      why: "بعد `Did`: `use to` بدون d." },
    { t: "mcq", q: "There ___ a park here, but they built a mall.", o: ["would be", "used to be", "use to be", "was used to"], a: 1,
      why: "حالة ماضية: `used to be`. لا نستخدم `would` مع الحالات." },
    { t: "mcq", q: "Every Friday, my grandfather ___ us stories.", o: ["would tell", "would told", "used tell", "use to tell"], a: 0,
      why: "فعل متكرر في الماضي: `would tell`." },
    { t: "fill", q: "She ___ (not / like) vegetables when she was a child.", a: ["didn't use to like", "did not use to like"],
      why: "النفي: `didn't use to` + `like`." },
    { t: "fill", q: "My brother ___ (be) very shy, but now he's very confident.", a: ["used to be"],
      why: "حالة ماضية تغيّرت: `used to be`." },
    { t: "fill", q: "We ___ (live) in Abha before we moved to Madinah.", a: ["used to live"],
      why: "`used to` + `live`." },
    { t: "fill", q: "___ you ___ (play) video games as a teenager?", ask: "اكتب الكلمات بالترتيب، مثل: Did use to play", a: ["Did use to play"],
      why: "`Did you use to play...?`" },
    { t: "fix", q: "I use to go swimming every week.", a: ["I used to go swimming every week."],
      why: "في الإثبات: `used to`." },
    { t: "fix", q: "He didn't used to work on Saturdays.", a: ["He didn't use to work on Saturdays.", "He did not use to work on Saturdays."],
      why: "بعد `didn't`: `use` بدون d." },
    { t: "fix", q: "When I was young, I would have a bicycle.", a: ["When I was young, I used to have a bicycle.", "When I was young, I had a bicycle."],
      why: "`have` (الملكية) حالة، فنستخدم `used to`." },
    { t: "rewrite", q: "In the past, he smoked. Now he doesn't. (Use: used to)", ask: "اكتب جملة واحدة.",
      a: ["He used to smoke."],
      why: "عادة ماضية انتهت: `He used to smoke.`" }
  ]
};
