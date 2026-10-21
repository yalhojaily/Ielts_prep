window.LESSONS = window.LESSONS || {};
window.LESSONS[18] = {
  steps: [
    { k: "الفكرة", h: "will = قرار *الآن* أو رأيك في المستقبل",
      why: [
        "`going to` تعتمد على شيء موجود قبل الكلام (خطة أو دليل). أما `will` فتولد **لحظة الكلام**: قرار تأخذه الآن، أو رأي، أو وعد.",
        "مثال: الجو حار. «سأفتح النافذة». لم تخطط لذلك، قررته الآن."
      ],
      show: [{ t: "cards", items: [
        { i: "zap", h: "قرار لحظي", en: "It's hot. I'll open the window." },
        { i: "bulb", h: "رأي أو توقع", en: "I think prices will rise." },
        { i: "hand", h: "وعد أو عرض", en: "I'll help you with your bags." },
        { i: "calendar", h: "حقيقة مستقبلية", en: "The sun will set at 6:15." }
      ] }],
      check: { q: "The phone is ringing. — I ___ it.", o: ["'m going to get", "'ll get"], a: 1, why: "قرار لحظي اتخذته الآن ← `will`." } },

    { k: "البناء", h: "will + الفعل الأصلي، مع *كل* الضمائر",
      why: [
        "`will` لا تتغير أبدًا: لا s ولا ed. وبعدها الفعل الأصلي مباشرة بدون `to`.",
        "النفي `will not` = `won't`، والسؤال بتقديم `Will`."
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:I / she / they} {a:will} {v:help}. → I{a:'ll} {v:help}."], ["نفي", "{s:She} {a:won't} {v:come}."], ["سؤال", "{a:Will} {s:you} {v:be} there?"]] },
        { t: "fix", items: [["I will to call you.", "I {a:will} {v:call} you.", "لا `to` بعد will."], ["She wills come.", "She {a:will} {v:come}.", "will لا تأخذ s."]] }],
      check: { q: "I promise I ___ anyone.", o: ["won't tell", "don't will tell", "will not to tell"], a: 0, why: "النفي `won't` + الفعل الأصلي." } },

    { k: "will أم going to", h: "متى قررت؟",
      why: [
        "السؤال الحاسم: هل القرار **قبل** الكلام أم **أثناءه**؟",
        "قبل الكلام (خطة) ← `going to`. أثناء الكلام (فكرة الآن) ← `will`. ونفس الشيء في التوقع: بدليل ← `going to`، برأيك ← `will`."
      ],
      show: [{ t: "compare", cols: [
        { h: "going to: مخطط مسبقًا", c: "subj", en: ["I{a:'m going to} {v:buy} a car. (planned)", "Look! It{a:'s going to} {v:rain}. (evidence)"] },
        { h: "will: الآن / رأيي", c: "accent", en: ["Oh, the phone! I{a:'ll} {v:get} it. (now)", "I think it{a:'ll} {v:rain} tomorrow. (opinion)"] }
      ] }],
      check: { q: "We've booked the tickets. We ___ visit Egypt in May.", o: ["will", "are going to"], a: 1, why: "الحجز تمّ، أي خطة مقررة ← `going to`." } },

    { k: "تعبيرات", h: "I think · probably · I'm sure",
      why: [
        "`will` تأتي كثيرًا بعد كلمات الرأي: `I think, I'm sure, I expect, I hope, perhaps`.",
        "انتبه لمكان `probably`: بعد `will` لكن **قبل** `won't`."
      ],
      show: [{ t: "ex", items: [["I'm sure you{a:'ll} {v:pass} the exam.", ""], ["It {a:will} {k:probably} {v:rain}.", "probably بعد will"], ["He {k:probably} {a:won't} {v:come}.", "probably قبل won't"]] },
        { t: "note", kind: "tip", lab: "Shall I / Shall we", txt: "للعرض والاقتراح في السؤال نستخدم `Shall` مع `I` و`we`.", en: "Shall I open the door? · Shall we go?" }],
      check: { q: "Choose the correct order.", o: ["He won't probably agree.", "He probably won't agree."], a: 1, why: "`probably` تأتي **قبل** `won't`." } },

    { k: "بعد when / if", h: "لا will بعد when و if",
      why: [
        "بعد كلمات الوقت والشرط (`when, if, before, after, as soon as`) نستخدم **المضارع** للحديث عن المستقبل، لا `will`.",
        "السبب: الجملة الرئيسية فيها `will` أصلًا وتوضح أن الكلام عن المستقبل، فلا حاجة لتكراره."
      ],
      show: [{ t: "fix", items: [["I'll tell you when I will know.", "I'll tell you {k:when} I {v:know}.", ""], ["I'll call you when I will arrive.", "I'll call you {k:when} I {v:arrive}.", ""]] }],
      check: { q: "I'll call you as soon as I ___.", o: ["will arrive", "arrive"], a: 1, why: "بعد `as soon as` المضارع البسيط للمستقبل." } }
  ],
  sum: [
    { h: "البناء", en: ["{s:anyone} {a:will} / {a:won't} + {v:verb}"] },
    { h: "متى؟", txt: "قرار الآن · رأي · وعد · حقيقة مستقبلية" },
    { h: "مقابل going to", en: ["planned → going to", "decided now → will"] },
    { h: "بعد when / if", en: ["I'll call you when I {v:arrive}."] }
  ]
};
