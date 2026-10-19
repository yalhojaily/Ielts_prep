window.UNITS = window.UNITS || {};
window.UNITS[83] = {
  id: 83,
  title: "Other relative structures",
  ar: "تراكيب صلة أخرى",
  idea: "هناك تراكيب صلة متقدمة: **حرف الجر قبل which / whom** في الأسلوب الرسمي، و**what** بمعنى «الشيء الذي»، و**جمل الصلة المختصرة** بـ `-ing` أو التصريف الثالث، و**كميات + of which / of whom**.",
  uses: [
    ["حرف جر + which / whom (رسمي)", "the person to whom I spoke"],
    ["what = the thing that", "What I need is a holiday."],
    ["مختصرة بـ -ing (مبني للمعلوم)", "the man standing at the door (= who is standing)"],
    ["مختصرة بـ v3 (مجهول)", "the car made in Japan (= which was made)"],
    ["كمية + of which", "I have three brothers, all of whom are married."]
  ],
  formula: [
    ["رسمي", "the house {x:in which} I live = the house (which) I live {x:in}"],
    ["what", "{x:What} I want is peace. · I didn't understand {x:what} he said."],
    ["-ing / v3", "people {v:living} in cities · products {v:made} in China"],
    ["كمية", "{x:some of which / most of whom / none of which / both of whom}"]
  ],
  notes: [
    { title: "whom",
      body: "`whom` للشخص المفعول، وتستخدم في الرسمي وبعد حروف الجر. في الكلام نستخدم `who`.",
      en: "the man {x:to whom} I sent the letter = the man (who) I sent the letter to" },
    { title: "what لا that",
      body: "`what` لا يسبقها اسم. لا نقول `the thing what`.",
      en: "This is {x:what} I wanted. · This is the thing {x:that} I wanted." },
    { title: "الاختصار",
      body: "نحذف `who / which` + `be`.",
      en: "Students {x:(who are)} {v:interested} in the course should apply. · The road {x:(which is)} {v:leading} to the city is closed." }
  ],
  examples: [
    ["{x:What} surprised me was the price.", "ما فاجأني هو السعر."],
    ["The woman {v:sitting} next to me was a doctor.", "المرأة الجالسة بجانبي كانت طبيبة."],
    ["Most goods {v:sold} online are cheaper.", "معظم السلع المباعة عبر الإنترنت أرخص."],
    ["He has 20 employees, {x:most of whom} are young.", "لديه 20 موظفًا، معظمهم شباب."],
    ["This is the issue {x:about which} we spoke.", "هذه هي القضية التي تحدثنا عنها."]
  ],
  mistakes: [
    ["The thing what I need is time.", "What I need is time. / The thing that I need is time.", "`what` لا يسبقها اسم."],
    ["I have two sisters, both of them are teachers.", "I have two sisters, both of whom are teachers.", "في جملة الصلة: `both of whom`."],
    ["The man who standing there is my uncle.", "The man standing there is my uncle.", "نحذف `who is` كلها."],
    ["That what he said was true.", "What he said was true.", "`What` وحدها."]
  ],
  ielts: {
    text: "هذه التراكيب ترفع الأسلوب في **Writing Task 2**: `What is clear is that...`, `people living in rural areas`, `a survey of 500 people, most of whom...`. استخدم واحدًا أو اثنين في المقال بثقة.",
    en: "What is often overlooked is that people living in rural areas have limited access to healthcare."
  },
  questions: [
    { t: "mcq", q: "___ I like most about my job is the people.", o: ["That", "Which", "What", "The thing what"], a: 2, why: "`What` = الشيء الذي." },
    { t: "mcq", q: "The man ___ next to me on the plane was very talkative.", o: ["sat", "sitting", "who sitting", "sits"], a: 1, why: "مختصر: `sitting`." },
    { t: "mcq", q: "Cars ___ in Germany are usually expensive.", o: ["making", "made", "which made", "make"], a: 1, why: "مجهول مختصر: `made`." },
    { t: "mcq", q: "This is the person ___ I gave the money.", o: ["to whom", "to who", "whom to", "to which"], a: 0, why: "رسمي: `to whom`." },
    { t: "mcq", q: "I have many friends, ___ live abroad.", o: ["some of them", "some of whom", "some of who", "some whom"], a: 1, why: "`some of whom`." },
    { t: "fill", q: "I don't understand ___ you mean.", a: ["what"], why: "`what`." },
    { t: "fill", q: "The village in ___ he was born is very small.", a: ["which"], why: "`in which`." },
    { t: "fill", q: "Anyone ___ (want) to join should register today.", a: ["wanting", "who wants"], why: "مختصر: `wanting`." },
    { t: "fix", q: "The thing what worries me is the cost.", a: ["What worries me is the cost.", "The thing that worries me is the cost.", "The thing which worries me is the cost."], why: "لا `thing what`." },
    { t: "fix", q: "The students who studying abroad miss their families.", a: ["The students studying abroad miss their families.", "The students who are studying abroad miss their families.", "The students who study abroad miss their families."], why: "إما `studying` أو `who are studying`." },
    { t: "fix", q: "I bought three books, all of them were expensive.", a: ["I bought three books, all of which were expensive."], why: "`all of which`." },
    { t: "rewrite", q: "The houses which were built in the 1960s are old now. (Shorten the relative clause)", ask: "اختصر جملة الصلة.", a: ["The houses built in the 1960s are old now."], why: "نحذف `which were`." }
  ]
};
