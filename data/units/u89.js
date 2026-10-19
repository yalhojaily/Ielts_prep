window.UNITS = window.UNITS || {};
window.UNITS[89] = {
  id: 89,
  title: "Ellipsis",
  ar: "الحذف لتجنب التكرار",
  idea: "الحذف هو **ترك كلمات واضحة من السياق** لتجنب التكرار. بعد `and / but / or` نحذف الفاعل والمساعد المكررين، وفي الردود نكتفي بالفعل المساعد: `I can swim, but my brother can't (swim)`.",
  uses: [
    ["حذف الفاعل المكرر", "She opened the door and (she) walked in."],
    ["الاكتفاء بالمساعد", "I haven't finished, but Ali has."],
    ["الحذف في الردود", "“Are you coming?” “I might.”"],
    ["الحذف في الكلام غير الرسمي", "(Do you) Want some tea? / (I'll) See you later."]
  ],
  formula: [
    ["فاعل", "{s:He} {v:came} home and {x:(he)} {v:went} to bed."],
    ["مساعد", "{s:I} {a:can't} {v:drive}, but {s:my wife} {a:can}."],
    ["do", "{s:I} {v:like} tea, and {s:she} {a:does} too."],
    ["to", "“Do you want to come?” “I'd love {a:to}.”"]
  ],
  notes: [
    { title: "do / does / did بدل الفعل",
      body: "إذا لم يكن في الجملة الأولى مساعد، نستخدم do في الثانية.",
      en: "She {v:works} harder than I {a:do}." },
    { title: "الحذف بعد to",
      body: "نحتفظ بـ `to` ونحذف الفعل.",
      en: "I wanted to go, but I wasn't able {a:to}." },
    { title: "الحذف في المقارنة",
      body: "بعد `than` و`as` نكتفي بالفاعل والمساعد بدل تكرار الجملة.",
      en: "He's taller than {s:I} {a:am}. · She earns more than {s:he} {a:does}." }
  ],
  examples: [
    ["I wanted to call you, but I forgot {a:to}.", "أردت أن أتصل بك لكنني نسيت."],
    ["“Have you been to Egypt?” “No, but my wife {a:has}.”", "هل زرت مصر؟ لا، لكن زوجتي زارتها."],
    ["She speaks English better than I {a:do}.", "تتحدث الإنجليزية أفضل مني."],
    ["I'd help if I {a:could}.", "كنت سأساعد لو استطعت."],
    ["We arrived late and {x:(we)} missed the start.", "وصلنا متأخرين وفاتتنا البداية."]
  ],
  mistakes: [
    ["I like coffee and my wife likes too.", "I like coffee and my wife does too.", "نستخدم `does`."],
    ["I wanted to come but I couldn't come it.", "I wanted to come but I couldn't.", "نحذف المكرر."],
    ["“Will you come?” “I hope so to.”", "“I hope so.”", "`I hope so`."]
  ],
  ielts: {
    text: "في **Speaking** الحذف يجعل كلامك طبيعيًا وأقل تكرارًا: `I used to, but I don't anymore.` وفي **Writing** يساعد على تجنب الإطالة: `Some people prefer cities, while others do not.`",
    en: "Some people enjoy working from home, while others don't, mainly because they miss their colleagues."
  },
  questions: [
    { t: "mcq", q: "I can't speak Chinese, but my sister ___.", o: ["can speak", "can", "does", "speaks"], a: 1, why: "نكتفي بالمساعد: `can`." },
    { t: "mcq", q: "She runs faster than I ___.", o: ["run", "do", "am", "does"], a: 1, why: "`than I do`." },
    { t: "mcq", q: "“Would you like to join us?” “I'd love ___.”", o: ["it", "to", "that", "-"], a: 1, why: "`I'd love to`." },
    { t: "mcq", q: "I haven't seen the film, but my friends ___.", o: ["have", "has", "did", "saw"], a: 0, why: "`have`." },
    { t: "mcq", q: "He said he would help, but he ___.", o: ["didn't help it", "didn't", "doesn't", "wasn't"], a: 1, why: "`didn't`." },
    { t: "fill", q: "I don't eat meat, but my brother ___.", a: ["does"], why: "`does`." },
    { t: "fill", q: "“Are you tired?” “Yes, I ___.”", a: ["am"], why: "`I am`." },
    { t: "fill", q: "I wanted to stay, but I wasn't allowed ___.", a: ["to"], why: "نحتفظ بـ to." },
    { t: "fill", q: "My father earns more than my mother ___.", a: ["does"], why: "`does`." },
    { t: "fix", q: "I like football and my brother likes too.", a: ["I like football and my brother does too.", "I like football and so does my brother.", "I like football and my brother likes it too."], why: "`does too`." },
    { t: "fix", q: "I tried to call, but I couldn't call.", a: ["I tried to call, but I couldn't."], why: "نحذف المكرر." },
    { t: "rewrite", q: "Ali has finished his homework, but Omar hasn't finished his homework.", ask: "احذف المكرر.", a: ["Ali has finished his homework, but Omar hasn't."], why: "نكتفي بـ `hasn't`." }
  ]
};
