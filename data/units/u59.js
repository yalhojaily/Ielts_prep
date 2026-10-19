window.UNITS = window.UNITS || {};
window.UNITS[59] = {
  id: 59,
  title: "Suggestions and advice",
  ar: "الاقتراح والنصيحة",
  idea: "للاقتراح: `Let's, Why don't we, How about + -ing, We could, Shall we`. وللنصيحة: `should, ought to, had better, If I were you`. أقوى نصيحة `had better` وتعني «من الأفضل وإلا فستكون هناك مشكلة».",
  uses: [
    ["اقتراح", "Why don't we eat out tonight? / How about going to the beach?"],
    ["نصيحة", "You should get more sleep."],
    ["نصيحة قوية مع تحذير", "You'd better leave now or you'll miss the flight."],
    ["نصيحة من موقع الشخص", "If I were you, I'd accept the offer."]
  ],
  formula: [
    ["اقتراح", "{a:Let's} {v:go}. · {q:Why} {a:don't} we {v:go}? · {q:How about} {v:going}?"],
    ["نصيحة", "{s:You} {a:should / ought to} {v:rest}."],
    ["had better", "{s:You}{a:'d better} {v:hurry}. · {s:You}{a:'d better not} {v:be} late."],
    ["suggest / recommend", "I {v:suggest} {v:taking} a taxi. · I {v:recommend} that you {v:see} a doctor."]
  ],
  notes: [
    { title: "How about / What about + -ing",
      body: "بعدهما `-ing` أو اسم، لا فعل أصلي.",
      en: "{q:How about} {v:meeting} at 5? · {q:What about} pizza?" },
    { title: "had better",
      body: "تشير إلى الحاضر والمستقبل رغم `had`، وبعدها فعل أصلي. نفيها `had better not`.",
      en: "We{a:'d better} {v:take} umbrellas. · You{a:'d better not} {v:tell} him." },
    { title: "should أم must؟",
      body: "`should` نصيحة (رأيي)، و`must` إلزام قوي.",
      en: "You {a:should} {v:try} it. · You {a:must} {v:stop} at a red light." }
  ],
  examples: [
    ["{q:Why} {a:don't} {s:you} {v:ask} your manager?", "لماذا لا تسأل مديرك؟"],
    ["{s:You} {a:ought to} {v:diversify} your investments.", "ينبغي أن تنوّع استثماراتك."],
    ["{x:If I were you}, {s:I}{a:'d} {v:wait} a few months.", "لو كنت مكانك لانتظرت بضعة أشهر."],
    ["{s:We}{a:'d better} {v:leave} before the traffic gets bad.", "من الأفضل أن نغادر قبل أن تزدحم الطرق."],
    ["{q:How about} {v:trying} the new café?", "ما رأيك أن نجرب المقهى الجديد؟"]
  ],
  mistakes: [
    ["How about go to the park?", "How about going to the park?", "`How about + -ing`."],
    ["You had better to see a doctor.", "You had better see a doctor.", "لا to بعد `had better`."],
    ["You should to study more.", "You should study more.", "لا to بعد should."],
    ["I suggest you to rest.", "I suggest (that) you rest. / I suggest resting.", "`suggest` لا تأخذ `sb + to`."]
  ],
  ielts: {
    text: "في **Writing Task 2** (أسئلة الحلول) و**General Task 1** (رسالة نصيحة لصديق). نوّع: `should`, `it would be a good idea to`, `it is advisable to`, `I would recommend that...`.",
    en: "To reduce traffic, I would recommend that the government invest in public transport. It would also be a good idea to encourage remote work."
  },
  questions: [
    { t: "mcq", q: "How about ___ a film tonight?", o: ["watch", "to watch", "watching", "watched"], a: 2, why: "`How about + -ing`." },
    { t: "mcq", q: "You look tired. You ___ go to bed.", o: ["should", "had", "would", "ought"], a: 0, why: "`should` + فعل." },
    { t: "mcq", q: "It's late. We ___ go now or we'll miss the bus.", o: ["had better", "had better to", "better had", "would better"], a: 0, why: "`had better`." },
    { t: "mcq", q: "___ don't we have lunch together?", o: ["What", "How", "Why", "Let's"], a: 2, why: "`Why don't we...?`" },
    { t: "mcq", q: "If I ___ you, I'd buy the cheaper one.", o: ["am", "was being", "were", "would be"], a: 2, why: "`If I were you`." },
    { t: "fill", q: "You ought ___ (apologise) to her.", a: ["to apologise", "to apologize"], why: "`ought to`." },
    { t: "fill", q: "You'd better ___ (not / forget) your passport.", a: ["not forget"], why: "`had better not`." },
    { t: "fill", q: "Let's ___ (meet) at the café.", a: ["meet"], why: "`Let's + verb`." },
    { t: "fill", q: "I suggest ___ (book) the tickets early.", a: ["booking"], why: "`suggest + -ing`." },
    { t: "fix", q: "You had better to leave now.", a: ["You had better leave now.", "You'd better leave now."], why: "لا to." },
    { t: "fix", q: "What about to go swimming?", a: ["What about going swimming?"], why: "`What about + -ing`." },
    { t: "fix", q: "I suggest you to take a break.", a: ["I suggest that you take a break.", "I suggest you take a break.", "I suggest taking a break."], why: "`suggest (that) you take`." },
    { t: "rewrite", q: "Let's go to the beach. (Begin with: Why don't we ...)", ask: "أعد الصياغة.", a: ["Why don't we go to the beach?"], why: "`Why don't we + verb`." }
  ]
};
