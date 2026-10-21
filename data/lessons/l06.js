window.LESSONS = window.LESSONS || {};
window.LESSONS[6] = {
  steps: [
    { k: "الفكرة", h: "الأمر = الفعل وحده في *أول* الجملة",
      why: [
        "في صيغة الأمر نخاطب الشخص الذي أمامنا مباشرة، فهو معروف، لذلك نحذف الفاعل `you`.",
        "ويأتي الفعل في صورته الأصلية بدون `to` وبدون `s`: `Open the door.`"
      ],
      show: [{ t: "trans", items: [{ from: "{s:You} {v:open} the door.", to: "{v:Open} the door.", chg: ["نحذف `you`", "الفعل في أول الجملة"] }] },
        { t: "fix", items: [["To open the door.", "{v:Open} the door.", "لا نستخدم `to` في الأمر."]] }],
      check: { q: "Choose the correct instruction.", o: ["You read the question carefully.", "Read the question carefully.", "To read the question carefully."], a: 1, why: "الأمر يبدأ بالفعل الأصلي مباشرة: `Read`." } },

    { k: "متى نستخدمه", h: "أربع مواقف يومية",
      why: ["كل هذه المواقف فيها شخص يوجّه كلامه مباشرة لآخر: يعلّمه، أو يحذّره، أو يدعوه، أو يقترح عليه."],
      show: [{ t: "cards", items: [
        { i: "pin", h: "تعليمات", en: "Turn left at the lights." },
        { i: "alert", h: "تحذير", en: "Be careful! The floor is wet." },
        { i: "gift", h: "دعوة أو عرض", en: "Have some more tea." },
        { i: "users", h: "اقتراح جماعي", en: "Let's start the meeting." }
      ] }],
      check: { q: "Which one is a warning?", o: ["Have a seat.", "Watch out!", "Let's go."], a: 1, why: "`Watch out!` = انتبه، تحذير." } },

    { k: "النهي", h: "لا تفعل = Don't + الفعل",
      why: [
        "للنهي نستخدم `Don't` قبل الفعل الأصلي. لا نقول `Not touch` ولا `Don't to touch`.",
        "ومع الصفات (`late, nervous, careful`) نحتاج الفعل `be`: الأمر `Be careful`، والنهي `Don't be late`. هذا الموضع الوحيد الذي يجتمع فيه `do` مع `be`."
      ],
      show: [{ t: "build", lab: "أمر أم نهي؟",
        opts: [
          ["أمر", "{v:Touch} it.", "", 0], ["نهي", "{a:Don't} {v:touch} it.", "", 1],
          ["أمر + صفة", "{v:Be} patient.", "مع الصفة نحتاج `be`", 0], ["نهي + صفة", "{a:Don't} {v:be} late.", "`Don't be` وليس `Not be`", 1]
        ], start: 1,
        groups: [{ h: "أمر", res: "{v:Verb} …" }, { h: "نهي", res: "{a:Don't} + {v:verb}" }] }],
      check: { q: "___ late for the exam!", o: ["Not be", "Don't be", "Don't"], a: 1, why: "`late` صفة، فالنهي `Don't be late`." } },

    { k: "Let's", h: "اقتراح لنا جميعًا: Let's",
      why: [
        "الأمر العادي موجّه لغيرك. أما إذا كنت أنت معهم في الفعل فتقول `Let's` (= `Let us`): هيا بنا.",
        "بعدها الفعل الأصلي بدون `to`. والنفي يكون بـ `not` بعدها مباشرة: `Let's not`، وليس `Let's don't`."
      ],
      show: [{ t: "formula", rows: [
        ["اقتراح", "{a:Let's} {v:take} a break."],
        ["نفي الاقتراح", "{a:Let's} {n:not} {v:argue} about it."]
      ] }, { t: "fix", items: [["Let's to go.", "{a:Let's} {v:go}.", ""], ["Let's don't wait.", "{a:Let's} {n:not} {v:wait}.", ""]] }],
      check: { q: "It's raining. ___ go out.", o: ["Let's not", "Let's don't", "Don't let's to"], a: 0, why: "نفي `Let's` يكون بـ `Let's not`." } },

    { k: "بأدب", h: "الأمر قد يبدو *حادًا*",
      why: [
        "الأمر المباشر مناسب للتعليمات والأصدقاء. لكن عند طلب شيء من زميل أو موظف قد يبدو فظًا.",
        "خفّفه بـ `please`، أو حوّله إلى سؤال مهذب: `Could you…?` (التفصيل في الدرس 58)."
      ],
      show: [{ t: "chain", items: [
        { h: "مباشر", en: "Send me the file." },
        { h: "ألطف", en: "Please send me the file." },
        { h: "الأكثر أدبًا", en: "Could you send me the file, please?" }
      ] }],
      check: { q: "Which is most polite with your manager?", o: ["Give me a day off.", "Could you give me a day off, please?"], a: 1, why: "السؤال بـ `Could you…please?` أكثر أدبًا من الأمر المباشر." } }
  ],
  sum: [
    { h: "أمر", en: ["{v:Close} the window.", "{v:Be} quiet."] },
    { h: "نهي", en: ["{a:Don't} {v:close} it.", "{a:Don't} {v:be} late."] },
    { h: "اقتراح", en: ["{a:Let's} {v:go}.", "{a:Let's} {n:not} {v:wait}."] },
    { h: "بأدب", en: ["Please sit down.", "Could you…?"] }
  ]
};
