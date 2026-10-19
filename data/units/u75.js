window.UNITS = window.UNITS || {};
window.UNITS[75] = {
  id: 75,
  title: "Quantity",
  ar: "التعبير عن الكمية",
  idea: "كلمات الكمية تختلف حسب الاسم: مع **المعدود** `many, a few, few, several`، ومع **غير المعدود** `much, a little, little`، ومع الاثنين `some, any, a lot of, lots of, plenty of, enough`. والفرق بين `a few` (قليل لكن كافٍ) و`few` (قليل جدًا، سلبي) مهم.",
  uses: [
    ["معدود", "many friends, a few days, several times"],
    ["غير معدود", "much time, a little money"],
    ["كلاهما", "a lot of / some / any / enough + friends / time"],
    ["some للإثبات و any للنفي والسؤال", "I have some. / I don't have any. / Do you have any?"]
  ],
  formula: [
    ["معدود", "{x:many, a few, few, several, a number of} + {v:books}"],
    ["غير معدود", "{x:much, a little, little, a great deal of} + {v:water}"],
    ["كلاهما", "{x:some, any, a lot of, lots of, plenty of, enough, no} + {v:books / water}"]
  ],
  notes: [
    { title: "a few / few / a little / little",
      body: "`a few / a little` = بعض (إيجابي). `few / little` = تقريبًا لا شيء (سلبي).",
      en: "I have {x:a few} friends here. (positive) · He has {x:few} friends. (lonely)" },
    { title: "much في الإثبات",
      body: "`much` و`many` طبيعيتان في النفي والسؤال. في الإثبات `a lot of` أطبع: `I have a lot of time` أفضل من `I have much time`.",
      en: "I don't have {x:much} time. · I have {x:a lot of} time." },
    { title: "some في السؤال",
      body: "نستخدم `some` في السؤال عند العرض أو الطلب.",
      en: "Would you like {x:some} tea? · Can I have {x:some} water?" }
  ],
  examples: [
    ["I only need {x:a little} sugar.", "أحتاج قليلًا من السكر فقط."],
    ["There aren't {x:many} jobs in this area.", "لا توجد وظائف كثيرة في هذه المنطقة."],
    ["We have {x:plenty of} time. Don't worry.", "لدينا وقت كافٍ. لا تقلق."],
    ["{x:Few} people understood the lecture.", "قليلون جدًا فهموا المحاضرة."],
    ["Is there {x:any} milk left?", "هل بقي حليب؟"]
  ],
  mistakes: [
    ["I have much friends.", "I have a lot of friends. / many friends", "`friends` معدود."],
    ["How many money?", "How much money?", "غير معدود."],
    ["I don't have some money.", "I don't have any money.", "في النفي: `any`."],
    ["There is a few water.", "There is a little water.", "غير معدود: `a little`."]
  ],
  ielts: {
    text: "في **Writing Task 1** للمقارنة: `a large number of`, `a small proportion of`, `a significant amount of`. استخدم `number` مع المعدود و`amount` مع غير المعدود.",
    en: "A large number of students used the library, but the amount of time they spent there decreased."
  },
  questions: [
    { t: "mcq", q: "How ___ people came?", o: ["much", "many", "a little", "little"], a: 1, why: "معدود: `many`." },
    { t: "mcq", q: "There isn't ___ coffee left.", o: ["many", "much", "few", "a few"], a: 1, why: "غير معدود في النفي: `much`." },
    { t: "mcq", q: "I've got ___ questions for you.", o: ["a little", "a few", "much", "little"], a: 1, why: "معدود إيجابي: `a few`." },
    { t: "mcq", q: "He has ___ patience. He gets angry quickly.", o: ["a little", "little", "few", "many"], a: 1, why: "سلبي غير معدود: `little`." },
    { t: "mcq", q: "Would you like ___ juice?", o: ["any", "some", "many", "few"], a: 1, why: "عرض: `some`." },
    { t: "mcq", q: "The ___ of traffic has increased.", o: ["number", "amount", "many", "few"], a: 1, why: "`traffic` غير معدود: `amount`." },
    { t: "fill", q: "Do you have ___ brothers or sisters?", a: ["any"], why: "سؤال: `any`." },
    { t: "fill", q: "I have a ___ money, enough for a coffee.", a: ["little"], why: "`a little` إيجابي." },
    { t: "fill", q: "Only a ___ students failed the exam.", a: ["few"], why: "`a few` مع المعدود." },
    { t: "fill", q: "There's ___ of food for everyone, so don't worry.", a: ["plenty", "lots"], why: "`plenty of`." },
    { t: "fix", q: "There are much cars on the road.", a: ["There are many cars on the road.", "There are a lot of cars on the road."], why: "معدود: `many`." },
    { t: "fix", q: "I need a few information.", a: ["I need a little information.", "I need some information."], why: "غير معدود." },
    { t: "fix", q: "The number of pollution has risen.", a: ["The amount of pollution has risen.", "The level of pollution has risen."], why: "غير معدود: `amount`." }
  ]
};
