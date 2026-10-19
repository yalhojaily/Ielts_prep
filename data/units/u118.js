window.UNITS = window.UNITS || {};
window.UNITS[118] = {
  id: 118,
  title: "Correcting and changing the subject",
  ar: "تصحيح الكلام وتغيير الموضوع",
  idea: "في المحادثة نحتاج عبارات لـ **تصحيح** ما قلناه أو قاله غيرنا بلطف (`Actually, ...`, `What I meant was...`)، و**تغيير الموضوع** أو العودة إليه (`By the way, ...`, `Anyway, ...`, `Going back to...`).",
  uses: [
    ["تصحيح نفسك", "I mean... / Sorry, I meant... / Or rather..."],
    ["تصحيح غيرك بلطف", "Actually, ... / In fact, ... / I'm not sure that's right."],
    ["تغيير الموضوع", "By the way, ... / Speaking of which, ..."],
    ["العودة للموضوع", "Anyway, ... / Going back to what I said, ..."]
  ],
  formula: [
    ["تصحيح", "{x:Actually}, it's on Tuesday, not Monday."],
    ["توضيح", "{x:What I meant was} ... · {x:In other words}, ..."],
    ["موضوع جديد", "{x:By the way}, did you hear about...?"],
    ["عودة", "{x:Anyway}, as I was saying, ..."]
  ],
  notes: [
    { title: "actually ليست الآن",
      body: "`actually` = في الحقيقة، لا تعني «حاليًا». للحاضر نستخدم `currently` أو `at the moment`.",
      en: "{x:Actually}, I'm a teacher. · I'm {x:currently} working in Riyadh." },
    { title: "تصحيح نفسك في Speaking",
      body: "إذا أخطأت صحح نفسك بسرعة وطبيعية. هذا لا يخفض درجتك بل يظهر وعيك.",
      en: "I go—sorry, I {x:went} there last year." }
  ],
  examples: [
    ["The meeting is at 3. {x:Actually}, no, it's at 4.", "الاجتماع الساعة 3. في الحقيقة، لا، الساعة 4."],
    ["{x:By the way}, have you seen Ahmed recently?", "بالمناسبة، هل رأيت أحمد مؤخرًا؟"],
    ["{x:Anyway}, let's get back to the plan.", "على أي حال، لنعد إلى الخطة."],
    ["It's expensive. {x:Well}, not expensive, {x:but} not cheap.", "إنه غالٍ. حسنًا، ليس غاليًا لكنه ليس رخيصًا."],
    ["{x:What I meant was} that we need more time.", "ما قصدته هو أننا نحتاج وقتًا أكثر."]
  ],
  mistakes: [
    ["Actually I live in Riyadh. (meaning: currently)", "Currently, I live in Riyadh. / At the moment, I live in Riyadh.", "`actually` = في الحقيقة."],
    ["By the way, ... (to return to the main topic)", "Anyway, ...", "`By the way` لموضوع جديد."],
    ["In other word, ...", "In other words, ...", "`words` جمع."]
  ],
  ielts: {
    text: "في **Speaking** هذه العبارات تجعلك تبدو طلقًا (**Fluency and Coherence**). وتصحيح نفسك بسرعة (`sorry, I mean...`) أفضل من التوقف الطويل. `Actually` لتقديم رأي مخالف بلطف: `Actually, I think it depends.`",
    en: "Actually, I'd say it depends on the person. What I mean is that some people learn better alone."
  },
  questions: [
    { t: "mcq", q: "“You're from Jeddah, right?” “___, I'm from Madinah.”", o: ["Actually", "Currently", "By the way", "Anyway"], a: 0, why: "تصحيح بلطف: `Actually`." },
    { t: "mcq", q: "___, did you remember to call the bank? (new topic)", o: ["Anyway", "By the way", "Actually", "In other words"], a: 1, why: "موضوع جديد: `By the way`." },
    { t: "mcq", q: "Sorry for interrupting. ___, as I was saying...", o: ["By the way", "Anyway", "Actually", "Moreover"], a: 1, why: "العودة: `Anyway`." },
    { t: "mcq", q: "I'm ___ studying for IELTS. (at the moment)", o: ["actually", "currently", "anyway", "eventually"], a: 1, why: "حاليًا: `currently`." },
    { t: "mcq", q: "He's not very rich. In ___ words, he can't afford it.", o: ["other", "another", "others", "the other"], a: 0, why: "`In other words`." },
    { t: "fill", q: "What I ___ was that we should wait.", a: ["meant"], why: "`What I meant was`." },
    { t: "fill", q: "By the ___, have you seen my phone?", a: ["way"], why: "`By the way`." },
    { t: "fill", q: "Anyway, going ___ to the main point...", a: ["back"], why: "`going back to`." },
    { t: "fix", q: "Actually, I'm living in Riyadh. (meaning: at the moment)", ask: "استبدل الكلمة الأولى بكلمة تعني «حاليًا».", a: ["Currently, I'm living in Riyadh.", "At the moment, I'm living in Riyadh.", "Currently, I am living in Riyadh.", "At the moment, I am living in Riyadh."],
      why: "`actually` = في الحقيقة. للحاضر: `currently / at the moment`." },
    { t: "fix", q: "In other word, we need a new plan.", a: ["In other words, we need a new plan."], why: "`words`." },
    { t: "rewrite", q: "Correct this politely: “The exam is on Monday.” (It's really on Tuesday.)", ask: "اكتب جملة تبدأ بـ Actually ...", a: ["Actually, it's on Tuesday.", "Actually, the exam is on Tuesday.", "Actually, it is on Tuesday.", "Actually, it's on Tuesday, not Monday."], why: "`Actually, ...`." }
  ]
};
