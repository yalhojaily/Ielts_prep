window.LESSONS = window.LESSONS || {};
window.LESSONS[74] = {
  steps: [
    { k: "نوعان", h: "للعدّ · للترتيب",
      why: [
        "**الأصلية** (`one, two, three`) للعدّ: كم؟ **الترتيبية** (`first, second, third`) للترتيب: أي واحد؟ وللتواريخ.",
        "معظم الترتيبية = العدد + `th`، وأشهر الشواذ: `first, second, third, fifth, twelfth`."
      ],
      show: [{ t: "table", head: ["الرقم", "أصلي", "ترتيبي"], hl: 2, rows: [["1", "one", "first (1st)"], ["2", "two", "second (2nd)"], ["3", "three", "third (3rd)"], ["5", "five", "fifth (5th)"], ["12", "twelve", "twelfth (12th)"], ["20", "twenty", "twentieth (20th)"], ["21", "twenty-one", "twenty-first (21st)"]] }],
      check: { q: "We live in the ___ century.", o: ["twenty-one", "twenty-first"], a: 1, why: "للترتيب ← `twenty-first`." } },

    { k: "hundred", h: "three hundred (لا s) · hundreds *of*",
      why: [
        "بعد رقم محدد، `hundred / thousand / million` **بلا s**: `three hundred people`.",
        "أما بمعنى «المئات / الآلاف» (عدد غير محدد) فنضيف `s` و`of`: `hundreds of people`."
      ],
      show: [{ t: "compare", cols: [
        { h: "رقم محدد ← بلا s", c: "subj", en: ["{k:three hundred} people", "{k:two million} riyals"] },
        { h: "غير محدد ← s + of", c: "accent", en: ["{k:hundreds of} people", "{k:millions of} dollars"] }
      ] },
        { t: "note", txt: "في البريطانية نضيف `and` بعد المئات: 350 = three hundred **and** fifty." }],
      check: { q: "___ people attended the concert.", o: ["Thousand of", "Thousands of", "Thousands"], a: 1, why: "عدد غير محدد ← `Thousands of`." } },

    { k: "السنوات", h: "نقرأ السنة *جزأين*",
      why: [
        "السنة تُقرأ مقسومة إلى جزأين من رقمين: `1998` = nineteen / ninety-eight.",
        "بعد 2000: `2007` = two thousand and seven، و`2026` = twenty twenty-six."
      ],
      show: [{ t: "map", cols: [{ h: "السنة ← القراءة", c: "accent", k: "o", rows: [["1985", "nineteen eighty-five"], ["2007", "two thousand and seven"], ["2026", "twenty twenty-six"]] }] }],
      check: { q: "How do we say 1995?", o: ["one thousand nine hundred ninety-five", "nineteen ninety-five"], a: 1, why: "السنة تُقرأ جزأين." } },

    { k: "الكسور والتواريخ", h: "a half · two thirds · the fifth of May",
      why: [
        "الكسور: البسط عدد أصلي والمقام ترتيبي: `two thirds`. والفاصلة العشرية = `point`: `2.5` = two point five.",
        "التاريخ: نكتب `5 May` ونقرأ `the fifth of May`. هذه تتكرر كثيرًا في IELTS Listening."
      ],
      show: [{ t: "map", cols: [
        { h: "الكسور", c: "subj", k: "o", rows: [["1/2", "a half"], ["1/4", "a quarter"], ["3/4", "three quarters"], ["2/3", "two thirds"], ["3.5%", "three point five percent"]] },
        { h: "التاريخ", c: "accent", k: "o", rows: [["5 May", "the fifth of May"], ["3 March", "the third of March"]] }
      ] }],
      check: { q: "2.5% is read as…", o: ["two point five percents", "two point five percent"], a: 1, why: "`percent` بلا s." } }
  ],
  sum: [
    { h: "أصلي / ترتيبي", en: ["three · third · twenty-first"] },
    { h: "hundred", en: ["three hundred · hundreds of"] },
    { h: "السنوات", en: ["1998 = nineteen ninety-eight"] },
    { h: "الكسور", en: ["two thirds · two point five"] }
  ]
};
