window.UNITS = window.UNITS || {};
window.UNITS[85] = {
  id: 85,
  title: "“There”",
  ar: "There is / There are",
  idea: "`There is / There are` تعني «يوجد / هناك» وتُستخدم لتقديم شيء **جديد** للسامع. والفعل يطابق الاسم **بعده**: `There is a car` و`There are two cars`. وفي العربية نقول «في البيت غرفتان» بلا فعل، أما في الإنجليزية فلا بد من `There are`.",
  uses: [
    ["وجود شيء", "There is a pharmacy near my house."],
    ["في أزمنة أخرى", "There was an accident. / There will be a meeting."],
    ["مع modals", "There might be a problem. / There must be a mistake."],
    ["في السؤال والنفي", "Is there any milk? / There aren't many shops."]
  ],
  formula: [
    ["مفرد / غير معدود", "{s:There} {v:is} a book / some water."],
    ["جمع", "{s:There} {v:are} three books."],
    ["أزمنة", "{s:There} {v:was / were / has been / will be}..."],
    ["سؤال", "{v:Is} {s:there}...? · {q:How many} people {v:are} {s:there}?"]
  ],
  notes: [
    { title: "there أم it؟",
      body: "`There` لتقديم شيء جديد. `It` للإشارة إلى شيء معروف.",
      en: "{s:There}'s a new café. {s:It}'s next to the bank." },
    { title: "there أم they're أم their؟",
      body: "`there` (هناك/يوجد)، `they're` (they are)، `their` (ملكهم). نطقها واحد وكتابتها مختلفة.",
      en: "{s:There} are two cars. {s:They're} red. {s:Their} owner is Ali." },
    { title: "There has been",
      body: "صيغة المضارع التام شائعة في وصف التغيرات.",
      en: "{s:There} {v:has been} a sharp increase in prices." }
  ],
  examples: [
    ["{s:There} {v:are} many reasons for this problem.", "هناك أسباب كثيرة لهذه المشكلة."],
    ["{s:There} {v:wasn't} enough time.", "لم يكن هناك وقت كافٍ."],
    ["{v:Is} {s:there} a bank near here?", "هل يوجد بنك قريب من هنا؟"],
    ["{s:There} {v:will be} a meeting at 10.", "سيكون هناك اجتماع الساعة 10."],
    ["{s:There} {v:have been} many changes recently.", "حدثت تغييرات كثيرة مؤخرًا."]
  ],
  mistakes: [
    ["In my city have many parks.", "There are many parks in my city.", "نستخدم `There are` لا `have`."],
    ["There is many people.", "There are many people.", "الفعل يطابق `people`."],
    ["It has a big mall in Riyadh.", "There is a big mall in Riyadh.", "الوجود: `There is`."],
    ["Their are three options.", "There are three options.", "الكتابة: `There`."]
  ],
  ielts: {
    text: "خطأ `In my city have...` و`It has...` بمعنى «يوجد» من أشهر أخطاء العرب في **Speaking Part 1** عند وصف المدينة. وفي **Writing Task 1**: `There was a significant rise in...` جملة أساسية.",
    en: "There are a lot of parks in my city, and there has been a big increase in cycling recently."
  },
  questions: [
    { t: "mcq", q: "___ a good restaurant near the hotel.", o: ["It has", "There is", "There are", "Has"], a: 1, why: "وجود مفرد: `There is`." },
    { t: "mcq", q: "There ___ two mosques in our neighbourhood.", o: ["is", "are", "has", "have"], a: 1, why: "جمع: `are`." },
    { t: "mcq", q: "___ any problems yesterday?", o: ["Were there", "Was there", "There were", "Had there"], a: 0, why: "سؤال ماضٍ جمع: `Were there`." },
    { t: "mcq", q: "There ___ a big improvement since last year.", o: ["has been", "have been", "is been", "was been"], a: 0, why: "`There has been`." },
    { t: "mcq", q: "Look at those people. ___ waiting for the bus.", o: ["There", "Their", "They're", "There're"], a: 2, why: "`They're` = They are." },
    { t: "fill", q: "There ___ (be) a lot of traffic this morning.", a: ["was", "is"], why: "غير معدود: `was / is`." },
    { t: "fill", q: "How many students ___ there in your class?", a: ["are"], why: "`How many ... are there`." },
    { t: "fill", q: "There ___ (be) a meeting tomorrow at 9.", a: ["will be", "is"], why: "المستقبل: `will be`." },
    { t: "fix", q: "In my city have a lot of malls.", a: ["There are a lot of malls in my city.", "In my city, there are a lot of malls.", "In my city there are a lot of malls."], why: "`There are`." },
    { t: "fix", q: "There is three bedrooms in the flat.", a: ["There are three bedrooms in the flat."], why: "`are`." },
    { t: "fix", q: "It has a problem with my phone.", a: ["There is a problem with my phone.", "There's a problem with my phone."], why: "`There is`." },
    { t: "rewrite", q: "Riyadh has many museums. (Begin with: There ...)", ask: "أعد الصياغة.", a: ["There are many museums in Riyadh."], why: "`There are ... in Riyadh`." }
  ]
};
