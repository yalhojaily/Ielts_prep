window.UNITS = window.UNITS || {};
window.UNITS[111] = {
  id: 111,
  title: "Subordinating conjunctions",
  ar: "أدوات الربط التابعة",
  idea: "هذه الأدوات تبدأ **جملة تابعة** لا تكتمل وحدها: `because, although, when, while, if, unless, since, as, so that, until, before, after`. يمكن أن تأتي في أول الجملة (مع فاصلة) أو في وسطها (بلا فاصلة).",
  uses: [
    ["سبب", "because, as, since"],
    ["تناقض", "although, even though, while, whereas"],
    ["زمان", "when, while, before, after, until, as soon as"],
    ["غرض", "so that, in order that"]
  ],
  formula: [
    ["في الأول", "{x:Although} it was late{x:,} we continued working."],
    ["في الوسط", "We continued working {x:although} it was late."],
    ["غرض", "I left early {x:so that} I could catch the train."]
  ],
  notes: [
    { title: "although / even though / despite",
      body: "`although` و`even though` + جملة كاملة (فاعل وفعل). `despite` + اسم أو -ing.",
      en: "{x:Although} it rained... · {x:Despite} the rain..." },
    { title: "while / whereas للمقارنة",
      body: "للمقارنة بين شيئين متعاكسين، مثالية في Task 1.",
      en: "Sales rose in Asia, {x:whereas} they fell in Europe." },
    { title: "as و since بمعنى because",
      body: "تأتيان غالبًا في أول الجملة لسبب معروف.",
      en: "{x:As} it was late, we took a taxi." },
    { title: "جملة تابعة وحدها خطأ",
      body: "`Because I was tired.` وحدها جملة ناقصة في الكتابة.",
      en: "I went to bed early {x:because} I was tired." }
  ],
  examples: [
    ["{x:Although} the job is stressful, I enjoy it.", "رغم أن العمل مرهق، أستمتع به."],
    ["I'll wait {x:until} you finish.", "سأنتظر حتى تنتهي."],
    ["{x:Since} you're here, can you help me?", "بما أنك هنا، هل تساعدني؟"],
    ["She saves money {x:so that} she can buy a house.", "تدخر المال لكي تشتري بيتًا."],
    ["My brother likes football, {x:whereas} I prefer tennis.", "أخي يحب كرة القدم، بينما أفضل التنس."]
  ],
  mistakes: [
    ["Although it was cold, but we swam.", "Although it was cold, we swam.", "لا `but`."],
    ["Despite it was raining, we went out.", "Although it was raining, we went out. / Despite the rain, we went out.", "`despite` + اسم."],
    ["I study hard. Because I want to pass.", "I study hard because I want to pass.", "لا نفصل الجملة التابعة."],
    ["I'll call you when I will arrive.", "I'll call you when I arrive.", "لا will بعد when."]
  ],
  ielts: {
    text: "الجمل المركبة بهذه الأدوات هي جوهر **Grammatical Range** في **Writing Task 2**. نوّع: `Although..., While..., As..., so that...`. و`whereas` أفضل أداة لمقارنة الأرقام في **Task 1**.",
    en: "Although technology has improved communication, many people feel more isolated, whereas in the past communities were closer."
  },
  questions: [
    { t: "mcq", q: "___ it was raining, we went for a walk.", o: ["Despite", "Although", "Because", "But"], a: 1, why: "تناقض + جملة: `Although`." },
    { t: "mcq", q: "I'm saving money ___ I can travel next year.", o: ["so that", "because", "although", "until"], a: 0, why: "غرض: `so that`." },
    { t: "mcq", q: "Men's salaries increased, ___ women's salaries stayed the same.", o: ["whereas", "because", "so", "until"], a: 0, why: "مقارنة: `whereas`." },
    { t: "mcq", q: "___ you're tired, you should go home.", o: ["Although", "Since", "Unless", "Whereas"], a: 1, why: "سبب: `Since`." },
    { t: "mcq", q: "___ the cost, he bought the car.", o: ["Although", "Despite", "Even though", "Because"], a: 1, why: "+ اسم: `Despite`." },
    { t: "fill", q: "I couldn't sleep ___ the neighbours were noisy.", a: ["because", "as", "since"], why: "سبب." },
    { t: "fill", q: "Wait here ___ I come back.", a: ["until", "till"], why: "`until`." },
    { t: "fill", q: "___ though he's rich, he lives in a small flat.", a: ["Even"], why: "`Even though`." },
    { t: "fix", q: "Although I studied, but I failed.", a: ["Although I studied, I failed.", "I studied, but I failed."], why: "أداة واحدة." },
    { t: "fix", q: "Despite it was expensive, I bought it.", a: ["Although it was expensive, I bought it.", "Despite the cost, I bought it.", "Even though it was expensive, I bought it.", "Despite it being expensive, I bought it."], why: "`although` + جملة." },
    { t: "fix", q: "I went home. Because I was tired.", a: ["I went home because I was tired."], why: "لا نفصل." },
    { t: "rewrite", q: "The job was hard. She enjoyed it. (Begin with: Although ...)", ask: "اربط الجملتين.", a: ["Although the job was hard, she enjoyed it."], why: "`Although ..., ...`." }
  ]
};
