window.UNITS = window.UNITS || {};
window.UNITS[27] = {
  id: 27,
  title: "The passive with modals",
  ar: "المبني للمجهول مع الأفعال الناقصة",
  idea: "بعد الأفعال الناقصة (`can, must, should, may, might, could, have to`) نضع `be` + التصريف الثالث. وللماضي: `modal + have been` + التصريف الثالث.",
  uses: [
    ["قواعد وتعليمات", "Phones must be switched off."],
    ["اقتراحات وآراء", "This problem should be solved quickly."],
    ["إمكانية", "The tickets can be bought online."],
    ["الماضي (لم يحدث / ربما حدث)", "The accident could have been avoided."]
  ],
  formula: [
    ["حاضر / مستقبل", "{s:It} {a:must / should / can be} {v:done}."],
    ["نفي", "{s:It} {a:mustn't / can't / shouldn't be} {v:touched}."],
    ["ماضٍ", "{s:It} {a:should have been} {v:done} earlier."]
  ],
  notes: [
    { title: "صيغة ثابتة",
      body: "الفعل الناقص لا يتغير، و`be` لا تتغير، والفعل الأساسي دائمًا تصريف ثالث.",
      en: "{a:can be} {v:seen} · {a:might be} {v:cancelled} · {a:has to be} {v:paid}" },
    { title: "should have been = كان يجب",
      body: "للنقد أو الندم على شيء لم يحدث في الماضي.",
      en: "The problem {a:should have been} {v:reported} immediately." }
  ],
  examples: [
    ["{s:This form} {a:must be} {v:completed} in black ink.", "يجب تعبئة هذا النموذج بالحبر الأسود."],
    ["{s:The museum} {a:can be} {v:visited} free on Fridays.", "يمكن زيارة المتحف مجانًا يوم الجمعة."],
    ["{s:More money} {a:should be} {v:spent} on education.", "يجب إنفاق مزيد من المال على التعليم."],
    ["{s:The flight} {a:might be} {v:delayed}.", "قد تتأخر الرحلة."],
    ["{s:The building} {a:could have been} {v:saved}.", "كان يمكن إنقاذ المبنى."]
  ],
  mistakes: [
    ["This must be finish today.", "This must be finished today.", "التصريف الثالث بعد `be`."],
    ["The rules should followed.", "The rules should be followed.", "ينقص `be`."],
    ["It can been done.", "It can be done.", "بعد الفعل الناقص `be` وليس `been`."],
    ["It should have be checked.", "It should have been checked.", "للماضي: `have been`."]
  ],
  ielts: {
    text: "هذه أقوى أداة لكتابة الحلول في **Writing Task 2**: `Stricter laws should be introduced`, `This issue must be addressed`. تجعل أسلوبك رسميًا وموضوعيًا بدل `I think the government should...` المكررة.",
    en: "In my view, public transport should be made cheaper, and more cycle lanes could be built in city centres."
  },
  questions: [
    { t: "mcq", q: "Smoking ___ in public places.", o: ["should ban", "should be banned", "should banned", "should be ban"], a: 1,
      why: "`should be` + `banned`." },
    { t: "mcq", q: "The answer ___ in the textbook.", o: ["can find", "can be found", "can found", "can be find"], a: 1,
      why: "`can be found`." },
    { t: "mcq", q: "The accident ___ if the driver had been careful.", o: ["could avoid", "could have avoided", "could have been avoided", "could be avoid"], a: 2,
      why: "ماضٍ مجهول: `could have been avoided`." },
    { t: "mcq", q: "All bags ___ checked at the entrance.", o: ["have to", "have to be", "has to be", "have be"], a: 1,
      why: "`have to be` + التصريف الثالث." },
    { t: "fill", q: "Tickets must ___ (buy) in advance.", a: ["be bought"],
      why: "`be bought`." },
    { t: "fill", q: "This medicine shouldn't ___ (take) on an empty stomach.", a: ["be taken"],
      why: "`be taken`." },
    { t: "fill", q: "The report should ___ (send) last week, but it wasn't.", a: ["have been sent"],
      why: "ماضٍ لم يحدث: `have been sent`." },
    { t: "fill", q: "Old buildings might ___ (destroy) in an earthquake.", a: ["be destroyed"],
      why: "`be destroyed`." },
    { t: "fix", q: "Pollution must be reduce.", a: ["Pollution must be reduced."],
      why: "التصريف الثالث: `reduced`." },
    { t: "fix", q: "The rooms should cleaned every day.", a: ["The rooms should be cleaned every day."],
      why: "ينقص `be`." },
    { t: "fix", q: "The problem could have solved earlier.", a: ["The problem could have been solved earlier."],
      why: "ماضٍ مجهول: `have been solved`." },
    { t: "rewrite", q: "The government should improve public transport.", ask: "حوّل إلى المبني للمجهول.",
      a: ["Public transport should be improved.", "Public transport should be improved by the government."],
      why: "`should improve` تصبح `should be improved`." },
    { t: "rewrite", q: "You must not touch this button.", ask: "حوّل إلى المبني للمجهول.",
      a: ["This button must not be touched.", "This button mustn't be touched."],
      why: "`must not be touched`." }
  ]
};
