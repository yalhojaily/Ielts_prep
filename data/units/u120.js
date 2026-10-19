window.UNITS = window.UNITS || {};
window.UNITS[120] = {
  id: 120,
  title: "Making conversation",
  ar: "إدارة المحادثة",
  idea: "المحادثة الجيدة ليست أسئلة وأجوبة فقط. نحتاج عبارات **لكسب الوقت** (`Well, let me think...`)، و**لإظهار الاستماع** (`Really? That's interesting`)، و**لتوسيع الإجابة** (`The thing is...`, `For example...`)، و**لطلب التوضيح** (`Sorry, could you repeat that?`).",
  uses: [
    ["كسب وقت للتفكير", "Well, ... / Let me think... / That's a good question."],
    ["إظهار الاهتمام", "Really? / That sounds great! / I see."],
    ["توسيع الإجابة", "The thing is, ... / What I like about it is ... / For instance, ..."],
    ["طلب التوضيح", "Sorry, could you say that again? / What do you mean by ...?"]
  ],
  formula: [
    ["تفكير", "{x:Well}, {x:let me think}... · {x:That's an interesting question.}"],
    ["رد فعل", "{x:Really?} · {x:That sounds} + adjective · {x:I know what you mean.}"],
    ["توسيع", "{x:The thing is}, ... · {x:To be honest}, ... · {x:As far as I'm concerned}, ..."],
    ["توضيح", "{x:Sorry, could you repeat that?} · {x:Do you mean} ...?"]
  ],
  notes: [
    { title: "لا تصمت طويلًا",
      body: "في الاختبار، الصمت الطويل أسوأ من عبارة لكسب الوقت. لكن لا تكرر نفس العبارة في كل إجابة.",
      en: "{x:That's not something I've thought about much, but} I'd say..." },
    { title: "That sounds + صفة",
      body: "لا نقول `That sounds like great`. الصفة مباشرة، أو `like` + اسم.",
      en: "{x:That sounds} great. · {x:That sounds like} a good idea." },
    { title: "to be honest",
      body: "للإجابة بصراحة، خاصة عند عدم الاهتمام بشيء.",
      en: "{x:To be honest}, I'm not really into sports." }
  ],
  examples: [
    ["{x:Well}, {x:that's a difficult question}, but I think...", "حسنًا، هذا سؤال صعب، لكنني أظن..."],
    ["{x:To be honest}, I don't watch much TV.", "بصراحة، لا أشاهد التلفاز كثيرًا."],
    ["“I got the job!” “{x:That's fantastic!} {x:Congratulations!}”", "حصلت على الوظيفة! رائع! مبروك!"],
    ["{x:The thing is}, I don't have enough time.", "المشكلة أنني لا أملك وقتًا كافيًا."],
    ["{x:Sorry, could you repeat} the question?", "عذرًا، هل يمكنك إعادة السؤال؟"]
  ],
  mistakes: [
    ["That sounds like great.", "That sounds great.", "بلا like مع الصفة."],
    ["Repeat please.", "Sorry, could you repeat that, please?", "صيغة مهذبة."],
    ["I don't understand your question. (silence)", "Sorry, do you mean ...?", "اطلب التوضيح بجملة."],
    ["Yes. (and stop)", "Yes, I do. Actually, ...", "وسّع الإجابة."]
  ],
  ielts: {
    text: "هذه القاعدة مصممة لـ **Speaking** مباشرة. درجة **Fluency and Coherence** تعتمد على قدرتك على الاستمرار في الكلام بشكل طبيعي. احفظ 3–4 عبارات لكسب الوقت و3–4 عبارات للتوسيع، ونوّع بينها.",
    en: "That's an interesting question. To be honest, I hadn't thought about it before, but I'd say the main reason is cost. For example, ..."
  },
  questions: [
    { t: "mcq", q: "“I'm going to Japan next month.” “___!”", o: ["That sounds amazing", "That sounds like amazing", "That's sound amazing", "It sounds like amazing"], a: 0, why: "`That sounds` + صفة." },
    { t: "mcq", q: "Examiner: “What do you think about modern art?” You: “___, I don't know much about it, but...”", o: ["Honestly to be", "To be honest", "For honest", "Be honest"], a: 1, why: "`To be honest`." },
    { t: "mcq", q: "You didn't hear the question. What do you say?", o: ["Repeat!", "What?", "Sorry, could you repeat that, please?", "Again."], a: 2, why: "صيغة مهذبة." },
    { t: "mcq", q: "“I think we should leave early.” “___. The traffic will be terrible.”", o: ["I know what you mean", "I know what do you mean", "I'm knowing", "You mean what"], a: 0, why: "`I know what you mean`." },
    { t: "mcq", q: "___ is, I don't have enough money to travel.", o: ["The thing", "A thing", "Thing", "The thing what"], a: 0, why: "`The thing is`." },
    { t: "fill", q: "“What's your favourite book?” “Hmm, let me ___...”", a: ["think", "see"], why: "`let me think`." },
    { t: "fill", q: "That ___ like a great idea!", a: ["sounds"], why: "`That sounds like` + اسم." },
    { t: "fill", q: "Sorry, what do you ___ by “sustainable”?", a: ["mean"], why: "`What do you mean by...?`" },
    { t: "fix", q: "That sounds like wonderful.", a: ["That sounds wonderful.", "That sounds like a wonderful idea."], why: "بلا like." },
    { t: "fix", q: "To be honestly, I don't like it.", a: ["To be honest, I don't like it.", "Honestly, I don't like it."], why: "`To be honest`." },
    { t: "fix", q: "What you mean by that?", a: ["What do you mean by that?"], why: "نحتاج `do`." },
    { t: "fill", q: "“Are you nervous about the exam?” “Well, to be ___, a little.”", a: ["honest"],
      why: "`to be honest` = بصراحة." }
  ]
};
