window.LESSONS = window.LESSONS || {};
window.LESSONS[90] = {
  steps: [
    { k: "الفكرة", h: "احتفظ بـ to واحذف الفعل",
      why: [
        "عندما يكون الفعل بعد `to` واضحًا من الجملة السابقة، نحذفه ونترك `to` وحدها في آخر الجملة.",
        "`to` هنا تعمل كإشارة للفعل المحذوف، لذلك لا يمكن حذفها: `I'd love` وحدها ناقصة."
      ],
      show: [{ t: "trans", items: [{ from: "“Come with us.” “I'd like to {d:come}, but I'm busy.”", to: "“I'd like {a:to}, but I'm busy.”" }] },
        { t: "fix", items: [["“Will you help?” “I'd love.”", "“I'd love {a:to}.”", ""]] }],
      check: { q: "\"Did you call him?\" \"No, I forgot ___.\"", o: ["(nothing)", "to", "it"], a: 1, why: "نحتفظ بـ `to`." } },

    { k: "بعد أي أفعال", h: "want · try · have to · used to",
      why: ["يحدث هذا بعد الأفعال التي يأتي بعدها `to` عادة. اضغط على كل فعل."],
      show: [{ t: "build", lab: "اختر",
        opts: [["want", "You don't have to come if you don't {v:want} {a:to}.", "", 0], ["hope", "I'd love to visit Japan, and I {v:hope} {a:to} next year.", "", 0], ["have to", "I don't want to go, but I {v:have} {a:to}.", "", 0], ["used to", "I don't smoke now, but I {v:used} {a:to}.", "", 0], ["try", "I'll finish it. I'll {v:try} {a:to}.", "", 0], ["be able", "I wanted to go, but I wasn't {v:able} {a:to}.", "", 0]],
        groups: [{ h: "فعل + to (والفعل محذوف)" }] },
        { t: "fix", items: [["I wanted to go, but I didn't able.", "…but I {a:wasn't able to}.", ""]] }],
      check: { q: "I don't smoke now, but I ___.", o: ["used", "used to"], a: 1, why: "نحتفظ بـ `to`: `used to`." } },

    { k: "be و النفي", h: "to be · not to",
      why: [
        "إذا كان الفعل المحذوف هو `be`، نحتفظ به غالبًا: `I'd like to be.`",
        "والنفي: `not` قبل `to`: `I tried not to.`"
      ],
      show: [{ t: "ex", items: [["“Are you a manager?” “No, but I'd like {a:to be}.”", ""], ["I tried {n:not} {a:to}.", ""], ["You can leave whenever you {v:want}.", "بعد if / whenever يمكن حذف to أيضًا"]] }],
      check: { q: "\"Are you ready?\" \"Not yet, but I will soon ___.\"", o: ["be", "to"], a: 0, why: "بعد `will` فعل أصلي، والفعل المحذوف `ready` يحتاج `be`." } }
  ],
  sum: [
    { h: "القاعدة", en: ["I'd love {a:to}. (لا I'd love)"] },
    { h: "أفعال", en: ["want to · have to · used to · try to"] },
    { h: "be", en: ["I'd like {a:to be}."] },
    { h: "النفي", en: ["I tried {n:not} {a:to}."] }
  ]
};
