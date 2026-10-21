window.LESSONS = window.LESSONS || {};
window.LESSONS[29] = {
  steps: [
    { k: "الفكرة", h: "شرط + نتيجة، والنوع حسب *الواقعية*",
      why: [
        "جملة الشرط جزءان: الشرط (`If…`) والنتيجة. السؤال الذي يحدد نوعها: **ما مدى واقعية هذا الشرط؟**",
        "كلما ابتعد الشرط عن الواقع، رجعت الأزمنة خطوة إلى الماضي. هذا هو السر الوحيد لكل الأنواع الأربعة."
      ],
      show: [{ t: "scale", cap: "اضغط على كل درجة من الواقعية",
        items: [["Type 3", 0, "ماضٍ لم يحدث", "`If I had studied, I would have passed.` (لم أدرس، ورسبت)"], ["Type 2", 33, "خيال الآن", "`If I had more time, I would learn Chinese.` (ليس عندي وقت)"], ["Type 1", 66, "احتمال حقيقي", "`If it rains, I'll stay home.` (ممكن أن تمطر غدًا)"], ["Type 0", 100, "حقيقة دائمة", "`If you heat ice, it melts.` (دائمًا)"]] },
        { t: "table", head: ["النوع", "الشرط", "النتيجة", "المعنى"], rows: [
          ["0", "If + present", "present", "حقيقة دائمة"], ["1", "If + present", "will + verb", "احتمال حقيقي"],
          ["2", "If + past", "would + verb", "خيال في الحاضر"], ["3", "If + had + v3", "would have + v3", "ماضٍ لم يحدث"]] }],
      check: { q: "If you heat ice, it ___.", o: ["melts", "will melt", "would melt"], a: 0, why: "حقيقة علمية دائمة ← النوع 0: مضارع في الجزأين." } },

    { k: "النوع 0 و 1", h: "حقيقة دائمة · احتمال حقيقي",
      why: [
        "**النوع 0**: كلما حدث الشرط حدثت النتيجة دائمًا (حقائق علمية وعادات). مضارع + مضارع.",
        "**النوع 1**: شيء ممكن فعلًا في المستقبل. مضارع في جزء `if`، و`will` في النتيجة."
      ],
      show: [{ t: "compare", cols: [
        { h: "النوع 0: دائمًا", c: "subj", en: ["{k:If} you {v:mix} red and white, you {v:get} pink."] },
        { h: "النوع 1: ممكن غدًا", c: "verb", en: ["{k:If} it {v:rains}, I{a:'ll} {v:stay} home.", "{k:If} the price {v:falls}, I{a:'ll} {v:buy} more."] }
      ] }],
      check: { q: "If I ___ time tomorrow, I'll call you.", o: ["will have", "have", "had"], a: 1, why: "النوع 1: المضارع في جزء `if`، لا `will`." } },

    { k: "لا will بعد if", h: "أشهر خطأ: will أو would بعد if",
      why: [
        "جزء `if` لا يأخذ `will` ولا `would` أبدًا (في كل الأنواع). مكانهما في جزء النتيجة فقط.",
        "السبب: `if` نفسها توضح أن الكلام عن احتمال، فالنتيجة هي التي تحمل `will / would`."
      ],
      show: [{ t: "fix", items: [["If I will have time, I will call you.", "If I {v:have} time, I {a:will} call you.", ""], ["If I would be rich, I would travel.", "If I {v:were} rich, I {a:would} travel.", ""]] }],
      check: { q: "If it ___ tomorrow, we'll cancel the trip.", o: ["will rain", "rains"], a: 1, why: "لا `will` بعد `if`." } },

    { k: "النوع 2", h: "خيال في *الحاضر*",
      why: [
        "النوع 2 لموقف غير حقيقي الآن أو بعيد الاحتمال: ليس عندي وقت، لكن لو كان عندي…",
        "الماضي هنا **لا يعني الماضي**، بل يعني «بعيد عن الواقع». و`If I were` مع كل الضمائر هي الأفضل، خصوصًا في النصيحة: `If I were you…`"
      ],
      show: [{ t: "compare", cols: [
        { h: "الواقع", c: "subj", en: ["I don't have time."] },
        { h: "الخيال (النوع 2)", c: "accent", en: ["{k:If} I {v:had} more time, I {a:would} {v:learn} Chinese."] }
      ] },
        { t: "note", kind: "tip", lab: "للنصيحة", txt: "`If I were you` = لو كنت مكانك.", en: "If I were you, I would accept the offer." }],
      check: { q: "If I ___ you, I'd see a doctor.", o: ["am", "was", "were"], a: 2, why: "`If I were you` الصيغة الصحيحة للنصيحة." } },

    { k: "النوع 3", h: "ماضٍ *لم يحدث*",
      why: [
        "النوع 3 للتخيل في الماضي: الحدث انتهى ولا يمكن تغييره. نستعمله للندم أو اللوم أو التخيل.",
        "رجعنا خطوة أبعد: `had` + v3 في الشرط، و`would have` + v3 في النتيجة."
      ],
      show: [{ t: "compare", cols: [
        { h: "الواقع", c: "subj", en: ["I didn't study, so I failed."] },
        { h: "التخيل (النوع 3)", c: "accent", en: ["{k:If} I {a:had} {v:studied}, I {a:would have} {v:passed}."] }
      ] }],
      check: { q: "If I had studied, I ___.", o: ["would pass", "would have passed", "will pass"], a: 1, why: "النوع 3: `would have` + التصريف الثالث." } },

    { k: "الترتيب و unless", h: "الفاصلة و unless",
      why: [
        "يمكن البدء بأي جزء. إذا بدأت بـ `If` ضع فاصلة بين الجزأين، وإذا بدأت بالنتيجة فلا فاصلة.",
        "`unless` = إلا إذا (`if not`)، ويأتي بعدها فعل **مثبت**."
      ],
      show: [{ t: "ex", items: [["{k:If} it rains, we'll stay in.", "فاصلة"], ["We'll stay in {k:if} it rains.", "بدون فاصلة"], ["I won't go {k:unless} you {v:come} with me.", "= if you don't come"]] }],
      check: { q: "I won't go unless you ___ with me.", o: ["don't come", "come"], a: 1, why: "`unless` معناها نفي بالفعل، فيأتي بعدها فعل مثبت." } }
  ],
  sum: [
    { h: "0 و 1", en: ["If you {v:heat} ice, it {v:melts}.", "If it {v:rains}, I{a:'ll} {v:stay}."] },
    { h: "2", en: ["If I {v:had} time, I{a:'d} {v:travel}."] },
    { h: "3", en: ["If I {a:had} {v:studied}, I{a:'d have} {v:passed}."] },
    { h: "قاعدة ذهبية", txt: "لا will ولا would بعد if" }
  ]
};
