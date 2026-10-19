window.UNITS = window.UNITS || {};
window.UNITS[5] = {
  id: 5,
  title: "Present tenses overview",
  ar: "مراجعة أزمنة المضارع: البسيط أم المستمر؟",
  idea: "السؤال الذي تسأله لنفسك: هل الحدث **دائم أو متكرر** (بسيط) أم **يحدث الآن أو مؤقت** (مستمر)؟ ثم انتبه لأفعال الحالة التي تبقى في المضارع البسيط دائمًا تقريبًا.",
  uses: [
    ["دائم / عادة / حقيقة ← المضارع البسيط", "I work in Riyadh."],
    ["الآن / مؤقت / يتغير ← المضارع المستمر", "I'm working in Jeddah this month."],
    ["حالة: معرفة، رأي، ملكية، شعور ← البسيط", "I understand the problem."]
  ],
  formula: [
    ["البسيط", "{s:She} {v:teaches} English. {x:(her job, always)}"],
    ["المستمر", "{s:She} {a:is} {v:teaching} a new class. {x:(this term only)}"],
    ["البسيط", "{s:He} usually {v:drives} to work."],
    ["المستمر", "{s:He} {a:is} {v:taking} the bus this week. {x:(car is broken)}"]
  ],
  notes: [
    { title: "أفعال الحالة (State verbs)",
      body: "هذه الأفعال تصف حالة لا حدثًا، فلا تأتي عادةً بـ `-ing`: التفكير والمعرفة `know, understand, believe, remember, mean`، المشاعر `like, love, hate, want, need, prefer`، الملكية `have (يملك), own, belong`، الحواس والمظهر `seem, look like, sound`.",
      en: "This bag {v:belongs} to me. · I {v:need} more time. · It {v:seems} easy." },
    { title: "أفعال بمعنيين",
      body: "بعض الأفعال تكون حالة بمعنى، وحدثًا بمعنى آخر: `think` بمعنى «أرى/أعتقد» حالة، وبمعنى «أفكّر الآن» حدث. و`have` بمعنى «يملك» حالة، وبمعنى «يتناول/يقضي» حدث.",
      en: "I {v:think} it's a good idea. · I {a:am} {v:thinking} about my plans. · She {v:has} two cars. · She {a:is} {v:having} lunch." },
    { title: "كلمات تساعدك على الاختيار",
      body: "مع البسيط: `always, usually, every day, on Mondays, never`. مع المستمر: `now, at the moment, this week, these days, currently`.",
      en: "I {x:usually} {v:walk}, but {x:today} I {a:am} {v:driving}." },
    { title: "always مع المستمر = شكوى",
      body: "`always` مع المستمر تعبّر عن تكرار مزعج، وهو استخدام خاص.",
      en: "He {a:is} {x:always} {v:losing} his keys!" }
  ],
  examples: [
    ["{s:I} {v:live} in Madinah, but {s:I}'{a:m} {v:staying} in Riyadh for a course.", "أسكن في المدينة، لكنني أقيم في الرياض لدورة."],
    ["{s:Prices} usually {v:go} up in summer, and {s:they}'{a:re} {v:going} up now.", "ترتفع الأسعار عادة في الصيف، وهي ترتفع الآن."],
    ["{q:What} {a:do} {s:you} {v:do}? — I'm an engineer.", "ما عملك؟ (سؤال عن المهنة)"],
    ["{q:What} {a:are} {s:you} {v:doing}? — I'm cooking.", "ماذا تفعل الآن؟"],
    ["{s:I} {a:don't} {v:understand} this question.", "لا أفهم هذا السؤال."]
  ],
  mistakes: [
    ["I am understanding you.", "I understand you.", "`understand` فعل حالة."],
    ["Every day I am going to work by car.", "Every day I go to work by car.", "`Every day` عادة متكررة: المضارع البسيط."],
    ["What do you do now? (meaning: at this moment)", "What are you doing now?", "`What do you do?` تعني «ما مهنتك؟». للسؤال عن اللحظة استخدم المستمر."],
    ["This book is belonging to me.", "This book belongs to me.", "`belong` فعل ملكية (حالة)."]
  ],
  ielts: {
    text: "التنويع بين الزمنين في نفس الإجابة يرفع درجة **Grammatical Range**. في **Speaking Part 1** اربط عادتك الدائمة بوضعك الحالي، كما في المثال. ولاحظ أن الخلط بينهما من أكثر ما يلاحظه الممتحن.",
    en: "I normally work from the office, but these days I'm working from home because the building is being renovated."
  },
  questions: [
    { t: "mcq", q: "I ___ to the gym three times a week.", o: ["go", "am going", "going", "goes"], a: 0,
      why: "`three times a week` عادة: المضارع البسيط." },
    { t: "mcq", q: "Please be quiet. I ___ to concentrate.", o: ["try", "am trying", "tries", "trying"], a: 1,
      why: "يحدث الآن: المضارع المستمر." },
    { t: "mcq", q: "I ___ what you mean.", o: ["am seeing", "see", "seeing", "am see"], a: 1,
      why: "`see` هنا بمعنى «أفهم» وهو فعل حالة." },
    { t: "mcq", q: "“What ___?” “I'm an accountant.”", o: ["are you doing", "do you do", "you do", "are you do"], a: 1,
      why: "السؤال عن المهنة: `What do you do?`" },
    { t: "mcq", q: "She ___ a shower at the moment. Can she call you back?", o: ["has", "is having", "have", "having"], a: 1,
      why: "`have a shower` حدث (ليس ملكية)، فيأتي بالمستمر مع `at the moment`." },
    { t: "mcq", q: "This car ___ to my uncle.", o: ["is belonging", "belongs", "belong", "belonging"], a: 1,
      why: "`belong` فعل حالة: `belongs`." },
    { t: "fill", q: "Water ___ (boil) at 100°C.", a: ["boils"],
      why: "حقيقة علمية: المضارع البسيط." },
    { t: "fill", q: "Hurry up! Everyone ___ (wait) for you.", a: ["is waiting", "'s waiting"],
      why: "يحدث الآن، و`everyone` يعامل كمفرد: `is waiting`." },
    { t: "fill", q: "I ___ (think) that online learning is useful.", a: ["think"],
      why: "`think` بمعنى «أرى» (رأي) فعل حالة: المضارع البسيط." },
    { t: "fill", q: "Be quiet, I ___ (think) about the problem.", a: ["am thinking", "'m thinking"],
      why: "`think about` بمعنى التفكير الجاري الآن: المستمر." },
    { t: "fix", q: "I am needing some help with this.", a: ["I need some help with this."],
      why: "`need` فعل حالة لا يأتي بـ -ing." },
    { t: "fix", q: "He usually is driving to work.", a: ["He usually drives to work."],
      why: "`usually` تدل على عادة: المضارع البسيط." },
    { t: "fix", q: "Look! The bus come.", a: ["Look! The bus is coming."],
      why: "`Look!` تدل على حدث الآن: `is coming`." },
    { t: "fill", q: "I normally take the metro, but this week I ___ (go) by car.", a: ["am going", "'m going"],
      why: "`normally` عادة دائمة (بسيط)، و`this week` وضع مؤقت (مستمر): `am going`." }
  ]
};
