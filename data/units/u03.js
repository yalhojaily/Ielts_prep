window.UNITS = window.UNITS || {};
window.UNITS[3] = {
  id: 3,
  title: "Present simple questions",
  ar: "السؤال بالمضارع البسيط",
  idea: "في العربية نحوّل الجملة إلى سؤال بنبرة الصوت أو بـ «هل». في الإنجليزية نحتاج فعلًا مساعدًا في **أول** الجملة: `Do` أو `Does`، ثم الفاعل، ثم الفعل الأصلي بدون `-s`.",
  uses: [
    ["سؤال جوابه نعم أو لا", "Do you speak English?"],
    ["سؤال بأداة استفهام (Wh-)", "Where does he work?"],
    ["مع be نقلب الترتيب فقط بدون do", "Is she a teacher?"]
  ],
  formula: [
    ["نعم / لا", "{a:Do} {s:I / you / we / they} {v:work}? · {a:Does} {s:he / she / it} {v:work}?"],
    ["أداة استفهام", "{q:Where / When / What} {a:do} {s:you} {v:live}? · {q:What} {a:does} {s:she} {v:do}?"],
    ["فعل be", "{v:Are} {s:you} tired? · {q:Where} {v:is} {s:the station}?"],
    ["الإجابة القصيرة", "Yes, {s:I} {a:do}. / No, {s:she} {a:doesn't}."]
  ],
  notes: [
    { title: "الترتيب: QASV",
      body: "احفظ الترتيب: أداة الاستفهام (Q) ثم الفعل المساعد (A) ثم الفاعل (S) ثم الفعل (V). أي تبديل في هذا الترتيب يجعل السؤال خاطئًا.",
      en: "{q:How often} {a:does} {s:your brother} {v:travel}?" },
    { title: "الـ s تنتقل إلى Does",
      body: "مثل النفي تمامًا: `he works` تصبح `Does he work?` وليس `Does he works?`.",
      en: "She {v:likes} tea. → {a:Does} she {v:like} tea?" },
    { title: "الإجابة القصيرة تكرر الفعل المساعد",
      body: "لا نجيب بـ `Yes, I like` بل نكرر المساعد: `Yes, I do` أو `No, he doesn't`.",
      en: "{a:Do} you {v:like} football? — Yes, I {a:do}." },
    { title: "What does ... mean? / How do you spell ...?",
      body: "عبارتان تحتاجهما كثيرًا في الاختبار عند طلب توضيح من الممتحن.",
      en: "{q:What} {a:does} this word {v:mean}? · {q:How} {a:do} you {v:spell} it?" }
  ],
  examples: [
    ["{a:Do} {s:you} {v:live} near here?", "هل تسكن قريبًا من هنا؟"],
    ["{a:Does} {s:your father} {v:work} on weekends?", "هل يعمل والدك في عطلة نهاية الأسبوع؟"],
    ["{q:What time} {a:does} {s:the class} {v:start}?", "متى يبدأ الدرس؟"],
    ["{q:Why} {a:do} {s:people} {v:learn} languages?", "لماذا يتعلم الناس اللغات؟"],
    ["{q:Where} {v:is} {s:your office}?", "أين مكتبك؟"]
  ],
  mistakes: [
    ["Where you live?", "Where do you live?", "نسيان الفعل المساعد. السؤال يحتاج `do` أو `does` بعد أداة الاستفهام."],
    ["Does she likes music?", "Does she like music?", "بعد `Does` الفعل يكون بدون s."],
    ["What time the shop opens?", "What time does the shop open?", "هذا ترتيب جملة خبرية وليس سؤالًا. نضع `does` ونحذف s من الفعل."],
    ["Do he play tennis?", "Does he play tennis?", "مع he/she/it نستخدم `Does`."]
  ],
  ielts: {
    text: "في **Speaking Part 1** لن تسأل كثيرًا، لكنك تحتاج أن تفهم السؤال بسرعة وتطلب التوضيح بصيغة صحيحة. وفي جميع الأجزاء يُقيَّم ترتيب كلماتك عند طرح الأسئلة البلاغية، مثل `Why do people prefer...?` في بداية الإجابة.",
    en: "Sorry, what does “leisure” mean exactly in this question?"
  },
  questions: [
    { t: "mcq", q: "___ your sister speak French?", o: ["Do", "Does", "Is", "Are"], a: 1,
      why: "`your sister` مفرد غائب فنبدأ بـ `Does`." },
    { t: "mcq", q: "Where ___ your parents live?", o: ["does", "is", "do", "are"], a: 2,
      why: "`your parents` جمع: `do`." },
    { t: "mcq", q: "Does he ___ in a bank?", o: ["works", "work", "working", "is work"], a: 1,
      why: "بعد `Does` يأتي الفعل الأصلي بدون s." },
    { t: "mcq", q: "“Do you like coffee?” “Yes, I ___.”", o: ["like", "am", "do", "does"], a: 2,
      why: "الإجابة القصيرة تكرر المساعد: `Yes, I do`." },
    { t: "mcq", q: "___ you tired?", o: ["Do", "Does", "Are", "Is"], a: 2,
      why: "`tired` صفة، فنستخدم فعل be: `Are you tired?`" },
    { t: "fill", q: "What time ___ the film start?", a: ["does"],
      why: "`the film` مفرد: `does`." },
    { t: "fill", q: "How often ___ you go to the gym?", a: ["do"],
      why: "مع `you` نستخدم `do`." },
    { t: "fill", q: "“Does Sara work here?” “No, she ___.”", a: ["doesn't", "does not"],
      why: "الإجابة القصيرة بالنفي: `No, she doesn't`." },
    { t: "fix", q: "Where you work?", a: ["Where do you work?"],
      why: "ينقص الفعل المساعد `do` بعد أداة الاستفهام." },
    { t: "fix", q: "Does your brother plays football?", a: ["Does your brother play football?"],
      why: "بعد `Does` الفعل بدون s: `play`." },
    { t: "fix", q: "What this word means?", a: ["What does this word mean?"],
      why: "نحتاج `does` قبل الفاعل، والفعل بعده بدون s: `mean`." },
    { t: "rewrite", q: "He lives in Dammam.", ask: "اكتب سؤالًا جوابه نعم أو لا.",
      a: ["Does he live in Dammam?"],
      why: "`Does` + الفاعل + الفعل الأصلي `live`." },
    { t: "rewrite", q: "They start work at 8. (Ask with: What time)", ask: "اكتب سؤالًا يبدأ بأداة الاستفهام المعطاة.",
      a: ["What time do they start work?"],
      why: "الترتيب: أداة الاستفهام + `do` + الفاعل + الفعل." },
    { t: "rewrite", q: "She teaches history. (Ask with: What)", ask: "اكتب سؤالًا يبدأ بأداة الاستفهام المعطاة.",
      a: ["What does she teach?"],
      why: "`teaches` تصبح `does ... teach`." }
  ]
};
