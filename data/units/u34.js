window.UNITS = window.UNITS || {};
window.UNITS[34] = {
  id: 34,
  title: "Forming questions",
  ar: "تكوين الأسئلة",
  idea: "القاعدة العامة لكل الأزمنة: **نقدّم الفعل المساعد على الفاعل**. إذا كان في الجملة فعل مساعد (`be, have, will, can`...) نقدّمه. وإذا لم يكن، نضيف `do / does / did`.",
  uses: [
    ["جملة فيها be أو مساعد: نقلب", "She is tired. → Is she tired?"],
    ["جملة فيها فعل ناقص: نقلب", "You can swim. → Can you swim?"],
    ["جملة بلا مساعد: نضيف do / does / did", "He works. → Does he work?"]
  ],
  formula: [
    ["be", "{a:Are} {s:you} ready? · {a:Was} {s:it} expensive?"],
    ["مساعد", "{a:Have} {s:you} {v:finished}? · {a:Will} {s:they} {v:come}?"],
    ["modal", "{a:Can} {s:she} {v:drive}? · {a:Should} {s:I} {v:call}?"],
    ["do", "{a:Do} {s:you} {v:like} it? · {a:Did} {s:he} {v:go}?"]
  ],
  notes: [
    { title: "مساعد واحد فقط يتقدم",
      body: "إذا كان هناك أكثر من مساعد، يتقدم **الأول** فقط.",
      en: "She has been working. → {a:Has} she {a:been} {v:working}?" },
    { title: "have بمعنى يملك",
      body: "`have` بمعنى الملكية تأخذ `do`: `Do you have a car?` (في البريطانية القديمة `Have you got...?`).",
      en: "{a:Do} you {v:have} a pen? · {a:Have} you {v:got} a pen?" },
    { title: "السؤال المنفي",
      body: "للتعبير عن التعجب أو انتظار إجابة بنعم: `Don't you...? / Isn't it...?`",
      en: "{a:Don't} you {v:like} it? · {a:Isn't} it beautiful?" }
  ],
  examples: [
    ["{a:Is} {s:the bank} open today?", "هل البنك مفتوح اليوم؟"],
    ["{a:Have} {s:you} {v:seen} my keys?", "هل رأيت مفاتيحي؟"],
    ["{a:Could} {s:you} {v:help} me?", "هل يمكنك مساعدتي؟"],
    ["{a:Does} {s:this bus} {v:go} to the airport?", "هل تذهب هذه الحافلة إلى المطار؟"],
    ["{a:Were} {s:they} {v:sleeping}?", "هل كانوا نائمين؟"]
  ],
  mistakes: [
    ["You are coming?", "Are you coming?", "في الكتابة والكلام الصحيح نقدم `Are`. الترتيب الخبري مع نبرة السؤال عامي."],
    ["Do you can help me?", "Can you help me?", "مع الفعل الناقص لا نضيف do."],
    ["Have you a car?", "Do you have a car?", "`have` للملكية تأخذ `do` غالبًا."],
    ["Has been she working?", "Has she been working?", "يتقدم المساعد الأول فقط."]
  ],
  ielts: {
    text: "في **Speaking Part 3** قد تطرح أسئلة بلاغية تنظم بها إجابتك: `Is it really necessary for...? I'd say...`. ويجب أن تكون صياغتها صحيحة. وفي **Listening** فهم السؤال يساعدك على توقع الإجابة.",
    en: "But does technology really make us more productive? I'm not entirely sure."
  },
  questions: [
    { t: "mcq", q: "___ you finished your homework?", o: ["Do", "Have", "Are", "Did"], a: 1, why: "المضارع التام: `Have`." },
    { t: "mcq", q: "___ she speak Turkish?", o: ["Is", "Does", "Do", "Has"], a: 1, why: "فعل أساسي بلا مساعد مع she: `Does`." },
    { t: "mcq", q: "___ they at home last night?", o: ["Did", "Were", "Was", "Do"], a: 1, why: "be الماضي مع they: `Were`." },
    { t: "mcq", q: "___ I open the window?", o: ["Do", "Shall", "Am", "Does"], a: 1, why: "عرض: `Shall I`." },
    { t: "mcq", q: "___ he been waiting long?", o: ["Is", "Has", "Did", "Was"], a: 1, why: "`Has he been waiting`." },
    { t: "fill", q: "___ you ever been to Egypt?", a: ["Have"], why: "`Have you ever been`." },
    { t: "fill", q: "___ it rain a lot in your city?", a: ["Does"], why: "مضارع بسيط مع it: `Does`." },
    { t: "fill", q: "___ you be at the meeting tomorrow?", a: ["Will"], why: "مستقبل: `Will`." },
    { t: "fix", q: "Do you can drive?", a: ["Can you drive?"], why: "مع `can` لا نضيف do." },
    { t: "fix", q: "Did she went to school?", a: ["Did she go to school?"], why: "بعد `Did` الفعل الأصلي." },
    { t: "fix", q: "Is working your brother today?", a: ["Is your brother working today?"], why: "الترتيب: مساعد + فاعل + فعل." },
    { t: "rewrite", q: "They have been married for 10 years.", ask: "حوّل إلى سؤال جوابه نعم أو لا.", a: ["Have they been married for 10 years?", "Have they been married for ten years?"], why: "نقدم `Have` فقط." },
    { t: "rewrite", q: "He should apologise.", ask: "حوّل إلى سؤال جوابه نعم أو لا.", a: ["Should he apologise?", "Should he apologize?"], why: "نقدم الفعل الناقص `Should`." }
  ]
};
