// الرسوم التوضيحية للقواعد 61–90
window.VISUALS = window.VISUALS || {};
Object.assign(window.VISUALS, {

61: [
  { type: "scale", title: "كم أنت متأكد من استنتاجك؟", ends: ["متأكد أنه خطأ", "متأكد أنه صحيح"],
    items: [
      { label: "must be", v: 95, note: "لا بد أنه" },
      { label: "may · might · could be", v: 50, note: "ربما" },
      { label: "can't be", v: 5, note: "مستحيل أن يكون" }
    ] },
  { type: "groups", title: "الآن أم في الماضي؟", vs: true,
    groups: [
      { label: "عن الآن", items: ["He {a:must be} tired.", "It {a:can't be} true."] },
      { label: "عن الماضي", tone: "alt", items: ["It {a:must have} {v:rained}.", "She {a:can't have} {v:seen} me."] }
    ] }
],

62: [
  { type: "groups", title: "أنواع الإمكان",
    groups: [
      { label: "الآن / المستقبل", items: ["It {a:may} rain.", "It {a:might} snow."] },
      { label: "إمكان عام", items: ["Driving {a:can} be stressful."] },
      { label: "الماضي", tone: "alt", items: ["He {a:may have} {v:left}.", "You {a:could have} {v:asked}!"] }
    ] },
  { type: "timeline", title: "could have = كان ممكنًا لكنه لم يحدث",
    marks: [
      { k: "point", at: -0.55, tone: "muted", label: "You could have been hurt!" }
    ],
    caption: "النقطة باهتة لأن الحدث **لم يقع**: كان الخطر ممكنًا لكنك لم تُصب." }
],

63: [
  { type: "flow", title: "اختر الأداة",
    steps: [
      { q: "هل الاسم **محدد** يعرفه السامع؟", yes: "{x:the}" },
      { q: "هل هو **مفرد معدود**؟", yes: "{x:a / an}" }
    ],
    "else": "بلا أداة: `Water is essential.`" },
  { type: "groups", title: "a أم an؟ العبرة بالصوت لا بالحرف", vs: true,
    groups: [
      { label: "a + صوت ساكن", items: ["a book", "a university", "a European"] },
      { label: "an + صوت علة", tone: "alt", items: ["an apple", "an hour", "an honest man"] }
    ] }
],

64: [
  { type: "groups", title: "the أم بلا أداة؟", vs: true,
    groups: [
      { label: "مع the", items: ["the Nile", "the Red Sea", "the UAE", "the best", "play the piano", "the history of Islam"] },
      { label: "بلا أداة", tone: "alt", items: ["Saudi Arabia", "Riyadh", "football", "breakfast", "Arabic", "Education is important."] }
    ] },
  { type: "nested", title: "من العام إلى المحدد",
    rings: [
      { label: "the children", note: "أطفالنا المعروفون", items: ["The children are in the garden."] },
      { label: "children", note: "كل الأطفال عمومًا", items: ["Children need love."] }
    ] }
],

65: [
  { type: "matrix", title: "القرب والعدد",
    cols: ["", "مفرد", "جمع"],
    rows: [
      ["قريب", "this book", "these books"],
      ["بعيد", "that car", "those cars"]
    ] },
  { type: "chain", title: "This تربط الجمل",
    steps: [{ t: "Prices rose." }, { t: "**This** affected many families.", s: "This = الجملة السابقة كلها" }] }
],

66: [
  { type: "groups", title: "no أم none؟", vs: true,
    groups: [
      { label: "no + اسم", items: ["no time", "no money", "no students"] },
      { label: "none وحدها أو none of", tone: "alt", items: ["None.", "None of my friends"] }
    ] },
  { type: "transform", title: "نفي واحد فقط",
    rows: [
      { words: ["s:I", "n:don't", "v:have", "x:any", "money."], arrow: "= بمعنى" },
      { words: ["s:I", "v:have", "x:no", "money."] }
    ],
    links: [[0, 2, 1], [0, 3, 2, "any → no"]] }
],

67: [
  { type: "groups", title: "each أم every؟", vs: true,
    groups: [
      { label: "each", sub: "كل واحد على حدة · يصلح لاثنين", items: ["each hand", "each of them"] },
      { label: "every", sub: "الكل كمجموعة · ثلاثة فأكثر · للتكرار", tone: "alt", items: ["every student", "every day", "every 15 minutes"] }
    ],
    caption: "كلاهما مع **اسم مفرد وفعل مفرد**: `Every student has…`" }
],

68: [
  { type: "groups", title: "شيئان فقط",
    groups: [
      { label: "both", sub: "الاثنان ✓ ✓", items: ["both … and"] },
      { label: "either", sub: "أحدهما ✓ ✗", tone: "alt", items: ["either … or"] },
      { label: "neither", sub: "ولا واحد ✗ ✗", tone: "muted", items: ["neither … nor"] }
    ],
    caption: "`neither` منفية بنفسها، فالفعل بعدها مثبت: `Neither of them came.`" }
],

69: [
  { type: "groups", title: "كيف يُجمع الاسم؟", hub: "الجمع",
    groups: [
      { label: "s-", items: ["books", "cars"] },
      { label: "es-", items: ["boxes", "watches"] },
      { label: "ies-", items: ["cities", "studies"] },
      { label: "ves-", items: ["knives", "leaves"] },
      { label: "شاذ", items: ["men", "children", "teeth", "people"] },
      { label: "لا يتغير", items: ["sheep", "fish", "species"] }
    ] }
],

70: [
  { type: "groups", title: "معدود أم غير معدود؟",
    groups: [
      { label: "معدود", sub: "a / an · جمع · many", items: ["a chair", "a job", "ideas", "times"] },
      { label: "كلاهما", sub: "some · any · a lot of", tone: "muted", items: ["some water", "a lot of books"] },
      { label: "غير معدود", sub: "بلا a · بلا s · much", tone: "alt", items: ["advice", "information", "furniture", "news", "luggage", "research", "evidence"] }
    ] },
  { type: "chain", title: "لعدّ غير المعدود",
    steps: [{ t: "a piece of advice" }, { t: "a glass of water" }, { t: "an item of news" }], arrows: ["·", "·"] }
],

71: [
  { type: "transform", title: "تجاهل ما بين الفاعل والفعل",
    rows: [
      { words: ["s:The price", "-x:of the cars", "v:is", "high."], arrow: "الفاعل الحقيقي" },
      { words: ["s:The price", "v:is", "high."] }
    ],
    links: [[0, 0, 0], [0, 2, 1]] },
  { type: "groups", title: "مفرد أم جمع؟", vs: true,
    groups: [
      { label: "فعل مفرد", items: ["everyone", "each", "the number of", "Smoking is…"] },
      { label: "فعل جمع", tone: "alt", items: ["a number of", "both", "people", "Ali and Omar"] }
    ] }
],

72: [
  { type: "groups", title: "لواحق الاسم المجرد", hub: "صفة / فعل ← اسم مجرد",
    groups: [
      { label: "ness-", items: ["happiness", "kindness"] },
      { label: "ment-", items: ["development", "improvement"] },
      { label: "tion-", items: ["education", "decision"] },
      { label: "ity / dom / ship-", items: ["ability", "freedom", "friendship"] }
    ] },
  { type: "transform", title: "الأسلوب الأكاديمي يحوّل الفعل إلى اسم",
    rows: [
      { words: ["s:Prices", "v:increased", "x:quickly."], arrow: "أكاديمي" },
      { words: ["There was a", "x:rapid", "v:increase", "in prices."] }
    ],
    links: [[0, 1, 2], [0, 2, 1]] }
],

73: [
  { type: "transform", title: "الترتيب عكس العربية",
    rows: [
      { label: "بترتيب العربية: موقف ← الحافلات", words: ["v:stop", "x:bus"], arrow: "إنجليزي" },
      { label: "الإنجليزية: الأساس في الآخر", words: ["x:bus", "v:stop"] }
    ],
    links: [[0, 0, 1, "الأساس"], [0, 1, 0]] },
  { type: "groups", title: "الكلمة الأولى مفردة دائمًا", vs: true,
    groups: [
      { label: "صحيح", items: ["a five-star hotel", "a shoe shop", "a ten-minute walk"] },
      { label: "خطأ", tone: "muted", items: ["a five-stars hotel", "a shoes shop"] }
    ] }
],

74: [
  { type: "groups", title: "أنواع الأعداد",
    groups: [
      { label: "أصلي", items: ["one", "two", "350"] },
      { label: "ترتيبي", items: ["first", "second", "21st"] },
      { label: "كسور", items: ["a half", "a third", "three quarters"] },
      { label: "عشري", tone: "alt", items: ["2.5 = two point five"] }
    ] },
  { type: "groups", title: "hundred أم hundreds؟", vs: true,
    groups: [
      { label: "بعد عدد: بلا s", items: ["three hundred people", "two million"] },
      { label: "مع of: بـ s", tone: "alt", items: ["hundreds of people", "millions of dollars"] }
    ] }
],

75: [
  { type: "groups", title: "كلمات الكمية",
    groups: [
      { label: "مع المعدود", items: ["many", "a few", "few", "several"] },
      { label: "مع الاثنين", tone: "muted", items: ["some", "any", "a lot of", "plenty of", "enough"] },
      { label: "مع غير المعدود", tone: "alt", items: ["much", "a little", "little"] }
    ] },
  { type: "groups", title: "a few أم few؟", vs: true,
    groups: [
      { label: "a few / a little", sub: "بعض · إيجابي", items: ["I have a few friends here."] },
      { label: "few / little", sub: "تقريبًا لا شيء · سلبي", tone: "alt", items: ["He has few friends."] }
    ] }
],

76: [
  { type: "scale", title: "الكلمات حول النصف", values: true, ends: ["أقل", "أكثر"],
    items: [
      { label: "well over half", v: 65 },
      { label: "just over half", v: 52 },
      { label: "about / roughly half", v: 50 },
      { label: "nearly / almost half", v: 48 },
      { label: "just under half", v: 46 },
      { label: "roughly a third", v: 33 }
    ] }
],

77: [
  { type: "groups", title: "قبل الفعل أم بعده؟", vs: true,
    groups: [
      { label: "ضمير الفاعل", sub: "قبل الفعل", items: ["I", "he", "she", "we", "they"] },
      { label: "ضمير المفعول", sub: "بعد الفعل أو حرف الجر", tone: "alt", items: ["me", "him", "her", "us", "them"] }
    ] },
  { type: "matrix", title: "جدول الضمائر الكامل",
    cols: ["فاعل", "مفعول", "صفة ملكية", "ضمير ملكية", "انعكاسي"],
    rows: [
      ["I", "me", "my", "mine", "myself"],
      ["you", "you", "your", "yours", "yourself"],
      ["he", "him", "his", "his", "himself"],
      ["she", "her", "her", "hers", "herself"],
      ["it", "it", "its", "—", "itself"],
      ["we", "us", "our", "ours", "ourselves"],
      ["they", "them", "their", "theirs", "themselves"]
    ] }
],

78: [
  { type: "groups", title: "self- أم each other؟", vs: true,
    groups: [
      { label: "self-", sub: "الفعل يرجع على الشخص نفسه", items: ["They hurt themselves."] },
      { label: "each other", sub: "كل واحد للآخر", tone: "alt", items: ["They hurt each other."] }
    ] },
  { type: "groups", title: "by myself = وحدي", hub: "by + self",
    groups: [
      { label: "I", items: ["by myself"] },
      { label: "she", items: ["by herself"] },
      { label: "they", items: ["by themselves"] }
    ] }
],

79: [
  { type: "matrix", title: "شبكة ضمائر النكرة",
    cols: ["", "شخص", "شيء", "مكان"],
    rows: [
      ["some- (إثبات)", "someone", "something", "somewhere"],
      ["any- (نفي وسؤال)", "anyone", "anything", "anywhere"],
      ["no- (منفي بنفسه)", "no one", "nothing", "nowhere"],
      ["every- (الكل)", "everyone", "everything", "everywhere"]
    ],
    caption: "كلها تأخذ **فعلًا مفردًا**: `Everyone is here.`" }
],

80: [
  { type: "groups", title: "أربع طرق للملكية",
    groups: [
      { label: "صفة ملكية + اسم", items: ["my car", "her bag"] },
      { label: "ضمير ملكية وحده", items: ["It's mine.", "It's hers."] },
      { label: "s' للأشخاص", items: ["Ali's car", "the students' books"] },
      { label: "of للأشياء", tone: "alt", items: ["the end of the film"] }
    ] },
  { type: "groups", title: "his أم her؟ حسب المالك", vs: true,
    groups: [
      { label: "المالك ذكر", items: ["Ali loves {s:his} mother."] },
      { label: "المالكة أنثى", tone: "alt", items: ["Sara loves {s:her} father."] }
    ] }
],

81: [
  { type: "groups", title: "ضمائر الصلة", hub: "Relative pronouns",
    groups: [
      { label: "who", sub: "للأشخاص", items: ["the man who called"] },
      { label: "which", sub: "للأشياء", items: ["the car which I bought"] },
      { label: "that", sub: "للاثنين", items: ["the book that I read"] },
      { label: "whose", sub: "للملكية", items: ["the girl whose father…"] },
      { label: "where", sub: "للمكان", items: ["the city where I was born"] },
      { label: "when", sub: "للزمان", items: ["the day when we met"] }
    ] },
  { type: "transform", title: "لا تكرر الضمير (عكس العربية)",
    rows: [
      { label: "الكتاب الذي قرأتُه", words: ["The book", "x:that", "I read", "-s:it"], arrow: "تصحيح" },
      { words: ["The book", "x:that", "I read"] }
    ],
    links: [[0, 0, 0], [0, 1, 1], [0, 2, 2]] }
],

82: [
  { type: "groups", title: "محددة أم إضافية؟", vs: true,
    groups: [
      { label: "محددة: بلا فواصل", sub: "تحدد أي واحدة (عندي أكثر من أخت)", items: ["My sister who lives in Jeddah…"] },
      { label: "إضافية: بين فاصلتين", sub: "معلومة زائدة (عندي أخت واحدة)", tone: "alt", items: ["My sister, who lives in Jeddah, …"] }
    ] },
  { type: "transform", title: "which تشير إلى الجملة كلها",
    rows: [
      { words: ["Prices rose.", "s:This", "affected families."], arrow: "ربط" },
      { words: ["Prices rose,", "x:which", "affected families."] }
    ],
    links: [[0, 0, 0], [0, 1, 1], [0, 2, 2]] }
],

83: [
  { type: "transform", title: "اختصار جملة الصلة",
    rows: [
      { words: ["The houses", "-x:which were", "v:built", "in 1960"], arrow: "مختصرة" },
      { words: ["The houses", "v:built", "in 1960"] }
    ],
    links: [[0, 0, 0], [0, 2, 1]] },
  { type: "groups", title: "what = الشيء الذي", vs: true,
    groups: [
      { label: "what وحدها", items: ["What I need is time."] },
      { label: "اسم + that", tone: "alt", items: ["The thing that I need is time."] }
    ] }
],

84: [
  { type: "groups", title: "ever- = أيّ / مهما", hub: "wh + ever",
    groups: [
      { label: "whatever", sub: "أي شيء", items: ["Take whatever you need."] },
      { label: "whoever", sub: "أي شخص", items: ["Whoever wins…"] },
      { label: "wherever", sub: "أينما", items: ["wherever you go"] },
      { label: "whenever", sub: "كلما", items: ["whenever I visit"] },
      { label: "however + صفة", sub: "مهما", items: ["however hard I try"] }
    ] }
],

85: [
  { type: "transform", title: "يوجد = There is / are",
    rows: [
      { label: "ترجمة حرفية خاطئة", words: ["In my city", "-v:have", "many parks."], arrow: "تصحيح" },
      { words: ["+s:There", "+v:are", "many parks", "in my city."] }
    ],
    links: [[0, 2, 2], [0, 0, 3]] },
  { type: "groups", title: "There أم It؟", vs: true,
    groups: [
      { label: "There: شيء جديد", items: ["There's a new café."] },
      { label: "It: شيء معروف", tone: "alt", items: ["It's next to the bank."] }
    ] }
],

86: [
  { type: "transform", title: "الفاعل الطويل يتأخر و It تأخذ مكانه",
    rows: [
      { words: ["s:To learn English", "v:is", "useful."], arrow: "أسلوب طبيعي" },
      { words: ["+s:It", "v:is", "useful", "s:to learn English."] }
    ],
    links: [[0, 0, 3, "الفاعل الحقيقي"], [0, 1, 1]] }
],

87: [
  { type: "transform", title: "التأكيد بـ It was … who",
    rows: [
      { words: ["s:Ali", "v:called", "me."], arrow: "تأكيد على Ali" },
      { words: ["It was", "s:Ali", "x:who", "v:called", "me."] }
    ],
    links: [[0, 0, 1, "تأكيد"], [0, 1, 3]] },
  { type: "transform", title: "التأكيد بـ What … is",
    rows: [
      { words: ["s:I", "v:need", "x:rest."], arrow: "تأكيد" },
      { words: ["What", "s:I", "v:need", "is", "x:rest."] }
    ],
    links: [[0, 0, 1], [0, 1, 2], [0, 2, 4, "الشيء المؤكد"]] }
],

88: [
  { type: "transform", title: "الكلمة المنفية في الأول، ثم سؤال",
    rows: [
      { words: ["s:I", "a:have", "x:never", "v:seen", "this."], arrow: "قلب" },
      { words: ["x:Never", "a:have", "s:I", "v:seen", "this."] }
    ],
    links: [[0, 2, 0], [0, 1, 1], [0, 0, 2], [0, 3, 3]] },
  { type: "groups", title: "كلمات تسبب القلب", hub: "في أول الجملة",
    groups: [
      { label: "Never · Rarely · Seldom", items: ["Rarely {a:do} we…"] },
      { label: "Not only", items: ["Not only {a:is} it…"] },
      { label: "Hardly · No sooner", items: ["Hardly {a:had} I…"] },
      { label: "Only then · Little", items: ["Little {a:did} I know…"] }
    ] }
],

89: [
  { type: "transform", title: "نحذف ما هو واضح ونُبقي المساعد",
    rows: [
      { words: ["s:I", "a:can't", "v:swim,", "but my wife", "a:can", "-v:swim."], arrow: "حذف" },
      { words: ["s:I", "a:can't", "v:swim,", "but my wife", "a:can."] }
    ],
    links: [[0, 4, 4]] },
  { type: "groups", title: "do بدل الفعل", vs: true,
    groups: [
      { label: "الجملة الأولى بلا مساعد", items: ["She works harder than I {a:do}."] },
      { label: "في المقارنة", tone: "alt", items: ["He's taller than I {a:am}."] }
    ] }
],

90: [
  { type: "transform", title: "نحتفظ بـ to ونحذف الفعل",
    rows: [
      { words: ["\"Come with us.\"", "I'd love", "a:to", "-v:come."], arrow: "اختصار" },
      { words: ["\"Come with us.\"", "I'd love", "a:to."] }
    ],
    links: [[0, 2, 2]] }
]
});
