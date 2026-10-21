window.LESSONS = window.LESSONS || {};
window.LESSONS[82] = {
  steps: [
    { k: "الفكرة", h: "معلومة *إضافية* بين فاصلتين",
      why: [
        "أحيانًا الشيء معروف تمامًا (`My father`, `Riyadh`)، ونريد فقط إضافة معلومة عنه. هذه المعلومة يمكن حذفها والجملة تبقى كاملة.",
        "لذلك نضعها **بين فاصلتين**، كأنها ملاحظة جانبية."
      ],
      show: [{ t: "big", items: ["My father{k:,} who is 70{k:,} still works every day."], cap: "احذف ما بين الفاصلتين: My father still works every day. (كاملة)" }],
      check: { q: "Choose the correct punctuation.", o: ["Riyadh which is the capital is big.", "Riyadh, which is the capital, is big."], a: 1, why: "معلومة إضافية عن مدينة معروفة ← بين فاصلتين." } },

    { k: "الفرق", h: "الفاصلة تغيّر المعنى",
      why: [
        "`My sister who lives in Jeddah` (بلا فواصل) = عندي أكثر من أخت، وأقصد التي في جدة.",
        "`My sister, who lives in Jeddah,` (بفواصل) = عندي أخت واحدة، ومعلومة إضافية أنها في جدة."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["بلا فواصل", "My sister {k:who lives in Jeddah} is a doctor.", "عندي عدة أخوات، أحدد واحدة", 0], ["بفواصل", "My sister, {k:who lives in Jeddah,} is a doctor.", "عندي أخت واحدة + معلومة إضافية", 1]],
        groups: [{ h: "محددة", sub: "تحدد أي واحد" }, { h: "غير محددة", sub: "معلومة إضافية" }] }],
      check: { q: "\"The students, who were tired, went home.\" How many students went home?", o: ["All of them", "Only the tired ones"], a: 0, why: "بفواصل ← معلومة إضافية عن كل الطلاب." } },

    { k: "لا that", h: "who / which… *لا* that",
      why: [
        "في هذا النوع **لا** نستخدم `that` أبدًا، و**لا** نحذف الضمير.",
        "الأدوات المسموحة: `who, which, whose, where, when`."
      ],
      show: [{ t: "fix", items: [["My mother, that is a nurse, works at night.", "My mother, {k:who} is a nurse, works at night.", ""], ["My car, I bought last year, is great.", "My car, {k:which} I bought last year, is great.", "لا حذف"]] }],
      check: { q: "My car, ___ is ten years old, still runs well.", o: ["that", "which"], a: 1, why: "بين فاصلتين ← لا `that`." } },

    { k: "which للجملة", h: ", which تعلّق على الحدث *كله*",
      why: [
        "`which` بعد فاصلة يمكن أن تشير إلى **الجملة السابقة كلها**، لا إلى كلمة واحدة.",
        "أداة قوية للتعليق على حدث في المقال: `The price dropped, which was good news for buyers.` ولا تستخدم `what` هنا."
      ],
      show: [{ t: "ex", items: [["He passed the exam{k:, which} surprised everyone.", ""], ["I sold my shares{k:, which} was a mistake.", ""]] },
        { t: "fix", items: [["He was late, what annoyed me.", "He was late{k:, which} annoyed me.", ""]] }],
      check: { q: "Prices rose, ___ affected many families.", o: ["what", "which", "that"], a: 1, why: "التعليق على الجملة كلها ← `, which`." } }
  ],
  sum: [
    { h: "فاصلتان", en: ["Riyadh{k:,} which is the capital{k:,} is big."] },
    { h: "الفرق", txt: "بلا فواصل = تحديد · بفواصل = معلومة إضافية" },
    { h: "لا that", en: ["who · which · whose · where"] },
    { h: "للجملة", en: ["…, {k:which} was a surprise."] }
  ]
};
