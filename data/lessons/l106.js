window.LESSONS = window.LESSONS || {};
window.LESSONS[106] = {
  steps: [
    { k: "الفكرة", h: "in = داخل · on = على السطح · at = *نقطة*",
      why: [
        "تخيّل ثلاثة أشكال: `in` = داخل صندوق أو مساحة مغلقة أو منطقة كبيرة. `on` = على سطح أو خط. `at` = نقطة على الخريطة أو موقع لغرض معين.",
        "في العربية «في» تغطي `in` و`at` معًا، لذلك نخلط بينهما."
      ],
      show: [{ t: "cards", items: [
        { i: "box", h: "in = داخل", en: "in the room · in the car · in Riyadh" },
        { i: "layers", h: "on = على السطح", en: "on the table · on the wall · on the 3rd floor" },
        { i: "target", h: "at = نقطة / موقع", en: "at the door · at the bank · at work" }
      ] }],
      check: { q: "The picture is ___ the wall.", o: ["in", "on", "at"], a: 1, why: "على سطح الجدار ← `on`." } },

    { k: "جرّب", h: "اختر المكان وراقب حرف الجر",
      why: ["لاحظ: المدن والدول ← `in` (منطقة كبيرة). المنزل والعمل والمدرسة ← `at` (موقع لغرض)."],
      show: [{ t: "build", lab: "اختر المكان",
        opts: [["Riyadh", "I live {k:in} Riyadh.", "مدينة ← in", 0], ["the kitchen", "She's {k:in} the kitchen.", "داخل غرفة", 0], ["the floor", "It's {k:on} the floor.", "سطح", 1], ["page 5", "Look {k:on} page 5.", "", 1], ["home", "I'm {k:at} home.", "لا in home", 2], ["the airport", "I'll meet you {k:at} the airport.", "نقطة لقاء", 2]],
        groups: [{ h: "in" }, { h: "on" }, { h: "at" }] },
        { t: "fix", items: [["I am in home.", "I am {k:at} home.", ""], ["I live at Riyadh.", "I live {k:in} Riyadh.", ""], ["The book is in the table.", "The book is {k:on} the table.", ""]] }],
      check: { q: "My office is ___ the fifth floor.", o: ["in", "on", "at"], a: 1, why: "الطوابق ← `on`." } },

    { k: "وسائل النقل", h: "in a car · on a bus",
      why: [
        "وسائل النقل **الصغيرة** التي تجلس فيها فقط ← `in`: `in a car, in a taxi`.",
        "الكبيرة التي تمشي فيها أو تركبها ← `on`: `on a bus, on a train, on a plane, on a bike`."
      ],
      show: [{ t: "compare", cols: [{ h: "in", c: "subj", en: ["{k:in} a car", "{k:in} a taxi"] }, { h: "on", c: "accent", en: ["{k:on} the bus", "{k:on} a plane", "{k:on} a bike"] }] },
        { t: "fix", items: [["She is in the bus.", "She is {k:on} the bus.", ""]] }],
      check: { q: "I read a book ___ the train.", o: ["in", "on"], a: 1, why: "قطار (كبير) ← `on`." } },

    { k: "حروف أخرى", h: "opposite · in front of · between",
      why: [
        "`in front of` = أمامه مباشرة. `opposite` = في الجهة المقابلة (الشارع بينهما).",
        "والعنوان: `at` + رقم البيت، `in` + المدينة."
      ],
      show: [{ t: "ex", items: [["The car is {k:in front of} the house.", "أمامه مباشرة"], ["The bank is {k:opposite} the mosque.", "في الجهة المقابلة"], ["The café is {k:between} the bank and the pharmacy.", "بين"], ["{k:at} 15 King Fahd Road, {k:in} Riyadh", "العنوان"]] }],
      check: { q: "The pharmacy is across the street, ___ the hospital.", o: ["in front of", "opposite"], a: 1, why: "الجهة المقابلة من الشارع ← `opposite`." } }
  ],
  sum: [
    { h: "in", en: ["in the room · in Riyadh · in a car"] },
    { h: "on", en: ["on the table · on the 3rd floor · on the bus"] },
    { h: "at", en: ["at home · at work · at the airport"] },
    { h: "أخرى", en: ["opposite · in front of · between"] }
  ]
};
