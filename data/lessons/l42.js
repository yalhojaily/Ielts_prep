window.LESSONS = window.LESSONS || {};
window.LESSONS[42] = {
  steps: [
    { k: "قاعدتان", h: "القلب… *إلا* في حالتين",
      why: [
        "كل الأسئلة تعود إلى قاعدة واحدة: المساعد يتقدم على الفاعل (أو نضيف do).",
        "والاستثناءان: **سؤال الفاعل** (`Who lives here?`) و**السؤال غير المباشر** (`Do you know where he lives?`) لا يُقلب فيهما الترتيب."
      ],
      show: [{ t: "build", lab: "اختر نوع السؤال",
        opts: [["مباشر", "{q:What} {a:did} {s:she} {v:say}?", "مساعد قبل الفاعل", 0], ["سؤال الفاعل", "{q:Who} {v:said} that?", "بلا did ولا قلب", 1], ["غير مباشر", "Tell me {q:what} {s:she} {v:said}.", "ترتيب عادي", 1], ["ذيلي", "{s:She} {v:said} it, {a:didn't} {s:she}?", "مساعد + ضمير", 0]],
        groups: [{ h: "نقلب / مساعد + ضمير" }, { h: "لا نقلب" }] }],
      check: { q: "Can you tell me what time ___?", o: ["is it", "it is"], a: 1, why: "سؤال غير مباشر ← لا قلب." } },

    { k: "الخطوات", h: "أربع خطوات لأي سؤال",
      why: ["اتبع هذه الخطوات بالترتيب، وستكوّن أي سؤال بشكل صحيح:"],
      show: [{ t: "chain", items: [
        { h: "حدد الزمن", ar: "حاضر؟ ماضٍ؟ تام؟" },
        { h: "هل يوجد مساعد؟", ar: "إن لا: أضف do / does / did" },
        { h: "تسأل عن الفاعل؟", ar: "إن نعم: لا تقلب" },
        { h: "سؤال غير مباشر؟", ar: "إن نعم: لا تقلب" }
      ] },
        { t: "trans", items: [{ from: "She {a:has} {v:finished}.", to: "Do you know {k:if} she {a:has} {v:finished}?", chg: ["Has she finished?", "← غير مباشر"] }] }],
      check: { q: "Who ___ the cup?", o: ["did break", "broke"], a: 1, why: "سؤال عن الفاعل ← بلا did." } },

    { k: "مراجعة الأخطاء", h: "أشهر أخطاء الأسئلة",
      why: ["كل خطأ هنا يعود لإحدى القاعدتين. حاول أن تعرف السبب قبل أن تقرأه."],
      show: [{ t: "fix", items: [
        ["Where you went last night?", "Where {a:did} you {v:go} last night?", "سؤال مباشر بلا مساعد ← نضيف did."],
        ["Who did break the cup?", "Who {v:broke} the cup?", "سؤال فاعل ← بلا did."],
        ["Can you tell me what time is it?", "Can you tell me what time {s:it} {a:is}?", "غير مباشر ← لا قلب."],
        ["You like it, isn't it?", "You like it, {a:don't} you?", "الذيل يكرر do مع الضمير."]
      ] }],
      check: { q: "Where ___ last night?", o: ["you went", "did you go", "did you went"], a: 1, why: "سؤال مباشر بفعل عادي في الماضي ← `did you go`." } },

    { k: "حرف الجر", h: "حرف الجر في *آخر* السؤال",
      why: ["تذكير: في الأسئلة يبقى حرف الجر في النهاية، لا في الأول."],
      show: [{ t: "ex", items: [["{q:Who} did you go {k:with}?", ""], ["{q:What} is it {k:for}?", ""], ["{q:Which} hotel are you staying {k:at}?", ""]] }],
      check: { q: "Choose the natural question:", o: ["With who did you go?", "Who did you go with?"], a: 1, why: "حرف الجر `with` في آخر السؤال." } }
  ],
  sum: [
    { h: "مباشر", en: ["{q:What} {a:did} {s:she} {v:say}?"] },
    { h: "فاعل", en: ["{q:Who} {v:said} that?"] },
    { h: "غير مباشر", en: ["Tell me what {s:she} {v:said}."] },
    { h: "ذيلي وقصير", en: ["…, {a:didn't} she? · {a:Did} she?"] }
  ]
};
