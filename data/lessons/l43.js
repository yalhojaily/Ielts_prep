window.LESSONS = window.LESSONS || {};
window.LESSONS[43] = {
  steps: [
    { k: "الفكرة", h: "تنقل الكلام *بكلماتك* أنت",
      why: [
        "الكلام المباشر ينقل الكلمات حرفيًا بين علامتي اقتباس. الكلام المنقول يحكي ما قيل بكلماتك، بلا علامات اقتباس.",
        "لأنك أنت المتكلم الآن، يجب أن تغيّر ما يتعلق بالمتكلم الأصلي: الضمائر، وكلمات الزمان والمكان، وغالبًا الزمن (الدرس 44)."
      ],
      show: [{ t: "trans", items: [{ from: "Ali said, “{s:I} {a:am} tired.”", to: "Ali said (that) {s:he} {a:was} tired.", chg: ["`I` ← `he`", "`am` ← `was`", "لا علامات اقتباس"] }] }],
      check: { q: "Sara: \"I like your car.\" → Sara said she liked ___ car.", o: ["your", "my", "her"], a: 1, why: "`your` في كلام سارة تعني سيارتي أنا، فأقول `my`." } },

    { k: "say أم tell", h: "tell + *شخص* دائمًا",
      why: [
        "`tell` يحتاج بعده مباشرة الشخص الذي سمع الكلام: `tell me, told her, told us`.",
        "`say` لا يأتي بعده شخص مباشرة. إذا أردت ذكر الشخص مع `say` تحتاج `to`: `said to me`. لذلك `He said me` خطأ."
      ],
      show: [{ t: "build", lab: "اختر الفعل",
        opts: [["said", "He {v:said} (that) he {a:was} busy.", "بلا شخص", 0], ["said to", "He {v:said} {k:to} {s:me} that he {a:was} busy.", "مع شخص يحتاج `to`", 0], ["told", "He {v:told} {s:me} (that) he {a:was} busy.", "الشخص مباشرة بعد `told`", 1]],
        groups: [{ h: "say", sub: "said · said to me" }, { h: "tell", sub: "told me · told her" }] },
        { t: "fix", items: [["He said me that he was busy.", "He {v:told} {s:me} that he was busy.", ""], ["She told that she was ill.", "She {v:said} that she was ill.", "`told` يحتاج شخصًا."]] }],
      check: { q: "She ___ us she had finished.", o: ["said", "told"], a: 1, why: "بعده شخص مباشرة (`us`) ← `told`." } },

    { k: "الزمان والمكان", h: "here ← there · tomorrow ← the next day",
      why: [
        "الكلمات مثل `here, now, today, tomorrow` مرتبطة بمكان المتكلم الأصلي ووقته. عندما تنقل الكلام لاحقًا أو في مكان آخر، تتغير.",
        "مثال: قال أمس «سأأتي غدًا». غدًا بالنسبة له = اليوم بالنسبة لك. لذلك نقول `the next day`."
      ],
      show: [{ t: "map", cols: [{ h: "مباشر ← منقول", c: "accent", k: "k", rows: [["now", "then"], ["today", "that day"], ["tomorrow", "the next day"], ["yesterday", "the day before"], ["here", "there"], ["this", "that"], ["next week", "the following week"]] }] }],
      check: { q: "\"I'll come tomorrow.\" → He said he would come ___.", o: ["tomorrow", "the next day"], a: 1, why: "`tomorrow` تصبح `the next day` في الكلام المنقول." } },

    { k: "that", h: "that اختيارية",
      why: [
        "بعد `said` و`told` يمكن ذكر `that` أو حذفها، والمعنى واحد.",
        "في الكلام اليومي تُحذف كثيرًا، وفي الكتابة الرسمية الأفضل ذكرها. وإذا كان الكلام ما زال صحيحًا (الأرض كروية) لا يلزم تغيير الزمن."
      ],
      show: [{ t: "ex", items: [["She said (that) she {a:was} ready.", "الصيغتان صحيحتان"], ["He said the Earth {a:is} round.", "حقيقة ثابتة ← لا تغيير"], ["She says she {v:likes} it.", "فعل النقل مضارع ← لا تغيير"]] }],
      check: { q: "Which is correct?", o: ["He said he was tired.", "He said that he was tired.", "Both are correct."], a: 2, why: "`that` اختيارية بعد `said`." } }
  ],
  sum: [
    { h: "الفكرة", en: ["“I'm tired.” → He said he {a:was} tired."] },
    { h: "say / tell", en: ["said (to me) · told {s:me}"] },
    { h: "الزمان والمكان", en: ["tomorrow → the next day · here → there"] },
    { h: "that", txt: "اختيارية" }
  ]
};

// تعمّق
window.LESSONS[43].steps.push(
  { k: "الضمائر", h: "من يتكلم الآن؟ غيّر الضمائر *حسب المنطق*",
    why: [
      "تغيير الضمائر ليس قاعدة آلية، بل منطق: اسأل «من يقصد المتكلم الأصلي؟» ثم اختر الضمير الذي يشير إليه **من وجهة نظرك أنت**.",
      "إذا قال لك سعد: «أحب سيارتك»، فـ «أنا» عنده = سعد ← `he`. و«سيارتك» = سيارتي أنا ← `my car`."
    ],
    show: [{ t: "build", lab: "اختر الجملة",
      opts: [
        ["Saad: “I like your car.”", "Saad said {s:he} liked {s:my} car.", "I = Saad ← he · your = أنا ← my", 0],
        ["Mona: “We're tired.”", "Mona said {s:they} were tired.", "we ← they", 0],
        ["Ali to Sara: “I'll call you.”", "Ali told Sara {s:he} would call {s:her}.", "I ← he · you ← her", 0],
        ["Ali: “This is my book.”", "Ali said {k:that} was {s:his} book.", "this ← that · my ← his", 0]
      ],
      groups: [{ h: "الضمير يتبع الشخص الذي يُقصد" }] }],
    check: { q: "Omar told me, \"I will help you.\" → Omar told me that ___ would help ___.", o: ["I / you", "he / me", "he / you"], a: 1, why: "`I` = عمر ← `he`، و`you` = أنا ← `me`." } },

  { k: "في سياق", h: "اقرأ: نقل محادثة",
    why: ["في الحياة وفي Speaking نحكي كثيرًا ما قاله الآخرون. لاحظ فعل النقل وتغيّر الضمائر والزمن والوقت في هذه الفقرة."],
    show: [{ t: "passage", h: "حكاية مكالمة",
      en: "Yesterday my manager called me. He {v:told} me that the company {v:was} opening a new office in Dammam, and he {v:said} that they {v:needed} someone with my experience. He {v:asked} me {k:if} I {a:would} {v:consider} moving there. I {v:said} I {v:needed} time to think, and he {v:told} me to give him an answer {k:the following week}.",
      ar: "أمس اتصل بي مديري. أخبرني أن الشركة ستفتح مكتبًا جديدًا في الدمام، وقال إنهم يحتاجون شخصًا بخبرتي. سألني إن كنت سأفكر في الانتقال إلى هناك. قلت إنني أحتاج وقتًا للتفكير، فطلب مني أن أعطيه جوابًا في الأسبوع التالي.",
      note: "`told me` (بعده شخص) و`said` (بلا شخص). الأزمنة رجعت خطوة، و`next week` صارت `the following week`." }],
    check: { q: "His actual words were probably: \"Give me an answer ___.\"", o: ["the following week", "next week"], a: 1, why: "في الكلام المباشر قال `next week`، وفي النقل صارت `the following week`." } }
);
