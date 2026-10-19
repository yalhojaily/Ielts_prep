window.UNITS = window.UNITS || {};
window.UNITS[77] = {
  id: 77,
  title: "Personal pronouns",
  ar: "الضمائر الشخصية",
  idea: "**ضمير الفاعل** يأتي قبل الفعل (`I, you, he, she, it, we, they`). **ضمير المفعول** يأتي بعد الفعل أو حرف الجر (`me, you, him, her, it, us, them`). وفي الإنجليزية **لا يُحذف الفاعل** أبدًا كما في العربية.",
  uses: [
    ["فاعل", "She works in a bank."],
    ["مفعول بعد الفعل", "I called him."],
    ["مفعول بعد حرف الجر", "This is for you. / Come with us."],
    ["it كفاعل شكلي", "It's raining. / It's 5 o'clock."]
  ],
  formula: [
    ["فاعل", "{s:I, you, he, she, it, we, they}"],
    ["مفعول", "{s:me, you, him, her, it, us, them}"],
    ["مثال", "{s:She} likes {s:him}, but {s:he} doesn't like {s:her}."]
  ],
  notes: [
    { title: "لا تحذف الفاعل",
      body: "في العربية نقول «ذهبت» والضمير في الفعل. في الإنجليزية لا بد من `I went`. وكذلك `It is` في جمل الطقس والوقت.",
      en: "{s:It} is hot today. (not: Is hot today)" },
    { title: "لا تكرر الفاعل",
      body: "خطأ آخر شائع: تكرار الفاعل بضمير.",
      en: "My brother works... (not: My brother he works...)" },
    { title: "they للمفرد غير المحدد",
      body: "عند عدم معرفة جنس الشخص نستخدم `they`.",
      en: "If someone calls, tell {s:them} I'm out." },
    { title: "it / they للأشياء",
      body: "`it` للشيء المفرد و`they` للجمع. لا نستخدم `he / she` للأشياء (عكس العربية).",
      en: "I bought a car. {s:It} is blue. (not: he is blue)" }
  ],
  examples: [
    ["{s:My mother} called {s:me} yesterday.", "اتصلت بي أمي أمس."],
    ["Can you help {s:us}?", "هل يمكنك مساعدتنا؟"],
    ["{s:It}'s a long way to the airport.", "الطريق إلى المطار طويل."],
    ["I love this city. {s:It}'s beautiful.", "أحب هذه المدينة. إنها جميلة."],
    ["Between you and {s:me}, I don't like him.", "بيني وبينك، لا أحبه."]
  ],
  mistakes: [
    ["Is very cold today.", "It is very cold today.", "لا نحذف `It`."],
    ["My father he is a doctor.", "My father is a doctor.", "لا نكرر الفاعل."],
    ["Me and him went to the park.", "He and I went to the park.", "الفاعل: `He and I`."],
    ["The book is interesting. He is about history.", "The book is interesting. It is about history.", "الأشياء: `it`."]
  ],
  ielts: {
    text: "حذف `it` (`Is important to...`) وتكرار الفاعل (`The government it should...`) من أكثر الأخطاء الملحوظة عند المتحدثين بالعربية في **Speaking و Writing**.",
    en: "It is important to remember that technology itself is neither good nor bad."
  },
  questions: [
    { t: "mcq", q: "___ is raining outside.", o: ["He", "It", "-", "There"], a: 1, why: "الطقس: `It`." },
    { t: "mcq", q: "Can you give the book to ___?", o: ["I", "me", "my", "mine"], a: 1, why: "بعد حرف الجر: `me`." },
    { t: "mcq", q: "My sister and ___ went shopping.", o: ["me", "I", "my", "myself"], a: 1, why: "فاعل: `I`." },
    { t: "mcq", q: "I bought a new phone, but ___ doesn't work.", o: ["he", "it", "she", "they"], a: 1, why: "شيء: `it`." },
    { t: "mcq", q: "Where are my keys? I can't find ___.", o: ["it", "them", "they", "their"], a: 1, why: "جمع مفعول: `them`." },
    { t: "fill", q: "My parents are coming. I'll pick ___ up at 6.", a: ["them"], why: "`them`." },
    { t: "fill", q: "Ali is my friend. I've known ___ for years.", a: ["him"], why: "`him`." },
    { t: "fill", q: "___ is important to sleep well.", a: ["It"], why: "`It is important`." },
    { t: "fix", q: "Is difficult to learn Chinese.", a: ["It is difficult to learn Chinese.", "It's difficult to learn Chinese."], why: "لا نحذف `It`." },
    { t: "fix", q: "My brother he lives in Dubai.", a: ["My brother lives in Dubai."], why: "لا تكرار." },
    { t: "fix", q: "Him and me are best friends.", a: ["He and I are best friends."], why: "الفاعل." },
    { t: "fix", q: "This is a good movie. He is very funny.", a: ["This is a good movie. It is very funny.", "This is a good movie. It's very funny."], why: "`It`." }
  ]
};
