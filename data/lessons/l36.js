window.LESSONS = window.LESSONS || {};
window.LESSONS[36] = {
  steps: [
    { k: "الفكرة", h: "مغلق: نعم/لا · مفتوح: *أخبرني*",
      why: [
        "السؤال المغلق ينتهي جوابه بكلمة واحدة: نعم أو لا. السؤال المفتوح يطلب معلومة أو رأيًا أو شرحًا، فيجعل الطرف الآخر يتكلم.",
        "في IELTS Speaking الممتحن يسأل أسئلة مفتوحة، وعليك أن تجيب بجمل كاملة لا بنعم أو لا."
      ],
      show: [{ t: "compare", cols: [
        { h: "مغلق", c: "subj", en: ["{a:Do} you {v:like} it?"], ar: "Yes / No" },
        { h: "مفتوح", c: "accent", en: ["{q:What} {a:do} you {v:like} about it?"], ar: "يحتاج شرحًا" }
      ] }],
      check: { q: "Which is an open question?", o: ["Did you enjoy the trip?", "What did you enjoy most about the trip?"], a: 1, why: "يبدأ بأداة استفهام ويطلب شرحًا." } },

    { k: "طلب الرأي", h: "What do you think of / about…?",
      why: [
        "أشهر سؤال لطلب الرأي، ولا تنسَ `do` فيه: `What do you think…?`",
        "حذف `do` من أكثر الأخطاء عند العرب، لأننا نقول «ما رأيك؟» بلا فعل مساعد."
      ],
      show: [{ t: "formula", rows: [["طلب رأي", "{q:What} {a:do} {s:you} {v:think} of the new policy?"], ["طلب شرح", "{q:How} {a:does} {s:the system} {v:work}?"], ["أداة مركبة", "{q:What kind of} books {a:do} you {v:read}?"]] },
        { t: "fix", items: [["What you think about it?", "{q:What} {a:do} you {v:think} about it?", ""]] }],
      check: { q: "What ___ of the film?", o: ["you think", "do you think", "are you think"], a: 1, why: "السؤال المفتوح يحتاج المساعد: `do you think`." } },

    { k: "حرف الجر في الآخر", h: "Who is this gift *for*?",
      why: [
        "في الإنجليزية الطبيعية يبقى حرف الجر في **آخر** السؤال، ولا يتقدم مع أداة الاستفهام.",
        "في العربية نقول «لِمَن الهدية؟» فنضع حرف الجر في الأول، لذلك يكثر الخطأ `For who…?`."
      ],
      show: [{ t: "ex", items: [["{q:Who} is this gift {k:for}?", "لمن الهدية؟"], ["{q:What} are you looking {k:at}?", "إلامَ تنظر؟"], ["{q:Where} are you {k:from}?", "من أين أنت؟"], ["{q:Who} did you talk {k:to}?", "مع من تكلمت؟"]] }],
      check: { q: "Choose the natural question:", o: ["For who is this gift?", "Who is this gift for?"], a: 1, why: "حرف الجر `for` يأتي في آخر السؤال." } },

    { k: "How come", h: "How come = Why، *بلا* قلب",
      why: [
        "`How come` تعني «لماذا؟» في الكلام اليومي، مع تعجب.",
        "والفرق المهم: بعدها **لا** نقلب الترتيب، بل جملة عادية: `How come you are late?`"
      ],
      show: [{ t: "compare", cols: [
        { h: "Why + قلب", c: "subj", en: ["{q:Why} {a:are} you late?"] },
        { h: "How come + بلا قلب", c: "accent", en: ["{q:How come} you {a:are} late?"] }
      ] }],
      check: { q: "How come ___ here?", o: ["are you", "you are"], a: 1, why: "بعد `How come` الترتيب العادي: `you are`." } },

    { k: "حوّل المغلق", h: "حوّل نعم/لا إلى سؤال يفتح الحديث",
      why: ["في المحادثة، تحويل السؤال المغلق إلى مفتوح يجعلك تبدو مهتمًا ويجعل الحوار أطول وأمتع."],
      show: [{ t: "trans", items: [
        { from: "Did you enjoy it?", to: "{q:What} {a:did} you {v:enjoy} most about it?" },
        { from: "Do you like your job?", to: "{q:What} {a:do} you {v:like} about your job?" }
      ] }],
      check: { q: "Make it open: \"Is your city nice?\"", o: ["Your city is nice?", "What's your city like?"], a: 1, why: "`What's … like?` يطلب وصفًا مفتوحًا." } }
  ],
  sum: [
    { h: "مفتوح", en: ["{q:What} {a:do} you {v:like} about it?"] },
    { h: "الرأي", en: ["{q:What} {a:do} you {v:think} of…?"] },
    { h: "حرف الجر", en: ["Who is it {k:for}? · Where are you {k:from}?"] },
    { h: "How come", en: ["{q:How come} you are late?"] }
  ]
};
