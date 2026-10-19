window.UNITS = window.UNITS || {};
window.UNITS[93] = {
  id: 93,
  title: "Gradable and non-gradable adjectives",
  ar: "الصفات المتدرجة وغير المتدرجة",
  idea: "**الصفات المتدرجة** لها درجات (`hot, cold, big`) وتأتي مع `very, quite, a bit`. **الصفات غير المتدرجة** (المطلقة أو القوية) مثل `boiling, freezing, huge, perfect` لا تأتي مع `very`، بل مع `absolutely, completely, totally`.",
  uses: [
    ["متدرجة + very", "very hot, very tired, very good"],
    ["قوية + absolutely", "absolutely boiling, absolutely exhausted, absolutely amazing"],
    ["مطلقة + completely", "completely wrong, totally impossible"],
    ["really مع النوعين", "really hot, really boiling"]
  ],
  formula: [
    ["متدرجة", "{x:very / extremely / fairly / quite / a bit} + {v:cold}"],
    ["قوية", "{x:absolutely / totally / completely / utterly} + {v:freezing}"],
    ["أزواج", "cold → freezing · hot → boiling · big → huge · small → tiny · tired → exhausted · good → excellent · bad → terrible · surprised → amazed"]
  ],
  notes: [
    { title: "لا very مع القوية",
      body: "`very exhausted` و`very delicious` و`very excellent` تبدو خاطئة للمتحدث الأصلي.",
      en: "{x:absolutely} delicious (not: very delicious)" },
    { title: "quite بمعنيين",
      body: "مع المتدرجة `quite` = إلى حد ما. مع القوية `quite` = تمامًا.",
      en: "{x:quite} good (fairly) · {x:quite} right (completely)" }
  ],
  examples: [
    ["It's {x:absolutely} {v:freezing} outside!", "الجو بارد جدًا جدًا في الخارج!"],
    ["The exam was {x:very} {v:difficult}.", "كان الاختبار صعبًا جدًا."],
    ["I'm {x:completely} {v:exhausted}.", "أنا منهك تمامًا."],
    ["Their new house is {x:absolutely} {v:enormous}.", "بيتهم الجديد ضخم للغاية."],
    ["You're {x:totally} {v:right}.", "أنت محق تمامًا."]
  ],
  mistakes: [
    ["The food was very delicious.", "The food was absolutely delicious.", "`delicious` قوية."],
    ["It's absolutely cold.", "It's very cold. / It's absolutely freezing.", "`cold` متدرجة."],
    ["very perfect", "absolutely perfect", "`perfect` مطلقة."],
    ["very excellent", "absolutely excellent / really excellent", "`excellent` قوية."]
  ],
  ielts: {
    text: "استخدام الصفات القوية مع ظروفها الصحيحة في **Speaking** (`absolutely stunning`, `completely different`) يرفع **Lexical Resource** بوضوح، لأنه من مؤشرات collocation الطبيعية.",
    en: "The view from the mountain was absolutely breathtaking, and the weather was perfect."
  },
  questions: [
    { t: "mcq", q: "It's ___ hot today. Let's stay inside.", o: ["absolutely", "very", "completely", "totally"], a: 1, why: "`hot` متدرجة: `very`." },
    { t: "mcq", q: "It's absolutely ___ in here! Turn on the AC.", o: ["hot", "warm", "boiling", "cool"], a: 2, why: "مع absolutely: صفة قوية `boiling`." },
    { t: "mcq", q: "The film was ___ brilliant.", o: ["very", "absolutely", "a bit", "fairly"], a: 1, why: "`brilliant` قوية." },
    { t: "mcq", q: "I'm ___ tired. I need a short rest.", o: ["absolutely", "a bit", "totally", "completely"], a: 1, why: "متدرجة: `a bit`." },
    { t: "mcq", q: "This answer is ___ wrong.", o: ["very", "completely", "a bit very", "fairly"], a: 1, why: "مطلقة: `completely`." },
    { t: "fill", q: "Small → tiny. Big → ___.", a: ["huge", "enormous", "massive", "gigantic"], why: "`huge / enormous`." },
    { t: "fill", q: "Tired → ___.", a: ["exhausted"], why: "`exhausted`." },
    { t: "fill", q: "Bad → ___.", a: ["terrible", "awful", "horrible", "dreadful"], why: "`terrible`." },
    { t: "fix", q: "The meal was very delicious.", a: ["The meal was absolutely delicious.", "The meal was really delicious.", "The meal was delicious."], why: "لا very مع delicious." },
    { t: "fix", q: "The room was absolutely small.", a: ["The room was very small.", "The room was absolutely tiny.", "The room was really small."], why: "`small` متدرجة." },
    { t: "fix", q: "Your English is very perfect.", a: ["Your English is absolutely perfect.", "Your English is perfect."], why: "`perfect` مطلقة." },
    { t: "rewrite", q: "It's very, very cold. (Use: absolutely + a strong adjective)", ask: "أعد الصياغة.", a: ["It's absolutely freezing.", "It is absolutely freezing."], why: "`absolutely freezing`." }
  ]
};
