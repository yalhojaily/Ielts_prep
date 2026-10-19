window.UNITS = window.UNITS || {};
window.UNITS[81] = {
  id: 81,
  title: "Defining relative clauses",
  ar: "جمل الصلة المحددة",
  idea: "جملة الصلة المحددة تحدد **أي شخص أو شيء** نقصد، ولا يكتمل المعنى بدونها. نستخدم `who` للأشخاص، و`which` للأشياء، و`that` للاثنين. ولا نضع فواصل حولها.",
  uses: [
    ["who للأشخاص", "The man who lives next door is a pilot."],
    ["which / that للأشياء", "The car which / that I bought is red."],
    ["حذف الضمير إذا كان مفعولًا", "The book (that) I'm reading is great."],
    ["whose للملكية", "The woman whose son won is my aunt."]
  ],
  formula: [
    ["فاعل", "The people {x:who} {v:work} here are friendly. (لا يُحذف)"],
    ["مفعول", "The film ({x:that}) I {v:watched} was boring. (يمكن حذفه)"],
    ["مكان / زمان", "the city {x:where} I was born · the day {x:when} we met"],
    ["ملكية", "the student {x:whose} phone rang"]
  ],
  notes: [
    { title: "لا تكرر الضمير",
      body: "في العربية «الكتاب الذي قرأته» فيها ضمير «ـه». في الإنجليزية لا نضيفه: `the book that I read` لا `that I read it`.",
      en: "the house {x:which} we bought (not: which we bought it)" },
    { title: "متى نحذف who / which / that؟",
      body: "إذا جاء بعده فاعل جديد فهو مفعول ويمكن حذفه. إذا جاء بعده فعل مباشرة فهو فاعل ولا يُحذف.",
      en: "the man (who) {s:I} met · the man {x:who} {v:called}" },
    { title: "where = in which",
      body: "`where` بعدها جملة كاملة. إذا جاء بعدها فعل مباشرة نحتاج `which / that`.",
      en: "the town {x:where} I grew up · the town {x:that} has a castle" }
  ],
  examples: [
    ["A doctor is someone {x:who} {v:treats} sick people.", "الطبيب شخص يعالج المرضى."],
    ["This is the phone {x:that} I told you about.", "هذا الهاتف الذي حدثتك عنه."],
    ["The restaurant {x:where} we had dinner was excellent.", "كان المطعم الذي تعشينا فيه ممتازًا."],
    ["I know a man {x:whose} brother is a famous actor.", "أعرف رجلًا أخوه ممثل مشهور."],
    ["The shares (that) I sold have gone up.", "الأسهم التي بعتها ارتفعت."]
  ],
  mistakes: [
    ["The man which I met was friendly.", "The man who I met was friendly.", "للأشخاص: `who`."],
    ["The book that I read it was long.", "The book that I read was long.", "لا نكرر الضمير."],
    ["The woman lives next door is a teacher.", "The woman who lives next door is a teacher.", "الضمير فاعل هنا فلا يُحذف."],
    ["The city where has a big mosque.", "The city that has a big mosque.", "بعد `where` جملة بفاعل."]
  ],
  ielts: {
    text: "جمل الصلة أداة أساسية لبناء جمل مركبة في **Writing Task 2** (`People who live in cities...`). وفي **Speaking Part 2** للتعريف: `It's a place where...`, `He's someone who...`. وهي من مؤشرات Grammatical Range القوية.",
    en: "Students who study abroad often develop skills that are highly valued by employers."
  },
  questions: [
    { t: "mcq", q: "The woman ___ helped me was very kind.", o: ["which", "who", "whose", "where"], a: 1, why: "شخص فاعل: `who`." },
    { t: "mcq", q: "This is the laptop ___ I bought last week.", o: ["who", "whose", "which", "where"], a: 2, why: "شيء: `which`." },
    { t: "mcq", q: "That's the hotel ___ we stayed.", o: ["which", "where", "who", "that"], a: 1, why: "مكان + جملة كاملة: `where`." },
    { t: "mcq", q: "He's the man ___ car was stolen.", o: ["who", "who's", "whose", "which"], a: 2, why: "ملكية: `whose`." },
    { t: "mcq", q: "The film ___ we watched last night was great.", o: ["that we watched it", "-", "who", "where"], a: 1,
      why: "الضمير مفعول ويمكن حذفه: `The film we watched`. (الخيار `-` يعني بلا كلمة.)" },
    { t: "fill", q: "A pilot is a person ___ flies planes.", a: ["who", "that"], why: "فاعل: `who / that`." },
    { t: "fill", q: "Do you remember the day ___ we first met?", a: ["when", "that"], why: "زمان: `when`." },
    { t: "fill", q: "The company ___ I work for is growing fast.", a: ["that", "which"], why: "شيء: `that / which` (أو حذفه)." },
    { t: "fix", q: "The book which I bought it is very interesting.", a: ["The book which I bought is very interesting.", "The book that I bought is very interesting.", "The book I bought is very interesting."], why: "لا نكرر `it`." },
    { t: "fix", q: "The man which called you is my boss.", a: ["The man who called you is my boss.", "The man that called you is my boss."], why: "`who`." },
    { t: "fix", q: "People live in cities often have stressful lives.", a: ["People who live in cities often have stressful lives.", "People that live in cities often have stressful lives."], why: "الضمير فاعل: لا يُحذف." },
    { t: "rewrite", q: "I met a girl. Her father is a diplomat. (Join with: whose)", ask: "اربط الجملتين.", a: ["I met a girl whose father is a diplomat."], why: "`whose father`." },
    { t: "rewrite", q: "This is the house. I was born in this house. (Join with: where)", ask: "اربط الجملتين.", a: ["This is the house where I was born."], why: "`where I was born`." }
  ]
};
