window.LESSONS = window.LESSONS || {};
window.LESSONS[103] = {
  steps: [
    { k: "الفكرة", h: "so + *صفة* · such + *اسم*",
      why: [
        "كلاهما يعني «جدًا / إلى هذا الحد» للتوكيد. الفرق فيما يأتي بعدهما:",
        "`so` + صفة وحدها (`so beautiful`). `such` + اسم، مع صفة أو بدونها (`such a beautiful city`)."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["so + صفة", "The film was {k:so} boring.", "", 0], ["such a + صفة + اسم", "It was {k:such a} boring film.", "مفرد ← such a", 1], ["such + جمع", "They are {k:such} nice people.", "جمع ← بلا a", 1], ["such + غير معدود", "It was {k:such} good news.", "غير معدود ← بلا a", 1]],
        groups: [{ h: "so + صفة" }, { h: "such + (a) + صفة + اسم" }] },
        { t: "fix", items: [["It was so a good film.", "It was {k:such a} good film.", ""], ["She is such kind.", "She is {k:so} kind.", ""]] }],
      check: { q: "It's ___ beautiful city.", o: ["so a", "such a", "a such"], a: 1, why: "اسم مفرد بعد الصفة ← `such a`." } },

    { k: "الترتيب", h: "such a nice day · *لا* a such",
      why: [
        "`such` تأتي **قبل** `a`: `such a nice man`.",
        "ومع الجمع وغير المعدود لا `a` أصلًا: `such useful advice` (advice غير معدود)."
      ],
      show: [{ t: "fix", items: [["a such nice man", "{k:such a} nice man", ""], ["such an useful advice", "{k:such} useful advice", "advice غير معدود"]] }],
      check: { q: "He gave me ___ advice.", o: ["such a good", "such good"], a: 1, why: "`advice` غير معدود ← بلا a." } },

    { k: "النتيجة", h: "so … that · such … that",
      why: [
        "مع `that` يعبّران عن **النتيجة**: كان متعبًا جدًا **لدرجة أنه** نام.",
        "و`so much / so many / so few` مع الأسماء والكميات."
      ],
      show: [{ t: "ex", items: [["I was {k:so} tired {k:that} I went to bed at 8.", ""], ["It was {k:such} a hot day {k:that} we stayed in.", ""], ["There were {k:so many} people {k:that} we couldn't move.", "so many + جمع"]] }],
      check: { q: "There were ___ cars that we were stuck for hours.", o: ["such many", "so many"], a: 1, why: "كمية مع جمع ← `so many`." } }
  ],
  sum: [
    { h: "so", en: ["{k:so} beautiful · {k:so} quickly"] },
    { h: "such", en: ["{k:such a} nice day · {k:such} nice people"] },
    { h: "النتيجة", en: ["so tired {k:that}… · such a day {k:that}…"] },
    { h: "كميات", en: ["so much · so many · so few"] }
  ]
};

// طبّق على نفسك
window.LESSONS[103].apply = [
  {"p": "صف تجربة بـ `so` + صفة، و`such` + اسم.", "use": "{k:so} tired · {k:such a} long day", "m": ["The film was so boring. It was such a long day that I fell asleep at eight."], "c": [["`so` + صفة", "\\bso\\s+(\\w+)\\b"], ["`such` (`a`) + صفة + اسم", "\\bsuch\\s+(a|an)?\\s*\\w+\\s+\\w+"], ["لم تكتب `so a` أو `such boring`", "!\\bso (a|an)\\s|\\bsuch (boring|tired|hot|cold|good|bad|happy|beautiful|expensive)\\b(?!\\s+\\w+)"]]},
  {"p": "اكتب جملة نتيجة بـ `so … that` أو `such … that`.", "use": "{k:so} hot {k:that} … · {k:such} a … {k:that} …", "m": ["The traffic was so bad that I missed my flight."], "c": [["`so / such … that`", "\\b(so|such)\\b[^.]*\\bthat\\b"]]}
];
