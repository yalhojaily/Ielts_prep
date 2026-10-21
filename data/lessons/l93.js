window.LESSONS = window.LESSONS || {};
window.LESSONS[93] = {
  steps: [
    { k: "الفكرة", h: "صفة لها *درجات* · صفة *قصوى*",
      why: [
        "بعض الصفات لها درجات: يمكن أن يكون الجو حارًا قليلًا أو حارًا جدًا (`hot`). هذه **متدرجة** وتأتي مع `very`.",
        "وبعضها تعني **أقصى** درجة أصلًا: `boiling` = حار جدًا جدًا. لا معنى لـ `very boiling`، فنستخدم `absolutely`."
      ],
      show: [{ t: "map", cols: [{ h: "متدرجة ← قصوى", c: "accent", k: "v", rows: [["cold", "freezing"], ["hot", "boiling"], ["big", "huge"], ["small", "tiny"], ["tired", "exhausted"], ["good", "excellent"], ["bad", "terrible"], ["tasty", "delicious"]] }] }],
      check: { q: "\"Boiling\" means…", o: ["a little hot", "extremely hot"], a: 1, why: "`boiling` صفة قصوى = حار جدًا." } },

    { k: "very أم absolutely", h: "very + متدرجة · absolutely + *قصوى*",
      why: [
        "`very, extremely, quite, a bit` مع المتدرجة. `absolutely, totally, completely` مع القصوى.",
        "و`really` تصلح مع النوعين. لذلك `very delicious` تبدو غريبة للمتحدث الأصلي."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["very cold", "It's {k:very} {v:cold}.", "", 0], ["absolutely freezing", "It's {k:absolutely} {v:freezing}!", "", 1], ["very tired", "I'm {k:very} {v:tired}.", "", 0], ["completely exhausted", "I'm {k:completely} {v:exhausted}.", "", 1], ["really (both)", "It's {k:really} {v:hot}. / It's {k:really} {v:boiling}.", "really مع الاثنين", 2]],
        groups: [{ h: "very + متدرجة" }, { h: "absolutely + قصوى" }, { h: "really + الاثنان" }] },
        { t: "fix", items: [["The food was very delicious.", "The food was {k:absolutely} delicious.", ""], ["It's absolutely cold.", "It's {k:very} cold. / It's {k:absolutely} freezing.", ""]] }],
      check: { q: "The view was ___ amazing.", o: ["very", "absolutely"], a: 1, why: "`amazing` قصوى ← `absolutely`." } },

    { k: "quite", h: "quite بمعنيين",
      why: [
        "`quite` مع الصفة المتدرجة = **إلى حد ما**: `quite good` (جيد نوعًا ما).",
        "`quite` مع الصفة القصوى أو المطلقة = **تمامًا**: `quite right` (صحيح تمامًا)."
      ],
      show: [{ t: "compare", cols: [{ h: "+ متدرجة = إلى حد ما", c: "subj", en: ["The film was {k:quite} good."] }, { h: "+ مطلقة = تمامًا", c: "accent", en: ["You're {k:quite} right."] }] }],
      check: { q: "\"You're quite right\" means…", o: ["You're a little right.", "You're completely right."], a: 1, why: "`right` مطلقة ← `quite` = تمامًا." } }
  ],
  sum: [
    { h: "متدرجة", en: ["{k:very} cold · {k:very} tired"] },
    { h: "قصوى", en: ["{k:absolutely} freezing · exhausted"] },
    { h: "really", en: ["تصلح للاثنين"] },
    { h: "quite", en: ["quite good (نوعًا ما) · quite right (تمامًا)"] }
  ]
};
