window.UNITS = window.UNITS || {};
window.UNITS[108] = {
  id: 108,
  title: "Other prepositions",
  ar: "حروف جر أخرى",
  idea: "حروف جر تعبر عن **الوسيلة والطريقة والسبب والموضوع**: `by` (بواسطة)، `with` (باستخدام أداة / مع)، `about` (عن موضوع)، `like` (مثل)، `as` (بصفته)، `for` (من أجل / لمدة)، `despite` (رغم).",
  uses: [
    ["by للوسيلة", "by car, by email, by credit card"],
    ["with للأداة", "Cut it with a knife."],
    ["like = مثل (تشبيه)", "She sings like a professional."],
    ["as = بصفته (حقيقة)", "He works as a teacher."]
  ],
  formula: [
    ["by", "{x:by} car / train / plane · {x:by} hand · {x:by} mistake · {x:by} + فاعل المجهول"],
    ["with / without", "{x:with} a pen · {x:without} sugar"],
    ["like / as", "{x:like} a child (تشبيه) · {x:as} a child (عندما كنت طفلًا)"],
    ["despite / in spite of", "{x:despite} the rain · {x:in spite of} being tired"]
  ],
  notes: [
    { title: "by car لكن in my car",
      body: "`by` + وسيلة بلا أداة تعريف. إذا ذكرنا أداة نستخدم `in / on`.",
      en: "{x:by} car · {x:in} my car · {x:on} foot (مشيًا)" },
    { title: "like أم as؟",
      body: "`like` تشبيه (ليس حقيقة). `as` وظيفة أو دور حقيقي.",
      en: "He talks {x:like} a doctor. (he isn't) · He works {x:as} a doctor. (he is)" },
    { title: "despite بلا of",
      body: "`despite` + اسم أو -ing، بلا `of`. أما `in spite of` فمع of.",
      en: "{x:Despite} the cost... (not: despite of)" }
  ],
  examples: [
    ["I usually pay {x:by} card.", "أدفع عادة بالبطاقة."],
    ["He wrote the letter {x:by} hand.", "كتب الرسالة بخط اليد."],
    ["She works {x:as} a financial analyst.", "تعمل محللة مالية."],
    ["It tastes {x:like} chocolate.", "طعمه مثل الشوكولاتة."],
    ["{x:Despite} the traffic, we arrived on time.", "رغم الزحمة، وصلنا في الموعد."]
  ],
  mistakes: [
    ["I came with car.", "I came by car.", "الوسيلة: `by`."],
    ["Despite of the rain, we went out.", "Despite the rain, we went out.", "بلا of."],
    ["He works like a manager.", "He works as a manager.", "وظيفة حقيقية: `as`."],
    ["I went by foot.", "I went on foot.", "`on foot`."]
  ],
  ielts: {
    text: "`despite / in spite of` أداة ربط قوية في **Writing Task 2** لعرض التناقض. و`as` مع الأدوار: `As a parent, I believe...`. و`such as` لضرب الأمثلة بدل `like`.",
    en: "Despite the high cost, many families choose private schools, as they believe the quality is better."
  },
  questions: [
    { t: "mcq", q: "I go to work ___ bus.", o: ["with", "by", "on the", "in"], a: 1, why: "وسيلة: `by`." },
    { t: "mcq", q: "She works ___ a nurse.", o: ["like", "as", "for", "by"], a: 1, why: "وظيفة: `as`." },
    { t: "mcq", q: "___ the heat, we enjoyed the trip.", o: ["Despite of", "Despite", "Although", "In spite"], a: 1, why: "`Despite` + اسم." },
    { t: "mcq", q: "Open it ___ this key.", o: ["by", "with", "from", "of"], a: 1, why: "أداة: `with`." },
    { t: "mcq", q: "He sleeps ___ a baby.", o: ["as", "like", "by", "with"], a: 1, why: "تشبيه: `like`." },
    { t: "mcq", q: "I walked to the mosque. I went ___.", o: ["by foot", "on foot", "with foot", "in foot"], a: 1, why: "`on foot`." },
    { t: "fill", q: "I sent the documents ___ email.", a: ["by"], why: "`by email`." },
    { t: "fill", q: "I take my coffee ___ sugar. I don't like it sweet.", a: ["without"], why: "`without sugar`." },
    { t: "fill", q: "In spite ___ being tired, she finished the work.", a: ["of"], why: "`in spite of`." },
    { t: "fix", q: "We travelled with plane.", a: ["We travelled by plane.", "We traveled by plane."], why: "`by plane`." },
    { t: "fix", q: "Despite of the cost, he bought it.", a: ["Despite the cost, he bought it.", "In spite of the cost, he bought it."], why: "بلا of." },
    { t: "fix", q: "She has worked like a teacher for ten years.", a: ["She has worked as a teacher for ten years."], why: "`as`." },
    { t: "rewrite", q: "Although it rained, we played football. (Use: Despite)", ask: "أعد الصياغة.", a: ["Despite the rain, we played football.", "Despite the rain we played football."], why: "`Despite the rain`." }
  ]
};
