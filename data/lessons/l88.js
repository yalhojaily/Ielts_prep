window.LESSONS = window.LESSONS || {};
window.LESSONS[88] = {
  steps: [
    { k: "الفكرة", h: "كلمة منفية في الأول ← ترتيب *سؤال*",
      why: [
        "في الأسلوب الرسمي، إذا بدأت الجملة بكلمة منفية أو مقيّدة (`Never, Rarely, Not only, Hardly`) يُقلب الترتيب كأنه سؤال: المساعد قبل الفاعل.",
        "الهدف: قوة وتأكيد. `Never have I seen…` أقوى بكثير من `I have never seen…`."
      ],
      show: [{ t: "trans", items: [{ from: "{s:I} {a:have} never {v:seen} such a view.", to: "{k:Never} {a:have} {s:I} {v:seen} such a view.", chg: ["Never في الأول", "have قبل I"] }] },
        { t: "fix", items: [["Never I have seen this.", "{k:Never} {a:have} {s:I} {v:seen} this.", ""]] }],
      check: { q: "Never ___ such a beautiful place.", o: ["I have seen", "have I seen"], a: 1, why: "بعد `Never` في الأول ← المساعد قبل الفاعل." } },

    { k: "بلا مساعد", h: "لا مساعد؟ أضف do / does / did",
      why: ["كما في الأسئلة: إذا لم يكن في الجملة مساعد، نضيف `do / does / did` ويعود الفعل إلى أصله."],
      show: [{ t: "build", lab: "اختر",
        opts: [["Rarely", "{k:Rarely} {a:do} {s:we} {v:eat} out.", "= We rarely eat out.", 0], ["Seldom", "{k:Seldom} {a:does} {s:he} {v:make} mistakes.", "= He seldom makes mistakes.", 0], ["Only then", "{k:Only then} {a:did} {s:I} {v:understand}.", "= Only then I understood.", 0], ["Little", "{k:Little} {a:did} {s:I} {v:know}…", "= لم أكن أعلم أبدًا", 0]],
        groups: [{ h: "كلمة مقيّدة + do/does/did + فاعل + فعل" }] },
        { t: "fix", items: [["Rarely we go out.", "{k:Rarely} {a:do} {s:we} {v:go} out.", ""]] }],
      check: { q: "Rarely ___ late for work.", o: ["he is", "is he"], a: 1, why: "بعد `Rarely` ← قلب: `is he`." } },

    { k: "Not only", h: "Not only … but also",
      why: [
        "أشهر تركيب للقلب في المقالات. القلب في الجزء الأول فقط (بعد `Not only`)، والجزء الثاني بترتيب عادي مع `but … also`.",
        "جملة واحدة منه في المقال تكفي لتظهر تنوعك."
      ],
      show: [{ t: "big", items: ["{k:Not only} {a:does} {s:pollution} {v:harm} health, {k:but} it {k:also} damages the economy."], cap: "الجزء الأول مقلوب · الثاني عادي" },
        { t: "fix", items: [["Not only he is rich, but also famous.", "{k:Not only} {a:is} {s:he} rich, but he is {k:also} famous.", ""]] }],
      check: { q: "Not only ___ cheap, but it is also fast.", o: ["it is", "is it"], a: 1, why: "بعد `Not only` ← قلب: `is it`." } },

    { k: "Hardly / Had I", h: "Hardly had I… · Had I known…",
      why: [
        "`Hardly had I arrived when…` = ما كدت أصل حتى… (حدثان متتاليان بسرعة).",
        "والشرط الرسمي بلا if: `Had I known` = `If I had known`."
      ],
      show: [{ t: "ex", items: [["{k:Hardly} {a:had} {s:I} {v:arrived} when it started to rain.", "ما كدت أصل حتى…"], ["{a:Had} {s:I} {v:known}, I would have come.", "= If I had known"]] }],
      check: { q: "___ I known, I would have helped.", o: ["If", "Had", "Both are correct"], a: 2, why: "`If I had known` و`Had I known` صحيحتان (الثانية أرسم)." } }
  ],
  sum: [
    { h: "القاعدة", en: ["{k:Never} {a:have} {s:I} seen…"] },
    { h: "بلا مساعد", en: ["{k:Rarely} {a:do} {s:we} eat out."] },
    { h: "Not only", en: ["Not only {a:is} it…, but it is also…"] },
    { h: "متى؟", txt: "الكتابة الرسمية · جملة واحدة تكفي" }
  ]
};
