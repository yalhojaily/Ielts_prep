window.LESSONS = window.LESSONS || {};
window.LESSONS[47] = {
  steps: [
    { k: "الفكرة", h: "السؤال المنقول *ليس* سؤالًا",
      why: [
        "عندما تقول `He asked me where I lived` فأنت تخبر بمعلومة، لا تسأل. لذلك يرجع الترتيب إلى ترتيب الجملة العادية وتختفي علامة الاستفهام.",
        "هي نفس قواعد السؤال غير المباشر (الدرس 38)، مع إرجاع الزمن (الدرس 44)."
      ],
      show: [{ t: "trans", items: [{ from: "“{q:Where} {a:do} {s:you} {v:live}?”", to: "He asked me {q:where} {s:I} {v:lived}.", chg: ["`do` اختفت", "الفاعل قبل الفعل", "`live` ← `lived`", "نقطة"] }] }],
      check: { q: "He asked me where ___.", o: ["did I live", "I lived", "do I live"], a: 1, why: "ترتيب عادي وإرجاع الزمن: `I lived`." } },

    { k: "نعم أو لا", h: "if / whether للسؤال بلا أداة",
      why: [
        "إذا كان السؤال الأصلي جوابه نعم أو لا، نضيف `if` أو `whether` بعد `asked`.",
        "لا نستخدم `that` مع الأسئلة: `asked me that…` خطأ."
      ],
      show: [{ t: "build", lab: "اختر السؤال",
        opts: [["Are you married?", "She asked {k:if} I {a:was} married.", "", 0], ["Have you eaten?", "She asked {k:whether} I {a:had} {v:eaten}.", "", 0], ["What's your name?", "He asked what my name {a:was}.", "أداة استفهام ← بلا if", 1], ["Why did you leave?", "He asked why I {a:had} {v:left}.", "أداة استفهام ← بلا if", 1]],
        groups: [{ h: "نعم/لا ← if / whether" }, { h: "wh- ← الأداة نفسها" }] }],
      check: { q: "\"Are you ready?\" → They asked me ___ ready.", o: ["that I was", "if I was", "was I"], a: 1, why: "سؤال نعم/لا ← `if` + ترتيب عادي." } },

    { k: "الطلبات", h: "Can you…? ← asked me *to*",
      why: [
        "`Can you help me?` في الحقيقة طلب، لا سؤال عن القدرة. لذلك ننقله كطلب: `asked` + الشخص + `to` + الفعل.",
        "هذا أبسط وأطبع من نقله كسؤال."
      ],
      show: [{ t: "trans", items: [{ from: "“Can you help me?”", to: "He asked me {a:to} {v:help} him." }, { from: "“Please wait here.”", to: "They asked me {a:to} {v:wait} there." }] }],
      check: { q: "\"Could you close the door?\" → She asked me ___ the door.", o: ["to close", "if I could close", "both are possible"], a: 2, why: "الطلب يُنقل غالبًا بـ `asked me to`، والصيغة الأخرى صحيحة أيضًا." } },

    { k: "الأخطاء", h: "أشهر أخطاء نقل الأسئلة",
      why: ["كلها تأتي من الإبقاء على ترتيب السؤال المباشر."],
      show: [{ t: "fix", items: [["He asked me where did I live.", "He asked me where I {v:lived}.", ""], ["She asked me was I tired.", "She asked me {k:if} I {a:was} tired.", ""], ["He asked me what is my name.", "He asked me what my name {a:was}.", ""]] }],
      check: { q: "The officer asked what my name ___.", o: ["is", "was", "was it"], a: 1, why: "ترتيب عادي وإرجاع الزمن: `my name was`." } }
  ],
  sum: [
    { h: "wh-", en: ["He asked where {s:I} {v:lived}."] },
    { h: "نعم / لا", en: ["She asked {k:if} I {a:was} OK."] },
    { h: "طلب", en: ["He asked me {a:to} {v:wait}."] },
    { h: "تذكّر", txt: "لا do · لا قلب · نقطة لا علامة استفهام" }
  ]
};
