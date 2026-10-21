// الرسوم التوضيحية للقواعد 91–120
window.VISUALS = window.VISUALS || {};
Object.assign(window.VISUALS, {

91: [
  { type: "groups", title: "كلمات قصيرة تحل محل المكرر", hub: "الاستبدال",
    groups: [
      { label: "one / ones", sub: "بدل اسم معدود", items: ["I need a new one."] },
      { label: "so", sub: "بدل جملة مثبتة", items: ["I think so."] },
      { label: "not", sub: "بدل جملة منفية", items: ["I hope not."] },
      { label: "do so", sub: "بدل الفعل (رسمي)", items: ["You may do so."] }
    ] }
],

92: [
  { type: "chain", title: "ترتيب الصفات قبل الاسم",
    steps: [
      { t: "beautiful", s: "رأي" },
      { t: "big", s: "حجم" },
      { t: "old", s: "عمر" },
      { t: "round", s: "شكل" },
      { t: "red", s: "لون" },
      { t: "Turkish", s: "أصل" },
      { t: "silk", s: "مادة" },
      { t: "carpet", s: "الاسم", hi: true }
    ],
    caption: "في الواقع نستخدم صفتين أو ثلاثًا فقط: `a lovely old wooden table`." },
  { type: "groups", title: "الصفة لا تتغير", vs: true,
    groups: [
      { label: "صحيح", items: ["a tall man", "two tall men", "kind people"] },
      { label: "خطأ", tone: "muted", items: ["talls men", "kinds people"] }
    ] }
],

93: [
  { type: "groups", title: "عادية أم قوية؟", vs: true,
    groups: [
      { label: "متدرجة + very", items: ["very cold", "very hot", "very big", "very tired", "very good"] },
      { label: "قوية + absolutely", tone: "alt", items: ["absolutely freezing", "absolutely boiling", "absolutely huge", "absolutely exhausted", "absolutely excellent"] }
    ] },
  { type: "chain", title: "من العادية إلى القوية",
    steps: [{ t: "cold" }, { t: "freezing", hi: true }], arrows: ["أقوى"] }
],

94: [
  { type: "flow", title: "كيف أكوّن المقارنة؟",
    steps: [
      { q: "صفة شاذة؟", yes: "good → better · bad → worse" },
      { q: "مقطع واحد؟", yes: "tall → taller · big → bigger" },
      { q: "تنتهي بـ `y`؟", yes: "easy → easier" }
    ],
    "else": "more + صفة: `more expensive`" },
  { type: "scale", title: "مقدار الفرق", ends: ["فرق صغير", "فرق كبير"],
    items: [
      { label: "much / far bigger", v: 90 },
      { label: "a lot bigger", v: 80 },
      { label: "slightly / a bit bigger", v: 25 }
    ] }
],

95: [
  { type: "chain", title: "كلما … كلما",
    steps: [
      { t: "The more you practise,", s: "السبب" },
      { t: "the better you get.", s: "النتيجة", hi: true }
    ] },
  { type: "chain", title: "تغير مستمر",
    steps: [{ t: "bigger" }, { t: "and" }, { t: "bigger", hi: true }],
    caption: "مع الصفة الطويلة: `more and more popular`." }
],

96: [
  { type: "groups", title: "مقارنة بـ as … as",
    groups: [
      { label: "مساوٍ", items: ["as tall as"] },
      { label: "أقل", tone: "alt", items: ["not as hot as"] },
      { label: "أضعاف", tone: "muted", items: ["twice as big as"] }
    ] },
  { type: "transform", title: "قلب المقارنة",
    rows: [
      { words: ["s:Taif", "v:is", "x:cooler than", "s:Jeddah."], arrow: "بمعنى" },
      { words: ["s:Jeddah", "x:isn't as cool as", "s:Taif."] }
    ],
    links: [[0, 3, 0], [0, 0, 2]] }
],

97: [
  { type: "matrix", title: "ثلاث درجات",
    cols: ["الصفة", "مقارنة", "تفضيل"],
    rows: [
      ["tall", "taller", "the tallest"],
      ["easy", "easier", "the easiest"],
      ["expensive", "more expensive", "the most expensive"],
      ["good", "better", "the best"],
      ["bad", "worse", "the worst"]
    ] },
  { type: "groups", title: "in أم of بعد التفضيل؟", vs: true,
    groups: [
      { label: "in + مكان / مجموعة", items: ["the best in the world", "the tallest in my family"] },
      { label: "of + عدد / فترة", tone: "alt", items: ["the youngest of the three", "the hottest month of the year"] }
    ] }
],

98: [
  { type: "groups", title: "الصفة تصف الاسم، والظرف يصف الفعل", vs: true,
    groups: [
      { label: "صفة", items: ["a careful driver", "She looks happy."] },
      { label: "ظرف", tone: "alt", items: ["He drives carefully.", "She sang happily."] }
    ] },
  { type: "chain", title: "تكوين الظرف",
    steps: [{ t: "quick → quickly" }, { t: "easy → easily" }, { t: "good → well", hi: true }, { t: "fast → fast" }],
    arrows: ["·", "·", "·"] }
],

99: [
  { type: "matrix", title: "مقارنة الظروف",
    cols: ["الظرف", "مقارنة", "تفضيل"],
    rows: [
      ["slowly", "more slowly", "the most slowly"],
      ["fast", "faster", "the fastest"],
      ["early", "earlier", "the earliest"],
      ["well", "better", "the best"],
      ["badly", "worse", "the worst"]
    ] }
],

100: [
  { type: "scale", title: "قوة ظرف الدرجة", ends: ["أضعف", "أقوى"],
    items: [
      { label: "extremely", v: 95 },
      { label: "very · really", v: 80 },
      { label: "quite · fairly · pretty", v: 55 },
      { label: "a bit · slightly", v: 25 }
    ] },
  { type: "groups", title: "مع صيغة المقارنة", vs: true,
    groups: [
      { label: "فرق كبير", items: ["much bigger", "far better"] },
      { label: "فرق صغير", tone: "alt", items: ["slightly cheaper", "a bit older"] }
    ],
    caption: "لا نقول `very bigger`." }
],

101: [
  { type: "timeline", title: "already · just · still · yet",
    marks: [
      { k: "point", at: -0.45, label: "I've already eaten." },
      { k: "point", at: -0.06, tone: "alt", label: "She has just left." },
      { k: "span", from: -0.85, to: 0.25, label: "He still lives here." },
      { k: "point", at: 0.5, tone: "muted", label: "Not finished yet." }
    ],
    caption: "`already` قبل المتوقع، `just` قبل لحظات، `still` ما زال مستمرًا، `yet` لم يحدث بعد." }
],

102: [
  { type: "scale", title: "سلّم التكرار", values: true, ends: ["أبدًا", "دائمًا"],
    items: [
      { label: "always", v: 100 },
      { label: "usually", v: 90 },
      { label: "often", v: 70 },
      { label: "sometimes", v: 50 },
      { label: "occasionally", v: 30 },
      { label: "rarely · seldom", v: 10 },
      { label: "never", v: 0 }
    ] },
  { type: "groups", title: "موقع الظرف", vs: true,
    groups: [
      { label: "قبل الفعل الأساسي", items: ["She {x:always} {v:drinks} tea."] },
      { label: "بعد فعل be", tone: "alt", items: ["He {v:is} {x:always} late."] }
    ] }
],

103: [
  { type: "groups", title: "so أم such؟", vs: true,
    groups: [
      { label: "so + صفة / ظرف", items: ["so hot", "so quickly"] },
      { label: "such (a) + صفة + اسم", tone: "alt", items: ["such a hot day", "such nice people"] }
    ] },
  { type: "transform", title: "من so إلى such",
    rows: [
      { words: ["s:It", "v:was", "x:so", "hot."], arrow: "مع اسم" },
      { words: ["s:It", "v:was", "x:such a", "hot", "+v:day."] }
    ],
    links: [[0, 2, 2], [0, 3, 3]] }
],

104: [
  { type: "scale", title: "too · enough", ends: ["قليل", "أكثر من اللازم"],
    items: [
      { label: "too hot to drink", v: 95, note: "أكثر من اللازم: مشكلة" },
      { label: "hot enough", v: 60, note: "بالقدر الكافي" },
      { label: "not hot enough", v: 30, note: "أقل من اللازم" }
    ] },
  { type: "groups", title: "الموقع", vs: true,
    groups: [
      { label: "too قبل الصفة", items: ["too small"] },
      { label: "enough بعد الصفة وقبل الاسم", tone: "alt", items: ["big enough", "enough money"] }
    ] }
],

105: [
  { type: "groups", title: "وظائف حروف الجر", hub: "حروف الجر",
    groups: [
      { label: "مكان", items: ["in", "on", "at", "under", "between"] },
      { label: "زمان", items: ["at", "on", "in", "since", "for", "by"] },
      { label: "اتجاه", items: ["to", "into", "through", "across"] },
      { label: "طريقة وأخرى", items: ["by", "with", "about", "like"] }
    ] },
  { type: "chain", title: "ماذا يأتي بعد حرف الجر؟",
    steps: [
      { t: "for", s: "حرف الجر" },
      { t: "the job / {s:him} / {v:helping}", s: "اسم · ضمير مفعول · ing" }
    ] }
],

106: [
  { type: "nested", title: "at داخل on داخل in",
    rings: [
      { label: "at", note: "نقطة محددة", items: ["at the door", "at the bus stop", "at 15 King Fahd Road"] },
      { label: "on", note: "سطح أو خط أو شارع", items: ["on the table", "on the wall", "on King Fahd Road"] },
      { label: "in", note: "مساحة مغلقة أو منطقة", items: ["in the room", "in Riyadh", "in Saudi Arabia"] }
    ],
    caption: "مثل العنوان: البيت **at** رقم 15، **on** شارع الملك فهد، **in** الرياض." },
  { type: "groups", title: "وسائل النقل", vs: true,
    groups: [
      { label: "in: صغيرة", items: ["in a car", "in a taxi"] },
      { label: "on: كبيرة أو تركبها", tone: "alt", items: ["on the bus", "on a plane", "on a bike"] }
    ] }
],

107: [
  { type: "nested", title: "at داخل on داخل in",
    rings: [
      { label: "at", note: "ساعة ونقطة", items: ["at 5 p.m.", "at noon", "at night"] },
      { label: "on", note: "يوم وتاريخ", items: ["on Monday", "on 5 May", "on my birthday"] },
      { label: "in", note: "شهر وسنة وفصل وجزء من اليوم", items: ["in July", "in 2025", "in summer", "in the morning"] }
    ],
    caption: "الدائرة الأصغر = الوقت الأدق. ولا حرف جر مع `this, next, last, every`." },
  { type: "groups", title: "until أم by؟", vs: true,
    groups: [
      { label: "until = حتى (استمرار)", items: ["I'll wait until 5."] },
      { label: "by = في موعد أقصاه", tone: "alt", items: ["Send it by 5."] }
    ] }
],

108: [
  { type: "groups", title: "حروف جر للطريقة والوسيلة",
    groups: [
      { label: "by = وسيلة", items: ["by car", "by email", "by hand"] },
      { label: "with = أداة", items: ["with a knife", "with a pen"] },
      { label: "on foot", tone: "muted", items: ["مشيًا"] }
    ] },
  { type: "groups", title: "like أم as؟", vs: true,
    groups: [
      { label: "like = تشبيه", sub: "ليس حقيقة", items: ["He talks like a doctor."] },
      { label: "as = دور حقيقي", sub: "هو كذلك فعلًا", tone: "alt", items: ["He works as a doctor."] }
    ] }
],

109: [
  { type: "groups", title: "حرف الجر الملازم", hub: "صفة / اسم + حرف جر ثابت",
    groups: [
      { label: "at", items: ["good at", "surprised at"] },
      { label: "of", items: ["afraid of", "proud of", "aware of"] },
      { label: "in", items: ["interested in", "increase in"] },
      { label: "on", items: ["effect on", "impact on", "keen on"] },
      { label: "for", items: ["responsible for", "reason for", "famous for"] },
      { label: "to / with", items: ["similar to", "solution to", "satisfied with"] }
    ] }
],

110: [
  { type: "groups", title: "أدوات العطف", hub: "جملة , أداة + جملة",
    groups: [
      { label: "إضافة", items: ["and"] },
      { label: "تناقض", items: ["but", "yet"] },
      { label: "اختيار", items: ["or"] },
      { label: "نتيجة", items: ["so"] }
    ] },
  { type: "groups", title: "أداة واحدة فقط", vs: true,
    groups: [
      { label: "خطأ", tone: "muted", items: ["Although…, but…", "Because…, so…"] },
      { label: "صحيح", items: ["Although…, …", "…, but …", "…, so …"] }
    ] }
],

111: [
  { type: "groups", title: "أدوات الجملة التابعة", hub: "جملة تابعة لا تكتمل وحدها",
    groups: [
      { label: "سبب", items: ["because", "as", "since"] },
      { label: "تناقض", items: ["although", "even though", "whereas"] },
      { label: "زمان", items: ["when", "while", "until", "before"] },
      { label: "غرض", items: ["so that"] }
    ] },
  { type: "transform", title: "لا نجمع although و but",
    rows: [
      { words: ["x:Although", "it was late,", "-x:but", "we continued."], arrow: "تصحيح" },
      { words: ["x:Although", "it was late,", "we continued."] }
    ],
    links: [[0, 0, 0], [0, 3, 2]] }
],

112: [
  { type: "groups", title: "أدوات تبدأ جملة جديدة", hub: "جملة. أداة, جملة.",
    groups: [
      { label: "إضافة", items: ["In addition,", "Moreover,"] },
      { label: "تناقض", items: ["However,", "On the other hand,"] },
      { label: "نتيجة", items: ["Therefore,", "As a result,"] },
      { label: "مثال", items: ["For example,", "such as"] }
    ] },
  { type: "chain", title: "However ليست but",
    steps: [{ t: "It's cheap." }, { t: "However,", hi: true }, { t: "it's slow." }],
    caption: "`but` تربط داخل الجملة: `It's cheap, but it's slow.`" }
],

113: [
  { type: "matrix", title: "كل علاقة بثلاثة مواقع",
    cols: ["العلاقة", "داخل الجملة", "جملة جديدة", "قبل اسم"],
    rows: [
      ["تناقض", "but · although", "However,", "despite"],
      ["سبب", "because · as", "—", "because of · due to"],
      ["نتيجة", "so", "Therefore,", "as a result of"],
      ["إضافة", "and", "In addition,", "as well as"]
    ] }
],

114: [
  { type: "groups", title: "البادئات", hub: "بادئة + كلمة",
    groups: [
      { label: "عكس", items: ["unhappy", "impossible", "illegal", "irregular", "disagree"] },
      { label: "re- من جديد", items: ["rewrite", "rebuild"] },
      { label: "mis- خطأ", items: ["misunderstand"] },
      { label: "over- / under-", items: ["overcrowded", "underpaid"] }
    ] },
  { type: "flow", title: "im أم il أم ir؟",
    steps: [
      { q: "الكلمة تبدأ بـ `p, m, b`؟", yes: "im-: impossible" },
      { q: "تبدأ بـ `l`؟", yes: "il-: illegal" },
      { q: "تبدأ بـ `r`؟", yes: "ir-: irregular" }
    ],
    "else": "in- أو un- (تُحفظ)" }
],

115: [
  { type: "chain", title: "عائلة الكلمة",
    steps: [
      { t: "succeed", s: "فعل" },
      { t: "success", s: "اسم" },
      { t: "successful", s: "صفة" },
      { t: "successfully", s: "ظرف" }
    ] },
  { type: "groups", title: "اللاحقة تحدد نوع الكلمة",
    groups: [
      { label: "اسم", items: ["-ment", "-tion", "-ness", "-ity"] },
      { label: "صفة", items: ["-ful", "-less", "-ous", "-able"] },
      { label: "فعل", items: ["-ise", "-en", "-ify"] },
      { label: "ظرف", tone: "alt", items: ["-ly"] }
    ] }
],

116: [
  { type: "groups", title: "make أم do؟", vs: true,
    groups: [
      { label: "make", sub: "تصنع شيئًا جديدًا", items: ["a mistake", "a decision", "money", "progress", "a phone call"] },
      { label: "do", sub: "تؤدي عملًا أو نشاطًا", tone: "alt", items: ["homework", "business", "research", "exercise", "your best"] }
    ] },
  { type: "groups", title: "أزواج متشابهة", hub: "انتبه",
    groups: [
      { label: "borrow ← / lend →", items: ["Can I borrow your pen?", "Can you lend me your pen?"] },
      { label: "rise / raise", items: ["Prices rise.", "They raise prices."] },
      { label: "lose / miss", items: ["lose your keys", "miss the bus"] },
      { label: "fun / funny", items: ["fun = ممتع", "funny = مضحك"] }
    ] }
],

117: [
  { type: "chain", title: "تسلسل الخطوات",
    steps: [{ t: "First," }, { t: "Then," }, { t: "Next," }, { t: "After that," }, { t: "Finally,", hi: true }] },
  { type: "groups", title: "ثلاث كلمات للنهاية",
    groups: [
      { label: "Finally", sub: "آخر نقطة في قائمة", items: ["Finally, add salt."] },
      { label: "In the end", sub: "النتيجة بعد فترة", items: ["In the end, we stayed."] },
      { label: "At last", sub: "أخيرًا بعد انتظار", tone: "alt", items: ["At last, you're here!"] }
    ] }
],

118: [
  { type: "groups", title: "إدارة اتجاه الحديث",
    groups: [
      { label: "تصحيح", items: ["Actually, …", "I mean, …", "What I meant was…"] },
      { label: "موضوع جديد", items: ["By the way, …", "Speaking of which, …"] },
      { label: "العودة", tone: "alt", items: ["Anyway, …", "Going back to…"] }
    ],
    caption: "`Actually` تعني «في الحقيقة»، وليس «حاليًا» (`currently`)." }
],

119: [
  { type: "scale", title: "من المطلق إلى المتحفظ", ends: ["متحفظ", "مطلق"],
    items: [
      { label: "All people believe…", v: 100, note: "تعميم يصعب الدفاع عنه" },
      { label: "Most people believe…", v: 75 },
      { label: "It seems that…", v: 55 },
      { label: "It could be argued that…", v: 40, note: "أسلوب أكاديمي متوازن" }
    ] },
  { type: "groups", title: "القرار والتردد", vs: true,
    groups: [
      { label: "قررت", items: ["I've decided to…", "I'm going with…"] },
      { label: "متردد", tone: "alt", items: ["I'm torn between…", "I haven't made up my mind."] }
    ] }
],

120: [
  { type: "chain", title: "بنية الإجابة الجيدة في المحادثة",
    steps: [
      { t: "Well, …", s: "كسب وقت" },
      { t: "Yes, I do.", s: "إجابة مباشرة" },
      { t: "The thing is, …", s: "السبب" },
      { t: "For example, …", s: "مثال", hi: true }
    ] },
  { type: "groups", title: "عبارات المحادثة",
    groups: [
      { label: "كسب وقت", items: ["Let me think…", "That's a good question."] },
      { label: "إظهار الاهتمام", items: ["Really?", "That sounds great!"] },
      { label: "طلب توضيح", tone: "alt", items: ["Sorry, could you repeat that?", "What do you mean by…?"] }
    ] }
]
});
