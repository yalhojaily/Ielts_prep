window.LESSONS = window.LESSONS || {};
window.LESSONS[117] = {
  steps: [
    { k: "الفكرة", h: "كلمات تقود السامع *خطوة بخطوة*",
      why: [
        "عندما تشرح خطوات (وصفة، طريق، عملية في Task 1) أو تعرض أفكارًا، كلمات الترتيب تجعل السامع يعرف أين هو في كلامك.",
        "لكل مرحلة كلماتها: البداية، الوسط، النهاية، الخلاصة."
      ],
      show: [{ t: "chain", items: [
        { h: "البداية", en: "First, · To begin with," },
        { h: "الوسط", en: "Then, · Next, · After that," },
        { h: "النهاية", en: "Finally, · Lastly," },
        { h: "الخلاصة", en: "In conclusion, · Overall," }
      ] },
        { t: "ex", items: [["{k:First}, boil the water. {k:Then}, add the rice. {k:Finally}, add salt.", "خطوات"]] }],
      check: { q: "___, I'd like to thank everyone for coming.", o: ["Finally", "To begin with"], a: 1, why: "بداية الكلام ← `To begin with`." } },

    { k: "after that", h: "After that, … *لا* After, …",
      why: [
        "`After` حرف جر يحتاج اسمًا بعده (`after lunch`). لا يمكن أن تبدأ به جملة وحده مع فاصلة.",
        "لبدء جملة: `After that,` أو `Afterwards,`."
      ],
      show: [{ t: "fix", items: [["After, we went to the beach.", "{k:After that,} we went to the beach.", ""]] },
        { t: "ex", items: [["{k:After} lunch, we rested.", "after + اسم ✓"], ["{k:Afterwards,} we went home.", ""]] }],
      check: { q: "We visited the museum. ___, we had dinner.", o: ["After", "After that"], a: 1, why: "لبدء جملة ← `After that,`." } },

    { k: "finally أم at last", h: "Finally · In the end · At last",
      why: [
        "`Finally` = آخر نقطة في قائمة. `In the end` = النتيجة النهائية بعد فترة أو تغيير.",
        "`At last` = أخيرًا بعد انتظار طويل، مع شعور بالارتياح. ولا نستخدمها لآخر نقطة في المقال."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["Finally", "{k:Finally}, add the salt.", "آخر خطوة في قائمة", 0], ["In the end", "We planned to travel, but {k:in the end} we stayed home.", "النتيجة بعد فترة", 1], ["At last", "{k:At last}, you're here! I've been waiting for hours.", "ارتياح بعد انتظار", 2]],
        groups: [{ h: "آخر نقطة" }, { h: "النتيجة" }, { h: "ارتياح" }] },
        { t: "fix", items: [["Firstly … Secondly … At last …", "Firstly … Secondly … {k:Finally} …", ""]] }],
      check: { q: "The bus was an hour late. ___ it arrived!", o: ["Finally,", "At last,", "Both are possible"], a: 2, why: "بعد انتظار، `At last` و`Finally` كلاهما يصلحان هنا." } },

    { k: "في الكتابة", h: "Overall في Task 1 · In conclusion في Task 2",
      why: [
        "`Overall,` تبدأ الملخص العام في تقرير Task 1 (أهم اتجاه في الرسم).",
        "`In conclusion,` أو `To sum up,` في **آخر** فقرة من Task 2 فقط، لا في المنتصف. و`At the end` ليست للخاتمة."
      ],
      show: [{ t: "ex", items: [["{k:Overall}, the figures increased over the period.", "Task 1"], ["{k:In conclusion}, I believe the benefits outweigh the drawbacks.", "Task 2"]] },
        { t: "fix", items: [["At the end, I agree with this view.", "{k:In conclusion}, I agree with this view.", ""]] }],
      check: { q: "Best opening for the summary sentence in Task 1:", o: ["At the end,", "Overall,"], a: 1, why: "`Overall,` لملخص Task 1." } }
  ],
  sum: [
    { h: "البداية", en: ["First, · To begin with,"] },
    { h: "الوسط", en: ["Then, · Next, · After that,"] },
    { h: "النهاية", en: ["Finally, · In the end · At last"] },
    { h: "الخلاصة", en: ["Overall, (Task 1) · In conclusion, (Task 2)"] }
  ]
};
