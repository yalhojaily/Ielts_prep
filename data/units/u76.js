window.UNITS = window.UNITS || {};
window.UNITS[76] = {
  id: 76,
  title: "Approximate quantity",
  ar: "الكميات التقريبية",
  idea: "عندما لا نعرف العدد بالضبط نستخدم كلمات التقريب: `about, around, approximately, roughly` (حوالي)، و`almost, nearly` (تقريبًا، أقل قليلًا)، و`just over / just under` (أكثر/أقل بقليل)، و`or so` بعد العدد.",
  uses: [
    ["حوالي", "About 200 people came."],
    ["أقل بقليل", "It's nearly 5 o'clock. / Almost half the students..."],
    ["أكثر أو أقل بقليل", "just over 40% / just under a million"],
    ["تقدير عام", "dozens of, a couple of, a handful of, tens of thousands"]
  ],
  formula: [
    ["قبل العدد", "{x:about / around / approximately / roughly} 50"],
    ["أقل", "{x:almost / nearly / just under} 50"],
    ["أكثر", "{x:just over / more than / slightly above} 50"],
    ["بعد العدد", "50 {x:or so} · 50 {x:or more}"]
  ],
  notes: [
    { title: "almost all لا almost of",
      body: "`almost all (of) the people`، لا `almost of the people`.",
      en: "{x:Almost all} the guests left early." },
    { title: "a couple of",
      body: "= اثنان أو عدد قليل.",
      en: "I'll be there in {x:a couple of} minutes." },
    { title: "dozens / scores / tens of thousands",
      body: "تعبيرات للأعداد الكبيرة غير المحددة.",
      en: "{x:Dozens of} people were injured. · {x:Tens of thousands of} fans attended." }
  ],
  examples: [
    ["The trip takes {x:roughly} three hours.", "الرحلة تستغرق حوالي ثلاث ساعات."],
    ["{x:Nearly} half of the population lives in cities.", "يعيش قرابة نصف السكان في المدن."],
    ["The company employs {x:just over} 1,000 people.", "توظف الشركة ما يزيد قليلًا عن 1000 شخص."],
    ["I'll wait ten minutes {x:or so}.", "سأنتظر عشر دقائق أو نحو ذلك."]
  ],
  mistakes: [
    ["Almost of the students passed.", "Almost all of the students passed.", "`almost all`."],
    ["Around about 50 people.", "About 50 people. / Around 50 people.", "كلمة تقريب واحدة."],
    ["Dozen of people.", "Dozens of people.", "`dozens of`."]
  ],
  ielts: {
    text: "لا غنى عنها في **Writing Task 1** لأنك نادرًا ما تقرأ رقمًا دقيقًا من الرسم: `just over a quarter`, `approximately 60%`, `nearly doubled`. التنويع فيها يرفع الدرجة.",
    en: "In 2010, just under a third of adults exercised regularly, but by 2020 the figure had risen to approximately 45%."
  },
  questions: [
    { t: "mcq", q: "The concert lasted ___ two hours.", o: ["about", "almost of", "or so", "dozens"], a: 0, why: "`about` قبل العدد." },
    { t: "mcq", q: "___ all the shops were closed.", o: ["Almost", "Almost of", "Nearly of", "Most of all"], a: 0, why: "`Almost all`." },
    { t: "mcq", q: "49% is ___ half.", o: ["just over", "just under", "more than", "above"], a: 1, why: "أقل بقليل: `just under`." },
    { t: "mcq", q: "I'll see you in ___ days.", o: ["a couple of", "a couple", "couple of", "a couples of"], a: 0, why: "`a couple of`." },
    { t: "mcq", q: "___ of people were waiting outside.", o: ["Dozen", "Dozens", "Dozens of", "A dozens"], a: 1, why: "`Dozens of`." },
    { t: "fill", q: "There were 20 people ___ so at the meeting.", a: ["or"], why: "`20 or so`." },
    { t: "fill", q: "52% is just ___ half.", a: ["over"], why: "`just over`." },
    { t: "fill", q: "It's ___ midnight. We should go to bed.", a: ["nearly", "almost"], why: "`nearly midnight`." },
    { t: "fix", q: "Almost of my friends are married.", a: ["Almost all of my friends are married.", "Almost all my friends are married.", "Most of my friends are married."], why: "`Almost all`." },
    { t: "fix", q: "Dozen of cars were damaged.", a: ["Dozens of cars were damaged."], why: "`Dozens of`." },
    { t: "rewrite", q: "The figure was 32%. (Describe it using: just under a third)", ask: "اكتب جملة تبدأ بـ The figure was ...", a: ["The figure was just under a third."], why: "32% أقل بقليل من الثلث (33%)." },
    { t: "rewrite", q: "The figure was 74%. (Use: nearly three quarters)", ask: "اكتب جملة تبدأ بـ The figure was ...", a: ["The figure was nearly three quarters."], why: "75% = ثلاثة أرباع." }
  ]
};
