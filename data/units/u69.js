window.UNITS = window.UNITS || {};
window.UNITS[69] = {
  id: 69,
  title: "Singular and plural nouns",
  ar: "المفرد والجمع",
  idea: "أغلب الأسماء تُجمع بإضافة `-s`. لكن هناك قواعد تهجئة (`-es, -ies, -ves`)، وجموع شاذة يجب حفظها (`man → men`). وبعض الكلمات لها صورة واحدة للمفرد والجمع (`sheep, fish`)، وبعضها جمع دائمًا (`jeans, scissors`).",
  uses: [
    ["القاعدة العامة", "book → books, car → cars"],
    ["-es بعد s, sh, ch, x, o", "box → boxes, potato → potatoes"],
    ["ساكن + y → -ies", "city → cities (but day → days)"],
    ["f / fe → -ves", "knife → knives, wife → wives"]
  ],
  formula: [
    ["شاذ", "man → {v:men} · woman → {v:women} · child → {v:children} · person → {v:people}"],
    ["شاذ", "foot → {v:feet} · tooth → {v:teeth} · mouse → {v:mice}"],
    ["بلا تغيير", "sheep, fish, deer, aircraft, series, species"],
    ["جمع دائمًا", "{v:jeans, trousers, glasses, scissors} + {a:are}"]
  ],
  notes: [
    { title: "people جمع",
      body: "`people` جمع `person` ويأخذ فعلًا جمعًا: `people are`. و`peoples` تعني «شعوب» فقط.",
      en: "Many {v:people} {a:are} waiting." },
    { title: "الكلمات اللاتينية في الكتابة الأكاديمية",
      body: "`phenomenon → phenomena`, `criterion → criteria`, `analysis → analyses`, `crisis → crises`.",
      en: "This {v:phenomenon} is common. · These {v:phenomena} are common." },
    { title: "news مفرد",
      body: "`news` تنتهي بـ s لكنها مفرد غير معدود: `The news is good`.",
      en: "The news {a:is} surprising." }
  ],
  examples: [
    ["{v:Children} learn languages quickly.", "يتعلم الأطفال اللغات بسرعة."],
    ["I need two {v:knives} and three {v:forks}.", "أحتاج سكينين وثلاث شوكات."],
    ["My {v:glasses} {a:are} on the table.", "نظارتي على الطاولة."],
    ["Many {v:countries} have rich {v:histories}.", "لدول كثيرة تاريخ غني."],
    ["{v:Women} make up half the workforce.", "تمثل النساء نصف القوى العاملة."]
  ],
  mistakes: [
    ["Many peoples came.", "Many people came.", "`people` جمع بلا s."],
    ["Two childs.", "Two children.", "جمع شاذ."],
    ["My trousers is new.", "My trousers are new.", "`trousers` جمع دائمًا."],
    ["The news are bad.", "The news is bad.", "`news` مفرد."]
  ],
  ielts: {
    text: "نسيان `-s` الجمع من أكثر الأخطاء تكرارًا في **Writing Task 1 و2** (`many country`, `some student`). وفي **Listening** قد تخسر الدرجة إذا كتبت المفرد والجواب جمع.",
    en: "In most developed countries, women now have the same opportunities as men in many industries."
  },
  questions: [
    { t: "mcq", q: "There are three ___ in the class.", o: ["womans", "women", "womens", "woman"], a: 1, why: "`women`." },
    { t: "mcq", q: "The ___ are playing in the garden.", o: ["childs", "child", "children", "childrens"], a: 2, why: "`children`." },
    { t: "mcq", q: "My new jeans ___ too long.", o: ["is", "are", "was", "has"], a: 1, why: "`jeans` جمع." },
    { t: "mcq", q: "The news ___ very good today.", o: ["are", "is", "were", "have"], a: 1, why: "`news` مفرد." },
    { t: "mcq", q: "We visited many beautiful ___.", o: ["citys", "cities", "cityes", "city"], a: 1, why: "ساكن + y: `cities`." },
    { t: "fill", q: "The dentist checked my ___ (tooth).", a: ["teeth"], why: "`teeth`." },
    { t: "fill", q: "Put the ___ (box) in the car.", a: ["boxes"], why: "بعد x: `boxes`." },
    { t: "fill", q: "Autumn ___ (leaf) are yellow and red.", a: ["leaves"], why: "`f → ves`." },
    { t: "fill", q: "There are many ___ (person) in the queue.", a: ["people"], why: "`people`." },
    { t: "fix", q: "Many student failed the test.", a: ["Many students failed the test."], why: "جمع: `students`." },
    { t: "fix", q: "There were a lot of peoples at the event.", a: ["There were a lot of people at the event."], why: "`people`." },
    { t: "fix", q: "These criterion are important.", a: ["These criteria are important."], why: "جمع criterion: `criteria`." },
    { t: "fix", q: "I bought two new knifes.", a: ["I bought two new knives."], why: "`knives`." }
  ]
};
