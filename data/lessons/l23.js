window.LESSONS = window.LESSONS || {};
window.LESSONS[23] = {
  steps: [
    { k: "الفكرة", h: "لا يوجد *مستقبل واحد*",
      why: [
        "في العربية نضيف «سـ» أو «سوف» وينتهي الأمر. في الإنجليزية تختار الصيغة حسب **نوع** الحدث: قرار الآن؟ خطة؟ موعد؟ جدول؟",
        "هذه خريطة الصيغ الست التي تعلمتها."
      ],
      show: [{ t: "table", head: ["الصيغة", "متى؟", "مثال"], rows: [
        ["will", "قرار الآن · رأي · وعد", "I{a:'ll} {v:answer} it."],
        ["going to", "خطة مقررة · دليل حاضر", "I{a:'m going to} {v:study} law."],
        ["am / is / are + ing", "ترتيب بموعد", "I{a:'m} {v:meeting} Ali at 6."],
        ["مضارع بسيط", "جدول رسمي", "The match {v:starts} at 9."],
        ["will be + ing", "جارٍ في لحظة قادمة", "I{a:'ll be} {v:working} at 5."],
        ["will have + done", "مكتمل قبل موعد", "I{a:'ll have} {v:finished} by 5."]
      ] }],
      check: { q: "The match ___ at 9 tonight (TV schedule).", o: ["will start", "starts", "is going to start"], a: 1, why: "جدول رسمي ← المضارع البسيط." } },

    { k: "السؤال الأول", h: "هل قررت *قبل* الكلام؟",
      why: [
        "ابدأ بهذا السؤال، فهو يحل معظم الحالات:",
        "إذا كان القرار موجودًا قبل أن تتكلم ← `going to` (أو المضارع المستمر إذا كان هناك موعد). إذا ولدت الفكرة الآن ← `will`."
      ],
      show: [{ t: "decide", q: "هل القرار موجود قبل لحظة الكلام؟",
        opts: [
          { lab: "نعم", h: "going to / مضارع مستمر", en: ["I{a:'m going to} {v:apply} for the job.", "I{a:'m} {v:meeting} my boss at 3."], c: "subj" },
          { lab: "لا، قررت الآن", h: "will", en: ["Oh, it's raining. I{a:'ll} {v:take} an umbrella."], c: "accent" }
        ] }],
      check: { q: "Look at the sky! It ___.", o: ["will rain", "is going to rain"], a: 1, why: "دليل حاضر (السماء) ← `going to`." } },

    { k: "درجات اليقين", h: "كم أنت متأكد؟",
      why: [
        "في IELTS Writing Task 1 (التوقعات) وفي Task 2 تحتاج أن تعبّر عن درجة يقينك بدقة، بدل `will` في كل جملة.",
        "اضغط على كل درجة لترى الجملة."
      ],
      show: [{ t: "scale", cap: "من الأضعف إلى الأقوى",
        items: [["definitely won't", 0, "مستحيل تقريبًا"], ["probably won't", 20, ""], ["might", 40, "ربما"], ["may", 55, ""], ["is likely to", 75, "مرجّح"], ["will probably", 85, ""], ["will definitely", 100, "مؤكد"]],
        lines: ["Prices [] {v:rise} next year."], start: 4 }],
      check: { q: "Which shows the highest certainty?", o: ["Prices might fall.", "Prices are likely to fall.", "Prices will definitely fall."], a: 2, why: "`will definitely` أعلى درجة يقين." } },

    { k: "تذكير", h: "لا will بعد when و if",
      why: ["قاعدة تتكرر في كل صيغ المستقبل: بعد `when, if, as soon as, until, before, after` نستخدم المضارع."],
      show: [{ t: "fix", items: [["I'll tell you if I will find it.", "I'll tell you {k:if} I {v:find} it.", ""], ["I'll call you when I will get home.", "I'll call you {k:when} I {v:get} home.", ""]] }],
      check: { q: "We'll start as soon as everyone ___.", o: ["will arrive", "arrives"], a: 1, why: "بعد `as soon as` المضارع البسيط." } }
  ],
  sum: [
    { h: "قرار الآن", en: ["I{a:'ll} {v:get} it."] },
    { h: "خطة / دليل", en: ["I{a:'m going to} {v:study}."] },
    { h: "موعد / جدول", en: ["I{a:'m} {v:meeting} Ali. · The bus {v:leaves} at 8."] },
    { h: "جارٍ / مكتمل", en: ["{a:will be} {v:working} · {a:will have} {v:finished}"] }
  ]
};

// تعمّق
window.LESSONS[23].steps.push(
  { k: "موقف واحد", h: "جملة واحدة، ست صيغ، ستة معانٍ",
    why: [
      "أفضل طريقة لترى الفرق: ثبّت الموقف وغيّر الصيغة. كلها عن الغد، لكن كل صيغة تقول شيئًا مختلفًا عن طبيعة الحدث.",
      "اضغط على كل صيغة واقرأ المعنى تحتها."
    ],
    show: [{ t: "build", lab: "اختر الصيغة",
      opts: [
        ["will", "I{a:'ll} {v:call} Ahmed tomorrow.", "قرار الآن أو وعد", 0],
        ["going to", "I{a:'m going to} {v:call} Ahmed tomorrow.", "نية قررتها من قبل", 0],
        ["مستمر", "I{a:'m} {v:meeting} Ahmed tomorrow at 10.", "موعد متفق عليه معه", 1],
        ["مضارع بسيط", "The meeting with Ahmed {v:starts} at 10.", "جدول رسمي", 1],
        ["will be -ing", "At 10 tomorrow I{a:'ll be} {v:talking} to Ahmed.", "سأكون في منتصف الحديث", 2],
        ["will have", "By noon I{a:'ll have} {v:talked} to Ahmed.", "سيكون الحديث قد انتهى", 2]
      ],
      groups: [{ h: "قرار / نية" }, { h: "مرتب مسبقًا" }, { h: "لحظة أو اكتمال" }] }],
    check: { q: "Don't call me at 3; I ___ my presentation then.", o: ["will give", "will be giving", "will have given"], a: 1, why: "عند الثالثة سأكون في منتصف العرض ← `will be giving`." } },

  { k: "في سياق", h: "اقرأ: التوقعات في Writing Task 1",
    why: ["عند وصف رسم بياني فيه توقعات مستقبلية، تحتاج صيغ المستقبل ودرجات اليقين معًا. لاحظ كيف تنوّعت الصيغ بدل تكرار `will`."],
    show: [{ t: "passage", h: "وصف توقعات (Task 1)",
      en: "The number of electric cars {a:is expected to} {v:rise} sharply over the next decade. By 2035, they {a:will} probably {v:make} up half of all new sales, while petrol cars {a:are likely to} {v:fall} below 30%. By the end of the period, the market {a:will have} {v:changed} completely.",
      ar: "من المتوقع أن يرتفع عدد السيارات الكهربائية بشدة خلال العقد القادم. بحلول 2035 ستشكّل على الأرجح نصف المبيعات الجديدة، بينما يُرجّح أن تنخفض سيارات البنزين إلى أقل من 30٪. وبنهاية الفترة سيكون السوق قد تغيّر تمامًا.",
      note: "`is expected to`, `will probably`, `are likely to` = درجات يقين. `will have changed` = اكتمال قبل نقطة مستقبلية." }],
    check: { q: "Which form shows completion before a future point?", o: ["is expected to rise", "will have changed"], a: 1, why: "`will have changed` = مستقبل تام." } }
);
