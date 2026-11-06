window.LESSONS = window.LESSONS || {};
window.LESSONS[120] = {
  steps: [
    { k: "الفكرة", h: "المحادثة أكثر من سؤال وجواب",
      why: [
        "المحادثة الطبيعية تحتاج «غراءً» بين الجمل: عبارات تكسب بها وقتًا للتفكير، وتُظهر بها الاهتمام، وتوسّع إجابتك، وتطلب التوضيح.",
        "هذه العبارات تجعلك تبدو طليقًا في IELTS Speaking (Fluency and Coherence)."
      ],
      show: [{ t: "cards", items: [
        { i: "clock", h: "كسب الوقت", tags: ["Well, …", "Let me think…", "That's a good question."] },
        { i: "eye", h: "إظهار الاهتمام", tags: ["Really?", "That sounds great!", "I see."] },
        { i: "plus", h: "توسيع الإجابة", tags: ["The thing is, …", "To be honest, …", "For instance, …"] },
        { i: "question", h: "طلب التوضيح", tags: ["Sorry, could you repeat that?", "Do you mean…?"] }
      ] }],
      check: { q: "You need a moment to think. You say:", o: ["(silence)", "Well, let me think…"], a: 1, why: "عبارة لكسب الوقت أفضل من الصمت." } },

    { k: "كسب الوقت", h: "لا تصمت: Well, let me think…",
      why: [
        "في الاختبار، الصمت الطويل أسوأ من عبارة طبيعية لكسب الوقت.",
        "لكن نوّع بينها ولا تكرر العبارة نفسها في كل إجابة."
      ],
      show: [{ t: "ex", items: [["{k:Well}, {k:that's a difficult question}, but I think…", ""], ["{k:That's not something I've thought about much, but} I'd say…", ""], ["{k:To be honest}, I'm not really into sports.", "للإجابة بصراحة"]] }],
      check: { q: "Most natural start to a difficult question:", o: ["Er… er… er…", "That's an interesting question. I'd say…"], a: 1, why: "عبارة كاملة لكسب الوقت." } },

    { k: "ردود الفعل", h: "That sounds great · *لا* sounds like great",
      why: [
        "`That sounds` + **صفة** مباشرة: `That sounds great.`",
        "`That sounds like` + **اسم**: `That sounds like a good idea.` الخلط بينهما خطأ شائع."
      ],
      show: [{ t: "compare", cols: [{ h: "sounds + صفة", c: "subj", en: ["That {v:sounds} {k:great}.", "That {v:sounds} {k:interesting}."] }, { h: "sounds like + اسم", c: "accent", en: ["That {v:sounds like} {o:a good idea}.", "That {v:sounds like} {o:fun}."] }] },
        { t: "fix", items: [["That sounds like great.", "That sounds {k:great}.", ""]] },
        { t: "ex", items: [["“I got the job!” “{k:That's fantastic! Congratulations!}”", ""]] }],
      check: { q: "\"I'm going to Japan next month.\" \"That sounds ___!\"", o: ["like amazing", "amazing"], a: 1, why: "`sounds` + صفة مباشرة." } },

    { k: "التوسيع والتوضيح", h: "لا تكتفِ بـ Yes · اطلب التوضيح بأدب",
      why: [
        "إجابة `Yes.` وحدها في الاختبار ضعيفة جدًا. أضف سببًا أو مثالًا: `Yes, I do. Actually, …`",
        "وإذا لم تفهم السؤال لا تصمت: `Sorry, do you mean…?` أو `Could you repeat that, please?`"
      ],
      show: [{ t: "fix", items: [["Yes. (and stop)", "Yes, I do. {k:Actually}, I play every weekend because…", ""], ["Repeat please.", "{k:Sorry, could you repeat that, please?}", ""], ["I don't understand your question. (silence)", "{k:Sorry, do you mean} …?", ""]] }],
      check: { q: "\"Do you like cooking?\" Best answer:", o: ["Yes.", "Yes, I do. The thing is, it helps me relax after work."], a: 1, why: "أجب ثم وسّع بسبب." } }
  ],
  sum: [
    { h: "كسب الوقت", en: ["Well, let me think… · That's a good question."] },
    { h: "الاهتمام", en: ["Really? · That sounds great!"] },
    { h: "التوسيع", en: ["The thing is, … · To be honest, …"] },
    { h: "التوضيح", en: ["Sorry, could you repeat that? · Do you mean…?"] }
  ]
};

// طبّق على نفسك
window.LESSONS[120].apply = [
  {"p": "اكتب بداية حوار مع شخص قابلته في مؤتمر: تحية، سؤال، رد اهتمام.", "use": "{k:Nice to meet you}. {q:What} brings you here? … {k:Really? That sounds} …", "m": ["Hi, nice to meet you. What do you do? Oh really? That sounds interesting. How long have you been doing that?"], "c": [["تحية أو عبارة افتتاح", "\\b(nice to meet you|how are you|how's it going|hi|hello)\\b"], ["سؤال مفتوح", "\\b(what|how|where|why)\\b[^.?]*\\?"], ["رد يعبر عن الاهتمام (`Really? / That sounds…`)", "\\b(really\\?|that sounds|how interesting|oh,? really)\\b"]]},
  {"p": "اختم الحديث بلطف.", "use": "{k:It was nice talking to you}. {k:I'd better} …", "m": ["Well, it was great talking to you. I'd better get going, but let's keep in touch."], "c": [["عبارة ختام", "\\b(nice talking|great talking|good to see you|I'd better|I should get going|keep in touch|see you)\\b"]]}
];
