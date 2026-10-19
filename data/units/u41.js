window.UNITS = window.UNITS || {};
window.UNITS[41] = {
  id: 41,
  title: "Short answers",
  ar: "الإجابات القصيرة",
  idea: "الإجابة بـ `Yes` أو `No` وحدها قد تبدو جافة. الأطبع أن نضيف **الضمير والفعل المساعد** نفسه الذي في السؤال: `Yes, I do.` / `No, she hasn't.` ولا نكرر الفعل الأساسي.",
  uses: [
    ["سؤال بـ do / does / did", "Do you smoke? — No, I don't."],
    ["سؤال بـ be", "Is it far? — Yes, it is."],
    ["سؤال بفعل ناقص أو مساعد", "Can you come? — Yes, I can."]
  ],
  formula: [
    ["do", "{a:Do} you like it? — Yes, {s:I} {a:do}. / No, {s:I} {a:don't}."],
    ["be", "{a:Are} they ready? — Yes, {s:they} {a:are}. / No, {s:they} {a:aren't}."],
    ["have", "{a:Has} she left? — Yes, {s:she} {a:has}. / No, {s:she} {a:hasn't}."]
  ],
  notes: [
    { title: "لا نختصر في الإثبات",
      body: "نقول `Yes, I am` وليس `Yes, I'm`. ونقول `Yes, she is` وليس `Yes, she's`. أما النفي فنختصره: `No, I'm not`.",
      en: "Are you ready? — Yes, I {a:am}. (not: Yes, I'm)" },
    { title: "الضمير بدل الاسم",
      body: "`Is your brother here? — Yes, he is.`",
      en: "Did the meeting finish? — Yes, {s:it} {a:did}." },
    { title: "I think so / I hope not",
      body: "إجابات قصيرة شائعة للتعبير عن الرأي.",
      en: "Will it rain? — I {v:think} so. / I {v:hope} not." }
  ],
  examples: [
    ["Have you been to Abha? — Yes, {s:I} {a:have}.", "هل زرت أبها؟ نعم."],
    ["Does Ahmed work here? — No, {s:he} {a:doesn't}.", "هل يعمل أحمد هنا؟ لا."],
    ["Was it expensive? — No, {s:it} {a:wasn't}.", "هل كان غاليًا؟ لا."],
    ["Will you be there? — Yes, {s:I} {a:will}.", "هل ستكون هناك؟ نعم."]
  ],
  mistakes: [
    ["Do you like it? — Yes, I like.", "Yes, I do.", "نكرر المساعد `do` لا الفعل."],
    ["Are you married? — Yes, I'm.", "Yes, I am.", "لا اختصار في الإثبات القصير."],
    ["Did she call? — No, she didn't call it.", "No, she didn't.", "الإجابة القصيرة تنتهي عند المساعد."],
    ["Can you swim? — Yes, I do.", "Yes, I can.", "نكرر المساعد الموجود في السؤال: `can`."]
  ],
  ielts: {
    text: "في **Speaking** لا تتوقف عند الإجابة القصيرة أبدًا. ابدأ بها ثم وسّع بسبب أو مثال: `Yes, I do. Actually, ...`. الممتحن يقيّم قدرتك على تطوير الإجابة.",
    en: "Do you enjoy cooking? — Yes, I do, especially at weekends when I have more time."
  },
  questions: [
    { t: "mcq", q: "Do you speak French? — No, I ___.", o: ["don't", "not", "doesn't", "am not"], a: 0, why: "`No, I don't`." },
    { t: "mcq", q: "Is the shop open? — Yes, ___.", o: ["it's", "it is", "it does", "is it"], a: 1, why: "لا اختصار في الإثبات: `it is`." },
    { t: "mcq", q: "Have you eaten? — Yes, I ___.", o: ["do", "did", "have", "am"], a: 2, why: "`Have you...?` ← `I have`." },
    { t: "mcq", q: "Can your sister drive? — No, she ___.", o: ["doesn't", "can't", "isn't", "don't"], a: 1, why: "`can't`." },
    { t: "mcq", q: "Will the price go up? — I think ___.", o: ["yes", "so", "it", "that"], a: 1, why: "`I think so`." },
    { t: "fill", q: "Did you see the match? — Yes, I ___.", a: ["did"], why: "`did`." },
    { t: "fill", q: "Were they at home? — No, they ___.", a: ["weren't", "were not"], why: "`weren't`." },
    { t: "fill", q: "Does your father work? — Yes, he ___.", a: ["does"], why: "`does`." },
    { t: "fill", q: "Has the bus arrived? — No, it ___.", a: ["hasn't", "has not"], why: "`hasn't`." },
    { t: "fix", q: "Are you tired? — Yes, I'm.", a: ["Yes, I am."], why: "لا اختصار في الإثبات." },
    { t: "fix", q: "Do you like dates? — Yes, I like.", a: ["Yes, I do."], why: "نكرر `do`." },
    { t: "fix", q: "Is your brother a doctor? — Yes, it is.", a: ["Yes, he is."], why: "الضمير المناسب `he`." },
    { t: "rewrite", q: "Should I call him? (Answer: no)", ask: "اكتب إجابة قصيرة بالنفي.", a: ["No, you shouldn't.", "No, you should not."], why: "`No, you shouldn't`." }
  ]
};
