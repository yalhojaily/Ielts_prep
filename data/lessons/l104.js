window.LESSONS = window.LESSONS || {};
window.LESSONS[104] = {
  steps: [
    { k: "الفكرة", h: "too = *أكثر* من اللازم · enough = *بالقدر* الكافي",
      why: [
        "`too` تعني تجاوز الحد، وفيها دائمًا **مشكلة**: القهوة حارة أكثر من اللازم، لا أستطيع شربها.",
        "`enough` تعني الوصول إلى الحد المطلوب. ونفيها `not … enough` = أقل من المطلوب."
      ],
      show: [{ t: "scale", cap: "مقدار المال لشراء سيارة بـ 50 ألفًا",
        items: [["not enough", 15, "أقل من المطلوب", "`I don't have enough money.` (عندي 20 ألفًا فقط)"], ["enough", 55, "كافٍ", "`I have enough money.` (عندي 50 ألفًا)"], ["too much", 95, "أكثر من اللازم", "`It costs too much.` (السعر فوق قدرتي)"]],
        start: 1 }],
      check: { q: "This coffee is ___ hot to drink.", o: ["very", "too", "enough"], a: 1, why: "أكثر من اللازم ومعه مشكلة (لا أستطيع الشرب) ← `too`." } },

    { k: "المكان", h: "too *قبل* · enough *بعد* الصفة وقبل الاسم",
      why: [
        "`too` تأتي **قبل** الصفة: `too small`.",
        "`enough` تأتي **بعد** الصفة (`old enough`) لكن **قبل** الاسم (`enough money`). هذا أكثر ما يخطئ فيه الطلاب."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["too + صفة", "The shoes are {k:too} small.", "", 0], ["صفة + enough", "He's not old {k:enough} to drive.", "enough بعد الصفة", 1], ["enough + اسم", "We don't have {k:enough} time.", "enough قبل الاسم", 2]],
        groups: [{ h: "too + adj" }, { h: "adj + enough" }, { h: "enough + noun" }] },
        { t: "fix", items: [["It's enough big.", "It's big {k:enough}.", ""], ["I don't have money enough.", "I don't have {k:enough} money.", ""]] }],
      check: { q: "Is the room ___ for ten people?", o: ["enough big", "big enough"], a: 1, why: "`enough` بعد الصفة." } },

    { k: "too ≠ very", h: "very = OK · too = مشكلة",
      why: [
        "`very expensive` = غالٍ جدًا، لكن ربما أشتريه. `too expensive` = غالٍ لدرجة أنني لا أستطيع.",
        "لذلك `The film was too good, I loved it` خطأ."
      ],
      show: [{ t: "compare", cols: [{ h: "very", c: "verb", en: ["It's {k:very} expensive, but I'll buy it."] }, { h: "too", c: "neg", en: ["It's {k:too} expensive. I can't buy it."] }] }],
      check: { q: "It was ___ good! I loved it.", o: ["very", "too"], a: 0, why: "إيجابي بلا مشكلة ← `very`." } },

    { k: "to و for", h: "too heavy for me to carry",
      why: [
        "كلاهما يأتي كثيرًا مع `to` + فعل لشرح النتيجة.",
        "ولذكر الشخص المتأثر: `for` + شخص قبل `to`. و`too much` (غير معدود) و`too many` (جمع)."
      ],
      show: [{ t: "ex", items: [["This box is {k:too} heavy {k:for me} {a:to} {v:carry}.", ""], ["I didn't have {k:enough} money {a:to} {v:buy} it.", ""], ["There are {k:too many} cars in the city.", "جمع"], ["I drink {k:too much} coffee.", "غير معدود"]] },
        { t: "fix", items: [["There are too much people.", "There are {k:too many} people.", ""]] }],
      check: { q: "There's ___ traffic in Riyadh.", o: ["too many", "too much"], a: 1, why: "`traffic` غير معدود ← `too much`." } }
  ],
  sum: [
    { h: "too", en: ["{k:too} hot (مشكلة)"] },
    { h: "enough", en: ["old {k:enough} · {k:enough} money"] },
    { h: "too ≠ very", en: ["very good ☺ · too expensive ☹"] },
    { h: "كميات", en: ["too much + غير معدود · too many + جمع"] }
  ]
};
