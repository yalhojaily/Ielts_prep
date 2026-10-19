window.UNITS = window.UNITS || {};
window.UNITS[31] = {
  id: 31,
  title: "Conditional sentences overview",
  ar: "مراجعة جمل الشرط",
  idea: "لاختيار نوع الشرط اسأل: **متى؟** (حاضر/مستقبل أم ماضٍ) و**هل هو ممكن؟** (حقيقي أم خيالي). الإجابتان تحددان النوع.",
  uses: [
    ["دائمًا صحيح ← 0", "If you don't water plants, they die."],
    ["ممكن في المستقبل ← 1", "If I pass, I'll celebrate."],
    ["خيالي الآن ← 2", "If I could fly, I'd visit every country."],
    ["لم يحدث في الماضي ← 3", "If I'd known, I'd have come."]
  ],
  formula: [
    ["0", "If you {v:press} it, it {v:opens}."],
    ["1", "If you {v:press} it, it {a:will} {v:open}."],
    ["2", "If you {v:pressed} it, it {a:would} {v:open}."],
    ["3", "If you {a:had} {v:pressed} it, it {a:would have} {v:opened}."]
  ],
  notes: [
    { title: "النوع 1 أم 2؟ حسب رأيك",
      body: "الجملة نفسها تكون من النوع 1 إذا رأيتها محتملة، ومن النوع 2 إذا رأيتها بعيدة.",
      en: "If I {v:get} the job, I'll move. (likely) · If I {v:got} the job, I'd move. (unlikely)" },
    { title: "الاختصار 'd",
      body: "في جزء النتيجة `'d` = `would`. في جزء if، `'d` + v3 = `had`.",
      en: "If I{a:'d} {v:known}, I{a:'d have} {v:told} you." }
  ],
  examples: [
    ["{x:If} {s:you} {v:freeze} water, {s:it} {v:becomes} ice.", "إذا جمدت الماء يصبح ثلجًا."],
    ["{x:If} {s:I} {v:finish} early, {s:I}{a:'ll} {v:call} you.", "إذا انتهيت مبكرًا سأتصل بك."],
    ["{x:If} {s:I} {v:spoke} English fluently, {s:I}{a:'d} {v:apply} for that job.", "لو كنت أتكلم الإنجليزية بطلاقة لتقدمت لتلك الوظيفة."],
    ["{x:If} {s:she} {a:hadn't} {v:helped} me, {s:I} {a:would have} {v:failed}.", "لو لم تساعدني لرسبت."]
  ],
  mistakes: [
    ["If I would know, I would tell you.", "If I knew, I would tell you.", "لا `would` بعد if."],
    ["If you will need help, call me.", "If you need help, call me.", "لا `will` بعد if."],
    ["If I had more money, I will buy a car.", "If I had more money, I would buy a car.", "الماضي بعد if مع `would` في النتيجة."],
    ["If they had come, we would had fun.", "If they had come, we would have had fun.", "النوع 3: `would have had`."]
  ],
  ielts: {
    text: "في **Writing Task 2** خطة جيدة: النوع 1 لعرض نتيجة محتملة لحل مقترح، والنوع 2 لتخيل سياسة غير موجودة. احرص على صحة الأفعال؛ المصحح ينظر إلى دقتها أكثر من عددها.",
    en: "If cities introduced congestion charges, traffic would decrease and air quality would improve."
  },
  questions: [
    { t: "mcq", q: "If you ___ ice, it melts.", o: ["heat", "will heat", "heated", "would heat"], a: 0, why: "النوع 0." },
    { t: "mcq", q: "If I see Ali, I ___ him your message.", o: ["give", "would give", "'ll give", "gave"], a: 2, why: "النوع 1." },
    { t: "mcq", q: "If I ___ taller, I would play basketball.", o: ["am", "were", "had been", "will be"], a: 1, why: "النوع 2." },
    { t: "mcq", q: "If you had told me, I ___.", o: ["would come", "will come", "would have come", "came"], a: 2, why: "النوع 3." },
    { t: "mcq", q: "If I ___ his address, I'd send him a card. But I don't.", o: ["know", "knew", "had known", "will know"], a: 1, why: "حاضر خيالي: النوع 2." },
    { t: "mcq", q: "We ___ the match if our best player hadn't been injured.", o: ["would win", "would have won", "will win", "won"], a: 1, why: "النوع 3." },
    { t: "fill", q: "If it ___ (be) sunny tomorrow, we'll go to the beach.", a: ["is"], why: "النوع 1: `is`." },
    { t: "fill", q: "If I ___ (have) a car, I would drive to work.", a: ["had"], why: "النوع 2." },
    { t: "fill", q: "If we ___ (not / miss) the flight, we would have arrived on time.", a: ["hadn't missed", "had not missed"], why: "النوع 3." },
    { t: "fill", q: "What would you do if you ___ (lose) your job?", a: ["lost"], why: "النوع 2: `lost`." },
    { t: "fix", q: "If I will finish early, I'll go to the gym.", a: ["If I finish early, I'll go to the gym.", "If I finish early, I will go to the gym."], why: "لا `will` بعد if." },
    { t: "fix", q: "If she studied, she would have passed the exam last week.", a: ["If she had studied, she would have passed the exam last week."], why: "الماضي: `had studied`." },
    { t: "rewrite", q: "I don't have enough money, so I can't buy it. (Begin with: If I had ...)", ask: "اكتب جملة من النوع الثاني.",
      a: ["If I had enough money, I could buy it.", "If I had enough money, I would buy it.", "If I had enough money, I'd buy it."],
      why: "خيال في الحاضر: `If I had..., I could/would buy it`." }
  ]
};
