window.UNITS = window.UNITS || {};
window.UNITS[22] = {
  id: 22,
  title: "The future in the past",
  ar: "المستقبل في الماضي",
  idea: "عندما نحكي عن الماضي ونتكلم عن شيء كان **مستقبلًا في ذلك الوقت**، ننقل `will` إلى `would`، و`am going to` إلى `was going to`. وتُستخدم `was going to` كثيرًا لخطة **لم تتحقق**.",
  uses: [
    ["توقع في الماضي", "I knew she would win."],
    ["خطة ماضية لم تحدث", "I was going to call you, but I forgot."],
    ["ترتيب كان مقررًا", "He was leaving the next day, so he packed his bags."]
  ],
  formula: [
    ["will → would", "{s:I} thought it {a:would} {v:rain}."],
    ["going to → was going to", "{s:We} {a:were going to} {v:travel}, but..."],
    ["مستمر → was ...ing", "{s:She} {a:was} {v:starting} a new job the following week."]
  ],
  notes: [
    { title: "was going to للخطط الفاشلة",
      body: "نستخدمها كثيرًا مع `but` لشرح لماذا لم يحدث شيء.",
      en: "I {a:was going to} {v:buy} the shares, {x:but} the price went up." },
    { title: "في الكلام المنقول",
      body: "`He said: \"I will help\"` تصبح `He said he would help` (القاعدة 44).",
      en: "She promised she {a:would} {v:call}." },
    { title: "was to / was about to",
      body: "`was about to` = كان على وشك. وتأتي في القصص كثيرًا.",
      en: "I {a:was about to} {v:leave} when the phone rang." }
  ],
  examples: [
    ["{s:I} {v:knew} you {a:would} {v:understand}.", "كنت أعلم أنك ستفهم."],
    ["{s:We} {a:were going to} {v:eat} out, but we were too tired.", "كنا سنتناول العشاء خارجًا لكننا كنا متعبين جدًا."],
    ["{s:He} {v:said} he {a:would} {v:send} the file.", "قال إنه سيرسل الملف."],
    ["{s:I} {a:was about to} {v:give up} when I found the answer.", "كنت على وشك الاستسلام عندما وجدت الإجابة."]
  ],
  mistakes: [
    ["I thought it will be easy.", "I thought it would be easy.", "بعد فعل ماضٍ (`thought`) ننقل `will` إلى `would`."],
    ["I am going to call you yesterday, but I forgot.", "I was going to call you yesterday, but I forgot.", "خطة في الماضي: `was going to`."],
    ["She said she will come.", "She said she would come.", "في الكلام المنقول بعد `said`: `would`."]
  ],
  ielts: {
    text: "يظهر في **Speaking Part 2** عند الحديث عن توقعاتك السابقة: `I never thought I would...`، وهي عبارة طبيعية جدًا تُظهر تحكمك في الأزمنة.",
    en: "At first I didn't think I would enjoy living abroad, but it turned out to be a great experience."
  },
  questions: [
    { t: "mcq", q: "I didn't think the exam ___ so difficult.", o: ["will be", "would be", "is", "was going"], a: 1,
      why: "بعد فعل ماضٍ: `would be`." },
    { t: "mcq", q: "I ___ you, but my phone died.", o: ["am going to call", "was going to call", "will call", "would called"], a: 1,
      why: "خطة لم تتحقق: `was going to`." },
    { t: "mcq", q: "He promised he ___ late again.", o: ["won't be", "wouldn't be", "isn't", "wasn't going"], a: 1,
      why: "`will not` في الماضي: `wouldn't`." },
    { t: "mcq", q: "We were ___ leave when it started raining.", o: ["about to", "going", "would", "will"], a: 0,
      why: "`was/were about to` = على وشك." },
    { t: "fill", q: "She told me she ___ (help) me later.", a: ["would help"],
      why: "`will help` تصبح `would help`." },
    { t: "fill", q: "We ___ (travel) to Turkey, but we cancelled the trip.", a: ["were going to travel"],
      why: "خطة لم تتحقق: `were going to`." },
    { t: "fill", q: "I knew the company ___ (not / survive) the crisis.", a: ["wouldn't survive", "would not survive"],
      why: "توقع ماضٍ بالنفي: `wouldn't survive`." },
    { t: "fix", q: "I thought you will like it.", a: ["I thought you would like it."],
      why: "بعد `thought`: `would`." },
    { t: "fix", q: "I am going to visit her last week, but I was ill.", a: ["I was going to visit her last week, but I was ill."],
      why: "خطة ماضية: `was going to`." },
    { t: "fix", q: "He said he will call me.", a: ["He said he would call me."],
      why: "الكلام المنقول: `would`." },
    { t: "rewrite", q: "“I will finish it tomorrow,” she said. (Begin with: She said she ...)", ask: "انقل الكلام.",
      a: ["She said she would finish it tomorrow.", "She said she would finish it the next day.", "She said she would finish it the following day."],
      why: "`will` تصبح `would`." }
  ]
};
