window.LESSONS = window.LESSONS || {};
window.LESSONS[112] = {
  steps: [
    { k: "الفكرة", h: "أداة في *أول* الجملة الثانية + فاصلة",
      why: [
        "هذه الأدوات تربط جملة كاملة بالجملة **السابقة** كلها. تأتي في أول الجملة الثانية (بعد نقطة) ثم فاصلة.",
        "هي أساس التماسك (Coherence and Cohesion) في IELTS Writing، وهو ربع الدرجة."
      ],
      show: [{ t: "build", lab: "اختر نوع الربط",
        opts: [["إضافة", "Public transport is cheap. {k:In addition,} it reduces pollution.", "In addition · Furthermore · Moreover", 0], ["تناقض", "The plan was good. {k:However,} it was too expensive.", "However · Nevertheless · On the other hand", 1],
               ["نتيجة", "He didn't study. {k:As a result,} he failed.", "Therefore · As a result · Consequently", 2], ["مثال", "Some cities have fast trains. {k:For example,} Tokyo has the Shinkansen.", "For example · For instance", 3]],
        groups: [{ h: "إضافة" }, { h: "تناقض" }, { h: "نتيجة" }, { h: "مثال" }] }],
      check: { q: "He saved for years. ___, he bought a house.", o: ["However", "As a result", "For example"], a: 1, why: "الشراء نتيجة الادخار ← `As a result`." } },

    { k: "however ≠ but", h: "but داخل الجملة · However *جملة جديدة*",
      why: [
        "`but` تربط جزأين داخل الجملة نفسها. `However` تبدأ جملة جديدة بعد نقطة، ثم فاصلة.",
        "و`However` في الأول لا تعني «رغم أن»: لا نقول `However it is cheap, it is slow`."
      ],
      show: [{ t: "compare", cols: [{ h: "but: جملة واحدة", c: "subj", en: ["It's cheap{k:, but} it's slow."] }, { h: "However: جملتان", c: "accent", en: ["It's cheap{k:. However,} it's slow."] }] },
        { t: "fix", items: [["However it is cheap, it is slow.", "{k:Although} it is cheap, it is slow. / It is cheap. {k:However,} it is slow.", ""]] }],
      check: { q: "The hotel was nice. ___, it was too far from the city.", o: ["But", "However"], a: 1, why: "بداية جملة جديدة في المقال ← `However,`." } },

    { k: "for example / such as", h: "For example + *جملة* · such as + *أسماء*",
      why: [
        "`For example,` تبدأ جملة كاملة فيها فعل.",
        "`such as` تأتي داخل الجملة وبعدها أسماء فقط، بلا فاصلة بعدها."
      ],
      show: [{ t: "compare", cols: [{ h: "For example, + جملة", c: "subj", en: ["{k:For example,} Japan has fast trains."] }, { h: "such as + أسماء", c: "accent", en: ["countries {k:such as} Japan and Korea"] }] },
        { t: "fix", items: [["For example football and tennis.", "Sports {k:such as} football and tennis are popular.", ""]] }],
      check: { q: "Many sports, ___ football and basketball, are popular.", o: ["for example", "such as"], a: 1, why: "بعدها أسماء داخل الجملة ← `such as`." } },

    { k: "الاعتدال", h: "لا تبدأ *كل* جملة بأداة",
      why: [
        "الإفراط في أدوات الربط يجعل الكتابة آلية، ويخفض الدرجة. اثنتان أو ثلاث في الفقرة كافية.",
        "ونوّع بينها، ولا تخترع: `Lastly of all` خطأ، والصحيح `Finally`."
      ],
      show: [{ t: "chain", items: [{ h: "البداية", en: "Firstly," }, { h: "الثاني", en: "Secondly," }, { h: "الأخير", en: "Finally," }, { h: "الخاتمة", en: "In conclusion," }] }],
      check: { q: "Correct sequence word for the last point:", o: ["Lastly of all,", "Finally,"], a: 1, why: "`Finally,` هي الصحيحة." } }
  ],
  sum: [
    { h: "إضافة", en: ["In addition, · Furthermore, · Moreover,"] },
    { h: "تناقض", en: ["However, · Nevertheless, · On the other hand,"] },
    { h: "نتيجة", en: ["Therefore, · As a result, · Consequently,"] },
    { h: "مثال", en: ["For example, + جملة · such as + أسماء"] }
  ]
};
