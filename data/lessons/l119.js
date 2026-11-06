window.LESSONS = window.LESSONS || {};
window.LESSONS[119] = {
  steps: [
    { k: "الفكرة", h: "رأي *متحفظ* أقوى من رأي مطلق",
      why: [
        "`All people agree that…` تعميم يسهل نقضه: يكفي شخص واحد لا يوافق. الكاتب الناضج يتحفظ: `Many people believe…`.",
        "التحفظ (hedging) ليس ضعفًا، بل دقة. وهو من علامات الأسلوب الأكاديمي في Task 2."
      ],
      show: [{ t: "scale", cap: "من المطلق إلى المتحفظ",
        items: [["All people…", 0, "مطلق ✗", "`All people agree that technology is good.` (يسهل نقضه)"], ["Most people…", 40, "", "`Most people agree that…`"], ["It is widely believed…", 70, "", "`It is widely believed that…`"], ["It could be argued…", 100, "متحفظ ✓", "`It could be argued that technology has more benefits.`"]],
        start: 2 }],
      check: { q: "Better for an academic essay:", o: ["Everyone knows that exercise is good.", "It is widely accepted that exercise is beneficial."], a: 1, why: "التحفظ أقوى أكاديميًا من التعميم المطلق." } },

    { k: "أدوات التحفظ", h: "seem to · tend to · generally",
      why: [
        "أفعال التحفظ: `seem to, appear to, tend to` + فعل أصلي.",
        "ظروف التحفظ: `generally, probably, largely, arguably`. وعبارات: `I'd say…`, `It seems to me that…`, `To some extent`."
      ],
      show: [{ t: "build", lab: "اختر الأداة",
        opts: [["مطلق", "Young people spend more time online.", "تعميم", 0], ["tend to", "Young people {k:tend to} spend more time online.", "يميلون إلى", 1], ["seem to", "More people {k:seem to} work from home.", "", 1], ["Generally", "{k:Generally speaking}, public schools are good.", "", 1], ["I'd say", "{k:I'd say} the benefits are greater.", "would للتلطيف", 1]],
        groups: [{ h: "مطلق" }, { h: "متحفظ" }] },
        { t: "fix", items: [["I tend to watching TV.", "I {k:tend to} {v:watch} TV.", "فعل أصلي بعد tend to"]] }],
      check: { q: "People ___ buy more when prices fall.", o: ["tend to", "tend"], a: 0, why: "`tend to` + فعل أصلي." } },

    { k: "To some extent", h: "To what extent…? ← To some extent",
      why: [
        "أسئلة Task 2 كثيرًا ما تقول `To what extent do you agree?`. أفضل إجابة متوازنة: `I agree to some extent, but…`.",
        "هذا يُظهر أنك ترى الجانبين."
      ],
      show: [{ t: "big", items: ["I agree {k:to some extent}, but I believe…"] }],
      check: { q: "\"To what extent do you agree?\" A balanced answer starts:", o: ["I totally agree.", "I agree to some extent, but…"], a: 1, why: "`to some extent` = إجابة متوازنة." } },

    { k: "القرار", h: "decided · leaning towards · torn",
      why: [
        "للتعبير عن القرار والتردد في الكلام: `I've decided to…` (قررت)، `I'm leaning towards…` (أميل إلى)، `I'm torn between…` (متردد بين).",
        "و`make up my mind` = أحسم أمري. بعد `towards` اسم أو `ing`."
      ],
      show: [{ t: "ex", items: [["I{a:'ve} {v:decided} {a:to} {v:study} abroad.", "قررت"], ["I'm {k:leaning towards} {v:accepting} the offer.", "أميل إلى + ing"], ["I'm {k:torn between} medicine and engineering.", "متردد"], ["I haven't {k:made up my mind} yet.", "لم أحسم"]] },
        { t: "fix", items: [["I am leaning towards to accept.", "I'm leaning towards {v:accepting}.", ""], ["I didn't make my mind yet.", "I haven't {k:made up my mind} yet.", ""]] }],
      check: { q: "I'm leaning towards ___ the job.", o: ["take", "taking", "to take"], a: 1, why: "`towards` حرف جر ← `ing`." } }
  ],
  sum: [
    { h: "تجنب المطلق", en: ["Many people… (لا All people…)"] },
    { h: "أدوات", en: ["tend to · seem to · generally · I'd say"] },
    { h: "توازن", en: ["I agree to some extent, but…"] },
    { h: "القرار", en: ["leaning towards + ing · torn between"] }
  ]
};

// طبّق على نفسك
window.LESSONS[119].apply = [
  {"p": "عبّر عن رأيك في موضوع مثير للجدل بتحفظ (دون جزم).", "use": "{k:It seems} … · {k:I tend to think} … · {k:might} · {k:to some extent}", "m": ["It seems that social media has some negative effects. I tend to think that young people spend too much time online, although this might not be true for everyone."], "c": [["عبارة تحفظ", "\\b(it seems|it appears|tend to|might|may|could|to some extent|generally|probably|perhaps|arguably|likely)\\b"], ["لم تستخدم `always / never / all people` بجزم", "!\\b(all people|everyone always|never ever)\\b"]]},
  {"p": "اكتب جملة قرار واضحة، وجملة تتردد فيها.", "use": "{s:I}{a:'ve} {v:decided} {a:to} … · {s:I}{a:'m} {k:not sure} {k:whether} …", "m": ["I've decided to take the exam in March. I'm still not sure whether to study in the UK or Australia."], "c": [["`decided to / I'll go for`", "\\b(decided to|going to go for|I'll go for|made up my mind)\\b"], ["`not sure whether / can't decide`", "\\b(not sure (whether|if)|can't decide|haven't decided|in two minds)\\b"]]}
];
