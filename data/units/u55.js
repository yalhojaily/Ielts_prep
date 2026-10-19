window.UNITS = window.UNITS || {};
window.UNITS[55] = {
  id: 55,
  title: "Phrasal verbs",
  ar: "الأفعال المركبة (Phrasal verbs)",
  idea: "الفعل المركب هو فعل + كلمة صغيرة (`up, out, off, on, down`) يتغير معها المعنى كليًا: `give` (يعطي) و`give up` (يستسلم). بعضها **ينفصل** (`turn it off`) وبعضها **لا ينفصل** (`look after them`).",
  uses: [
    ["بلا مفعول", "The plane took off. / Prices went up."],
    ["منفصل: المفعول بين الجزأين أو بعدهما", "Turn off the TV. / Turn the TV off."],
    ["الضمير يأتي بين الجزأين حتمًا", "Turn it off. (not: turn off it)"],
    ["غير منفصل", "I'm looking for my keys."]
  ],
  formula: [
    ["منفصل", "{v:turn} {x:the light} {v:off} · {v:turn} {v:off} {x:the light} · {v:turn} {x:it} {v:off}"],
    ["غير منفصل", "{v:look after} {x:the kids} · {v:look after} {x:them}"],
    ["ثلاثي", "{v:look forward to}, {v:get on with}, {v:run out of}, {v:put up with}"]
  ],
  notes: [
    { title: "أكثر الأفعال المركبة شيوعًا",
      body: "`find out` (يكتشف)، `give up` (يستسلم/يقلع عن)، `look up` (يبحث عن معلومة)، `turn down` (يرفض)، `carry on` (يستمر)، `set up` (يؤسس)، `bring up` (يربي/يذكر موضوعًا)، `put off` (يؤجل)، `come across` (يصادف)، `figure out` (يفهم/يحل).",
      en: "I {v:found out} the truth. · Don't {v:give up}! · They {v:set up} a company." },
    { title: "في الكتابة الأكاديمية",
      body: "في **Writing Task 2** الأفعال المفردة الرسمية أفضل غالبًا: `increase` بدل `go up`، `investigate` بدل `look into`، `postpone` بدل `put off`.",
      en: "Prices {v:went up}. → Prices {v:increased}." }
  ],
  examples: [
    ["{s:I} {v:gave up} {x:smoking} last year.", "أقلعت عن التدخين العام الماضي."],
    ["{a:Can} you {v:pick} {x:me} {v:up} at 7?", "هل تمرّ لتأخذني الساعة 7؟"],
    ["{s:We} {v:ran out of} {x:petrol}.", "نفد منا البنزين."],
    ["{s:She} {v:turned down} {x:the offer}.", "رفضت العرض."],
    ["{s:He} {v:looks after} {x:his elderly parents}.", "يعتني بوالديه المسنين."]
  ],
  mistakes: [
    ["Turn off it.", "Turn it off.", "الضمير بين الجزأين."],
    ["Pick up me at 8.", "Pick me up at 8.", "الضمير بين الجزأين."],
    ["I look forward to meet you.", "I look forward to meeting you.", "`to` هنا حرف جر: `-ing`."],
    ["Look the word up it.", "Look it up. / Look up the word.", "إما الضمير بين الجزأين، أو الاسم بعدهما."]
  ],
  ielts: {
    text: "في **Speaking** الأفعال المركبة الطبيعية ترفع درجة **Lexical Resource** لأنها تجعلك تبدو كمتحدث أصلي: `I grew up in Madinah`, `I took up running last year`. أما في **Writing** فقلّل منها.",
    en: "I grew up in a small town, and I took up photography when I was a teenager."
  },
  questions: [
    { t: "mcq", q: "Please turn ___. It's too loud.", o: ["off it", "it off", "it of", "of it"], a: 1, why: "الضمير بين الجزأين." },
    { t: "mcq", q: "I'll pick ___ from the airport.", o: ["up you", "you up", "you on", "on you"], a: 1, why: "`pick you up`." },
    { t: "mcq", q: "Don't give ___! You can do it.", o: ["in", "out", "up", "off"], a: 2, why: "`give up` = يستسلم." },
    { t: "mcq", q: "We've run ___ milk. Can you buy some?", o: ["out of", "off", "away from", "out"], a: 0, why: "`run out of`." },
    { t: "mcq", q: "She turned ___ the job because the salary was low.", o: ["up", "down", "off", "out"], a: 1, why: "`turn down` = يرفض." },
    { t: "mcq", q: "I grew ___ in a small village.", o: ["on", "up", "out", "in"], a: 1, why: "`grow up` = نشأ." },
    { t: "fill", q: "If you don't know a word, look it ___ in a dictionary.", a: ["up"], why: "`look up` = يبحث عن معلومة." },
    { t: "fill", q: "I found ___ that the meeting was cancelled.", a: ["out"], why: "`find out` = يكتشف." },
    { t: "fill", q: "Who looks ___ your children when you're at work?", a: ["after"], why: "`look after` = يعتني." },
    { t: "fill", q: "They decided to put ___ the wedding until summer.", a: ["off"], why: "`put off` = يؤجل." },
    { t: "fix", q: "Can you turn on it?", a: ["Can you turn it on?"], why: "الضمير بين الجزأين." },
    { t: "fix", q: "Please write down it.", a: ["Please write it down."], why: "الضمير بين الجزأين." },
    { t: "rewrite", q: "The company postponed the meeting. (Use: put off)", ask: "أعد الصياغة بالفعل المركب.", a: ["The company put off the meeting.", "The company put the meeting off."], why: "`put off` = postpone." }
  ]
};
