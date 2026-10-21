window.LESSONS = window.LESSONS || {};
window.LESSONS[25] = {
  steps: [
    { k: "الفكرة", h: "نفس القاعدة، و*be* في الماضي",
      why: [
        "تعلمت أن المجهول = `be` + التصريف الثالث، وأن الزمن كله في `be`.",
        "لذلك للماضي نضع `be` في الماضي فقط: `was / were` (بسيط)، `was / were being` (مستمر)، `had been` (تام). والتصريف الثالث لا يتغير."
      ],
      show: [{ t: "build", lab: "اختر الزمن",
        opts: [["ماضٍ بسيط", "{s:The room} {a:was} {v:painted}.", "", 0], ["ماضٍ مستمر", "{s:The room} {a:was being} {v:painted} when I arrived.", "كان العمل جاريًا", 1], ["ماضٍ تام", "{s:The room} {a:had been} {v:painted} before we moved in.", "انتهى قبل حدث ماضٍ", 2]],
        groups: [{ h: "was / were", res: "{v:painted}" }, { h: "was / were being", res: "{v:painted}" }, { h: "had been", res: "{v:painted}" }] }],
      check: { q: "The road ___ when we passed.", o: ["was repairing", "was being repaired", "repaired"], a: 1, why: "العمل كان جاريًا والطريق وقع عليه الفعل: `was being repaired`." } },

    { k: "was أم were", h: "be يتبع الفاعل *الجديد*",
      why: [
        "في المجهول، الفاعل الجديد هو الشيء الذي وقع عليه الفعل. `be` يتوافق معه هو.",
        "مفرد ← `was`. جمع ← `were`."
      ],
      show: [{ t: "compare", cols: [
        { h: "مفرد ← was", c: "subj", en: ["{s:The letter} {a:was} {v:sent} yesterday."] },
        { h: "جمع ← were", c: "accent", en: ["{s:The letters} {a:were} {v:sent} yesterday.", "{s:Two people} {a:were} {v:injured}."] }
      ] }],
      check: { q: "The tickets ___ sold out in an hour.", o: ["was", "were"], a: 1, why: "`The tickets` جمع، فنستخدم `were`." } },

    { k: "was born", h: "وُلدت = I *was* born",
      why: [
        "`born` في الإنجليزية دائمًا مجهول، لأن الإنسان لا يلد نفسه: هناك من ولده.",
        "لذلك نقول `I was born` ولا نقول `I born`."
      ],
      show: [{ t: "fix", items: [["I born in 1995.", "I {a:was} {v:born} in 1995.", ""], ["Where you were born?", "Where {a:were} you {v:born}?", ""]] }],
      check: { q: "My father ___ in Madinah.", o: ["born", "was born", "is born"], a: 1, why: "الولادة دائمًا مجهول: `was born`." } },

    { k: "التاريخ", h: "المباني والاختراعات والاكتشافات",
      why: [
        "عند الكلام عن التاريخ يهمنا الشيء نفسه (الهرم، الهاتف)، لذلك نبدأ به ونستخدم المجهول.",
        "إذا كان المخترع معروفًا ومهمًا نذكره بعد `by`."
      ],
      show: [{ t: "ex", items: [["The pyramids {a:were} {v:built} thousands of years ago.", ""], ["The telephone {a:was} {v:invented} {k:by} Bell.", ""], ["Penicillin {a:was} {v:discovered} in 1928.", ""]] }],
      check: { q: "The house ___ in 1980.", o: ["built", "was built", "was building"], a: 1, why: "البيت لا يبني نفسه ← مجهول ماضٍ: `was built`." } }
  ],
  sum: [
    { h: "ماضٍ بسيط", en: ["{a:was / were} + {v:done}"] },
    { h: "مستمر وتام", en: ["{a:was being} {v:done} · {a:had been} {v:done}"] },
    { h: "was born", en: ["I {a:was} {v:born} in 1990."] },
    { h: "by", en: ["invented {k:by} Bell"] }
  ]
};
