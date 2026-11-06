window.LESSONS = window.LESSONS || {};
window.LESSONS[51] = {
  steps: [
    { k: "to للغرض", h: "لماذا؟ ← to + فعل",
      why: [
        "عندما تشرح **سبب** فعل شيء (الغرض)، استخدم `to` + الفعل الأصلي: ذهبت إلى البنك **لكي** أسحب نقودًا.",
        "لا نستخدم `for` + فعل للغرض: `for buy` خطأ (ترجمة من «لِـ»)."
      ],
      show: [{ t: "big", items: ["I went to the bank {a:to} {v:get} money."], cap: "to = لكي" },
        { t: "fix", items: [["I went to the market for buy food.", "I went to the market {a:to} {v:buy} food.", ""]] },
        { t: "note", lab: "أرسمية", txt: "`in order to` بنفس المعنى وأكثر رسمية، ونفيها `in order not to`.", en: "We left early in order to avoid traffic." }],
      check: { q: "I'm saving money ___ a house.", o: ["for buy", "to buy", "for buying to"], a: 1, why: "الغرض ← `to` + الفعل." } },

    { k: "ing كاسم", h: "الفعل + ing = *اسم*",
      why: [
        "إذا أردت أن يكون الفعل **موضوع** الجملة (الفاعل)، أضف له `ing` فيصبح اسمًا: `Swimming is fun.` (السباحة ممتعة).",
        "وبعد **حروف الجر** (`in, at, of, before, after, without`) يأتي دائمًا `ing`، لأن حرف الجر يحتاج اسمًا بعده."
      ],
      show: [{ t: "ex", items: [["{v:Reading} improves your vocabulary.", "فاعل الجملة"], ["I'm interested {k:in} {v:learning} Chinese.", "بعد حرف جر"], ["Think {k:before} {v:speaking}.", ""], ["He left {k:without} {v:saying} goodbye.", ""]] },
        { t: "fix", items: [["Swim is good exercise.", "{v:Swimming} is good exercise.", ""], ["I'm interested in learn English.", "I'm interested in {v:learning} English.", ""]] }],
      check: { q: "She's afraid of ___.", o: ["fly", "to fly", "flying"], a: 2, why: "بعد حرف الجر `of` ← `ing`." } },

    { k: "ing أم ed", h: "boring أم bored؟",
      why: [
        "صفات `ing` تصف **الشيء الذي يسبب** الشعور. صفات `ed` تصف **الشخص الذي يشعر**.",
        "المحاضرة مملة (`boring`) ← لذلك أنا أشعر بالملل (`bored`). إذا قلت `I am boring` فأنت تقول: أنا شخص ممل!"
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["the film (سبب)", "The film was {v:bor|ing}.", "الفيلم يسبب الملل", 0], ["I (أشعر)", "I was {v:bor|ed}.", "أنا أشعر بالملل", 1], ["the news (سبب)", "The news is {v:shock|ing}.", "", 0], ["we (نشعر)", "We are {v:shock|ed}.", "", 1], ["the rule (سبب)", "This rule is {v:confus|ing}.", "", 0], ["she (تشعر)", "She felt {v:confus|ed}.", "", 1]],
        groups: [{ h: "ing = السبب", sub: "الشيء" }, { h: "ed = الشعور", sub: "الشخص" }] }],
      check: { q: "I am ___ in this class.", o: ["boring", "bored"], a: 1, why: "أنت تشعر بالملل ← `bored`." } },

    { k: "صفة + to", h: "It's important to + فعل",
      why: [
        "تركيب شائع جدًا في المقالات: `It is` + صفة + `to` + فعل.",
        "`It's important / difficult / easy / necessary to…`"
      ],
      show: [{ t: "ex", items: [["It's {k:important} {a:to} {v:sleep} well.", ""], ["It is {k:difficult} {a:to} {v:find} a job.", ""], ["It's easy {a:to} {v:use}.", ""]] }],
      check: { q: "It is necessary ___ regularly.", o: ["exercising", "to exercise", "exercise"], a: 1, why: "`It is necessary` + `to` + الفعل." } }
  ],
  sum: [
    { h: "الغرض", en: ["I went there {a:to} {v:buy} food."] },
    { h: "ing اسم", en: ["{v:Swimming} is fun. · good at {v:cooking}"] },
    { h: "ing / ed", en: ["boring (السبب) · bored (الشعور)"] },
    { h: "صفة + to", en: ["It's important {a:to} {v:sleep}."] }
  ]
};

// طبّق على نفسك
window.LESSONS[51].apply = [
  {"p": "اكتب جملتين بـ `to` للغرض: لماذا تتعلم الإنجليزية؟ ولماذا تعمل؟", "use": "{s:I}{a:'m} {v:study}{e:ing} English {a:to} {v:get} …", "m": ["I'm studying English to get a master's degree abroad. I work hard to give my children a good life."], "c": [["`to` + فعل للغرض", "\\bto\\s+(get|be|study|improve|give|pass|work|save|travel|help|find|have|become)\\b"], ["لم تكتب `for get` أو `for to`", "!\\bfor\\s+(to|get|study|improve)\\b"]]},
  {"p": "اكتب جملة بصفتين: -`ed` (شعورك) و-`ing` (سبب الشعور).", "use": "{s:The film} {a:was} {k:boring}, {s:I} {a:was} {k:bored}.", "m": ["The lecture was so boring that I felt bored after ten minutes."], "c": [["صفة بـ `ing`", "\\b(boring|interesting|exciting|tiring|confusing|amazing|surprising|annoying|disappointing)\\b"], ["صفة بـ `ed`", "\\b(bored|interested|excited|tired|confused|amazed|surprised|annoyed|disappointed)\\b"]]}
];
