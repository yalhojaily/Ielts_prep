window.LESSONS = window.LESSONS || {};
window.LESSONS[5] = {
  steps: [
    { k: "السؤال الذهبي", h: "دائم أم *مؤقت*؟",
      why: [
        "قبل أن تختار بين المضارع البسيط والمستمر، اسأل نفسك سؤالًا واحدًا: هل هذا الشيء **دائم أو متكرر**، أم **يحدث الآن ومؤقت**؟",
        "الفعل نفسه قد يأتي بالشكلين، والمعنى هو الذي يقرر."
      ],
      show: [{ t: "compare", cols: [
        { h: "البسيط: دائم / عادة", c: "subj", tl: { marks: [{ m: "band", c: "subj", label: "I work in Riyadh." }] }, ar: "عملي الدائم" },
        { h: "المستمر: الآن / مؤقت", c: "accent", tl: { marks: [{ m: "wave", from: -0.3, to: 0.3, c: "accent", label: "I'm working in Jeddah this month." }] }, ar: "انتداب مؤقت" }
      ] }],
      check: { q: "My uncle ___ in Dubai, but this month he ___ in Cairo.", o: ["lives / stays", "lives / is staying", "is living / stays"], a: 1, why: "السكن في دبي دائم (بسيط)، والإقامة في القاهرة مؤقتة هذا الشهر (مستمر)." } },

    { k: "جرّب بنفسك", h: "غيّر السياق وراقب الزمن",
      why: [
        "الكلمات الدالة على الزمن تساعدك: `usually, every day, always` تدل على التكرار ← بسيط. و`now, today, this week, at the moment` تدل على الآن ← مستمر.",
        "اضغط على كل سياق ولاحظ كيف يتغير الفعل."
      ],
      show: [{ t: "build", lab: "اختر السياق",
        opts: [
          ["usually", "{s:He} {x:usually} {v:drive|s} to work.", "عادة متكررة ← بسيط", 0],
          ["every day", "{s:He} {v:drive|s} to work {x:every day}.", "تكرار ← بسيط", 0],
          ["this week", "{s:He} {a:is} {v:tak|ing} the bus {x:this week}.", "فترة مؤقتة (سيارته معطلة) ← مستمر", 1],
          ["right now", "{s:He} {a:is} {v:driv|ing} {x:right now}.", "يحدث الآن ← مستمر", 1]
        ], start: 0,
        groups: [{ h: "المضارع البسيط", sub: "usually · every day · always · never" }, { h: "المضارع المستمر", sub: "now · today · this week · these days" }] }],
      check: { q: "I usually walk, but today I ___.", o: ["drive", "am driving"], a: 1, why: "`today` استثناء مؤقت من العادة، فنستخدم المستمر." } },

    { k: "أفعال الحالة", h: "أفعال لا تأخذ ing *حتى الآن*",
      why: [
        "المستمر يصف حدثًا يتحرك وله بداية ونهاية قريبة. لكن بعض الأفعال تصف **حالة** في الذهن أو الشعور أو الملكية، وهذه لا «تجري» مثل الأحداث.",
        "لذلك تبقى في المضارع البسيط حتى لو كان المعنى «الآن»: `I understand you.` وليس `I am understanding`."
      ],
      show: [{ t: "cards", items: [
        { i: "bulb", h: "التفكير والمعرفة", tags: ["know", "understand", "believe", "remember", "mean"] },
        { i: "heart", h: "المشاعر والرغبة", tags: ["like", "love", "hate", "want", "need", "prefer"] },
        { i: "box", h: "الملكية", tags: ["have (يملك)", "own", "belong"] },
        { i: "eye", h: "المظهر والانطباع", tags: ["seem", "look like", "sound"] }
      ] }],
      check: { q: "This bag ___ to me.", o: ["is belonging", "belongs"], a: 1, why: "`belong` فعل ملكية (حالة)، فلا يأتي بـ ing." } },

    { k: "فعل بمعنيين", h: "think و have: حالة أم حدث؟",
      why: [
        "بعض الأفعال لها معنيان: معنى **حالة** فتبقى بسيطة، ومعنى **حدث** فتقبل ing.",
        "`think` بمعنى «رأيي أن» حالة. وبمعنى «أفكّر الآن في شيء» حدث. و`have` بمعنى «يملك» حالة، وبمعنى «يتناول / يقضي» حدث."
      ],
      show: [{ t: "compare", cols: [
        { h: "حالة ← بسيط", c: "subj", en: ["I {v:think} it's a good idea.", "She {v:has} two cars."], ar: "رأيي · تملك" },
        { h: "حدث ← مستمر", c: "accent", en: ["I {a:am} {v:thinking} about my plans.", "She {a:is} {v:having} lunch."], ar: "أفكر الآن · تتناول الغداء" }
      ] }],
      check: { q: "Sorry, she can't talk. She ___ dinner.", o: ["has", "is having"], a: 1, why: "`have dinner` = تتناول العشاء، حدث يجري الآن، فنستخدم المستمر." } },

    { k: "always مع المستمر", h: "تكرار *مزعج*",
      why: [
        "`always` عادةً مع البسيط. لكن إذا وضعتها مع المستمر فأنت تشتكي: الشيء يتكرر بشكل يضايقك.",
        "هذا استخدام عاطفي، ونبرة الصوت فيه تعبّر عن الانزعاج."
      ],
      show: [{ t: "compare", cols: [
        { h: "معلومة محايدة", c: "subj", en: ["He {x:always} {v:calls} his mother on Fridays."] },
        { h: "شكوى", c: "neg", en: ["He {a:is} {x:always} {v:losing} his keys!"] }
      ] }],
      check: { q: "Which sentence is a complaint?", o: ["She always arrives at eight.", "She's always arriving late!"], a: 1, why: "`always` مع المستمر تعبّر عن تكرار مزعج." } }
  ],
  sum: [
    { h: "البسيط", txt: "دائم · عادة · حقيقة", en: ["I {v:work} in Riyadh."] },
    { h: "المستمر", txt: "الآن · مؤقت · يتغير", en: ["I {a:'m} {v:working} in Jeddah this month."] },
    { h: "أفعال الحالة تبقى بسيطة", en: ["know · want · like · own · seem"] },
    { h: "معنيان", en: ["I {v:think} so. / I'm {v:thinking} about it."] }
  ]
};
