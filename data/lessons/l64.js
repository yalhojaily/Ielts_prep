window.LESSONS = window.LESSONS || {};
window.LESSONS[64] = {
  steps: [
    { k: "ثلاثة أسئلة", h: "أي أداة؟ اسأل بالترتيب",
      why: ["بدل التخمين، اسأل هذه الأسئلة الثلاثة عن الاسم، وستصل إلى الأداة الصحيحة في كل مرة:"],
      show: [{ t: "chain", items: [
        { h: "معدود مفرد؟", ar: "لا بد من أداة: a / an / the / my" },
        { h: "محدد يعرفه السامع؟", ar: "إذن the" },
        { h: "كلام عام عن جمع أو غير معدود؟", ar: "إذن بلا أداة" }
      ] },
        { t: "ex", items: [["I need {k:a} pen.", "معدود مفرد، غير محدد"], ["{k:The} pen on the desk is mine.", "محدد"], ["Pens are cheap.", "جمع عام"], ["Information is power.", "غير معدود عام"]] }],
      check: { q: "I have ___ car.", o: ["(nothing)", "a"], a: 1, why: "معدود مفرد ← لا بد من أداة." } },

    { k: "the + of", h: "اسم *محدد* بعبارة بعده",
      why: [
        "حتى الاسم العام يصبح محددًا إذا جاءت بعده عبارة تحدده (`of…, in…, that…`)، فيأخذ `the`.",
        "`History is interesting` (التاريخ عمومًا). لكن `The history of Islam` (تاريخ محدد)."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["عام", "History is fascinating.", "التاريخ عمومًا ← بلا أداة", 0], ["محدد بـ of", "{k:The} history {k:of} Islam is fascinating.", "تاريخ محدد ← the", 1],
               ["عام", "Unemployment is a serious problem.", "", 0], ["محدد", "{k:The} unemployment rate rose in 2020.", "معدل محدد", 1]],
        groups: [{ h: "عام ← بلا أداة" }, { h: "محدد ← the" }] }],
      check: { q: "___ people in my office are friendly.", o: ["(nothing)", "The"], a: 1, why: "`in my office` حددت الناس ← `The`." } },

    { k: "the + صفة", h: "the rich = الأغنياء (*جمع*)",
      why: [
        "`the` + صفة تعني **فئة كاملة** من الناس: `the rich` (الأغنياء)، `the poor`، `the elderly`، `the young`.",
        "وتعامل كجمع: `the poor need`، لا `needs`. مفيدة جدًا في مقالات Task 2."
      ],
      show: [{ t: "ex", items: [["{k:The elderly} {v:need} more support.", "كبار السن"], ["The gap between {k:the rich} and {k:the poor} is growing.", ""]] },
        { t: "fix", items: [["The poor needs help.", "{k:The poor} {v:need} help.", "جمع"]] }],
      check: { q: "The government should help ___.", o: ["unemployed", "the unemployed"], a: 1, why: "`the` + صفة = فئة العاطلين." } },

    { k: "مراجعة", h: "أخطاء تجمع كل القواعد",
      why: ["حاول معرفة السؤال الذي أخطأ فيه الكاتب في كل جملة."],
      show: [{ t: "fix", items: [
        ["The people need jobs. (عمومًا)", "People need jobs.", "عام ← بلا أداة"],
        ["History of Islam is fascinating.", "{k:The} history of Islam…", "محدد بـ of ← the"],
        ["I have car.", "I have {k:a} car.", "معدود مفرد ← أداة"]
      ] }],
      check: { q: "I read ___ interesting article about ___ inflation.", o: ["an / (nothing)", "the / the", "a / an"], a: 0, why: "مقال غير محدد ← `an`، والتضخم كمفهوم عام ← بلا أداة." } }
  ],
  sum: [
    { h: "معدود مفرد", en: ["{k:a / the / my} book (لا book وحدها)"] },
    { h: "محدد", en: ["{k:the} history {k:of} Islam"] },
    { h: "عام", en: ["Children need love. · Information is power."] },
    { h: "فئة", en: ["{k:the} rich · {k:the} elderly"] }
  ]
};
