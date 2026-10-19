window.UNITS = window.UNITS || {};
window.UNITS[38] = {
  id: 38,
  title: "Indirect questions",
  ar: "الأسئلة غير المباشرة",
  idea: "السؤال غير المباشر أكثر **تهذيبًا**، ويبدأ بعبارة مثل `Could you tell me...?` أو `Do you know...?`. والقاعدة المهمة: الجزء الثاني يأخذ **ترتيب الجملة الخبرية** (الفاعل قبل الفعل)، بلا `do / does / did`.",
  uses: [
    ["سؤال مهذب لشخص غريب", "Could you tell me where the station is?"],
    ["سؤال جوابه نعم أو لا: if / whether", "Do you know if the shop is open?"],
    ["التعبير عن عدم المعرفة", "I wonder why he left."]
  ],
  formula: [
    ["مباشر", "{q:Where} {a:is} {s:the bank}?"],
    ["غير مباشر", "Could you tell me {q:where} {s:the bank} {a:is}?"],
    ["مع do", "{q:What time} {a:does} {s:it} {v:open}? → Do you know {q:what time} {s:it} {v:opens}?"],
    ["نعم/لا", "{a:Is} {s:he} here? → Do you know {x:if / whether} {s:he} {a:is} here?"]
  ],
  notes: [
    { title: "تختفي do / does / did",
      body: "الفعل يأخذ صيغته العادية: `does it open` تصبح `it opens`، و`did he go` تصبح `he went`.",
      en: "I wonder {q:where} he {v:went}. (not: where did he go)" },
    { title: "علامة الاستفهام",
      body: "إذا بدأت بـ `Could you tell me / Do you know` ننهي بعلامة استفهام. وإذا بدأت بـ `I wonder / I don't know` ننهي بنقطة.",
      en: "I'm not sure {q:what} it {v:means}." },
    { title: "عبارات البداية",
      body: "`Could you tell me..., Do you know..., Can I ask..., I was wondering..., Do you have any idea...`",
      en: "Do you have any idea {q:how much} it {v:costs}?" }
  ],
  examples: [
    ["Could you tell me {q:what time} {s:the museum} {v:closes}?", "هل يمكنك إخباري متى يغلق المتحف؟"],
    ["Do you know {x:if} {s:there}'s a pharmacy near here?", "هل تعرف إن كانت هناك صيدلية قريبة؟"],
    ["I wonder {q:why} {s:she} {v:didn't come}.", "أتساءل لماذا لم تأتِ."],
    ["Can I ask {q:how much} {s:you} {v:paid}?", "هل لي أن أسأل كم دفعت؟"],
    ["I don't know {x:whether} {s:I} {a:should} {v:accept}.", "لا أعرف هل يجب أن أقبل."]
  ],
  mistakes: [
    ["Can you tell me where is the station?", "Can you tell me where the station is?", "الترتيب الخبري: الفاعل قبل `is`."],
    ["Do you know what time does the bank open?", "Do you know what time the bank opens?", "تختفي `does` ويأخذ الفعل s."],
    ["I wonder where did she go.", "I wonder where she went.", "لا `did`، والفعل بالماضي."],
    ["Do you know is he coming?", "Do you know if he is coming?", "لسؤال نعم/لا نضيف `if`."]
  ],
  ielts: {
    text: "في **Speaking** اطلب التوضيح بأدب: `Could you tell me what you mean by...?`. وفي **Writing Task 1 (General)** الرسائل الرسمية تحتاج هذه الصيغة: `I would be grateful if you could tell me when...`.",
    en: "I would be grateful if you could let me know whether the position is still available."
  },
  questions: [
    { t: "mcq", q: "Could you tell me where ___?", o: ["is the hotel", "the hotel is", "does the hotel", "the hotel does"], a: 1, why: "الترتيب الخبري: `the hotel is`." },
    { t: "mcq", q: "Do you know what time ___?", o: ["does the film start", "the film starts", "the film does start", "starts the film"], a: 1, why: "`the film starts`." },
    { t: "mcq", q: "I wonder ___ he will come.", o: ["that", "if", "does", "what if"], a: 1, why: "سؤال نعم/لا: `if`." },
    { t: "mcq", q: "Can you tell me how much ___?", o: ["did it cost", "it cost", "cost it", "does it cost"], a: 1, why: "`it cost`." },
    { t: "fill", q: "Do you know ___ she is married? (yes/no)", a: ["if", "whether"], why: "`if / whether`." },
    { t: "fill", q: "I'm not sure what this word ___ (mean).", a: ["means"], why: "`this word means`." },
    { t: "fill", q: "Could you tell me where I ___ (can) park?", a: ["can"], why: "`where I can park`." },
    { t: "fix", q: "Can you tell me where is the toilet?", a: ["Can you tell me where the toilet is?"], why: "الفاعل قبل `is`." },
    { t: "fix", q: "Do you know when does the shop close?", a: ["Do you know when the shop closes?"], why: "تختفي `does`." },
    { t: "fix", q: "I don't know where did I put my keys.", a: ["I don't know where I put my keys."], why: "لا `did`." },
    { t: "rewrite", q: "Where is the nearest bank? (Begin with: Could you tell me ...)", ask: "حوّل إلى سؤال غير مباشر.", a: ["Could you tell me where the nearest bank is?"], why: "الترتيب الخبري." },
    { t: "rewrite", q: "Does this train stop in Jeddah? (Begin with: Do you know ...)", ask: "حوّل إلى سؤال غير مباشر.", a: ["Do you know if this train stops in Jeddah?", "Do you know whether this train stops in Jeddah?"], why: "`if` + الترتيب الخبري + `stops`." },
    { t: "rewrite", q: "Why did he resign? (Begin with: I wonder ...)", ask: "حوّل إلى سؤال غير مباشر.", a: ["I wonder why he resigned."], why: "لا `did`، والفعل بالماضي." }
  ]
};
