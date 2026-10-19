window.UNITS = window.UNITS || {};
window.UNITS[63] = {
  id: 63,
  title: "Articles",
  ar: "أدوات التعريف والتنكير: a / an / the",
  idea: "`a / an` للنكرة المفردة المعدودة (أول مرة نذكرها أو أي واحد). `the` للمعرفة (شيء محدد يعرفه السامع). و**بدون أداة** للجمع وغير المعدود عند الحديث العام. هذه من أصعب القواعد على العرب لأن «ال» العربية تُستخدم أكثر بكثير من `the`.",
  uses: [
    ["a / an: أول ذكر أو أي واحد", "I saw a cat in the garden."],
    ["the: شيء محدد أو سبق ذكره", "The cat was black."],
    ["the: شيء واحد فريد", "the sun, the moon, the internet"],
    ["بلا أداة: الحديث العام", "Cats are independent. / Water is essential."]
  ],
  formula: [
    ["a", "{x:a} + صوت ساكن: a book, a university (يُنطق yu)"],
    ["an", "{x:an} + صوت علة: an apple, an hour (h صامتة)"],
    ["the", "{x:the} + مفرد / جمع / غير معدود محدد"],
    ["\u00d8", "جمع أو غير معدود بمعنى عام: {x:\u00d8} money, {x:\u00d8} people"]
  ],
  notes: [
    { title: "الحديث العام بلا the",
      body: "في العربية نقول «الماء ضروري» و«الناس يحبون...»، أما في الإنجليزية فبلا أداة.",
      en: "{x:Water} is essential. \u00b7 {x:People} like music. \u00b7 {x:Education} is important." },
    { title: "الوظائف بـ a / an",
      body: "عند ذكر مهنة شخص نستخدم `a / an`.",
      en: "She's {x:a} doctor. \u00b7 He's {x:an} engineer." },
    { title: "the مع",
      body: "المحيطات والأنهار والجبال كسلاسل (`the Red Sea, the Nile, the Alps`)، الدول بصيغة جمع أو اتحاد (`the USA, the UK, the UAE`)، صيغ التفضيل (`the best`)، والآلات الموسيقية (`play the piano`).",
      en: "{x:the} Red Sea \u00b7 {x:the} UAE \u00b7 {x:the} best \u00b7 {x:the} first" },
    { title: "بلا أداة مع",
      body: "معظم الدول والمدن (`Saudi Arabia, Riyadh`)، الوجبات (`have breakfast`)، الرياضات (`play football`)، اللغات، و`go to work / school / bed`.",
      en: "I play football. \u00b7 We had lunch. \u00b7 She speaks Arabic." }
  ],
  examples: [
    ["I bought {x:a} laptop. {x:The} laptop is very fast.", "اشتريت حاسوبًا. الحاسوب سريع جدًا."],
    ["{x:The} Prophet's Mosque is in Madinah.", "المسجد النبوي في المدينة."],
    ["She's {x:an} accountant.", "هي محاسبة."],
    ["{x:Life} is short.", "الحياة قصيرة."],
    ["Can you close {x:the} door, please?", "هل تغلق الباب من فضلك؟ (الباب المعروف)"]
  ],
  mistakes: [
    ["The life is beautiful.", "Life is beautiful.", "الحديث العام بلا the."],
    ["He is engineer.", "He is an engineer.", "المهنة بـ a / an."],
    ["I like the football.", "I like football.", "الرياضات بلا أداة."],
    ["I went to the Saudi Arabia.", "I went to Saudi Arabia.", "معظم الدول بلا the."]
  ],
  ielts: {
    text: "أخطاء أدوات التعريف من أكثر أخطاء الطلاب العرب في **Writing**. الخطأ الأشهر: إضافة `the` قبل الكلمات العامة (`The technology has changed the society`). الصحيح: `Technology has changed society.`",
    en: "Technology has transformed education, but teachers still play an important role in the classroom."
  },
  questions: [
    { t: "mcq", q: "My brother is ___ architect.", o: ["a", "an", "the", "-"], a: 1, why: "مهنة تبدأ بصوت علة: `an`." },
    { t: "mcq", q: "___ money doesn't buy happiness.", o: ["The", "A", "-", "An"], a: 2, why: "حديث عام عن غير معدود: بلا أداة." },
    { t: "mcq", q: "I saw a good film. ___ film was about a pilot.", o: ["A", "The", "-", "An"], a: 1, why: "سبق ذكره: `The`." },
    { t: "mcq", q: "It takes ___ hour to get there.", o: ["a", "an", "the", "-"], a: 1, why: "`hour` تبدأ بصوت علة (h صامتة): `an`." },
    { t: "mcq", q: "She studies at ___ university in Jeddah.", o: ["an", "a", "-", "the a"], a: 1, why: "`university` تبدأ بصوت `yu`: `a`." },
    { t: "mcq", q: "___ Nile is the longest river in Africa.", o: ["-", "A", "The", "An"], a: 2, why: "الأنهار: `the`." },
    { t: "mcq", q: "I usually have ___ breakfast at 7.", o: ["the", "a", "-", "an"], a: 2, why: "الوجبات بلا أداة." },
    { t: "fill", q: "Can you pass me ___ salt, please?", a: ["the"], why: "شيء محدد على الطاولة: `the`." },
    { t: "fill", q: "He plays ___ guitar very well.", a: ["the"], why: "الآلات الموسيقية: `the`." },
    { t: "fix", q: "The education is very important.", a: ["Education is very important."], why: "عام: بلا the." },
    { t: "fix", q: "My father is teacher.", a: ["My father is a teacher."], why: "المهنة: `a`." },
    { t: "fix", q: "I want to visit the Japan.", a: ["I want to visit Japan."], why: "الدولة بلا the." },
    { t: "fix", q: "Sun rises in the east.", a: ["The sun rises in the east."], why: "شيء فريد: `the sun`." }
  ]
};
