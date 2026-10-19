window.UNITS = window.UNITS || {};
window.UNITS[9] = {
  id: 9,
  title: "Past simple questions",
  ar: "السؤال بالماضي البسيط",
  idea: "السؤال في الماضي يبدأ بـ `Did` مع كل الضمائر، ثم الفاعل، ثم الفعل في صورته **الأصلية**. ومع فعل be نقلب الترتيب فقط: `Was he...? / Were they...?`",
  uses: [
    ["سؤال جوابه نعم أو لا", "Did you enjoy the trip?"],
    ["سؤال بأداة استفهام", "Where did you go?"],
    ["مع be", "Were you at home yesterday?"]
  ],
  formula: [
    ["نعم / لا", "{a:Did} {s:you / he / they} {v:go}?"],
    ["أداة استفهام", "{q:What / Where / When / Why} {a:did} {s:she} {v:say}?"],
    ["فعل be", "{v:Was} {s:it} expensive? · {q:Where} {v:were} {s:you}?"],
    ["إجابة قصيرة", "Yes, {s:I} {a:did}. / No, {s:they} {a:didn't}."]
  ],
  notes: [
    { title: "الترتيب: QASV",
      body: "أداة الاستفهام، ثم `did`، ثم الفاعل، ثم الفعل الأصلي.",
      en: "{q:When} {a:did} {s:you} {v:arrive}?" },
    { title: "لا ماضي بعد did",
      body: "`Did you went?` خطأ. علامة الماضي في `did` فقط.",
      en: "{a:Did} she {v:buy} it? (not: bought)" },
    { title: "How was...? للسؤال عن الانطباع",
      body: "سؤال شائع جدًا في الحديث اليومي ومقابلة IELTS.",
      en: "{q:How} {v:was} your weekend? · {q:How} {v:was} the exam?" }
  ],
  examples: [
    ["{a:Did} {s:you} {v:sleep} well?", "هل نمت جيدًا؟"],
    ["{q:What} {a:did} {s:you} {v:do} last weekend?", "ماذا فعلت في عطلة الأسبوع الماضي؟"],
    ["{q:Why} {a:did} {s:she} {v:leave} early?", "لماذا غادرت مبكرًا؟"],
    ["{v:Was} {s:the traffic} bad?", "هل كانت الزحمة سيئة؟"],
    ["{q:How long} {a:did} {s:it} {v:take}?", "كم استغرق ذلك؟"]
  ],
  mistakes: [
    ["Where you went?", "Where did you go?", "ينقص `did`، و`went` يجب أن تعود إلى `go`."],
    ["Did you saw the news?", "Did you see the news?", "بعد `Did` الفعل الأصلي."],
    ["Did he was late?", "Was he late?", "مع الصفة نستخدم `Was` وحدها."],
    ["What time you arrived?", "What time did you arrive?", "ترتيب جملة خبرية. نحتاج `did` + الفعل الأصلي."]
  ],
  ielts: {
    text: "قد يسألك الممتحن `Did you enjoy...?` أو `When did you last...?`. فهم السؤال بسرعة يساعدك على الإجابة بالزمن نفسه. أجب بجملة كاملة بالماضي بعد الإجابة القصيرة.",
    en: "When did you last go to a museum? — I went to one about two months ago, actually."
  },
  questions: [
    { t: "mcq", q: "___ you call your mother yesterday?", o: ["Do", "Did", "Were", "Was"], a: 1,
      why: "سؤال عن الماضي مع فعل أساسي: `Did`." },
    { t: "mcq", q: "Where did you ___ your holiday?", o: ["spent", "spend", "spending", "spends"], a: 1,
      why: "بعد `did` الفعل الأصلي `spend`." },
    { t: "mcq", q: "___ the hotel comfortable?", o: ["Did", "Was", "Were", "Does"], a: 1,
      why: "`comfortable` صفة و`the hotel` مفرد: `Was`." },
    { t: "mcq", q: "“Did they win?” “No, they ___.”", o: ["don't", "weren't", "didn't", "didn't win it"], a: 2,
      why: "الإجابة القصيرة: `No, they didn't`." },
    { t: "fill", q: "What ___ he say to you?", a: ["did"],
      why: "سؤال عن الماضي: `did`." },
    { t: "fill", q: "___ you at the office on Sunday?", a: ["Were"],
      why: "مع `you` وفعل be: `Were`." },
    { t: "fill", q: "How ___ your exam? Was it difficult?", a: ["was"],
      why: "`How was...?` للسؤال عن الانطباع." },
    { t: "fill", q: "When ___ you start learning English?", a: ["did"],
      why: "`did` + الفاعل + الفعل الأصلي `start`." },
    { t: "fix", q: "Where you bought that jacket?", a: ["Where did you buy that jacket?"],
      why: "نضيف `did` ونرجع `bought` إلى `buy`." },
    { t: "fix", q: "Did she went to the doctor?", a: ["Did she go to the doctor?"],
      why: "بعد `Did` الفعل الأصلي `go`." },
    { t: "fix", q: "Did they were happy?", a: ["Were they happy?"],
      why: "مع الصفة نستخدم `Were` بدون `did`." },
    { t: "rewrite", q: "He finished the report.", ask: "حوّل الجملة إلى سؤال جوابه نعم أو لا.",
      a: ["Did he finish the report?"],
      why: "`Did` + `he` + `finish`." },
    { t: "rewrite", q: "She left at 6. (Ask with: What time)", ask: "اكتب سؤالًا يبدأ بأداة الاستفهام المعطاة.",
      a: ["What time did she leave?"],
      why: "`left` تصبح `did ... leave`." }
  ]
};
