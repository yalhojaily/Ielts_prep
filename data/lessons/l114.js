window.LESSONS = window.LESSONS || {};
window.LESSONS[114] = {
  steps: [
    { k: "الفكرة", h: "جزء في *أول* الكلمة يغيّر معناها",
      why: [
        "البادئة تُضاف إلى أول الكلمة فتغيّر **معناها** لكن لا تغيّر **نوعها**: `happy` (صفة) ← `unhappy` (صفة أيضًا).",
        "معرفة البادئات تجعلك تفهم كلمات جديدة كثيرة دون قاموس."
      ],
      show: [{ t: "build", lab: "اختر البادئة",
        opts: [["re-", "{k:re}write · {k:re}build · {k:re}use", "من جديد", 0], ["mis-", "{k:mis}understand · {k:mis}take", "بشكل خاطئ", 0], ["pre-", "{k:pre}view · {k:pre}pay", "قبل", 0], ["over-", "{k:over}crowded · {k:over}work", "أكثر من اللازم", 0], ["under-", "{k:under}paid · {k:under}estimate", "أقل من اللازم", 0], ["inter-", "{k:inter}national", "بين", 0]],
        groups: [{ h: "بادئة + كلمة = معنى جديد" }] }],
      check: { q: "\"Overcrowded\" means…", o: ["not crowded", "too crowded"], a: 1, why: "`over-` = أكثر من اللازم." } },

    { k: "بادئات النفي", h: "un · in · dis = *العكس*",
      why: [
        "أهم البادئات تعطي **العكس**: `un-` و`in-` و`dis-`.",
        "و`in-` تتغير حسب الحرف التالي لتسهيل النطق: `im-` قبل p/m/b، و`il-` قبل l، و`ir-` قبل r."
      ],
      show: [{ t: "rules", tryLab: "اضغط على كلمة ↑",
        items: [
          { cond: "الأكثر شيوعًا", sym: "un-", pairs: [["happy", "un", "happy"], ["fair", "un", "fair"]] },
          { cond: "عام", sym: "in-", pairs: [["correct", "in", "correct"], ["visible", "in", "visible"]] },
          { cond: "قبل p · m · b", sym: "im-", pairs: [["possible", "im", "possible"], ["mature", "im", "mature"]] },
          { cond: "قبل l / r", sym: "il- / ir-", pairs: [["legal", "il", "legal"], ["regular", "ir", "regular"]] }
        ],
        try: [["employed", "un", "employed", 0], ["patient", "im", "patient", 2], ["logical", "il", "logical", 3], ["relevant", "ir", "relevant", 3], ["convenient", "in", "convenient", 1]] }],
      check: { q: "It's ___ to park here.", o: ["inlegal", "unlegal", "illegal"], a: 2, why: "قبل l ← `il-`: `illegal`." } },

    { k: "dis-", h: "dis- مع الأفعال غالبًا",
      why: [
        "`dis-` تأتي كثيرًا مع الأفعال وبعض الصفات: `disagree, dislike, disappear, dishonest`.",
        "البادئة الصحيحة تُحفظ مع كل كلمة: `unpossible` و`unagree` خطأ."
      ],
      show: [{ t: "ex", items: [["I {k:dis}agree with you.", ""], ["The keys {k:dis}appeared!", ""], ["He was {k:dis}honest.", ""]] },
        { t: "fix", items: [["unpossible", "{k:im}possible", ""], ["unagree", "{k:dis}agree", ""], ["inhonest", "{k:dis}honest", ""]] }],
      check: { q: "I ___ with this opinion.", o: ["unagree", "disagree", "inagree"], a: 1, why: "`disagree`." } }
  ],
  sum: [
    { h: "معنى", en: ["re- (من جديد) · mis- (خطأ) · over- (زيادة)"] },
    { h: "نفي", en: ["unhappy · incorrect · dislike"] },
    { h: "im / il / ir", en: ["impossible · illegal · irregular"] },
    { h: "احفظ", en: ["impossible (لا unpossible)"] }
  ]
};
