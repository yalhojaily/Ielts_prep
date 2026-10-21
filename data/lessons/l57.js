window.LESSONS = window.LESSONS || {};
window.LESSONS[57] = {
  steps: [
    { k: "الفكرة", h: "can · could · be able to",
      why: [
        "`can` للقدرة الآن، و`could` للقدرة العامة في الماضي.",
        "لكن `can` ليس لها مستقبل ولا تام، ولا تأتي بعد فعل مساعد. لذلك نستخدم `be able to` في كل الأزمنة الأخرى."
      ],
      show: [{ t: "build", lab: "اختر الزمن",
        opts: [["الآن", "I {a:can} {v:drive}.", "", 0], ["الماضي (عام)", "I {a:could} {v:swim} when I was five.", "", 0], ["المستقبل", "I{a:'ll be able to} {v:help} tomorrow.", "`will can` خطأ", 1], ["المضارع التام", "I{a:'ve} never {a:been able to} {v:cook}.", "", 1]],
        groups: [{ h: "can / could" }, { h: "be able to" }] }],
      check: { q: "I ___ drive next year.", o: ["will can", "will be able to"], a: 1, why: "للمستقبل ← `will be able to`." } },

    { k: "موقف محدد", h: "نجحت *مرة واحدة*: was able to",
      why: [
        "`could` في الإثبات تعني قدرة **عامة** في الماضي (كنت أستطيع السباحة صغيرًا).",
        "لكن إذا نجحت في شيء صعب في **موقف واحد محدد**، استخدم `was able to` أو `managed to`، لا `could`. أما في النفي فـ `couldn't` تصلح للحالتين."
      ],
      show: [{ t: "compare", cols: [
        { h: "قدرة عامة ← could", c: "subj", en: ["I {a:could} {v:swim} when I was five."] },
        { h: "موقف واحد ← was able to", c: "accent", en: ["The fire was big, but everyone {a:was able to} {v:escape}.", "He {a:managed to} {v:pass} despite being ill."] }
      ] },
        { t: "note", txt: "في النفي `couldn't` تصلح دائمًا:", en: "I couldn't catch the train." }],
      check: { q: "The test was hard, but I ___ pass it.", o: ["could", "was able to"], a: 1, why: "نجاح في موقف واحد محدد ← `was able to`." } },

    { k: "الحواس", h: "I can hear… = أسمع الآن",
      why: [
        "مع أفعال الحواس والفهم (`see, hear, smell, understand, remember`) نستخدم `can / could` بدل المضارع المستمر.",
        "لا نقول `I'm hearing music` بل `I can hear music`."
      ],
      show: [{ t: "ex", items: [["I {a:can} {v:hear} music.", "أسمع موسيقى (الآن)"], ["I {a:can} {v:smell} smoke.", ""], ["I {a:couldn't} {v:understand} him.", ""]] }],
      check: { q: "Listen! I ___ someone at the door.", o: ["am hearing", "can hear"], a: 1, why: "مع `hear` نستخدم `can`." } },

    { k: "بديل طبيعي", h: "be good at للمهارات",
      why: ["للحديث عن مهاراتك في IELTS Speaking، `be good at` + اسم أو ing أطبع من `can` المتكررة."],
      show: [{ t: "ex", items: [["She's {k:good at} {v:drawing}.", ""], ["I'm not very {k:good at} maths.", ""]] }],
      check: { q: "She is good at ___.", o: ["cook", "cooking", "to cook"], a: 1, why: "`at` حرف جر ← `ing`." } }
  ],
  sum: [
    { h: "الآن / الماضي", en: ["{a:can} · {a:could}"] },
    { h: "باقي الأزمنة", en: ["{a:will be able to} · {a:have been able to}"] },
    { h: "موقف محدد", en: ["{a:was able to} / {a:managed to}"] },
    { h: "الحواس", en: ["I {a:can} {v:hear}…"] }
  ]
};
