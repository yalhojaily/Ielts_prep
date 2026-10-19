window.UNITS = window.UNITS || {};
window.UNITS[49] = {
  id: 49,
  title: "Types of verbs",
  ar: "أنواع الأفعال",
  idea: "الأفعال أنواع: **أساسية** تحمل المعنى (`eat, run`)، و**مساعدة** تساعد في بناء الزمن والسؤال (`be, do, have`)، و**ناقصة** تضيف معنى (`can, must`). ومن حيث المفعول: **متعدٍّ** يحتاج مفعولًا (`buy something`)، و**لازم** لا يحتاجه (`arrive`). وهناك **أفعال ربط** (`be, seem, become`) يأتي بعدها صفة.",
  uses: [
    ["متعدٍّ: يحتاج مفعولًا", "She bought a car."],
    ["لازم: لا يأخذ مفعولًا", "The guests arrived."],
    ["فعل ربط + صفة", "He seems tired. / It became cold."],
    ["فعل له المعنيان", "I opened the door. / The door opened."]
  ],
  formula: [
    ["مساعد", "{a:be / do / have} → {s:She} {a:is} {v:working}. {a:Did} you {v:go}?"],
    ["ناقص", "{a:can, could, will, would, shall, should, may, might, must}"],
    ["ربط", "{v:be, seem, look, feel, become, get, sound, taste, appear} + {x:adjective}"]
  ],
  notes: [
    { title: "أفعال الربط تأخذ صفة لا ظرفًا",
      body: "`She looks happy` وليس `happily`، لأن الصفة تصف الفاعل لا الفعل.",
      en: "The food {v:tastes} {x:good}. · You {v:look} {x:tired}." },
    { title: "اللازم لا يُبنى للمجهول",
      body: "`happen, arrive, die, exist, occur, sleep` لا تأتي بـ `was + v3`.",
      en: "The problem {v:occurred} last week. (not: was occurred)" },
    { title: "do فعل أساسي ومساعد",
      body: "في `What do you do?` الأولى مساعدة والثانية أساسية.",
      en: "{a:Did} you {v:do} your homework?" }
  ],
  examples: [
    ["{s:The baby} {v:slept} for three hours.", "نام الطفل ثلاث ساعات. (لازم)"],
    ["{s:I} {v:sent} {s:the email}.", "أرسلت الرسالة. (متعدٍّ)"],
    ["{s:This plan} {v:sounds} interesting.", "تبدو هذه الخطة مثيرة."],
    ["{s:The price} {v:increased}. / {s:They} {v:increased} {s:the price}.", "ارتفع السعر. / رفعوا السعر."]
  ],
  mistakes: [
    ["She looks beautifully.", "She looks beautiful.", "بعد فعل الربط صفة."],
    ["The accident was occurred at night.", "The accident occurred at night.", "`occur` لازم."],
    ["I arrived the airport.", "I arrived at the airport.", "`arrive` لازم ويحتاج حرف جر `at / in`."],
    ["He explained me.", "He explained it to me.", "`explain` متعدٍّ يحتاج المفعول، والشخص بعد `to`."]
  ],
  ielts: {
    text: "في **Writing Task 1** أفعال مثل `rise, fall, increase` تأتي لازمة غالبًا: `Sales rose` وليس `Sales were risen`. ومعرفة اللازم والمتعدي تمنع أخطاء المجهول.",
    en: "The number of visitors rose steadily, while the cost of tickets remained stable."
  },
  questions: [
    { t: "mcq", q: "The soup tastes ___.", o: ["deliciously", "delicious", "deliciousness", "delicious taste"], a: 1, why: "فعل ربط + صفة." },
    { t: "mcq", q: "What ___ yesterday?", o: ["was happened", "happened", "did happen", "has happened it"], a: 1, why: "`happen` لازم." },
    { t: "mcq", q: "We arrived ___ Riyadh at midnight.", o: ["to", "in", "-", "on"], a: 1, why: "`arrive in` + مدينة." },
    { t: "mcq", q: "Prices ___ by 10% last year.", o: ["were risen", "rose", "raised", "were rise"], a: 1, why: "`rise` لازم: `rose`." },
    { t: "mcq", q: "The government ___ taxes last year.", o: ["rose", "raised", "was raised", "risen"], a: 1, why: "`raise` متعدٍّ (رفع شيئًا)." },
    { t: "fill", q: "You ___ (seem) worried. Is everything OK?", a: ["seem"], why: "فعل ربط." },
    { t: "fill", q: "He became very ___ (success).", a: ["successful"], why: "بعد `become` صفة." },
    { t: "fill", q: "The plane arrived ___ the airport on time.", a: ["at"], why: "`arrive at` + مكان محدد." },
    { t: "fix", q: "The flowers smell nicely.", a: ["The flowers smell nice."], why: "بعد فعل الربط صفة." },
    { t: "fix", q: "Many changes were happened in the city.", a: ["Many changes happened in the city."], why: "`happen` لازم." },
    { t: "fix", q: "Sales were increased dramatically in 2020.", a: ["Sales increased dramatically in 2020."], why: "هنا `increase` لازم (المبيعات ارتفعت)." },
    { t: "rewrite", q: "He looks. He is angry. (Make one sentence with: look)", ask: "اكتب جملة واحدة.", a: ["He looks angry."], why: "`look` + صفة." }
  ]
};
