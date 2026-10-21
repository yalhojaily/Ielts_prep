window.LESSONS = window.LESSONS || {};
window.LESSONS[110] = {
  steps: [
    { k: "الفكرة", h: "أربع أدوات أساسية للربط",
      why: [
        "أدوات العطف تربط شيئين متساويين: كلمتين أو جملتين كاملتين. لكل أداة معنى:",
        "`and` إضافة · `but` تناقض · `or` اختيار · `so` نتيجة. وقبلها فاصلة عند ربط جملتين كاملتين."
      ],
      show: [{ t: "build", lab: "اختر الأداة",
        opts: [["and", "I studied hard{k:, and} I passed.", "إضافة", 0], ["but", "I studied hard{k:, but} I didn't pass.", "تناقض", 0], ["or", "We can take a taxi {k:or} walk.", "اختيار", 0], ["so", "It was raining{k:, so} we stayed home.", "نتيجة", 0], ["yet", "He's rich{k:, yet} he lives simply.", "تناقض مفاجئ", 0]],
        groups: [{ h: "جملة + , + أداة + جملة" }] }],
      check: { q: "The shop was closed, ___ we went home.", o: ["but", "so", "or"], a: 1, why: "نتيجة ← `so`." } },

    { k: "so أم because", h: "so قبل *النتيجة* · because قبل *السبب*",
      why: [
        "`so` تأتي قبل النتيجة، و`because` تأتي قبل السبب.",
        "لا نجمعهما في جملة واحدة: `Because I was tired, so I slept` خطأ (في العربية نقول «لأنني… فـ…»)."
      ],
      show: [{ t: "compare", cols: [{ h: "so + نتيجة", c: "subj", en: ["I was tired, {k:so} I slept."] }, { h: "because + سبب", c: "accent", en: ["I slept {k:because} I was tired."] }] },
        { t: "fix", items: [["Because I was tired, so I slept.", "{k:Because} I was tired, I slept.", "أداة واحدة فقط"], ["Although it was cold, but we went out.", "{k:Although} it was cold, we went out.", ""]] }],
      check: { q: "Although it was late, ___ we continued.", o: ["but", "(nothing)"], a: 1, why: "`although` لا تجتمع مع `but`." } },

    { k: "nor", h: "nor = ولا… مع *قلب*",
      why: [
        "`nor` تربط جملتين منفيتين: لا يدخن **ولا** يشرب القهوة.",
        "بعد `nor` يُقلب الترتيب كالسؤال: المساعد قبل الفاعل."
      ],
      show: [{ t: "big", items: ["He doesn't smoke{k:, nor} {a:does} {s:he} drink coffee."], cap: "بعد nor: المساعد قبل الفاعل" }],
      check: { q: "She can't swim, nor ___.", o: ["she can dive", "can she dive"], a: 1, why: "بعد `nor` قلب: `can she`." } },

    { k: "في المقال", h: "لا تبدأ الجملة الرسمية بـ And / But",
      why: [
        "في الكتابة الأكاديمية الأفضل ألا تبدأ الجملة بـ `And` أو `But`.",
        "استخدم بدلها أدوات ربط بين الجمل: `In addition,` و`However,` (الدرس 112)."
      ],
      show: [{ t: "compare", cols: [{ h: "كلام", c: "subj", en: ["Prices rose. But demand stayed high."] }, { h: "مقال", c: "accent", en: ["Prices rose. {k:However,} demand stayed high."] }] },
        { t: "fix", items: [["I like football and also I like tennis.", "I like football {k:and} tennis.", "اربط الكلمات مباشرة"]] }],
      check: { q: "Best start for a new sentence in an essay:", o: ["But this is not true.", "However, this is not true."], a: 1, why: "في المقال `However,` بدل `But`." } }
  ],
  sum: [
    { h: "الأدوات", en: ["and · but · or · so · yet"] },
    { h: "الفاصلة", en: ["…late{k:, so} we took a taxi."] },
    { h: "أداة واحدة", en: ["Because…, I slept. (لا so)"] },
    { h: "في المقال", en: ["However, · In addition,"] }
  ]
};
