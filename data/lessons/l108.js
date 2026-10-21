window.LESSONS = window.LESSONS || {};
window.LESSONS[108] = {
  steps: [
    { k: "by و with", h: "by للوسيلة · with للأداة",
      why: [
        "`by` + وسيلة **بلا أداة تعريف**: `by car, by email, by card`. وإذا ذكرت سيارتك تحديدًا: `in my car`. والمشي استثناء: `on foot`.",
        "`with` = باستخدام أداة تمسكها بيدك: `Cut it with a knife.`"
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["by car", "I came {k:by} car.", "وسيلة بلا the", 0], ["in my car", "I came {k:in} my car.", "مع my ← in", 0], ["on foot", "I went {k:on} foot.", "استثناء", 0], ["by email", "Send it {k:by} email.", "", 0], ["with a knife", "Cut it {k:with} a knife.", "أداة", 1], ["with a pen", "Write {k:with} a pen.", "أداة", 1]],
        groups: [{ h: "by = الوسيلة" }, { h: "with = الأداة" }] },
        { t: "fix", items: [["I came with car.", "I came {k:by} car.", ""], ["I went by foot.", "I went {k:on} foot.", ""]] }],
      check: { q: "I usually pay ___ card.", o: ["with", "by"], a: 1, why: "وسيلة الدفع ← `by card`." } },

    { k: "like أم as", h: "like = يشبه · as = *فعلًا* هو",
      why: [
        "`like` للتشبيه: هو ليس كذلك لكنه يشبهه. `He talks like a doctor` = يتكلم كأنه طبيب (وهو ليس طبيبًا).",
        "`as` للدور الحقيقي: `He works as a doctor` = هو طبيب فعلًا."
      ],
      show: [{ t: "compare", cols: [{ h: "like = تشبيه", c: "subj", en: ["He talks {k:like} a doctor.", "She sings {k:like} a professional."], ar: "ليس طبيبًا فعلًا" }, { h: "as = دور حقيقي", c: "accent", en: ["He works {k:as} a doctor.", "{k:As} a child, I lived in Taif."], ar: "طبيب فعلًا" }] },
        { t: "fix", items: [["He works like a manager.", "He works {k:as} a manager.", ""]] }],
      check: { q: "She works ___ a financial analyst.", o: ["like", "as"], a: 1, why: "وظيفتها الحقيقية ← `as`." } },

    { k: "despite", h: "despite *بلا* of",
      why: [
        "`despite` و`in spite of` = رغم، وبعدهما **اسم** أو `ing` (لا جملة كاملة).",
        "`despite` بلا `of`، أما `in spite of` فمع `of`. `Despite of` خطأ شائع جدًا."
      ],
      show: [{ t: "ex", items: [["{k:Despite} the rain, we went out.", ""], ["{k:In spite of} being tired, she finished.", ""]] },
        { t: "fix", items: [["Despite of the rain, we went out.", "{k:Despite} the rain, we went out.", ""]] }],
      check: { q: "___ the cost, they bought the house.", o: ["Despite of", "Despite"], a: 1, why: "`despite` بلا of." } },

    { k: "أخرى", h: "about · for · by hand",
      why: ["تعبيرات ثابتة مفيدة مع `by` و`about` و`for`:"],
      show: [{ t: "ex", items: [["He wrote the letter {k:by} hand.", "باليد"], ["I did it {k:by} mistake.", "عن طريق الخطأ"], ["a book {k:about} history", "عن موضوع"], ["Coffee {k:without} sugar, please.", "بدون"]] }],
      check: { q: "I deleted the file ___ mistake.", o: ["with", "by"], a: 1, why: "`by mistake`." } }
  ],
  sum: [
    { h: "by / with", en: ["by car · on foot · with a knife"] },
    { h: "like / as", en: ["like a doctor (يشبه) · as a doctor (فعلًا)"] },
    { h: "despite", en: ["despite the rain (لا of)"] },
    { h: "ثابتة", en: ["by hand · by mistake"] }
  ]
};
