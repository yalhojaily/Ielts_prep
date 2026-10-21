window.LESSONS = window.LESSONS || {};
window.LESSONS[71] = {
  steps: [
    { k: "الفكرة", h: "الفعل يتبع الفاعل *الحقيقي*",
      why: [
        "الفعل يطابق الفاعل في الإفراد والجمع. المشكلة أن كلمات أخرى قد تأتي بين الفاعل والفعل فتخدعك.",
        "في `The price of the cars is high` الكلمة القريبة من الفعل `cars` (جمع)، لكن الفاعل الحقيقي `price` (مفرد). احذف ما بين الفاعل والفعل لتراه."
      ],
      show: [{ t: "big", items: ["{s:The price} {x:of the cars} {v:is} high.", "{s:The list} {x:of names} {v:is} on the wall."], cap: "الرمادي ليس الفاعل. الفعل يطابق الأزرق." }],
      check: { q: "The quality of the products ___ improved.", o: ["have", "has"], a: 1, why: "الفاعل الحقيقي `quality` مفرد ← `has`." } },

    { k: "number of", h: "the number of ≠ a number of",
      why: [
        "`the number of` = **العدد** نفسه (رقم واحد) ← فعل مفرد.",
        "`a number of` = **عدد من** (= كثير من) ← فعل جمع. مهم جدًا في Writing Task 1."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["the number of", "{s:The number of} tourists {v:is} increasing.", "العدد (رقم واحد) ← مفرد", 0], ["a number of", "{s:A number of} people {v:have} complained.", "كثير من ← جمع", 1]],
        groups: [{ h: "مفرد" }, { h: "جمع" }] }],
      check: { q: "The number of cars ___ doubled.", o: ["have", "has"], a: 1, why: "`The number` = العدد ← مفرد." } },

    { k: "مفرد دائمًا", h: "everyone · one of · ing",
      why: [
        "`everyone, somebody, nothing, each` مفردة دائمًا، رغم أن المعنى قد يبدو جمعًا.",
        "`one of` + جمع: الفاعل هو `one` ← مفرد. والنشاط بصيغة `ing` فاعلًا ← مفرد."
      ],
      show: [{ t: "ex", items: [["{s:Everyone} {v:wants} to be happy.", ""], ["{s:One of} my brothers {v:lives} in Dubai.", "الفاعل one"], ["{s:Learning languages} {v:is} fun.", "النشاط مفرد"]] },
        { t: "fix", items: [["One of my brothers live in Dubai.", "{s:One of} my brothers {v:lives}…", ""], ["Everybody know him.", "{s:Everybody} {v:knows} him.", ""]] }],
      check: { q: "One of the problems ___ cost.", o: ["are", "is"], a: 1, why: "الفاعل `One` ← مفرد." } },

    { k: "There", h: "There is / are + الفاعل *بعدها*",
      why: [
        "في `There is / There are` الفاعل الحقيقي يأتي **بعد** الفعل، فانظر إليه قبل أن تختار.",
        "مفرد أو غير معدود ← `There is`. جمع ← `There are`."
      ],
      show: [{ t: "compare", cols: [{ h: "مفرد", c: "subj", en: ["There {v:is} {s:a book}.", "There {v:is} {s:some water}."] }, { h: "جمع", c: "accent", en: ["There {v:are} {s:two books}.", "There {v:are} {s:many problems}."] }] }],
      check: { q: "There ___ many problems with this plan.", o: ["is", "are"], a: 1, why: "`many problems` جمع ← `are`." } },

    { k: "النسب", h: "50% of… يتبع ما بعد of",
      why: [
        "في النسب والكسور، الفعل يطابق الاسم **بعد** `of`: غير معدود ← مفرد، جمع ← جمع.",
        "والمبالغ والمسافات والمدد تعامل كمفرد (مبلغ واحد): `Ten kilometres is too far.`"
      ],
      show: [{ t: "ex", items: [["50% of {s:the money} {v:is} gone.", "money مفرد"], ["50% of {s:the students} {v:are} women.", "students جمع"], ["Ten kilometres {v:is} too far.", "مسافة = مفرد"]] }],
      check: { q: "Two thirds of the students ___ female.", o: ["is", "are"], a: 1, why: "الفعل يطابق `students` (جمع)." } }
  ],
  sum: [
    { h: "الفاعل الحقيقي", en: ["{s:The price} of the cars {v:is}…"] },
    { h: "number", en: ["the number of… is · a number of… are"] },
    { h: "مفرد", en: ["everyone · one of · ing"] },
    { h: "There", en: ["There {v:is} a… · There {v:are} two…"] }
  ]
};
