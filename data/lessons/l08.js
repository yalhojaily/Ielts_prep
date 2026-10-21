window.LESSONS = window.LESSONS || {};
window.LESSONS[8] = {
  steps: [
    { k: "الفكرة", h: "didn't + الفعل *الأصلي*",
      why: [
        "كما في المضارع، الفعل العادي لا يُنفى بـ `not` وحدها، بل يحتاج مساعدًا. في الماضي المساعد هو `did`.",
        "والخبر الجيد: `didn't` واحدة مع **كل** الضمائر. لا do ولا does."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {a:didn't} {v:sleep} well.", "", 0], ["She", "{s:She} {a:didn't} {v:sleep} well.", "", 0], ["We", "{s:We} {a:didn't} {v:sleep} well.", "", 0], ["They", "{s:They} {a:didn't} {v:sleep} well.", "", 0]],
        groups: [{ h: "كل الضمائر", res: "{a:didn't} + {v:verb}" }] }],
      check: { q: "She ___ me back yesterday.", o: ["don't call", "didn't call", "doesn't called"], a: 1, why: "النفي في الماضي: `didn't` + الفعل الأصلي `call`." } },

    { k: "الماضي مرة واحدة", h: "علامة الماضي *تنتقل* إلى did",
      why: [
        "`did` هي ماضي `do`، فهي تحمل علامة الماضي. لذلك يعود الفعل الأساسي إلى أصله.",
        "نفس فكرة الـ s في المضارع: العلامة تظهر **مرة واحدة**. `didn't went` خطأ لأن الماضي ظهر مرتين."
      ],
      show: [{ t: "trans", items: [
        { from: "{s:She} {v:went} home.", to: "{s:She} {a:didn't} {v:go} home.", chg: ["`went` تعود إلى `go`"] },
        { from: "{s:He} {v:bought} a car.", to: "{s:He} {a:didn't} {v:buy} a car.", chg: ["`bought` تعود إلى `buy`"] }
      ] }],
      check: { q: "They ___ the film.", o: ["didn't liked", "didn't like", "not liked"], a: 1, why: "بعد `didn't` الفعل الأصلي: `like`." } },

    { k: "مع be", h: "wasn't و weren't بدون did",
      why: [
        "`was / were` أفعال قوية تحمل النفي بنفسها، مثل `am / is / are` في المضارع. نضع `not` بعدها مباشرة.",
        "نستخدمها مع الصفات والأماكن: `It wasn't expensive.` و`We weren't at home.`"
      ],
      show: [{ t: "decide", q: "هل في الجملة `was / were`؟",
        opts: [
          { lab: "نعم", h: "not بعدها", en: ["{s:The test} {a:wasn't} difficult.", "{s:We} {a:weren't} at home."], c: "be" },
          { lab: "لا", h: "didn't + الفعل", en: ["{s:I} {a:didn't} {v:have} breakfast."], c: "verb" }
        ] }],
      check: { q: "He ___ at home last night.", o: ["didn't was", "wasn't", "didn't be"], a: 1, why: "مع المكان نستخدم `be`، ونفيه `wasn't` بدون did." } },

    { k: "في المقال", h: "اكتب did not كاملة",
      why: ["في المقال الأكاديمي (Writing Task 2) وفي وصف الرسوم (Task 1) الأفضل الصيغة الكاملة `did not`، لأن الاختصار أسلوب كلام."],
      show: [{ t: "compare", cols: [
        { h: "كلام", c: "subj", en: ["Sales {a:didn't} {v:change} much."] },
        { h: "كتابة رسمية", c: "accent", en: ["Sales {a:did} {n:not} {v:change} significantly."] }
      ] }],
      check: { q: "Best for IELTS Writing:", o: ["The number didn't rise.", "The number did not rise."], a: 1, why: "الصيغة الكاملة أنسب في الكتابة الرسمية." } }
  ],
  sum: [
    { h: "النفي", en: ["{s:I / she / they} {a:didn't} {v:go}"] },
    { h: "الماضي مرة واحدة", en: ["went → didn't {v:go}"] },
    { h: "مع be", en: ["{a:wasn't} · {a:weren't}"] },
    { h: "في المقال", en: ["did not"] }
  ]
};
