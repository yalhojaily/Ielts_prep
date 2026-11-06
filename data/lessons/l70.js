window.LESSONS = window.LESSONS || {};
window.LESSONS[70] = {
  steps: [
    { k: "الفكرة", h: "هل تستطيع *عدّه*؟",
      why: [
        "الاسم **المعدود** شيء تعدّه واحدًا واحدًا: كرسي، كرسيان. له مفرد وجمع ويأخذ `a / an`.",
        "الاسم **غير المعدود** مادة أو فكرة لا تُعدّ: ماء، مال، نصيحة. ليس له جمع ولا يأخذ `a / an`."
      ],
      show: [{ t: "compare", cols: [
        { h: "معدود", c: "subj", en: ["{k:a} chair · two chairs", "{k:an} idea · ideas"], foot: "many · a few · few" },
        { h: "غير معدود", c: "accent", en: ["water · money · advice", "(لا a · لا s)"], foot: "much · a little · little" }
      ] }],
      check: { q: "I need ___ information.", o: ["an", "some", "many"], a: 1, why: "`information` غير معدود ← لا `an`، بل `some`." } },

    { k: "الفخاخ", h: "معدود في العربية… *غير معدود* في الإنجليزية",
      why: [
        "هذا هو الفخ الأكبر: كلمات نجمعها في العربية (معلومات، نصائح، أثاث، أخبار، أمتعة) لكنها في الإنجليزية **غير معدودة**.",
        "لا تضف لها `s` ولا `a`. احفظ القائمة."
      ],
      show: [{ t: "cards", items: [{ i: "alert", h: "بلا s وبلا a دائمًا", tags: ["advice", "information", "news", "furniture", "luggage", "equipment", "research", "knowledge", "evidence", "progress", "traffic", "accommodation", "homework", "weather"] }] },
        { t: "fix", items: [["She gave me many advices.", "She gave me a lot of {v:advice}.", ""], ["We have a lot of homeworks.", "We have a lot of {v:homework}.", ""]] }],
      check: { q: "We bought new ___ for the living room.", o: ["furnitures", "furniture", "a furniture"], a: 1, why: "`furniture` غير معدود." } },

    { k: "قطعة من", h: "a piece of advice = نصيحة *واحدة*",
      why: [
        "إذا أردت أن تعدّ شيئًا غير معدود، ضع قبله وعاءً أو وحدة: `a piece of`, `a glass of`, `a bottle of`.",
        "الوحدة هي التي تُعدّ وتُجمع: `two pieces of advice`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["advice", "He gave me {k:a piece of} advice.", "", 0], ["water", "{k:a glass of} water", "", 0], ["oil", "{k:two bottles of} oil", "", 0], ["news", "{k:an interesting piece of} news", "", 0], ["bread", "{k:a loaf of} bread", "", 0]],
        groups: [{ h: "وحدة + of + غير معدود" }] }],
      check: { q: "Can I have ___ water?", o: ["a", "a glass of"], a: 1, why: "لعدّ الماء ← `a glass of`." } },

    { k: "معنيان", h: "time · work · coffee بمعنيين",
      why: [
        "بعض الكلمات معدودة بمعنى وغير معدودة بمعنى آخر.",
        "`work` (عمل عمومًا) غير معدود، و`job` (وظيفة) معدود. `time` (الوقت) غير معدود، و`times` (مرّات) معدود."
      ],
      show: [{ t: "compare", cols: [
        { h: "غير معدود", c: "accent", en: ["I have a lot of {v:work}.", "I don't have much {v:time}.", "I love {v:coffee}."] },
        { h: "معدود", c: "subj", en: ["She has {k:a} new {v:job}.", "I've been there three {v:times}.", "Two {v:coffees}, please. (كوبان)"] }
      ] }],
      check: { q: "She's looking for ___.", o: ["a work", "a job"], a: 1, why: "وظيفة محددة ← `a job` (معدود)." } }
  ],
  sum: [
    { h: "معدود", en: ["a chair · many chairs · a few"] },
    { h: "غير معدود", en: ["water · much water · a little"] },
    { h: "الفخاخ", en: ["advice · information · news · furniture"] },
    { h: "للعدّ", en: ["{k:a piece of} advice"] }
  ]
};

