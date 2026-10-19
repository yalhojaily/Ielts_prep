window.UNITS = window.UNITS || {};
window.UNITS[10] = {
  id: 10,
  title: "The past continuous",
  ar: "الماضي المستمر",
  idea: "الماضي المستمر يصف حدثًا كان **جاريًا** في لحظة معينة في الماضي. صيغته `was / were` + الفعل مع `-ing`. ويأتي كثيرًا مع الماضي البسيط: حدث طويل جارٍ (مستمر) قطعه حدث قصير (بسيط).",
  uses: [
    ["حدث جارٍ في وقت محدد", "At 9 p.m. I was watching the match."],
    ["حدث طويل قطعه حدث قصير", "I was driving when my phone rang."],
    ["حدثان جاريان في الوقت نفسه", "She was cooking while he was cleaning."],
    ["خلفية القصة (وصف المشهد)", "The sun was shining and people were walking by the sea."]
  ],
  formula: [
    ["إثبات", "{s:I / he / she / it} {a:was} {v:working} · {s:you / we / they} {a:were} {v:working}"],
    ["نفي", "{s:She} {a:wasn't} {v:listening}. · {s:They} {a:weren't} {v:sleeping}."],
    ["سؤال", "{a:Were} {s:you} {v:sleeping}? · {q:What} {a:was} {s:he} {v:doing}?"]
  ],
  notes: [
    { title: "when و while",
      body: "`when` غالبًا قبل الحدث القصير (بسيط)، و`while` قبل الحدث الطويل (مستمر).",
      en: "I {a:was} {v:reading} {x:when} the lights {v:went} out. · {x:While} I {a:was} {v:reading}, the lights {v:went} out." },
    { title: "الفرق في المعنى",
      body: "`When he arrived, we had dinner` = وصل ثم تعشينا. `When he arrived, we were having dinner` = كنا في منتصف العشاء عند وصوله.",
      en: "When he {v:arrived}, we {a:were} {v:having} dinner." },
    { title: "أفعال الحالة لا تأتي هنا",
      body: "كما في المضارع المستمر: `I knew` وليس `I was knowing`.",
      en: "I {v:wanted} to leave. (not: I was wanting)" }
  ],
  examples: [
    ["{s:I} {a:was} {v:studying} when you {v:called}.", "كنت أذاكر عندما اتصلت."],
    ["{s:They} {a:were} {v:living} in Dubai at that time.", "كانوا يسكنون في دبي في ذلك الوقت."],
    ["{q:What} {a:were} {s:you} {v:doing} at 8 o'clock?", "ماذا كنت تفعل في الساعة الثامنة؟"],
    ["{s:She} {v:cut} her finger while she {a:was} {v:cooking}.", "جرحت إصبعها بينما كانت تطبخ."],
    ["{s:It} {a:wasn't} {v:raining} when we {v:left}.", "لم تكن تمطر عندما غادرنا."]
  ],
  mistakes: [
    ["I was watch TV when he came.", "I was watching TV when he came.", "بعد `was` في هذه الصيغة نحتاج `-ing`."],
    ["When I was arriving, she left.", "When I arrived, she was leaving. / When I arrived, she left.", "الوصول حدث قصير، فيأتي بالماضي البسيط."],
    ["We was playing football.", "We were playing football.", "مع `we` نستخدم `were`."],
    ["I was knowing the answer.", "I knew the answer.", "`know` فعل حالة."]
  ],
  ielts: {
    text: "في **Speaking Part 2** ابدأ قصتك بوصف الخلفية بالماضي المستمر ثم انتقل إلى الأحداث بالماضي البسيط. هذا التنويع يُظهر للممتحن أنك تتحكم في الأزمنة.",
    en: "I was walking home from work when I noticed a small bookshop that I had never seen before."
  },
  questions: [
    { t: "mcq", q: "I ___ dinner when the phone rang.", o: ["cooked", "was cooking", "were cooking", "am cooking"], a: 1,
      why: "حدث طويل جارٍ قطعه رنين الهاتف: `was cooking`." },
    { t: "mcq", q: "While we ___ TV, the power went off.", o: ["watched", "was watching", "were watching", "watching"], a: 2,
      why: "`while` + الحدث الطويل، و`we` تأخذ `were`." },
    { t: "mcq", q: "She ___ her ankle while she was running.", o: ["was hurting", "hurt", "hurts", "were hurt"], a: 1,
      why: "الحدث القصير يأتي بالماضي البسيط: `hurt`." },
    { t: "mcq", q: "What ___ at 10 o'clock last night?", o: ["did you do", "were you doing", "you were doing", "was you doing"], a: 1,
      why: "حدث جارٍ في وقت محدد: `were you doing`." },
    { t: "fill", q: "At 7 a.m. I ___ (drive) to work.", a: ["was driving"],
      why: "حدث جارٍ في وقت محدد: `was driving`." },
    { t: "fill", q: "The children ___ (play) in the garden when it started to rain.", a: ["were playing"],
      why: "الفاعل جمع: `were playing`." },
    { t: "fill", q: "I ___ (not / listen) when the teacher explained the rule.", a: ["wasn't listening", "was not listening"],
      why: "نفي: `wasn't listening`." },
    { t: "fill", q: "When I opened the door, my brother ___ (sleep).", a: ["was sleeping"],
      why: "كان في منتصف النوم عند فتح الباب: `was sleeping`." },
    { t: "fix", q: "They was waiting for the bus.", a: ["They were waiting for the bus."],
      why: "مع `They` نستخدم `were`." },
    { t: "fix", q: "I was read a book when he called.", a: ["I was reading a book when he called."],
      why: "بعد `was` نحتاج `reading`." },
    { t: "fix", q: "While I walked home, I was seeing an accident.", a: ["While I was walking home, I saw an accident."],
      why: "المشي حدث طويل (مستمر)، ورؤية الحادث حدث قصير (بسيط)." },
    { t: "rewrite", q: "She was working. (Make a question beginning with: What ...)", ask: "اكتب سؤالًا عن الجزء الناقص.",
      a: ["What was she doing?"],
      why: "السؤال عن الفعل نفسه: `What was she doing?`" },
    { t: "rewrite", q: "I was having a shower. The doorbell rang. (Join with: when)", ask: "اربط الجملتين بالكلمة المعطاة.",
      a: ["I was having a shower when the doorbell rang."],
      why: "الحدث الطويل أولًا، ثم `when` + الحدث القصير." }
  ]
};
