window.LESSONS = window.LESSONS || {};
window.LESSONS[66] = {
  steps: [
    { k: "الفكرة", h: "no قبل اسم · none *وحدها*",
      why: [
        "`no` تأتي **قبل اسم** وتعني «لا يوجد أي»: `There's no milk.`",
        "`none` تأتي **وحدها** بلا اسم بعدها، أو مع `of`: `None of my friends came.` كلاهما يعني صفرًا."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["no + اسم", "I have {k:no} time.", "", 0], ["no + اسم", "There's {k:no} need to hurry.", "", 0], ["none وحدها", "“How many tickets are left?” “{k:None}.”", "", 1], ["none of", "{k:None of} the students passed.", "", 1]],
        groups: [{ h: "no + اسم" }, { h: "none / none of" }] },
        { t: "fix", items: [["None students came.", "{k:No} students came. / {k:None of} the students came.", ""], ["No of my friends came.", "{k:None of} my friends came.", ""]] }],
      check: { q: "___ of my friends came to the party.", o: ["No", "None"], a: 1, why: "مع `of` ← `None`." } },

    { k: "لا نفي مزدوج", h: "no *أو* not any، لا الاثنين",
      why: [
        "`no` منفية بنفسها، فلا نضيف `not` معها. في العربية نقول «ليس عندي لا وقت ولا…»، لكن في الإنجليزية نفي واحد يكفي.",
        "`I have no money` = `I don't have any money`. لكن `I don't have no money` خطأ في الإنجليزية الرسمية."
      ],
      show: [{ t: "compare", cols: [
        { h: "no + فعل مثبت", c: "verb", en: ["I {v:have} {k:no} money."] },
        { h: "not + any", c: "subj", en: ["I {a:don't} have {k:any} money."] }
      ] },
        { t: "fix", items: [["I don't have no time.", "I have {k:no} time. / I don't have {k:any} time.", ""]] }],
      check: { q: "There ___ milk in the fridge.", o: ["isn't no", "is no", "no is"], a: 1, why: "`no` تكفي للنفي ← `is no`." } },

    { k: "كلمات منفية", h: "nobody · nothing · nowhere + فعل *مثبت*",
      why: [
        "`nobody / no one / nothing / nowhere` كلمات منفية مثل `no`، فيأتي الفعل معها **مثبتًا**.",
        "`Nobody didn't call` خطأ: النفي ظهر مرتين."
      ],
      show: [{ t: "ex", items: [["{k:Nobody} {v:called}.", ""], ["There's {k:nothing} to eat.", ""], ["I have {k:nowhere} to go.", ""]] },
        { t: "fix", items: [["Nobody didn't call.", "{k:Nobody} {v:called}.", ""]] }],
      check: { q: "Nothing ___ yesterday.", o: ["didn't happen", "happened"], a: 1, why: "`Nothing` منفية ← فعل مثبت." } }
  ],
  sum: [
    { h: "no", en: ["I have {k:no} time."] },
    { h: "none", en: ["“None.” · {k:None of} the students…"] },
    { h: "نفي واحد", en: ["no = not any"] },
    { h: "nobody", en: ["{k:Nobody} called. (لا didn't)"] }
  ]
};
