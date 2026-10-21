window.LESSONS = window.LESSONS || {};
window.LESSONS[45] = {
  steps: [
    { k: "الفكرة", h: "فعل واحد يصف *نوع* الكلام",
      why: [
        "بدل `He said he would help` يمكن أن تقول `He promised to help`. الفعل وحده يخبرنا أن الكلام كان وعدًا.",
        "هذه الأفعال تجعل كتابتك أغنى (مهم لدرجة Lexical Resource). لكن كل فعل له **نمط** بعده يجب أن تحفظه معه."
      ],
      show: [{ t: "trans", items: [{ from: "“I'll help you.”", to: "He {v:promised} {a:to} {v:help} me.", chg: ["`promise` = وعد", "+ to + فعل"] }, { from: "“Sorry I'm late.”", to: "He {v:apologised} {k:for} {v:being} late.", chg: ["`apologise for` + ing"] }] }],
      check: { q: "\"No, I won't pay!\" → He ___ to pay.", o: ["agreed", "refused", "suggested"], a: 1, why: "رفض ← `refused to pay`." } },

    { k: "الأنماط الأربعة", h: "اختر الفعل وراقب ما بعده",
      why: ["احفظ كل فعل مع نمطه كوحدة واحدة. اضغط على كل فعل لترى نمطه."],
      show: [{ t: "build", lab: "اختر الفعل",
        opts: [
          ["promise", "She {v:promised} {a:to} {v:help}.", "+ to + فعل", 0], ["refuse", "He {v:refused} {a:to} {v:pay}.", "+ to + فعل", 0],
          ["advise", "He {v:advised} {s:me} {a:to} {v:rest}.", "+ شخص + to + فعل", 1], ["remind", "She {v:reminded} {s:me} {a:to} {v:call}.", "+ شخص + to + فعل", 1],
          ["suggest", "He {v:suggested} {v:going} out.", "+ ing", 2], ["deny", "She {v:denied} {v:stealing} it.", "+ ing", 2],
          ["apologise", "He {v:apologised} {k:for} {v:being} late.", "+ حرف جر + ing", 3], ["insist", "She {v:insisted} {k:on} {v:paying}.", "+ حرف جر + ing", 3]
        ],
        groups: [{ h: "+ to", sub: "agree, offer, promise, refuse, decide" }, { h: "+ sb + to", sub: "advise, ask, invite, remind, warn" }, { h: "+ ing", sub: "suggest, deny, admit, recommend" }, { h: "+ prep + ing", sub: "apologise for, insist on, accuse of" }] }],
      check: { q: "She admitted ___ a mistake.", o: ["to make", "making", "make"], a: 1, why: "`admit` + ing." } },

    { k: "suggest", h: "suggest لا تأخذ *to* ولا شخصًا",
      why: [
        "أشهر خطأ: `He suggested me to go`. لا يصح.",
        "الصحيح: `suggest` + ing، أو `suggest that` + جملة. وإذا أردت الشخص فاستخدم `advise`: `He advised me to go`."
      ],
      show: [{ t: "fix", items: [["He suggested me to see a doctor.", "He {v:suggested} that I {v:see} a doctor.", "أو: He {v:advised} me {a:to} {v:see} a doctor."], ["He suggested to take a taxi.", "He {v:suggested} {v:taking} a taxi.", ""]] }],
      check: { q: "He suggested ___ a taxi.", o: ["to take", "taking", "me to take"], a: 1, why: "`suggest` + ing." } },

    { k: "تفاصيل صغيرة", h: "not قبل to · explain *to* someone",
      why: [
        "النفي في هذه الأنماط يأتي **قبل** `to`: `warned me not to be late`.",
        "و`explain` لا يأتي بعده الشخص مباشرة: `explain something to someone`، لا `explain me`."
      ],
      show: [{ t: "ex", items: [["She warned me {n:not} {a:to} {v:be} late.", "not قبل to"], ["He {v:explained} the rule {k:to} me.", "explain + شيء + to + شخص"]] },
        { t: "fix", items: [["She explained me the problem.", "She {v:explained} the problem {k:to} me.", ""]] }],
      check: { q: "The teacher explained ___.", o: ["us the rule", "the rule to us"], a: 1, why: "`explain` + الشيء + `to` + الشخص." } }
  ],
  sum: [
    { h: "+ to", en: ["promised {a:to} help · refused {a:to} pay"] },
    { h: "+ sb + to", en: ["advised {s:me} {a:to} rest"] },
    { h: "+ ing", en: ["suggested {v:going} · denied {v:taking}"] },
    { h: "+ prep + ing", en: ["apologised {k:for} {v:being} late"] }
  ]
};
