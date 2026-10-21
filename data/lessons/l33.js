window.LESSONS = window.LESSONS || {};
window.LESSONS[33] = {
  steps: [
    { k: "الفكرة", h: "wish = أتمنى لو كان الواقع *مختلفًا*",
      why: [
        "`wish` تعبّر عن شيء غير حقيقي: أتمنى شيئًا ليس موجودًا. ولأن الكلام بعيد عن الواقع، **نرجع زمنًا إلى الوراء** (نفس فكرة النوع 2 و3 في الشرط).",
        "للحاضر ← ماضٍ بسيط. للماضي ← ماضٍ تام."
      ],
      show: [{ t: "build", lab: "عن أي وقت تتمنى؟",
        opts: [["الحاضر", "I {a:wish} I {v:lived} closer to work.", "الواقع: أسكن بعيدًا الآن", 0], ["الحاضر (be)", "I {a:wish} I {v:were} taller.", "`were` مع كل الضمائر", 0],
               ["الماضي", "I {a:wish} I {a:had} {v:studied} harder.", "الواقع: لم أدرس (ندم)", 1], ["قدرة", "I {a:wish} I {a:could} {v:speak} French.", "الواقع: لا أستطيع", 0]],
        groups: [{ h: "عن الحاضر", res: "wish + past" }, { h: "عن الماضي (ندم)", res: "wish + had + v3" }] }],
      check: { q: "I wish I ___ a bigger house.", o: ["have", "had", "will have"], a: 1, why: "تمنٍّ عن الحاضر ← الماضي البسيط `had`." } },

    { k: "الندم", h: "wish + had + v3 للماضي",
      why: [
        "الماضي انتهى ولا يمكن تغييره، والتمني عنه ندم. نرجع خطوة: الماضي البسيط يصبح ماضيًا تامًا.",
        "وطرق أخرى للندم: `I regret + ing`، و`I should have + v3`."
      ],
      show: [{ t: "compare", cols: [
        { h: "الواقع", c: "subj", en: ["I sold those shares."] },
        { h: "الندم", c: "accent", en: ["I {a:wish} I {a:hadn't} {v:sold} them.", "I {v:regret} {v:selling} them.", "I {a:should have} {v:kept} them."] }
      ] }],
      check: { q: "I wish I ___ so much yesterday.", o: ["didn't eat", "hadn't eaten"], a: 1, why: "ندم على الماضي ← `hadn't eaten`." } },

    { k: "wish + would", h: "انزعاج من سلوك *شخص آخر*",
      why: [
        "`wish + would` تعبّر عن انزعاجك من شيء يفعله غيرك، وتمنيك أن يتغير.",
        "لا تستعملها مع نفسك: لا `I wish I would`، بل `I wish I could`."
      ],
      show: [{ t: "ex", items: [["I {a:wish} you {a:would} {v:stop} talking.", "أتمنى أن تتوقف (أنا منزعج)"], ["I {a:wish} he {a:would} {v:call} me.", ""]] },
        { t: "fix", items: [["I wish I would speak English well.", "I wish I {a:could} {v:speak} English well.", ""]] }],
      check: { q: "I wish my neighbours ___ so much noise.", o: ["wouldn't make", "don't make"], a: 0, why: "انزعاج من سلوك آخرين ← `wish + would`." } },

    { k: "If only", h: "If only = wish بعاطفة أقوى",
      why: ["`If only` لها نفس قواعد `wish` تمامًا، لكنها أكثر عاطفية وتأتي غالبًا مع علامة تعجب."],
      show: [{ t: "big", items: ["{k:If only} I {a:had} {v:known}!", "{k:If only} we {a:had} {v:bought} that land!"] }],
      check: { q: "If only I ___ more time now!", o: ["have", "had", "had had"], a: 1, why: "عن الحاضر ← الماضي البسيط `had`." } },

    { k: "hope أم wish", h: "hope للممكن، wish للمستحيل",
      why: [
        "`hope` لشيء **ممكن** أن يحدث، وبعدها الزمن العادي (لا نرجع).",
        "`wish` لشيء غير واقعي. لذلك نقول `I hope you pass`، لا `I wish you pass`."
      ],
      show: [{ t: "compare", cols: [
        { h: "hope: ممكن", c: "verb", en: ["I {v:hope} you {v:pass} the exam."] },
        { h: "wish: غير واقعي", c: "accent", en: ["I {a:wish} I {v:were} younger."] }
      ] }],
      check: { q: "I ___ you have a great trip!", o: ["wish", "hope"], a: 1, why: "شيء ممكن الحدوث ← `hope`." } }
  ],
  sum: [
    { h: "الحاضر", en: ["I {a:wish} I {v:had} more time."] },
    { h: "الماضي", en: ["I {a:wish} I {a:had} {v:listened}."] },
    { h: "انزعاج", en: ["I {a:wish} you {a:would} {v:stop}."] },
    { h: "hope", en: ["I {v:hope} you {v:pass}."] }
  ]
};
