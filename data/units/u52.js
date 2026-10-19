window.UNITS = window.UNITS || {};
window.UNITS[52] = {
  id: 52,
  title: "Verb patterns",
  ar: "أنماط الأفعال: to أم -ing؟",
  idea: "عندما يأتي فعل بعد فعل، يحدد **الفعل الأول** صيغة الثاني: بعضها يأخذ `to + verb`، وبعضها يأخذ `-ing`، وبعضها يأخذ الاثنين بنفس المعنى، وقليل منها يتغير معناه. هذه القوائم تُحفظ.",
  uses: [
    ["+ to", "want, hope, decide, plan, agree, refuse, promise, need, learn, afford, manage, seem"],
    ["+ -ing", "enjoy, finish, avoid, mind, suggest, keep, consider, imagine, practise, miss, admit, deny"],
    ["+ الاثنين بنفس المعنى", "start, begin, continue, like, love, hate, prefer"],
    ["+ الاثنين بمعنى مختلف", "stop, remember, forget, try, regret"]
  ],
  formula: [
    ["to", "{s:I} {v:decided} {a:to} {v:leave}."],
    ["-ing", "{s:I} {v:enjoy} {v:reading}."],
    ["الاثنين", "{s:It} {v:started} {a:to} {v:rain} / {v:raining}."]
  ],
  notes: [
    { title: "stop",
      body: "`stop + -ing` = توقف عن فعل الشيء. `stop + to` = توقف لكي يفعل شيئًا آخر.",
      en: "I {v:stopped} {v:smoking}. (I don't smoke now) · I {v:stopped} {a:to} {v:smoke}. (I stopped walking in order to smoke)" },
    { title: "remember / forget",
      body: "`remember + -ing` = يتذكر شيئًا فعله في الماضي. `remember + to` = يتذكر أن عليه فعل شيء.",
      en: "I {v:remember} {v:meeting} him. · {v:Remember} {a:to} {v:lock} the door." },
    { title: "try",
      body: "`try + to` = يحاول (صعب). `try + -ing` = يجرب كحل.",
      en: "I {v:tried} {a:to} {v:open} it, but I couldn't. · {v:Try} {v:restarting} the computer." },
    { title: "would like + to",
      body: "`like + -ing` للعادة، و`would like + to` للرغبة الآن.",
      en: "I {v:like} {v:swimming}. · I{a:'d} {v:like} {a:to} {v:swim} now." }
  ],
  examples: [
    ["{s:We} {v:can't afford} {a:to} {v:buy} a new car.", "لا نستطيع تحمل شراء سيارة جديدة."],
    ["{a:Would} you {v:mind} {v:closing} the door?", "هل تمانع إغلاق الباب؟"],
    ["{s:He} {v:keeps} {v:making} the same mistake.", "يستمر في ارتكاب الخطأ نفسه."],
    ["{s:I}'m {v:considering} {v:changing} my career.", "أفكر في تغيير مساري المهني."],
    ["{s:She} {v:managed} {a:to} {v:finish} on time.", "تمكنت من الانتهاء في الوقت."]
  ],
  mistakes: [
    ["I enjoy to read.", "I enjoy reading.", "`enjoy + -ing`."],
    ["I want going home.", "I want to go home.", "`want + to`."],
    ["Would you mind to wait?", "Would you mind waiting?", "`mind + -ing`."],
    ["I decided studying abroad.", "I decided to study abroad.", "`decide + to`."]
  ],
  ielts: {
    text: "أنماط الأفعال تظهر في كل جملة تقريبًا. أخطاء مثل `enjoy to` و`suggest to` تخفض الدقة. احفظ أكثر 20 فعلًا استخدامًا في القائمتين، وراجعها أسبوعيًا.",
    en: "I've always enjoyed travelling, and I hope to visit South America in the next few years."
  },
  questions: [
    { t: "mcq", q: "I enjoy ___ with my friends.", o: ["to play", "playing", "play", "played"], a: 1, why: "`enjoy + -ing`." },
    { t: "mcq", q: "She decided ___ the job offer.", o: ["accepting", "to accept", "accept", "for accepting"], a: 1, why: "`decide + to`." },
    { t: "mcq", q: "Have you finished ___ the report?", o: ["to write", "writing", "write", "wrote"], a: 1, why: "`finish + -ing`." },
    { t: "mcq", q: "I stopped ___ coffee because I couldn't sleep.", o: ["to drink", "drinking", "drink", "drank"], a: 1, why: "توقف عن العادة: `stopped drinking`." },
    { t: "mcq", q: "Please remember ___ the lights before you leave.", o: ["turning off", "to turn off", "turn off", "turned off"], a: 1, why: "مهمة مستقبلية: `remember to`." },
    { t: "mcq", q: "I'll never forget ___ the Grand Canyon for the first time.", o: ["to see", "seeing", "see", "saw"], a: 1, why: "ذكرى ماضية: `forget + -ing`." },
    { t: "fill", q: "They can't afford ___ (travel) this year.", a: ["to travel"], why: "`afford + to`." },
    { t: "fill", q: "He avoided ___ (answer) my question.", a: ["answering"], why: "`avoid + -ing`." },
    { t: "fill", q: "We're planning ___ (open) a café.", a: ["to open"], why: "`plan + to`." },
    { t: "fill", q: "Would you mind ___ (help) me?", a: ["helping"], why: "`mind + -ing`." },
    { t: "fix", q: "I suggest to take the train.", a: ["I suggest taking the train.", "I suggest that we take the train."], why: "`suggest + -ing`." },
    { t: "fix", q: "She refused answering the phone.", a: ["She refused to answer the phone."], why: "`refuse + to`." },
    { t: "rewrite", q: "I tried. I wanted to lift the box, but it was too heavy. (Use: tried + to)", ask: "اكتب جملة واحدة.", a: ["I tried to lift the box, but it was too heavy."], why: "محاولة صعبة: `tried to`." }
  ]
};
