window.UNITS = window.UNITS || {};
window.UNITS[90] = {
  id: 90,
  title: "Shortening infinitives",
  ar: "اختصار المصدر (الاكتفاء بـ to)",
  idea: "عندما يكون الفعل بعد `to` واضحًا من السياق، نحذفه ونكتفي بـ `to`: `I'd like to (go)`. هذا شائع بعد أفعال مثل `want, would like, hope, try, need, have to, used to, ought to`.",
  uses: [
    ["بعد want / would like", "“Come with us.” “I'd like to, but I'm busy.”"],
    ["بعد try / hope / plan", "I'll finish it if I can. I'll try to."],
    ["بعد have to / need to", "I don't want to go, but I have to."],
    ["بعد used to", "I don't smoke now, but I used to."]
  ],
  formula: [
    ["قاعدة", "verb + {a:to} ({x:verb} deleted)"],
    ["أمثلة", "I {v:want} {a:to}. · You don't {v:have} {a:to}. · I'd {v:love} {a:to}."],
    ["نفي", "I {v:tried} {n:not} {a:to}."]
  ],
  notes: [
    { title: "be لا تُحذف",
      body: "إذا كان الفعل المحذوف `be` نحتفظ بها غالبًا.",
      en: "“Are you a manager?” “No, but I'd like {a:to be}.”" },
    { title: "بلا to مع بعض الأفعال",
      body: "مع `like, want` في جملة `if / when` يمكن حذف `to` أيضًا: `Come if you want (to)`.",
      en: "You can leave whenever you {v:want}." }
  ],
  examples: [
    ["“Did you call him?” “No, I forgot {a:to}.”", "هل اتصلت به؟ لا، نسيت."],
    ["I'd love to visit Japan, and I hope {a:to} next year.", "أحب زيارة اليابان، وأتمنى ذلك العام القادم."],
    ["You don't have to come if you don't want {a:to}.", "لست مضطرًا للحضور إن لم ترد."],
    ["I used to live in Jeddah, but I don't anymore.", "كنت أسكن في جدة، لكن لم أعد."]
  ],
  mistakes: [
    ["“Will you help?” “I'd love.”", "“I'd love to.”", "نحتفظ بـ to."],
    ["I wanted to go, but I didn't able.", "I wanted to go, but I wasn't able to.", "`wasn't able to`."],
    ["I don't want it to. (= go)", "I don't want to.", "لا نضيف it."]
  ],
  ielts: {
    text: "في **Speaking** هذا الاختصار طبيعي جدًا ويجنبك التكرار: `I'd like to, but...`. وهو يساعدك على الإجابة بسلاسة دون تكرار السؤال.",
    en: "Would I like to live abroad? Yes, I'd love to, at least for a few years."
  },
  questions: [
    { t: "mcq", q: "“Would you like to come?” “I'd love ___, but I can't.”", o: ["it", "to", "-", "so"], a: 1, why: "`I'd love to`." },
    { t: "mcq", q: "I don't want to go, but I ___.", o: ["have", "have to", "must to", "need"], a: 1, why: "`have to`." },
    { t: "mcq", q: "I don't play tennis now, but I ___.", o: ["used", "used to", "use to", "was used to"], a: 1, why: "`used to`." },
    { t: "mcq", q: "“Are you a doctor?” “No, but I'd like ___ one.”", o: ["to", "to be", "being", "-"], a: 1, why: "be تبقى: `to be`." },
    { t: "fill", q: "“Did you lock the door?” “Oh no, I forgot ___!”", a: ["to"], why: "`forgot to`." },
    { t: "fill", q: "You can come with us if you want ___.", a: ["to"], why: "`want to`." },
    { t: "fill", q: "I tried to fix it, but I wasn't able ___.", a: ["to"], why: "`able to`." },
    { t: "fix", q: "“Can you help me?” “I'd love it.”", a: ["I'd love to.", "I would love to."], why: "`I'd love to`." },
    { t: "fix", q: "I wanted to finish, but I didn't able.", a: ["I wanted to finish, but I wasn't able to.", "I wanted to finish, but I couldn't."], why: "`wasn't able to`." },
    { t: "fix", q: "I don't need to come, but I want it.", a: ["I don't need to come, but I want to."], why: "`want to`." },
    { t: "rewrite", q: "I'm not going to the party, but I would like to go to the party.", ask: "اختصر المكرر.", a: ["I'm not going to the party, but I would like to.", "I'm not going to the party, but I'd like to."], why: "نكتفي بـ to." },
    { t: "rewrite", q: "I don't live in Riyadh now, but I used to live in Riyadh.", ask: "اختصر المكرر.", a: ["I don't live in Riyadh now, but I used to."], why: "`used to`." }
  ]
};
