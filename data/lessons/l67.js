window.LESSONS = window.LESSONS || {};
window.LESSONS[67] = {
  steps: [
    { k: "الفكرة", h: "each و every + *مفرد* دائمًا",
      why: [
        "في العربية «كل الطلاب» بالجمع. في الإنجليزية `each` و`every` تنظران إلى الأشخاص **واحدًا واحدًا**، لذلك بعدهما اسم **مفرد** وفعل **مفرد**.",
        "`Every student has…` وليس `Every students have`."
      ],
      show: [{ t: "big", items: ["{k:Every} {s:student} {v:has} a locker."], cap: "مفرد + فعل مفرد" },
        { t: "fix", items: [["Every students passed.", "{k:Every} student passed.", ""], ["Each of the boys have a bike.", "{k:Each of} the boys {v:has} a bike.", "الفعل مفرد"]] }],
      check: { q: "Every child ___ love.", o: ["need", "needs"], a: 1, why: "`Every` + مفرد + فعل مفرد: `needs`." } },

    { k: "each أم every", h: "كل واحد *على حدة* أم الجميع *معًا*؟",
      why: [
        "`each` تركّز على **الأفراد** واحدًا واحدًا، وتصلح حتى لشيئين (كل يد من يديّ).",
        "`every` تنظر إلى **المجموعة كلها** (ثلاثة فأكثر)، وتُستخدم للتكرار: `every day, every Friday, every two weeks`."
      ],
      show: [{ t: "compare", cols: [
        { h: "each: كل واحد", c: "subj", en: ["{k:Each} player gets a medal.", "She had a ring on {k:each} hand.", "They cost 50 riyals {k:each}."] },
        { h: "every: الجميع / التكرار", c: "accent", en: ["{k:Every} student must attend.", "The bus comes {k:every} 15 minutes."] }
      ] }],
      check: { q: "She wore a bracelet on ___ wrist (two wrists).", o: ["every", "each"], a: 1, why: "لشيئين فقط ← `each`." } },

    { k: "مع of", h: "each of ✓ · every of ✗",
      why: [
        "`each` تأتي مع `of` + جمع محدد: `each of the rooms`.",
        "`every` لا تأتي مع `of` مباشرة. نقول `every one of` (كلمتان)."
      ],
      show: [{ t: "ex", items: [["{k:Each of} the rooms has a balcony.", ""], ["{k:Every one of} them came.", ""]] },
        { t: "fix", items: [["Every of them came.", "{k:Every one of} them came. / {k:Each of} them came.", ""]] }],
      check: { q: "___ of the students has a laptop.", o: ["Every", "Each"], a: 1, why: "مع `of` ← `Each`." } },

    { k: "everyday", h: "every day (ظرف) ≠ everyday (صفة)",
      why: [
        "`every day` كلمتان = كل يوم (متى؟).",
        "`everyday` كلمة واحدة = يومي، عادي، وتأتي قبل اسم: `everyday life`."
      ],
      show: [{ t: "compare", cols: [{ h: "every day = كل يوم", c: "subj", en: ["I exercise {k:every day}."] }, { h: "everyday = يومي", c: "accent", en: ["It's an {k:everyday} problem.", "{k:everyday} life"] }] }],
      check: { q: "I go to the gym ___.", o: ["everyday", "every day"], a: 1, why: "بمعنى كل يوم ← كلمتان." } }
  ],
  sum: [
    { h: "مفرد", en: ["{k:Every} child {v:needs}…"] },
    { h: "each", en: ["كل واحد · لشيئين · each of"] },
    { h: "every", en: ["الجميع · every day · every 2 weeks"] },
    { h: "انتبه", en: ["every day ≠ everyday"] }
  ]
};
