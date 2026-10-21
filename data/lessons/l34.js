window.LESSONS = window.LESSONS || {};
window.LESSONS[34] = {
  steps: [
    { k: "القاعدة العامة", h: "المساعد *يتقدم* على الفاعل",
      why: [
        "قاعدة واحدة لكل الأزمنة: ابحث في الجملة عن فعل مساعد (`be, have, will, can, should`…) وقدّمه على الفاعل.",
        "إذا لم تجد مساعدًا (جملة بفعل عادي فقط)، أضف `do / does / did`."
      ],
      show: [{ t: "decide", q: "هل في الجملة فعل مساعد أو be؟",
        opts: [
          { lab: "نعم", h: "قدّمه على الفاعل", en: ["She {a:is} tired. → {a:Is} she tired?", "You {a:can} swim. → {a:Can} you swim?"], c: "be" },
          { lab: "لا", h: "أضف do / does / did", en: ["He {v:works}. → {a:Does} he {v:work}?", "They {v:left}. → {a:Did} they {v:leave}?"], c: "verb" }
        ] }],
      check: { q: "Choose the correct question.", o: ["Do you can help me?", "Can you help me?"], a: 1, why: "`can` مساعد، فنقدمه مباشرة بدون do." } },

    { k: "جرّب", h: "اختر الجملة وراقب السؤال",
      why: ["لاحظ: الفعل المساعد يتحرك من مكانه إلى أول الجملة، وكل شيء آخر يبقى في مكانه."],
      show: [{ t: "build", lab: "اختر",
        opts: [["be", "{a:Are} {s:you} ready?", "`are` تقدمت", 0], ["have", "{a:Have} {s:you} {v:finished}?", "`have` تقدمت", 0], ["will", "{a:Will} {s:they} {v:come}?", "", 0],
               ["should", "{a:Should} {s:I} {v:call} him?", "", 0], ["فعل عادي", "{a:Do} {s:you} {v:like} it?", "لا مساعد ← أضفنا `do`", 1], ["فعل ماضٍ", "{a:Did} {s:he} {v:go}?", "لا مساعد ← أضفنا `did`", 1]],
        groups: [{ h: "المساعد يتقدم" }, { h: "نضيف do / does / did" }] }],
      check: { q: "___ the bank open today?", o: ["Does", "Is", "Do"], a: 1, why: "`open` هنا صفة، والجملة بفعل be: `Is the bank open?`" } },

    { k: "أكثر من مساعد", h: "*الأول* فقط يتقدم",
      why: ["إذا كان في الجملة مساعدان أو أكثر (`has been`, `will have`)، يتقدم الأول فقط ويبقى الباقي بعد الفاعل."],
      show: [{ t: "trans", items: [{ from: "{s:She} {a:has} {a:been} {v:working}.", to: "{a:Has} {s:she} {a:been} {v:working}?", chg: ["`has` فقط تقدمت", "`been` بقيت"] }] },
        { t: "fix", items: [["Has been she working?", "{a:Has} she {a:been} {v:working}?", ""]] }],
      check: { q: "Put in order: (will / finished / have / they)", o: ["Will have they finished?", "Will they have finished?"], a: 1, why: "المساعد الأول `will` فقط يتقدم." } },

    { k: "have", h: "have بمعنى «يملك» تأخذ *do*",
      why: [
        "`have` لها دوران: مساعد (في المضارع التام) ← يتقدم. وفعل عادي بمعنى «يملك» ← يحتاج `do`.",
        "لذلك `Have you a car?` قديمة جدًا. قل `Do you have a car?` أو `Have you got a car?`."
      ],
      show: [{ t: "compare", cols: [
        { h: "have مساعد ← يتقدم", c: "be", en: ["{a:Have} you {v:seen} it?"] },
        { h: "have = يملك ← do", c: "verb", en: ["{a:Do} you {v:have} a pen?", "{a:Have} you {v:got} a pen?"] }
      ] }],
      check: { q: "___ a car?", o: ["Have you", "Do you have"], a: 1, why: "`have` هنا بمعنى يملك ← `Do you have`." } },

    { k: "السؤال المنفي", h: "Don't you…? للتعجب",
      why: [
        "السؤال المنفي (`Don't you…? Isn't it…?`) لا يسأل حقًا: هو يعبّر عن تعجب، أو تنتظر فيه أن يقول الطرف الآخر «نعم».",
        "`Isn't it beautiful?` = أليس جميلًا؟ (أنا أراه جميلًا)."
      ],
      show: [{ t: "ex", items: [["{a:Isn't} it beautiful?", "أليس جميلًا؟"], ["{a:Don't} you {v:like} it?", "ألا يعجبك؟ (أنا متعجب)"]] }],
      check: { q: "\"Isn't this view amazing?\" The speaker thinks the view is…", o: ["amazing", "not amazing"], a: 0, why: "السؤال المنفي هنا للتعجب، والمتكلم يراه رائعًا." } }
  ],
  sum: [
    { h: "فيها مساعد", en: ["{a:Is / Can / Will / Have} + {s:subject}…?"] },
    { h: "بدون مساعد", en: ["{a:Do / Does / Did} + {s:subject} + {v:verb}?"] },
    { h: "مساعدان", en: ["{a:Has} she {a:been} {v:working}?"] },
    { h: "have = يملك", en: ["{a:Do} you {v:have}…?"] }
  ]
};
