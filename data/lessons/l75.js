window.LESSONS = window.LESSONS || {};
window.LESSONS[75] = {
  steps: [
    { k: "الفكرة", h: "كلمة الكمية تتبع نوع الاسم",
      why: [
        "قبل أن تختار كلمة الكمية، اسأل: هل الاسم **معدود** (books) أم **غير معدود** (water)؟",
        "بعض الكلمات للمعدود فقط، وبعضها لغير المعدود فقط، وبعضها يصلح للاثنين."
      ],
      show: [{ t: "build", lab: "اختر الاسم",
        opts: [["friends", "{k:many} friends · {k:a few} friends", "معدود", 0], ["time", "{k:much} time · {k:a little} time", "غير معدود", 1], ["books / water", "{k:a lot of} books · {k:a lot of} water", "يصلح للاثنين", 2]],
        groups: [{ h: "معدود", sub: "many, a few, few, several" }, { h: "غير معدود", sub: "much, a little, little" }, { h: "الاثنان", sub: "some, any, a lot of, plenty of, enough" }] },
        { t: "fix", items: [["How many money?", "{k:How much} money?", ""]] }],
      check: { q: "There aren't ___ jobs in this area.", o: ["much", "many"], a: 1, why: "`jobs` معدود ← `many`." } },

    { k: "a few أم few", h: "a few = إيجابي · few = *سلبي*",
      why: [
        "الفرق في `a` الصغيرة يغيّر الإحساس كله:",
        "`a few / a little` = بعض، قليل لكنه كافٍ (إيجابي). `few / little` = تقريبًا لا شيء (سلبي، مشكلة)."
      ],
      show: [{ t: "compare", cols: [
        { h: "a few / a little: يكفي ☺", c: "verb", en: ["I have {k:a few} friends here.", "We have {k:a little} time. Let's have coffee."] },
        { h: "few / little: مشكلة ☹", c: "neg", en: ["He has {k:few} friends. He's lonely.", "There's {k:little} hope."] }
      ] }],
      check: { q: "Hurry! We have ___ time left.", o: ["a little", "little"], a: 1, why: "المعنى سلبي (مشكلة) ← `little`." } },

    { k: "much في الإثبات", h: "a lot of أطبع في الإثبات",
      why: [
        "`much` و`many` طبيعيتان في **النفي والسؤال**. في الجملة المثبتة `I have much time` تبدو رسمية جدًا أو غريبة.",
        "في الإثبات استخدم `a lot of / lots of / plenty of`."
      ],
      show: [{ t: "compare", cols: [{ h: "نفي وسؤال", c: "subj", en: ["I don't have {k:much} time.", "Do you have {k:many} friends?"] }, { h: "إثبات", c: "accent", en: ["I have {k:a lot of} time.", "We have {k:plenty of} time."] }] },
        { t: "fix", items: [["I have much friends.", "I have {k:a lot of} friends.", ""]] }],
      check: { q: "She has ___ experience in marketing.", o: ["much", "a lot of"], a: 1, why: "جملة مثبتة ← `a lot of` أطبع." } },

    { k: "some و any", h: "some للإثبات · any للنفي والسؤال",
      why: [
        "`some` في الإثبات، و`any` في النفي والسؤال.",
        "لكن في السؤال الذي فيه **عرض أو طلب** نستخدم `some`، لأننا نتوقع «نعم»: `Would you like some tea?`"
      ],
      show: [{ t: "ex", items: [["I have {k:some} money.", "إثبات"], ["I don't have {k:any} money.", "نفي"], ["Do you have {k:any} questions?", "سؤال"], ["Would you like {k:some} tea?", "عرض ← some"]] }],
      check: { q: "Can I have ___ water, please?", o: ["some", "any"], a: 0, why: "طلب ← `some`." } }
  ],
  sum: [
    { h: "معدود", en: ["many · a few · few · several"] },
    { h: "غير معدود", en: ["much · a little · little"] },
    { h: "الاثنان", en: ["some · any · a lot of · enough"] },
    { h: "الإحساس", en: ["a few ☺ · few ☹"] }
  ]
};
