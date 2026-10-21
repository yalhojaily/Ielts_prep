window.LESSONS = window.LESSONS || {};
window.LESSONS[30] = {
  steps: [
    { k: "الشرط المختلط", h: "ماضٍ لم يحدث ← نتيجة *الآن*",
      why: [
        "أحيانًا الشرط في الماضي، لكن النتيجة في الحاضر. مثلًا: لو قبلتُ الوظيفة (قبل سنوات)، لكنت غنيًا **الآن**.",
        "نأخذ الشرط من النوع 3 (`had` + v3) والنتيجة من النوع 2 (`would` + فعل). وغالبًا تأتي كلمة `now`."
      ],
      show: [{ t: "build", lab: "متى النتيجة؟",
        opts: [["في الماضي (3)", "If I {a:had} {v:taken} the job, I {a:would have} {v:moved} to Dubai.", "الشرط والنتيجة في الماضي", 0], ["الآن (مختلط)", "If I {a:had} {v:taken} the job, I {a:would} {v:be} rich {k:now}.", "الشرط في الماضي والنتيجة الآن", 1]],
        groups: [{ h: "النوع 3", res: "would have + v3" }, { h: "مختلط", res: "would + verb (now)" }] }],
      check: { q: "If I had studied medicine, I ___ a doctor now.", o: ["would have been", "would be"], a: 1, why: "النتيجة **الآن** (`now`) ← `would be`." } },

    { k: "مختلط معكوس", h: "صفة دائمة ← نتيجة في الماضي",
      why: ["والعكس أيضًا: الشرط صفة غير حقيقية الآن (النوع 2)، ونتيجتها في الماضي (النوع 3). لو كنت شجاعًا (بطبعي)، لتكلمت (في ذلك الاجتماع)."],
      show: [{ t: "big", items: ["If I {v:were} braver, I {a:would have} {v:spoken}."], cap: "لست شجاعًا (دائمًا) ← لذلك لم أتكلم (أمس)" }],
      check: { q: "If he ___ so shy, he would have asked her.", o: ["weren't", "hadn't been"], a: 0, why: "الخجل صفة دائمة فيه الآن ← النوع 2 في الشرط." } },

    { k: "أفعال ناقصة", h: "can · might · should بدل will",
      why: [
        "النتيجة لا تحتاج دائمًا `will`. يمكنك أي فعل ناقص يناسب المعنى:",
        "`can` للإذن أو الإمكانية، `might` للاحتمال الضعيف، `should` للنصيحة."
      ],
      show: [{ t: "ex", items: [["If you finish early, you {a:can} {v:leave}.", "إذن"], ["If it stops raining, we {a:might} {v:go} out.", "احتمال"], ["If you're tired, you {a:should} {v:rest}.", "نصيحة"]] }],
      check: { q: "If you finish the test early, you ___ leave.", o: ["can", "would have"], a: 0, why: "إذن في المستقبل ← `can`." } },

    { k: "أدوات بديلة", h: "in case · as long as · otherwise",
      why: [
        "`as long as / provided that` = بشرط أن (مثل `if` تمامًا، وبعدها مضارع).",
        "`in case` **ليست** `if`: تعني احتياطًا. خذ مظلة احتياطًا (تأخذها الآن سواء أمطرت أم لا). و`otherwise` = وإلا."
      ],
      show: [{ t: "compare", cols: [
        { h: "if", c: "subj", txt: "تفعل الشيء فقط إذا حدث الشرط", en: ["I'll take a taxi {k:if} it rains."] },
        { h: "in case", c: "accent", txt: "تفعل الشيء الآن احتياطًا", en: ["Take an umbrella {k:in case} it rains."] }
      ] },
        { t: "ex", items: [["You can use my car {k:as long as} you {v:drive} carefully.", "بشرط أن"], ["Hurry up, {k:otherwise} we'll miss the bus.", "وإلا"]] }],
      check: { q: "Take a coat ___ it gets cold.", o: ["in case", "unless", "otherwise"], a: 0, why: "احتياطًا لاحتمال البرد ← `in case`." } },

    { k: "الأسلوب الرسمي", h: "Should you… = If you…",
      why: [
        "في الرسائل الرسمية نحذف `if` ونقدّم `should` أو `had` على الفاعل.",
        "ستراها في الإيميلات الرسمية: `Should you need any help, please contact us.`"
      ],
      show: [{ t: "trans", items: [{ from: "If you need help, please contact us.", to: "{a:Should} you {v:need} help, please contact us.", chg: ["حذف `if`", "`Should` في الأول"] }] }],
      check: { q: "\"Should you have any questions…\" means:", o: ["You must have questions.", "If you have any questions…"], a: 1, why: "`Should you` = `If you` في الأسلوب الرسمي." } }
  ],
  sum: [
    { h: "مختلط", en: ["If I {a:had} {v:taken} it, I{a:'d} {v:be} rich now."] },
    { h: "أفعال ناقصة", en: ["If…, you {a:can / might / should}…"] },
    { h: "أدوات", en: ["as long as · in case · otherwise · unless"] },
    { h: "رسمي", en: ["{a:Should} you {v:need} help…"] }
  ]
};
