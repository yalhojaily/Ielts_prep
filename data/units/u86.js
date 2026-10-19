window.UNITS = window.UNITS || {};
window.UNITS[86] = {
  id: 86,
  title: "Introductory “it”",
  ar: "It التمهيدية",
  idea: "نضع `It` في أول الجملة كفاعل مؤقت عندما يكون الفاعل الحقيقي **طويلًا** (مصدرًا أو جملة). بدل `To learn English is useful` نقول `It is useful to learn English`. وتستخدم أيضًا للوقت والطقس والمسافة.",
  uses: [
    ["It + be + صفة + to", "It's important to sleep well."],
    ["It + be + صفة + that", "It's clear that he is lying."],
    ["It takes + وقت + to", "It takes two hours to get there."],
    ["وقت / طقس / مسافة", "It's 5 o'clock. / It's hot. / It's 10 km."]
  ],
  formula: [
    ["to", "{s:It} {v:is} {x:difficult / easy / important / necessary} {a:to} {v:verb}"],
    ["that", "{s:It} {v:is} {x:true / clear / likely / surprising} {x:that} + clause"],
    ["for sb", "{s:It} {v:is} hard {x:for me} {a:to} {v:understand}."],
    ["takes", "{s:It} {v:took} me an hour {a:to} {v:finish}."]
  ],
  notes: [
    { title: "لا تحذف It",
      body: "`Is important to...` خطأ شائع جدًا عند العرب.",
      en: "{s:It} {v:is} important to... (not: Is important to)" },
    { title: "It seems / It appears",
      body: "للتعبير عن انطباع بتحفظ.",
      en: "{s:It} {v:seems} that prices will rise." },
    { title: "It's no use / It's worth + -ing",
      body: "بعد `no use` و`worth` يأتي الفعل بصيغة `-ing`.",
      en: "{s:It}'s {x:no use} {v:crying}. · {s:It}'s {x:worth} {v:visiting}." }
  ],
  examples: [
    ["{s:It}'s {x:essential} {a:to} {v:save} for the future.", "من الضروري الادخار للمستقبل."],
    ["{s:It}'s {x:not easy} {a:to} {v:find} a good job.", "ليس سهلًا إيجاد وظيفة جيدة."],
    ["{s:It} {v:takes} time {a:to} {v:learn} a language.", "تعلم لغة يستغرق وقتًا."],
    ["{s:It}'s {x:likely} that interest rates will fall.", "من المرجح أن تنخفض أسعار الفائدة."],
    ["{s:It}'s about 400 km from Madinah to Makkah.", "المسافة بين المدينة ومكة حوالي 400 كم."]
  ],
  mistakes: [
    ["Is important to study.", "It is important to study.", "لا نحذف It."],
    ["It takes to me two hours.", "It takes me two hours.", "`It takes me...` بلا to."],
    ["It's difficult for understand.", "It's difficult to understand.", "`to + verb`."],
    ["This is necessary that we act.", "It is necessary that we act.", "التمهيدية: `It`."]
  ],
  ielts: {
    text: "هذه أكثر البنى فائدة في **Writing Task 2**: `It is widely believed that...`, `It is essential to...`, `It could be argued that...`. لكن لا تبدأ بها كل جملة.",
    en: "It is often argued that university education should be free. However, it is clear that someone has to pay for it."
  },
  questions: [
    { t: "mcq", q: "___ important to drink water.", o: ["Is", "It is", "This", "There is"], a: 1, why: "`It is important`." },
    { t: "mcq", q: "It takes ___ an hour to drive to work.", o: ["to me", "me", "for me", "I"], a: 1, why: "`It takes me`." },
    { t: "mcq", q: "It's clear ___ the plan is not working.", o: ["to", "that", "for", "what"], a: 1, why: "`It's clear that`." },
    { t: "mcq", q: "It's difficult ___ me to wake up early.", o: ["to", "for", "of", "at"], a: 1, why: "`difficult for me`." },
    { t: "mcq", q: "It's worth ___ the museum.", o: ["visit", "to visit", "visiting", "visited"], a: 2, why: "`worth + -ing`." },
    { t: "fill", q: "___ is a long way to the airport.", a: ["It"], why: "مسافة: `It`." },
    { t: "fill", q: "It's easy ___ make mistakes.", a: ["to"], why: "`easy to`." },
    { t: "fill", q: "It ___ (take) us three days to drive there last year.", a: ["took"], why: "ماضٍ: `took`." },
    { t: "fix", q: "Is necessary to have a passport.", a: ["It is necessary to have a passport.", "It's necessary to have a passport."], why: "لا نحذف It." },
    { t: "fix", q: "It takes to me 20 minutes.", a: ["It takes me 20 minutes.", "It takes me twenty minutes."], why: "بلا to." },
    { t: "fix", q: "It's impossible for finish today.", a: ["It's impossible to finish today.", "It is impossible to finish today."], why: "`to finish`." },
    { t: "rewrite", q: "To learn a new language is difficult. (Begin with: It ...)", ask: "أعد الصياغة.", a: ["It is difficult to learn a new language.", "It's difficult to learn a new language."], why: "It التمهيدية." }
  ]
};
