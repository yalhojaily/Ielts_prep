window.UNITS = window.UNITS || {};
window.UNITS[106] = {
  id: 106,
  title: "Prepositions of place",
  ar: "حروف جر المكان",
  idea: "أهم ثلاثة: `in` = **داخل** مساحة مغلقة أو منطقة كبيرة (`in the room, in Riyadh`). `on` = **على سطح** أو خط (`on the table, on the wall, on the second floor`). `at` = **نقطة** أو مكان محدد كموقع (`at the door, at the bank, at work`).",
  uses: [
    ["in: داخل", "in the car, in the box, in Saudi Arabia"],
    ["on: على السطح", "on the desk, on the wall, on the screen"],
    ["at: نقطة أو موقع", "at the station, at home, at the traffic lights"],
    ["أخرى", "next to, between, behind, in front of, opposite, above, below"]
  ],
  formula: [
    ["in", "{x:in} the kitchen · {x:in} Jeddah · {x:in} the picture · {x:in} a queue"],
    ["on", "{x:on} the floor · {x:on} the 3rd floor · {x:on} the bus · {x:on} the left / right · {x:on} page 5"],
    ["at", "{x:at} home / work / school · {x:at} the airport · {x:at} the top / bottom · {x:at} a party"]
  ],
  notes: [
    { title: "وسائل النقل",
      body: "`in a car / taxi` (صغيرة). `on a bus / train / plane / bike` (كبيرة أو تركبها).",
      en: "{x:in} a taxi · {x:on} the train · {x:on} a plane" },
    { title: "at أم in للمباني",
      body: "`at the hospital` = في موقعه (لسبب ما). `in the hospital` = داخل المبنى. والفرق بسيط غالبًا.",
      en: "I'm {x:at} the mall. · It's cold {x:in} the mall." },
    { title: "العنوان",
      body: "`at + رقم البيت`، `on + الشارع` (أمريكي) أو `in` (بريطاني)، `in + المدينة`.",
      en: "{x:at} 15 King Fahd Road · {x:on/in} King Fahd Road · {x:in} Riyadh" },
    { title: "opposite / in front of",
      body: "`opposite` = في الجهة المقابلة. `in front of` = أمام مباشرة.",
      en: "The bank is {x:opposite} the mosque. · The car is {x:in front of} the house." }
  ],
  examples: [
    ["My office is {x:on} the fifth floor.", "مكتبي في الطابق الخامس."],
    ["I'll meet you {x:at} the entrance.", "سأقابلك عند المدخل."],
    ["There's a picture {x:on} the wall.", "هناك صورة على الحائط."],
    ["He lives {x:in} a small village {x:in} the south.", "يسكن في قرية صغيرة في الجنوب."],
    ["The pharmacy is {x:between} the bank {x:and} the café.", "الصيدلية بين البنك والمقهى."]
  ],
  mistakes: [
    ["I am in home.", "I am at home.", "`at home`."],
    ["The book is in the table.", "The book is on the table.", "على السطح: `on`."],
    ["I live at Riyadh.", "I live in Riyadh.", "المدينة: `in`."],
    ["She is in the bus.", "She is on the bus.", "الحافلة: `on`."]
  ],
  ielts: {
    text: "أساسية في **Writing Task 1 (Maps)**: `in the north / in the south-east`, `next to the river`, `opposite the school`, `on the corner of`. وفي **Listening** أسئلة الخرائط تعتمد عليها كليًا.",
    en: "The library is located in the north of the town, next to the park and opposite the post office."
  },
  questions: [
    { t: "mcq", q: "My brother is ___ work right now.", o: ["in", "at", "on", "to"], a: 1, why: "`at work`." },
    { t: "mcq", q: "There's a fly ___ the ceiling.", o: ["in", "at", "on", "above"], a: 2, why: "سطح: `on`." },
    { t: "mcq", q: "She lives ___ Dammam.", o: ["at", "on", "in", "to"], a: 2, why: "مدينة: `in`." },
    { t: "mcq", q: "I met him ___ the airport.", o: ["at", "on", "in", "to"], a: 0, why: "موقع: `at`." },
    { t: "mcq", q: "We were ___ the train for six hours.", o: ["in", "at", "on", "by"], a: 2, why: "`on the train`." },
    { t: "mcq", q: "The bank is ___ the left.", o: ["in", "at", "on", "to"], a: 2, why: "`on the left`." },
    { t: "fill", q: "Put the milk ___ the fridge.", a: ["in"], why: "داخل: `in`." },
    { t: "fill", q: "Wait for me ___ the bus stop.", a: ["at"], why: "نقطة: `at`." },
    { t: "fill", q: "The museum is in the city centre, ___ the corner of two main streets.", a: ["on", "at"], why: "`on the corner of`." },
    { t: "fill", q: "Who is the man ___ the photo?", a: ["in"], why: "`in the photo`." },
    { t: "fix", q: "I stayed in home all day.", a: ["I stayed at home all day.", "I stayed home all day."], why: "`at home`." },
    { t: "fix", q: "The keys are in the table.", a: ["The keys are on the table."], why: "`on`." },
    { t: "fix", q: "My flat is in the third floor.", a: ["My flat is on the third floor."], why: "الطابق: `on`." }
  ]
};
