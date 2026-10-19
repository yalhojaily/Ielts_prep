window.UNITS = window.UNITS || {};
window.UNITS[28] = {
  id: 28,
  title: "Other passive constructions",
  ar: "تراكيب أخرى للمبني للمجهول",
  idea: "هناك تراكيب مجهولة متقدمة: **It is said that...** لنقل آراء عامة، و**He is said to be...** بنفس المعنى، و**have something done** عندما يقوم شخص آخر بعمل لك، و**get** بدل `be` في الكلام اليومي.",
  uses: [
    ["رأي عام دون ذكر قائل", "It is believed that the city is 3,000 years old."],
    ["الفاعل + is said to", "He is said to be very rich."],
    ["خدمة يقوم بها غيرك", "I had my car repaired."],
    ["get بدل be (عامي)", "He got arrested."]
  ],
  formula: [
    ["It + is + v3 + that", "{s:It} {a:is} {v:thought} that prices will rise."],
    ["فاعل + is + v3 + to", "{s:Prices} {a:are} {v:thought} to be rising."],
    ["have something done", "{s:I} {a:had} my hair {v:cut}. · {s:She} {a:is having} her kitchen {v:painted}."],
    ["get", "{s:My phone} {a:got} {v:broken}."]
  ],
  notes: [
    { title: "أفعال التركيب الأول",
      body: "`say, believe, think, know, report, expect, consider, estimate`.",
      en: "{s:It} {a:is} {v:estimated} that 2 million people visited the city." },
    { title: "have / get something done",
      body: "لا نقول `I cut my hair at the barber` إذا كان غيرك قصّه. نقول `I had my hair cut`. و`get` بنفس المعنى أقل رسمية.",
      en: "I need to {a:get} my car {v:serviced}." },
    { title: "to have + v3 للماضي",
      body: "إذا كان الحدث المنقول سابقًا: `is said to have + v3`.",
      en: "He {a:is} {v:said} to {a:have} {v:left} the country." }
  ],
  examples: [
    ["{s:It} {a:is} {v:said} that this restaurant is the best in town.", "يقال إن هذا المطعم هو الأفضل في المدينة."],
    ["{s:The painting} {a:is} {v:believed} to be 500 years old.", "يُعتقد أن عمر اللوحة 500 سنة."],
    ["{s:I} {a:had} my eyes {v:tested} last week.", "فحصت نظري الأسبوع الماضي (عند مختص)."],
    ["{s:We}'re {a:having} solar panels {v:installed}.", "نقوم بتركيب ألواح شمسية (عند فنيين)."],
    ["{s:He} {a:got} {v:injured} playing football.", "أصيب وهو يلعب كرة القدم."]
  ],
  mistakes: [
    ["I cut my hair yesterday. (at the barber)", "I had my hair cut yesterday.", "إذا قام غيرك بالعمل: `have something done`."],
    ["It is said he is very rich. (formal)", "It is said that he is very rich. / He is said to be very rich.", "`that` اختيارية لكن الأفضل كتابتها في الأسلوب الرسمي."],
    ["She is believed being the best.", "She is believed to be the best.", "بعد `is believed` نستخدم `to be`."],
    ["I had repaired my car. (by a mechanic)", "I had my car repaired.", "الترتيب: `have` + الشيء + التصريف الثالث."]
  ],
  ielts: {
    text: "`It is often argued that...` و`It is widely believed that...` من أشهر افتتاحيات **Writing Task 2**. استخدمها مرة في المقدمة أو في عرض الرأي الآخر، لا في كل فقرة.",
    en: "It is widely believed that university education should be free, but this view is not shared by everyone."
  },
  questions: [
    { t: "mcq", q: "___ that the economy will improve next year.", o: ["It is expected", "It expects", "They are expected", "Is expected"], a: 0,
      why: "`It is expected that...`." },
    { t: "mcq", q: "The castle is thought ___ in the 12th century.", o: ["to build", "to have been built", "being built", "that built"], a: 1,
      why: "حدث ماضٍ مجهول: `to have been built`." },
    { t: "mcq", q: "I'm going to ___ next week.", o: ["cut my hair", "have my hair cut", "have cut my hair", "my hair cut"], a: 1,
      why: "شخص آخر سيقصّه: `have my hair cut`." },
    { t: "mcq", q: "He is said ___ the richest man in the city.", o: ["be", "to be", "being", "that he is"], a: 1,
      why: "`is said to be`." },
    { t: "fill", q: "We ___ (have) our house painted last month.", a: ["had"],
      why: "`had our house painted`." },
    { t: "fill", q: "It ___ (believe) that the treasure is still hidden.", a: ["is believed"],
      why: "`It is believed that`." },
    { t: "fill", q: "The suspect is thought ___ (be) in Europe now.", a: ["to be"],
      why: "`is thought to be`." },
    { t: "fill", q: "I need to get my passport ___ (renew).", a: ["renewed"],
      why: "`get` + الشيء + التصريف الثالث." },
    { t: "fix", q: "She had cleaned her carpets by a company.", a: ["She had her carpets cleaned by a company."],
      why: "الترتيب: `had her carpets cleaned`." },
    { t: "fix", q: "It is say that he lived here.", a: ["It is said that he lived here."],
      why: "التصريف الثالث: `said`." },
    { t: "fix", q: "The bridge is believed being unsafe.", a: ["The bridge is believed to be unsafe."],
      why: "`is believed to be`." },
    { t: "rewrite", q: "People say that he is a genius. (Begin with: He ...)", ask: "أعد الصياغة.",
      a: ["He is said to be a genius."],
      why: "`He is said to be...`." },
    { t: "rewrite", q: "A mechanic repaired my car. (Begin with: I had ...)", ask: "أعد الصياغة.",
      a: ["I had my car repaired.", "I had my car repaired by a mechanic."],
      why: "`have something done`." }
  ]
};
