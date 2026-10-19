window.UNITS = window.UNITS || {};
window.UNITS[109] = {
  id: 109,
  title: "Dependent prepositions",
  ar: "حروف الجر الملازمة",
  idea: "كثير من **الصفات والأسماء** يتبعها حرف جر ثابت لا يتغير: `good at, interested in, afraid of, responsible for, the reason for`. لا قاعدة منطقية لها؛ تُحفظ مع الكلمة كوحدة واحدة. وبعدها اسم أو `-ing`.",
  uses: [
    ["صفة + حرف جر", "I'm good at maths."],
    ["اسم + حرف جر", "There's a big increase in prices."],
    ["+ -ing", "She's afraid of flying."],
    ["حرف الجر يغير المعنى", "angry with someone / angry about something"]
  ],
  formula: [
    ["at", "{v:good / bad / surprised} {x:at}"],
    ["of", "{v:afraid / proud / tired / aware / full / capable} {x:of}"],
    ["in / on / with / for / about / to", "{v:interested} {x:in} · {v:keen} {x:on} · {v:satisfied / angry} {x:with} · {v:famous / responsible} {x:for} · {v:worried / excited} {x:about} · {v:similar / married / addicted} {x:to}"],
    ["أسماء", "{v:increase / rise / decrease} {x:in} · {v:reason / demand / need} {x:for} · {v:effect / impact / influence} {x:on} · {v:solution / answer / key} {x:to}"]
  ],
  notes: [
    { title: "different from",
      body: "الأصح في الاختبار `different from` (و`different to` بريطانية مقبولة).",
      en: "Riyadh is {v:different} {x:from} Jeddah." },
    { title: "increase in / increase of",
      body: "`an increase in prices` (في الشيء). `an increase of 10%` (بمقدار).",
      en: "a rise {x:in} unemployment · a rise {x:of} 5%" },
    { title: "impact on",
      body: "`impact` و`effect` و`influence` كلها تأخذ `on`.",
      en: "Technology has a big {v:impact} {x:on} education." }
  ],
  examples: [
    ["I'm not very good {x:at} cooking.", "لست ماهرًا في الطبخ."],
    ["She's interested {x:in} history.", "هي مهتمة بالتاريخ."],
    ["My parents are proud {x:of} me.", "والداي فخوران بي."],
    ["Who is responsible {x:for} this project?", "من المسؤول عن هذا المشروع؟"],
    ["Social media has a strong influence {x:on} young people.", "لوسائل التواصل تأثير قوي على الشباب."]
  ],
  mistakes: [
    ["I'm good in English.", "I'm good at English.", "`good at`."],
    ["She is interested about art.", "She is interested in art.", "`interested in`."],
    ["The reason of the problem.", "The reason for the problem.", "`reason for`."],
    ["It has an effect in health.", "It has an effect on health.", "`effect on`."]
  ],
  ielts: {
    text: "هذه من أهم ما يفرّق بين B1 وB2 في **Writing Task 2**. احفظ: `have an impact on`, `the solution to`, `the reason for`, `an increase in`, `responsible for`, `aware of`, `similar to`, `dependent on`.",
    en: "Governments are responsible for finding a solution to this problem, as it has a serious impact on public health."
  },
  questions: [
    { t: "mcq", q: "He's very good ___ football.", o: ["in", "at", "on", "with"], a: 1, why: "`good at`." },
    { t: "mcq", q: "I'm afraid ___ dogs.", o: ["from", "of", "about", "with"], a: 1, why: "`afraid of`." },
    { t: "mcq", q: "There has been an increase ___ the number of students.", o: ["of", "on", "in", "at"], a: 2, why: "`increase in`." },
    { t: "mcq", q: "What's the solution ___ this problem?", o: ["for", "of", "to", "on"], a: 2, why: "`solution to`." },
    { t: "mcq", q: "Smoking has a negative effect ___ your health.", o: ["in", "on", "to", "at"], a: 1, why: "`effect on`." },
    { t: "mcq", q: "I'm not satisfied ___ the service.", o: ["of", "with", "about", "from"], a: 1, why: "`satisfied with`." },
    { t: "fill", q: "Madinah is famous ___ its dates.", a: ["for"], why: "`famous for`." },
    { t: "fill", q: "Are you aware ___ the risks?", a: ["of"], why: "`aware of`." },
    { t: "fill", q: "This phone is similar ___ mine.", a: ["to"], why: "`similar to`." },
    { t: "fill", q: "What's the reason ___ the delay?", a: ["for"], why: "`reason for`." },
    { t: "fix", q: "I'm very interested about economics.", a: ["I'm very interested in economics.", "I am very interested in economics."], why: "`interested in`." },
    { t: "fix", q: "She is responsible of the marketing team.", a: ["She is responsible for the marketing team."], why: "`responsible for`." },
    { t: "fix", q: "Technology has a big impact in our lives.", a: ["Technology has a big impact on our lives."], why: "`impact on`." }
  ]
};
