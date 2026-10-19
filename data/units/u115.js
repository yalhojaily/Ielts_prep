window.UNITS = window.UNITS || {};
window.UNITS[115] = {
  id: 115,
  title: "Suffixes",
  ar: "اللواحق",
  idea: "اللاحقة تُضاف إلى **آخر الكلمة** وتغيّر **نوعها**: من فعل إلى اسم (`develop → development`)، ومن اسم إلى صفة (`danger → dangerous`)، ومن صفة إلى ظرف (`quick → quickly`). معرفتها تمكنك من بناء عائلة كلمات كاملة.",
  uses: [
    ["اسم من فعل", "-ment, -tion, -sion, -ance, -er/-or"],
    ["اسم من صفة", "-ness, -ity"],
    ["صفة", "-ful, -less, -ous, -al, -ive, -able, -ic"],
    ["فعل", "-ise/-ize, -en, -ify"]
  ],
  formula: [
    ["أسماء", "employ{x:ment} · educa{x:tion} · perform{x:ance} · teach{x:er} · dark{x:ness} · real{x:ity}"],
    ["صفات", "help{x:ful} · hope{x:less} · danger{x:ous} · nation{x:al} · creat{x:ive} · afford{x:able}"],
    ["أفعال", "modern{x:ise} · short{x:en} · simpl{x:ify}"],
    ["ظروف", "careful{x:ly} · economical{x:ly}"]
  ],
  notes: [
    { title: "-ful و -less متضادتان",
      body: "`-ful` = مليء بـ، و`-less` = بدون.",
      en: "use{x:ful} / use{x:less} · care{x:ful} / care{x:less} · hope{x:ful} / hope{x:less}" },
    { title: "عائلة الكلمة",
      body: "تعلّم الكلمة مع عائلتها.",
      en: "succeed (v) · success (n) · successful (adj) · successfully (adv)" },
    { title: "تغيرات التهجئة",
      body: "`happy → happiness`, `beauty → beautiful`, `decide → decision`, `able → ability`.",
      en: "" }
  ],
  examples: [
    ["The {x:development} of the city has been rapid.", "كانت تنمية المدينة سريعة."],
    ["This app is very {x:useful}.", "هذا التطبيق مفيد جدًا."],
    ["Housing is no longer {x:affordable} for many families.", "لم يعد السكن في متناول كثير من الأسر."],
    ["We need to {x:simplify} the process.", "نحتاج إلى تبسيط الإجراءات."],
    ["Her {x:kindness} surprised everyone.", "فاجأ لطفها الجميع."]
  ],
  mistakes: [
    ["He is very success.", "He is very successful.", "صفة: `successful`."],
    ["The educate system", "The education system", "اسم: `education`."],
    ["a danger road", "a dangerous road", "صفة: `dangerous`."],
    ["I am very carefull.", "I am very careful.", "`-ful` بـ l واحدة."]
  ],
  ielts: {
    text: "في **Writing Task 2** استخدام الصيغة الصحيحة (اسم/صفة/ظرف) أساسي للدقة. وفي **Reading** و**Listening** (ملء الفراغ) يجب أن تختار نوع الكلمة الصحيح لتحصل على الدرجة.",
    en: "Successful economies invest heavily in education, which leads to greater productivity and innovation."
  },
  questions: [
    { t: "mcq", q: "This road is very ___.", o: ["danger", "dangerous", "dangerously", "endanger"], a: 1, why: "صفة: `dangerous`." },
    { t: "mcq", q: "The ___ of the new airport took five years.", o: ["construct", "constructive", "construction", "constructed"], a: 2, why: "اسم: `construction`." },
    { t: "mcq", q: "She is a very ___ person. She always helps others.", o: ["help", "helpful", "helpless", "helpfully"], a: 1, why: "`helpful`." },
    { t: "mcq", q: "Without electricity, my phone is ___.", o: ["useful", "useless", "usefully", "user"], a: 1, why: "بدون فائدة: `useless`." },
    { t: "mcq", q: "Education is the key to ___.", o: ["succeed", "success", "successful", "successfully"], a: 1, why: "اسم: `success`." },
    { t: "fill", q: "He finished the project ___ (success).", a: ["successfully"], why: "ظرف: `successfully`." },
    { t: "fill", q: "Prices are not ___ (afford) for young people.", a: ["affordable"], why: "صفة: `affordable`." },
    { t: "fill", q: "The ___ (employ) rate has increased.", a: ["employment", "unemployment"], why: "اسم: `employment`." },
    { t: "fill", q: "We need to ___ (modern) our factories.", a: ["modernise", "modernize"], why: "فعل: `modernise`." },
    { t: "fix", q: "The weather was very beauty.", a: ["The weather was very beautiful."], why: "صفة: `beautiful`." },
    { t: "fix", q: "The country is facing serious economical problems.", a: ["The country is facing serious economic problems."],
      why: "`economic` = متعلق بالاقتصاد. `economical` = موفّر." },
    { t: "fix", q: "There is a lack of creative in schools.", a: ["There is a lack of creativity in schools."], why: "اسم: `creativity`." }
  ]
};
