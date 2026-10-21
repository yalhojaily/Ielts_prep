window.LESSONS = window.LESSONS || {};
window.LESSONS[2] = {
  steps: [
    { k: "الفكرة", h: "النفي يحتاج *مساعدًا*: do أو does",
      why: [
        "في العربية يكفي أن نضع «لا» قبل الفعل: لا أعمل. في الإنجليزية لا نضع `not` مباشرة قبل الفعل العادي، بل نحتاج فعلًا مساعدًا يحمل النفي.",
        "المساعد في المضارع البسيط هو `do`، ونفيه `do not` = `don't`. يأتي **بين** الفاعل والفعل."
      ],
      show: [{ t: "trans", items: [
        { from: "{s:I} {v:eat} meat.", to: "{s:I} {a:don't} {v:eat} meat.", chg: ["نضيف `don't` قبل الفعل", "الفعل لا يتغير"] }
      ] }],
      check: { q: "Choose the correct negative.", o: ["I not like fish.", "I don't like fish.", "I doesn't like fish."], a: 1, why: "الفعل العادي يحتاج مساعدًا للنفي، ومع `I` نستخدم `don't`." } },

    { k: "do أم does", h: "اختر الفاعل وراقب المساعد",
      why: [
        "القاعدة نفسها التي تعلمتها في الدرس الأول: الغائب المفرد (`he / she / it`) يأخذ `s`. لكن في النفي الـ s تذهب إلى المساعد: `do` تصبح `does`.",
        "مع بقية الضمائر والجمع نستخدم `don't`."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [
          ["I", "{s:I} {a:don't} {v:work} on Fridays.", "", 0], ["You", "{s:You} {a:don't} {v:work} on Fridays.", "", 0],
          ["We", "{s:We} {a:don't} {v:work} on Fridays.", "", 0], ["They", "{s:They} {a:don't} {v:work} on Fridays.", "", 0],
          ["He", "{s:He} {a:doesn't} {v:work} on Fridays.", "", 1], ["She", "{s:She} {a:doesn't} {v:work} on Fridays.", "", 1],
          ["My brother", "{s:My brother} {a:doesn't} {v:work} on Fridays.", "`My brother` = he", 1], ["The shops", "{s:The shops} {a:don't} {v:work} on Fridays.", "`The shops` = they", 0]
        ], start: 4,
        groups: [{ h: "I · you · we · they", sub: "وأي جمع", res: "{a:don't} {v:work}" }, { h: "he · she · it", sub: "وأي مفرد", res: "{a:doesn't} {v:work}" }] }],
      check: { q: "My father ___ coffee.", o: ["don't drink", "doesn't drink", "doesn't drinks"], a: 1, why: "`My father` مفرد غائب، فالمساعد `doesn't`، والفعل بعده أصلي: `drink`." } },

    { k: "الـ s تنتقل", h: "العلامة لا تظهر *مرتين*",
      why: [
        "علامة الغائب المفرد (`s`) تظهر مرة واحدة فقط في الجملة. في الإثبات تكون على الفعل: `works`. في النفي يأخذها المساعد: `does`، فيعود الفعل إلى أصله: `work`.",
        "لذلك `doesn't works` خطأ: الـ s ظهرت مرتين."
      ],
      show: [
        { t: "trans", items: [
          { from: "{s:He} {v:work|s} here.", to: "{s:He} {a:does}{n:n't} {v:work} here.", chg: ["الـ s انتقلت من `works` إلى `does`"] },
          { from: "{s:She} {v:has} a car.", to: "{s:She} {a:does}{n:n't} {v:have} a car.", chg: ["`has` تعود إلى `have`"] }
        ] }
      ],
      check: { q: "She ___ in a bank.", o: ["doesn't works", "doesn't work", "don't work"], a: 1, why: "بعد `doesn't` يأتي الفعل الأصلي بدون s: `work`." } },

    { k: "be لا يحتاج do", h: "مع am / is / are نضع not *بعدها*",
      why: [
        "`do` يساعد الأفعال العادية فقط. أما `be` فهو نفسه فعل يستطيع حمل النفي، فلا يحتاج مساعدًا: نضع `not` بعده مباشرة.",
        "اسأل نفسك: هل في الجملة `am / is / are`؟ إن كانت موجودة فالنفي بعدها. إن لم تكن فالنفي بـ `don't / doesn't`."
      ],
      show: [{ t: "decide", q: "هل في الجملة `am / is / are`؟",
        opts: [
          { lab: "نعم", h: "نضع not بعدها", en: ["{s:She} {a:is}{n:n't} at home.", "{s:I} {a:am} {n:not} tired."], c: "be" },
          { lab: "لا", h: "نستخدم don't / doesn't", en: ["{s:She} {a:doesn't} {v:live} here.", "{s:I} {a:don't} {v:know}."], c: "verb" }
        ] }],
      check: { q: "He ___ busy today.", o: ["doesn't", "isn't", "don't"], a: 1, why: "`busy` صفة، والجملة بفعل `be`، فنفيها `isn't` بدون do." } },

    { k: "مختصر أم كامل", h: "don't في الكلام، do not في المقال",
      why: [
        "`don't` و`doesn't` اختصار طبيعي في الكلام والرسائل.",
        "في كتابة IELTS Writing Task 2 (مقال رسمي) الأفضل كتابة الصيغة كاملة: `do not` و`does not`، لأن الاختصار يُعدّ أسلوبًا غير رسمي."
      ],
      show: [{ t: "compare", cols: [
        { h: "كلام ورسائل", c: "subj", en: ["{s:I} {a:don't} {v:agree}.", "{s:It} {a:doesn't} {v:matter}."] },
        { h: "مقال رسمي", c: "accent", en: ["{s:Many people} {a:do} {n:not} {v:agree}.", "{s:This} {a:does} {n:not} {v:solve} the problem."] }
      ] }],
      check: { q: "Which is better in an IELTS essay?", o: ["Technology doesn't help everyone.", "Technology does not help everyone."], a: 1, why: "في المقال الرسمي نكتب الصيغة الكاملة `does not`." } }
  ],
  sum: [
    { h: "النفي", en: ["{s:I / you / we / they} {a:don't} {v:work}", "{s:he / she / it} {a:doesn't} {v:work}"] },
    { h: "الـ s مرة واحدة", en: ["He works → He doesn't {v:work}"] },
    { h: "مع be", en: ["{s:She} {a:isn't} busy.", "{s:They} {a:aren't} ready."] },
    { h: "في المقال", txt: "اكتب الصيغة كاملة", en: ["do not · does not"] }
  ]
};
