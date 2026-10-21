window.LESSONS = window.LESSONS || {};
window.LESSONS[58] = {
  steps: [
    { k: "الفكرة", h: "كلما *طال* الطلب زاد أدبه",
      why: [
        "في الإنجليزية الأدب يظهر في **طول** الطلب وابتعاده عن المباشرة. `Can I…?` عادي، `Could I…?` أكثر أدبًا، `May I…?` رسمي.",
        "و`could` هنا **ليست ماضيًا**، بل علامة تهذيب."
      ],
      show: [{ t: "scale", cap: "من العادي إلى الأكثر أدبًا",
        items: [["Can you…?", 0, "عادي", "`Can you help me with this?`"], ["Could you…?", 35, "مهذب", "`Could you help me with this, please?`"], ["Would you mind…?", 70, "مهذب جدًا", "`Would you mind helping me with this?`"], ["I was wondering if…", 100, "رسمي جدًا", "`I was wondering if you could help me with this.`"]],
        start: 1 }],
      check: { q: "Most polite in a formal email:", o: ["Can you send the file?", "I was wondering if you could send the file."], a: 1, why: "`I was wondering if…` أكثر الصيغ تهذيبًا." } },

    { k: "إذن وطلب وعرض", h: "ثلاث وظائف",
      why: [
        "**الإذن**: أنا أريد أن أفعل ← `Can / Could / May I…?`",
        "**الطلب**: أريدك أن تفعل ← `Can / Could / Would you…?` · **العرض**: أفعل لك ← `Shall I…? / Would you like…?`"
      ],
      show: [{ t: "cards", items: [
        { i: "hand", h: "طلب إذن", en: "Could I use your phone?" },
        { i: "chat", h: "طلب من شخص", en: "Could you repeat that, please?" },
        { i: "gift", h: "عرض", en: "Shall I carry that for you?", tags: ["Would you like a drink?"] }
      ] },
        { t: "fix", items: [["Do you want that I help you?", "{a:Shall} I {v:help} you? / {a:Would} you {v:like} me {a:to} {v:help}?", "ترجمة حرفية من «هل تريد أن أساعدك؟»"]] }],
      check: { q: "You see a woman with heavy bags. You say:", o: ["Could you help me?", "Shall I help you?"], a: 1, why: "تعرض المساعدة ← `Shall I…?`" } },

    { k: "Would you mind", h: "Would you mind + ing… والجواب *بالنفي*",
      why: [
        "`mind` = يمانع. بعدها `ing`: `Would you mind waiting?` = هل تمانع الانتظار؟",
        "لذلك الموافقة تكون **بالنفي**: `No, not at all.` = لا، لا أمانع. إذا قلت `Yes` فأنت تقول: نعم، أمانع!"
      ],
      show: [{ t: "map", cols: [{ h: "السؤال ← الموافقة", c: "verb", k: "o", rows: [["Would you mind waiting?", "No, not at all."], ["Do you mind if I open the window?", "No, go ahead."]] }] },
        { t: "fix", items: [["Would you mind to open the door?", "Would you mind {v:opening} the door?", ""]] }],
      check: { q: "\"Would you mind closing the window?\" — You agree. You say:", o: ["Yes, I would.", "No, not at all."], a: 1, why: "الموافقة = لا أمانع ← `No, not at all.`" } },

    { k: "الرد", h: "قبول ورفض بلطف",
      why: ["الرفض المباشر (`No`) قد يبدو فظًا. أضف `I'm afraid` أو اعتذارًا قصيرًا."],
      show: [{ t: "compare", cols: [
        { h: "موافقة", c: "verb", en: ["Yes, of course.", "Sure, go ahead.", "No problem."] },
        { h: "رفض لطيف", c: "neg", en: ["I'm afraid you can't.", "Sorry, I'm using it right now."] }
      ] }],
      check: { q: "Polite way to refuse permission:", o: ["No.", "I'm afraid you can't."], a: 1, why: "`I'm afraid…` يلطّف الرفض." } }
  ],
  sum: [
    { h: "إذن", en: ["{a:Can / Could / May} I…?"] },
    { h: "طلب", en: ["{a:Could / Would} you…?"] },
    { h: "عرض", en: ["{a:Shall} I…? · Would you like…?"] },
    { h: "mind", en: ["Would you mind {v:waiting}? — No, not at all."] }
  ]
};