// تعمّق
window.LESSONS[70].steps.push(
  { k: "التأثير على الجملة", h: "غير المعدود يغيّر الجملة *كلها*",
    why: [
      "معرفة أن الكلمة غير معدودة لا تكفي، لأنها تؤثر على كل ما حولها:",
      "**الفعل** يكون مفردًا (`advice is`)، و**الإشارة** مفردة (`this information`)، و**الكمية** بـ `much / a little` (`much luggage`)، والضمير `it` لا `they`."
    ],
    show: [{ t: "build", lab: "اختر الكلمة",
      opts: [
        ["advice", "{k:This} advice {v:is} useful. Thank you for {k:it}.", "مفرد في كل شيء", 0],
        ["information", "{k:How much} information {v:do} we have? Not {k:much}.", "much لا many", 0],
        ["news", "The news {v:is} good. I can't believe {k:it}!", "news مفرد", 0],
        ["tips (معدود)", "{k:These} tips {v:are} useful. Thank you for {k:them}.", "البديل المعدود: tips", 1],
        ["suitcases (معدود)", "{k:How many} suitcases {v:do} you have?", "البديل المعدود لـ luggage", 1]
      ],
      groups: [{ h: "غير معدود ← مفرد" }, { h: "بديل معدود ← جمع" }] }],
    check: { q: "The information you gave me ___ very helpful.", o: ["were", "was"], a: 1, why: "`information` غير معدود ← فعل مفرد." } },

  { k: "في سياق", h: "اقرأ: إيميل بكلمات غير معدودة",
    why: ["هذا إيميل قصير من نوع IELTS General Writing Task 1. كل كلمة ملونة غير معدودة، فلاحظ ما جاء معها."],
    show: [{ t: "passage", h: "إيميل",
      en: "Dear Mr Hassan, thank you for your {k:advice} about the trip. I need some more {k:information} about the hotel. How much {k:luggage} can we take on the bus? Also, is there any {k:equipment} for children? I'd appreciate {k:a piece of} {k:advice} on the best restaurants too.",
      ar: "عزيزي السيد حسن، شكرًا على نصيحتك بخصوص الرحلة. أحتاج مزيدًا من المعلومات عن الفندق. كم من الأمتعة يمكننا أخذه في الحافلة؟ وهل توجد أي معدات للأطفال؟ وسأكون ممتنًا لنصيحة بخصوص أفضل المطاعم أيضًا.",
      note: "لا `s` ولا `a` معها. `some / any / much` للكمية، و`a piece of` لعدّها." }],
    check: { q: "Which is correct?", o: ["How many luggages can I take?", "How much luggage can I take?"], a: 1, why: "`luggage` غير معدود ← `How much`، بلا s." } }
);

// طبّق على نفسك
window.LESSONS[70].apply = [
  {"p": "اكتب ما في مطبخك الآن: أشياء معدودة وأشياء غير معدودة.", "use": "{k:some} rice · {k:a few} eggs · {k:a little} milk · {k:much} / {k:many}", "m": ["There are a few eggs and some rice. We don't have much milk, but we have many apples."], "c": [["`a few / many` مع المعدود", "\\b(a few|many|few)\\s+\\w+s\\b"], ["`a little / much` مع غير المعدود", "\\b(a little|much|little)\\s+(milk|rice|water|sugar|bread|money|time|cheese|oil|food|coffee|tea)\\b"], ["لم تكتب `breads / informations / advices`", "!\\b(breads|informations|advices|furnitures|rices|moneys|homeworks)\\b"]]},
  {"p": "اطلب نصيحة أو معلومة بجملة صحيحة (`advice, information` غير معدودة).", "use": "Can you give me {k:some} {o:advice} / {k:a piece of} …", "m": ["Can you give me some advice about IELTS writing?"], "c": [["`advice / information` بلا `a` وبلا `s`", "\\b(some|any|a piece of|much)\\s+(advice|information)\\b"], ["لم تكتب `an advice`", "!\\ban advice\\b"]]}
];
