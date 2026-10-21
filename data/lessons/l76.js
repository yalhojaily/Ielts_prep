window.LESSONS = window.LESSONS || {};
window.LESSONS[76] = {
  steps: [
    { k: "الفكرة", h: "عندما لا تعرف العدد *بالضبط*",
      why: [
        "في الحياة وفي Writing Task 1 نادرًا ما نذكر الرقم بدقة. نحتاج كلمات تقريب تحدد هل الرقم الحقيقي **أكثر** أم **أقل** أم حوله.",
        "اضغط على كل كلمة لترى موقعها من الرقم 50."
      ],
      show: [{ t: "scale", cap: "الرقم الحقيقي مقارنة بـ 50",
        items: [["just under", 15, "أقل بقليل", "`just under 50` = 47 أو 48"], ["almost / nearly", 35, "تقريبًا (أقل)", "`nearly 50` = 48 أو 49"], ["about / around", 50, "حوالي", "`about 50` = قد يكون 48 أو 52"], ["just over", 70, "أكثر بقليل", "`just over 50` = 51 أو 52"], ["more than", 90, "أكثر من", "`more than 50` = 51 فما فوق"]],
        lines: ["[] 50% of students"], start: 2 }],
      check: { q: "The company employs 1,020 people. It employs ___ 1,000.", o: ["just under", "just over", "nearly"], a: 1, why: "1,020 أكثر بقليل من 1,000 ← `just over`." } },

    { k: "المكان", h: "قبل الرقم أم بعده؟",
      why: [
        "معظم كلمات التقريب تأتي **قبل** الرقم: `about, around, approximately, roughly`.",
        "و`or so` تأتي **بعد** الرقم: `50 or so`. ولا تجمع كلمتين بنفس المعنى: `around about 50` خطأ."
      ],
      show: [{ t: "formula", rows: [["قبل الرقم", "{k:about / around / approximately / roughly} 50"], ["بعد الرقم", "50 {k:or so} · 50 {k:or more}"]] },
        { t: "fix", items: [["Around about 50 people.", "{k:About} 50 people. / {k:Around} 50 people.", ""]] }],
      check: { q: "The trip takes ___ three hours.", o: ["roughly", "or so"], a: 0, why: "`roughly` قبل الرقم. (`or so` بعده)" } },

    { k: "almost all", h: "almost all of… لا almost of",
      why: [
        "`almost` و`nearly` تأتيان قبل كلمة كمية (`all, half, every`)، لا قبل `of` مباشرة.",
        "`almost all (of) the students` صحيحة، و`almost of the students` خطأ."
      ],
      show: [{ t: "ex", items: [["{k:Almost all} the guests left early.", ""], ["{k:Nearly half} of the population lives in cities.", ""]] },
        { t: "fix", items: [["Almost of the students passed.", "{k:Almost all} of the students passed.", ""]] }],
      check: { q: "___ of my friends are married.", o: ["Almost", "Almost all"], a: 1, why: "`almost` تحتاج `all` قبل `of`." } },

    { k: "أعداد كبيرة", h: "dozens · a couple of · tens of thousands",
      why: ["تعبيرات لأعداد غير محددة. لاحظ `s` و`of` في الجمع: `dozens of`، لا `dozen of`."],
      show: [{ t: "map", cols: [{ h: "التعبير ← المعنى", c: "accent", k: "o", rows: [["a couple of", "اثنان / قليل"], ["a handful of", "عدد قليل جدًا"], ["dozens of", "عشرات"], ["tens of thousands of", "عشرات الآلاف"]] }] }],
      check: { q: "___ people were injured.", o: ["Dozen of", "Dozens of"], a: 1, why: "عدد غير محدد ← `Dozens of`." } }
  ],
  sum: [
    { h: "حوالي", en: ["about · around · roughly · 50 or so"] },
    { h: "أقل", en: ["almost · nearly · just under"] },
    { h: "أكثر", en: ["just over · more than"] },
    { h: "انتبه", en: ["almost all of (لا almost of)"] }
  ]
};
