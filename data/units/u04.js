window.UNITS = window.UNITS || {};
window.UNITS[4] = {
  id: 4,
  title: "The present continuous",
  ar: "المضارع المستمر",
  idea: "نستخدم المضارع المستمر لشيء **يحدث الآن** أو في هذه الفترة، وهو مؤقت وغير دائم. صيغته دائمًا جزءان: فعل `am / is / are` + الفعل مع `-ing`.",
  uses: [
    ["حدث يجري في لحظة الكلام", "She is talking on the phone right now."],
    ["وضع مؤقت في هذه الفترة", "I'm staying with my uncle this month."],
    ["تغيّر واتجاه يحدث تدريجيًا", "Prices are rising every year."],
    ["خطة مرتبة للمستقبل القريب", "We're meeting the manager tomorrow."]
  ],
  formula: [
    ["إثبات", "{s:I} {a:am} {v:working} · {s:he / she / it} {a:is} {v:working} · {s:you / we / they} {a:are} {v:working}"],
    ["نفي", "{s:I} {a:am} {n:not} {v:working} · {s:She} {a:isn't} {v:working} · {s:They} {a:aren't} {v:working}"],
    ["سؤال", "{a:Are} {s:you} {v:working}? · {q:What} {a:is} {s:he} {v:doing}?"]
  ],
  notes: [
    { title: "تهجئة -ing",
      body: "الفعل المنتهي بـ e صامتة نحذفها: `write → writing`. الفعل القصير المنتهي بـ ساكن-علة-ساكن نضاعف الأخير: `run → running`. والمنتهي بـ ie يصبح y: `lie → lying`.",
      en: "make → {v:making} · sit → {v:sitting} · stop → {v:stopping} · die → {v:dying} · play → {v:playing}" },
    { title: "لا تحذف am / is / are",
      body: "في العربية نقول «أنا أعمل الآن» بدون فعل مساعد، لذلك يكثر حذفه. بدون `am / is / are` تصبح الجملة خاطئة.",
      en: "{s:I} {a:am} {v:reading}. (not: I reading)" },
    { title: "كلمات تدل عليه",
      body: "`now, right now, at the moment, today, this week, these days, currently, Look!, Listen!`",
      en: "Listen! Someone {a:is} {v:knocking} on the door." },
    { title: "أفعال لا تأتي غالبًا بـ -ing",
      body: "أفعال الحالة مثل `know, like, want, need, believe, understand, own` تبقى في المضارع البسيط حتى لو كان المعنى «الآن». التفصيل في القاعدة 5.",
      en: "I {v:know} the answer now. (not: I am knowing)" }
  ],
  examples: [
    ["{s:The kids} {a:are} {v:playing} in the garden.", "الأطفال يلعبون في الحديقة."],
    ["{s:I}'{a:m} {v:reading} a book about investing these days.", "أقرأ هذه الأيام كتابًا عن الاستثمار."],
    ["{s:She} {a:isn't} {v:working} today; she's ill.", "هي لا تعمل اليوم، إنها مريضة."],
    ["{q:What} {a:are} {s:you} {v:doing}?", "ماذا تفعل؟"],
    ["{s:More people} {a:are} {v:working} from home.", "يعمل عدد متزايد من الناس من المنزل."]
  ],
  mistakes: [
    ["I working now.", "I am working now.", "نسيان `am`. الصيغة دائمًا جزءان."],
    ["She is write a letter.", "She is writing a letter.", "بعد `is` في هذه الصيغة يجب `-ing`."],
    ["He is siting on the chair.", "He is sitting on the chair.", "`sit` قصير ومنتهٍ بساكن-علة-ساكن، فنضاعف t."],
    ["I am wanting a coffee.", "I want a coffee.", "`want` فعل حالة لا يأتي عادةً بـ -ing."]
  ],
  ielts: {
    text: "في **Writing Task 2** يفيد لوصف الاتجاهات الحالية في المجتمع (`is increasing`, `are becoming`). وفي **Speaking Part 1** للحديث عن وضعك الحالي المؤقت. وفي **Speaking Part 2** إذا طُلب وصف صورة أو موقف يحدث.",
    en: "Nowadays, an increasing number of young people are choosing to study abroad."
  },
  questions: [
    { t: "mcq", q: "Be quiet! The baby ___.", o: ["sleeps", "is sleeping", "sleeping", "are sleeping"], a: 1,
      why: "حدث يجري الآن، و`the baby` مفرد: `is sleeping`." },
    { t: "mcq", q: "Look! It ___ outside.", o: ["rains", "is raining", "rain", "raining"], a: 1,
      why: "`Look!` تدل على شيء يحدث الآن: `is raining`." },
    { t: "mcq", q: "They ___ for the exam at the moment.", o: ["study", "is studying", "are studying", "studying"], a: 2,
      why: "`They` + `are` + `studying`." },
    { t: "mcq", q: "I ___ the answer.", o: ["am knowing", "know", "knowing", "am know"], a: 1,
      why: "`know` فعل حالة، يبقى في المضارع البسيط." },
    { t: "fill", q: "She ___ (write) an email right now.", a: ["is writing", "'s writing"],
      why: "`is` + `writing` (نحذف e من write)." },
    { t: "fill", q: "We ___ (not / work) today.", a: ["aren't working", "are not working", "'re not working"],
      why: "نفي: `aren't` + `working`." },
    { t: "fill", q: "Why ___ you ___ (laugh)?", ask: "اكتب الكلمتين معًا بالترتيب، مثل: are laughing", a: ["are laughing"],
      why: "السؤال: `Why are you laughing?`" },
    { t: "fill", q: "The man ___ (run) to catch the bus.", a: ["is running", "'s running"],
      why: "`run` نضاعف فيه n: `running`." },
    { t: "fill", q: "House prices ___ (rise) in this city.", a: ["are rising", "'re rising"],
      why: "اتجاه يحدث الآن، والفاعل جمع: `are rising`." },
    { t: "fix", q: "I waiting for my friend.", a: ["I am waiting for my friend.", "I'm waiting for my friend."],
      why: "ينقص الفعل المساعد `am`." },
    { t: "fix", q: "She is make dinner now.", a: ["She is making dinner now.", "She's making dinner now."],
      why: "بعد `is` نستخدم `making` (نحذف e)." },
    { t: "fix", q: "They is playing football.", a: ["They are playing football.", "They're playing football."],
      why: "مع `They` نستخدم `are`." },
    { t: "rewrite", q: "He is watching TV.", ask: "حوّل الجملة إلى سؤال جوابه نعم أو لا.",
      a: ["Is he watching TV?"],
      why: "في السؤال نقدّم `Is` على الفاعل." },
    { t: "rewrite", q: "I am using the computer.", ask: "حوّل الجملة إلى النفي.",
      a: ["I am not using the computer.", "I'm not using the computer."],
      why: "نضع `not` بعد `am`. لاحظ أن `amn't` غير موجودة." }
  ]
};
