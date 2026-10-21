window.LESSONS = window.LESSONS || {};
window.LESSONS[61] = {
  steps: [
    { k: "الفكرة", h: "تستنتج من *دليل* أمامك",
      why: [
        "أحيانًا لا تعرف الحقيقة، لكنك ترى دليلًا وتستنتج. الفعل الناقص يعبّر عن **درجة يقينك**:",
        "`must` = متأكد أنه صحيح (95%). `might / may / could` = ممكن (50%). `can't` = متأكد أنه غير صحيح."
      ],
      show: [{ t: "scale", cap: "اضغط لترى درجة اليقين",
        items: [["can't", 5, "مستحيل", "`That can't be Ali. He's in London.` (متأكد أنه ليس هو)"], ["might / may / could", 50, "ممكن", "`She might be at the gym.` (لست متأكدًا)"], ["must", 95, "متأكد", "`He's worked all day. He must be tired.` (الدليل قوي)"]],
        lines: ["He [] be tired."], start: 2 }],
      check: { q: "He's been working for 12 hours. He ___ be exhausted.", o: ["must", "can't", "mustn't"], a: 0, why: "دليل قوي ← متأكد ← `must`." } },

    { k: "عكس must", h: "عكس must هنا هو *can't*",
      why: [
        "في الاستنتاج، عكس `must` (متأكد أنه صحيح) هو `can't` (متأكد أنه خطأ).",
        "`mustn't` معناها **المنع** (الدرس 60)، ولا علاقة لها بالاستنتاج."
      ],
      show: [{ t: "compare", cols: [
        { h: "must = متأكد أنه صحيح", c: "verb", en: ["The lights are off. They {a:must} {v:be} out."] },
        { h: "can't = متأكد أنه خطأ", c: "neg", en: ["You {a:can't} {v:be} hungry. You've just eaten!"] }
      ] },
        { t: "fix", items: [["He mustn't be at home. The car isn't there.", "He {a:can't} {v:be} at home.", ""]] }],
      check: { q: "It ___ be 5 o'clock already! We just had lunch.", o: ["mustn't", "can't"], a: 1, why: "متأكد أنه غير صحيح ← `can't`." } },

    { k: "الآن يجري", h: "must be + ing",
      why: ["إذا كان استنتاجك عن شيء **يجري الآن**، استخدم `must / might be` + `ing`."],
      show: [{ t: "ex", items: [["He's not answering. He {a:might} {a:be} {v:driving}.", ""], ["She {a:must} {a:be} {v:sleeping}. Her light is off.", ""]] }],
      check: { q: "Don't call her now. She ___ be sleeping.", o: ["might", "mustn't"], a: 0, why: "احتمال عن شيء يجري الآن ← `might be sleeping`." } },

    { k: "الماضي", h: "must have + v3 للاستنتاج عن الماضي",
      why: [
        "للاستنتاج عن شيء حدث في الماضي، أضف `have` + التصريف الثالث.",
        "الأرض مبللة ← لا بد أنها أمطرت: `It must have rained.` و`can't have / couldn't have` = مستحيل أنه حدث."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["must have", "The ground is wet. It {a:must have} {v:rained}.", "متأكد", 0], ["might have", "She's late. She {a:might have} {v:missed} the bus.", "ممكن", 0], ["can't have", "She {a:can't have} {v:seen} me. I was hiding.", "مستحيل", 0]],
        groups: [{ h: "modal + have + v3" }] },
        { t: "fix", items: [["She must be forgot.", "She {a:must have} {v:forgotten}.", ""], ["It might rained yesterday.", "It {a:might have} {v:rained} yesterday.", ""]] }],
      check: { q: "He didn't come. He ___ forgotten.", o: ["must be", "must have", "must"], a: 1, why: "استنتاج عن الماضي ← `must have` + v3." } }
  ],
  sum: [
    { h: "متأكد صحيح", en: ["He {a:must} be tired."] },
    { h: "ممكن", en: ["She {a:might} be at the gym."] },
    { h: "متأكد خطأ", en: ["That {a:can't} be Ali."] },
    { h: "الماضي", en: ["It {a:must have} {v:rained}."] }
  ]
};
