window.LESSONS = window.LESSONS || {};
window.LESSONS[115] = {
  steps: [
    { k: "الفكرة", h: "جزء في *آخر* الكلمة يغيّر *نوعها*",
      why: [
        "البادئة تغيّر المعنى، أما اللاحقة فتغيّر **نوع** الكلمة: فعل ← اسم، اسم ← صفة، صفة ← ظرف.",
        "لذلك تحتاجها لتضع الكلمة الصحيحة في مكانها: بعد `the` اسم، وقبل الاسم صفة."
      ],
      show: [{ t: "build", lab: "عائلة كلمة واحدة",
        opts: [["فعل", "I want to {v:succeed}.", "succeed", 0], ["اسم", "Hard work leads to {o:success}.", "success", 1], ["صفة", "She is very {k:success|ful}.", "-ful", 2], ["ظرف", "He finished {k:successful|ly}.", "-ly", 3]],
        groups: [{ h: "فعل" }, { h: "اسم" }, { h: "صفة" }, { h: "ظرف" }] },
        { t: "fix", items: [["He is very success.", "He is very {k:successful}.", "بعد very صفة"]] }],
      check: { q: "This is an ___ programme for children.", o: ["educate", "education", "educational"], a: 2, why: "بعد `an` وقبل الاسم `programme` نحتاج صفة: `educational`." } },

    { k: "لواحق الأسماء", h: "-ment · -tion · -ness · -er",
      why: ["هذه اللواحق تصنع أسماء: من فعل (`-ment, -tion, -ance, -er`) أو من صفة (`-ness, -ity`)."],
      show: [{ t: "rules", tryLab: "اضغط على كلمة ↑",
        items: [
          { cond: "فعل →", sym: "-ment", pairs: [["employ", "employ", "ment"], ["develop", "develop", "ment"]] },
          { cond: "فعل →", sym: "-tion", pairs: [["educate", "educa", "tion"], ["decide", "deci", "sion"]] },
          { cond: "صفة →", sym: "-ness / -ity", pairs: [["dark", "dark", "ness"], ["real", "real", "ity"]] },
          { cond: "فعل → شخص", sym: "-er / -or", pairs: [["teach", "teach", "er"], ["act", "act", "or"]] }
        ],
        try: [["perform", "perform", "ance", -1], ["happy", "happi", "ness", 2], ["invest", "invest", "or", 3], ["pollute", "pollu", "tion", 1], ["govern", "govern", "ment", 0]] }],
      check: { q: "The ___ of the city has been rapid.", o: ["develop", "development"], a: 1, why: "بعد `The` ← اسم `development`." } },

    { k: "لواحق الصفات", h: "-ful ≠ -less",
      why: [
        "لواحق الصفات: `-ful, -less, -ous, -al, -ive, -able`.",
        "`-ful` = مليء بـ، و`-less` = بدون. متضادتان: `useful / useless`. و`-ful` بلام واحدة: `careful`، لا `carefull`."
      ],
      show: [{ t: "compare", cols: [
        { h: "-ful = مليء بـ", c: "verb", en: ["use{k:ful}", "care{k:ful}", "hope{k:ful}"] },
        { h: "-less = بدون", c: "neg", en: ["use{k:less}", "care{k:less}", "hope{k:less}"] }
      ] },
        { t: "ex", items: [["a danger{k:ous} road", "-ous"], ["afford{k:able} housing", "-able = يمكن"], ["a creat{k:ive} idea", "-ive"]] },
        { t: "fix", items: [["a danger road", "a {k:dangerous} road", ""], ["I am very carefull.", "I am very {k:careful}.", ""]] }],
      check: { q: "This app is very ___. I use it every day.", o: ["useless", "useful"], a: 1, why: "مفيد ← `useful`." } },

    { k: "الأفعال", h: "-ise · -en · -ify = *فعل*",
      why: ["لواحق تصنع أفعالًا من صفات أو أسماء:"],
      show: [{ t: "ex", items: [["modern → modern{k:ise}", "يحدّث"], ["short → short{k:en}", "يقصّر"], ["simple → simpl{k:ify}", "يبسّط"], ["wide → wid{k:en}", "يوسّع"]] }],
      check: { q: "We need to ___ the process.", o: ["simple", "simplify", "simplicity"], a: 1, why: "بعد `to` نحتاج فعلًا ← `simplify`." } }
  ],
  sum: [
    { h: "أسماء", en: ["-ment · -tion · -ness · -ity · -er"] },
    { h: "صفات", en: ["-ful · -less · -ous · -al · -ive · -able"] },
    { h: "أفعال", en: ["-ise · -en · -ify"] },
    { h: "عائلة", en: ["succeed · success · successful · successfully"] }
  ]
};
