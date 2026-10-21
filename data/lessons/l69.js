window.LESSONS = window.LESSONS || {};
window.LESSONS[69] = {
  steps: [
    { k: "القاعدة", h: "الجمع = + s، مع تعديلات *للنطق*",
      why: [
        "أغلب الأسماء نجمعها بإضافة `s`. والتعديلات هي نفسها التي تعلمتها في الدرس الأول مع الأفعال، لأنها تحافظ على النطق:",
        "`es` بعد `s, sh, ch, x, o`. وساكن + `y` ← `ies`. وكلمات تنتهي بـ `f / fe` تصبح `ves`."
      ],
      show: [{ t: "rules", tryLab: "اضغط على كلمة ↑",
        items: [
          { cond: "معظم الأسماء", sym: "+ s", pairs: [["book", "book", "s"], ["day", "day", "s"]] },
          { cond: "بعد `s · sh · ch · x · o`", sym: "+ es", pairs: [["box", "box", "es"], ["potato", "potato", "es"]] },
          { cond: "ساكن + y", sym: "y → ies", pairs: [["city", "cit", "ies"], ["baby", "bab", "ies"]] },
          { cond: "f / fe", sym: "→ ves", pairs: [["knife", "kni", "ves"], ["wife", "wi", "ves"]] }
        ],
        try: [["car", "car", "s", 0], ["watch", "watch", "es", 1], ["country", "countr", "ies", 2], ["key", "key", "s", 0], ["leaf", "lea", "ves", 3], ["bus", "bus", "es", 1]] }],
      check: { q: "I visited three ___ last year.", o: ["citys", "cities", "cityes"], a: 1, why: "ساكن + y ← `ies`." } },

    { k: "الشاذ", h: "جموع تُحفظ",
      why: [
        "بعض أكثر الكلمات استعمالًا لها جموع قديمة شاذة.",
        "وانتبه: `people` جمع `person`، وفعلها جمع: `people are`. أما `peoples` فتعني «شعوب»."
      ],
      show: [{ t: "map", cols: [
        { h: "شاذ", c: "accent", k: "v", rows: [["man", "men"], ["woman", "women"], ["child", "children"], ["person", "people"], ["foot", "feet"], ["tooth", "teeth"]] },
        { h: "بلا تغيير", c: "subj", k: "v", rows: [["sheep", "sheep"], ["fish", "fish"], ["series", "series"], ["species", "species"]] }
      ] },
        { t: "fix", items: [["Many peoples came.", "Many {v:people} came.", ""], ["Two childs.", "Two {v:children}.", ""]] }],
      check: { q: "Many ___ are waiting outside.", o: ["person", "peoples", "people"], a: 2, why: "جمع `person` هو `people`." } },

    { k: "جمع دائمًا", h: "jeans و glasses: *جمع* دائمًا",
      why: [
        "أشياء مكونة من جزأين متماثلين (`jeans, trousers, glasses, scissors`) تُعامل كجمع دائمًا، حتى لو كانت قطعة واحدة.",
        "وعلى العكس: `news` تنتهي بـ s لكنها **مفرد**: `The news is good.`"
      ],
      show: [{ t: "compare", cols: [
        { h: "جمع دائمًا", c: "subj", en: ["My glasses {a:are} on the table.", "My trousers {a:are} new."] },
        { h: "مفرد رغم s", c: "accent", en: ["The news {a:is} surprising.", "Maths {a:is} difficult."] }
      ] }],
      check: { q: "The news ___ bad today.", o: ["are", "is"], a: 1, why: "`news` مفرد غير معدود ← `is`." } },

    { k: "أكاديمي", h: "جموع لاتينية في الكتابة",
      why: ["في Writing Task 2 تحتاج كلمات أكاديمية جمعها لاتيني. استخدامها صحيحًا يرفع درجتك:"],
      show: [{ t: "map", cols: [{ h: "مفرد ← جمع", c: "accent", k: "v", rows: [["phenomenon", "phenomena"], ["criterion", "criteria"], ["analysis", "analyses"], ["crisis", "crises"]] }] }],
      check: { q: "These ___ are common in big cities.", o: ["phenomenon", "phenomena"], a: 1, why: "الجمع `phenomena`." } }
  ],
  sum: [
    { h: "القاعدة", en: ["books · boxes · cities · knives"] },
    { h: "شاذ", en: ["men · children · people · feet"] },
    { h: "جمع دائمًا", en: ["glasses {a:are} · jeans {a:are}"] },
    { h: "مفرد", en: ["The news {a:is}…"] }
  ]
};
