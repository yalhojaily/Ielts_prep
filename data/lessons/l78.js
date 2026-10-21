window.LESSONS = window.LESSONS || {};
window.LESSONS[78] = {
  steps: [
    { k: "الفكرة", h: "الفاعل والمفعول *شخص واحد*",
      why: [
        "إذا فعل الشخص الفعل بنفسه على نفسه (جرح نفسه)، نستخدم ضميرًا ينتهي بـ `self` (مفرد) أو `selves` (جمع).",
        "`He hurt him` تعني أنه جرح شخصًا آخر! `He hurt himself` = جرح نفسه."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} cut {o:myself}.", "", 0], ["She", "{s:She} cut {o:herself}.", "", 0], ["He", "{s:He} cut {o:himself}.", "", 0], ["We", "{s:We} cut {o:ourselves}.", "", 1], ["They", "{s:They} cut {o:themselves}.", "", 1]],
        groups: [{ h: "مفرد: -self", sub: "myself, yourself, himself, herself, itself" }, { h: "جمع: -selves", sub: "ourselves, yourselves, themselves" }] },
        { t: "fix", items: [["They blamed theirselves.", "They blamed {o:themselves}.", ""]] }],
      check: { q: "He hurt ___ while playing football.", o: ["him", "himself"], a: 1, why: "جرح نفسه ← `himself`." } },

    { k: "التوكيد و by", h: "بنفسي · وحدي",
      why: [
        "للتوكيد: `I did it myself` = فعلته **بنفسي** (بلا مساعدة). و`The manager himself called` = المدير نفسه.",
        "و`by myself` = **وحدي**: `He lives by himself`."
      ],
      show: [{ t: "ex", items: [["I taught {o:myself} to code.", "تعلمت بنفسي"], ["The manager {o:himself} called me.", "المدير نفسه"], ["He lives {k:by} {o:himself}.", "وحده"], ["The door closes {k:by} {o:itself}.", ""]] }],
      check: { q: "\"She travelled by herself\" means she travelled…", o: ["with friends", "alone"], a: 1, why: "`by herself` = وحدها." } },

    { k: "each other", h: "themselves ≠ each other",
      why: [
        "`themselves` = كل واحد على نفسه. `each other` = كل واحد على **الآخر** (بعضهم بعضًا).",
        "`They looked at themselves` = في المرآة. `They looked at each other` = نظر كل منهما للآخر."
      ],
      show: [{ t: "compare", cols: [
        { h: "themselves", c: "subj", en: ["They looked at {o:themselves}."], ar: "كل واحد نظر لنفسه" },
        { h: "each other", c: "accent", en: ["They looked at {o:each other}."], ar: "نظر كل منهما للآخر" }
      ] }],
      check: { q: "My brother and I talk to ___ every day.", o: ["ourselves", "each other"], a: 1, why: "كل واحد يكلم الآخر ← `each other`." } },

    { k: "بلا self", h: "relax · feel · concentrate *بلا* self",
      why: [
        "بعض الأفعال انعكاسية في العربية («استرخيت»، «تركيز نفسي») لكنها في الإنجليزية **بلا** ضمير انعكاسي.",
        "وعبارات شائعة مهذبة: `Help yourself` (تفضل خذ)، `Make yourself at home` (البيت بيتك)."
      ],
      show: [{ t: "fix", items: [["I relaxed myself on the beach.", "I relaxed on the beach.", ""], ["I feel myself tired.", "I feel tired.", ""]] },
        { t: "ex", items: [["Please {k:help yourself} to some food.", "تفضل"], ["{k:Make yourself at home}.", "البيت بيتك"]] }],
      check: { q: "I can't ___ with this noise.", o: ["concentrate myself", "concentrate"], a: 1, why: "`concentrate` بلا ضمير انعكاسي." } }
  ],
  sum: [
    { h: "الفاعل = المفعول", en: ["He hurt {o:himself}."] },
    { h: "بنفسي / وحدي", en: ["I did it {o:myself}. · {k:by} {o:myself}"] },
    { h: "بعضهم بعضًا", en: ["They love {o:each other}."] },
    { h: "بلا self", en: ["relax · feel · concentrate"] }
  ]
};
