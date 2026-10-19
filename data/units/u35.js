window.UNITS = window.UNITS || {};
window.UNITS[35] = {
  id: 35,
  title: "Question words",
  ar: "أدوات الاستفهام",
  idea: "أدوات الاستفهام تحدد نوع المعلومة المطلوبة. أغلبها يبدأ بـ wh. وبعدها نتبع ترتيب السؤال المعتاد: **الأداة + المساعد + الفاعل + الفعل**.",
  uses: [
    ["who: شخص", "Who is your teacher?"],
    ["what / which: شيء (which عند اختيار من خيارات محددة)", "Which colour do you prefer, blue or red?"],
    ["where / when / why: مكان / زمان / سبب", "Why are you late?"],
    ["whose: لمن", "Whose phone is this?"],
    ["how: كيف، ومع صفة: how much / many / long / often / far", "How often do you exercise?"]
  ],
  formula: [
    ["الترتيب", "{q:Where} {a:do} {s:you} {v:work}?"],
    ["what + اسم", "{q:What time} {a:does} {s:it} {v:start}? · {q:What kind of} music {a:do} you {v:like}?"],
    ["how + صفة", "{q:How old} {a:is} {s:he}? · {q:How far} {a:is} {s:the station}?"]
  ],
  notes: [
    { title: "how much أم how many؟",
      body: "`how many` مع المعدود الجمع، و`how much` مع غير المعدود وللسؤال عن السعر.",
      en: "{q:How many} brothers do you have? · {q:How much} water? · {q:How much} is it?" },
    { title: "what أم which؟",
      body: "`which` عندما تكون الخيارات محدودة ومعروفة، و`what` للسؤال المفتوح.",
      en: "{q:Which} one do you want, this or that? · {q:What} do you want for dinner?" },
    { title: "What ... like?",
      body: "`What is it like?` تسأل عن الوصف والانطباع، وليس عن الحب.",
      en: "{q:What}'s your city {q:like}? — It's quiet and green." },
    { title: "whose",
      body: "للسؤال عن المالك، وتأتي قبل الاسم أو وحدها.",
      en: "{q:Whose} car is this? · {q:Whose} is this?" }
  ],
  examples: [
    ["{q:How long} {a:have} {s:you} {v:lived} here?", "منذ متى تسكن هنا؟"],
    ["{q:How often} {a:do} {s:you} {v:check} your portfolio?", "كم مرة تتابع محفظتك؟"],
    ["{q:Which} {s:university} {a:did} {s:you} {v:go} to?", "إلى أي جامعة ذهبت؟"],
    ["{q:What} {a:is} {s:the weather} like in Madinah?", "كيف هو الطقس في المدينة؟"],
    ["{q:Whose} idea {a:was} {s:it}?", "فكرة من كانت؟"]
  ],
  mistakes: [
    ["How many money do you have?", "How much money do you have?", "`money` غير معدود: `how much`."],
    ["What is the weather? (meaning: describe)", "What is the weather like?", "للوصف: `What ... like?`"],
    ["Who's car is this?", "Whose car is this?", "`Who's` = who is. للملكية: `Whose`."],
    ["Why you are sad?", "Why are you sad?", "الترتيب: الأداة ثم المساعد ثم الفاعل."]
  ],
  ielts: {
    text: "أسئلة **Speaking Part 1** كلها تقريبًا بهذه الأدوات: `How often...? What kind of...? Which do you prefer...? Why...?` تعرّف على معنى كل أداة بدقة لتجيب عن المطلوب بالضبط.",
    en: "How often do you read? — I read almost every day, usually in the evening."
  },
  questions: [
    { t: "mcq", q: "___ is that man? — He's my uncle.", o: ["What", "Who", "Whose", "Which"], a: 1, why: "شخص: `Who`." },
    { t: "mcq", q: "___ sugar do you want in your tea?", o: ["How many", "How much", "How often", "How long"], a: 1, why: "`sugar` غير معدود: `How much`." },
    { t: "mcq", q: "___ do you go to the gym? — Three times a week.", o: ["How long", "How often", "When", "How much"], a: 1, why: "التكرار: `How often`." },
    { t: "mcq", q: "___ bag is this? — It's Sara's.", o: ["Who's", "Whose", "Who", "Which's"], a: 1, why: "الملكية: `Whose`." },
    { t: "mcq", q: "___ size do you need, small or large?", o: ["What", "Which", "How", "Who"], a: 1, why: "خيارات محددة: `Which`." },
    { t: "mcq", q: "“What's your new boss ___?” “She's very friendly.”", o: ["like", "likes", "is", "as"], a: 0, why: "`What's ... like?` للوصف." },
    { t: "fill", q: "___ far is the airport from here?", a: ["How"], why: "`How far`." },
    { t: "fill", q: "___ did you arrive? — Yesterday evening.", a: ["When"], why: "زمان: `When`." },
    { t: "fill", q: "How ___ people came to the meeting?", a: ["many"], why: "`people` معدود جمع: `many`." },
    { t: "fix", q: "Where you bought this?", a: ["Where did you buy this?"], why: "نحتاج `did` + الفعل الأصلي." },
    { t: "fix", q: "How many time do you need?", a: ["How much time do you need?"], why: "`time` هنا غير معدود." },
    { t: "fix", q: "Who's house is that?", a: ["Whose house is that?"], why: "للملكية: `Whose`." },
    { t: "rewrite", q: "I study English because I want to work abroad. (Ask about the reason)", ask: "اكتب السؤال الذي جوابه هذه الجملة.", a: ["Why do you study English?"], why: "السبب: `Why do you...?`" }
  ]
};
