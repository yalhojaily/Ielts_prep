window.LESSONS = window.LESSONS || {};
window.LESSONS[56] = {
  steps: [
    { k: "الفكرة", h: "أفعال تضيف *معنى* للفعل",
      why: [
        "الأفعال الناقصة (`can, could, may, might, must, should, will, would, shall`) لا تقف وحدها. هي تضيف للفعل الذي بعدها معنى: قدرة، إذن، إلزام، نصيحة، احتمال.",
        "اختر الفعل الناقص وراقب كيف يتغير معنى الجملة نفسها."
      ],
      show: [{ t: "build", lab: "اختر الفعل الناقص",
        opts: [["can", "You {a:can} {v:park} here.", "مسموح / ممكن", 0], ["must", "You {a:must} {v:park} here.", "إلزام", 0], ["should", "You {a:should} {v:park} here.", "نصيحة", 0], ["might", "You {a:might} {v:park} here.", "احتمال", 0], ["can't", "You {a:can't} {v:park} here.", "ممنوع", 0]],
        groups: [{ h: "الفعل نفسه · المعنى يتغير" }] }],
      check: { q: "\"You should rest\" expresses…", o: ["ability", "advice", "obligation"], a: 1, why: "`should` = نصيحة." } },

    { k: "ثلاث قواعد", h: "قواعد ثابتة لكل الناقصة",
      why: [
        "**1.** لا تتغير مع الفاعل: لا s مع she (`she can`، لا `cans`).",
        "**2.** بعدها فعل أصلي **بلا to** (`must finish`، لا `must to finish`).",
        "**3.** تكوّن السؤال والنفي بنفسها، بلا `do` (`Can you…?`، لا `Do you can…?`)."
      ],
      show: [{ t: "fix", items: [["She cans speak English.", "She {a:can} {v:speak} English.", "قاعدة 1"], ["You must to finish it.", "You {a:must} {v:finish} it.", "قاعدة 2"], ["Do you can help me?", "{a:Can} you {v:help} me?", "قاعدة 3"]] }],
      check: { q: "He ___ swim very well.", o: ["cans", "can", "can to"], a: 1, why: "الفعل الناقص لا يتغير، وبعده فعل أصلي." } },

    { k: "شبه الناقصة", h: "have to · be able to · ought to",
      why: [
        "هذه تقوم بعمل مشابه للناقصة، لكنها **تتغير** مع الفاعل والزمن وتأخذ `to`.",
        "فائدتها: الناقصة لا تجتمع مع بعضها (`will can` خطأ)، فنستخدم الشبيهة: `will be able to`."
      ],
      show: [{ t: "ex", items: [["She {a:has to} {v:work}.", "تتغير مع she"], ["I {a:was able to} {v:finish}.", "لها ماضٍ"], ["You {a:ought to} {v:apologise}.", "= should"], ["I {a:will be able to} {v:help} tomorrow.", "بدل will can"]] }],
      check: { q: "I ___ come tomorrow.", o: ["will can", "will be able to"], a: 1, why: "لا يجتمع فعلان ناقصان ← `will be able to`." } },

    { k: "الماضي", h: "modal + have + v3 للماضي",
      why: [
        "الأفعال الناقصة ليس لها شكل ماضٍ عادي. للتعبير عن الماضي نضيف `have` + التصريف الثالث.",
        "`should have called` = كان يجب أن تتصل (ولم تفعل). `might have forgotten` = ربما نسيت."
      ],
      show: [{ t: "formula", rows: [["كان يجب (ولم يحدث)", "You {a:should have} {v:told} me."], ["ربما حدث", "She {a:might have} {v:forgotten}."], ["متأكد أنه حدث", "He {a:must have} {v:left}."]] }],
      check: { q: "You ___ me. I would have helped.", o: ["should tell", "should have told"], a: 1, why: "لوم على الماضي ← `should have` + v3." } }
  ],
  sum: [
    { h: "المعاني", en: ["can · must · should · might · may"] },
    { h: "القواعد", txt: "لا s · بلا to · بلا do" },
    { h: "شبه الناقصة", en: ["has to · was able to · ought to"] },
    { h: "الماضي", en: ["{a:should have} {v:told}"] }
  ]
};
