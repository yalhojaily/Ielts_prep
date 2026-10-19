window.UNITS = window.UNITS || {};
window.UNITS[43] = {
  id: 43,
  title: "Reported speech",
  ar: "الكلام المنقول",
  idea: "الكلام المنقول هو أن تنقل ما قاله شخص بكلماتك دون علامات اقتباس. نستخدم `say` أو `tell`، ونغيّر **الضمائر** و**كلمات الزمان والمكان**، وغالبًا **نرجع الزمن خطوة** إلى الوراء (القاعدة 44).",
  uses: [
    ["كلام مباشر", "Ali said, “I am tired.”"],
    ["كلام منقول", "Ali said (that) he was tired."],
    ["نقل كلام ما زال صحيحًا (بلا تغيير الزمن)", "She says she likes it. / He said the Earth is round."]
  ],
  formula: [
    ["say", "{s:She} {v:said} (that) she {v:was} busy."],
    ["tell + شخص", "{s:She} {v:told} {s:me} (that) she {v:was} busy."],
    ["الضمائر", "“{s:I} like {s:your} car.” → He said {s:he} liked {s:my} car."]
  ],
  notes: [
    { title: "say أم tell؟",
      body: "`tell` يحتاج شخصًا بعده مباشرة: `tell me, tell her`. و`say` لا يأتي بعده شخص مباشرة؛ إذا ذكرنا الشخص نستخدم `say to someone`.",
      en: "He {v:told} {s:me} the news. · He {v:said} it was late. · He {v:said} {x:to} me that..." },
    { title: "تغيير الزمان والمكان",
      body: "`now → then`, `today → that day`, `tomorrow → the next day`, `yesterday → the day before`, `here → there`, `this → that`, `next week → the following week`.",
      en: "“I'll come {x:tomorrow}.” → He said he would come {x:the next day}." },
    { title: "that اختيارية",
      body: "في الكلام اليومي نحذف `that` كثيرًا، وفي الكتابة الرسمية الأفضل ذكرها.",
      en: "She said (that) she {v:was} ready." }
  ],
  examples: [
    ["{s:He} {v:said} (that) he {v:lived} in Riyadh.", "قال إنه يسكن في الرياض."],
    ["{s:She} {v:told} {s:us} she {a:had} {v:finished}.", "أخبرتنا أنها انتهت."],
    ["{s:The manager} {v:said} the meeting {a:was} {v:cancelled}.", "قال المدير إن الاجتماع أُلغي."],
    ["{s:My doctor} {v:told} {s:me} to drink more water.", "أخبرني طبيبي أن أشرب ماءً أكثر."]
  ],
  mistakes: [
    ["He said me that he was busy.", "He told me that he was busy.", "مع الشخص بعد الفعل: `told me`."],
    ["She told that she was ill.", "She said that she was ill.", "`tell` تحتاج شخصًا: إما `told me that` أو `said that`."],
    ["He said that I am tired. (He was talking about himself)", "He said that he was tired.", "نغيّر الضمير ليطابق المتحدث الأصلي."]
  ],
  ielts: {
    text: "في **Writing Task 2** تحتاجه لنقل آراء: `Some experts say that...`. وفي **Speaking Part 2** عند ذكر ما قاله شخص في القصة: `My friend told me that...`. والأهم التمييز بين `say` و`tell`.",
    en: "My manager told me that I had been selected for the training programme."
  },
  questions: [
    { t: "mcq", q: "She ___ me that she was leaving.", o: ["said", "told", "say", "talked"], a: 1, why: "شخص بعد الفعل: `told`." },
    { t: "mcq", q: "He ___ that the shop was closed.", o: ["said", "told", "tell", "spoke"], a: 0, why: "لا يوجد شخص: `said`." },
    { t: "mcq", q: "“I'm hungry,” she said. → She said ___ hungry.", o: ["I was", "she was", "she is being", "I am"], a: 1, why: "الضمير والزمن: `she was`." },
    { t: "mcq", q: "“I'll call tomorrow.” → He said he would call ___.", o: ["tomorrow", "the next day", "yesterday", "the day before"], a: 1, why: "`tomorrow → the next day`." },
    { t: "fill", q: "Ahmed ___ us that he had found a new job.", a: ["told"], why: "شخص بعد الفعل: `told`." },
    { t: "fill", q: "She ___ that she didn't feel well.", a: ["said"], why: "بلا شخص: `said`." },
    { t: "fill", q: "“This is my car.” → He said that ___ was his car.", a: ["that", "it"], why: "`this → that`." },
    { t: "fill", q: "“I live here.” → She said she lived ___.", a: ["there"], why: "`here → there`." },
    { t: "fix", q: "He said me the truth.", a: ["He told me the truth."], why: "`told me`." },
    { t: "fix", q: "She told that she was busy.", a: ["She said that she was busy.", "She said she was busy."], why: "بلا شخص: `said`." },
    { t: "fix", q: "“I'm a student.” → He said that I was a student.", a: ["He said that he was a student.", "He said he was a student."], why: "الضمير يتغير إلى `he`." },
    { t: "rewrite", q: "“I am very happy,” Sara said.", ask: "انقل الكلام بدءًا بـ Sara said ...", a: ["Sara said that she was very happy.", "Sara said she was very happy."], why: "`am → was`، `I → she`." }
  ]
};
