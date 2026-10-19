window.UNITS = window.UNITS || {};
window.UNITS[60] = {
  id: 60,
  title: "Obligations",
  ar: "الإلزام والوجوب",
  idea: "`must` إلزام يراه المتكلم ضروريًا (أو قاعدة مكتوبة). `have to` إلزام من الخارج (قانون، عمل). والأهم الفرق في النفي: `mustn't` = **ممنوع**، و`don't have to` = **ليس ضروريًا** (لك الخيار).",
  uses: [
    ["إلزام شخصي أو قاعدة", "I must call my mother tonight."],
    ["إلزام خارجي", "I have to wear a uniform at work."],
    ["منع", "You mustn't smoke here."],
    ["عدم الضرورة", "You don't have to come if you're busy."]
  ],
  formula: [
    ["must", "{s:You} {a:must} {v:wear} a seatbelt."],
    ["have to", "{s:She} {a:has to} {v:work} late. · {s:We} {a:had to} {v:wait}."],
    ["mustn't", "{s:You} {a:mustn't} {v:park} here. {x:(forbidden)}"],
    ["don't have to / needn't", "{s:You} {a:don't have to} {v:pay}. {x:(not necessary)}"]
  ],
  notes: [
    { title: "الماضي والمستقبل",
      body: "`must` ليس له ماضٍ، فنستخدم `had to`. وللمستقبل `will have to`.",
      en: "I {a:had to} {v:leave} early yesterday. · You{a:'ll have to} {v:wait}." },
    { title: "need to / needn't",
      body: "`need to` = يحتاج، `needn't / don't need to` = لا حاجة.",
      en: "You {a:needn't} {v:worry}. · Do I {a:need to} {v:bring} anything?" },
    { title: "be supposed to",
      body: "= من المفترض (بحسب قاعدة أو اتفاق)، وكثيرًا ما يعني أن ذلك لم يحدث.",
      en: "You{a:'re supposed to} {v:be} here at 8!" }
  ],
  examples: [
    ["{s:All visitors} {a:must} {v:sign} in at reception.", "يجب على جميع الزوار التسجيل عند الاستقبال."],
    ["{s:I} {a:have to} {v:submit} the report by Thursday.", "عليّ تسليم التقرير قبل الخميس."],
    ["{s:You} {a:don't have to} {v:wear} a tie.", "لست مضطرًا لارتداء ربطة عنق."],
    ["{s:Passengers} {a:mustn't} {v:leave} bags unattended.", "يُمنع على الركاب ترك الحقائب دون مراقبة."],
    ["{a:Did} {s:you} {a:have to} {v:pay} for parking?", "هل اضطررت لدفع رسوم الوقوف؟"]
  ],
  mistakes: [
    ["You mustn't come. (meaning: it's not necessary)", "You don't have to come.", "`mustn't` = ممنوع، وليس «ليس ضروريًا»."],
    ["I musted work yesterday.", "I had to work yesterday.", "ماضي الإلزام: `had to`."],
    ["He have to go.", "He has to go.", "مع he: `has to`."],
    ["Do you must work tomorrow?", "Do you have to work tomorrow?", "السؤال بـ `Do you have to`."]
  ],
  ielts: {
    text: "في **Writing Task 2** عند الحديث عن القوانين والمسؤوليات: `Companies should be required to...`, `People have to...`. وفي **Speaking Part 1** عن العمل والدراسة: `What do you have to do in your job?`",
    en: "In my job I have to attend a lot of meetings, but fortunately I don't have to travel much."
  },
  questions: [
    { t: "mcq", q: "You ___ touch that wire. It's dangerous!", o: ["don't have to", "mustn't", "needn't", "haven't to"], a: 1, why: "ممنوع: `mustn't`." },
    { t: "mcq", q: "Tomorrow is a holiday, so I ___ go to work.", o: ["mustn't", "don't have to", "haven't", "must"], a: 1, why: "ليس ضروريًا: `don't have to`." },
    { t: "mcq", q: "I ___ wait an hour for the bus yesterday.", o: ["must", "had to", "have to", "musted"], a: 1, why: "ماضٍ: `had to`." },
    { t: "mcq", q: "She ___ wear glasses for reading.", o: ["have to", "has to", "must to", "musts"], a: 1, why: "`has to`." },
    { t: "mcq", q: "You ___ bring food. We have plenty.", o: ["needn't", "mustn't", "must", "have to"], a: 0, why: "لا حاجة: `needn't`." },
    { t: "fill", q: "___ you have to work on Fridays?", a: ["Do"], why: "`Do you have to`." },
    { t: "fill", q: "You'll ___ (have to) show your ID at the door.", ask: "اكتب الكلمتين الناقصتين.", a: ["have to"], why: "`will have to`." },
    { t: "fill", q: "Students ___ (not / use) phones during the exam. It's a rule.", a: ["mustn't use", "must not use", "can't use", "cannot use"], why: "منع: `mustn't`." },
    { t: "fix", q: "I must went to the bank yesterday.", a: ["I had to go to the bank yesterday."], why: "ماضٍ: `had to go`." },
    { t: "fix", q: "You mustn't pay. It's free.", a: ["You don't have to pay. It's free.", "You needn't pay. It's free.", "You don't need to pay. It's free."], why: "ليس ضروريًا." },
    { t: "fix", q: "He haves to finish today.", a: ["He has to finish today."], why: "`has to`." },
    { t: "rewrite", q: "It isn't necessary for you to come early. (Use: don't have to)", ask: "أعد الصياغة.", a: ["You don't have to come early.", "You do not have to come early."], why: "`don't have to`." }
  ]
};
