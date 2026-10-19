window.UNITS = window.UNITS || {};
window.UNITS[44] = {
  id: 44,
  title: "Tenses in reported speech",
  ar: "الأزمنة في الكلام المنقول",
  idea: "عندما يكون فعل النقل في الماضي (`said, told`) نرجع زمن الكلام **خطوة إلى الوراء**: المضارع يصبح ماضيًا، والماضي يصبح ماضيًا تامًا، و`will` تصبح `would`، و`can` تصبح `could`.",
  uses: [
    ["إرجاع الزمن (الأشهر)", "“I work here.” → He said he worked there."],
    ["لا نرجع الزمن إذا كان الكلام ما زال صحيحًا", "She said she is a doctor. (she still is)"],
    ["لا نرجع إذا كان فعل النقل في المضارع", "He says he is tired."]
  ],
  formula: [
    ["present simple → past", "“I {v:like} it” → he said he {v:liked} it"],
    ["present cont. → past cont.", "“I'{a:m} {v:working}” → he said he {a:was} {v:working}"],
    ["past / present perfect → past perfect", "“I {v:saw} / {a:have} {v:seen} it” → he said he {a:had} {v:seen} it"],
    ["will / can / may → would / could / might", "“I {a:will} {v:go}” → he said he {a:would} {v:go}"]
  ],
  notes: [
    { title: "ما لا يتغير",
      body: "`would, could, should, might, must (غالبًا), had + v3` تبقى كما هي.",
      en: "“You {a:should} {v:rest}.” → She said I {a:should} {v:rest}." },
    { title: "must",
      body: "`must` تبقى أو تصبح `had to`.",
      en: "“I {a:must} {v:leave}.” → He said he {a:had to} / {a:must} {v:leave}." },
    { title: "اختيارية الإرجاع",
      body: "إذا كانت المعلومة ما زالت صحيحة الآن، يمكن ترك الزمن كما هو. لكن الإرجاع دائمًا صحيح ولن يُحسب خطأ.",
      en: "He told me he {v:lives} / {v:lived} in Jeddah." }
  ],
  examples: [
    ["“I'm learning Spanish.” → {s:She} {v:said} she {a:was} {v:learning} Spanish.", "قالت إنها تتعلم الإسبانية."],
    ["“We've finished.” → {s:They} {v:said} they {a:had} {v:finished}.", "قالوا إنهم انتهوا."],
    ["“I can help.” → {s:He} {v:said} he {a:could} {v:help}.", "قال إنه يستطيع المساعدة."],
    ["“It will rain.” → {s:They} {v:said} it {a:would} {v:rain}.", "قالوا إنها ستمطر."],
    ["“I lost my keys.” → {s:He} {v:said} he {a:had} {v:lost} his keys.", "قال إنه أضاع مفاتيحه."]
  ],
  mistakes: [
    ["He said he will come.", "He said he would come.", "`will → would`."],
    ["She said she can't swim.", "She said she couldn't swim.", "`can't → couldn't`."],
    ["They said they have finished.", "They said they had finished.", "`have finished → had finished`."],
    ["He said that he is going yesterday.", "He said that he was going the day before.", "نرجع الزمن ونغير كلمة الزمان."]
  ],
  ielts: {
    text: "في **Writing Task 2** عند نقل نتائج الدراسات: `A recent study found that people who exercised regularly were happier.` وفي **Speaking Part 2** عند حكاية ما قيل لك. تطبيق القاعدة بثقة دليل واضح على المستوى B2+.",
    en: "The report stated that unemployment had fallen and that the economy would continue to grow."
  },
  questions: [
    { t: "mcq", q: "“I am tired.” → He said he ___ tired.", o: ["is", "was", "has been", "will be"], a: 1, why: "`am → was`." },
    { t: "mcq", q: "“We will win.” → They said they ___ win.", o: ["will", "would", "can", "had"], a: 1, why: "`will → would`." },
    { t: "mcq", q: "“I have seen the film.” → She said she ___ the film.", o: ["has seen", "had seen", "saw", "sees"], a: 1, why: "`have seen → had seen`." },
    { t: "mcq", q: "“I can't come.” → He told me he ___ come.", o: ["can't", "couldn't", "won't", "didn't"], a: 1, why: "`can't → couldn't`." },
    { t: "mcq", q: "“You should rest.” → The doctor said I ___ rest.", o: ["should", "should have", "shall", "would"], a: 0, why: "`should` لا تتغير." },
    { t: "fill", q: "“I'm working.” → She said she ___ working.", a: ["was"], why: "`am working → was working`." },
    { t: "fill", q: "“I bought a car.” → He said he ___ a car.", a: ["had bought"], why: "`bought → had bought`." },
    { t: "fill", q: "“It may rain.” → They said it ___ rain.", a: ["might"], why: "`may → might`." },
    { t: "fill", q: "“I live in Taif.” → He says he ___ in Taif.", a: ["lives"], why: "فعل النقل مضارع (`says`): لا نرجع الزمن." },
    { t: "fix", q: "She said she will call me later.", a: ["She said she would call me later."], why: "`would`." },
    { t: "fix", q: "He told me he has lost his job.", a: ["He told me he had lost his job.", "He told me that he had lost his job."], why: "`had lost`." },
    { t: "rewrite", q: "“I don't like coffee,” she said.", ask: "انقل الكلام بدءًا بـ She said ...", a: ["She said that she didn't like coffee.", "She said she didn't like coffee.", "She said she did not like coffee."], why: "`don't like → didn't like`." },
    { t: "rewrite", q: "“We are moving to Dubai,” they told me.", ask: "انقل الكلام بدءًا بـ They told me ...", a: ["They told me that they were moving to Dubai.", "They told me they were moving to Dubai."], why: "`are moving → were moving`." }
  ]
};
