window.UNITS = window.UNITS || {};
window.UNITS[79] = {
  id: 79,
  title: "Indefinite pronouns",
  ar: "ضمائر النكرة",
  idea: "ضمائر مثل `someone, anything, nobody, everywhere` تشير إلى أشخاص أو أشياء أو أماكن غير محددة. تتكون من `some / any / no / every` + `one / body / thing / where`. وتأخذ **فعلًا مفردًا** دائمًا.",
  uses: [
    ["some- في الإثبات والعرض", "Someone is at the door. / Would you like something?"],
    ["any- في النفي والسؤال", "I didn't see anyone. / Is anything wrong?"],
    ["no- = نفي (فعل مثبت)", "Nobody knows. / There's nothing here."],
    ["every- = الكل", "Everyone is here. / Everything is ready."]
  ],
  formula: [
    ["أشخاص", "{s:someone / somebody, anyone / anybody, no one / nobody, everyone / everybody}"],
    ["أشياء", "{s:something, anything, nothing, everything}"],
    ["أماكن", "{s:somewhere, anywhere, nowhere, everywhere}"],
    ["فعل مفرد", "{s:Everyone} {v:is} · {s:Nobody} {v:knows}"]
  ],
  notes: [
    { title: "any في الإثبات = أي (لا يهم)",
      body: "`You can sit anywhere` = في أي مكان. `Anyone can learn` = أي شخص.",
      en: "Call me {s:anytime}. · {s:Anyone} can do it." },
    { title: "+ صفة / else",
      body: "الصفة وكلمة `else` تأتيان **بعد** الضمير.",
      en: "something {x:interesting} · nothing {x:new} · someone {x:else}" },
    { title: "they / their بعدها",
      body: "مع ضمائر الأشخاص نستخدم `they / their` للإحالة.",
      en: "{s:Everyone} brought {s:their} own lunch." }
  ],
  examples: [
    ["{s:Somebody} {v:left} their bag here.", "أحدهم ترك حقيبته هنا."],
    ["I don't know {s:anyone} in this city.", "لا أعرف أحدًا في هذه المدينة."],
    ["{s:Nothing} {v:is} impossible.", "لا شيء مستحيل."],
    ["Let's go {s:somewhere} quiet.", "لنذهب إلى مكان هادئ."],
    ["{s:Everything} {v:was} perfect.", "كان كل شيء ممتازًا."]
  ],
  mistakes: [
    ["Everybody are happy.", "Everybody is happy.", "فعل مفرد."],
    ["I didn't see nobody.", "I didn't see anybody. / I saw nobody.", "لا نفي مزدوج."],
    ["Do you want interesting something?", "Do you want something interesting?", "الصفة بعد الضمير."],
    ["Nobody didn't come.", "Nobody came.", "`Nobody` منفية."]
  ],
  ielts: {
    text: "في **Speaking Part 2** حين لا تتذكر اسمًا: `someone I met at work`, `somewhere near the coast`. وفي **Writing** احذر تعميمات مثل `Everyone knows that...`؛ الأفضل `Many people believe that...`.",
    en: "I'd like to talk about someone who has influenced me a lot: my first English teacher."
  },
  questions: [
    { t: "mcq", q: "There's ___ at the door. Can you open it?", o: ["anybody", "somebody", "nobody", "everybody"], a: 1, why: "إثبات: `somebody`." },
    { t: "mcq", q: "I didn't buy ___ at the mall.", o: ["something", "nothing", "anything", "everything"], a: 2, why: "نفي: `anything`." },
    { t: "mcq", q: "Everyone ___ excited about the trip.", o: ["are", "is", "were", "have"], a: 1, why: "فعل مفرد." },
    { t: "mcq", q: "Is there ___ I can do to help?", o: ["anything", "nothing", "everything", "anywhere"], a: 0, why: "سؤال: `anything`." },
    { t: "mcq", q: "I'd like to go ___ warm this winter.", o: ["somewhere", "anywhere", "nowhere", "everywhere"], a: 0, why: "إثبات مكان: `somewhere`." },
    { t: "fill", q: "___ called you, but they didn't leave a message.", a: ["Someone", "Somebody"], why: "شخص غير معروف." },
    { t: "fill", q: "I looked ___ for my keys, but I couldn't find them.", a: ["everywhere"], why: "في كل مكان." },
    { t: "fill", q: "There's ___ in the fridge. It's empty.", a: ["nothing"], why: "`nothing`." },
    { t: "fix", q: "Nobody don't know the answer.", a: ["Nobody knows the answer."], why: "`Nobody` + فعل مثبت مفرد." },
    { t: "fix", q: "I want to eat delicious something.", a: ["I want to eat something delicious."], why: "الصفة بعد الضمير." },
    { t: "fix", q: "Everybody have a phone these days.", a: ["Everybody has a phone these days."], why: "مفرد." },
    { t: "rewrite", q: "I didn't see anyone. (Use: nobody)", ask: "أعد الصياغة.", a: ["I saw nobody."], why: "`saw nobody`." }
  ]
};
