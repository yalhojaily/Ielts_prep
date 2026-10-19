window.UNITS = window.UNITS || {};
window.UNITS[82] = {
  id: 82,
  title: "Non-defining relative clauses",
  ar: "جمل الصلة غير المحددة (الوصفية)",
  idea: "جملة الصلة غير المحددة تضيف **معلومة إضافية** عن شيء معروف مسبقًا، ويبقى المعنى كاملًا بدونها. توضع **بين فاصلتين**، ولا نستخدم فيها `that`، ولا نحذف الضمير.",
  uses: [
    ["معلومة إضافية عن شخص", "My brother, who lives in Dubai, is an engineer."],
    ["معلومة عن شيء", "The Kaaba, which is in Makkah, is visited by millions."],
    ["which تشير إلى الجملة كلها", "He passed the exam, which surprised everyone."]
  ],
  formula: [
    ["فاصلتان", "Riyadh{x:,} which is the capital{x:,} is very large."],
    ["الأدوات", "{x:who, which, whose, where, when} (never: that)"],
    ["الجملة كلها", "..., {x:which} means / {x:which} was a surprise"]
  ],
  notes: [
    { title: "المحددة أم غير المحددة؟",
      body: "`My sister who lives in Jeddah` (عندي أكثر من أخت، أقصد التي في جدة). `My sister, who lives in Jeddah,` (عندي أخت واحدة، ومعلومة إضافية).",
      en: "The students {x:who} passed got a prize. · The students{x:,} who were tired{x:,} went home." },
    { title: "لا that",
      body: "`that` خطأ في هذا النوع.",
      en: "My car, {x:which} is ten years old, still runs well. (not: , that is)" },
    { title: "which للجملة كلها",
      body: "مفيدة جدًا للتعليق على حدث كامل.",
      en: "The price dropped, {x:which} was good news for buyers." }
  ],
  examples: [
    ["My father, {x:who} {v:is} 70, still works every day.", "أبي، وعمره 70 سنة، ما زال يعمل يوميًا."],
    ["Madinah, {x:where} I grew up, is a peaceful city.", "المدينة، حيث نشأت، مدينة هادئة."],
    ["I sold my shares, {x:which} was a mistake.", "بعت أسهمي، وكان ذلك خطأ."],
    ["Dr Ahmed, {x:whose} book I read, is giving a talk tomorrow.", "د. أحمد، الذي قرأت كتابه، سيلقي محاضرة غدًا."]
  ],
  mistakes: [
    ["My mother, that is a nurse, works at night.", "My mother, who is a nurse, works at night.", "لا that."],
    ["Riyadh which is the capital is big.", "Riyadh, which is the capital, is big.", "نحتاج الفاصلتين."],
    ["He was late, what annoyed me.", "He was late, which annoyed me.", "للجملة كلها: `which`."],
    ["My car, I bought last year, is great.", "My car, which I bought last year, is great.", "لا نحذف الضمير هنا."]
  ],
  ielts: {
    text: "في **Writing Task 2** `which` بعد فاصلة طريقة أنيقة لربط النتيجة: `..., which can lead to...`. وفي **Task 1**: `Sales rose to 50%, which was the highest figure.` هذه البنية علامة على مستوى B2+.",
    en: "Many people now work from home, which reduces traffic but can also lead to isolation."
  },
  questions: [
    { t: "mcq", q: "My brother, ___ is a doctor, lives in London.", o: ["that", "who", "which", "whose"], a: 1, why: "شخص + فاصلة: `who`." },
    { t: "mcq", q: "Jeddah, ___ is on the Red Sea, is a busy port.", o: ["that", "which", "where", "who"], a: 1, why: "شيء + فاصلة: `which` (لا that)." },
    { t: "mcq", q: "He didn't call me, ___ made me angry.", o: ["that", "what", "which", "who"], a: 2, why: "للجملة كلها: `which`." },
    { t: "mcq", q: "Ms Sara, ___ son is in my class, is a teacher.", o: ["who", "whose", "which", "that"], a: 1, why: "ملكية: `whose`." },
    { t: "mcq", q: "Abha, ___ we spent the summer, is cool and green.", o: ["which", "where", "that", "when"], a: 1, why: "مكان + جملة كاملة: `where`." },
    { t: "fill", q: "Ali, ___ I've known for years, is very honest.", a: ["who", "whom"], why: "شخص: `who`." },
    { t: "fill", q: "The exam was cancelled, ___ was a relief.", a: ["which"], why: "`which`." },
    { t: "fill", q: "In 2015, ___ I moved to Riyadh, I started a new job.", a: ["when"], why: "زمان: `when`." },
    { t: "fix", q: "My phone, that is new, stopped working.", a: ["My phone, which is new, stopped working."], why: "لا that." },
    { t: "fix", q: "Prices increased, what affected many families.", a: ["Prices increased, which affected many families."], why: "`which`." },
    { t: "fix", q: "Cairo which is in Egypt is a huge city.", a: ["Cairo, which is in Egypt, is a huge city."], why: "الفواصل." },
    { t: "rewrite", q: "Unemployment fell. This was good for the economy. (Join with: which)", ask: "اربط الجملتين.", a: ["Unemployment fell, which was good for the economy."], why: "`, which was...`." },
    { t: "rewrite", q: "My uncle is 80. He still drives. (Begin with: My uncle, who ...)", ask: "اربط الجملتين.", a: ["My uncle, who is 80, still drives."], why: "`, who is 80,`." }
  ]
};
