window.LESSONS = window.LESSONS || {};
window.LESSONS[21] = {
  steps: [
    { k: "الفكرة", h: "سيكون قد *اكتمل* قبل موعد قادم",
      why: [
        "قف في نقطة في المستقبل (مثلًا سنة 2030) وانظر إلى الوراء: ما الذي سيكون قد انتهى قبلها؟",
        "هذا هو المستقبل التام. كأنه «الماضي التام» لكن نقطة المرجع في المستقبل."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "arrow", from: 0, to: 0.6, c: "accent", label: "I will have paid off my loan" }, { m: "dot", at: 0.6, c: "subj", label: "by 2030" }],
        legend: [["accent", "يكتمل قبل نقطة مستقبلية = **will have + done**"]] }],
      check: { q: "By next year I ___ my degree.", o: ["will finish", "will have finished"], a: 1, why: "`By next year` = قبل نقطة مستقبلية ← المستقبل التام." } },

    { k: "البناء", h: "will have + التصريف الثالث",
      why: [
        "`will` + `have` (ثابتة، لا has) + التصريف الثالث (`finished, paid, left`).",
        "`have` هنا لا تتغير مع he / she لأن بعد `will` يأتي الفعل الأصلي دائمًا."
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:She} {a:will have} {v:finished} by noon."], ["نفي", "{s:He} {a:won't have} {v:arrived} by then."], ["سؤال", "{a:Will} {s:you} {a:have} {v:finished} by Friday?"]] },
        { t: "fix", items: [["She will has finished.", "She {a:will have} {v:finished}.", "بعد will دائمًا `have`."], ["I will have finish it.", "I {a:will have} {v:finished} it.", ""]] }],
      check: { q: "They ___ before 6.", o: ["won't have left", "won't has left", "won't have leave"], a: 0, why: "`won't have` + التصريف الثالث `left`." } },

    { k: "by", h: "by = في موعد *أقصاه*",
      why: [
        "`by` أهم إشارة لهذا الزمن: `by Monday, by the end of the year, by 2040`. تعني «قبل هذا الموعد أو عنده».",
        "و`by the time` + **مضارع** (لا will): `By the time you arrive, I'll have left.`"
      ],
      show: [{ t: "ex", items: [["I{a:'ll have} {v:finished} the report {k:by noon}.", ""], ["{k:By 2040}, the city {a:will have} {v:doubled} in size.", "مفيد في وصف التوقعات في Writing Task 1"], ["{k:By the time} you {v:arrive}, I{a:'ll have} {v:cooked} dinner.", "مضارع بعد by the time"]] }],
      check: { q: "By the time you ___, I'll have left.", o: ["will arrive", "arrive"], a: 1, why: "بعد `by the time` المضارع البسيط." } },

    { k: "المدة", h: "will have been + ing للمدة",
      why: [
        "إذا أردت قول كم ستكون **المدة** عند نقطة مستقبلية، أضف `been` + `ing`.",
        "في يونيو ستكون قد أكملت 20 سنة في التدريس."
      ],
      show: [{ t: "big", items: ["In June, {s:she} {a:will have been} {v:teaching} for 20 years."], cap: "المدة حتى نقطة في المستقبل" }],
      check: { q: "Next month we ___ married for ten years.", o: ["will be", "will have been"], a: 1, why: "المدة حتى نقطة مستقبلية ← `will have been`." } }
  ],
  sum: [
    { h: "البناء", en: ["{a:will have} + {v:done}"] },
    { h: "متى؟", txt: "اكتمال قبل موعد مستقبلي", en: ["By 2030 I'll have paid it off."] },
    { h: "by", en: ["by Monday · by the time you {v:arrive}"] },
    { h: "المدة", en: ["{a:will have been} {v:teaching} for 20 years"] }
  ]
};
