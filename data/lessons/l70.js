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
