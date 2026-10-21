window.LESSONS = window.LESSONS || {};
window.LESSONS[46] = {
  steps: [
    { k: "الفكرة", h: "النفي يرجع خطوة *مثل* الإثبات",
      why: [
        "لا قواعد جديدة: النفي يتبع إرجاع الزمن نفسه. المساعد المنفي يرجع خطوة إلى الوراء.",
        "`don't` ← `didn't`، `isn't` ← `wasn't`، `won't` ← `wouldn't`، `haven't` ← `hadn't`."
      ],
      show: [{ t: "build", lab: "اختر الجملة",
        opts: [["I don't eat meat.", "She said she {a:didn't} {v:eat} meat.", "don't ← didn't", 0], ["I'm not hungry.", "She said she {a:wasn't} hungry.", "am not ← wasn't", 0], ["I won't be late.", "He promised he {a:wouldn't} {v:be} late.", "won't ← wouldn't", 0], ["I haven't finished.", "He said he {a:hadn't} {v:finished}.", "haven't ← hadn't", 0]],
        groups: [{ h: "المساعد المنفي يرجع خطوة" }] }],
      check: { q: "\"I don't like it.\" → She said she ___ it.", o: ["doesn't like", "didn't like"], a: 1, why: "`don't` ترجع إلى `didn't`." } },

    { k: "الأمر المنفي", h: "told someone *not to* + فعل",
      why: [
        "لنقل أمر منفي (`Don't touch it!`) لا ننقل `don't`، بل نستخدم `told / asked` + الشخص + `not to` + الفعل.",
        "الترتيب `not to`، وليس `to not` ولا `don't`."
      ],
      show: [{ t: "trans", items: [{ from: "“{a:Don't} {v:touch} it.”", to: "She told me {n:not} {a:to} {v:touch} it." }, { from: "“{a:Don't} {v:shout}!”", to: "He told us {n:not} {a:to} {v:shout}." }] },
        { t: "fix", items: [["He told me to not open it.", "He told me {n:not} {a:to} {v:open} it.", ""], ["He told me don't go.", "He told me {n:not} {a:to} {v:go}.", ""]] }],
      check: { q: "The guard told us ___ there.", o: ["don't park", "not to park", "to not park"], a: 1, why: "الأمر المنفي المنقول: `not to` + الفعل." } },

    { k: "فرق دقيق", h: "didn't say ≠ said … not",
      why: [
        "مكان النفي يغيّر المعنى:",
        "`He didn't say he was ill` = لم يذكر شيئًا عن مرضه. `He said he wasn't ill` = قال صراحة إنه ليس مريضًا."
      ],
      show: [{ t: "compare", cols: [
        { h: "didn't say", c: "subj", en: ["He {a:didn't} {v:say} he was ill."], ar: "لم يتحدث عن الموضوع" },
        { h: "said … not", c: "accent", en: ["He {v:said} he {a:wasn't} ill."], ar: "نفى المرض صراحة" }
      ] }],
      check: { q: "\"I'm not ill,\" he said. → ", o: ["He didn't say he was ill.", "He said he wasn't ill."], a: 1, why: "نفى المرض صراحة ← `said he wasn't ill`." } }
  ],
  sum: [
    { h: "النفي يرجع", en: ["don't → didn't · won't → wouldn't"] },
    { h: "أمر منفي", en: ["told me {n:not} {a:to} {v:go}"] },
    { h: "ليس", en: ["to not · don't"] },
    { h: "الفرق", en: ["didn't say ≠ said … not"] }
  ]
};
