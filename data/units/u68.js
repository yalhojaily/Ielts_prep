window.UNITS = window.UNITS || {};
window.UNITS[68] = {
  id: 68,
  title: "“Either / neither / both”",
  ar: "Either و Neither و Both",
  idea: "هذه الكلمات تتحدث عن **شيئين**: `both` = الاثنان، `either` = أي واحد منهما، `neither` = لا هذا ولا ذاك. وتأتي في تراكيب `both ... and`، `either ... or`، `neither ... nor`.",
  uses: [
    ["both: الاثنان", "Both my parents are teachers."],
    ["either: أحدهما (لا يهم أي)", "You can sit in either chair."],
    ["neither: ولا واحد", "Neither answer is correct."],
    ["في نهاية النفي: either", "I don't like it. — I don't either."]
  ],
  formula: [
    ["both", "{x:both} + plural / {x:both of} the... / {x:both} A {x:and} B"],
    ["either", "{x:either} + singular / {x:either of} the... / {x:either} A {x:or} B"],
    ["neither", "{x:neither} + singular / {x:neither of} the... / {x:neither} A {x:nor} B"]
  ],
  notes: [
    { title: "neither = فعل مثبت",
      body: "`neither` منفية بنفسها، فالفعل بعدها مثبت.",
      en: "{x:Neither} of them {v:came}. (not: didn't come)" },
    { title: "either في نهاية الجملة المنفية",
      body: "بمعنى «أيضًا» في النفي (مثل too في الإثبات).",
      en: "I can't swim, and my brother can't {x:either}." },
    { title: "التطابق مع neither...nor",
      body: "الفعل يطابق الاسم الأقرب إليه.",
      en: "{x:Neither} Ali {x:nor} his brothers {v:are} here." }
  ],
  examples: [
    ["{x:Both} options {v:have} advantages.", "لكلا الخيارين مزايا."],
    ["You can pay {x:either} by card {x:or} in cash.", "يمكنك الدفع إما بالبطاقة أو نقدًا."],
    ["{x:Neither} of my brothers {v:smokes}.", "لا أحد من أخويّ يدخن."],
    ["She speaks {x:both} Arabic {x:and} French.", "تتحدث العربية والفرنسية معًا."],
    ["“Tea or coffee?” “{x:Either} is fine.”", "شاي أم قهوة؟ أيهما جيد."]
  ],
  mistakes: [
    ["Neither of them didn't come.", "Neither of them came.", "`neither` منفية."],
    ["I don't like it too.", "I don't like it either.", "في النفي: `either`."],
    ["Both of they are doctors.", "Both of them are doctors.", "بعد of: ضمير المفعول `them`."],
    ["Either you or me are right.", "Either you or I am right.", "الفاعل والتطابق مع الأقرب."]
  ],
  ielts: {
    text: "في **Writing Task 2** (أسئلة discuss both views) استخدم `both ... and` لعرض الرأيين، و`neither ... nor` لرفض فكرتين. وفي **Task 1**: `Both countries saw an increase...`.",
    en: "Both governments and individuals have a role to play, but neither can solve the problem alone."
  },
  questions: [
    { t: "mcq", q: "___ my sisters live in Riyadh.", o: ["Both", "Either", "Neither", "Both of"], a: 0, why: "الاثنتان: `Both`." },
    { t: "mcq", q: "You can choose ___ the red one or the blue one.", o: ["both", "either", "neither", "nor"], a: 1, why: "`either ... or`." },
    { t: "mcq", q: "___ of the hotels had a pool, so we were disappointed.", o: ["Both", "Either", "Neither", "None"], a: 2, why: "لا هذا ولا ذاك: `Neither` (لاثنين)." },
    { t: "mcq", q: "I haven't seen that film, and my wife hasn't ___.", o: ["too", "either", "neither", "also"], a: 1, why: "في النفي: `either`." },
    { t: "mcq", q: "Neither my father ___ my mother speaks English.", o: ["or", "nor", "and", "but"], a: 1, why: "`neither ... nor`." },
    { t: "fill", q: "___ of my parents are retired. (= the two)", a: ["Both"], why: "`Both of`." },
    { t: "fill", q: "She's ___ intelligent and hardworking.", a: ["both"], why: "`both ... and`." },
    { t: "fill", q: "We can meet ___ on Monday or on Tuesday.", a: ["either"], why: "`either ... or`." },
    { t: "fix", q: "Neither of them didn't know the answer.", a: ["Neither of them knew the answer."], why: "`neither` منفية." },
    { t: "fix", q: "I can't swim and my brother can't too.", a: ["I can't swim and my brother can't either.", "I can't swim and neither can my brother."], why: "`either` في النفي." },
    { t: "fix", q: "Both of we passed the exam.", a: ["Both of us passed the exam.", "We both passed the exam."], why: "`Both of us`." },
    { t: "rewrite", q: "Ali isn't coming. Omar isn't coming. (Use: Neither ... nor)", ask: "اكتب جملة واحدة.", a: ["Neither Ali nor Omar is coming.", "Neither Ali nor Omar are coming."], why: "`Neither Ali nor Omar is coming`." }
  ]
};
