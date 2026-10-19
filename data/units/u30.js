window.UNITS = window.UNITS || {};
window.UNITS[30] = {
  id: 30,
  title: "Other conditional sentences",
  ar: "أشكال أخرى لجمل الشرط",
  idea: "يمكن المزج بين الأنواع (الشرط المختلط)، واستخدام أفعال ناقصة غير `will / would` في النتيجة، وأدوات أخرى بدل `if` مثل `as long as, provided that, in case, otherwise`.",
  uses: [
    ["شرط مختلط: ماضٍ ← نتيجة حاضرة", "If I had taken the job, I would be rich now."],
    ["شرط مختلط: حاضر ← نتيجة ماضية", "If I were braver, I would have spoken."],
    ["أفعال ناقصة أخرى", "If you finish early, you can leave."],
    ["أدوات بديلة", "You can borrow it as long as you return it."]
  ],
  formula: [
    ["مختلط 3 ← 2", "{x:If} + {a:had} {v:v3}, {a:would} + {v:verb} {x:(now)}"],
    ["مختلط 2 → 3", "{x:If} + {v:past}, {a:would have} + {v:v3}"],
    ["modal", "{x:If} ..., {a:can / may / might / should / could} + {v:verb}"],
    ["أدوات", "{x:as long as / provided that / in case / otherwise / unless}"]
  ],
  notes: [
    { title: "in case ليست if",
      body: "`in case` = احتياطًا لاحتمال. `Take an umbrella in case it rains` = خذها احتياطًا سواء أمطرت أم لا.",
      en: "Take some money {x:in case} you {v:need} a taxi." },
    { title: "as long as / provided that",
      body: "بمعنى «بشرط أن»، وبعدها مضارع للمستقبل مثل `if`.",
      en: "You can use my car {x:as long as} you {v:drive} carefully." },
    { title: "otherwise",
      body: "بمعنى «وإلا»، وتأتي في جملة مستقلة أو بعد فاصلة منقوطة.",
      en: "Hurry up, {x:otherwise} we'll miss the bus." },
    { title: "Should you / Had I (رسمي)",
      body: "في الأسلوب الرسمي نحذف `if` ونقلب الترتيب.",
      en: "{a:Should} you {v:need} help, please contact us. = If you need help..." }
  ],
  examples: [
    ["{x:If} {s:I} {a:had} {v:saved} money, {s:I} {a:wouldn't} {v:be} in debt now.", "لو ادخرت المال لما كنت مدينًا الآن."],
    ["{x:If} {s:you}'re tired, {s:you} {a:should} {v:rest}.", "إذا كنت متعبًا فعليك أن ترتاح."],
    ["{x:If} {s:it} {v:stops} raining, {s:we} {a:might} {v:go} out.", "إذا توقف المطر فقد نخرج."],
    ["{x:Provided that} {s:you} {v:pay} on time, there's no extra fee.", "بشرط أن تدفع في الوقت، لا توجد رسوم إضافية."],
    ["{a:Had} {s:I} {v:known}, I would have helped.", "لو كنت أعلم لساعدت."]
  ],
  mistakes: [
    ["If I had studied medicine, I would have been a doctor now.", "If I had studied medicine, I would be a doctor now.", "النتيجة في الحاضر (`now`)، فنستخدم `would be`."],
    ["Take a coat if it will get cold.", "Take a coat in case it gets cold.", "للاحتياط: `in case` + مضارع."],
    ["As long as you will help me, I'll finish.", "As long as you help me, I'll finish.", "بعد `as long as` لا `will`."]
  ],
  ielts: {
    text: "الشرط المختلط علامة على مستوى متقدم في **Speaking Part 2 و3**: `If I hadn't moved to Riyadh, I wouldn't have this job now.` جملة واحدة منه في الإجابة مؤثرة.",
    en: "If I hadn't started learning English at school, I probably wouldn't be working in an international company now."
  },
  questions: [
    { t: "mcq", q: "If I had won the lottery last year, I ___ rich now.", o: ["would have been", "would be", "will be", "am"], a: 1,
      why: "شرط ماضٍ ونتيجة حاضرة: `would be`." },
    { t: "mcq", q: "Take your phone ___ you get lost.", o: ["if", "unless", "in case", "provided"], a: 2,
      why: "احتياط: `in case`." },
    { t: "mcq", q: "You can come ___ you don't make noise.", o: ["as long as", "in case", "otherwise", "unless"], a: 0,
      why: "بشرط: `as long as`." },
    { t: "mcq", q: "Leave now, ___ you'll be late.", o: ["unless", "otherwise", "in case", "provided"], a: 1,
      why: "وإلا: `otherwise`." },
    { t: "mcq", q: "If you feel sick, you ___ see a doctor.", o: ["should", "would have", "had", "will have"], a: 0,
      why: "نصيحة: `should`." },
    { t: "fill", q: "If I ___ (be) more confident, I would have asked her.", a: ["were", "was"],
      why: "صفة دائمة (حاضر) ونتيجة ماضية." },
    { t: "fill", q: "If she hadn't missed the bus, she ___ (be) here now.", a: ["would be", "'d be"],
      why: "نتيجة حاضرة: `would be`." },
    { t: "fill", q: "Bring a sweater in case it ___ (get) cold.", a: ["gets"],
      why: "بعد `in case` مضارع بسيط." },
    { t: "fill", q: "___ you have any questions, please contact me.", ask: "اكتب الكلمة الرسمية التي تحلّ محل If.", a: ["Should"],
      why: "`Should you have...` = If you have." },
    { t: "fix", q: "If I had taken that job, I would have lived in Dubai now.", a: ["If I had taken that job, I would live in Dubai now.", "If I had taken that job, I would be living in Dubai now."],
      why: "النتيجة في الحاضر (`now`)." },
    { t: "fix", q: "Provided that you will pay, you can enter.", a: ["Provided that you pay, you can enter."],
      why: "لا `will` بعد `provided that`." },
    { t: "rewrite", q: "If you don't leave now, you'll miss the train. (Use: otherwise)", ask: "أعد الصياغة.",
      a: ["Leave now, otherwise you'll miss the train.", "Leave now, otherwise you will miss the train.", "Leave now; otherwise you'll miss the train.", "You should leave now, otherwise you'll miss the train."],
      why: "`otherwise` = وإلا." }
  ]
};
