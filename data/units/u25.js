window.UNITS = window.UNITS || {};
window.UNITS[25] = {
  id: 25,
  title: "The passive in the past",
  ar: "المبني للمجهول في الماضي",
  idea: "المبني للمجهول في الماضي يتبع القاعدة نفسها: نضع فعل `be` في زمن الماضي المطلوب ثم التصريف الثالث. `was / were` للماضي البسيط، و`was / were being` للمستمر، و`had been` للتام.",
  uses: [
    ["حدث ماضٍ والفاعل غير مهم", "The pyramids were built thousands of years ago."],
    ["حدث جارٍ في الماضي", "The room was being painted when I arrived."],
    ["حدث سبق حدثًا ماضيًا", "The tickets had been sold before we got there."]
  ],
  formula: [
    ["ماضٍ بسيط", "{s:The book} {a:was} {v:written} in 1950. · {s:They} {a:were} {v:invited}."],
    ["ماضٍ مستمر", "{s:The car} {a:was being} {v:washed}."],
    ["ماضٍ تام", "{s:The work} {a:had been} {v:done}."]
  ],
  notes: [
    { title: "was born",
      body: "`born` دائمًا مجهول: `I was born in 1990`. لا نقول `I born`.",
      en: "{s:I} {a:was} {v:born} in Madinah." },
    { title: "التاريخ والاكتشافات",
      body: "نستخدم المجهول كثيرًا مع الاختراعات والمباني التاريخية.",
      en: "The telephone {a:was} {v:invented} {x:by} Bell. · Penicillin {a:was} {v:discovered} in 1928." }
  ],
  examples: [
    ["{s:The mosque} {a:was} {v:expanded} several times.", "وُسّع المسجد عدة مرات."],
    ["{s:Two people} {a:were} {v:injured} in the accident.", "أصيب شخصان في الحادث."],
    ["{s:My bag} {a:was being} {v:checked} at security.", "كانت حقيبتي تُفتش عند الأمن."],
    ["{s:The match} {a:had been} {v:cancelled}, but nobody told us.", "كانت المباراة قد أُلغيت لكن لم يخبرنا أحد."]
  ],
  mistakes: [
    ["I born in 1995.", "I was born in 1995.", "`born` دائمًا مع `was / were`."],
    ["The house built in 1980.", "The house was built in 1980.", "البيت لا يبني نفسه: `was built`."],
    ["The letters was sent yesterday.", "The letters were sent yesterday.", "الفاعل جمع: `were`."],
    ["The road was repairing when we passed.", "The road was being repaired when we passed.", "الماضي المستمر المجهول: `was being repaired`."]
  ],
  ielts: {
    text: "في **Writing Task 1** مع الخرائط التي تقارن الماضي بالحاضر: `A car park was built`, `the trees were cut down`. وهو جزء أساسي من وصف التغيرات.",
    en: "In 2000, the old factory was demolished and a shopping centre was built in its place."
  },
  questions: [
    { t: "mcq", q: "This mosque ___ in the 7th century.", o: ["built", "was built", "is built", "was build"], a: 1,
      why: "ماضٍ مجهول: `was built`." },
    { t: "mcq", q: "Where ___ you born?", o: ["was", "were", "did", "are"], a: 1,
      why: "مع you: `were you born`." },
    { t: "mcq", q: "When I got home, my car ___ by my brother.", o: ["was washing", "was being washed", "washed", "has washed"], a: 1,
      why: "حدث جارٍ مجهول: `was being washed`." },
    { t: "mcq", q: "The documents ___ before the manager arrived.", o: ["had been signed", "had signed", "were signing", "has been signed"], a: 0,
      why: "سبق حدثًا ماضيًا: `had been signed`." },
    { t: "fill", q: "The phone ___ (invent) in the 19th century.", a: ["was invented"],
      why: "`was invented`." },
    { t: "fill", q: "Thousands of trees ___ (cut) down last year.", a: ["were cut"],
      why: "جمع: `were cut`." },
    { t: "fill", q: "The suspect ___ (question) when the lawyer arrived.", a: ["was being questioned"],
      why: "جارٍ: `was being questioned`." },
    { t: "fill", q: "I ___ (not / tell) about the change.", a: ["wasn't told", "was not told"],
      why: "نفي ماضٍ مجهول: `wasn't told`." },
    { t: "fix", q: "My father born in Taif.", a: ["My father was born in Taif."],
      why: "`was born`." },
    { t: "fix", q: "The windows was broken by the storm.", a: ["The windows were broken by the storm."],
      why: "جمع: `were`." },
    { t: "fix", q: "The project was finish last month.", a: ["The project was finished last month."],
      why: "التصريف الثالث: `finished`." },
    { t: "rewrite", q: "Someone stole my wallet yesterday.", ask: "حوّل إلى المبني للمجهول.",
      a: ["My wallet was stolen yesterday."],
      why: "`stole` تصبح `was stolen`." },
    { t: "rewrite", q: "They had already sold the house.", ask: "حوّل إلى المبني للمجهول.",
      a: ["The house had already been sold."],
      why: "`had sold` تصبح `had been sold`." }
  ]
};
