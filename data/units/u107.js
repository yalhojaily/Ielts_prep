window.UNITS = window.UNITS || {};
window.UNITS[107] = {
  id: 107,
  title: "Prepositions of time",
  ar: "حروف جر الزمان",
  idea: "القاعدة الذهبية: `at` للساعة والنقطة الزمنية (`at 5 o'clock`)، `on` للأيام والتواريخ (`on Monday, on 5 May`)، `in` للفترات الأطول: الشهور والسنوات والقرون والفصول وأجزاء اليوم (`in July, in 2020, in the morning`).",
  uses: [
    ["at", "at 7:30, at noon, at night, at the weekend, at the moment"],
    ["on", "on Friday, on 10 June, on my birthday, on Friday morning"],
    ["in", "in March, in 2025, in summer, in the evening, in the 1990s"],
    ["بلا حرف جر", "this week, next month, last year, every day, tomorrow"]
  ],
  formula: [
    ["at", "{x:at} + time / {x:at} night / {x:at} the weekend (UK)"],
    ["on", "{x:on} + day / date / specific day"],
    ["in", "{x:in} + month / year / season / century / part of day"],
    ["مدة", "{x:for} 3 years · {x:since} 2020 · {x:during} the meeting · {x:until / by} Friday"]
  ],
  notes: [
    { title: "in the morning لكن on Monday morning",
      body: "إذا ذكرنا يومًا محددًا نستخدم `on`.",
      en: "{x:in} the morning · {x:on} Monday morning · {x:at} night" },
    { title: "لا حرف جر مع this / next / last / every",
      body: "خطأ شائع: `in next week`.",
      en: "I'll call you {x:next} week. (not: in next week)" },
    { title: "until أم by؟",
      body: "`until` = حتى (استمرار). `by` = في موعد أقصاه.",
      en: "I'll wait {x:until} 5. · Send it {x:by} 5. (not later than)" },
    { title: "in = بعد مدة من الآن",
      body: "`in two days` = بعد يومين.",
      en: "The course starts {x:in} two weeks." }
  ],
  examples: [
    ["The meeting starts {x:at} 10 a.m.", "يبدأ الاجتماع الساعة 10 صباحًا."],
    ["I was born {x:in} 1990.", "ولدت عام 1990."],
    ["We usually travel {x:in} summer.", "نسافر عادة في الصيف."],
    ["See you {x:on} Thursday.", "أراك يوم الخميس."],
    ["Please submit the form {x:by} Sunday.", "سلّم النموذج في موعد أقصاه الأحد."]
  ],
  mistakes: [
    ["in Monday", "on Monday", "الأيام: `on`."],
    ["at 2020", "in 2020", "السنوات: `in`."],
    ["in next week", "next week", "بلا حرف جر."],
    ["on the night", "at night", "`at night`."]
  ],
  ielts: {
    text: "في **Writing Task 1** تحتاجها في كل تقرير: `in 2010`, `between 2000 and 2010`, `from 1990 to 2000`, `over the period`, `by 2020`. وفي **Listening Section 1** المواعيد والتواريخ.",
    en: "Between 2000 and 2010, the figure rose steadily, and by 2020 it had reached its peak."
  },
  questions: [
    { t: "mcq", q: "The shop opens ___ 9 a.m.", o: ["in", "on", "at", "by"], a: 2, why: "ساعة: `at`." },
    { t: "mcq", q: "My birthday is ___ March.", o: ["on", "in", "at", "by"], a: 1, why: "شهر: `in`." },
    { t: "mcq", q: "I'll see you ___ Saturday.", o: ["in", "on", "at", "-"], a: 1, why: "يوم: `on`." },
    { t: "mcq", q: "We're going to Abha ___ next week.", o: ["in", "on", "at", "-"], a: 3, why: "بلا حرف جر." },
    { t: "mcq", q: "I don't like driving ___ night.", o: ["in", "on", "at", "by"], a: 2, why: "`at night`." },
    { t: "mcq", q: "You must finish the report ___ Thursday. Not later.", o: ["until", "by", "since", "for"], a: 1, why: "موعد أقصى: `by`." },
    { t: "fill", q: "She was born ___ 15 April 1995.", a: ["on"], why: "تاريخ: `on`." },
    { t: "fill", q: "I usually read ___ the evening.", a: ["in"], why: "`in the evening`." },
    { t: "fill", q: "The train leaves ___ ten minutes. (= 10 minutes from now)", a: ["in"], why: "`in ten minutes`." },
    { t: "fill", q: "I've lived here ___ 2018.", a: ["since"], why: "نقطة بداية: `since`." },
    { t: "fix", q: "I'll call you in Friday.", a: ["I'll call you on Friday.", "I will call you on Friday."], why: "`on Friday`." },
    { t: "fix", q: "The company was founded at 1999.", a: ["The company was founded in 1999."], why: "`in 1999`." },
    { t: "fix", q: "We met in last summer.", a: ["We met last summer."], why: "بلا حرف جر." }
  ]
};
