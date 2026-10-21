window.LESSONS = window.LESSONS || {};
window.LESSONS[111] = {
  steps: [
    { k: "الفكرة", h: "جملة *تابعة* لا تقف وحدها",
      why: [
        "أدوات مثل `because, although, when, if` تبدأ جملة **تابعة**: معناها ناقص حتى تتصل بجملة رئيسية.",
        "`Because I was tired.` وحدها جملة ناقصة في الكتابة. يجب ربطها: `I went to bed early because I was tired.`"
      ],
      show: [{ t: "cards", items: [
        { i: "question", h: "سبب", tags: ["because", "as", "since"] },
        { i: "scale", h: "تناقض", tags: ["although", "even though", "while", "whereas"] },
        { i: "clock", h: "زمان", tags: ["when", "while", "before", "after", "until", "as soon as"] },
        { i: "target", h: "غرض", tags: ["so that", "in order that"] }
      ] },
        { t: "fix", items: [["I study hard. Because I want to pass.", "I study hard {k:because} I want to pass.", "لا تفصلها بنقطة"]] }],
      check: { q: "Which is a complete sentence?", o: ["Although the job is stressful.", "Although the job is stressful, I enjoy it."], a: 1, why: "الجملة التابعة تحتاج جملة رئيسية." } },

    { k: "المكان والفاصلة", h: "في الأول + فاصلة · في الوسط بلا فاصلة",
      why: ["الجملة التابعة يمكن أن تأتي أولًا أو ثانيًا. إذا جاءت **أولًا** نضع فاصلة بعدها، وإذا جاءت **ثانيًا** فلا فاصلة."],
      show: [{ t: "build", lab: "اختر",
        opts: [["في الأول", "{k:Although} it was late{k:,} we continued working.", "فاصلة بعد الجملة التابعة", 0], ["في الوسط", "We continued working {k:although} it was late.", "بلا فاصلة", 1]],
        groups: [{ h: "التابعة أولًا + ," }, { h: "التابعة ثانيًا" }] }],
      check: { q: "Where does the comma go? \"When I arrived ___ everyone had left.\"", o: ["(nothing)", ","], a: 1, why: "الجملة التابعة في الأول ← فاصلة بعدها." } },

    { k: "although أم despite", h: "although + *جملة* · despite + *اسم*",
      why: [
        "`although / even though` + جملة كاملة (فاعل + فعل).",
        "`despite / in spite of` + اسم أو `ing`. ولا تجمع `although` مع `but`."
      ],
      show: [{ t: "compare", cols: [{ h: "although + جملة", c: "subj", en: ["{k:Although} {s:it} {v:rained}, we went out."] }, { h: "despite + اسم", c: "accent", en: ["{k:Despite} the rain, we went out."] }] },
        { t: "fix", items: [["Despite it was raining, we went out.", "{k:Although} it was raining… / {k:Despite} the rain…", ""], ["Although it was cold, but we swam.", "{k:Although} it was cold, we swam.", ""]] }],
      check: { q: "___ he was ill, he went to work.", o: ["Despite", "Although"], a: 1, why: "بعدها جملة كاملة ← `Although`." } },

    { k: "whereas", h: "while / whereas للمقارنة في Task 1",
      why: [
        "`while` و`whereas` تقارنان بين شيئين متعاكسين في جملة واحدة. مثاليتان لـ Writing Task 1.",
        "و`as / since` بمعنى `because` تأتيان غالبًا في الأول لسبب معروف."
      ],
      show: [{ t: "ex", items: [["Sales rose in Asia, {k:whereas} they fell in Europe.", "مقارنة"], ["{k:While} men prefer football, women prefer tennis.", ""], ["{k:As} it was late, we took a taxi.", "= because"], ["I left early {k:so that} I could catch the train.", "غرض"]] }],
      check: { q: "Prices rose in 2020, ___ they fell in 2021.", o: ["whereas", "so that"], a: 0, why: "مقارنة بين متعاكسين ← `whereas`." } }
  ],
  sum: [
    { h: "سبب", en: ["because · as · since"] },
    { h: "تناقض", en: ["although · even though · whereas"] },
    { h: "الفاصلة", en: ["{k:Although} X{k:,} Y. · Y {k:although} X."] },
    { h: "despite", en: ["despite + اسم · although + جملة"] }
  ]
};
