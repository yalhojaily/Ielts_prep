window.UNITS = window.UNITS || {};
window.UNITS[56] = {
  id: 56,
  title: "Modal verbs",
  ar: "الأفعال الناقصة",
  idea: "الأفعال الناقصة (`can, could, may, might, must, shall, should, will, would`) تضيف إلى الفعل معنى القدرة أو الاحتمال أو الإلزام أو الإذن. ولها ثلاث قواعد ثابتة: **لا تتغير مع الفاعل**، و**بعدها فعل أصلي بلا to**، و**تكوّن السؤال والنفي بنفسها** بلا do.",
  uses: [
    ["قدرة", "I can swim."],
    ["إذن وطلب", "May I come in? / Could you help me?"],
    ["إلزام ونصيحة", "You must wear a seatbelt. / You should rest."],
    ["احتمال واستنتاج", "It might rain. / He must be tired."]
  ],
  formula: [
    ["إثبات", "{s:She} {a:can} {v:drive}. (not: cans / can to drive)"],
    ["نفي", "{s:You} {a:shouldn't} {v:smoke}. · {s:I} {a:can't} {v:come}."],
    ["سؤال", "{a:Can} {s:you} {v:help}? · {q:What} {a:should} {s:I} {v:do}?"],
    ["ماضٍ", "{a:modal} + {a:have} + {v:v3}: {s:He} {a:should have} {v:called}."]
  ],
  notes: [
    { title: "أفعال شبه ناقصة",
      body: "`have to, need to, be able to, ought to` تقوم بعمل مشابه لكنها تتغير مع الفاعل والزمن وتأخذ `to`.",
      en: "She {a:has to} {v:work}. · I {a:was able to} {v:finish}. · You {a:ought to} {v:apologise}." },
    { title: "لا يجتمع فعلان ناقصان",
      body: "لا نقول `will can`. نستخدم `will be able to`.",
      en: "I {a:will be able to} {v:help} you tomorrow." },
    { title: "الماضي بـ have + v3",
      body: "الأفعال الناقصة ليس لها ماضٍ عادي، فنعبّر عن الماضي بـ `have + v3`.",
      en: "You {a:should have} {v:told} me. · She {a:might have} {v:forgotten}." }
  ],
  examples: [
    ["{s:You} {a:can} {v:park} here after 6.", "يمكنك الوقوف هنا بعد السادسة."],
    ["{s:We} {a:must} {v:leave} now.", "يجب أن نغادر الآن."],
    ["{a:Would} {s:you} {v:like} some tea?", "هل تحب بعض الشاي؟"],
    ["{s:He} {a:may} {v:be} late today.", "قد يتأخر اليوم."],
    ["{s:I} {a:couldn't} {v:sleep} last night.", "لم أستطع النوم الليلة الماضية."]
  ],
  mistakes: [
    ["She cans speak English.", "She can speak English.", "لا s مع الفعل الناقص."],
    ["You must to finish it.", "You must finish it.", "لا to بعد الفعل الناقص."],
    ["Do you can help me?", "Can you help me?", "لا do مع الفعل الناقص."],
    ["I will can come.", "I will be able to come.", "لا يجتمع ناقصان."]
  ],
  ielts: {
    text: "الأفعال الناقصة أداتك الأساسية للتحفظ والإقناع في **Writing Task 2**: `could, may, might` للتحفظ، و`should, must` للتوصية. التنويع بينها بدقة يرفع درجتين معًا.",
    en: "Governments should invest more in renewable energy, as this could reduce pollution and may also create jobs."
  },
  questions: [
    { t: "mcq", q: "He ___ speak three languages.", o: ["cans", "can", "can to", "is can"], a: 1, why: "لا s." },
    { t: "mcq", q: "You ___ see a doctor about that cough.", o: ["should", "should to", "shoulds", "are should"], a: 0, why: "نصيحة: `should`." },
    { t: "mcq", q: "___ I borrow your car?", o: ["Do", "May", "Am", "Does"], a: 1, why: "طلب إذن: `May I`." },
    { t: "mcq", q: "I ___ come to the meeting tomorrow.", o: ["won't can", "won't be able to", "can't will", "don't can"], a: 1, why: "مستقبل القدرة: `won't be able to`." },
    { t: "mcq", q: "She ___ work on Saturdays. It's her company's rule.", o: ["has to", "have to", "must to", "has"], a: 0, why: "`has to` مع she." },
    { t: "fill", q: "You ___ (not / smoke) in hospitals. It's forbidden.", a: ["mustn't", "must not", "can't", "cannot"], why: "منع: `mustn't`." },
    { t: "fill", q: "When I was young, I ___ run very fast.", a: ["could"], why: "قدرة ماضية: `could`." },
    { t: "fill", q: "You should ___ (call) me. I waited all day!", a: ["have called"], why: "ماضٍ: `should have called`." },
    { t: "fix", q: "She must to wear a uniform.", a: ["She must wear a uniform.", "She has to wear a uniform."], why: "لا to بعد must." },
    { t: "fix", q: "Does he can swim?", a: ["Can he swim?"], why: "لا does." },
    { t: "fix", q: "He mights be at home.", a: ["He might be at home."], why: "لا s." },
    { t: "rewrite", q: "It's a good idea for you to sleep early. (Use: should)", ask: "أعد الصياغة.", a: ["You should sleep early."], why: "`should` للنصيحة." }
  ]
};
