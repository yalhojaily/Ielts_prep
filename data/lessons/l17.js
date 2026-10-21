window.LESSONS = window.LESSONS || {};
window.LESSONS[17] = {
  steps: [
    { k: "الفكرة", h: "قرار *اتُّخذ مسبقًا* أو دليل نراه",
      why: [
        "`be going to` تربط المستقبل بشيء موجود **الآن**: إما قرار في رأسك اتخذته من قبل، وإما دليل أمام عينيك.",
        "لذلك نرسمه سهمًا يبدأ من الآن ويتجه إلى المستقبل."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "arrow", from: 0, to: 0.6, c: "accent", label: "I'm going to start a course." }, { m: "dot", at: 0, c: "subj", label: "decision already made" }],
        legend: [["accent", "من الآن نحو المستقبل = **نية أو توقع بدليل**"]] }],
      check: { q: "I've decided. I ___ IELTS in March.", o: ["will take", "am going to take"], a: 1, why: "قرار متخذ مسبقًا (`I've decided`) ← `going to`." } },

    { k: "البناء", h: "am / is / are + going to + فعل",
      why: [
        "الجزء الأول (`am / is / are`) يتغير مع الفاعل كما في المضارع المستمر، ولا يُحذف أبدًا.",
        "`going to` ثابتة، وبعدها الفعل الأصلي بدون s وبدون ing."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {a:am} {a:going to} {v:study}.", "", 0], ["She", "{s:She} {a:is} {a:going to} {v:study}.", "", 1], ["They", "{s:They} {a:are} {a:going to} {v:study}.", "", 2]],
        groups: [{ h: "I", res: "{a:am}" }, { h: "he · she · it", res: "{a:is}" }, { h: "you · we · they", res: "{a:are}" }] },
        { t: "fix", items: [["I going to travel.", "I {a:am going to} {v:travel}.", "لا تحذف `am`."], ["She is going to visits.", "She {a:is going to} {v:visit}.", "الفعل الأصلي بعد `to`."]] }],
      check: { q: "We ___ going to buy it.", o: ["aren't", "don't", "not"], a: 0, why: "النفي بـ `be`: `aren't going to`." } },

    { k: "التوقع بدليل", h: "أرى السبب الآن",
      why: [
        "الاستخدام الثاني: تتوقع شيئًا لأن الدليل أمامك الآن. السحب سوداء ← ستمطر.",
        "الفرق عن التخمين: هنا لست تعبّر عن رأي، بل ترى علامة واضحة."
      ],
      show: [{ t: "cards", items: [
        { i: "cloud", h: "الدليل الآن", en: "Look at those clouds!", ar: "انظر إلى تلك السحب!" },
        { i: "arrow", h: "التوقع", en: "It's going to rain.", ar: "ستمطر." },
        { i: "alert", h: "الدليل الآن", en: "Be careful!", ar: "انتبه!" },
        { i: "arrow", h: "التوقع", en: "You're going to fall!", ar: "ستسقط!" }
      ] }],
      check: { q: "Look! That car ___ hit the wall!", o: ["will", "is going to"], a: 1, why: "الدليل أمامك الآن ← `is going to`." } },

    { k: "في الكلام", h: "gonna وgoing to go",
      why: [
        "في الكلام السريع تُنطق `going to` كأنها `gonna`. افهمها عند الاستماع، لكن لا تكتبها في Writing.",
        "ومع أفعال الحركة نختصر غالبًا `going to go to` إلى المضارع المستمر: `I'm going to Riyadh.`"
      ],
      show: [{ t: "compare", cols: [
        { h: "تسمعها", c: "subj", en: ["I'm gonna tell him."] },
        { h: "تكتبها", c: "accent", en: ["I'm {a:going to} {v:tell} him."] }
      ] }],
      check: { q: "Which is correct in IELTS Writing?", o: ["Prices are gonna rise.", "Prices are going to rise."], a: 1, why: "`gonna` للكلام فقط." } }
  ],
  sum: [
    { h: "البناء", en: ["{s:I} {a:am going to} {v:study}", "{s:she} {a:is going to} · {s:they} {a:are going to}"] },
    { h: "نية مقررة", en: ["I'm going to start a course."] },
    { h: "توقع بدليل", en: ["Look! It's going to rain."] },
    { h: "انتبه", txt: "لا تحذف am / is / are" }
  ]
};
