window.UNITS = window.UNITS || {};
window.UNITS[54] = {
  id: 54,
  title: "Verb patterns with prepositions",
  ar: "أفعال يتبعها حرف جر",
  idea: "كثير من الأفعال يرتبط بحرف جر ثابت: `depend on, listen to, wait for`. وإذا جاء بعد حرف الجر فعل، يكون **بصيغة -ing**: `I'm thinking of moving`. حرف الجر غالبًا يختلف عن العربية، فيجب حفظه مع الفعل.",
  uses: [
    ["فعل + حرف جر + اسم", "It depends on the weather."],
    ["فعل + حرف جر + -ing", "She succeeded in passing the exam."],
    ["فعل + شخص + حرف جر", "He thanked me for helping."]
  ],
  formula: [
    ["on", "{v:depend, rely, insist, concentrate, spend (money)} {x:on}"],
    ["to / for / about / of / in / with", "{v:listen, belong} {x:to} · {v:wait, apply, pay} {x:for} · {v:think, worry, complain} {x:about} · {v:consist, approve} {x:of} · {v:believe, succeed} {x:in} · {v:agree, deal} {x:with}"],
    ["+ -ing", "{s:I} {v:apologise} {x:for} {v:being} late."]
  ],
  notes: [
    { title: "اختلافات عن العربية",
      body: "«يعتمد على» = `depend on` (لا at). «يستمع إلى» = `listen to`. «يدخل الغرفة» = `enter the room` (بلا حرف جر). «يناقش الموضوع» = `discuss the topic` (لا about).",
      en: "We {v:discussed} the plan. (not: discussed about) · He {v:entered} the room. (not: entered to)" },
    { title: "agree with / on / to",
      body: "`agree with someone` (مع شخص أو رأي)، `agree on something` (يتفقون على قرار)، `agree to something` (يوافق على طلب).",
      en: "I {v:agree} {x:with} you. · We {v:agreed} {x:on} a price." },
    { title: "think of / about",
      body: "`think about` = يفكر في الشيء بتمعن. `think of` = تخطر بباله فكرة، أو رأيه.",
      en: "What do you {v:think} {x:of} my idea? · I'm {v:thinking} {x:about} the offer." }
  ],
  examples: [
    ["{s:The price} {v:depends} {x:on} the size.", "يعتمد السعر على الحجم."],
    ["{s:I}'{a:m} {v:looking} {x:forward to} {v:seeing} you.", "أتطلع لرؤيتك."],
    ["{s:She} {v:complained} {x:about} the noise.", "اشتكت من الضجيج."],
    ["{s:He} {v:insisted} {x:on} {v:paying} the bill.", "أصر على دفع الفاتورة."],
    ["{s:We} {v:applied} {x:for} a visa.", "تقدمنا بطلب تأشيرة."]
  ],
  mistakes: [
    ["It depends of the situation.", "It depends on the situation.", "`depend on`."],
    ["We discussed about the problem.", "We discussed the problem.", "`discuss` بلا حرف جر."],
    ["I'm looking forward to see you.", "I'm looking forward to seeing you.", "`to` هنا حرف جر، فبعده `-ing`."],
    ["Listen me!", "Listen to me!", "`listen to`."]
  ],
  ielts: {
    text: "حروف الجر الخاطئة تتكرر وتؤثر في الدقة. أشهرها في **Writing Task 2**: `depend on, focus on, contribute to, result in, lead to, benefit from, deal with`. و`discuss` بلا about. وفي **General Task 1**: `I look forward to hearing from you`.",
    en: "Success depends on many factors, and hard work often results in better opportunities."
  },
  questions: [
    { t: "mcq", q: "Success depends ___ hard work.", o: ["of", "on", "from", "in"], a: 1, why: "`depend on`." },
    { t: "mcq", q: "We discussed ___ the new project.", o: ["about", "on", "-", "for"], a: 2, why: "`discuss` بلا حرف جر." },
    { t: "mcq", q: "I'm looking forward to ___ from you.", o: ["hear", "hearing", "heard", "be hearing"], a: 1, why: "بعد `to` (حرف جر) `-ing`." },
    { t: "mcq", q: "Do you agree ___ me?", o: ["to", "with", "on", "about"], a: 1, why: "`agree with` شخص." },
    { t: "mcq", q: "She succeeded ___ getting the scholarship.", o: ["to", "on", "in", "at"], a: 2, why: "`succeed in + -ing`." },
    { t: "mcq", q: "The team consists ___ ten players.", o: ["in", "of", "from", "with"], a: 1, why: "`consist of`." },
    { t: "fill", q: "Who does this bag belong ___?", a: ["to"], why: "`belong to`." },
    { t: "fill", q: "Thank you ___ helping me.", a: ["for"], why: "`thank for`." },
    { t: "fill", q: "He's thinking ___ buying a new car.", a: ["of", "about"], why: "`think of / about + -ing`." },
    { t: "fill", q: "I'm worried ___ the exam.", a: ["about"], why: "`worry about`." },
    { t: "fix", q: "She entered to the classroom.", a: ["She entered the classroom."], why: "`enter` بلا حرف جر." },
    { t: "fix", q: "I insisted to pay.", a: ["I insisted on paying."], why: "`insist on + -ing`." },
    { t: "fix", q: "Pollution can lead in health problems.", a: ["Pollution can lead to health problems."], why: "`lead to`." }
  ]
};
