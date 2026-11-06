window.LESSONS = window.LESSONS || {};
window.LESSONS[91] = {
  steps: [
    { k: "one / ones", h: "the blue *one* بدل تكرار الاسم",
      why: [
        "بدل تكرار اسم معدود ذكرته للتو، استخدم `one` (مفرد) أو `ones` (جمع).",
        "لا يصلح مع غير المعدود: لا نقول `brown one` عن الأرز، بل نحذف الاسم أو نكرره."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["مفرد", "I don't like the red car. I prefer the blue {k:one}.", "", 0], ["جمع", "I like the red shoes, not the blue {k:ones}.", "", 0], ["مع a", "This phone is old. I need a new {k:one}.", "", 0], ["غير معدود", "I prefer white rice to brown.", "لا one مع غير المعدود", 1]],
        groups: [{ h: "معدود ← one / ones" }, { h: "غير معدود ← بلا one" }] }],
      check: { q: "These shoes are too small. I need bigger ___.", o: ["one", "ones"], a: 1, why: "جمع ← `ones`." } },

    { k: "so / not", h: "I think *so* · I hope *not*",
      why: [
        "بعد `think, hope, expect, suppose, be afraid` نستبدل الجملة كلها بـ `so` (إثبات) أو `not` (نفي).",
        "لا نقول `I think it` ولا `I hope no`. ومع `think` النفي الأطبع `I don't think so`."
      ],
      show: [{ t: "map", cols: [
        { h: "إثبات ← so", c: "verb", k: "o", rows: [["Will it rain?", "I think so."], ["Is the shop open?", "I hope so."], ["Is there a problem?", "I'm afraid so."]] },
        { h: "نفي ← not / don't…so", c: "neg", k: "o", rows: [["Will we be late?", "I hope not."], ["Is it expensive?", "I don't think so."], ["Can you come?", "I'm afraid not."]] }
      ] },
        { t: "fix", items: [["I think it.", "I think {k:so}.", ""], ["I hope no.", "I hope {k:not}.", ""]] }],
      check: { q: "\"Is he coming?\" \"I'm afraid ___.\" (he isn't)", o: ["no", "not"], a: 1, why: "نفي ← `I'm afraid not`." } },

    { k: "do so", h: "do so = يفعل ذلك (رسمي)",
      why: [
        "في الكتابة الرسمية `do so` تستبدل فعلًا وكل ما بعده، فتمنع التكرار.",
        "مفيدة جدًا في Writing Task 2."
      ],
      show: [{ t: "ex", items: [["Many people want to stop smoking, but few {k:do so}.", ""], ["If you want to leave early, you may {k:do so}.", ""]] }],
      check: { q: "Many students want to study abroad, but only a few can ___.", o: ["do it so", "do so"], a: 1, why: "`do so` تستبدل الفعل وما بعده." } }
  ],
  sum: [
    { h: "one / ones", en: ["the blue {k:one} · the red {k:ones}"] },
    { h: "so", en: ["I think {k:so}. · I hope {k:so}."] },
    { h: "not", en: ["I hope {k:not}. · I don't think {k:so}."] },
    { h: "رسمي", en: ["…, but few {k:do so}."] }
  ]
};

// طبّق على نفسك
window.LESSONS[91].apply = [
  {"p": "اكتب جملتين تتجنب فيهما تكرار الاسم بـ `one / ones`.", "use": "the blue {k:one} · the new {k:ones}", "m": ["My old phone was slow, so I bought a new one. I prefer the black shoes to the brown ones."], "c": [["`one / ones` بدل الاسم", "\\b(a|the|this|that)\\s+(\\w+\\s+)?(one|ones)\\b"], ["لم تستخدم `one` مع غير المعدود", "!\\b(rice|water|coffee|bread|milk) one\\b"]]},
  {"p": "أجب على أسئلة بـ `so / not: Will it rain tomorrow? Is the exam difficult?`", "use": "{s:I} {v:think} {k:so}. · {s:I} {v:hope} {k:not}.", "m": ["I don't think so. I hope not."], "c": [["`think so / hope so / hope not / afraid not`", "\\b(think so|hope so|hope not|afraid so|afraid not|expect so|suppose so)\\b"], ["لم تكتب `I think it` أو `I hope no`", "!\\b(I think it\\.|I hope no)\\b"]]}
];
