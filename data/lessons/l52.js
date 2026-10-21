window.LESSONS = window.LESSONS || {};
window.LESSONS[52] = {
  steps: [
    { k: "الفكرة", h: "الفعل الأول *يقرر* شكل الثاني",
      why: [
        "عندما يأتي فعلان متتاليان (أريد أن أذهب، أستمتع بالقراءة)، الفعل الأول هو الذي يحدد شكل الثاني: `to + verb` أو `ing`.",
        "لا توجد قاعدة منطقية كاملة، لكن هناك ميل عام: أفعال **المستقبل والقرار** (أريد، أخطط، أقرر) تأخذ `to`، لأن الفعل الثاني لم يحدث بعد."
      ],
      show: [{ t: "build", lab: "اختر الفعل الأول",
        opts: [["want", "I {v:want} {a:to} {v:go}.", "", 0], ["decide", "I {v:decided} {a:to} {v:leave}.", "", 0], ["hope", "I {v:hope} {a:to} {v:pass}.", "", 0],
               ["enjoy", "I {v:enjoy} {v:read|ing}.", "", 1], ["finish", "I {v:finished} {v:work|ing}.", "", 1], ["avoid", "I {v:avoid} {v:eat|ing} sugar.", "", 1]],
        groups: [{ h: "+ to", sub: "want, hope, decide, plan, agree, refuse, promise, need, afford, manage" }, { h: "+ ing", sub: "enjoy, finish, avoid, mind, suggest, keep, consider, practise, miss" }] }],
      check: { q: "I enjoy ___.", o: ["to read", "reading"], a: 1, why: "`enjoy` + ing." } },

    { k: "الاثنان", h: "أفعال تقبل الاثنين بنفس المعنى",
      why: ["مع `start, begin, continue, like, love, hate, prefer` يمكنك استخدام `to` أو `ing` والمعنى واحد تقريبًا."],
      show: [{ t: "big", items: ["It {v:started} {a:to rain} / {v:raining}."], cap: "الصيغتان صحيحتان" },
        { t: "note", kind: "tip", lab: "would like", txt: "`like` + ing للعادة العامة، و`would like` + to للرغبة الآن.", en: "I like swimming. · I'd like to swim now." }],
      check: { q: "I'd like ___ a coffee, please.", o: ["having", "to have"], a: 1, why: "`would like` + to." } },

    { k: "المعنى يتغير", h: "stop · remember · try",
      why: [
        "هنا يتغير المعنى تمامًا حسب الشكل. والمفتاح: `ing` تشير غالبًا إلى شيء **حدث قبل** أو يحدث، و`to` إلى شيء **بعد** (هدف).",
        "اضغط على كل زوج لترى الفرق."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["stop + ing", "I {v:stopped} {v:smoking}.", "توقفت عن التدخين (لم أعد أدخن)", 0], ["stop + to", "I {v:stopped} {a:to} {v:smoke}.", "توقفت (عن المشي) **لكي** أدخن", 1],
               ["remember + ing", "I {v:remember} {v:meeting} him.", "أتذكر أنني قابلته (في الماضي)", 0], ["remember + to", "{v:Remember} {a:to} {v:lock} the door.", "تذكّر أن تقفل (مهمة قادمة)", 1],
               ["try + ing", "{v:Try} {v:restarting} the computer.", "جرّب هذا كحل", 0], ["try + to", "I {v:tried} {a:to} {v:open} it.", "حاولت (وكان صعبًا)", 1]],
        groups: [{ h: "ing", sub: "حدث سابق / تجربة" }, { h: "to", sub: "هدف / مهمة قادمة / محاولة" }] }],
      check: { q: "Don't forget ___ the door.", o: ["locking", "to lock"], a: 1, why: "مهمة قادمة ← `forget to`." } },

    { k: "الأخطاء", h: "أشهر الأخطاء",
      why: ["كلها من استخدام الشكل الخاطئ بعد أفعال شائعة جدًا. ركّز على `mind` و`enjoy` و`decide`."],
      show: [{ t: "fix", items: [["I enjoy to read.", "I {v:enjoy} {v:reading}.", ""], ["Would you mind to wait?", "Would you {v:mind} {v:waiting}?", ""], ["I decided studying abroad.", "I {v:decided} {a:to} {v:study} abroad.", ""]] }],
      check: { q: "He keeps ___ the same mistake.", o: ["to make", "making"], a: 1, why: "`keep` + ing." } }
  ],
  sum: [
    { h: "+ to", en: ["want · hope · decide · afford · refuse"] },
    { h: "+ ing", en: ["enjoy · finish · avoid · mind · keep"] },
    { h: "الاثنان", en: ["start · like · love · prefer"] },
    { h: "المعنى يتغير", en: ["stop · remember · forget · try"] }
  ]
};
