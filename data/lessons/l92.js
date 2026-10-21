window.LESSONS = window.LESSONS || {};
window.LESSONS[92] = {
  steps: [
    { k: "المكان", h: "الصفة *قبل* الاسم",
      why: [
        "في العربية الصفة بعد الموصوف: «بيت كبير». في الإنجليزية **العكس**: الصفة قبل الاسم: `a big house`.",
        "أو بعد فعل ربط (`be, look, seem`): `The house is big.`"
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["قبل الاسم", "a {k:big} {v:house}", "", 0], ["قبل الاسم", "a {k:beautiful} {v:city}", "", 0], ["بعد be", "The city {a:is} {k:beautiful}.", "", 1], ["بعد look", "She {a:looks} {k:tired}.", "", 1]],
        groups: [{ h: "صفة + اسم" }, { h: "فعل ربط + صفة" }] },
        { t: "fix", items: [["a house big", "a {k:big} house", ""]] }],
      check: { q: "We stayed in a ___.", o: ["hotel small", "small hotel"], a: 1, why: "الصفة قبل الاسم." } },

    { k: "لا تتغير", h: "الصفة *لا* تُجمع ولا تؤنث",
      why: [
        "في العربية الصفة تتبع الموصوف: «رجال طوال»، «امرأة طويلة». في الإنجليزية الصفة **ثابتة** لا تتغير أبدًا.",
        "`tall` مع رجل، ومع رجال، ومع امرأة. لا `talls` ولا `kinds people`."
      ],
      show: [{ t: "ex", items: [["a {k:tall} man · two {k:tall} men · a {k:tall} woman", "tall لا تتغير"]] },
        { t: "fix", items: [["They are kinds people.", "They are {k:kind} people.", ""]] }],
      check: { q: "They are very ___ students.", o: ["goods", "good"], a: 1, why: "الصفة لا تُجمع." } },

    { k: "الترتيب", h: "صفات متعددة: الرأي *أولًا*",
      why: [
        "عند اجتماع أكثر من صفة لها ترتيب ثابت يشعر به المتحدث الأصلي: الرأي ثم الحجم ثم العمر ثم الشكل ثم اللون ثم الأصل ثم المادة.",
        "القاعدة السهلة: **الرأي** (رأيك الشخصي) أولًا، و**الحقائق** (اللون، المادة) قرب الاسم. في الواقع تكفي صفتان أو ثلاث."
      ],
      show: [{ t: "chain", items: [{ h: "رأي", en: "beautiful" }, { h: "حجم", en: "big" }, { h: "عمر", en: "old" }, { h: "لون", en: "red" }, { h: "أصل", en: "Turkish" }, { h: "مادة", en: "silk" }] },
        { t: "big", items: ["a {k:beautiful} {k:big} {k:old} {k:red} {k:Turkish} {k:silk} {v:carpet}"] },
        { t: "fix", items: [["a wooden old table", "an {k:old} {k:wooden} table", "العمر قبل المادة"]] }],
      check: { q: "She bought a ___ bag.", o: ["leather black beautiful", "beautiful black leather"], a: 1, why: "رأي ← لون ← مادة." } },

    { k: "بعد الفعل فقط", h: "afraid · asleep · alone: *بعد* الفعل",
      why: [
        "بعض الصفات (أغلبها تبدأ بـ a) لا تأتي قبل الاسم أبدًا، بل بعد الفعل فقط: `afraid, alone, asleep, awake, alive`.",
        "قبل الاسم نستخدم بديلًا: `a sleeping baby`، `a frightened child`."
      ],
      show: [{ t: "compare", cols: [{ h: "بعد الفعل ✓", c: "verb", en: ["The baby is {k:asleep}.", "The child is {k:afraid}."] }, { h: "قبل الاسم: بديل", c: "subj", en: ["a {k:sleeping} baby", "a {k:frightened} child"] }] }],
      check: { q: "Don't wake the ___ baby.", o: ["asleep", "sleeping"], a: 1, why: "قبل الاسم ← `sleeping` (لا asleep)." } }
  ],
  sum: [
    { h: "المكان", en: ["a {k:big} house · The house is {k:big}."] },
    { h: "ثابتة", en: ["{k:kind} people (لا kinds)"] },
    { h: "الترتيب", en: ["رأي · حجم · عمر · لون · أصل · مادة"] },
    { h: "بعد الفعل", en: ["afraid · asleep · alone"] }
  ]
};
