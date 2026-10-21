window.LESSONS = window.LESSONS || {};
window.LESSONS[44] = {
  steps: [
    { k: "الفكرة", h: "الزمن يرجع *خطوة* إلى الوراء",
      why: [
        "عندما تقول `He said…` فأنت تحكي عن الماضي. ما كان «الآن» بالنسبة له صار ماضيًا بالنسبة لك.",
        "لذلك نرجع كل زمن خطوة: المضارع ← ماضٍ، والماضي ← ماضٍ تام، و`will` ← `would`، و`can` ← `could`."
      ],
      show: [{ t: "map", cols: [
        { h: "الأزمنة", c: "accent", k: "a", rows: [["work", "worked"], ["am working", "was working"], ["worked", "had worked"], ["have worked", "had worked"]] },
        { h: "الأفعال الناقصة", c: "be", k: "a", rows: [["will", "would"], ["can", "could"], ["may", "might"], ["must", "had to / must"]] }
      ] }],
      check: { q: "\"I will come.\" → He said he ___ come.", o: ["will", "would", "can"], a: 1, why: "`will` ترجع خطوة فتصبح `would`." } },

    { k: "جرّب", h: "اختر الجملة وراقب الإرجاع",
      why: ["لاحظ أن الفعل الأول فقط في كل جملة هو الذي يرجع خطوة، والباقي يبقى كما هو."],
      show: [{ t: "build", lab: "اختر الجملة الأصلية",
        opts: [["I like it.", "He said he {v:liked} it.", "`like` ← `liked`", 0], ["I'm learning Spanish.", "She said she {a:was} {v:learning} Spanish.", "`am` ← `was`", 0], ["We've finished.", "They said they {a:had} {v:finished}.", "`have` ← `had`", 0],
               ["I saw it.", "He said he {a:had} {v:seen} it.", "`saw` ← `had seen`", 0], ["I can help.", "He said he {a:could} {v:help}.", "`can` ← `could`", 0]],
        groups: [{ h: "خطوة واحدة إلى الوراء" }] }],
      check: { q: "\"We have finished.\" → They said they ___.", o: ["have finished", "had finished"], a: 1, why: "المضارع التام يرجع إلى الماضي التام." } },

    { k: "ما لا يتغير", h: "أفعال وصلت *آخر* الخط",
      why: [
        "بعض الصيغ لا يوجد خطوة بعدها، فتبقى كما هي: `would, could, should, might, had + v3`.",
        "و`must` تبقى `must` أو تصبح `had to`."
      ],
      show: [{ t: "ex", items: [["“You {a:should} rest.” → She said I {a:should} rest.", "لا تغيير"], ["“I {a:must} leave.” → He said he {a:had to} / {a:must} leave.", "الصيغتان صحيحتان"], ["“I {a:had} {v:eaten}.” → He said he {a:had} {v:eaten}.", "لا خطوة بعد الماضي التام"]] }],
      check: { q: "\"You should see a doctor.\" → She said I ___ see a doctor.", o: ["should", "shall", "should have"], a: 0, why: "`should` لا تتغير." } },

    { k: "متى لا نرجع", h: "حقيقة ما زالت صحيحة",
      why: [
        "الإرجاع **صحيح دائمًا** ولن يُحسب خطأ. لكن يمكن ترك الزمن كما هو في حالتين:",
        "إذا كانت المعلومة ما زالت صحيحة الآن (ما زالت طبيبة)، أو إذا كان فعل النقل في المضارع (`He says…`)."
      ],
      show: [{ t: "compare", cols: [
        { h: "ما زال صحيحًا ← اختياري", c: "subj", en: ["She said she {v:is} / {v:was} a doctor."] },
        { h: "فعل النقل مضارع ← لا إرجاع", c: "verb", en: ["He {v:says} he {a:is} tired."] }
      ] }],
      check: { q: "He says he ___ tired. (right now)", o: ["is", "was"], a: 0, why: "فعل النقل `says` في المضارع ← لا إرجاع." } },

    { k: "مع الزمان", h: "الزمن وكلمات الوقت *معًا*",
      why: ["لا تنسَ أن تغيّر الزمن وكلمات الوقت معًا، وإلا تناقضت الجملة: `He said he is going yesterday` جملة متناقضة."],
      show: [{ t: "fix", items: [["He said that he is going yesterday.", "He said that he {a:was} going {k:the day before}.", ""], ["They said they will come tomorrow.", "They said they {a:would} come {k:the next day}.", ""]] }],
      check: { q: "\"I can't swim.\" → She said she ___.", o: ["can't swim", "couldn't swim"], a: 1, why: "`can't` ترجع إلى `couldn't`." } }
  ],
  sum: [
    { h: "خطوة للوراء", en: ["work → worked → had worked"] },
    { h: "الناقصة", en: ["will → would · can → could · may → might"] },
    { h: "لا تتغير", en: ["would · could · should · might"] },
    { h: "اختياري", txt: "إذا كان الكلام ما زال صحيحًا" }
  ]
};
