window.UNITS = window.UNITS || {};
window.UNITS[101] = {
  id: 101,
  title: "Adverbs of time",
  ar: "ظروف الزمان",
  idea: "ظروف الزمان تحدد **متى** يحدث الشيء: `now, today, yesterday, soon, recently, already, yet, still, just`. ولكل منها موقع ومعنى خاص، أهمها: `already` (بالفعل)، و`yet` (بعد، في النفي والسؤال)، و`still` (ما زال)، و`just` (للتو).",
  uses: [
    ["already: حدث قبل المتوقع", "I've already eaten."],
    ["yet: لم يحدث بعد", "Have you finished yet? / I haven't finished yet."],
    ["still: ما زال مستمرًا", "He still lives with his parents."],
    ["just: للتو", "She has just left."]
  ],
  formula: [
    ["already / just", "{s:I}{a:'ve} {x:already / just} {v:finished}."],
    ["yet", "{a:Have} you {v:finished} {x:yet}? · I {a:haven't} {v:finished} {x:yet}."],
    ["still", "{s:She} {x:still} {v:works} here. · {s:She}'s {x:still} {v:working}. · I {x:still} {a:haven't} {v:called}."],
    ["no longer / any more", "He {x:no longer} works here. = He doesn't work here {x:any more}."]
  ],
  notes: [
    { title: "مواقعها",
      body: "`already, just, still` قبل الفعل الأساسي وبعد be. `yet` و`any more` في النهاية. `recently, lately` في البداية أو النهاية.",
      en: "I've {x:just} arrived. · She is {x:still} asleep. · Not ready {x:yet}." },
    { title: "still مع النفي",
      body: "`still` قبل `haven't` للتعبير عن نفاد الصبر.",
      en: "I {x:still} {a:haven't} {v:received} my order!" },
    { title: "ago / before",
      body: "`ago` من الآن إلى الماضي (مع الماضي البسيط). `before` قبل نقطة في الماضي (مع الماضي التام).",
      en: "I met him two years {x:ago}. · I had met him two years {x:before}." }
  ],
  examples: [
    ["The film has {x:already} started.", "بدأ الفيلم بالفعل."],
    ["I haven't decided {x:yet}.", "لم أقرر بعد."],
    ["Are you {x:still} working at the bank?", "هل ما زلت تعمل في البنك؟"],
    ["They've {x:just} got married.", "تزوجوا للتو."],
    ["I {x:no longer} drink coffee.", "لم أعد أشرب القهوة."]
  ],
  mistakes: [
    ["I have finished yet.", "I have already finished.", "`yet` للنفي والسؤال."],
    ["He lives still here.", "He still lives here.", "`still` قبل الفعل."],
    ["I don't work there no longer.", "I don't work there any longer. / I no longer work there.", "لا نفي مزدوج."],
    ["I have seen him two days ago.", "I saw him two days ago.", "`ago` مع الماضي البسيط."]
  ],
  ielts: {
    text: "في **Speaking Part 1**: `I'm still studying`, `I've just started a new job`, `I haven't decided yet`. وفي **Writing Task 2**: `Many people still believe that...`, `This is no longer the case`.",
    en: "Many people still prefer printed books, although e-books have already become very popular."
  },
  questions: [
    { t: "mcq", q: "Have you sent the email ___?", o: ["already", "yet", "still", "just"], a: 1, why: "سؤال: `yet`." },
    { t: "mcq", q: "I've ___ finished. You're late!", o: ["yet", "still", "already", "any more"], a: 2, why: "`already`." },
    { t: "mcq", q: "She ___ lives in the same house.", o: ["yet", "still", "already", "ago"], a: 1, why: "ما زالت: `still`." },
    { t: "mcq", q: "“Where's Ali?” “He's ___ left. You missed him by a minute.”", o: ["just", "yet", "still", "ago"], a: 0, why: "للتو: `just`." },
    { t: "mcq", q: "I don't play football ___.", o: ["no longer", "any more", "still", "yet already"], a: 1, why: "`any more` في النفي." },
    { t: "fill", q: "I haven't had lunch ___.", a: ["yet"], why: "`yet`." },
    { t: "fill", q: "It's 10 p.m. and he's ___ at work.", a: ["still"], why: "`still`." },
    { t: "fill", q: "I met her three years ___.", a: ["ago"], why: "`ago`." },
    { t: "fix", q: "I have yet finished the report.", a: ["I have already finished the report.", "I haven't finished the report yet."], why: "`already` في الإثبات." },
    { t: "fix", q: "She works still at the hospital.", a: ["She still works at the hospital."], why: "`still` قبل الفعل." },
    { t: "fix", q: "He doesn't live here no longer.", a: ["He doesn't live here any longer.", "He doesn't live here any more.", "He no longer lives here.", "He doesn't live here anymore."], why: "لا نفي مزدوج." },
    { t: "rewrite", q: "I used to work in Jeddah, but I don't now. (Use: no longer)", ask: "أعد الصياغة.", a: ["I no longer work in Jeddah."], why: "`no longer work`." }
  ]
};
