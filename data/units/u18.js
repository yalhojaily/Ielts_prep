window.UNITS = window.UNITS || {};
window.UNITS[18] = {
  id: 18,
  title: "The future with “will”",
  ar: "المستقبل بـ will",
  idea: "`will` + الفعل الأصلي، بنفس الصورة مع كل الضمائر. نستخدمه لـ **قرار نتخذه في لحظة الكلام**، و**التوقع المبني على الرأي**، و**الوعود والعروض**.",
  uses: [
    ["قرار لحظي", "It's hot. I'll open the window."],
    ["توقع أو رأي عن المستقبل", "I think prices will rise next year."],
    ["وعد أو عرض أو طلب", "I'll help you with your bags."],
    ["حقيقة مستقبلية", "The sun will set at 6:15 today."]
  ],
  formula: [
    ["إثبات", "{s:I / you / he / she / we / they} {a:will} {v:help} → {s:I}{a:'ll} {v:help}"],
    ["نفي", "{s:She} {a:will} {n:not} {v:come} → {s:She} {a:won't} {v:come}"],
    ["سؤال", "{a:Will} {s:you} {v:be} there? · {q:When} {a:will} {s:it} {v:end}?"]
  ],
  notes: [
    { title: "will أم going to؟",
      body: "القرار المتخذ مسبقًا: `going to`. القرار المتخذ الآن: `will`. التوقع بدليل حاضر: `going to`. التوقع برأيك: `will`.",
      en: "I {a:'m going to} {v:buy} a car. (planned) · Oh, the phone! I{a:'ll} {v:get} it. (now)" },
    { title: "تعبيرات تأتي مع will",
      body: "`I think, I'm sure, probably, perhaps, I expect, I hope`. لاحظ: `probably` تأتي **بعد** will وقبل won't.",
      en: "It {a:will} {x:probably} {v:rain}. · He {x:probably} {a:won't} {v:come}." },
    { title: "Shall I / Shall we",
      body: "للعرض والاقتراح في السؤال مع I و we.",
      en: "{a:Shall} I {v:open} the door? · {a:Shall} we {v:go}?" },
    { title: "لا will بعد when / if في المستقبل",
      body: "بعد `when, if, before, after, as soon as` نستخدم المضارع للمستقبل (القاعدة 19 و29).",
      en: "I'll call you {x:when} I {v:arrive}. (not: when I will arrive)" }
  ],
  examples: [
    ["{s:I}{a:'ll} {v:have} the chicken, please.", "سآخذ الدجاج من فضلك."],
    ["{s:I}'m sure {s:you}{a:'ll} {v:pass} the exam.", "أنا متأكد أنك ستنجح."],
    ["{s:I} {a:won't} {v:tell} anyone. I promise.", "لن أخبر أحدًا. أعدك."],
    ["{a:Will} {s:you} {v:help} me with this?", "هل ستساعدني في هذا؟"],
    ["{s:Robots} {a:will} probably {v:replace} many jobs.", "ستحلّ الروبوتات غالبًا محل كثير من الوظائف."]
  ],
  mistakes: [
    ["I will to call you.", "I will call you.", "لا `to` بعد will."],
    ["She wills come.", "She will come.", "`will` لا تتغير مع he/she."],
    ["I will calling you later.", "I will call you later.", "بعد will الفعل الأصلي."],
    ["I'll tell you when I will know.", "I'll tell you when I know.", "بعد `when` للمستقبل نستخدم المضارع."]
  ],
  ielts: {
    text: "في **Writing Task 2** و**Speaking Part 3** تُسأل عن المستقبل كثيرًا (`Do you think...will...?`). استخدم `will` مع أدوات التحفظ: `is likely to`, `will probably`, `may well`، فهي تُظهر نضجًا لغويًا.",
    en: "In the future, more people will probably work remotely, although some jobs will always require a physical presence."
  },
  questions: [
    { t: "mcq", q: "“I'm thirsty.” “I ___ you some water.”", o: ["am going to get", "will get", "get", "will getting"], a: 1,
      why: "قرار لحظي: `will`." },
    { t: "mcq", q: "I think people ___ on Mars one day.", o: ["live", "will live", "are living", "will to live"], a: 1,
      why: "توقع برأي: `will live`." },
    { t: "mcq", q: "Don't worry. I ___ forget.", o: ["don't", "won't", "willn't", "am not"], a: 1,
      why: "وعد بالنفي: `won't`." },
    { t: "mcq", q: "___ I carry that for you?", o: ["Will", "Shall", "Do", "Am"], a: 1,
      why: "عرض مع I: `Shall I...?`" },
    { t: "mcq", q: "I'll call you as soon as I ___ home.", o: ["will get", "get", "am going to get", "got"], a: 1,
      why: "بعد `as soon as` للمستقبل نستخدم المضارع." },
    { t: "fill", q: "Wait, I ___ (help) you with that box.", a: ["will help", "'ll help"],
      why: "عرض لحظي: `will help`." },
    { t: "fill", q: "She ___ (not / be) happy about this news.", a: ["won't be", "will not be"],
      why: "توقع بالنفي: `won't be`." },
    { t: "fill", q: "He ___ (probably / not / come) to the party.", a: ["probably won't come", "probably will not come"],
      why: "`probably` تأتي قبل `won't`: `probably won't come`." },
    { t: "fix", q: "I will to finish the report tonight.", a: ["I will finish the report tonight.", "I'll finish the report tonight."],
      why: "لا `to` بعد will." },
    { t: "fix", q: "He wills be late.", a: ["He will be late.", "He'll be late."],
      why: "`will` بلا s." },
    { t: "fix", q: "I'll phone you when I will arrive.", a: ["I'll phone you when I arrive.", "I will phone you when I arrive."],
      why: "بعد `when` نستخدم المضارع للمستقبل." },
    { t: "rewrite", q: "You will help me? (Make it a correct question)", ask: "اكتب السؤال بالترتيب الصحيح.",
      a: ["Will you help me?"],
      why: "في السؤال نقدّم `Will` على الفاعل." }
  ]
};
