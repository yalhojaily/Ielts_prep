window.LESSONS = window.LESSONS || {};
window.LESSONS[83] = {
  steps: [
    { k: "what", h: "what = *الشيء الذي*",
      why: [
        "`what` في جمل الصلة تعني «الشيء الذي» أو «ما». لا يسبقها اسم لأنها تحتوي الاسم في داخلها.",
        "`What I need is a holiday.` = الشيء الذي أحتاجه عطلة. ولا نقول `the thing what`."
      ],
      show: [{ t: "compare", cols: [
        { h: "what وحدها", c: "accent", en: ["{k:What} I need is time.", "I didn't understand {k:what} he said."] },
        { h: "اسم + that", c: "subj", en: ["The thing {k:that} I need is time."] }
      ] },
        { t: "fix", items: [["The thing what I need is time.", "{k:What} I need is time.", ""]] }],
      check: { q: "___ surprised me was the price.", o: ["That", "What", "Which"], a: 1, why: "الشيء الذي ← `What`." } },

    { k: "الاختصار", h: "احذف who is: *ing* أو v3",
      why: [
        "يمكن اختصار جملة الصلة بحذف `who / which` + `be`:",
        "إذا كان الفعل مبنيًا للمعلوم يبقى بـ `ing` (`the man standing there`). إذا كان مجهولًا يبقى تصريفًا ثالثًا (`cars made in Japan`). يجعل الكتابة أقصر وأكثر احترافية."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["كاملة", "The man {x:who is} {v:standing} there is my uncle.", "", 0], ["مختصرة ing", "The man {v:standing} there is my uncle.", "حذفنا who is", 0], ["كاملة", "Cars {x:which are} {v:made} in Japan are reliable.", "", 1], ["مختصرة v3", "Cars {v:made} in Japan are reliable.", "حذفنا which are", 1]],
        groups: [{ h: "معلوم ← ing" }, { h: "مجهول ← v3" }] },
        { t: "fix", items: [["The man who standing there…", "The man {v:standing} there…", "إما who is standing أو standing"]] }],
      check: { q: "Most goods ___ online are cheaper.", o: ["selling", "sold"], a: 1, why: "البضائع تُباع (مجهول) ← `sold`." } },

    { k: "كمية + of whom", h: "all of whom · some of which",
      why: [
        "عندما تتحدث عن جزء من مجموعة ذكرتها: كمية + `of whom` (أشخاص) أو `of which` (أشياء).",
        "خطأ شائع: `both of them` بعد فاصلة، لأن هذا يصنع جملتين بلا رابط. الصحيح `both of whom`."
      ],
      show: [{ t: "ex", items: [["I have three brothers, {k:all of whom} are married.", ""], ["She wrote ten books, {k:most of which} are novels.", ""]] },
        { t: "fix", items: [["I have two sisters, both of them are teachers.", "I have two sisters, {k:both of whom} are teachers.", ""]] }],
      check: { q: "He has many friends, ___ live abroad.", o: ["some of them", "some of whom"], a: 1, why: "أشخاص + رابط ← `some of whom`." } },

    { k: "الرسمي", h: "حرف الجر *قبل* which / whom",
      why: [
        "في الكلام يبقى حرف الجر في الآخر: `the house I live in`.",
        "في الكتابة الرسمية ننقله قبل `which / whom`: `the house in which I live`. و`whom` للشخص بعد حرف الجر."
      ],
      show: [{ t: "compare", cols: [
        { h: "كلام", c: "subj", en: ["the house (which) I live {k:in}", "the man I spoke {k:to}"] },
        { h: "رسمي", c: "accent", en: ["the house {k:in which} I live", "the man {k:to whom} I spoke"] }
      ] }],
      check: { q: "Formal: \"the person ___ I sent the letter\"", o: ["to who", "to whom"], a: 1, why: "بعد حرف الجر للشخص ← `whom`." } }
  ],
  sum: [
    { h: "what", en: ["{k:What} I need is time."] },
    { h: "مختصرة", en: ["the man {v:standing} there · cars {v:made} in Japan"] },
    { h: "كمية", en: ["all {k:of whom} · most {k:of which}"] },
    { h: "رسمي", en: ["the house {k:in which} I live"] }
  ]
};
