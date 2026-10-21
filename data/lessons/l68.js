window.LESSONS = window.LESSONS || {};
window.LESSONS[68] = {
  steps: [
    { k: "الفكرة", h: "ثلاث كلمات *لشيئين*",
      why: [
        "عندما يكون عندك **شيئان** فقط:",
        "`both` = الاثنان معًا. `either` = أي واحد منهما (لا يهم). `neither` = لا هذا ولا ذاك."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["both", "{k:Both} answers are correct.", "الاثنان ✓✓ (فعل جمع)", 0], ["either", "{k:Either} answer is correct.", "أي واحد ✓ (مفرد)", 1], ["neither", "{k:Neither} answer is correct.", "ولا واحد ✗✗ (مفرد)", 2]],
        groups: [{ h: "both", res: "✓ ✓" }, { h: "either", res: "✓ أو ✓" }, { h: "neither", res: "✗ ✗" }] }],
      check: { q: "You can sit in ___ chair. I don't mind.", o: ["both", "either", "neither"], a: 1, why: "أي واحد منهما، لا يهم ← `either`." } },

    { k: "مع and / or / nor", h: "both…and · either…or · neither…nor",
      why: [
        "كل كلمة لها شريك ثابت لربط شيئين: `both` مع `and`، و`either` مع `or`، و`neither` مع `nor`.",
        "ومع `neither…nor` يطابق الفعل الاسم **الأقرب** إليه."
      ],
      show: [{ t: "ex", items: [["{k:Both} my parents {k:and} my sister are teachers.", ""], ["You can pay {k:either} by card {k:or} in cash.", ""], ["{k:Neither} Ali {k:nor} his brothers {v:are} here.", "الفعل يطابق brothers (الأقرب)"]] }],
      check: { q: "You can have either tea ___ coffee.", o: ["and", "or", "nor"], a: 1, why: "`either` شريكها `or`." } },

    { k: "neither = منفية", h: "neither + فعل *مثبت*",
      why: [
        "`neither` منفية بنفسها، فالفعل بعدها **مثبت**. `Neither of them didn't come` خطأ: نفي مزدوج.",
        "و`both of` يأتي بعدها ضمير مفعول (`them, us`)، لا `they`."
      ],
      show: [{ t: "fix", items: [["Neither of them didn't come.", "{k:Neither} of them {v:came}.", ""], ["Both of they are doctors.", "{k:Both of} them are doctors.", ""]] }],
      check: { q: "Neither of my brothers ___.", o: ["smokes", "doesn't smoke"], a: 0, why: "`Neither` منفية ← فعل مثبت." } },

    { k: "either في الآخر", h: "too في الإثبات · either في النفي",
      why: [
        "«أيضًا» في الجملة المثبتة = `too`. لكن في الجملة **المنفية** نستخدم `either` في آخرها.",
        "`I don't like it too` خطأ شائع."
      ],
      show: [{ t: "compare", cols: [{ h: "مثبت ← too", c: "verb", en: ["I like it. — I like it {k:too}."] }, { h: "منفي ← either", c: "neg", en: ["I can't swim, and my brother can't {k:either}."] }] },
        { t: "fix", items: [["I don't like it too.", "I don't like it {k:either}.", ""]] }],
      check: { q: "She doesn't eat meat, and I don't ___.", o: ["too", "either", "neither"], a: 1, why: "في آخر الجملة المنفية ← `either`." } }
  ],
  sum: [
    { h: "الاثنان", en: ["{k:both} A {k:and} B (جمع)"] },
    { h: "أحدهما", en: ["{k:either} A {k:or} B"] },
    { h: "ولا واحد", en: ["{k:neither} A {k:nor} B + فعل مثبت"] },
    { h: "في النفي", en: ["I don't {k:either}."] }
  ]
};
