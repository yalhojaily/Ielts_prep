// الرسوم التوضيحية للقواعد 31–60
window.VISUALS = window.VISUALS || {};
Object.assign(window.VISUALS, {

31: [
  { type: "chain", title: "قاعدة الشرط الخيالي: خطوة إلى الوراء",
    steps: [
      { t: "{v:present}", s: "الواقع الآن" },
      { t: "{v:past}", s: "خيال في الحاضر (النوع 2)" },
      { t: "{a:had} + {v:v3}", s: "خيال في الماضي (النوع 3)" }
    ], arrows: ["أبعد عن الواقع", "أبعد"],
    caption: "كلما ابتعد الشرط عن الواقع، رجع الفعل بعد `if` زمنًا إلى الوراء." },
  { type: "groups", title: "النوع 1 أم 2؟ حسب رأيك أنت", vs: true,
    groups: [
      { label: "أراه محتملًا", sub: "النوع 1", items: ["If I {v:get} the job, I{a:'ll} move."] },
      { label: "أراه بعيدًا", sub: "النوع 2", tone: "alt", items: ["If I {v:got} the job, I{a:'d} move."] }
    ] }
],

32: [
  { type: "scale", title: "سلّم الاحتمال", ends: ["مستبعد", "شبه مؤكد"],
    items: [
      { label: "is bound to", v: 95, note: "شبه مؤكد" },
      { label: "will probably", v: 80 },
      { label: "is likely to", v: 70 },
      { label: "may · might · could", v: 50, note: "غير متأكد" },
      { label: "is unlikely to", v: 25 },
      { label: "probably won't", v: 15 }
    ] },
  { type: "groups", title: "انتبه للنفي", vs: true,
    groups: [
      { label: "might not", sub: "ربما لا", items: ["He {a:might not} come."] },
      { label: "couldn't", sub: "مستحيل", tone: "alt", items: ["He {a:couldn't} come."] }
    ] }
],

33: [
  { type: "transform", title: "التمني يرجع الزمن خطوة",
    rows: [
      { label: "الواقع", words: ["s:I", "n:don't", "v:have", "time."], arrow: "أتمنى" },
      { label: "التمني", words: ["s:I", "+x:wish", "s:I", "v:had", "time."] }
    ],
    links: [[0, 0, 2], [0, 2, 3, "خطوة للماضي"]] },
  { type: "matrix", title: "أربعة أنواع من التمني",
    cols: ["الموقف", "الواقع", "ما نقوله"],
    rows: [
      ["الحاضر", "I'm not tall.", "I wish I {v:were} taller."],
      ["الماضي (ندم)", "I didn't study.", "I wish I {a:had} {v:studied}."],
      ["قدرة", "I can't swim.", "I wish I {a:could} swim."],
      ["إزعاج", "He's noisy.", "I wish he {a:would} stop."]
    ] }
],

34: [
  { type: "transform", title: "إذا وُجد مساعد: نقدّمه",
    rows: [
      { words: ["s:She", "a:is", "tired."], arrow: "سؤال" },
      { words: ["a:Is", "s:she", "tired?"] }
    ],
    links: [[0, 1, 0], [0, 0, 1]] },
  { type: "transform", title: "إذا لم يوجد: نضيف do / does / did",
    rows: [
      { words: ["s:He", "v:works."], arrow: "سؤال" },
      { words: ["+a:Does", "s:he", "v:work?"] }
    ],
    links: [[0, 1, 0, "s"], [0, 0, 1], [0, 1, 2]] },
  { type: "flow", title: "خطوة واحدة تكفي",
    steps: [{ q: "في الجملة `be` أو مساعد أو فعل ناقص؟", yes: "قدّمه: `Is she…? Can you…?`" }],
    "else": "أضف `do / does / did`" }
],

35: [
  { type: "groups", title: "عن ماذا تسأل كل أداة؟", hub: "أدوات الاستفهام",
    groups: [
      { label: "شخص", items: ["who"] },
      { label: "شيء", items: ["what", "which"] },
      { label: "مكان وزمان", items: ["where", "when"] },
      { label: "سبب", items: ["why"] },
      { label: "ملكية", items: ["whose"] },
      { label: "طريقة وكمية", items: ["how", "how much", "how many", "how often", "how long"] }
    ] },
  { type: "groups", title: "how much أم how many؟", vs: true,
    groups: [
      { label: "how many", sub: "معدود جمع", items: ["How many brothers?"] },
      { label: "how much", sub: "غير معدود والسعر", tone: "alt", items: ["How much water?", "How much is it?"] }
    ] }
],

36: [
  { type: "groups", title: "مغلق أم مفتوح؟", vs: true,
    groups: [
      { label: "مغلق", sub: "جوابه نعم أو لا", tone: "muted", items: ["Did you like it?"] },
      { label: "مفتوح", sub: "يطلب معلومة أو رأيًا", items: ["What did you like about it?"] }
    ] },
  { type: "transform", title: "حرف الجر ينتقل إلى نهاية السؤال",
    rows: [
      { label: "رسمي جدًا", words: ["x:To", "q:whom", "are you talking?"], arrow: "طبيعي" },
      { label: "الكلام الطبيعي", words: ["q:Who", "are you talking", "x:to?"] }
    ],
    links: [[0, 0, 2], [0, 1, 0]] }
],

37: [
  { type: "transform", title: "السؤال عن الفاعل: بلا did",
    rows: [
      { words: ["s:Ali", "v:called", "x:Sara."], arrow: "من اتصل؟" },
      { words: ["q:Who", "v:called", "x:Sara?"] }
    ],
    links: [[0, 0, 0, "الفاعل"], [0, 1, 1]] },
  { type: "transform", title: "السؤال عن المفعول: مع did",
    rows: [
      { words: ["s:Ali", "v:called", "x:Sara."], arrow: "بمن اتصل؟" },
      { words: ["q:Who", "+a:did", "s:Ali", "v:call?"] }
    ],
    links: [[0, 2, 0, "المفعول"], [0, 0, 2], [0, 1, 3]] }
],

38: [
  { type: "transform", title: "في السؤال غير المباشر يعود الترتيب خبريًا",
    rows: [
      { label: "مباشر", words: ["q:Where", "a:is", "s:the bank?"], arrow: "غير مباشر" },
      { label: "غير مباشر", words: ["Could you tell me", "q:where", "s:the bank", "a:is?"] }
    ],
    links: [[0, 0, 1], [0, 1, 3], [0, 2, 2]] },
  { type: "transform", title: "و do / does / did تختفي",
    rows: [
      { words: ["q:What time", "-a:does", "s:it", "v:open?"], arrow: "غير مباشر" },
      { words: ["Do you know", "q:what time", "s:it", "v:opens?"] }
    ],
    links: [[0, 0, 1], [0, 2, 2], [0, 3, 3, "s"]] }
],

39: [
  { type: "transform", title: "الذيل ينسخ المساعد ويعكسه",
    rows: [
      { words: ["s:She", "a:can", "v:drive,"], arrow: "أضف الذيل" },
      { words: ["s:She", "a:can", "v:drive,", "+a:can't", "+s:she?"] }
    ],
    links: [[0, 1, 3, "عكس"], [0, 0, 4, "ضمير"]] },
  { type: "groups", title: "القاعدة", vs: true, vsLabel: "عكس",
    groups: [
      { label: "مثبت ← ذيل منفي", items: ["It's cold, {a:isn't} it?"] },
      { label: "منفي ← ذيل مثبت", tone: "alt", items: ["You can't swim, {a:can} you?", "He never smokes, {a:does} he?"] }
    ] }
],

40: [
  { type: "transform", title: "رد قصير يُظهر الاهتمام",
    rows: [
      { label: "قال", words: ["s:I", "v:went", "to Japan."], arrow: "ترد" },
      { label: "ترد", words: ["+a:Did", "+s:you?"] }
    ],
    links: [[0, 1, 0, "did"], [0, 0, 1, "you"]] },
  { type: "groups", title: "الموافقة", vs: true,
    groups: [
      { label: "بعد المثبت", items: ["I like tea.", "{x:So} {a:do} I."] },
      { label: "بعد المنفي", tone: "alt", items: ["I can't swim.", "{x:Neither} {a:can} I."] }
    ] }
],

41: [
  { type: "transform", title: "الإجابة القصيرة تكرر المساعد",
    rows: [
      { label: "السؤال", words: ["a:Have", "s:you", "v:eaten?"], arrow: "الإجابة" },
      { label: "الإجابة", words: ["Yes,", "s:I", "a:have."] }
    ],
    links: [[0, 0, 2], [0, 1, 1]] },
  { type: "groups", title: "الاختصار", vs: true,
    groups: [
      { label: "الإثبات: بلا اختصار", items: ["Yes, I {a:am}.", "Yes, she {a:is}."] },
      { label: "النفي: نختصر", tone: "alt", items: ["No, I{a:'m not}.", "No, she {a:isn't}."] }
    ] }
],

42: [
  { type: "flow", title: "خريطة تكوين أي سؤال",
    steps: [
      { q: "تسأل عن **الفاعل**؟", yes: "{q:Who} {v:called}? (بلا did)" },
      { q: "السؤال **غير مباشر**؟", yes: "…{q:where} {s:he} {v:lives}." },
      { q: "يوجد مساعد أو فعل ناقص؟", yes: "قدّمه: {a:Can} {s:you}…?" }
    ],
    "else": "أضف {a:do / does / did}" }
],

43: [
  { type: "transform", title: "ما يتغير عند النقل",
    rows: [
      { label: "كلام مباشر", words: ["Ali said:", "s:\"I", "a:am", "tired.\""], arrow: "منقول" },
      { label: "كلام منقول", words: ["Ali said", "s:he", "a:was", "tired."] }
    ],
    links: [[0, 1, 1, "الضمير"], [0, 2, 2, "الزمن"]] },
  { type: "groups", title: "say أم tell؟", vs: true,
    groups: [
      { label: "say", sub: "بلا شخص بعده", items: ["He said (that)…", "He said to me…"] },
      { label: "tell", sub: "شخص بعده مباشرة", tone: "alt", items: ["He told me (that)…"] }
    ] }
],

44: [
  { type: "chain", title: "سلّم إرجاع الزمن",
    steps: [
      { t: "I {v:work}", s: "مضارع" },
      { t: "he {v:worked}", s: "ماضٍ" },
      { t: "he {a:had} {v:worked}", s: "ماضٍ تام" }
    ], arrows: ["خطوة", "خطوة"],
    caption: "الماضي البسيط والمضارع التام كلاهما يرجعان إلى الماضي التام." },
  { type: "matrix", title: "جدول الإرجاع",
    cols: ["الكلام المباشر", "الكلام المنقول"],
    rows: [
      ["{a:am / is}", "{a:was}"],
      ["{a:are}", "{a:were}"],
      ["{v:work} / {a:am} {v:working}", "{v:worked} / {a:was} {v:working}"],
      ["{v:worked} / {a:have} {v:worked}", "{a:had} {v:worked}"],
      ["{a:will} · {a:can} · {a:may}", "{a:would} · {a:could} · {a:might}"],
      ["{a:should} · {a:would} · {a:could}", "لا تتغير"]
    ] }
],

45: [
  { type: "groups", title: "كل فعل نقل له نمط", hub: "أفعال النقل",
    groups: [
      { label: "+ to", items: ["agree", "promise", "refuse", "offer"] },
      { label: "+ شخص + to", items: ["advise", "ask", "remind", "warn", "encourage"] },
      { label: "+ ing", items: ["suggest", "deny", "admit", "recommend"] },
      { label: "+ حرف جر + ing", items: ["apologise for", "insist on", "accuse of"] }
    ] }
],

46: [
  { type: "transform", title: "نقل النهي",
    rows: [
      { label: "قال", words: ["a:\"Don't", "v:touch", "it.\""], arrow: "منقول" },
      { label: "منقول", words: ["He told me", "+n:not", "+a:to", "v:touch", "it."] }
    ],
    links: [[0, 0, 1, "not to"], [0, 1, 3]] },
  { type: "groups", title: "نوعان من النفي", vs: true,
    groups: [
      { label: "جملة منفية", items: ["{a:don't} → {a:didn't}", "{a:won't} → {a:wouldn't}"] },
      { label: "أمر منفي", tone: "alt", items: ["told me {n:not} {a:to} + {v:verb}"] }
    ] }
],

47: [
  { type: "transform", title: "نقل سؤال بأداة استفهام",
    rows: [
      { words: ["q:Where", "-a:do", "s:you", "v:live?"], arrow: "منقول" },
      { words: ["He asked", "q:where", "s:I", "v:lived."] }
    ],
    links: [[0, 0, 1], [0, 2, 2], [0, 3, 3, "ماضٍ"]] },
  { type: "transform", title: "نقل سؤال نعم / لا: نضيف if",
    rows: [
      { words: ["a:Are", "s:you", "OK?"], arrow: "منقول" },
      { words: ["She asked", "+x:if", "s:I", "a:was", "OK."] }
    ],
    links: [[0, 0, 3], [0, 1, 2]] }
],

48: [
  { type: "chain", title: "أربع خطوات لنقل أي كلام", dir: "rtl",
    steps: [
      { t: "فعل النقل", s: "said · told · asked" },
      { t: "الضمائر", s: "I → he" },
      { t: "إرجاع الزمن", s: "is → was" },
      { t: "الزمان والمكان", s: "today → that day" }
    ] },
  { type: "flow", title: "ما نوع الكلام؟",
    steps: [
      { q: "جملة خبرية؟", yes: "said (that) + إرجاع الزمن" },
      { q: "سؤال؟", yes: "asked + `wh / if` + ترتيب خبري" },
      { q: "أمر أو طلب؟", yes: "told / asked + شخص + `(not) to`" }
    ],
    "else": "فعل يصف الكلام: `promised, apologised…`" }
],

49: [
  { type: "groups", title: "أنواع الأفعال", hub: "الأفعال",
    groups: [
      { label: "أساسية", sub: "تحمل المعنى", items: ["eat", "run", "buy"] },
      { label: "مساعدة", sub: "تبني الزمن", items: ["be", "do", "have"] },
      { label: "ناقصة", sub: "تضيف معنى", items: ["can", "must", "should"] },
      { label: "ربط", sub: "بعدها صفة", items: ["be", "seem", "look", "become"] }
    ] },
  { type: "groups", title: "متعدٍّ أم لازم؟", vs: true,
    groups: [
      { label: "متعدٍّ", sub: "يحتاج مفعولًا", items: ["buy something", "raise prices"] },
      { label: "لازم", sub: "بلا مفعول ولا مجهول", tone: "alt", items: ["arrive", "happen", "prices rise"] }
    ] }
],

50: [
  { type: "groups", title: "حدث أم حالة؟", vs: true,
    groups: [
      { label: "أفعال الحدث", sub: "تأتي بـ ing", items: ["run", "eat", "write", "build"] },
      { label: "أفعال الحالة", sub: "بلا ing", tone: "alt", items: ["know", "like", "own", "seem", "agree"] }
    ] },
  { type: "matrix", title: "أفعال بمعنيين",
    cols: ["الفعل", "حالة (بسيط)", "حدث (مستمر)"],
    rows: [
      ["think", "I think it's good.", "I'm thinking about it."],
      ["have", "She has a car.", "She's having lunch."],
      ["see", "I see what you mean.", "I'm seeing the doctor."],
      ["taste", "It tastes good.", "She's tasting the soup."]
    ] }
],

51: [
  { type: "groups", title: "ed- أم ing-؟", vs: true,
    groups: [
      { label: "ing- = الشيء", sub: "يسبب الشعور", items: ["boring", "interesting", "exciting", "confusing"] },
      { label: "ed- = الشخص", sub: "يشعر به", tone: "alt", items: ["bored", "interested", "excited", "confused"] }
    ],
    caption: "The film was **boring**, so I was **bored**." },
  { type: "groups", title: "متى to ومتى ing؟",
    groups: [
      { label: "الغرض", items: ["I went out {a:to} {v:buy} milk."] },
      { label: "بعد حرف الجر", items: ["good at {v:cooking}", "without {v:asking}"] },
      { label: "فاعل الجملة", tone: "alt", items: ["{v:Reading} improves vocabulary."] }
    ] }
],

52: [
  { type: "groups", title: "الفعل الأول يحدد صيغة الثاني",
    groups: [
      { label: "+ to", items: ["want", "hope", "decide", "plan", "refuse", "afford", "manage"] },
      { label: "+ ing", tone: "alt", items: ["enjoy", "finish", "avoid", "mind", "suggest", "keep", "consider"] },
      { label: "كلاهما", tone: "muted", items: ["start", "begin", "like", "love", "prefer"] }
    ] },
  { type: "matrix", title: "أفعال يتغير معناها",
    cols: ["الفعل", "+ ing", "+ to"],
    rows: [
      ["stop", "توقف عن العادة", "توقف لكي يفعل"],
      ["remember", "يتذكر ما فعله", "يتذكر أن يفعل"],
      ["forget", "ينسى ما حدث", "ينسى أن يفعل"],
      ["try", "يجرّب كحل", "يحاول (صعب)"]
    ] }
],

53: [
  { type: "groups", title: "مكان المفعول",
    groups: [
      { label: "+ شخص + to", items: ["want", "ask", "tell", "advise", "allow"] },
      { label: "+ شخص + فعل أصلي", tone: "alt", items: ["make", "let"] },
      { label: "مفعولان", tone: "muted", items: ["give", "send", "show", "lend"] }
    ] },
  { type: "transform", title: "لا نقول want that",
    rows: [
      { words: ["s:I", "v:want", "-that", "s:you", "v:come."], arrow: "تصحيح" },
      { words: ["s:I", "v:want", "x:you", "+a:to", "v:come."] }
    ],
    links: [[0, 3, 2], [0, 4, 4]] }
],

54: [
  { type: "groups", title: "حرف الجر يُحفظ مع الفعل", hub: "فعل + حرف جر ثابت",
    groups: [
      { label: "on", items: ["depend", "rely", "insist", "concentrate"] },
      { label: "to", items: ["listen", "belong"] },
      { label: "for", items: ["wait", "apply", "pay"] },
      { label: "about", items: ["think", "worry", "complain"] },
      { label: "in / with", items: ["believe in", "succeed in", "agree with", "deal with"] }
    ] },
  { type: "groups", title: "أفعال بلا حرف جر (عكس العربية)", hub: "مباشرة",
    groups: [
      { label: "يناقش", items: ["discuss the plan"] },
      { label: "يدخل", items: ["enter the room"] },
      { label: "يتزوج", items: ["marry her"] },
      { label: "يصل إلى", items: ["reach the city"] }
    ] }
],

55: [
  { type: "transform", title: "الضمير يدخل بين الجزأين",
    rows: [
      { words: ["v:Turn", "v:off", "s:the TV."], arrow: "مع ضمير" },
      { words: ["v:Turn", "s:it", "v:off."] }
    ],
    links: [[0, 0, 0], [0, 2, 1, "الضمير في المنتصف"], [0, 1, 2]] },
  { type: "groups", title: "منفصل أم غير منفصل؟", vs: true,
    groups: [
      { label: "منفصل", items: ["turn it off", "pick me up", "write it down"] },
      { label: "غير منفصل", tone: "alt", items: ["look after them", "get on the bus", "run out of milk"] }
    ] }
],

56: [
  { type: "groups", title: "ماذا يضيف كل فعل ناقص؟", hub: "الأفعال الناقصة",
    groups: [
      { label: "قدرة", items: ["can", "could"] },
      { label: "إذن", items: ["may", "can", "could"] },
      { label: "إلزام", items: ["must", "have to"] },
      { label: "نصيحة", items: ["should", "ought to"] },
      { label: "احتمال", items: ["may", "might", "could"] },
      { label: "استنتاج", items: ["must", "can't"] }
    ] },
  { type: "chain", title: "ثلاث قواعد ثابتة",
    steps: [
      { t: "{s:She}", s: "أي فاعل" },
      { t: "{a:can}", s: "بلا s" },
      { t: "{v:swim}", s: "فعل أصلي بلا to" }
    ], arrows: ["+", "+"] }
],

57: [
  { type: "timeline", title: "القدرة عبر الزمن",
    marks: [
      { k: "span", from: -0.95, to: -0.5, label: "I could swim at five." },
      { k: "point", at: -0.3, tone: "alt", label: "I managed to escape." },
      { k: "span", from: -0.12, to: 0.12, label: "I can drive." },
      { k: "point", at: 0.6, tone: "muted", label: "I'll be able to come." }
    ],
    caption: "قدرة عامة في الماضي = `could`. نجاح في موقف محدد = `was able to / managed to`. المستقبل = `will be able to`." }
],

58: [
  { type: "scale", title: "من البسيط إلى الأكثر تهذيبًا", ends: ["عادي", "مهذب جدًا"],
    items: [
      { label: "Can I…?", v: 30 },
      { label: "Could I…?", v: 55 },
      { label: "May I…?", v: 70 },
      { label: "Would you mind…?", v: 85 },
      { label: "I was wondering if…", v: 100 }
    ] },
  { type: "groups", title: "ثلاثة أغراض",
    groups: [
      { label: "إذن لنفسك", items: ["Could I sit here?"] },
      { label: "طلب من غيرك", items: ["Could you help me?"] },
      { label: "عرض", tone: "alt", items: ["Shall I carry it?", "Would you like some tea?"] }
    ] }
],

59: [
  { type: "scale", title: "قوة النصيحة", ends: ["اقتراح خفيف", "إلزام"],
    items: [
      { label: "You could…", v: 30, note: "فكرة ممكنة" },
      { label: "You should…", v: 55 },
      { label: "You ought to…", v: 60 },
      { label: "You'd better…", v: 85, note: "وإلا فهناك مشكلة" },
      { label: "You must…", v: 100 }
    ] },
  { type: "groups", title: "صيغ الاقتراح الجماعي",
    groups: [
      { label: "Let's + فعل", items: ["Let's go."] },
      { label: "Why don't we + فعل", items: ["Why don't we eat out?"] },
      { label: "How about + ing", tone: "alt", items: ["How about going?"] }
    ] }
],

60: [
  { type: "groups", title: "الفرق الأهم في النفي", vs: true, vsLabel: "≠",
    groups: [
      { label: "mustn't", sub: "ممنوع", items: ["You mustn't smoke here."] },
      { label: "don't have to", sub: "ليس ضروريًا، لك الخيار", tone: "alt", items: ["You don't have to come."] }
    ] },
  { type: "timeline", title: "الإلزام عبر الزمن",
    marks: [
      { k: "point", at: -0.6, label: "I had to wait." },
      { k: "point", at: 0, label: "I must / have to go." },
      { k: "point", at: 0.6, label: "You'll have to wait." }
    ] }
]
});
