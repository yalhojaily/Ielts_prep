window.LESSONS = window.LESSONS || {};
window.LESSONS[59] = {
  steps: [
    { k: "الاقتراح", h: "هيا بنا: خمس طرق للاقتراح",
      why: [
        "للاقتراح على مجموعة أنت منها، لديك عدة صيغ. لاحظ ما يأتي بعد كل واحدة، فهنا تقع الأخطاء:",
        "بعد `How about / What about` يأتي `ing` أو اسم، لا فعل أصلي."
      ],
      show: [{ t: "build", lab: "اختر الصيغة",
        opts: [["Let's", "{a:Let's} {v:eat} out tonight.", "+ فعل أصلي", 0], ["Why don't we", "{q:Why don't we} {v:eat} out tonight?", "+ فعل أصلي", 0], ["Shall we", "{a:Shall} we {v:eat} out tonight?", "+ فعل أصلي", 0], ["We could", "We {a:could} {v:eat} out tonight.", "+ فعل أصلي (اقتراح ألطف)", 0],
               ["How about", "{q:How about} {v:eating} out tonight?", "+ ing", 1], ["What about", "{q:What about} pizza?", "+ اسم", 1]],
        groups: [{ h: "+ فعل أصلي" }, { h: "+ ing / اسم" }] }],
      check: { q: "How about ___ to the park?", o: ["go", "going", "to go"], a: 1, why: "`How about` + ing." } },

    { k: "النصيحة", h: "should · ought to · If I were you",
      why: [
        "`should` و`ought to` بنفس المعنى: هذا رأيي أنه الأفضل لك. وبعدهما فعل أصلي (`ought` تأخذ `to` فقط).",
        "`If I were you, I'd…` = لو كنت مكانك. نصيحة ودية، مفيدة جدًا في المحادثة."
      ],
      show: [{ t: "ex", items: [["You {a:should} {v:get} more sleep.", ""], ["You {a:ought to} {v:diversify} your investments.", ""], ["{k:If I were you}, I{a:'d} {v:accept} the offer.", ""]] },
        { t: "fix", items: [["You should to study more.", "You {a:should} {v:study} more.", ""]] }],
      check: { q: "You ___ see a doctor about that cough.", o: ["should", "should to", "ought"], a: 0, why: "`should` + فعل أصلي (و`ought` تحتاج `to`)." } },

    { k: "had better", h: "had better = افعل *وإلا*…",
      why: [
        "`had better` أقوى نصيحة: فيها تحذير بأن عدم الفعل سيسبب مشكلة.",
        "رغم وجود `had` فهي للحاضر والمستقبل، وبعدها فعل أصلي **بلا to**. نفيها `had better not`."
      ],
      show: [{ t: "compare", cols: [
        { h: "should: نصيحة", c: "subj", en: ["You {a:should} leave early."], ar: "رأيي أنه أفضل" },
        { h: "had better: تحذير", c: "neg", en: ["You{a:'d better} {v:leave} now or you'll miss the flight."], ar: "وإلا ستحدث مشكلة" }
      ] },
        { t: "fix", items: [["You had better to see a doctor.", "You{a:'d better} {v:see} a doctor.", ""]] }],
      check: { q: "You'd better ___ late again!", o: ["not be", "don't be", "not to be"], a: 0, why: "نفي `had better` ← `had better not` + فعل." } },

    { k: "should أم must", h: "رأي أم إلزام؟",
      why: [
        "`should` = نصيحة، رأيي، لك أن تختار.",
        "`must` = إلزام قوي، قانون أو ضرورة لا خيار فيها. و`suggest` لا تأخذ شخصًا + to (الدرس 45)."
      ],
      show: [{ t: "compare", cols: [{ h: "should", c: "subj", en: ["You {a:should} {v:try} it."] }, { h: "must", c: "accent", en: ["You {a:must} {v:stop} at a red light."] }] },
        { t: "fix", items: [["I suggest you to rest.", "I suggest (that) you {v:rest}. / I suggest {v:resting}.", ""]] }],
      check: { q: "Drivers ___ stop at a red light.", o: ["should", "must"], a: 1, why: "قانون لا خيار فيه ← `must`." } }
  ],
  sum: [
    { h: "اقتراح", en: ["Let's go · Why don't we go? · How about {v:going}?"] },
    { h: "نصيحة", en: ["You {a:should} / {a:ought to} rest."] },
    { h: "تحذير", en: ["You{a:'d better} hurry."] },
    { h: "ودّية", en: ["If I were you, I'd…"] }
  ]
};
