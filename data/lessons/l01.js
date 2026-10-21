window.LESSONS = window.LESSONS || {};
window.LESSONS[1] = {
  steps: [
    { k: "الفكرة", h: "المضارع البسيط = ما هو صحيح *بشكل عام*",
      why: [
        "لا نستخدمه لما يحدث في هذه اللحظة، بل لما **يتكرر** أو **يبقى صحيحًا** مدة طويلة: قبل الآن، والآن، وبعد الآن.",
        "لذلك لا يهم متى تقول الجملة: `I drink coffee every day.` صحيحة أمس واليوم وغدًا."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "band", c: "subj", label: "She works in a bank." }, { m: "dots", n: 7, label: "I drink coffee every day." }],
        legend: [["accent", "نقاط متكررة = **عادة**"], ["subj", "شريط ممتد = **حقيقة أو وضع دائم**"]] }],
      check: { q: "Which sentence describes a habit?", o: ["I'm drinking coffee now.", "I drink coffee every morning."], a: 1, why: "`every morning` تعني أن الفعل يتكرر، والتكرار من استخدامات المضارع البسيط." } },

    { k: "متى نستخدمه", h: "ثلاث حالات فقط",
      why: ["كل الحالات الثلاث يجمعها شيء واحد: الكلام **ليس عن هذه اللحظة تحديدًا**، بل عن شيء ثابت أو متكرر."],
      show: [{ t: "cards", items: [
        { i: "repeat", h: "عادة متكررة", en: "I drink coffee every morning.", ar: "أشرب القهوة كل صباح.", tags: ["every day", "always", "usually"] },
        { i: "globe", h: "حقيقة أو وضع دائم", en: "Water boils at 100°C.", ar: "يغلي الماء عند 100 درجة.", tags: ["She works in a bank."] },
        { i: "clock", h: "جدول ثابت", en: "The train leaves at 7:30.", ar: "يغادر القطار الساعة 7:30.", tags: ["timetables", "opening hours"] }
      ] }],
      check: { q: "The museum ___ at 9 a.m. every day.", o: ["opens", "is opening"], a: 0, why: "موعد ثابت في جدول، فنستخدم المضارع البسيط: `opens`." } },

    { k: "البناء", h: "اختر الفاعل وراقب الفعل",
      why: [
        "الفعل في المضارع البسيط يبقى على حاله، **إلا** إذا كان الفاعل شخصًا واحدًا أو شيئًا واحدًا غائبًا (`he / she / it`)، فنضيف له `s`.",
        "السبب: هذه هي العلامة الوحيدة التي بقيت في الإنجليزية لتمييز الغائب المفرد. في العربية نميّزه بحرف في أول الفعل (**ي**عمل)، وفي الإنجليزية بحرف في آخره (work**s**)."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [
          ["I", "{s:I} + {v:work} {x:every day.}", "", 0], ["You", "{s:You} + {v:work} {x:every day.}", "", 0],
          ["We", "{s:We} + {v:work} {x:every day.}", "", 0], ["They", "{s:They} + {v:work} {x:every day.}", "", 0],
          ["He", "{s:He} + {v:work|s} {x:every day.}", "", 1], ["She", "{s:She} + {v:work|s} {x:every day.}", "", 1],
          ["It", "{s:It} + {v:work|s} {x:every day.}", "", 1], ["My father", "{s:My father} + {v:work|s} {x:every day.}", "`My father` = he", 1],
          ["My parents", "{s:My parents} + {v:work} {x:every day.}", "`My parents` = they", 0]
        ], start: 4,
        groups: [{ h: "I · you · we · they", sub: "وأي جمع: my parents", res: "{v:work}" }, { h: "he · she · it", sub: "وأي مفرد: my father, the shop", res: "{v:work|s}" }] }],
      check: { q: "My sister ___ in Dammam.", o: ["live", "lives"], a: 1, why: "`My sister` مفرد غائب مثل she، فنضيف s: `lives`." } },

    { k: "كتابة الـ s", h: "ثلاث طرق حسب آخر الفعل",
      why: [
        "نضيف `es` بدل `s` بعد الأصوات `s · sh · ch · x · o`، لأن نطق s مباشرة بعدها صعب، فنضيف حرف علة يفصل بينهما: watch**es** تُنطق «واتشِز».",
        "وإذا انتهى الفعل بحرف ساكن ثم `y` نحوّل y إلى `ies`. أما إذا سبق y حرف علة (`a, e, o`) فنضيف s فقط: `plays`."
      ],
      show: [{ t: "rules", pre: "he", tryLab: "اضغط على أي فعل لترى قاعدته ↑",
        items: [
          { cond: "معظم الأفعال", sym: "+ s", pairs: [["work", "work", "s"], ["play", "play", "s"]] },
          { cond: "بعد `s · sh · ch · x · o`", sym: "+ es", pairs: [["watch", "watch", "es"], ["go", "go", "es"]] },
          { cond: "حرف ساكن + `y`", sym: "y → ies", pairs: [["study", "stud", "ies"], ["carry", "carr", "ies"]] }
        ],
        try: [["work", "work", "s", 0], ["play", "play", "s", 0], ["watch", "watch", "es", 1], ["go", "go", "es", 1], ["fix", "fix", "es", 1],
              ["study", "stud", "ies", 2], ["carry", "carr", "ies", 2], ["enjoy", "enjoy", "s", 0]] }],
      check: { q: "He ___ cars for a living.", o: ["fixs", "fixes", "fixies"], a: 1, why: "`fix` ينتهي بـ x، فنضيف es: `fixes`." } },

    { k: "be و have", h: "فعلان لهما شكل خاص",
      why: [
        "`be` و`have` أقدم فعلين في اللغة وأكثرهما استعمالًا، لذلك احتفظا بأشكال خاصة بدل قاعدة الـ s.",
        "و`be` في المضارع البسيط **فعل مستقل**: لا نضعه قبل فعل آخر. الجملة هنا فيها فعل واحد فقط، فإما `is` وإما `works`، لا الاثنان معًا."
      ],
      show: [
        { t: "map", cols: [
          { h: "be", c: "be", k: "a", rows: [["I", "am"], ["he · she · it", "is"], ["you · we · they", "are"]] },
          { h: "have", c: "verb", k: "v", rows: [["I · you · we · they", "have"], ["he · she · it", "has"]], note: "لا نقول `haves`" }
        ] },
        { t: "fix", h: "لا تجمع is مع فعل آخر", items: [["She is work here.", "She {v:works} here.", "في المضارع البسيط الجملة فيها فعل واحد فقط."]] }
      ],
      check: { q: "He ___ two sisters.", o: ["have", "haves", "has"], a: 2, why: "`have` مع he / she / it تصبح `has`." } },

    { k: "كلمات التكرار", h: "كم مرة؟ وأين نضع الكلمة؟",
      why: [
        "كلمات التكرار (`always, usually, often, sometimes, never`) تصف **الحدث** نفسه: كم مرة يحدث؟ لذلك نضعها ملاصقة للفعل الذي يحمل الحدث، **قبله**: `She always drinks tea.`",
        "أما `be` فليس حدثًا، بل رابط يصف حالة (`late`, `tired`). الكلمة هنا تصف الحالة، فتأتي **بعد** `is` وقبل الصفة: `He is always late.`",
        "إذن الفرق ليس بسبب الفاعل (كلاهما غائب)، بل بسبب **نوع الفعل**: فعل حدث ← قبله، فعل be ← بعده."
      ],
      show: [{ t: "scale", cap: "اضغط على كلمة من السلّم لتراها في الجملتين.",
        items: [["never", 0, "أبدًا · 0%"], ["sometimes", 50, "أحيانًا · 50%"], ["often", 70, "غالبًا · 70%"], ["usually", 88, "عادةً · 88%"], ["always", 100, "دائمًا · 100%"]],
        lines: [["قبل فعل الحدث", "{s:She} [] {v:drinks} tea."], ["بعد فعل be", "{s:He} {a:is} [] late."]] }],
      check: { q: "Which sentence is correct?", o: ["He always is late.", "He is always late."], a: 1, why: "مع فعل be تأتي كلمة التكرار **بعده**: `is always`." } }
  ],
  sum: [
    { h: "متى؟", txt: "عادة · حقيقة · جدول ثابت", en: ["I drink coffee every day."] },
    { h: "البناء", en: ["{s:I / you / we / they} {v:work}", "{s:he / she / it} {v:work|s}"] },
    { h: "كتابة الـ s", en: ["works · watches · studies · plays", "am / is / are · have / has"] },
    { h: "كلمات التكرار", en: ["She {k:always} drinks tea.", "He is {k:always} late."] }
  ]
};
