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
