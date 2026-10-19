window.UNITS = window.UNITS || {};
window.UNITS[32] = {
  id: 32,
  title: "Future possibilities",
  ar: "الاحتمالات في المستقبل",
  idea: "للحديث عن احتمال حدوث شيء في المستقبل نستخدم `may, might, could` (غير متأكد)، و`will probably, is likely to` (محتمل جدًا)، و`is bound to / is certain to` (مؤكد تقريبًا).",
  uses: [
    ["احتمال ضعيف أو متوسط", "It might rain later."],
    ["احتمال قوي", "Prices are likely to rise."],
    ["شبه يقين", "She's bound to pass; she's very clever."],
    ["احتمال سلبي", "He may not come today."]
  ],
  formula: [
    ["modal", "{s:It} {a:may / might / could} {v:rain}."],
    ["نفي", "{s:She} {a:may not / might not} {v:agree}. {x:(not: could not = impossible)}"],
    ["likely", "{s:He} {a:is likely to} {v:win}. · {s:It}'s {a:unlikely to} {v:change}."],
    ["bound", "{s:They} {a:are bound to} {v:notice}."]
  ],
  notes: [
    { title: "could not ليست احتمالًا",
      body: "`might not` = ربما لا. `could not` = مستحيل. انتبه للفرق.",
      en: "He {a:might not} {v:come}. (maybe not) · He {a:couldn't} {v:come}. (impossible)" },
    { title: "سلّم اليقين",
      body: "`will definitely` > `will probably` > `is likely to` > `may / might / could` > `is unlikely to` > `probably won't` > `definitely won't`.",
      en: "It {a:will} {x:definitely} {v:happen}. · It {x:probably} {a:won't} {v:happen}." }
  ],
  examples: [
    ["{s:I} {a:might} {v:go} to the gym tonight.", "قد أذهب إلى النادي الليلة."],
    ["{s:The meeting} {a:may} {v:finish} late.", "قد ينتهي الاجتماع متأخرًا."],
    ["{s:Interest rates} {a:are likely to} {v:fall} next year.", "من المرجح أن تنخفض أسعار الفائدة العام القادم."],
    ["{s:It}'s {a:unlikely to} {v:snow} in Riyadh.", "من غير المرجح أن تثلج في الرياض."],
    ["{s:You}'re {a:bound to} {v:find} a job soon.", "ستجد وظيفة قريبًا بالتأكيد."]
  ],
  mistakes: [
    ["Maybe it will might rain.", "It might rain.", "لا نجمع `will` و`might`."],
    ["He might comes tomorrow.", "He might come tomorrow.", "بعد الفعل الناقص الفعل الأصلي."],
    ["It is likely that rain.", "It is likely to rain. / It is likely that it will rain.", "`likely to` + فعل، أو `likely that` + جملة كاملة."],
    ["She may not to agree.", "She may not agree.", "لا `to` بعد `may not`."]
  ],
  ielts: {
    text: "التحفّظ (hedging) مهم جدًا في **Writing Task 2 و Speaking Part 3**. بدل `will` المطلقة استخدم `is likely to` و`may well` و`could potentially`. هذا يجعل حجتك أكثر أكاديمية وأقل مبالغة.",
    en: "Online learning is likely to become even more popular, although it may not completely replace traditional schools."
  },
  questions: [
    { t: "mcq", q: "Take an umbrella. It ___ rain later.", o: ["might", "might to", "is likely", "bound"], a: 0, why: "`might` + الفعل الأصلي." },
    { t: "mcq", q: "Prices are ___ to increase next year.", o: ["likely", "probably", "may", "maybe"], a: 0, why: "`are likely to`." },
    { t: "mcq", q: "He ___ come. I'm not sure.", o: ["couldn't", "may not", "won't definitely", "doesn't might"], a: 1, why: "عدم تأكد بالنفي: `may not`." },
    { t: "mcq", q: "She's very talented. She's ___ to succeed.", o: ["bound", "might", "unlikely", "possibly"], a: 0, why: "شبه يقين: `bound to`." },
    { t: "mcq", q: "Don't worry, the bus will ___ come soon.", o: ["probably", "likely", "bound", "may"], a: 0,
      why: "`will probably` + الفعل. أما `likely` و`bound` فتحتاجان `be ... to`." },
    { t: "fill", q: "I ___ (might / visit) my aunt this weekend.", ask: "اكتب الفعل الناقص والفعل.", a: ["might visit"], why: "`might visit`." },
    { t: "fill", q: "The weather ___ (probably / not / be) good tomorrow.", a: ["probably won't be", "probably will not be"], why: "`probably won't be`." },
    { t: "fill", q: "The new law is ___ (likely) to change much. (= not likely)", ask: "اكتب الكلمة المناسبة للمعنى بين القوسين.", a: ["unlikely"], why: "`unlikely to` = غير مرجح." },
    { t: "fix", q: "He might comes later.", a: ["He might come later."], why: "بعد `might` الفعل الأصلي." },
    { t: "fix", q: "It will might snow.", a: ["It might snow."], why: "لا نجمع `will` و`might`." },
    { t: "fix", q: "They may not to win.", a: ["They may not win."], why: "لا `to` بعد `may not`." },
    { t: "rewrite", q: "Perhaps I will go to the party. (Use: might)", ask: "أعد الصياغة.", a: ["I might go to the party."], why: "`might go`." },
    { t: "rewrite", q: "It will probably rain. (Use: likely)", ask: "أعد الصياغة.", a: ["It is likely to rain.", "It's likely to rain.", "It is likely that it will rain."], why: "`It is likely to rain`." }
  ]
};
