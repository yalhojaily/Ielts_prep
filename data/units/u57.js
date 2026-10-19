window.UNITS = window.UNITS || {};
window.UNITS[57] = {
  id: 57,
  title: "Ability",
  ar: "التعبير عن القدرة",
  idea: "للقدرة نستخدم `can` (حاضر) و`could` (ماضٍ عام) و`be able to` (لكل الأزمنة الأخرى). وللقدرة على النجاح في موقف محدد في الماضي نستخدم `was able to` أو `managed to`، لا `could`.",
  uses: [
    ["قدرة حاضرة", "I can read Arabic and English."],
    ["قدرة عامة في الماضي", "I could swim when I was five."],
    ["نجاح في موقف محدد ماضٍ", "The fire was big, but everyone was able to escape."],
    ["قدرة مستقبلية أو بعد مساعد", "I'll be able to help tomorrow. / I've never been able to cook."]
  ],
  formula: [
    ["حاضر", "{s:I} {a:can / can't} {v:drive}."],
    ["ماضٍ", "{s:She} {a:could / couldn't} {v:read} at four."],
    ["موقف محدد", "{s:We} {a:were able to / managed to} {v:find} the hotel."],
    ["مستقبل / تام", "{s:I} {a:will be able to} {v:come}. · {s:I} {a:haven't been able to} {v:sleep}."]
  ],
  notes: [
    { title: "could أم was able to؟",
      body: "في الإثبات لموقف واحد محدد استخدم `was able to / managed to`. في النفي `couldn't` تصلح للحالتين.",
      en: "I {a:was able to} {v:catch} the last train. · I {a:couldn't} {v:catch} it." },
    { title: "أفعال الحواس",
      body: "مع `see, hear, smell, understand, remember` نستخدم `can / could` لمعنى «أستطيع الآن».",
      en: "I {a:can} {v:hear} music. · I {a:couldn't} {v:understand} him." },
    { title: "be good at",
      body: "بديل طبيعي للحديث عن المهارات.",
      en: "She's {x:good at} {v:drawing}." }
  ],
  examples: [
    ["{s:My son} {a:can} {v:count} to 100.", "ابني يستطيع العد إلى 100."],
    ["{s:I} {a:couldn't} {v:find} my keys this morning.", "لم أستطع إيجاد مفاتيحي هذا الصباح."],
    ["{s:He} {a:managed to} {v:pass} the exam despite being ill.", "تمكن من النجاح رغم مرضه."],
    ["{a:Will} you {a:be able to} {v:join} us?", "هل ستتمكن من الانضمام إلينا؟"],
    ["{s:I} {v:love} {a:being able to} {v:work} from home.", "أحب أن أتمكن من العمل من المنزل."]
  ],
  mistakes: [
    ["I will can drive next year.", "I will be able to drive next year.", "المستقبل: `will be able to`."],
    ["The test was hard but I could pass it.", "The test was hard but I was able to pass it.", "نجاح في موقف محدد: `was able to`."],
    ["I have never could swim.", "I have never been able to swim.", "بعد `have`: `been able to`."],
    ["She can to sing well.", "She can sing well.", "لا to بعد can."]
  ],
  ielts: {
    text: "في **Speaking Part 1** عن المهارات (`Can you cook?`) و**Part 2** عن الإنجازات (`I managed to...`). استخدام `managed to` و`was able to` بدل `could` في المواقف المحددة دليل على دقة متقدمة.",
    en: "It was difficult at first, but after a few months I managed to speak quite confidently."
  },
  questions: [
    { t: "mcq", q: "I ___ play the piano when I was a child.", o: ["can", "could", "was able", "can to"], a: 1, why: "قدرة عامة ماضية: `could`." },
    { t: "mcq", q: "The road was blocked, but we ___ find another way.", o: ["could", "were able to", "can", "able to"], a: 1, why: "نجاح في موقف محدد." },
    { t: "mcq", q: "I'm sorry, I ___ come to your party tomorrow.", o: ["won't be able to", "can't to", "couldn't", "am not able"], a: 0, why: "مستقبل: `won't be able to`." },
    { t: "mcq", q: "Since the operation, she ___ walk without help.", o: ["can", "has been able to", "could", "is able"], a: 1, why: "مع `since`: `has been able to`." },
    { t: "mcq", q: "I ___ hear you. Can you speak louder?", o: ["can't", "couldn't able", "not can", "don't can"], a: 0, why: "حاضر منفي: `can't`." },
    { t: "fill", q: "After hours of trying, he ___ (manage) to fix the car.", a: ["managed"], why: "`managed to`." },
    { t: "fill", q: "I've lost my glasses, so I ___ (not / read) this.", a: ["can't read", "cannot read", "can not read"], why: "`can't read`." },
    { t: "fill", q: "I hope I ___ (be able to) visit you next year.", ask: "اكتب صيغة المستقبل المناسبة.", a: ["will be able to", "'ll be able to"], why: "`will be able to`." },
    { t: "fix", q: "She will can speak French after the course.", a: ["She will be able to speak French after the course."], why: "`will be able to`." },
    { t: "fix", q: "I haven't could sleep well recently.", a: ["I haven't been able to sleep well recently.", "I have not been able to sleep well recently."], why: "`been able to`." },
    { t: "fix", q: "There was a fire, but all the people could escape.", a: ["There was a fire, but all the people were able to escape.", "There was a fire, but all the people managed to escape."], why: "موقف محدد: `were able to`." },
    { t: "rewrite", q: "It was difficult, but I found the address in the end. (Use: managed to)", ask: "أعد الصياغة.", a: ["It was difficult, but I managed to find the address in the end.", "It was difficult, but in the end I managed to find the address."], why: "`managed to`." }
  ]
};
