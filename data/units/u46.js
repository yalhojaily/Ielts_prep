window.UNITS = window.UNITS || {};
window.UNITS[46] = {
  id: 46,
  title: "Reported speech with negatives",
  ar: "الكلام المنقول المنفي",
  idea: "النفي في الكلام المنقول يتبع قواعد إرجاع الزمن نفسها: `don't → didn't`، `isn't → wasn't`، `won't → wouldn't`. ولنقل **الأوامر المنفية** نستخدم `told / asked someone not to + verb`.",
  uses: [
    ["جملة منفية", "“I don't know.” → He said he didn't know."],
    ["أمر منفي", "“Don't touch it.” → She told me not to touch it."],
    ["نقل بـ deny و refuse", "He denied taking it. / She refused to sign."]
  ],
  formula: [
    ["don't → didn't", "“I {a:don't} {v:eat} meat.” → She said she {a:didn't} {v:eat} meat."],
    ["won't → wouldn't", "“I {a:won't} {v:be} late.” → He promised he {a:wouldn't} {v:be} late."],
    ["haven't → hadn't", "“I {a:haven't} {v:finished}.” → He said he {a:hadn't} {v:finished}."],
    ["أمر منفي", "“{a:Don't} {v:shout}!” → He told us {n:not} {a:to} {v:shout}."]
  ],
  notes: [
    { title: "not to لا to not",
      body: "في الأمر المنفي: `told me not to go`. الترتيب الصحيح `not to`.",
      en: "She asked me {n:not} {a:to} {v:tell} anyone." },
    { title: "didn't say أم said ... not",
      body: "`He didn't say he was ill` = لم يذكر. `He said he wasn't ill` = نفى أنه مريض. المعنى مختلف.",
      en: "He {v:said} he {a:wasn't} ill." }
  ],
  examples: [
    ["{s:She} {v:said} she {a:wasn't} hungry.", "قالت إنها ليست جائعة."],
    ["{s:He} {v:told} {s:me} he {a:hadn't} {v:received} the email.", "أخبرني أنه لم يستلم الرسالة."],
    ["{s:The guard} {v:told} {s:us} {n:not} {a:to} {v:park} there.", "طلب منا الحارس ألا نوقف السيارة هناك."],
    ["{s:They} {v:said} they {a:couldn't} {v:come}.", "قالوا إنهم لا يستطيعون الحضور."]
  ],
  mistakes: [
    ["He told me to not open it.", "He told me not to open it.", "`not to`."],
    ["She said she doesn't like it. (in the past)", "She said she didn't like it.", "نرجع الزمن: `didn't`."],
    ["He told me don't go.", "He told me not to go.", "الأمر المنفي: `not to + verb`."],
    ["They said they won't come.", "They said they wouldn't come.", "`won't → wouldn't`."]
  ],
  ielts: {
    text: "في **Speaking Part 2** عند حكاية تعليمات أو تحذيرات: `My father always told me not to...`. وتكرر في **Listening** عند نقل المتحدث لتعليمات.",
    en: "My teacher told me not to worry too much about my accent and to focus on clarity."
  },
  questions: [
    { t: "mcq", q: "“I don't understand.” → He said he ___ understand.", o: ["doesn't", "didn't", "don't", "hadn't"], a: 1, why: "`don't → didn't`." },
    { t: "mcq", q: "“Don't be late.” → She told me ___ late.", o: ["don't be", "not be", "not to be", "to not be"], a: 2, why: "`not to be`." },
    { t: "mcq", q: "“I won't tell anyone.” → He promised he ___ anyone.", o: ["won't tell", "wouldn't tell", "didn't tell", "not tell"], a: 1, why: "`won't → wouldn't`." },
    { t: "mcq", q: "“We haven't decided.” → They said they ___.", o: ["haven't decided", "hadn't decided", "didn't decided", "don't decide"], a: 1, why: "`hadn't decided`." },
    { t: "fill", q: "“I'm not ready.” → She said she ___ ready.", a: ["wasn't", "was not"], why: "`wasn't`." },
    { t: "fill", q: "“Don't touch the screen.” → He told us ___ touch the screen.", a: ["not to"], why: "`not to`." },
    { t: "fill", q: "“I can't swim.” → He said he ___ swim.", a: ["couldn't", "could not"], why: "`couldn't`." },
    { t: "fill", q: "“I didn't take it.” → He said he ___ it.", a: ["hadn't taken", "had not taken", "didn't take"], why: "`hadn't taken` (أو `didn't take` مقبولة)." },
    { t: "fix", q: "She told me to not worry.", a: ["She told me not to worry."], why: "`not to`." },
    { t: "fix", q: "The teacher told us don't use phones.", a: ["The teacher told us not to use phones.", "The teacher told us not to use our phones."], why: "`not to use`." },
    { t: "fix", q: "He said he won't help us.", a: ["He said he wouldn't help us.", "He said he would not help us."], why: "`wouldn't`." },
    { t: "rewrite", q: "“Don't open the door,” my mother said to me.", ask: "انقل الكلام بدءًا بـ My mother told me ...", a: ["My mother told me not to open the door."], why: "`told me not to`." }
  ]
};
