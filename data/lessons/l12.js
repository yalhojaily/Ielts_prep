window.LESSONS = window.LESSONS || {};
window.LESSONS[12] = {
  steps: [
    { k: "الفكرة", h: "التركيز على *المدة* والنشاط",
      why: [
        "المضارع التام المستمر يصف نشاطًا بدأ في الماضي واستمر حتى الآن، والتركيز على **طول الوقت** واستمرار النشاط.",
        "مثال: انتظرت ساعة كاملة وما زلت أنتظر. المهم هنا أن الانتظار طويل ومستمر."
      ],
      show: [{ t: "timeline",
        marks: [{ m: "wave", from: -0.6, to: 0, c: "accent", label: "I've been waiting for an hour." }],
        legend: [["accent", "شريط متحرك من الماضي حتى الآن = **نشاط مستمر**"]] }],
      check: { q: "I ___ here for an hour (and I'm still here).", o: ["am waiting", "have been waiting", "waited"], a: 1, why: "نشاط بدأ قبل ساعة وما زال مستمرًا، والتركيز على المدة." } },

    { k: "البناء", h: "have / has been + ing",
      why: [
        "الصيغة ثلاث قطع: `have / has` (حسب الفاعل) + `been` (ثابتة دائمًا) + الفعل مع `ing`.",
        "`been` لا تتغير أبدًا. والقطعة الأولى هي التي تتغير مع الفاعل."
      ],
      show: [{ t: "build", lab: "اختر الفاعل",
        opts: [["I", "{s:I} {a:have} {a:been} {v:work|ing}.", "", 0], ["We", "{s:We} {a:have} {a:been} {v:work|ing}.", "", 0], ["She", "{s:She} {a:has} {a:been} {v:work|ing}.", "", 1], ["It", "{s:It} {a:has} {a:been} {v:rain|ing}.", "", 1]],
        groups: [{ h: "I · you · we · they", res: "{a:have been} + ing" }, { h: "he · she · it", res: "{a:has been} + ing" }] },
        { t: "formula", rows: [["نفي", "{s:She} {a:hasn't been} {v:sleeping} well."], ["سؤال", "{q:How long} {a:have} {s:you} {a:been} {v:learning} English?"]] }],
      check: { q: "It ___ raining all day.", o: ["have been", "has been", "is been"], a: 1, why: "`It` مفرد غائب، فنستخدم `has been`." } },

    { k: "أثر ظاهر", h: "نشاط انتهى للتو *وأثره* ظاهر",
      why: [
        "استخدام ثانٍ: النشاط ربما توقف قبل قليل، لكنك ترى أثره الآن.",
        "عيناه حمراوان ← كان يبكي. يداه متسختان ← كان يصلح السيارة."
      ],
      show: [{ t: "cards", items: [
        { i: "eye", h: "ترى الأثر", en: "Your eyes are red.", ar: "عيناك حمراوان." },
        { i: "arrow", h: "فتسأل عن النشاط", en: "Have you been crying?", ar: "هل كنت تبكي؟" }
      ] }],
      check: { q: "You're out of breath! ___ running?", o: ["Did you", "Have you been", "Are you"], a: 1, why: "الأثر ظاهر الآن (ضيق التنفس) والنشاط انتهى للتو." } },

    { k: "تام أم تام مستمر", h: "النتيجة والعدد أم المدة والنشاط؟",
      why: [
        "المضارع التام البسيط يجيب عن: **ماذا أنجزت؟ كم؟** (`three emails`, `50 pages`).",
        "المضارع التام المستمر يجيب عن: **منذ متى وأنت تفعل هذا؟** (`all morning`, `for two hours`). إذا ذكرت عددًا فاستخدم البسيط."
      ],
      show: [{ t: "compare", cols: [
        { h: "تام: النتيجة / العدد", c: "subj", en: ["I {a:have} {v:read} 50 pages.", "I've {v:written} three emails."] },
        { h: "تام مستمر: المدة / النشاط", c: "accent", en: ["I {a:have been} {v:reading} for two hours.", "I've {a:been} {v:writing} emails all morning."] }
      ] }],
      check: { q: "I ___ five emails this morning.", o: ["have been writing", "have written"], a: 1, why: "ذكرت العدد (`five`)، فالتركيز على النتيجة ← مضارع تام بسيط." } },

    { k: "أفعال الحالة", h: "know و like تبقى في التام *البسيط*",
      why: [
        "كما تعلمت: أفعال الحالة لا تأخذ ing. لذلك حتى مع المدة نستخدم المضارع التام البسيط.",
        "أما `work, live, study` فتصلح بالصيغتين بمعنى متقارب."
      ],
      show: [{ t: "fix", items: [["She has been knowing him for years.", "She {a:has} {v:known} him for years.", "`know` فعل حالة."], ["How long are you studying English?", "{q:How long} {a:have} you {a:been} {v:studying} English?", "السؤال عن المدة حتى الآن يحتاج التام المستمر."]] }],
      check: { q: "I ___ her since we were children.", o: ["have been knowing", "have known"], a: 1, why: "`know` فعل حالة، فيبقى في المضارع التام البسيط." } }
  ],
  sum: [
    { h: "البناء", en: ["{s:I/you/we/they} {a:have been} + ing", "{s:he/she/it} {a:has been} + ing"] },
    { h: "متى؟", txt: "نشاط مستمر حتى الآن · أثر ظاهر", en: ["I've been waiting for an hour."] },
    { h: "مقابل التام", en: ["I've {v:read} 50 pages. (عدد)", "I've been {v:reading} for hours. (مدة)"] },
    { h: "انتبه", txt: "أفعال الحالة في التام البسيط", en: ["I've {v:known} her for years."] }
  ]
};
