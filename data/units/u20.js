window.UNITS = window.UNITS || {};
window.UNITS[20] = {
  id: 20,
  title: "The future continuous",
  ar: "المستقبل المستمر",
  idea: "`will be` + الفعل مع `-ing` يصف حدثًا **سيكون جاريًا** في لحظة معينة في المستقبل. ويستخدم أيضًا للسؤال المهذب عن خطط شخص.",
  uses: [
    ["حدث جارٍ في وقت مستقبلي", "This time tomorrow I'll be flying to London."],
    ["أمر متوقع ضمن الروتين", "I'll be seeing him at work anyway."],
    ["سؤال مهذب عن الخطط", "Will you be using the car tonight?"]
  ],
  formula: [
    ["إثبات", "{s:I / you / she / they} {a:will be} {v:working}"],
    ["نفي", "{s:He} {a:won't be} {v:coming} to the meeting."],
    ["سؤال", "{a:Will} {s:you} {a:be} {v:staying} long?"]
  ],
  notes: [
    { title: "كلمات تدل عليه",
      body: "`this time tomorrow, at 8 p.m. tonight, next week at this time, in ten years' time`.",
      en: "{x:At 10 tomorrow}, I{a:'ll be} {v:sitting} in the exam hall." },
    { title: "سؤال مهذب",
      body: "`Will you be...ing?` ألطف من `Will you...?` لأنه يسأل عن الخطة لا يطلب طلبًا مباشرًا.",
      en: "{a:Will} you {a:be} {v:passing} the post office? Could you post this?" }
  ],
  examples: [
    ["{x:Don't call} at 9; {s:I}{a:'ll be} {v:driving}.", "لا تتصل الساعة 9، سأكون أقود."],
    ["{x:In ten years}, {s:most cars} {a:will be} {v:running} on electricity.", "بعد عشر سنوات ستعمل معظم السيارات بالكهرباء."],
    ["{a:Will} {s:you} {a:be} {v:working} on Friday?", "هل ستعمل يوم الجمعة؟"],
    ["{s:We} {a:won't be} {v:staying} at a hotel.", "لن نقيم في فندق."]
  ],
  mistakes: [
    ["This time tomorrow I will lie on the beach.", "This time tomorrow I will be lying on the beach.", "حدث جارٍ في لحظة مستقبلية: `will be lying`."],
    ["I will be work at 5.", "I will be working at 5.", "بعد `will be` نحتاج `-ing`."],
    ["She will being late.", "She will be late.", "لا نقول `will being`."]
  ],
  ielts: {
    text: "مفيد في **Speaking Part 3** عند وصف المستقبل البعيد: `In twenty years, people will be living in...`. يضيف تنوعًا إلى `will` البسيطة.",
    en: "I think in the next decade, many people will be working from home at least part of the week."
  },
  questions: [
    { t: "mcq", q: "Don't call me at 8. I ___ dinner.", o: ["will have", "will be having", "am have", "have"], a: 1,
      why: "حدث جارٍ في لحظة مستقبلية." },
    { t: "mcq", q: "This time next week, we ___ on the beach.", o: ["will be relaxing", "relax", "will relaxing", "are relax"], a: 0,
      why: "`This time next week` + المستقبل المستمر." },
    { t: "mcq", q: "___ you be using your laptop this evening?", o: ["Are", "Will", "Do", "Would be"], a: 1,
      why: "سؤال مهذب: `Will you be using...?`" },
    { t: "mcq", q: "At midnight, I ___ . I'll be asleep.", o: ["won't be studying", "won't studying", "don't study", "won't be study"], a: 0,
      why: "النفي: `won't be` + `-ing`." },
    { t: "fill", q: "At 3 p.m. tomorrow, I ___ (take) my exam.", a: ["will be taking", "'ll be taking"],
      why: "حدث جارٍ في وقت مستقبلي." },
    { t: "fill", q: "In 2050, people ___ (live) longer.", a: ["will be living", "will live"],
      why: "وصف وضع مستقبلي جارٍ (والبسيط مقبول)." },
    { t: "fill", q: "She ___ (not / work) tomorrow; it's her day off.", a: ["won't be working", "will not be working"],
      why: "نفي المستقبل المستمر." },
    { t: "fill", q: "Will you ___ (stay) here long?", ask: "اكتب الكلمتين: be + الفعل", a: ["be staying"],
      why: "`Will you be staying...?`" },
    { t: "fix", q: "This time tomorrow I will fly to Tokyo.", a: ["This time tomorrow I will be flying to Tokyo.", "This time tomorrow I'll be flying to Tokyo."],
      why: "حدث جارٍ في لحظة مستقبلية: `will be flying`." },
    { t: "fix", q: "They will be wait for us at the station.", a: ["They will be waiting for us at the station.", "They'll be waiting for us at the station."],
      why: "بعد `will be`: `waiting`." },
    { t: "fix", q: "Will you be come to the party?", a: ["Will you be coming to the party?"],
      why: "بعد `be` نحتاج `coming`." },
    { t: "rewrite", q: "I will start the meeting at 10 and finish at 12. What will I be doing at 11?", ask: "أجب بجملة كاملة تبدأ بـ At 11, I ...",
      a: ["At 11, I will be having a meeting.", "At 11, I'll be having a meeting.", "At 11, I will be in a meeting.", "At 11, I'll be in a meeting.", "At 11, I will be attending a meeting.", "At 11, I'll be attending a meeting."],
      why: "الاجتماع سيكون جاريًا الساعة 11: `I'll be having a meeting`." }
  ]
};
