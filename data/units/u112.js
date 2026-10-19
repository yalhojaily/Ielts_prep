window.UNITS = window.UNITS || {};
window.UNITS[112] = {
  id: 112,
  title: "More linking words",
  ar: "أدوات ربط أخرى (بين الجمل)",
  idea: "هذه الأدوات تربط **جملة كاملة بجملة سابقة**، وتأتي غالبًا في **أول الجملة الثانية متبوعة بفاصلة**: `However, Therefore, In addition, As a result, For example, On the other hand`. وهي أساس الكتابة الأكاديمية.",
  uses: [
    ["إضافة", "In addition, Furthermore, Moreover, Also"],
    ["تناقض", "However, Nevertheless, On the other hand, In contrast"],
    ["نتيجة", "Therefore, As a result, Consequently, Thus"],
    ["أمثلة", "For example, For instance, such as"]
  ],
  formula: [
    ["البداية", "Sentence. {x:However}{x:,} sentence."],
    ["بعد ;", "Sentence{x:;} {x:however}{x:,} sentence."],
    ["such as", "sports {x:such as} football and tennis (لا فاصلة بعدها)"]
  ],
  notes: [
    { title: "however ليست but",
      body: "`but` تربط داخل الجملة. `However` تبدأ جملة جديدة بعد نقطة.",
      en: "It's cheap, {x:but} it's slow. · It's cheap. {x:However}, it's slow." },
    { title: "for example أم such as؟",
      body: "`For example,` + جملة كاملة. `such as` + أسماء.",
      en: "{x:For example}, Japan has fast trains. · countries {x:such as} Japan" },
    { title: "لا تفرط",
      body: "لا تبدأ كل جملة بأداة ربط. اثنتان أو ثلاث في الفقرة كافية.",
      en: "" }
  ],
  examples: [
    ["Public transport is cheap. {x:In addition}, it reduces pollution.", "النقل العام رخيص. إضافة إلى ذلك، يقلل التلوث."],
    ["The plan was good. {x:However}, it was too expensive.", "كانت الخطة جيدة. لكنها كانت مكلفة جدًا."],
    ["He didn't study. {x:As a result}, he failed.", "لم يذاكر. ونتيجة لذلك رسب."],
    ["Many sports, {x:such as} swimming and cycling, are good for the heart.", "كثير من الرياضات، مثل السباحة وركوب الدراجة، مفيدة للقلب."],
    ["Some prefer cities. {x:On the other hand}, others enjoy rural life.", "البعض يفضل المدن. من ناحية أخرى، يستمتع آخرون بالريف."]
  ],
  mistakes: [
    ["However it is cheap, it is slow.", "Although it is cheap, it is slow. / It is cheap. However, it is slow.", "`However` لا تأتي كـ although."],
    ["For example football and tennis.", "For example, football and tennis are popular. / Sports such as football and tennis.", "`For example` + جملة."],
    ["Moreover, but it is expensive.", "However, it is expensive.", "لا نجمع أداتين."],
    ["Firstly, ... Secondly, ... Lastly of all, ...", "Firstly, ... Secondly, ... Finally, ...", "`Finally`."]
  ],
  ielts: {
    text: "هذه الأدوات تمثل جزءًا كبيرًا من درجة **Coherence and Cohesion** في **Writing Task 2**. لكن الإفراط فيها (`Moreover, Furthermore, In addition` في كل جملة) يُحسب ضدك. استخدمها حين تخدم الربط فعلًا.",
    en: "Working from home saves time. Moreover, it allows people to spend more time with their families. However, it can be isolating."
  },
  questions: [
    { t: "mcq", q: "The hotel was beautiful. ___, it was very expensive.", o: ["Moreover", "However", "Therefore", "For example"], a: 1, why: "تناقض: `However`." },
    { t: "mcq", q: "He trained every day. ___, he won the race.", o: ["However", "In contrast", "As a result", "Such as"], a: 2, why: "نتيجة: `As a result`." },
    { t: "mcq", q: "Exercise improves health. ___, it reduces stress.", o: ["In addition", "However", "Therefore", "Instead"], a: 0, why: "إضافة: `In addition`." },
    { t: "mcq", q: "I enjoy outdoor activities ___ hiking and camping.", o: ["for example", "such as", "for instance,", "like as"], a: 1, why: "+ أسماء: `such as`." },
    { t: "mcq", q: "The roads were icy. ___, many schools closed.", o: ["Consequently", "Nevertheless", "Moreover", "In contrast"], a: 0, why: "نتيجة: `Consequently`." },
    { t: "fill", q: "Cars are convenient. On the other ___, they cause pollution.", a: ["hand"], why: "`On the other hand`." },
    { t: "fill", q: "Many countries, ___ example Japan, have ageing populations.", a: ["for"], why: "`for example`." },
    { t: "fill", q: "The plan was risky. ___, they decided to go ahead. (= despite this)", a: ["Nevertheless", "However", "Nonetheless"], why: "`Nevertheless`." },
    { t: "fix", q: "However it was raining, we played.", a: ["Although it was raining, we played.", "It was raining. However, we played."], why: "`Although`." },
    { t: "fix", q: "I like sports. For example football.", a: ["I like sports, for example football.", "I like sports such as football.", "I like sports. For example, I like football."], why: "`For example` لا تأتي وحدها مع اسم." },
    { t: "fix", q: "The price is high. But, many people buy it.", a: ["The price is high. However, many people buy it.", "The price is high, but many people buy it."], why: "`However,` في أول الجملة." },
    { t: "rewrite", q: "He didn't sleep well, so he was tired. (Use: As a result)", ask: "اكتب جملتين.", a: ["He didn't sleep well. As a result, he was tired.", "He did not sleep well. As a result, he was tired."], why: "`As a result,`." }
  ]
};
