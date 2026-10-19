window.UNITS = window.UNITS || {};
window.UNITS[40] = {
  id: 40,
  title: "Short questions",
  ar: "الأسئلة القصيرة (ردود الاهتمام)",
  idea: "في المحادثة نرد على ما يقوله الآخر بسؤال قصير لإظهار **الاهتمام أو الاستغراب**: `Oh, did you?` أو `Really? Is it?`. يتكون من الفعل المساعد + الضمير، بنفس زمن الجملة وبنفس الإثبات أو النفي.",
  uses: [
    ["إظهار الاهتمام", "“I went to Japan.” “Did you?”"],
    ["إظهار الاستغراب", "“She's leaving the company.” “Is she? Why?”"],
    ["طلب معلومة إضافية بكلمة واحدة", "“I'm going out.” “Where to?”"]
  ],
  formula: [
    ["مثبت", "“I {v:love} cooking.” “{a:Do} {s:you}?”"],
    ["منفي", "“He {a:isn't} coming.” “{a:Isn't} {s:he}?”"],
    ["wh-", "“I met someone famous.” “{q:Who}?” · “{q:Who with}?”"]
  ],
  notes: [
    { title: "طابق الزمن والفاعل",
      body: "إذا قال `I've finished` تقول `Have you?`، وإذا قال `My sister works there` تقول `Does she?`.",
      en: "“We{a:'ve} {v:moved}.” “{a:Have} you?”" },
    { title: "So do I / Neither do I",
      body: "للموافقة: `So + مساعد + فاعل` بعد المثبت، و`Neither + مساعد + فاعل` بعد المنفي.",
      en: "“I like tea.” “{x:So} {a:do} I.” · “I can't swim.” “{x:Neither} {a:can} I.”" }
  ],
  examples: [
    ["“I've just bought a car.” “{a:Have} {s:you}? What kind?”", "اشتريت سيارة للتو. حقًا؟ أي نوع؟"],
    ["“It's my birthday today.” “{a:Is} {s:it}? Happy birthday!”", "اليوم عيد ميلادي. حقًا؟ كل عام وأنت بخير!"],
    ["“They didn't win.” “{a:Didn't} {s:they}? That's a shame.”", "لم يفوزوا. حقًا؟ يا للأسف."],
    ["“I'm tired.” “{x:So} {a:am} {s:I}.”", "أنا متعب. وأنا كذلك."]
  ],
  mistakes: [
    ["“I went to Paris.” “Went you?”", "“I went to Paris.” “Did you?”", "نستخدم المساعد `did`."],
    ["“I like coffee.” “So I do.”", "“I like coffee.” “So do I.”", "بعد `So` نقلب: المساعد ثم الفاعل."],
    ["“I don't eat fish.” “So don't I.”", "“I don't eat fish.” “Neither do I.”", "بعد المنفي نستخدم `Neither`."]
  ],
  ielts: {
    text: "قلما تحتاجها في الاختبار نفسه، لكن `So do I / Neither do I` تختبر في **Listening** و**Reading** فهم الموافقة والمخالفة بين المتحدثين.",
    en: "“I find it hard to concentrate at home.” “So do I. That's why I work in the library.”"
  },
  questions: [
    { t: "mcq", q: "“I've lost my wallet.” “___? Where?”", o: ["Did you", "Have you", "Are you", "Do you"], a: 1, why: "مضارع تام: `Have you?`" },
    { t: "mcq", q: "“She can speak five languages.” “___?”", o: ["Can she", "Does she", "Is she", "Can't she"], a: 0, why: "`Can she?`" },
    { t: "mcq", q: "“I love this song.” “So ___ I.”", o: ["am", "do", "love", "does"], a: 1, why: "`So do I`." },
    { t: "mcq", q: "“I'm not hungry.” “___ am I.”", o: ["So", "Neither", "Either", "Not"], a: 1, why: "بعد المنفي: `Neither am I`." },
    { t: "fill", q: "“We went to the beach.” “___ you? Was it nice?”", a: ["Did"], why: "ماضٍ: `Did you?`" },
    { t: "fill", q: "“He isn't married.” “___ he? I thought he was.”", a: ["Isn't"], why: "منفي: `Isn't he?`" },
    { t: "fill", q: "“I was born in Madinah.” “So ___ I!”", a: ["was"], why: "`So was I`." },
    { t: "fill", q: "“I haven't finished.” “Neither ___ I.”", a: ["have"], why: "`Neither have I`." },
    { t: "fix", q: "“I like football.” “So I do.”", a: ["So do I."], why: "`So` + مساعد + فاعل." },
    { t: "fix", q: "“My brother lives in Dubai.” “Does he lives?”", a: ["Does he?"], why: "السؤال القصير: المساعد + الضمير فقط." },
    { t: "fix", q: "“I can't drive.” “So can't I.”", a: ["Neither can I.", "Nor can I."], why: "بعد المنفي: `Neither can I`." },
    { t: "rewrite", q: "“They will be here soon.” (Reply with a short question)", ask: "اكتب السؤال القصير.", a: ["Will they?"], why: "`Will they?`" }
  ]
};
