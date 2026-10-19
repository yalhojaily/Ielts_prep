window.UNITS = window.UNITS || {};
window.UNITS[87] = {
  id: 87,
  title: "Shifting focus",
  ar: "تحويل التركيز (جمل التأكيد)",
  idea: "لتأكيد جزء من الجملة نستخدم تراكيب خاصة: **It is / was ... that / who** (`It was Ali who called`)، و**What ... is / was** (`What I need is rest`). هذه الجمل تسمى cleft sentences.",
  uses: [
    ["It was ... that: تأكيد الشخص أو الشيء", "It was my brother who helped me."],
    ["It was ... that: تأكيد الزمان أو المكان", "It was in 2010 that we moved."],
    ["What ... is: تأكيد الشيء", "What I love about Madinah is its calm."],
    ["All ... is: الشيء الوحيد", "All I want is a cup of tea."]
  ],
  formula: [
    ["it-cleft", "{s:It} {v:was} {x:Sara} {x:who} broke the vase."],
    ["it-cleft", "{s:It}'s {x:the price} {x:that} worries me."],
    ["what-cleft", "{x:What} I need {v:is} more time."],
    ["what + do", "{x:What} he did {v:was} (to) call the police."]
  ],
  notes: [
    { title: "مقارنة",
      body: "الجملة العادية: `Ali called me yesterday`. للتأكيد على كل جزء:",
      en: "It was {x:Ali} who called. · It was {x:yesterday} that he called. · It was {x:me} that he called." },
    { title: "the reason why / the place where",
      body: "تراكيب مشابهة للتأكيد.",
      en: "{x:The reason why} I left {v:was} the salary. · {x:The place where} we met {v:was} a café." }
  ],
  examples: [
    ["{s:It} {v:was} {x:my father} who taught me to invest.", "أبي هو من علمني الاستثمار."],
    ["{x:What} surprised me {v:was} the size of the city.", "ما فاجأني هو حجم المدينة."],
    ["{s:It}'s {x:not the money} that matters.", "ليس المال هو المهم."],
    ["{x:All} you need {v:is} patience.", "كل ما تحتاجه هو الصبر."],
    ["{x:The reason why} I'm learning English {v:is} my career.", "السبب في أنني أتعلم الإنجليزية هو مسيرتي المهنية."]
  ],
  mistakes: [
    ["It was Ali which called.", "It was Ali who called.", "للشخص: `who`."],
    ["What I need it is sleep.", "What I need is sleep.", "لا نضيف it."],
    ["The reason is because...", "The reason is that...", "`The reason is that` أفضل."]
  ],
  ielts: {
    text: "في **Speaking Part 2 و3** هذه التراكيب تجعل كلامك أكثر تعبيرًا: `What I really enjoyed was...`, `It was my teacher who...`. وفي **Writing Task 2**: `What is needed is...`.",
    en: "What I enjoyed most about the trip was the food, but it was the people who made it really special."
  },
  questions: [
    { t: "mcq", q: "It was my mother ___ cooked this.", o: ["which", "who", "what", "whom"], a: 1, why: "شخص: `who`." },
    { t: "mcq", q: "___ I need is a long holiday.", o: ["That", "Which", "What", "It"], a: 2, why: "`What I need is`." },
    { t: "mcq", q: "It was in 2015 ___ I started my business.", o: ["when", "that", "which", "who"], a: 1, why: "`It was ... that`." },
    { t: "mcq", q: "All I want ___ some peace and quiet.", o: ["is", "are", "it is", "that"], a: 0, why: "`All I want is`." },
    { t: "mcq", q: "The reason I called is ___ I need your help.", o: ["because", "that", "why", "what"], a: 1, why: "`The reason is that`." },
    { t: "fill", q: "It ___ the noise that kept me awake last night.", a: ["was"], why: "ماضٍ: `It was`." },
    { t: "fill", q: "___ I like about this job is the flexibility.", a: ["What"], why: "`What`." },
    { t: "fill", q: "It's not the cost ___ worries me; it's the time.", a: ["that"], why: "`that`." },
    { t: "fix", q: "What I want it is a new car.", a: ["What I want is a new car."], why: "لا it." },
    { t: "fix", q: "It was Omar which won the prize.", a: ["It was Omar who won the prize.", "It was Omar that won the prize."], why: "`who`." },
    { t: "rewrite", q: "I love the beaches in Jeddah. (Begin with: What I love ...)", ask: "أعد الصياغة للتأكيد.", a: ["What I love about Jeddah is the beaches.", "What I love about Jeddah are the beaches.", "What I love in Jeddah is the beaches.", "What I love is the beaches in Jeddah."], why: "`What I love ... is`." },
    { t: "rewrite", q: "Sara found my keys. (Begin with: It was ...)", ask: "أعد الصياغة للتأكيد على Sara.", a: ["It was Sara who found my keys.", "It was Sara that found my keys."], why: "`It was Sara who`." }
  ]
};
