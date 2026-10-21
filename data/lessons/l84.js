window.LESSONS = window.LESSONS || {};
window.LESSONS[84] = {
  steps: [
    { k: "الفكرة", h: "أداة + ever = *لا يهم* أيّ",
      why: [
        "إضافة `ever` إلى أداة الاستفهام تحوّل السؤال إلى معنى «أيّ… لا يهم» أو «مهما».",
        "`where` = أين؟ لكن `wherever` = أينما (في أي مكان، لا يهم)."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["whatever", "Take {k:whatever} you need.", "أي شيء", 0], ["whoever", "{k:Whoever} finishes first wins.", "أي شخص", 0], ["wherever", "Sit {k:wherever} you like.", "أينما", 0], ["whenever", "Call me {k:whenever} you need help.", "متى ما / كلما", 0], ["however", "{k:However} hard I try, I can't do it.", "مهما (+ صفة)", 0]],
        groups: [{ h: "wh + ever = لا يهم أي…" }] }],
      check: { q: "She follows him ___ he goes.", o: ["wherever", "whenever", "whatever"], a: 0, why: "أي مكان ← `wherever`." } },

    { k: "مهما", h: "Whatever happens = مهما حدث",
      why: [
        "معنى ثانٍ قوي: التنازل («مهما»). `Whatever happens, I'll support you.`",
        "وبعدها **مضارع** للمستقبل، لا `will` (مثل أدوات الزمن)."
      ],
      show: [{ t: "ex", items: [["{k:Whatever} {v:happens}, I'll support you.", "مهما حدث"], ["{k:No matter what} you say, I won't change my mind.", "= whatever"]] },
        { t: "fix", items: [["Whatever will happen, stay calm.", "{k:Whatever} {v:happens}, stay calm.", ""], ["No matter you say, I won't go.", "{k:No matter what} you say…", ""]] }],
      check: { q: "Whatever ___ tomorrow, don't worry.", o: ["will happen", "happens"], a: 1, why: "بعد `whatever` مضارع للمستقبل." } },

    { k: "however", h: "however بمعنيين",
      why: [
        "`However` + فاصلة في أول الجملة = «ومع ذلك» (أداة ربط، الدرس 112).",
        "`However` + صفة أو ظرف = «مهما»: `However rich he is` (مهما كان غنيًا). الصفة تأتي **مباشرة** بعد however."
      ],
      show: [{ t: "compare", cols: [
        { h: "However, = ومع ذلك", c: "subj", en: ["The plan was good. {k:However,} it failed."] },
        { h: "However + صفة = مهما", c: "accent", en: ["{k:However rich} he is, he's not happy.", "{k:However much} it costs, I'll buy it."] }
      ] },
        { t: "fix", items: [["However I try hard, I fail.", "{k:However hard} I try, I fail.", "الصفة مباشرة بعد however"]] }],
      check: { q: "___ I try, I can't remember his name.", o: ["However hard", "However I hard"], a: 0, why: "`However` + الصفة مباشرة." } }
  ],
  sum: [
    { h: "لا يهم", en: ["whatever · whoever · wherever · whenever"] },
    { h: "مهما", en: ["{k:Whatever} {v:happens}…"] },
    { h: "however", en: ["However, … (ومع ذلك)", "However hard… (مهما)"] },
    { h: "= no matter", en: ["no matter what / where / how"] }
  ]
};
