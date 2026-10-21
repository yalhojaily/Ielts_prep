window.LESSONS = window.LESSONS || {};
window.LESSONS[14] = {
  steps: [
    { k: "الفكرة", h: "نشاط *استمر* حتى لحظة في الماضي",
      why: [
        "تعرف المضارع التام المستمر: نشاط مستمر من الماضي **حتى الآن**. انقل الصورة كلها خطوة إلى الماضي، تحصل على الماضي التام المستمر.",
        "النشاط استمر فترة **حتى** حدث ماضٍ آخر: كنت أنتظر منذ ساعة عندما جاءت الحافلة أخيرًا."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: -0.9, to: -0.35, c: "accent", label: "I had been waiting for an hour" }, { m: "dot", at: -0.35, c: "subj", label: "the bus came" }],
        legend: [["accent", "نشاط مستمر ← **had been + ing**"], ["subj", "الحدث المرجع ← **ماضٍ بسيط**"]] }],
      check: { q: "I ___ for an hour when the bus finally came.", o: ["was waiting", "had been waiting"], a: 1, why: "نذكر مدة الانتظار (`for an hour`) حتى حدث ماضٍ، فنستخدم الماضي التام المستمر." } },

    { k: "البناء", h: "had been + ing",
      why: [
        "ثلاث قطع ثابتة مع كل الضمائر: `had` + `been` + الفعل مع `ing`.",
        "لا يأتي وحده: يحتاج دائمًا نقطة ماضية نقيس عليها (`when…, before…, by the time…`)."
      ],
      show: [{ t: "formula", rows: [["إثبات", "{s:They} {a:had} {a:been} {v:working} all night."], ["نفي", "{s:She} {a:hadn't} {a:been} {v:sleeping} well."], ["سؤال", "{q:How long} {a:had} {s:you} {a:been} {v:waiting}?"]] }],
      check: { q: "She had been ___ there for ten years.", o: ["work", "worked", "working"], a: 2, why: "بعد `had been` يأتي الفعل مع `ing`." } },

    { k: "سبب حالة ماضية", h: "لماذا كان متعبًا؟",
      why: [
        "استخدام ثانٍ: تشرح سبب حالة في الماضي بنشاط طويل سبقها.",
        "كان متعبًا ← لأنه كان يعمل طوال الليل. الأرض كانت مبللة ← كان المطر ينزل."
      ],
      show: [{ t: "cards", items: [
        { i: "eye", h: "الحالة في الماضي", en: "He was tired.", ar: "كان متعبًا." },
        { i: "arrow", h: "النشاط الذي سببها", en: "He had been working all night.", ar: "كان يعمل طوال الليل." }
      ] }],
      check: { q: "The ground was wet. It ___.", o: ["had been raining", "has been raining"], a: 0, why: "سبب حالة في الماضي (`was wet`)، فننقل الصورة إلى الماضي: `had been raining`." } },

    { k: "مقابل الماضي التام", h: "المدة أم النتيجة؟",
      why: [
        "نفس الفرق الذي تعلمته في المضارع: البسيط للنتيجة والعدد، والمستمر للمدة والنشاط.",
        "`had written three chapters` = النتيجة. `had been writing for hours` = النشاط والمدة. وأفعال الحالة تبقى في الماضي التام البسيط."
      ],
      show: [{ t: "compare", cols: [
        { h: "النتيجة / العدد", c: "subj", en: ["She {a:had} {v:written} three chapters."] },
        { h: "المدة / النشاط", c: "accent", en: ["She {a:had been} {v:writing} for hours."] }
      ] },
        { t: "fix", items: [["They had been knew each other.", "They {a:had} {v:known} each other.", "`know` فعل حالة."]] }],
      check: { q: "By noon, he ___ 20 emails.", o: ["had been writing", "had written"], a: 1, why: "ذكرت العدد (`20`)، فالتركيز على النتيجة." } }
  ],
  sum: [
    { h: "البناء", en: ["{a:had been} + {v:verb-ing}"] },
    { h: "متى؟", txt: "مدة نشاط حتى حدث ماضٍ", en: ["I'd been waiting for an hour when it came."] },
    { h: "سبب حالة", en: ["He was tired. He'd been working."] },
    { h: "مقابل التام", en: ["had written 3 (نتيجة) · had been writing (مدة)"] }
  ]
};
