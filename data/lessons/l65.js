window.LESSONS = window.LESSONS || {};
window.LESSONS[65] = {
  steps: [
    { k: "الفكرة", h: "قريب أم بعيد؟ مفرد أم جمع؟",
      why: [
        "سؤالان يحددان الكلمة: هل الشيء **قريب** مني أم **بعيد**؟ وهل هو **مفرد** أم **جمع**؟",
        "قريب: `this` (مفرد) و`these` (جمع). بعيد: `that` (مفرد) و`those` (جمع)."
      ],
      show: [{ t: "table", head: ["", "مفرد", "جمع"], rows: [["قريب", "{k:this} book", "{k:these} books"], ["بعيد", "{k:that} car", "{k:those} cars"]] }],
      check: { q: "Who is ___ man over there?", o: ["this", "that", "those"], a: 1, why: "بعيد (`over there`) ومفرد ← `that`." } },

    { k: "التطابق", h: "these / those مع الجمع *فقط*",
      why: [
        "في العربية «هذه» تُستخدم للمفرد المؤنث ولجمع غير العاقل، لذلك يقول العرب `this people` و`this shoes`.",
        "في الإنجليزية العدد هو الذي يقرر: الجمع ← `these / those` دائمًا."
      ],
      show: [{ t: "build", lab: "اختر الاسم",
        opts: [["shoe", "{k:This} shoe is comfortable.", "مفرد", 0], ["shoes", "{k:These} shoes are comfortable.", "جمع", 1], ["person", "{k:This} person is friendly.", "", 0], ["people", "{k:These} people are friendly.", "`people` جمع", 1]],
        groups: [{ h: "this + مفرد" }, { h: "these + جمع" }] },
        { t: "fix", items: [["This people are friendly.", "{k:These} people are friendly.", ""]] }],
      check: { q: "I like ___ shoes.", o: ["this", "these"], a: 1, why: "`shoes` جمع ← `these`." } },

    { k: "استخدامات أخرى", h: "this one · This is… · That's…",
      why: [
        "`this one / that one` تمنع تكرار الاسم. `This is…` لتقديم شخص أو في بداية مكالمة.",
        "و`That's…` تشير إلى فكرة قالها شخص: `That's a good idea.`"
      ],
      show: [{ t: "ex", items: [["I don't like this shirt. I prefer {k:that one}.", ""], ["Hello, {k:this is} Yousef.", "في الهاتف"], ["{k:That's} a good idea.", "ردًا على فكرة"]] }],
      check: { q: "(on the phone) \"Hello, ___ Ahmed.\"", o: ["I'm", "this is"], a: 1, why: "في الهاتف نقول `This is…`." } },

    { k: "في الكتابة", h: "This في أول الجملة = *أداة ربط*",
      why: [
        "في المقال، `This` في أول الجملة تشير إلى الفكرة السابقة كلها، فتربط الجمل بسلاسة وتمنع التكرار.",
        "الأفضل أن تضيف بعدها اسمًا يلخص الفكرة: `This problem…`, `This trend…`."
      ],
      show: [{ t: "big", items: ["Prices have risen sharply. {k:This trend} has affected many families."] }],
      check: { q: "Choose the best linking sentence:", o: ["Prices rose. It affected families.", "Prices rose. This increase affected families."], a: 1, why: "`This increase` يلخص الفكرة السابقة بوضوح." } }
  ],
  sum: [
    { h: "قريب", en: ["{k:this} book · {k:these} books"] },
    { h: "بعيد", en: ["{k:that} car · {k:those} cars"] },
    { h: "التطابق", en: ["{k:these} people (لا this people)"] },
    { h: "ربط", en: ["{k:This trend} has…"] }
  ]
};
