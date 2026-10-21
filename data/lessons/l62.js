window.LESSONS = window.LESSONS || {};
window.LESSONS[62] = {
  steps: [
    { k: "الفكرة", h: "may · might · could = *ربما*",
      why: [
        "الثلاثة تعبّر عن احتمال في الحاضر أو المستقبل، والفرق بينها صغير جدًا.",
        "وبعدها الفعل الأصلي (لا s، لا ed). والنفي `may not / might not`."
      ],
      show: [{ t: "ex", items: [["He {a:may} {v:be} in a meeting.", "ربما هو في اجتماع"], ["The flight {a:could} {v:be} delayed.", ""], ["She {a:might not} {v:know}.", "ربما لا تعرف"]] },
        { t: "fix", items: [["He might comes.", "He {a:might} {v:come}.", ""]] }],
      check: { q: "It ___ rain this afternoon.", o: ["might", "might to", "mights"], a: 0, why: "`might` + فعل أصلي." } },

    { k: "can للعام", h: "can = *أحيانًا* يحدث (بشكل عام)",
      why: [
        "`can` في الاحتمال لا تتحدث عن موقف محدد، بل عن شيء **يحدث أحيانًا بشكل عام**.",
        "`It can be cold in winter` = في الشتاء يكون الجو باردًا أحيانًا (حقيقة عامة). `It might be cold tomorrow` = احتمال محدد عن الغد."
      ],
      show: [{ t: "compare", cols: [
        { h: "can: عام", c: "subj", en: ["Investing {a:can} {v:be} risky.", "Smoking {a:can} {v:cause} cancer."] },
        { h: "might: موقف محدد", c: "accent", en: ["This investment {a:might} {v:be} risky.", "It {a:might} {v:be} cold tomorrow."] }
      ] }],
      check: { q: "Driving in big cities ___ be stressful (in general).", o: ["can", "might have"], a: 0, why: "حقيقة عامة ← `can`." } },

    { k: "الماضي", h: "could have = كان *ممكنًا* (ولم يحدث)",
      why: [
        "`may / might have` + v3 = ربما حدث (لا نعرف).",
        "`could have` + v3 لها معنى إضافي مهم: كان ممكنًا **لكنه لم يحدث**: فرصة ضائعة، أو خطر نجونا منه."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["might have", "She {a:might have} {v:missed} the bus.", "ربما حدث، لا نعرف", 0], ["could have (فرصة)", "We {a:could have} {v:won}!", "كان ممكنًا ولم يحدث", 1], ["could have (خطر)", "You {a:could have} {v:been} killed!", "كان ممكنًا ولم يحدث", 1], ["could have (لوم)", "You {a:could have} {v:asked} me for help!", "لماذا لم تسألني؟", 1]],
        groups: [{ h: "ربما حدث" }, { h: "كان ممكنًا ولم يحدث" }] }],
      check: { q: "\"You could have told me!\" means:", o: ["Maybe you told me.", "You didn't tell me, and I'm upset."], a: 1, why: "`could have` هنا = كان ممكنًا ولم تفعل (لوم)." } },

    { k: "maybe أم may be", h: "maybe كلمة واحدة · may be فعل",
      why: [
        "`maybe` (كلمة واحدة) ظرف بمعنى «ربما»، يأتي في أول الجملة.",
        "`may be` (كلمتان) فعل ناقص + `be`، يأتي بعد الفاعل. المعنى واحد، والمكان مختلف."
      ],
      show: [{ t: "compare", cols: [{ h: "maybe: أول الجملة", c: "subj", en: ["{k:Maybe} he's right."] }, { h: "may be: بعد الفاعل", c: "accent", en: ["He {a:may be} right."] }] },
        { t: "fix", items: [["May be he is sick.", "{k:Maybe} he is sick. / He {a:may be} sick.", ""]] }],
      check: { q: "___ she's at home.", o: ["May be", "Maybe"], a: 1, why: "في أول الجملة ← الظرف `Maybe`." } }
  ],
  sum: [
    { h: "ربما", en: ["{a:may / might / could} + {v:verb}"] },
    { h: "عام", en: ["It {a:can} be cold in winter."] },
    { h: "الماضي", en: ["{a:might have} missed · {a:could have} won"] },
    { h: "انتبه", en: ["Maybe he's right. = He may be right."] }
  ]
};
