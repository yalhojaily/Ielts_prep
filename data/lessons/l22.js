window.LESSONS = window.LESSONS || {};
window.LESSONS[22] = {
  steps: [
    { k: "الفكرة", h: "مستقبل… لكن من *داخل* الماضي",
      why: [
        "تحكي قصة عن الماضي، وفي ذلك الوقت كان هناك شيء في المستقبل. بالنسبة لنا الآن انتهى، لكن بالنسبة لتلك اللحظة كان قادمًا.",
        "الحل: نرجع كل صيغة مستقبل خطوة إلى الماضي: `will` ← `would`، و`am going to` ← `was going to`."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "dot", at: -0.7, c: "subj", label: "I knew…" }, { m: "arrow", from: -0.7, to: -0.25, c: "accent", label: "she would win" }],
        legend: [["subj", "لحظة في الماضي"], ["accent", "ما كان مستقبلًا وقتها ← **would / was going to**"]] }],
      check: { q: "I thought it ___ easy.", o: ["will be", "would be"], a: 1, why: "التفكير في الماضي، فالمستقبل بالنسبة له `would`." } },

    { k: "التحويل", h: "كل صيغة ترجع خطوة",
      why: ["نفس الصيغ التي تعرفها للمستقبل، لكن الجزء الأول يتحول إلى الماضي."],
      show: [{ t: "map", cols: [{ h: "الآن ← في الماضي", c: "accent", k: "a", rows: [["will", "would"], ["am / is going to", "was going to"], ["are going to", "were going to"], ["am meeting (ترتيب)", "was meeting"]] }] },
        { t: "trans", items: [{ from: "\"I {a:will} {v:help}.\"", to: "He said he {a:would} {v:help}.", chg: ["الكلام المنقول (الدرس 44)"] }] }],
      check: { q: "She said she ___ call.", o: ["will", "would"], a: 1, why: "في الكلام المنقول عن الماضي `will` تصبح `would`." } },

    { k: "خطة لم تحدث", h: "was going to … but",
      why: [
        "أكثر استخدام شيوعًا: خطة كانت موجودة في الماضي **لكنها لم تتحقق**. تأتي غالبًا مع `but` وتشرح السبب.",
        "مفيدة جدًا للاعتذار: كنت سأتصل بك، لكنني نسيت."
      ],
      show: [{ t: "ex", items: [["I {a:was going to} {v:call} you, {k:but} I forgot.", "كنت سأتصل… لكن نسيت."], ["We {a:were going to} {v:eat} out, {k:but} we were too tired.", ""], ["I {a:was going to} {v:buy} the shares, {k:but} the price went up.", ""]] }],
      check: { q: "I ___ you yesterday, but I forgot.", o: ["am going to call", "was going to call"], a: 1, why: "خطة في الماضي لم تحدث ← `was going to`." } },

    { k: "was about to", h: "كان على *وشك*",
      why: [
        "`was about to` + الفعل = كان على وشك أن يفعل، وغالبًا يقطعه حدث آخر.",
        "تستعمل كثيرًا في القصص لخلق لحظة مفاجئة."
      ],
      show: [{ t: "big", items: ["I {a:was about to} {v:leave} when the phone {v:rang}."], cap: "كنت على وشك المغادرة عندما رنّ الهاتف." }],
      check: { q: "\"She was about to leave\" means:", o: ["She left.", "She was very close to leaving."], a: 1, why: "`was about to` = كانت على وشك." } }
  ],
  sum: [
    { h: "will ← would", en: ["I knew she {a:would} {v:win}."] },
    { h: "going to ← was going to", en: ["I {a:was going to} {v:call}, but…"] },
    { h: "خطة لم تحدث", txt: "was going to + but" },
    { h: "على وشك", en: ["I {a:was about to} {v:leave} when…"] }
  ]
};
