window.UNITS = window.UNITS || {};
window.UNITS[65] = {
  id: 65,
  title: "“This / that / these / those”",
  ar: "أسماء الإشارة",
  idea: "`this` (هذا/هذه) و`these` (هؤلاء/هذه للجمع) للقريب. `that` (ذلك/تلك) و`those` (أولئك) للبعيد. وتُستخدم أيضًا للزمن: `this week` للحاضر، و`that day` للماضي.",
  uses: [
    ["قريب مفرد / جمع", "this book / these books"],
    ["بعيد مفرد / جمع", "that car / those cars"],
    ["الإشارة إلى فكرة سابقة", "That's a good idea."],
    ["بداية المكالمة", "Hello, this is Yousef."]
  ],
  formula: [
    ["قريب", "{x:this} + مفرد / غير معدود · {x:these} + جمع"],
    ["بعيد", "{x:that} + مفرد / غير معدود · {x:those} + جمع"],
    ["ضمير", "{x:This} is my brother. · {x:Those} are mine."]
  ],
  notes: [
    { title: "التطابق في العدد",
      body: "`these / those` مع الجمع فقط. خطأ شائع: `this people`.",
      en: "{x:these} people · {x:those} shoes (not: this people)" },
    { title: "this one / that one",
      body: "للتمييز بين الأشياء بدل تكرار الاسم.",
      en: "I don't like this shirt. I prefer {x:that one}." },
    { title: "في الكتابة",
      body: "`This` في أول الجملة تشير إلى الفكرة السابقة كلها، وهي أداة ربط ممتازة.",
      en: "Prices have risen. {x:This} has affected many families." }
  ],
  examples: [
    ["{x:This} coffee is too sweet.", "هذه القهوة حلوة جدًا."],
    ["{x:These} shoes are comfortable.", "هذا الحذاء مريح."],
    ["Who is {x:that} man over there?", "من ذلك الرجل هناك؟"],
    ["{x:Those} were the best days of my life.", "تلك كانت أجمل أيام حياتي."],
    ["{x:That}'s exactly what I mean.", "هذا بالضبط ما أعنيه."]
  ],
  mistakes: [
    ["This people are friendly.", "These people are friendly.", "`people` جمع: `these`."],
    ["I like this shoes.", "I like these shoes.", "`shoes` جمع."],
    ["Those car is expensive.", "That car is expensive.", "`car` مفرد: `that`."],
    ["In these days, everyone has a phone. (in the past?)", "These days, everyone has a phone.", "`these days` = هذه الأيام، بلا in."]
  ],
  ielts: {
    text: "في **Writing Task 2** استخدم `This` و`These` لربط الأفكار: `This trend...`, `These problems...`, `This means that...`. الربط بها يرفع **Coherence and Cohesion**. لكن تأكد أن الإشارة واضحة.",
    en: "Many young people move to cities for work. This puts pressure on housing and transport."
  },
  questions: [
    { t: "mcq", q: "___ books on my desk are new.", o: ["This", "These", "That", "Those"], a: 1, why: "جمع قريب: `These`." },
    { t: "mcq", q: "Look at ___ mountain in the distance!", o: ["this", "these", "that", "those"], a: 2, why: "مفرد بعيد: `that`." },
    { t: "mcq", q: "___ people are waiting for the bus.", o: ["This", "That", "Those", "Thats"], a: 2, why: "`people` جمع: `Those`." },
    { t: "mcq", q: "Hello, ___ is Sara speaking.", o: ["this", "that", "these", "it's"], a: 0, why: "في الهاتف: `this is`." },
    { t: "mcq", q: "I don't like this phone. Can I see ___ one?", o: ["those", "that", "these", "them"], a: 1, why: "`that one`." },
    { t: "fill", q: "___ days, many people work from home.", a: ["These"], why: "`These days`." },
    { t: "fill", q: "Do you remember ___ day we met?", a: ["that", "the"], why: "يوم في الماضي: `that day`." },
    { t: "fill", q: "Are ___ your keys on the table over there?", a: ["those"], why: "جمع بعيد." },
    { t: "fix", q: "This students are very clever.", a: ["These students are very clever."], why: "جمع: `These`." },
    { t: "fix", q: "Those house is very old.", a: ["That house is very old."], why: "مفرد: `That`." },
    { t: "fix", q: "I want these one.", a: ["I want this one."], why: "`one` مفرد: `this one`." },
    { t: "rewrite", q: "Prices increased. The increase affected poor families. (Use: This)", ask: "اربط الجملتين بـ This.", a: ["Prices increased. This affected poor families.", "Prices increased, and this affected poor families."], why: "`This` تشير إلى الفكرة السابقة." }
  ]
};
