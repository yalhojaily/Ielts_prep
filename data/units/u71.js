window.UNITS = window.UNITS || {};
window.UNITS[71] = {
  id: 71,
  title: "Subject-verb agreement",
  ar: "مطابقة الفعل للفاعل",
  idea: "الفعل يطابق **الفاعل الحقيقي** في الإفراد والجمع، حتى لو جاءت كلمات بينهما. ابحث عن الفاعل الأساسي: `The price of the cars is high` (الفاعل `price` مفرد).",
  uses: [
    ["عبارة بين الفاعل والفعل", "The list of names is on the wall."],
    ["كلمات مفردة دائمًا", "everyone, somebody, nothing, each, every + is"],
    ["الاسم الجمعي (عائلة، فريق)", "My family is big. / My family are all doctors."],
    ["الفاعل بعد There", "There is a book. / There are two books."]
  ],
  formula: [
    ["مفرد", "{s:The number of students} {v:is} increasing."],
    ["جمع", "{s:A number of students} {v:are} absent."],
    ["one of", "{s:One of my friends} {v:lives} in Paris."],
    ["المجموع", "{s:Ali and Omar} {v:are} here."]
  ],
  notes: [
    { title: "the number of / a number of",
      body: "`the number of` (العدد) مفرد. `a number of` (عدد من = كثير) جمع.",
      en: "{s:The number of} cars {v:has} doubled. · {s:A number of} people {v:have} complained." },
    { title: "one of + جمع + فعل مفرد",
      body: "الفاعل هو `one` فالفعل مفرد.",
      en: "{s:One of} the problems {v:is} cost." },
    { title: "-ing فاعلًا = مفرد",
      body: "إذا كان الفاعل نشاطًا بصيغة `-ing` فالفعل مفرد، حتى لو جاء بعده اسم جمع.",
      en: "{s:Learning languages} {v:is} fun." },
    { title: "النسب والمبالغ",
      body: "النسب تطابق الاسم بعد of، والمبالغ والمسافات تعامل كمفرد.",
      en: "50% of the money {v:is} gone. · 50% of the students {v:are} women. · Ten kilometres {v:is} too far." }
  ],
  examples: [
    ["{s:The quality of the products} {v:has} improved.", "تحسنت جودة المنتجات."],
    ["{s:Everyone} {v:wants} to be happy.", "الجميع يريد أن يكون سعيدًا."],
    ["{s:Each of the students} {v:has} a laptop.", "لكل طالب حاسوب."],
    ["There {v:are} many reasons for this.", "هناك أسباب كثيرة لذلك."],
    ["{s:Watching TV} {v:is} relaxing.", "مشاهدة التلفاز مريحة."]
  ],
  mistakes: [
    ["The number of tourists are increasing.", "The number of tourists is increasing.", "`the number` مفرد."],
    ["One of my brothers live in Dubai.", "One of my brothers lives in Dubai.", "الفاعل `one`."],
    ["Everybody know him.", "Everybody knows him.", "`everybody` مفرد."],
    ["There is many problems.", "There are many problems.", "الفاعل `problems` جمع."]
  ],
  ielts: {
    text: "في **Writing Task 1** جملة `The number of ... is/was` تتكرر في كل تقرير، والخطأ فيها شائع جدًا. وفي **Task 2** جمل طويلة تبعد الفاعل عن الفعل، فتأكد دائمًا من الفاعل الأساسي.",
    en: "The number of people who use public transport has fallen, while the proportion of car owners has risen."
  },
  questions: [
    { t: "mcq", q: "The number of students ___ grown this year.", o: ["have", "has", "are", "were"], a: 1, why: "`The number` مفرد." },
    { t: "mcq", q: "A number of employees ___ asked for a pay rise.", o: ["has", "have", "is", "was"], a: 1, why: "`A number of` جمع." },
    { t: "mcq", q: "One of my favourite books ___ been made into a film.", o: ["have", "has", "are", "were"], a: 1, why: "الفاعل `one`." },
    { t: "mcq", q: "Everyone in my family ___ coffee.", o: ["like", "likes", "are liking", "have liked"], a: 1, why: "`Everyone` مفرد." },
    { t: "mcq", q: "The price of these shoes ___ too high.", o: ["are", "is", "were", "have"], a: 1, why: "الفاعل `price`." },
    { t: "mcq", q: "There ___ a lot of people at the mall.", o: ["is", "are", "was", "has"], a: 1, why: "`people` جمع." },
    { t: "fill", q: "Smoking ___ (be) bad for your health.", a: ["is"], why: "`-ing` فاعلًا = مفرد." },
    { t: "fill", q: "My brother and my sister ___ (live) in Jeddah.", a: ["live"], why: "فاعلان = جمع." },
    { t: "fill", q: "Each of the rooms ___ (have) a balcony.", a: ["has"], why: "`Each` مفرد." },
    { t: "fix", q: "The results of the survey shows a clear trend.", a: ["The results of the survey show a clear trend."], why: "الفاعل `results` جمع." },
    { t: "fix", q: "Nobody know the answer.", a: ["Nobody knows the answer."], why: "`Nobody` مفرد." },
    { t: "fix", q: "There is three restaurants near my house.", a: ["There are three restaurants near my house."], why: "`are`." },
    { t: "fix", q: "The number of cars on the roads have doubled.", a: ["The number of cars on the roads has doubled."], why: "`has`." }
  ]
};
