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

// تعمّق
window.LESSONS[64].steps.push(
  { k: "في سياق", h: "اقرأ: صحّح الأدوات بنفسك",
    why: ["هذه الفقرة كتبها طالب عربي، وفيها أخطاء الأدوات الشائعة. فيها ستة أخطاء. حاول أن تجدها، ثم اضغط «اعرض التصحيح»."],
    show: [{ t: "passage", h: "فقرة فيها أخطاء",
      btn: "اعرض التصحيح", btn2: "أخفِ التصحيح",
      en: "The young people love the football. My brother is engineer and he works in big company in the Riyadh. History of Saudi Arabia is very interesting.",
      fixes: [
        ["The young people love the football.", "Young people love football.", "كلام عام عن الشباب وكرة القدم ← بلا `the` (خطآن)"],
        ["My brother is engineer", "My brother is {k:an} engineer", "المهنة اسم معدود مفرد ← `an`"],
        ["he works in big company", "he works in {k:a} big company", "معدود مفرد ← `a`"],
        ["in the Riyadh", "in Riyadh", "المدن بلا `the`"],
        ["History of Saudi Arabia", "{k:The} history of Saudi Arabia", "محدد بـ `of` ← `the`"]
      ],
      note: "تلميح: خطآن بسبب `the` زائدة في كلام عام، وخطآن بسبب أداة ناقصة قبل اسم معدود مفرد، وخطأ مع اسم مدينة، وخطأ مع `of`." }],
    check: { q: "\"My brother is ___ engineer.\"", o: ["(nothing)", "an", "the"], a: 1, why: "المهنة مع اسم معدود مفرد ← `an engineer`." } }
);

// طبّق على نفسك
window.LESSONS[64].apply = [
  {"p": "اكتب فقرة قصيرة (3 جمل) عن بلدك فيها أسماء أماكن (مع `the` وبدونها).", "use": "{o:the} Red Sea · Riyadh (بلا the) · {o:the} Kingdom", "m": ["Saudi Arabia is in the Middle East. Its capital is Riyadh. The Red Sea is on the west coast."], "c": [["لم تضع `the` مع أسماء المدن", "!\\bthe (riyadh|jeddah|london|paris|dubai|makkah|mecca|madinah)\\b"], ["`the` مع البحار والمناطق", "\\bthe (red sea|middle east|gulf|arabian gulf|west|east)\\b"]]},
  {"p": "اكتب جملة عن وظيفتك أو وظيفة قريب لك (`a / an` قبل المهنة).", "use": "{s:My brother} {a:is} {o:an} engineer.", "m": ["My wife is a teacher and my brother is an engineer."], "c": [["`a / an` قبل المهنة", "\\b(is|am|are|was)\\s+(a|an)\\s+\\w+"], ["لم تكتب `is engineer` بلا أداة", "!\\b(is|am|was)\\s+(engineer|teacher|doctor|student|investor|manager|nurse|pilot)\\b"]]}
];
