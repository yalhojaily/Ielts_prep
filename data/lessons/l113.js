window.LESSONS = window.LESSONS || {};
window.LESSONS[113] = {
  steps: [
    { k: "المفتاح", h: "ما الذي يأتي *بعد* الأداة؟",
      why: [
        "أدوات الربط بنفس المعنى قد تختلف في **ما يأتي بعدها**. هذا هو مفتاح القسم كله:",
        "بعضها + جملة (داخل الجملة). بعضها يبدأ جملة جديدة + فاصلة. وبعضها + اسم أو ing فقط."
      ],
      show: [{ t: "table", head: ["المعنى", "+ جملة (داخل)", "جملة جديدة + ,", "+ اسم / ing"], rows: [
        ["تناقض", "but · although · whereas", "However, · Nevertheless,", "despite · in spite of"],
        ["سبب", "because · as · since", "—", "because of · due to"],
        ["نتيجة", "so", "Therefore, · As a result,", "—"],
        ["إضافة", "and", "In addition, · Moreover,", "as well as · in addition to"]] }],
      check: { q: "___ the heat, the match was postponed.", o: ["Because", "Due to", "Therefore"], a: 1, why: "بعدها اسم (`the heat`) ← `Due to`." } },

    { k: "جرّب", h: "نفس المعنى، أدوات مختلفة",
      why: ["اضغط على كل أداة: المعنى واحد (تناقض)، لكن بناء الجملة يتغير مع كل واحدة."],
      show: [{ t: "build", lab: "اختر الأداة",
        opts: [["but", "It was expensive{k:, but} I bought it.", "+ جملة", 0], ["although", "{k:Although} it was expensive, I bought it.", "+ جملة", 0], ["However", "It was expensive. {k:However,} I bought it.", "جملة جديدة", 1], ["despite", "{k:Despite} the high price, I bought it.", "+ اسم", 2], ["despite + ing", "{k:Despite} {v:being} expensive, it sold well.", "+ ing", 2]],
        groups: [{ h: "+ جملة" }, { h: "جملة جديدة" }, { h: "+ اسم / ing" }] }],
      check: { q: "___ studying hard, he failed.", o: ["Although", "Despite"], a: 1, why: "بعدها `ing` ← `Despite`." } },

    { k: "أداة واحدة", h: "القاعدة الذهبية: أداة *واحدة* لكل علاقة",
      why: [
        "في العربية نقول «رغم أنه… إلا أنه» و«لأنه… فـ». في الإنجليزية أداة واحدة تكفي.",
        "وانتبه لحروف الجر الثابتة: `in addition to` (لا of)، و`despite` (بلا of)."
      ],
      show: [{ t: "fix", items: [
        ["Because of it was late, we left.", "{k:Because} it was late, we left.", "because of + اسم فقط"],
        ["Due to the traffic was bad, …", "{k:Due to} the bad traffic, …", ""],
        ["In addition of this, …", "{k:In addition to} this, …", ""],
        ["Despite of the cost", "{k:Despite} the cost", ""]
      ] }],
      check: { q: "___ to this, the plan saves money.", o: ["In addition", "Moreover"], a: 0, why: "`In addition to` + اسم." } },

    { k: "خطة الفقرة", h: "فقرة كاملة بأدوات الربط",
      why: ["في Writing Task 2، الفقرة الجيدة تتبع هذا التسلسل، وكل خطوة لها أداة تناسبها:"],
      show: [{ t: "chain", items: [{ h: "الفكرة الرئيسية", ar: "One advantage is…" }, { h: "مثال", en: "For example, …" }, { h: "النتيجة", en: "As a result, …" }, { h: "رأي مخالف", en: "However, …" }] }],
      check: { q: "Which word introduces a result?", o: ["For instance", "Consequently", "Although"], a: 1, why: "`Consequently` = نتيجة لذلك." } }
  ],
  sum: [
    { h: "+ جملة", en: ["but · because · although · so"] },
    { h: "جملة جديدة", en: ["However, · Therefore, · In addition,"] },
    { h: "+ اسم", en: ["despite · because of · due to · such as"] },
    { h: "ذهبية", txt: "أداة واحدة لكل علاقة" }
  ]
};

// تعمّق
window.LESSONS[113].steps.push(
  { k: "في سياق", h: "اقرأ: صحّح أدوات الربط بنفسك",
    why: ["هذه فقرة كتبها طالب، وفيها أخطاء أدوات الربط الشائعة عند العرب. فيها خمسة أخطاء: حاول أن تجدها ثم اعرض التصحيح."],
    show: [{ t: "passage", h: "فقرة فيها أخطاء",
      btn: "اعرض التصحيح", btn2: "أخفِ التصحيح",
      en: "Although the city is expensive, but many people move there. Because of the jobs are better, so young people prefer it. Despite of the traffic, life is comfortable. In addition of this, there are many parks.",
      fixes: [
        ["Although the city is expensive, but many people move there.", "Although the city is expensive, many people move there.", "لا `but` مع `although`"],
        ["Because of the jobs are better, so young people prefer it.", "{k:Because} the jobs are better, young people prefer it.", "بعدها جملة ← `because` لا `because of`، ولا `so` معها (خطآن)"],
        ["Despite of the traffic", "{k:Despite} the traffic", "لا `of` بعد `despite`"],
        ["In addition of this", "In addition {k:to} this", "`in addition to`"]
      ],
      note: "القاعدة الذهبية: أداة واحدة لكل علاقة، وانتبه لما يأتي بعدها." }],
    check: { q: "___ the jobs are better, young people prefer the city.", o: ["Because of", "Because"], a: 1, why: "بعدها جملة كاملة ← `Because`." } }
);

// طبّق على نفسك
window.LESSONS[113].apply = [
  {"p": "اكتب رأيك في موضوع `IELTS` (العمل عن بعد) بأربع جمل وأدوات ربط متنوعة.", "use": "{k:Although} … · {k:because} … · {k:However}, … · {k:Therefore}, …", "m": ["Working from home has many benefits because it saves time. However, some people feel lonely. Although companies save money, they may lose team spirit. Therefore, a mix of both is the best option."], "c": [["أداة ربط داخل الجملة (`because / although`)", "\\b(because|although|while|whereas|even though)\\b"], ["أداة ربط بين الجمل (`However / Therefore`)", "\\b(however|therefore|moreover|in addition|as a result),"], ["لم تستخدم `but` في بداية جملة بعد نقطة", "!\\.\\s*but\\b"]]},
  {"p": "اربط جملتين بـ `so that` (غرض).", "use": "…, {k:so that} {s:I} {a:can} …", "m": ["I wake up early so that I can study before work."], "c": [["`so that + can / could`", "\\bso that\\b[^.]*\\b(can|could|will|would)\\b"]]}
];
