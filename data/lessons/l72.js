window.LESSONS = window.LESSONS || {};
window.LESSONS[72] = {
  steps: [
    { k: "الفكرة", h: "شيء تلمسه أم *فكرة*؟",
      why: [
        "الاسم **المحسوس** تراه أو تلمسه: `table, water, child`.",
        "الاسم **المجرد** فكرة أو شعور أو صفة: `freedom, happiness, education`. والمجرد غالبًا **غير معدود**، والعام منه بلا `the`."
      ],
      show: [{ t: "compare", cols: [
        { h: "محسوس", c: "subj", en: ["car · building · tree · money"] },
        { h: "مجرد", c: "accent", en: ["love · honesty · success · knowledge"] }
      ] },
        { t: "fix", items: [["The happiness is important.", "Happiness is important.", "مجرد عام ← بلا the"], ["He has many knowledges.", "He has a lot of knowledge.", "غير معدود"]] }],
      check: { q: "___ is the best policy.", o: ["The honesty", "Honesty"], a: 1, why: "مجرد عام ← بلا `the`." } },

    { k: "اللواحق", h: "كيف نصنع اسمًا مجردًا؟",
      why: [
        "معظم الأسماء المجردة مشتقة من صفة أو فعل بإضافة لاحقة. معرفة اللواحق تضاعف مفرداتك.",
        "اضغط على كل لاحقة لترى أمثلتها."
      ],
      show: [{ t: "rules", tryLab: "اضغط على كلمة ↑",
        items: [
          { cond: "صفة +", sym: "-ness", pairs: [["happy", "happi", "ness"], ["kind", "kind", "ness"]] },
          { cond: "فعل +", sym: "-ment", pairs: [["develop", "develop", "ment"], ["improve", "improve", "ment"]] },
          { cond: "فعل +", sym: "-tion", pairs: [["educate", "educa", "tion"], ["decide", "deci", "sion"]] },
          { cond: "صفة +", sym: "-ity / -dom", pairs: [["able", "abil", "ity"], ["free", "free", "dom"]] }
        ],
        try: [["aware", "aware", "ness", 0], ["govern", "govern", "ment", 1], ["pollute", "pollu", "tion", 2], ["secure", "secur", "ity", 3], ["friend", "friend", "ship", -1]] }],
      check: { q: "I made a quick ___.", o: ["decide", "decision"], a: 1, why: "الاسم من `decide` هو `decision`." } },

    { k: "الأسلوب الأكاديمي", h: "حوّل الفعل إلى اسم: *أكثر رسمية*",
      why: [
        "تحويل الأفعال والصفات إلى أسماء مجردة (nominalisation) يجعل الكتابة أكاديمية وموضوعية. ممتاز لـ Writing Task 1 و2.",
        "بدل `Prices increased quickly` اكتب `There was a rapid increase in prices`."
      ],
      show: [{ t: "trans", items: [
        { from: "Prices {v:increased} quickly.", to: "There was a rapid {v:increase} in prices.", chg: ["فعل ← اسم", "ظرف ← صفة"] },
        { from: "The city {v:developed} fast.", to: "The {v:development} of the city was fast." }
      ] }],
      check: { q: "Academic version of \"Air quality improved a lot\":", o: ["Air quality improved a lot.", "There has been a significant improvement in air quality."], a: 1, why: "الاسم المجرد `improvement` أكثر أكاديمية." } },

    { k: "معدود أحيانًا", h: "an experience ≠ experience",
      why: ["بعض المجردات تصبح **معدودة** بمعنى محدد: `experience` = خبرة (غير معدود)، `an experience` = تجربة واحدة (معدود)."],
      show: [{ t: "compare", cols: [{ h: "غير معدود", c: "accent", en: ["He has a lot of {v:experience}.", "خبرة"] }, { h: "معدود", c: "subj", en: ["It was {k:a} great {v:experience}.", "تجربة"] }] }],
      check: { q: "Visiting Japan was ___ amazing experience.", o: ["(nothing)", "an"], a: 1, why: "تجربة واحدة ← معدود ← `an`." } }
  ],
  sum: [
    { h: "مجرد", en: ["freedom · happiness · education"] },
    { h: "عام بلا the", en: ["Happiness is important."] },
    { h: "اللواحق", en: ["-ness · -ment · -tion · -ity · -dom"] },
    { h: "أكاديمي", en: ["a rapid {v:increase} in prices"] }
  ]
};
