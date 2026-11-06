window.LESSONS = window.LESSONS || {};
window.LESSONS[77] = {
  steps: [
    { k: "الفكرة", h: "ضمير قبل الفعل · ضمير *بعده*",
      why: [
        "للضمائر شكلان: **ضمير الفاعل** قبل الفعل (من يفعل؟): `I, he, she, we, they`.",
        "و**ضمير المفعول** بعد الفعل أو حرف الجر (على من وقع؟): `me, him, her, us, them`. الشكل يتغير حسب مكانه في الجملة."
      ],
      show: [{ t: "map", cols: [{ h: "فاعل ← مفعول", c: "subj", k: "s", rows: [["I", "me"], ["he", "him"], ["she", "her"], ["we", "us"], ["they", "them"], ["you · it", "you · it"]] }] },
        { t: "big", items: ["{s:She} likes {o:him}, but {s:he} doesn't like {o:her}."] }],
      check: { q: "Can you help ___?", o: ["we", "us"], a: 1, why: "بعد الفعل ← ضمير مفعول `us`." } },

    { k: "لا تحذف الفاعل", h: "الفاعل *لا يُحذف* أبدًا",
      why: [
        "في العربية الضمير مختبئ في الفعل: «ذهبتُ» (التاء = أنا). في الإنجليزية الفعل لا يحمل الضمير، لذلك يجب كتابته دائمًا: `I went`.",
        "حتى في الطقس والوقت نحتاج فاعلًا شكليًا هو `It`: «الجو حار» = `It is hot`."
      ],
      show: [{ t: "fix", items: [["Is very cold today.", "{s:It} is very cold today.", ""], ["Went to the market.", "{s:I} went to the market.", ""]] }],
      check: { q: "___ 5 o'clock now.", o: ["Is", "It's"], a: 1, why: "الوقت يحتاج فاعلًا شكليًا `It`." } },

    { k: "لا تكرر", h: "ولا تكرر الفاعل *بضمير*",
      why: [
        "خطأ عكسي: ذكر الفاعل ثم تكراره بضمير: `My father he is a doctor`. في الإنجليزية فاعل واحد يكفي.",
        "وعند الجمع بين شخصين: ضع نفسك **أخيرًا** وبضمير الفاعل: `He and I`، لا `Me and him`."
      ],
      show: [{ t: "fix", items: [["My father he is a doctor.", "{s:My father} is a doctor.", ""], ["Me and him went to the park.", "{s:He and I} went to the park.", ""]] }],
      check: { q: "___ went to the meeting.", o: ["Me and Ali", "Ali and I"], a: 1, why: "فاعل ← `I`، ونضع أنفسنا أخيرًا." } },

    { k: "it للأشياء", h: "السيارة = it، لا she",
      why: [
        "في العربية كل شيء مذكر أو مؤنث: «السيارة… هي». في الإنجليزية الأشياء **بلا جنس**: `it` للمفرد و`they` للجمع.",
        "و`he / she` للأشخاص فقط. وإذا لم تعرف جنس الشخص نستخدم `they`."
      ],
      show: [{ t: "compare", cols: [
        { h: "شيء ← it", c: "subj", en: ["I bought a car. {s:It} is blue.", "The book is good. {s:It}'s about history."] },
        { h: "شخص غير معروف ← they", c: "accent", en: ["If someone calls, tell {s:them} I'm out."] }
      ] }],
      check: { q: "I love this city. ___ is very green.", o: ["She", "It"], a: 1, why: "المدينة شيء ← `It`." } }
  ],
  sum: [
    { h: "فاعل", en: ["I · he · she · we · they"] },
    { h: "مفعول", en: ["me · him · her · us · them"] },
    { h: "لا تحذف", en: ["{s:It} is hot. · {s:I} went."] },
    { h: "الأشياء", en: ["it / they (لا he / she)"] }
  ]
};

// طبّق على نفسك
window.LESSONS[77].apply = [
  {"p": "اكتب ثلاث جمل عن أصدقائك بضمائر الفاعل والمفعول.", "use": "{s:She} {v:helped} {o:me}. · {s:I} {v:called} {o:them}.", "m": ["My friend Sara helped me with my essay. I thanked her. We often study together, and our teacher likes us."], "c": [["ضمير مفعول بعد الفعل (`me, him, her, us, them`)", "\\b\\w+\\s+(me|him|her|us|them)\\b"], ["لم تكتب `me and him went` أو `between you and I`", "!\\b(me and \\w+ (went|are|were)|between you and I)\\b"]]},
  {"p": "اكتب جملة بـ `it` كفاعل للطقس أو الوقت.", "use": "{s:It}{a:'s} cold. {s:It} {v:takes} …", "m": ["It's very hot today, and it takes an hour to get to the city centre."], "c": [["`It + is / takes …`", "\\bit(\\s+is|'s|\\s+takes|\\s+was)\\b"]]}
];
