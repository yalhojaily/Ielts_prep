window.LESSONS = window.LESSONS || {};
window.LESSONS[86] = {
  steps: [
    { k: "الفكرة", h: "It تجلس مكان فاعل *طويل*",
      why: [
        "الإنجليزية لا تحب أن تبدأ الجملة بفاعل طويل (`To learn English is useful`). فنضع `It` في الأول كفاعل مؤقت، وننقل الفاعل الطويل إلى الآخر.",
        "`It is useful to learn English.` = نفس المعنى، أطبع بكثير."
      ],
      show: [{ t: "trans", items: [{ from: "{s:To learn English} is useful.", to: "{s:It} is useful {s:to learn English}.", chg: ["It في الأول", "الفاعل الطويل في الآخر"] }] }],
      check: { q: "___ important to sleep well.", o: ["Is", "It is", "This"], a: 1, why: "نحتاج `It` كفاعل مؤقت." } },

    { k: "لا تحذف It", h: "Is important… ← *It* is important",
      why: [
        "في العربية نقول «من المهم أن…» بلا فاعل ظاهر، لذلك يكتب العرب `Is important to…`.",
        "في الإنجليزية الفاعل **إجباري**، فلا بد من `It`."
      ],
      show: [{ t: "fix", items: [["Is important to study.", "{s:It} is important to study.", ""], ["This is necessary that we act.", "{s:It} is necessary that we act.", ""]] }],
      check: { q: "___ difficult to find a good job.", o: ["Is", "It's"], a: 1, why: "لا تحذف `It`." } },

    { k: "الأنماط", h: "to · that · for sb",
      why: [
        "بعد `It is` + صفة يأتي أحد ثلاثة أنماط: `to` + فعل، أو `that` + جملة كاملة، أو `for` + شخص + `to` + فعل.",
        "اضغط على كل نمط."
      ],
      show: [{ t: "build", lab: "اختر النمط",
        opts: [["to", "{s:It}'s {k:essential} {a:to} {v:save} for the future.", "", 0], ["that", "{s:It}'s {k:clear} {k:that} he is lying.", "جملة كاملة بعد that", 1], ["for sb", "{s:It}'s hard {k:for me} {a:to} {v:understand}.", "", 0], ["seems", "{s:It} {v:seems} {k:that} prices will rise.", "انطباع بتحفظ", 1]],
        groups: [{ h: "It + adj + to", sub: "important, difficult, easy, necessary" }, { h: "It + adj + that", sub: "true, clear, likely, surprising" }] },
        { t: "fix", items: [["It's difficult for understand.", "It's difficult {a:to} {v:understand}.", ""]] }],
      check: { q: "It is likely ___ prices will fall.", o: ["to", "that"], a: 1, why: "بعدها جملة كاملة (`prices will fall`) ← `that`." } },

    { k: "It takes", h: "It takes + شخص + وقت + to",
      why: [
        "للتعبير عن الوقت الذي يحتاجه شيء: `It takes` + (شخص) + الوقت + `to` + فعل.",
        "الترتيب ثابت. `It takes to me two hours` خطأ."
      ],
      show: [{ t: "formula", rows: [["", "{s:It} {v:takes} {o:me} {k:two hours} {a:to} {v:get} there."], ["", "{s:It} {v:took} {o:us} {k:a week} {a:to} {v:finish}."]] },
        { t: "note", lab: "وأيضًا", txt: "بعد `worth` و`no use` يأتي `ing`.", en: "It's worth visiting. · It's no use crying." }],
      check: { q: "It ___ two hours to get there.", o: ["takes me", "takes to me"], a: 0, why: "`It takes` + شخص + وقت." } }
  ],
  sum: [
    { h: "الفكرة", en: ["{s:It} is useful {s:to learn English}."] },
    { h: "إجباري", en: ["{s:It} is important… (لا Is important)"] },
    { h: "الأنماط", en: ["It's easy to… · It's clear that…"] },
    { h: "takes", en: ["It takes me an hour to…"] }
  ]
};
