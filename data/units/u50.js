window.UNITS = window.UNITS || {};
window.UNITS[50] = {
  id: 50,
  title: "Action and state verbs",
  ar: "أفعال الحدث وأفعال الحالة",
  idea: "أفعال الحدث (`run, eat, write`) تصف نشاطًا وتأتي في الصيغ المستمرة. أفعال الحالة (`know, love, own, seem`) تصف وضعًا ثابتًا ولا تأتي عادةً بـ `-ing`. وبعض الأفعال يكون حالة بمعنى وحدثًا بمعنى آخر.",
  uses: [
    ["حالة ذهنية", "know, believe, understand, remember, think (=رأي)"],
    ["مشاعر ورغبات", "like, love, hate, want, need, prefer"],
    ["ملكية وانتماء", "have (=يملك), own, belong, possess"],
    ["حواس ووصف", "seem, appear, look (=يبدو), sound, taste, smell, cost, weigh"]
  ],
  formula: [
    ["حالة: بسيط", "{s:I} {v:know} the answer. · {s:It} {v:costs} 50 riyals."],
    ["حدث: مستمر ممكن", "{s:I} {a:am} {v:reading} a book."],
    ["معنيان", "{s:I} {v:think} it's good. · {s:I}'{a:m} {v:thinking} about it."]
  ],
  notes: [
    { title: "أفعال بمعنيين",
      body: "`have` (يملك: حالة / يتناول: حدث). `think` (رأي / تفكير). `see` (يرى أو يفهم / يقابل). `taste` (له طعم / يتذوق). `weigh` (يزن كذا / يقوم بالوزن).",
      en: "I {v:see} what you mean. · I{a:'m} {v:seeing} the doctor tomorrow. · The soup {v:tastes} good. · She{a:'s} {v:tasting} the soup." },
    { title: "استثناءات حديثة",
      body: "في الإعلانات والكلام العامي قد تسمع `I'm loving it`، لكن في الاختبار التزم بالقاعدة.",
      en: "I {v:love} this city. (exam-safe)" }
  ],
  examples: [
    ["{s:This bag} {v:belongs} to my sister.", "هذه الحقيبة لأختي."],
    ["{s:She}'{a:s} {v:having} lunch with a client.", "تتناول الغداء مع عميل."],
    ["{s:I} {v:don't understand} the question.", "لا أفهم السؤال."],
    ["{s:He} {v:seems} very confident.", "يبدو واثقًا جدًا."],
    ["{s:We}'{a:re} {v:thinking} of moving to Jeddah.", "نفكر في الانتقال إلى جدة."]
  ],
  mistakes: [
    ["I am knowing him for years.", "I have known him for years.", "`know` حالة."],
    ["This book is belonging to me.", "This book belongs to me.", "`belong` حالة."],
    ["I'm not believing you.", "I don't believe you.", "`believe` حالة."],
    ["She is having a big house.", "She has a big house.", "`have` بمعنى الملكية حالة."]
  ],
  ielts: {
    text: "هذا الخطأ من أكثر الأخطاء شيوعًا عند الطلاب العرب في **Speaking**، خاصة `I am agree` و`I am understanding`. صحح نفسك: `I agree`, `I understand`.",
    en: "I completely agree with that view, and I believe it applies to most developing countries."
  },
  questions: [
    { t: "mcq", q: "I ___ what you mean.", o: ["am understanding", "understand", "understanding", "am understand"], a: 1, why: "`understand` حالة." },
    { t: "mcq", q: "She ___ dinner with her parents right now.", o: ["has", "is having", "have", "is had"], a: 1, why: "`have dinner` حدث." },
    { t: "mcq", q: "This watch ___ 2,000 riyals.", o: ["is costing", "costs", "cost", "is cost"], a: 1, why: "`cost` حالة." },
    { t: "mcq", q: "I ___ with you completely.", o: ["am agree", "agree", "am agreeing", "agreeing"], a: 1, why: "`agree` فعل، لا يأتي مع am." },
    { t: "mcq", q: "Why are you ___ the soup? Is it too salty?", o: ["tasting", "taste", "tastes", "tasted"], a: 0, why: "`taste` هنا حدث (يتذوق)." },
    { t: "fill", q: "I ___ (think) about changing my job. I haven't decided yet.", a: ["am thinking", "'m thinking"], why: "تفكير جارٍ: حدث." },
    { t: "fill", q: "I ___ (think) London is expensive.", a: ["think"], why: "رأي: حالة." },
    { t: "fill", q: "This car ___ (belong) to my uncle.", a: ["belongs"], why: "حالة." },
    { t: "fill", q: "He ___ (want) a new phone for his birthday.", a: ["wants"], why: "حالة." },
    { t: "fix", q: "I am agree with your idea.", a: ["I agree with your idea."], why: "`agree` بدون am." },
    { t: "fix", q: "She is knowing the answer.", a: ["She knows the answer."], why: "حالة." },
    { t: "fix", q: "We are owning two houses.", a: ["We own two houses."], why: "حالة." },
    { t: "rewrite", q: "I am needing your help.", ask: "صحّح الجملة.", a: ["I need your help."], why: "`need` حالة." }
  ]
};
