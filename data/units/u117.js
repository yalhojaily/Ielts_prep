window.UNITS = window.UNITS || {};
window.UNITS[117] = {
  id: 117,
  title: "Sequencing and organizing",
  ar: "ترتيب الأفكار وتنظيم الكلام",
  idea: "كلمات الترتيب تساعد السامع أو القارئ على متابعة **تسلسل** الأفكار أو الخطوات: `First, Then, Next, After that, Finally`. وكلمات التنظيم تقدّم الفكرة وتلخصها: `To begin with, In conclusion, To sum up`.",
  uses: [
    ["بداية", "First, Firstly, To begin with, First of all"],
    ["وسط", "Then, Next, After that, Secondly, Subsequently"],
    ["نهاية", "Finally, Lastly, In the end"],
    ["خلاصة", "In conclusion, To sum up, Overall"]
  ],
  formula: [
    ["خطوات", "{x:First}, ... {x:Then}, ... {x:After that}, ... {x:Finally}, ..."],
    ["أفكار", "{x:Firstly}, ... {x:Secondly}, ... {x:Finally}, ..."],
    ["خلاصة", "{x:In conclusion}, ... · {x:Overall}, ... (Task 1)"]
  ],
  notes: [
    { title: "finally أم in the end أم at last؟",
      body: "`Finally` = آخر نقطة في قائمة. `In the end` = النتيجة بعد فترة. `At last` = أخيرًا بعد انتظار طويل (ارتياح).",
      en: "{x:Finally}, add salt. · {x:In the end}, we stayed home. · {x:At last}, you're here!" },
    { title: "after that لا after",
      body: "`After` حرف جر يحتاج اسمًا. لبدء جملة نستخدم `After that,` أو `Afterwards,`.",
      en: "{x:After that}, we went home. (not: After, we went home)" },
    { title: "Overall في Task 1",
      body: "`Overall` لبداية الملخص العام في تقرير **Task 1**.",
      en: "{x:Overall}, the figures increased over the period." }
  ],
  examples: [
    ["{x:First}, boil the water. {x:Then}, add the rice.", "أولًا اغلِ الماء، ثم أضف الرز."],
    ["{x:To begin with}, I'd like to thank everyone.", "في البداية أود أن أشكر الجميع."],
    ["{x:After that}, we visited the old town.", "بعد ذلك زرنا المدينة القديمة."],
    ["{x:In the end}, we decided not to go.", "في النهاية قررنا ألا نذهب."],
    ["{x:In conclusion}, both sides have valid points.", "في الختام، لكل طرف حجج وجيهة."]
  ],
  mistakes: [
    ["After, we went to the beach.", "After that, we went to the beach.", "`After that,`."],
    ["At the end, I agree with this view.", "In conclusion, I agree with this view.", "للخلاصة: `In conclusion`."],
    ["Firstly ... Secondly ... At last ...", "Firstly ... Secondly ... Finally ...", "`Finally` للقائمة."],
    ["In conclusion (in the middle of the essay)", "Furthermore / Moreover", "`In conclusion` للخاتمة فقط."]
  ],
  ielts: {
    text: "في **Writing Task 1 (Process)** كلمات الترتيب أساسية: `First, Next, Subsequently, Finally`. وفي **Speaking Part 2** تساعد على تنظيم القصة: `To begin with... Then... In the end...`.",
    en: "First, the leaves are picked by hand. Next, they are dried in the sun. Finally, they are packed and shipped."
  },
  questions: [
    { t: "mcq", q: "___, wash your hands. Then, prepare the vegetables.", o: ["Finally", "First", "In conclusion", "After"], a: 1, why: "البداية: `First`." },
    { t: "mcq", q: "We had lunch. ___, we went shopping.", o: ["After", "After that", "Finally of all", "At last"], a: 1, why: "`After that`." },
    { t: "mcq", q: "We waited three hours. ___, the bus arrived!", o: ["Finally", "At last", "In conclusion", "Firstly"], a: 1, why: "بعد انتظار: `At last`." },
    { t: "mcq", q: "___, I believe that education should be free. (end of essay)", o: ["At the end", "In conclusion", "Lastly of all", "After that"], a: 1, why: "`In conclusion`." },
    { t: "mcq", q: "___, the number of tourists rose over the period. (Task 1 summary)", o: ["Overall", "First", "At last", "Then"], a: 0, why: "`Overall`." },
    { t: "fill", q: "To ___ with, I want to explain the background.", a: ["begin", "start"], why: "`To begin with`." },
    { t: "fill", q: "We argued for hours, but in the ___ we agreed.", a: ["end"], why: "`in the end`." },
    { t: "fill", q: "To sum ___, there are advantages and disadvantages.", a: ["up"], why: "`To sum up`." },
    { t: "fix", q: "After, we drove back to the hotel.", a: ["After that, we drove back to the hotel.", "Afterwards, we drove back to the hotel.", "Then, we drove back to the hotel."], why: "`After that`." },
    { t: "fix", q: "At the end, I think the benefits outweigh the drawbacks.", a: ["In conclusion, I think the benefits outweigh the drawbacks.", "To sum up, I think the benefits outweigh the drawbacks."], why: "`In conclusion`." },
    { t: "fix", q: "At last, put the cake in the oven for 30 minutes. (the last step of a recipe)", a: ["Finally, put the cake in the oven for 30 minutes.", "Lastly, put the cake in the oven for 30 minutes."],
      why: "آخر خطوة في قائمة: `Finally`. أما `At last` فبعد انتظار طويل." }
  ]
};
