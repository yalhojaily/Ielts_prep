window.LESSONS = window.LESSONS || {};
window.LESSONS[39] = {
  steps: [
    { k: "الفكرة", h: "«أليس كذلك؟» بالإنجليزية",
      why: [
        "في العربية «أليس كذلك؟» عبارة واحدة ثابتة. في الإنجليزية الذيل **يتغير** حسب الجملة: يكرر الفعل المساعد نفسه مع ضمير الفاعل.",
        "والقاعدة الأساسية: الجملة **مثبتة** ← الذيل **منفي**. الجملة **منفية** ← الذيل **مثبت**. مثل الميزان: كفة هنا وكفة هناك."
      ],
      show: [{ t: "compare", cols: [
        { h: "مثبت ← منفي", c: "verb", en: ["It {a:is} cold, {a:isn't} it?", "You {a:can} swim, {a:can't} you?"] },
        { h: "منفي ← مثبت", c: "neg", en: ["It {a:isn't} cold, {a:is} it?", "You {a:can't} swim, {a:can} you?"] }
      ] }],
      check: { q: "You're from Jeddah, ___?", o: ["are you", "aren't you", "isn't it"], a: 1, why: "الجملة مثبتة بـ `are` ← الذيل منفي `aren't you`." } },

    { k: "بناء الذيل", h: "المساعد نفسه + الضمير",
      why: [
        "خطوتان: انسخ الفعل المساعد من الجملة واعكس نفيه، ثم ضع ضمير الفاعل (`the exam` ← `it`).",
        "إذا لم يكن في الجملة مساعد (فعل عادي)، استخدم `do / does / did` كما في الأسئلة. لذلك `She likes tea, isn't she?` خطأ."
      ],
      show: [{ t: "build", lab: "اختر الجملة",
        opts: [["is", "{s:The exam} {a:was}{n:n't} hard, {a:was} {s:it}?", "", 0], ["have", "{s:You}{a:'ve} {v:met} my brother, {a:have}{n:n't} {s:you}?", "", 0], ["will", "{s:She} {a:will} {v:help}, {a:won't} {s:she}?", "", 0],
               ["likes", "{s:She} {v:likes} tea, {a:does}{n:n't} {s:she}?", "لا مساعد ← does", 1], ["went", "{s:You} {v:went}, {a:did}{n:n't} {s:you}?", "لا مساعد ← did", 1]],
        groups: [{ h: "ننسخ المساعد" }, { h: "نضيف do / does / did" }] }],
      check: { q: "She works here, ___?", o: ["isn't she", "doesn't she", "don't she"], a: 1, why: "لا مساعد، والفعل `works` مضارع مع she ← `doesn't she`." } },

    { k: "حالات خاصة", h: "أذيال لا تتبع القاعدة",
      why: ["هذه الحالات شائعة جدًا في الكلام، فاحفظها كما هي:"],
      show: [{ t: "map", cols: [{ h: "الجملة ← الذيل", c: "be", k: "a", rows: [["I'm late,", "aren't I?"], ["Open the door,", "will you?"], ["Let's go,", "shall we?"], ["There is a problem,", "isn't there?"]] }] }],
      check: { q: "I am right, ___?", o: ["amn't I", "aren't I", "isn't I"], a: 1, why: "حالة خاصة: `I am` ← `aren't I?`" } },

    { k: "النفي الخفي", h: "never و nobody تجعل الجملة منفية",
      why: [
        "كلمات مثل `never, nobody, nothing, hardly` منفية المعنى حتى بدون `not`.",
        "لذلك الجملة التي فيها هذه الكلمات تُعامل كمنفية، فيأتي الذيل **مثبتًا**."
      ],
      show: [{ t: "ex", items: [["You {k:never} eat meat, {a:do} you?", ""], ["{k:Nobody} called, {a:did} they?", "مع nobody نستخدم they"]] },
        { t: "fix", items: [["He never smokes, doesn't he?", "He {k:never} smokes, {a:does} he?", ""]] }],
      check: { q: "Nothing happened, ___?", o: ["did it", "didn't it"], a: 0, why: "`Nothing` منفية المعنى ← ذيل مثبت `did it`." } },

    { k: "النبرة", h: "النبرة تغيّر المعنى",
      why: [
        "نبرة **نازلة** ↘ = أنت متأكد وتطلب الموافقة فقط (`It's a nice day, isn't it?`).",
        "نبرة **صاعدة** ↗ = سؤال حقيقي، لست متأكدًا."
      ],
      show: [{ t: "compare", cols: [
        { h: "↘ متأكد", c: "subj", en: ["It's a nice day, isn't it?"], ar: "أطلب موافقتك" },
        { h: "↗ غير متأكد", c: "accent", en: ["You're coming, aren't you?"], ar: "سؤال حقيقي" }
      ] }],
      check: { q: "A falling tone on a tag means the speaker is…", o: ["sure", "not sure"], a: 0, why: "النبرة النازلة = متأكد ويطلب الموافقة." } }
  ],
  sum: [
    { h: "الميزان", en: ["It {a:is} cold, {a:isn't} it?", "It {a:isn't}…, {a:is} it?"] },
    { h: "بلا مساعد", en: ["She {v:likes} it, {a:doesn't} she?"] },
    { h: "خاصة", en: ["I'm…, aren't I? · Let's…, shall we?"] },
    { h: "النفي الخفي", en: ["You never…, {a:do} you?"] }
  ]
};
