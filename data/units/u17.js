window.UNITS = window.UNITS || {};
window.UNITS[17] = {
  id: 17,
  title: "The future with “going to”",
  ar: "المستقبل بـ going to",
  idea: "`be going to` + الفعل الأصلي نستخدمه لـ **خطة قررناها مسبقًا**، أو **توقع مبني على دليل نراه الآن**. الجزء `am / is / are` يتغير حسب الفاعل.",
  uses: [
    ["نية أو خطة مقررة", "I'm going to start a new course next month."],
    ["توقع مبني على دليل حاضر", "Look at those clouds. It's going to rain."]
  ],
  formula: [
    ["إثبات", "{s:I} {a:am going to} {v:study} · {s:she} {a:is going to} {v:study} · {s:they} {a:are going to} {v:study}"],
    ["نفي", "{s:We} {a:aren't going to} {v:buy} it."],
    ["سؤال", "{a:Are} {s:you} {a:going to} {v:apply}? · {q:What} {a:is} {s:he} {a:going to} {v:do}?"]
  ],
  notes: [
    { title: "لا تحذف am / is / are",
      body: "مثل المضارع المستمر، فعل be ضروري: `I am going to`، لا `I going to`.",
      en: "{s:She} {a:is going to} {v:call} you." },
    { title: "gonna",
      body: "في الكلام السريع ينطق الناس `going to` كأنها `gonna`. لا تكتبها في Writing.",
      en: "I'm {a:going to} {v:tell} him. (spoken: I'm gonna tell him)" },
    { title: "going to go",
      body: "نستطيع قول `going to go`، لكن كثيرًا ما نختصرها إلى `going to` + مكان بالمضارع المستمر.",
      en: "I'm {a:going to} {v:go} to Riyadh. ≈ I'm {v:going} to Riyadh." }
  ],
  examples: [
    ["{s:I}'{a:m going to} {v:take} the IELTS exam in March.", "سأدخل اختبار IELTS في مارس."],
    ["{s:We} {a:aren't going to} {v:sell} our shares this year.", "لن نبيع أسهمنا هذا العام."],
    ["{x:Be careful!} You're {a:going to} {v:fall}!", "انتبه! ستسقط!"],
    ["{q:What} {a:are} {s:you} {a:going to} {v:study} at university?", "ماذا ستدرس في الجامعة؟"],
    ["{s:The company} {a:is going to} {v:open} a new branch.", "ستفتح الشركة فرعًا جديدًا."]
  ],
  mistakes: [
    ["I going to travel next week.", "I'm going to travel next week.", "نسيان `am`."],
    ["She is going to visits her aunt.", "She is going to visit her aunt.", "بعد `going to` الفعل الأصلي."],
    ["We are going to traveling.", "We are going to travel.", "بعد `to` الفعل الأصلي، لا `-ing`."]
  ],
  ielts: {
    text: "في **Speaking Part 1** الأسئلة عن خططك (`What are you going to do after...?`). أجب بـ `going to` لتوضيح أنها خطة مقررة.",
    en: "After the exam, I'm going to apply for a master's programme in finance."
  },
  questions: [
    { t: "mcq", q: "I ___ my car next month. I've already found a buyer.", o: ["sell", "am going to sell", "going to sell", "am going to selling"], a: 1,
      why: "خطة مقررة: `am going to sell`." },
    { t: "mcq", q: "Look at that man! He ___ into the pool.", o: ["is going to fall", "will falls", "going to fall", "falls"], a: 0,
      why: "توقع بناءً على ما نراه الآن." },
    { t: "mcq", q: "___ you going to watch the match tonight?", o: ["Do", "Will", "Are", "Is"], a: 2,
      why: "السؤال يبدأ بـ `Are` مع you." },
    { t: "mcq", q: "They ___ going to come. They're too busy.", o: ["don't", "aren't", "isn't", "won't"], a: 1,
      why: "النفي: `aren't going to`." },
    { t: "fill", q: "She ___ (study) medicine next year.", a: ["is going to study", "'s going to study"],
      why: "`is going to` + `study`." },
    { t: "fill", q: "I ___ (not / eat) fast food anymore.", a: ["am not going to eat", "'m not going to eat"],
      why: "نية للمستقبل بالنفي." },
    { t: "fill", q: "It's very late. We ___ (miss) the train!", a: ["are going to miss", "'re going to miss"],
      why: "توقع بناءً على دليل (الوقت متأخر)." },
    { t: "fill", q: "What ___ you ___ (do) this weekend?", ask: "اكتب الكلمات بالترتيب، مثل: are going to do", a: ["are going to do"],
      why: "`What are you going to do?`" },
    { t: "fix", q: "He going to buy a new phone.", a: ["He is going to buy a new phone.", "He's going to buy a new phone."],
      why: "نسيان `is`." },
    { t: "fix", q: "We are going to visiting my uncle.", a: ["We are going to visit my uncle.", "We're going to visit my uncle."],
      why: "بعد `going to` الفعل الأصلي `visit`." },
    { t: "fix", q: "Are she going to come?", a: ["Is she going to come?"],
      why: "مع `she`: `Is`." },
    { t: "rewrite", q: "My plan: I will paint my room tomorrow. (Use: going to)", ask: "أعد كتابة الجملة بـ going to.",
      a: ["I am going to paint my room tomorrow.", "I'm going to paint my room tomorrow."],
      why: "خطة مقررة: `going to`." }
  ]
};
