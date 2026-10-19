window.UNITS = window.UNITS || {};
window.UNITS[96] = {
  id: 96,
  title: "“As… as” comparisons",
  ar: "المقارنة بـ as ... as",
  idea: "`as + صفة + as` تعني **المساواة**: `She is as tall as her mother`. والنفي `not as ... as` يعني «أقل من»: `Taif is not as hot as Jeddah` (= أقل حرارة). والصفة هنا في **صورتها الأصلية** بلا -er.",
  uses: [
    ["مساواة", "My car is as fast as yours."],
    ["أقل من", "This book isn't as good as the first one."],
    ["مع ظروف", "I'll come as soon as I can."],
    ["مع النسب", "twice as big as, three times as expensive as"]
  ],
  formula: [
    ["مساواة", "{x:as} + {v:adjective} + {x:as}"],
    ["نفي", "{x:not as / not so} + {v:adjective} + {x:as}"],
    ["مضاعفة", "{x:twice / three times / half} {x:as} {v:big} {x:as}"],
    ["مع اسم", "{x:as much} money {x:as} · {x:as many} people {x:as}"]
  ],
  notes: [
    { title: "الصفة بلا تغيير",
      body: "`as tall as` لا `as taller as`.",
      en: "as {v:big} as (not: as bigger as)" },
    { title: "the same as",
      body: "للتطابق: `the same + اسم + as`.",
      en: "My phone is {x:the same as} yours. · She's {x:the same} age {x:as} me." },
    { title: "عبارات ثابتة",
      body: "`as soon as possible, as much as possible, as far as I know, as long as`.",
      en: "Please reply {x:as soon as possible}." }
  ],
  examples: [
    ["Ali is {x:as} {v:clever} {x:as} his brother.", "علي ذكي مثل أخيه."],
    ["The test wasn't {x:as} {v:difficult} {x:as} I expected.", "لم يكن الاختبار صعبًا كما توقعت."],
    ["A house in Riyadh costs {x:twice as} much {x:as} one in Taif.", "البيت في الرياض يكلف ضعف ما يكلفه في الطائف."],
    ["I don't earn {x:as} much {x:as} my brother.", "لا أكسب بقدر ما يكسب أخي."],
    ["Try to drink {x:as} much water {x:as} possible.", "حاول أن تشرب أكبر قدر من الماء."]
  ],
  mistakes: [
    ["as taller as", "as tall as", "الصفة الأصلية."],
    ["She is as tall like her mother.", "She is as tall as her mother.", "`as ... as`."],
    ["twice as bigger as", "twice as big as", "بلا -er."],
    ["the same like", "the same as", "`the same as`."]
  ],
  ielts: {
    text: "في **Writing Task 1**: `Sales in 2020 were twice as high as in 2010`, `Spending on food was not as high as spending on rent`. هذه البنية تنوع أسلوبك بدل `higher than` المتكررة.",
    en: "In 2020, the UK spent almost twice as much on education as it did in 1990."
  },
  questions: [
    { t: "mcq", q: "My sister is as ___ as my mother.", o: ["taller", "tall", "tallest", "more tall"], a: 1, why: "الصفة الأصلية." },
    { t: "mcq", q: "This film isn't ___ good as the book.", o: ["so", "as", "more", "than"], a: 1, why: "`not as ... as`." },
    { t: "mcq", q: "London is ___ expensive as Paris.", o: ["as", "more", "so as", "same"], a: 0, why: "`as expensive as`." },
    { t: "mcq", q: "Her bag is the same ___ mine.", o: ["like", "as", "than", "that"], a: 1, why: "`the same as`." },
    { t: "mcq", q: "This house is three times as ___ as ours.", o: ["bigger", "big", "biggest", "more big"], a: 1, why: "`three times as big as`." },
    { t: "fill", q: "I'll call you as ___ as I arrive.", a: ["soon"], why: "`as soon as`." },
    { t: "fill", q: "He isn't as ___ (rich) as people think.", a: ["rich"], why: "الصفة الأصلية." },
    { t: "fill", q: "There weren't as ___ people as last year.", a: ["many"], why: "معدود: `as many`." },
    { t: "fix", q: "My phone is as better as yours.", a: ["My phone is as good as yours."], why: "`as good as`." },
    { t: "fix", q: "She is as clever like her sister.", a: ["She is as clever as her sister."], why: "`as ... as`." },
    { t: "fix", q: "Riyadh is twice as larger as Jeddah.", a: ["Riyadh is twice as large as Jeddah."], why: "`as large as`." },
    { t: "rewrite", q: "Taif is cooler than Jeddah. (Begin with: Jeddah isn't as ...)", ask: "أعد الصياغة.", a: ["Jeddah isn't as cool as Taif.", "Jeddah is not as cool as Taif."], why: "`not as cool as`." }
  ]
};
