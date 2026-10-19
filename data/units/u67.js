window.UNITS = window.UNITS || {};
window.UNITS[67] = {
  id: 67,
  title: "“Each / every”",
  ar: "Each و Every",
  idea: "كلاهما يأتي مع **اسم مفرد وفعل مفرد**. `each` = كل واحد على حدة (نركز على الأفراد، ويصلح لاثنين). `every` = الجميع كمجموعة (ثلاثة فأكثر)، ويُستخدم للتكرار (`every day`).",
  uses: [
    ["each: كل فرد على حدة", "Each student has a locker."],
    ["every: الجميع ككل", "Every student must attend."],
    ["every للتكرار", "every day, every two weeks, every Friday"],
    ["each of + جمع", "Each of the rooms has a balcony."]
  ],
  formula: [
    ["each / every", "{x:each / every} + singular noun + {v:singular verb}"],
    ["each of", "{x:each of} + the / my / them + plural noun + {v:singular verb}"],
    ["every + رقم", "{x:every} {x:three} days · {x:every} {x:other} week"]
  ],
  notes: [
    { title: "every لا تأتي مع of",
      body: "نقول `each of the students` لكن `every one of the students` (كلمتان).",
      en: "{x:Each of} them · {x:Every one of} them (not: every of them)" },
    { title: "each في آخر الجملة",
      body: "`each` يمكن أن تأتي وحدها بمعنى «لكل واحد».",
      en: "The tickets cost 50 riyals {x:each}." },
    { title: "everyday كلمة واحدة",
      body: "`everyday` صفة (يومي): `everyday life`. و`every day` ظرف (كل يوم).",
      en: "I exercise {x:every day}. · It's an {x:everyday} problem." }
  ],
  examples: [
    ["{x:Every} child {v:needs} love.", "كل طفل يحتاج إلى الحب."],
    ["{x:Each} player {v:gets} a medal.", "كل لاعب يحصل على ميدالية."],
    ["The bus comes {x:every} 15 minutes.", "تأتي الحافلة كل 15 دقيقة."],
    ["{x:Each of} my sons {v:has} his own room.", "لكل واحد من أبنائي غرفته."],
    ["She had a bag in {x:each} hand.", "كانت تحمل حقيبة في كل يد."]
  ],
  mistakes: [
    ["Every students passed.", "Every student passed.", "بعد every اسم مفرد."],
    ["Each of the boys have a bike.", "Each of the boys has a bike.", "الفعل مفرد."],
    ["Every of them came.", "Every one of them came. / Each of them came.", "لا `every of`."],
    ["I go to the gym everyday.", "I go to the gym every day.", "الظرف كلمتان."]
  ],
  ielts: {
    text: "في **Writing** خطأ التطابق `Every people` و`Each of them have` يتكرر. وفي **Speaking Part 1** عبارات التكرار `every morning`, `every other day`, `once every two weeks` مهمة.",
    en: "I go running every other day, and I try to read for at least half an hour every evening."
  },
  questions: [
    { t: "mcq", q: "___ student has to wear a uniform.", o: ["All", "Every", "Each of", "Every of"], a: 1, why: "`Every` + مفرد." },
    { t: "mcq", q: "Each of the rooms ___ a TV.", o: ["have", "has", "having", "are having"], a: 1, why: "فعل مفرد: `has`." },
    { t: "mcq", q: "She had a ring on ___ hand. (two hands)", o: ["every", "each", "all", "both of"], a: 1, why: "لاثنين: `each`." },
    { t: "mcq", q: "The tickets were 20 riyals ___.", o: ["every", "each", "all", "every one"], a: 1, why: "`each` في النهاية." },
    { t: "mcq", q: "I check my emails ___.", o: ["everyday", "every day", "each days", "every days"], a: 1, why: "الظرف: `every day`." },
    { t: "fill", q: "___ of the children received a gift.", a: ["Each"], why: "`Each of`." },
    { t: "fill", q: "The Olympics take place ___ four years.", a: ["every"], why: "تكرار: `every four years`." },
    { t: "fill", q: "Every employee ___ (have) a parking space.", a: ["has"], why: "فعل مفرد." },
    { t: "fix", q: "Every people likes holidays.", a: ["Everybody likes holidays.", "Everyone likes holidays.", "Every person likes holidays."], why: "`every` + مفرد." },
    { t: "fix", q: "Each of my friends have a car.", a: ["Each of my friends has a car."], why: "`has`." },
    { t: "fix", q: "Every of the students passed.", a: ["Every one of the students passed.", "Each of the students passed.", "All of the students passed.", "All the students passed."], why: "لا `every of`." },
    { t: "rewrite", q: "All the houses in this street have a garden. (Begin with: Every ...)", ask: "أعد الصياغة.", a: ["Every house in this street has a garden."], why: "`Every house ... has`." }
  ]
};
