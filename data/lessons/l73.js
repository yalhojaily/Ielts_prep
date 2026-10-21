window.LESSONS = window.LESSONS || {};
window.LESSONS[73] = {
  steps: [
    { k: "الفكرة", h: "الكلمة *الأخيرة* هي الأساس",
      why: [
        "الاسم المركب كلمتان تعملان كاسم واحد. في الإنجليزية **الكلمة الأخيرة** هي الأساس، والأولى تصفها.",
        "في العربية الترتيب **معكوس**: «موقف الحافلات» (الأساس أولًا) = `bus stop` (الأساس أخيرًا)."
      ],
      show: [{ t: "map", cols: [{ h: "العربية ← الإنجليزية", c: "accent", k: "v", rows: [["موقف الحافلات", "bus stop"], ["بطاقة الائتمان", "credit card"], ["حمام السباحة", "swimming pool"], ["غرفة الانتظار", "waiting room"]] }] },
        { t: "fix", items: [["stop bus", "{x:bus} {v:stop}", ""]] }],
      check: { q: "\"موقف السيارات\" =", o: ["park car", "car park"], a: 1, why: "الأساس (`park`) يأتي أخيرًا." } },

    { k: "الترتيب يغيّر", h: "race horse ≠ horse race",
      why: ["لأن الأخيرة هي الأساس، تبديل الكلمتين يغيّر الشيء نفسه تمامًا. اضغط على كل واحد."],
      show: [{ t: "build", lab: "اختر",
        opts: [["race horse", "a {x:race} {v:horse}", "حصان (للسباق)", 0], ["horse race", "a {x:horse} {v:race}", "سباق (للخيول)", 1], ["shoe shop", "a {x:shoe} {v:shop}", "متجر (للأحذية)", 0], ["shop window", "a {x:shop} {v:window}", "نافذة (المتجر)", 1]],
        groups: [{ h: "الأساس: horse / shop" }, { h: "الأساس: race / window" }] }],
      check: { q: "A \"coffee cup\" is a kind of…", o: ["coffee", "cup"], a: 1, why: "الأخيرة هي الأساس: `cup`." } },

    { k: "الأولى مفردة", h: "a shoe shop · a five-star hotel",
      why: [
        "الكلمة الأولى تعمل كصفة، والصفات في الإنجليزية لا تُجمع. لذلك تبقى **مفردة** حتى لو كان المعنى جمعًا.",
        "ومع الأرقام نضع شرطة: `a ten-minute walk` (لا minutes)، `a five-star hotel` (لا stars)."
      ],
      show: [{ t: "fix", items: [["a shoes shop", "a {x:shoe} shop", ""], ["a five-stars hotel", "a {x:five-star} hotel", ""], ["a ten-minutes walk", "a {x:ten-minute} walk", ""]] }],
      check: { q: "It's a ___ course.", o: ["three-years", "three-year"], a: 1, why: "الكلمة الأولى صفة ← مفردة." } },

    { k: "الجمع", h: "الجمع في الكلمة *الأخيرة*",
      why: [
        "عند جمع الاسم المركب، نجمع الأساس (الأخيرة): `bus stops`, `credit cards`.",
        "الاستثناء: `mothers-in-law` و`passers-by`، فالأساس فيها هو الأول."
      ],
      show: [{ t: "ex", items: [["two credit {v:cards}", "لا credits card"], ["bus {v:stops}", ""], ["{v:mothers}-in-law", "استثناء"]] }],
      check: { q: "I have two ___.", o: ["credits card", "credit cards"], a: 1, why: "الجمع في الأخيرة: `credit cards`." } }
  ],
  sum: [
    { h: "الأساس", txt: "الكلمة الأخيرة", en: ["bus {v:stop}"] },
    { h: "الترتيب", en: ["race horse ≠ horse race"] },
    { h: "الأولى مفردة", en: ["a shoe shop · a ten-minute walk"] },
    { h: "الجمع", en: ["credit {v:cards}"] }
  ]
};
