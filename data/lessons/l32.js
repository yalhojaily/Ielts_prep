window.LESSONS = window.LESSONS || {};
window.LESSONS[32] = {
  steps: [
    { k: "الفكرة", h: "كم أنت *متأكد* أن الشيء سيحدث؟",
      why: [
        "`will` تعني أنك متأكد تقريبًا. لكن في الواقع نادرًا ما نكون متأكدين، لذلك تحتاج كلمات لدرجات أقل.",
        "اضغط على كل درجة لترى الجملة. هذا السلّم مفيد جدًا لوصف التوقعات في Writing Task 1."
      ],
      show: [{ t: "scale", cap: "من المستحيل تقريبًا إلى المؤكد",
        items: [["definitely won't", 0, ""], ["is unlikely to", 22, "مستبعد"], ["may / might / could", 50, "ربما"], ["is likely to", 72, "مرجّح"], ["will probably", 85, ""], ["is bound to", 100, "شبه مؤكد"]],
        lines: ["Prices [] {v:rise}."], start: 3 }],
      check: { q: "She's very clever. She ___ pass.", o: ["might", "is bound to", "is unlikely to"], a: 1, why: "ذكية جدًا ← شبه يقين: `is bound to`." } },

    { k: "may · might · could", h: "ربما: may / might / could + فعل أصلي",
      why: [
        "الثلاثة تعني «ربما» في المستقبل، وبعدها الفعل الأصلي (بدون to وبدون s).",
        "لا تجمع `maybe` مع `will might`: كلمة واحدة تكفي."
      ],
      show: [{ t: "formula", rows: [["احتمال", "{s:It} {a:may / might / could} {v:rain} later."], ["احتمال سلبي", "{s:He} {a:may not / might not} {v:come} today."]] },
        { t: "fix", items: [["Maybe it will might rain.", "It {a:might} {v:rain}.", ""], ["He might comes tomorrow.", "He {a:might} {v:come} tomorrow.", ""]] }],
      check: { q: "She may not ___.", o: ["to agree", "agree", "agrees"], a: 1, why: "بعد `may not` الفعل الأصلي بدون to." } },

    { k: "could not", h: "might not ≠ could not",
      why: [
        "في الإثبات `could` = ربما مثل `might`. لكن في النفي يختلف المعنى تمامًا:",
        "`might not` = ربما لا. `couldn't` = مستحيل، لا يمكن."
      ],
      show: [{ t: "compare", cols: [
        { h: "might not = ربما لا", c: "subj", en: ["He {a:might not} {v:come}."], ar: "ربما لا يأتي" },
        { h: "couldn't = مستحيل", c: "neg", en: ["He {a:couldn't} {v:come}."], ar: "لم يستطع / مستحيل" }
      ] }],
      check: { q: "\"It might not be true\" means:", o: ["It's impossible.", "Maybe it isn't true."], a: 1, why: "`might not` = ربما لا." } },

    { k: "likely", h: "be likely to + فعل",
      why: [
        "`likely` صفة، لذلك تحتاج `be` قبلها: `is likely to` + الفعل الأصلي.",
        "أو `It is likely that` + جملة كاملة فيها فاعل وفعل. ونفيها `unlikely`."
      ],
      show: [{ t: "ex", items: [["Interest rates {a:are likely to} {v:fall} next year.", ""], ["{k:It is likely that} prices {a:will} {v:rise}.", "بعد that جملة كاملة"], ["It{a:'s unlikely to} {v:change}.", "مستبعد"]] },
        { t: "fix", items: [["It is likely that rain.", "It {a:is likely to} {v:rain}.", "أو: It is likely that it will rain."]] }],
      check: { q: "He ___ win the election.", o: ["likely", "is likely to", "is likely"], a: 1, why: "`be likely to` + الفعل الأصلي." } }
  ],
  sum: [
    { h: "ربما", en: ["{a:may / might / could} + {v:verb}"] },
    { h: "مرجّح", en: ["{a:is likely to} + {v:verb}"] },
    { h: "شبه مؤكد", en: ["{a:is bound to} + {v:verb}"] },
    { h: "انتبه", en: ["might not = ربما لا · couldn't = مستحيل"] }
  ]
};
