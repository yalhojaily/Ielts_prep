window.UNITS = window.UNITS || {};
window.UNITS[113] = {
  id: 113,
  title: "Linking words overview",
  ar: "مراجعة أدوات الربط",
  idea: "الأهم معرفة **موقع** كل أداة: داخل الجملة (`and, but, so, because, although`) أم في أولها كجملة جديدة (`However, Therefore, In addition`) أم قبل اسم (`despite, because of, due to, such as`). والقاعدة الذهبية: **أداة واحدة لكل علاقة**.",
  uses: [
    ["تناقض", "but / although / however / despite / whereas"],
    ["سبب", "because / as / since / because of / due to"],
    ["نتيجة", "so / therefore / as a result / consequently"],
    ["إضافة", "and / also / in addition / moreover / as well as"]
  ],
  formula: [
    ["+ جملة (داخل)", "{x:but, so, because, although, while, whereas}"],
    ["جملة جديدة + ,", "{x:However, Therefore, Moreover, As a result, In contrast}"],
    ["+ اسم / -ing", "{x:despite, in spite of, because of, due to, as well as, such as}"]
  ],
  notes: [
    { title: "أداة واحدة",
      body: "لا: `Although ... but`، `Because ... so`، `Despite of`.",
      en: "{x:Although} it was cheap, the quality was good." },
    { title: "due to + اسم",
      body: "`due to` مثل `because of`، بعدها اسم، وهي أرسمية.",
      en: "The flight was delayed {x:due to} bad weather." },
    { title: "خطة الفقرة",
      body: "فكرة رئيسية ← `For example,` مثال ← `As a result,` نتيجة ← `However,` رأي مخالف.",
      en: "" }
  ],
  examples: [
    ["{x:Due to} the heat, the match was postponed.", "بسبب الحر تأجلت المباراة."],
    ["{x:Despite} studying hard, he failed.", "رغم المذاكرة بجد، رسب."],
    ["Prices rose. {x:Therefore}, demand fell.", "ارتفعت الأسعار، ولذلك انخفض الطلب."],
    ["She speaks French {x:as well as} English.", "تتحدث الفرنسية إضافة إلى الإنجليزية."],
    ["Asia grew quickly, {x:whereas} Europe grew slowly.", "نمت آسيا بسرعة بينما نمت أوروبا ببطء."]
  ],
  mistakes: [
    ["Because of it was late, we left.", "Because it was late, we left. / Because of the time, we left.", "`because of` + اسم."],
    ["Due to the traffic was bad.", "Due to the bad traffic, ... / Because the traffic was bad, ...", "`due to` + اسم."],
    ["In addition of this, ...", "In addition to this, ...", "`in addition to`."],
    ["Despite of the cost", "Despite the cost / In spite of the cost", "بلا of."]
  ],
  ielts: {
    text: "قبل التسليم في **Writing** افحص كل أداة: هل العلاقة صحيحة (سبب/نتيجة/تناقض)؟ هل موقعها صحيح؟ هل جمعت أداتين؟ هذا الفحص وحده يمنع أخطاء كثيرة في **Coherence and Cohesion**.",
    en: "Due to rising costs, many families cannot afford housing. As a result, governments should provide support. However, this would require higher taxes."
  },
  questions: [
    { t: "mcq", q: "The match was cancelled ___ the storm.", o: ["because", "due to", "although", "so"], a: 1, why: "+ اسم: `due to`." },
    { t: "mcq", q: "___ she was tired, she kept working.", o: ["Despite", "Although", "However", "Because of"], a: 1, why: "+ جملة: `Although`." },
    { t: "mcq", q: "Prices fell. ___, sales increased.", o: ["As a result", "Although", "Because", "Despite"], a: 0, why: "نتيجة: `As a result`." },
    { t: "mcq", q: "He speaks Spanish ___ Italian.", o: ["as well as", "as well", "also", "moreover"], a: 0, why: "`as well as`." },
    { t: "mcq", q: "Ali is quiet, ___ his brother is very talkative.", o: ["whereas", "therefore", "despite", "so"], a: 0, why: "مقارنة: `whereas`." },
    { t: "mcq", q: "___ the high price, the phone sold well.", o: ["Although", "Despite", "However", "Because"], a: 1, why: "+ اسم: `Despite`." },
    { t: "fill", q: "In addition ___ this, the plan saves money.", a: ["to"], why: "`in addition to`." },
    { t: "fill", q: "We stayed inside because ___ the rain.", a: ["of"], why: "`because of`." },
    { t: "fill", q: "It was very cold. ___, we went swimming. (contrast)", a: ["However", "Nevertheless", "Nonetheless"], why: "تناقض في أول الجملة." },
    { t: "fix", q: "Because of the traffic was heavy, I was late.", a: ["Because the traffic was heavy, I was late.", "Because of the heavy traffic, I was late."], why: "`because` + جملة." },
    { t: "fix", q: "Despite of the cold, we went out.", a: ["Despite the cold, we went out.", "In spite of the cold, we went out."], why: "بلا of." },
    { t: "fix", q: "Although the exam was hard, but I passed.", a: ["Although the exam was hard, I passed.", "The exam was hard, but I passed."], why: "أداة واحدة." },
    { t: "rewrite", q: "The flight was delayed because the weather was bad. (Use: due to)", ask: "أعد الصياغة.", a: ["The flight was delayed due to the bad weather.", "The flight was delayed due to bad weather."], why: "`due to` + اسم." }
  ]
};
