window.LESSONS = window.LESSONS || {};
window.LESSONS[105] = {
  steps: [
    { k: "الفكرة", h: "حرف الجر *يربط* الاسم بالجملة",
      why: [
        "حرف الجر كلمة صغيرة تربط اسمًا ببقية الجملة لتعبّر عن: المكان (أين؟)، الزمان (متى؟)، الاتجاه (إلى أين؟)، أو الطريقة (كيف؟).",
        "اختيار حرف الجر في الإنجليزية لا يطابق العربية غالبًا، لذلك الأفضل أن تحفظه مع الكلمة."
      ],
      show: [{ t: "cards", items: [
        { i: "pin", h: "مكان", tags: ["in", "on", "at", "under", "next to", "between", "behind"] },
        { i: "clock", h: "زمان", tags: ["at", "on", "in", "before", "after", "during", "since", "until"] },
        { i: "arrow", h: "اتجاه", tags: ["to", "into", "out of", "through", "across", "along"] },
        { i: "tool", h: "أخرى", tags: ["with", "without", "by", "about", "like", "for"] }
      ] }],
      check: { q: "We walked ___ the beach.", o: ["along", "at", "during"], a: 0, why: "حركة بمحاذاة الشاطئ ← `along`." } },

    { k: "ما بعده", h: "بعده: اسم · ضمير *مفعول* · ing",
      why: [
        "بعد حرف الجر يأتي اسم، أو ضمير **مفعول** (`me, him, them`)، أو فعل بصيغة `ing`. **لا** فعل أصلي ولا ضمير فاعل.",
        "`Thank you for help me` خطأ شائع، والصحيح `for helping me`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["اسم", "The keys are {k:on} {o:the table}.", "", 0], ["ضمير مفعول", "This is {k:for} {o:her}.", "لا for she", 1], ["ضمير مفعول", "Come {k:with} {o:us}.", "", 1], ["ing", "Thank you {k:for} {v:helping} me.", "لا for help", 2], ["ing", "She left {k:without} {v:saying} goodbye.", "", 2]],
        groups: [{ h: "+ اسم" }, { h: "+ me/him/them" }, { h: "+ ing" }] },
        { t: "fix", items: [["Thank you for help me.", "Thank you for {v:helping} me.", ""], ["This is for she.", "This is for {o:her}.", ""]] }],
      check: { q: "Think before ___.", o: ["speak", "speaking", "to speak"], a: 1, why: "بعد حرف الجر ← `ing`." } },

    { k: "مركبة", h: "حروف جر من *كلمتين أو ثلاث*",
      why: ["بعض حروف الجر مركبة وتُعامل كوحدة واحدة. هذه الأكثر استعمالًا:"],
      show: [{ t: "ex", items: [["The match was cancelled {k:because of} the rain.", "بسبب"], ["The car is {k:in front of} the house.", "أمام"], ["Have tea {k:instead of} coffee.", "بدلًا من"], ["{k:According to} the report, sales rose.", "وفقًا لـ"], ["The delay was {k:due to} bad weather.", "بسبب (رسمي)"]] }],
      check: { q: "The flight was delayed ___ the storm.", o: ["because", "because of"], a: 1, why: "قبل اسم ← `because of`." } },

    { k: "فخ العربية", h: "حرف جر مختلف عن العربية",
      why: [
        "«متزوج **من**» = `married to`. «يعتمد **على**» = `depends on` (لا of).",
        "لا تترجم حرف الجر من العربية؛ احفظه مع الكلمة (التفاصيل في الدرسين 54 و109)."
      ],
      show: [{ t: "fix", items: [["I am married with her.", "I am married {k:to} her.", ""], ["It depends of you.", "It depends {k:on} you.", ""]] }],
      check: { q: "He's married ___ a doctor.", o: ["with", "to"], a: 1, why: "`married to`." } }
  ],
  sum: [
    { h: "الوظيفة", txt: "مكان · زمان · اتجاه · طريقة" },
    { h: "بعده", en: ["for {o:her} · for {v:helping}"] },
    { h: "مركبة", en: ["because of · instead of · according to"] },
    { h: "احفظ", en: ["married to · depend on"] }
  ]
};
