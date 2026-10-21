window.LESSONS = window.LESSONS || {};
window.LESSONS[49] = {
  steps: [
    { k: "ثلاثة أدوار", h: "أساسي · مساعد · ناقص",
      why: [
        "الأفعال لها أدوار مختلفة في الجملة. **الأساسي** يحمل المعنى (`eat, run`). **المساعد** (`be, do, have`) يبني الزمن والنفي والسؤال ولا معنى له وحده.",
        "و**الناقص** (`can, must, should`) يضيف معنى (قدرة، إلزام، نصيحة) ويأتي بعده فعل أصلي."
      ],
      show: [{ t: "cards", items: [
        { i: "zap", h: "أساسي", txt: "يحمل المعنى", en: "She {v:works} here." },
        { i: "tool", h: "مساعد", txt: "يبني الزمن والسؤال", en: "{a:Did} you {v:go}? · She {a:is} working." },
        { i: "hand", h: "ناقص", txt: "يضيف معنى", en: "You {a:must} {v:rest}." }
      ] },
        { t: "note", txt: "`do` قد تكون مساعدًا وأساسيًا في الجملة نفسها:", en: "What {a:do} you {v:do}? · {a:Did} you {v:do} your homework?" }],
      check: { q: "In \"What do you do?\", the second \"do\" is…", o: ["an auxiliary verb", "a main verb"], a: 1, why: "الثانية تحمل المعنى (تعمل) ← فعل أساسي." } },

    { k: "متعدٍّ ولازم", h: "يحتاج مفعولًا أم *لا*؟",
      why: [
        "الفعل **المتعدي** يحتاج مفعولًا يكمل معناه: `buy` ماذا؟ `buy a car`.",
        "الفعل **اللازم** معناه كامل وحده: `arrive, sleep, happen`. لذلك لا يأتي بعده مفعول مباشرة، ولا يُبنى للمجهول."
      ],
      show: [{ t: "compare", cols: [
        { h: "متعدٍّ: + مفعول", c: "verb", en: ["She {v:bought} {o:a car}.", "I {v:sent} {o:the email}."] },
        { h: "لازم: وحده", c: "accent", en: ["The guests {v:arrived}.", "The baby {v:slept}."] }
      ] },
        { t: "fix", items: [["I arrived the airport.", "I {v:arrived} {k:at} the airport.", "اللازم يحتاج حرف جر قبل المكان."], ["The accident was occurred.", "The accident {v:occurred}.", "اللازم لا يُبنى للمجهول."]] }],
      check: { q: "The problem ___ last week.", o: ["was occurred", "occurred"], a: 1, why: "`occur` لازم، فلا يُبنى للمجهول." } },

    { k: "فعل بالمعنيين", h: "open و close: متعدٍّ ولازم",
      why: ["بعض الأفعال تصلح بالطريقتين: مع مفعول (فعلتُ ذلك بالباب) أو بدونه (الباب فعلها)."],
      show: [{ t: "build", lab: "اختر",
        opts: [["متعدٍّ", "{s:I} {v:opened} {o:the door}.", "أنا فتحته", 0], ["لازم", "{s:The door} {v:opened}.", "انفتح (لا نعرف كيف)", 1], ["متعدٍّ", "{s:They} {v:increased} {o:the price}.", "", 0], ["لازم", "{s:The price} {v:increased}.", "مفيد جدًا في Writing Task 1", 1]],
        groups: [{ h: "متعدٍّ + مفعول" }, { h: "لازم بلا مفعول" }] }],
      check: { q: "Which is correct in Task 1?", o: ["The number was increased to 50.", "The number increased to 50."], a: 1, why: "`increase` هنا لازم: الرقم ارتفع، لا أحد رفعه." } },

    { k: "أفعال الربط", h: "look · seem · become + *صفة*",
      why: [
        "أفعال الربط (`be, seem, look, feel, become, sound, taste`) لا تصف حدثًا، بل تربط الفاعل بصفته.",
        "لذلك بعدها **صفة** لا ظرف: `She looks happy` (هي سعيدة)، لا `happily`. الصفة تصف الفاعل لا الفعل."
      ],
      show: [{ t: "ex", items: [["He {v:seems} {k:tired}.", ""], ["The food {v:tastes} {k:good}.", "لا well"], ["This plan {v:sounds} {k:interesting}.", ""]] },
        { t: "fix", items: [["She looks beautifully.", "She {v:looks} {k:beautiful}.", ""]] }],
      check: { q: "You look ___ today.", o: ["tiredly", "tired"], a: 1, why: "بعد فعل الربط `look` صفة: `tired`." } }
  ],
  sum: [
    { h: "الأدوار", en: ["main: work · aux: do/be/have · modal: can/must"] },
    { h: "متعدٍّ", en: ["She bought {o:a car}."] },
    { h: "لازم", en: ["They arrived. (لا مجهول)"] },
    { h: "الربط", en: ["looks {k:happy} · tastes {k:good}"] }
  ]
};
