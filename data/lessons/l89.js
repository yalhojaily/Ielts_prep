window.LESSONS = window.LESSONS || {};
window.LESSONS[89] = {
  steps: [
    { k: "الفكرة", h: "احذف ما هو *واضح* من السياق",
      why: [
        "الإنجليزية تكره التكرار. إذا كانت الكلمات واضحة من الجملة السابقة، نحذفها.",
        "بعد `and / but / or` نحذف الفاعل المكرر: `She opened the door and walked in.`"
      ],
      show: [{ t: "big", items: ["{s:He} came home and {d:he} went to bed."], cap: "الفاعل الثاني يُحذف لأنه نفسه" }],
      check: { q: "Which is more natural?", o: ["She smiled and she said hello.", "She smiled and said hello."], a: 1, why: "نحذف الفاعل المكرر بعد `and`." } },

    { k: "المساعد يكفي", h: "I can't, but my wife *can*",
      why: [
        "بدل تكرار الفعل كله، نكتفي بالفعل المساعد: `I can't drive, but my wife can (drive).`",
        "وإذا لم يكن في الجملة الأولى مساعد، نستخدم `do / does / did`. لا نقول `my wife likes too`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["can", "I {a:can't} drive, but my wife {a:can}.", "", 0], ["have", "I haven't finished, but Ali {a:has}.", "", 0], ["do", "I {v:like} tea, and she {a:does} too.", "لا مساعد ← does", 1], ["did", "I {v:enjoyed} it, and so {a:did} they.", "", 1]],
        groups: [{ h: "نكرر المساعد" }, { h: "do / does / did" }] },
        { t: "fix", items: [["I like coffee and my wife likes too.", "I like coffee and my wife {a:does} too.", ""]] }],
      check: { q: "\"Have you been to Egypt?\" \"No, but my wife ___.\"", o: ["has", "has been to Egypt", "did"], a: 0, why: "نكتفي بالمساعد `has`." } },

    { k: "to وحدها", h: "I'd love to · I forgot to",
      why: [
        "بعد `to` نحذف الفعل الواضح ونحتفظ بـ `to` (التفصيل في الدرس 90).",
        "لا نضع `it` بدل الفعل المحذوف: `I couldn't come it` خطأ."
      ],
      show: [{ t: "ex", items: [["I wanted to call you, but I forgot {a:to}.", ""], ["“Do you want to come?” “I'd love {a:to}.”", ""]] },
        { t: "fix", items: [["I wanted to come but I couldn't come it.", "I wanted to come but I {a:couldn't}.", ""]] }],
      check: { q: "\"Will you join us?\" \"I'd love ___.\"", o: ["(nothing)", "to", "it"], a: 1, why: "نحتفظ بـ `to` ونحذف الفعل." } },

    { k: "في المقارنة", h: "taller than I *am*",
      why: [
        "بعد `than` و`as` نكتفي بالفاعل والمساعد بدل تكرار الجملة كاملة.",
        "`She earns more than he does` أطبع من `…than he earns`."
      ],
      show: [{ t: "ex", items: [["He's taller than {s:I} {a:am}.", ""], ["She works harder than {s:I} {a:do}.", ""], ["She speaks English better than {s:I} {a:do}.", ""]] }],
      check: { q: "She earns more than he ___.", o: ["earn", "does"], a: 1, why: "نكتفي بالمساعد `does`." } }
  ],
  sum: [
    { h: "الفاعل", en: ["She opened the door and walked in."] },
    { h: "المساعد", en: ["I can't, but she {a:can}."] },
    { h: "do", en: ["I like it, and she {a:does} too."] },
    { h: "to", en: ["I'd love {a:to}."] }
  ]
};
