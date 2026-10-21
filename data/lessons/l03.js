window.LESSONS = window.LESSONS || {};
window.LESSONS[3] = {
  steps: [
    { k: "الفكرة", h: "السؤال يبدأ *بالمساعد*",
      why: [
        "في العربية يكفي أن نرفع نبرة الصوت أو نضيف «هل»: هل تعمل هنا؟ والجملة نفسها لا يتغير ترتيبها.",
        "في الإنجليزية يجب أن يتغير الترتيب: نضع المساعد `Do / Does` في **أول** الجملة، ثم الفاعل، ثم الفعل الأصلي. `Do` هنا تقوم بدور «هل»."
      ],
      show: [{ t: "trans", items: [
        { from: "{s:You} {v:work} here.", to: "{a:Do} {s:you} {v:work} here?", chg: ["`Do` في أول الجملة", "علامة استفهام"] }
      ] }],
      check: { q: "Choose the correct question.", o: ["You speak English?", "Do you speak English?", "Speak you English?"], a: 1, why: "السؤال يحتاج المساعد `Do` في أوله، ثم الفاعل، ثم الفعل." } },

    { k: "Do أم Does", h: "اختر الفاعل وراقب السؤال",
      why: [
        "كما في النفي: مع `he / she / it` يأخذ المساعد الـ s فيصبح `Does`، ويعود الفعل إلى أصله.",
        "لذلك `Does she likes?` خطأ، لأن الـ s ظهرت مرتين."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [
          ["you", "{a:Do} {s:you} {v:like} tea?", "", 0], ["they", "{a:Do} {s:they} {v:like} tea?", "", 0],
          ["we", "{a:Do} {s:we} {v:like} tea?", "", 0], ["she", "{a:Doe|s} {s:she} {v:like} tea?", "", 1],
          ["he", "{a:Doe|s} {s:he} {v:like} tea?", "", 1], ["your mother", "{a:Doe|s} {s:your mother} {v:like} tea?", "`your mother` = she", 1]
        ], start: 3,
        groups: [{ h: "I · you · we · they", res: "{a:Do} … {v:like}?" }, { h: "he · she · it", res: "{a:Does} … {v:like}?" }] }],
      check: { q: "___ your brother live in Jeddah?", o: ["Do", "Does", "Is"], a: 1, why: "`your brother` مفرد غائب، فنبدأ بـ `Does`، والفعل بعده `live` بدون s." } },

    { k: "أداة الاستفهام", h: "الترتيب الثابت: Q · A · S · V",
      why: [
        "إذا أردت معلومة (أين؟ متى؟ ماذا؟) تضع أداة الاستفهام قبل كل شيء، ثم يبقى ترتيب السؤال كما هو.",
        "احفظ الحروف الأربعة: **Q** أداة الاستفهام ← **A** المساعد ← **S** الفاعل ← **V** الفعل. أي تبديل بينها يجعل السؤال خاطئًا."
      ],
      show: [
        { t: "chain", items: [
          { h: "Q أداة", en: "{q:Where}" }, { h: "A مساعد", en: "{a:does}" }, { h: "S فاعل", en: "{s:he}" }, { h: "V فعل", en: "{v:work}?" }
        ] },
        { t: "fix", items: [["Where you live?", "{q:Where} {a:do} {s:you} {v:live}?", "المساعد لا يُحذف حتى مع أداة الاستفهام."], ["What time the shop opens?", "{q:What time} {a:does} {s:the shop} {v:open}?", ""]] }
      ],
      check: { q: "Put it in order: (does / what / start / the film / time)", o: ["What time the film does start?", "What time does the film start?", "What time does start the film?"], a: 1, why: "الترتيب: `What time` (Q) ← `does` (A) ← `the film` (S) ← `start` (V)." } },

    { k: "مع be", h: "مع am / is / are نقلب الترتيب فقط",
      why: [
        "`be` لا يحتاج `do` في السؤال، تمامًا كما في النفي. نقدّم `am / is / are` على الفاعل.",
        "القاعدة: إن كان في الجملة `be` فهو يتقدم. إن لم يكن، نستدعي `do / does`."
      ],
      show: [{ t: "compare", cols: [
        { h: "مع be: نقلب", c: "be", en: ["{s:She} {a:is} a teacher.", "{a:Is} {s:she} a teacher?"] },
        { h: "فعل عادي: نضيف do", c: "verb", en: ["{s:She} {v:teaches}.", "{a:Does} {s:she} {v:teach}?"] }
      ] }],
      check: { q: "___ they ready?", o: ["Do", "Are", "Does"], a: 1, why: "`ready` صفة، والجملة بفعل `be`، فنقدم `Are` بدون do." } },

    { k: "الإجابة القصيرة", h: "نكرر المساعد، لا الفعل",
      why: [
        "الإجابة القصيرة تستعمل المساعد نفسه الذي بدأ به السؤال: سؤال بـ `Do` ← جواب بـ `do / don't`.",
        "لا نقول `Yes, I like.` لأن `like` يحتاج مفعولًا. المساعد يختصر الفعل كله."
      ],
      show: [{ t: "map", cols: [
        { h: "السؤال ← الجواب", c: "be", k: "a", rows: [["Do you like football?", "Yes, I do."], ["Does she drive?", "No, she doesn't."], ["Is he at home?", "Yes, he is."]] }
      ] },
      { t: "note", kind: "tip", lab: "جملتان مفيدتان في الاختبار", txt: "إذا لم تفهم كلمة من الممتحن:", en: "What does this word mean? · How do you spell it?" }],
      check: { q: "Do you live near here? — Yes, I ___.", o: ["live", "do", "am"], a: 1, why: "السؤال بدأ بـ `Do` فالإجابة القصيرة `Yes, I do.`" } }
  ],
  sum: [
    { h: "نعم أو لا", en: ["{a:Do} {s:you} {v:work}?", "{a:Does} {s:she} {v:work}?"] },
    { h: "بأداة استفهام", txt: "Q · A · S · V", en: ["{q:Where} {a:do} {s:you} {v:live}?"] },
    { h: "مع be", en: ["{a:Is} {s:she} a teacher?"] },
    { h: "الإجابة القصيرة", en: ["Yes, I {a:do}. · No, he {a:doesn't}."] }
  ]
};
