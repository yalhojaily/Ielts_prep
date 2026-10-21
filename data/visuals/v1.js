// الرسوم التوضيحية للقواعد 1–30
window.VISUALS = window.VISUALS || {};
Object.assign(window.VISUALS, {

1: [
  { type: "timeline", title: "أين يقع المضارع البسيط على خط الزمن؟",
    marks: [
      { k: "repeat", from: -0.9, to: 0.9, n: 7, label: "I drink coffee every day." },
      { k: "span", from: -0.95, to: 0.95, tone: "alt", label: "She works in a bank." }
    ],
    caption: "النقاط المتكررة = **عادة**، والشريط الممتد = **حقيقة أو وضع دائم**. كلاهما يغطي الماضي والحاضر والمستقبل، لذلك لا نربطه بلحظة «الآن»." },
  { type: "flow", title: "كيف أكتب الفعل؟",
    steps: [
      { q: "الفاعل `I / you / we / they` أو جمع؟", yes: "{v:work} (بلا s)" },
      { q: "الفعل ينتهي بـ `s, sh, ch, x, o`؟", yes: "{v:watches} · {v:goes}" },
      { q: "ينتهي بحرف ساكن + `y`؟", yes: "{v:study} → {v:studies}" }
    ],
    "else": "{v:works} · {v:plays}" }
],

2: [
  { type: "transform", title: "الـ s تنتقل إلى does",
    rows: [
      { label: "إثبات", words: ["s:He", "v:works", "here."], arrow: "نفي" },
      { label: "نفي", words: ["s:He", "+a:doesn't", "v:work", "here."] }
    ],
    links: [[0, 1, 1, "s"], [0, 1, 2]],
    caption: "علامة المفرد الغائب تظهر **مرة واحدة فقط**: إما في الفعل (works) أو في المساعد (doesn't)." },
  { type: "groups", title: "أي أداة نفي؟", vs: true,
    groups: [
      { label: "I / you / we / they", items: ["{a:don't} + {v:verb}"] },
      { label: "he / she / it", items: ["{a:doesn't} + {v:verb}"] },
      { label: "مع فعل be", tone: "alt", items: ["{v:am not}", "{v:isn't}", "{v:aren't}"] }
    ] }
],

3: [
  { type: "transform", title: "من جملة خبرية إلى سؤال",
    rows: [
      { label: "جملة خبرية", words: ["s:She", "v:likes", "tea."], arrow: "سؤال" },
      { label: "سؤال", words: ["+a:Does", "s:she", "v:like", "tea?"] }
    ],
    links: [[0, 1, 0, "s"], [0, 0, 1], [0, 1, 2]] },
  { type: "chain", title: "ترتيب السؤال: Q · A · S · V",
    steps: [
      { t: "{q:Where}", s: "أداة الاستفهام" },
      { t: "{a:does}", s: "المساعد" },
      { t: "{s:she}", s: "الفاعل" },
      { t: "{v:work}?", s: "الفعل الأصلي" }
    ] }
],

4: [
  { type: "timeline", title: "المضارع المستمر = حول «الآن»",
    marks: [
      { k: "span", from: -0.15, to: 0.15, label: "She is talking now." },
      { k: "span", from: -0.55, to: 0.55, tone: "alt", label: "I'm staying here this month." },
      { k: "point", at: 0.6, tone: "muted", label: "We're meeting tomorrow." }
    ],
    caption: "شريط قصير حول الآن = حدث يجري الآن. شريط أطول = وضع **مؤقت** له بداية ونهاية. النقطة في المستقبل = خطة مرتبة." },
  { type: "chain", title: "تركيب الزمن من جزأين",
    steps: [
      { t: "{s:I / he / they}", s: "الفاعل" },
      { t: "{a:am / is / are}", s: "لا تُحذف أبدًا" },
      { t: "{v:verb + ing}", s: "working · writing · running" }
    ], arrows: ["+", "+"] }
],

5: [
  { type: "groups", title: "البسيط أم المستمر؟", hub: "اسأل: كيف هو الحدث؟", vs: true,
    groups: [
      { label: "دائم أو متكرر", sub: "المضارع البسيط", items: ["I work in Riyadh.", "always · usually · every day"] },
      { label: "الآن أو مؤقت", sub: "المضارع المستمر", tone: "alt", items: ["I'm working in Jeddah this month.", "now · this week · these days"] }
    ] },
  { type: "groups", title: "أفعال الحالة: تبقى بلا ing", hub: "State verbs",
    groups: [
      { label: "التفكير", items: ["know", "understand", "believe", "mean"] },
      { label: "المشاعر", items: ["like", "love", "hate", "want", "need"] },
      { label: "الملكية", items: ["have", "own", "belong"] },
      { label: "الحواس والوصف", items: ["seem", "sound", "look like"] }
    ] }
],

6: [
  { type: "groups", title: "أربعة أشكال لصيغة الأمر", hub: "الفعل في أول الجملة، بلا فاعل",
    groups: [
      { label: "أمر", items: ["{v:Close} the door."] },
      { label: "نهي", items: ["{a:Don't} {v:close} it."] },
      { label: "مع صفة", items: ["{v:Be} quiet.", "{a:Don't} {v:be} late."] },
      { label: "اقتراح", tone: "alt", items: ["{a:Let's} {v:go}.", "{a:Let's} {n:not} {v:wait}."] }
    ] },
  { type: "transform", title: "اختصار جملة المنع إلى نهي",
    rows: [
      { words: ["-s:You", "-a:must", "-n:not", "v:shout."], arrow: "نهي" },
      { words: ["+a:Don't", "v:shout."] }
    ],
    links: [[0, 3, 1]] }
],

7: [
  { type: "timeline", title: "الماضي البسيط: حدث انتهى قبل الآن",
    marks: [
      { k: "point", at: -0.55, label: "I visited Rome in 2019." },
      { k: "span", from: -0.95, to: -0.4, tone: "alt", label: "She lived in Cairo for 10 years." }
    ],
    caption: "كل شيء يقع **يسار خط الآن** وانتهى. ولذلك نذكر غالبًا وقتًا محددًا: yesterday, in 2019, two years ago." },
  { type: "groups", title: "منتظم أم شاذ؟", vs: true,
    groups: [
      { label: "منتظم: ed-", items: ["worked", "played", "studied", "stopped"] },
      { label: "شاذ: يُحفظ", tone: "alt", items: ["went", "saw", "bought", "took", "had"] }
    ] }
],

8: [
  { type: "transform", title: "علامة الماضي تنتقل إلى did",
    rows: [
      { label: "إثبات", words: ["s:She", "v:went", "home."], arrow: "نفي" },
      { label: "نفي", words: ["s:She", "+a:didn't", "v:go", "home."] }
    ],
    links: [[0, 1, 1, "ماضٍ"], [0, 1, 2]] },
  { type: "groups", title: "نفي الماضي", vs: true,
    groups: [
      { label: "مع كل الأفعال", items: ["{a:didn't} + {v:verb}", "I didn't sleep."] },
      { label: "مع be", tone: "alt", items: ["{v:wasn't}", "{v:weren't}", "It wasn't cold."] }
    ] }
],

9: [
  { type: "transform", title: "السؤال في الماضي",
    rows: [
      { label: "جملة خبرية", words: ["s:You", "v:saw", "it."], arrow: "سؤال" },
      { label: "سؤال", words: ["+a:Did", "s:you", "v:see", "it?"] }
    ],
    links: [[0, 1, 0, "ماضٍ"], [0, 0, 1], [0, 1, 2]] },
  { type: "chain", title: "ترتيب السؤال",
    steps: [
      { t: "{q:When}", s: "أداة الاستفهام" },
      { t: "{a:did}", s: "مع كل الضمائر" },
      { t: "{s:you}", s: "الفاعل" },
      { t: "{v:arrive}?", s: "الفعل الأصلي" }
    ] }
],

10: [
  { type: "timeline", title: "حدث طويل قطعه حدث قصير",
    marks: [
      { k: "span", from: -0.9, to: -0.3, label: "I was driving" },
      { k: "point", at: -0.55, tone: "alt", label: "the phone rang" }
    ],
    caption: "الشريط = الماضي المستمر (الخلفية الجارية). النقطة = الماضي البسيط (الحدث القصير الذي وقع في منتصفه)." },
  { type: "groups", title: "when و while", vs: true,
    groups: [
      { label: "while + الحدث الطويل", items: ["{x:while} I {a:was} {v:driving}"] },
      { label: "when + الحدث القصير", tone: "alt", items: ["{x:when} the phone {v:rang}"] }
    ] }
],

11: [
  { type: "timeline", title: "المضارع التام: جسر بين الماضي والآن",
    marks: [
      { k: "span", from: -0.7, to: 0, label: "I've lived here since 2015." },
      { k: "repeat", from: -0.8, to: -0.25, n: 2, tone: "alt", label: "I've visited Japan twice." },
      { k: "arrow", from: -0.3, to: 0, tone: "muted", label: "I've lost my keys → now" }
    ],
    caption: "الشريط يصل إلى «الآن» = وضع مستمر. النقطتان بلا تاريخ = **تجربة** في حياتك. السهم = حدث ماضٍ **نتيجته** موجودة الآن." },
  { type: "groups", title: "for أم since؟", vs: true,
    groups: [
      { label: "for + مدة", items: ["for ten years", "for two days", "for a long time"] },
      { label: "since + نقطة البداية", tone: "alt", items: ["since 2015", "since Monday", "since I was a child"] }
    ] },
  { type: "flow", title: "التام أم الماضي البسيط؟",
    steps: [{ q: "هل ذكرت وقتًا **منتهيًا**؟ `yesterday, in 2019, ago`", yes: "I {v:saw} it yesterday." }],
    "else": "I {a:have} {v:seen} it." }
],

12: [
  { type: "timeline", title: "نشاط مستمر حتى الآن",
    marks: [
      { k: "span", from: -0.65, to: 0, label: "I've been waiting for an hour." },
      { k: "span", from: -0.35, to: -0.04, tone: "alt", label: "You've been crying." }
    ],
    caption: "الشريط الأول ما زال مستمرًا. الثاني انتهى للتو وأثره ظاهر الآن (عيناك حمراوان)." },
  { type: "groups", title: "التام البسيط أم التام المستمر؟", vs: true,
    groups: [
      { label: "النتيجة والعدد", sub: "have + v3", items: ["I've written 3 emails."] },
      { label: "النشاط والمدة", sub: "have been + ing", tone: "alt", items: ["I've been writing all morning."] }
    ] }
],

13: [
  { type: "timeline", title: "الماضي قبل الماضي",
    marks: [
      { k: "point", at: -0.75, tone: "alt", label: "The train had left" },
      { k: "point", at: -0.35, label: "I arrived" },
      { k: "arrow", from: -0.75, to: -0.35, tone: "muted", label: "أولًا ← ثانيًا" }
    ],
    caption: "الحدث الأول (الأقدم) يأخذ `had + v3`، والحدث الثاني يأخذ الماضي البسيط." },
  { type: "chain", title: "التركيب",
    steps: [
      { t: "{s:I / she / they}", s: "كل الضمائر" },
      { t: "{a:had}", s: "ثابتة" },
      { t: "{v:left · gone · eaten}", s: "التصريف الثالث" }
    ], arrows: ["+", "+"] }
],

14: [
  { type: "timeline", title: "مدة نشاط قبل حدث ماضٍ",
    marks: [
      { k: "span", from: -0.92, to: -0.38, label: "I had been waiting for 2 hours" },
      { k: "point", at: -0.38, tone: "alt", label: "when the bus came" }
    ],
    caption: "الشريط ينتهي عند حدث ماضٍ آخر. هذا هو الفرق عن المضارع التام المستمر الذي ينتهي عند «الآن»." },
  { type: "groups", title: "أي الصيغتين؟", vs: true,
    groups: [
      { label: "had been + ing", sub: "المدة والنشاط", items: ["She had been writing for hours."] },
      { label: "had + v3", sub: "النتيجة والعدد", tone: "alt", items: ["She had written 3 chapters."] }
    ] }
],

15: [
  { type: "timeline", title: "عادة انتهت",
    marks: [
      { k: "repeat", from: -0.95, to: -0.45, n: 5, label: "I used to play football." },
      { k: "point", at: 0, tone: "muted", label: "الآن: لم أعد ألعب" }
    ] },
  { type: "groups", title: "used to أم would؟",
    groups: [
      { label: "used to", sub: "أفعال وحالات", items: ["used to play", "used to live", "used to have"] },
      { label: "would", sub: "أفعال متكررة فقط", tone: "alt", items: ["would visit", "would tell"] },
      { label: "be used to + ing", sub: "معنى مختلف: معتاد على", tone: "muted", items: ["I'm used to waking up early."] }
    ] }
],

16: [
  { type: "timeline", title: "قصة واحدة بأربعة أزمنة",
    marks: [
      { k: "span", from: -0.95, to: -0.35, tone: "muted", label: "It was raining." },
      { k: "point", at: -0.8, tone: "alt", label: "My flight had left." },
      { k: "point", at: -0.55, label: "I got to the airport." },
      { k: "span", from: -0.3, to: 0, label: "I've been here since." }
    ],
    caption: "الخلفية = ماضٍ مستمر. الأسبق = ماضٍ تام. الحدث الرئيسي = ماضٍ بسيط. المتصل بالآن = مضارع تام." },
  { type: "flow", title: "اختر زمن الماضي",
    steps: [
      { q: "هل الحدث مرتبط بالآن؟", yes: "{a:have} {v:seen}" },
      { q: "وقع قبل حدث ماضٍ آخر؟", yes: "{a:had} {v:seen}" },
      { q: "كان جاريًا في لحظة ماضية؟", yes: "{a:was} {v:seeing}" }
    ],
    "else": "{v:saw}" }
],

17: [
  { type: "timeline", title: "القرار سبق الكلام",
    marks: [
      { k: "point", at: -0.45, tone: "muted", label: "قررت أمس" },
      { k: "arrow", from: -0.45, to: 0.55, tone: "muted" },
      { k: "point", at: 0.55, label: "I'm going to buy a car." }
    ] },
  { type: "groups", title: "متى نستخدم going to؟", vs: true,
    groups: [
      { label: "خطة مقررة", items: ["I'm going to study law."] },
      { label: "دليل تراه الآن", tone: "alt", items: ["Look at the clouds!", "It's going to rain."] }
    ] }
],

18: [
  { type: "flow", title: "will أم going to؟",
    steps: [
      { q: "قررت **قبل** الكلام؟", yes: "{a:going to}" },
      { q: "توقع بناءً على **دليل** تراه الآن؟", yes: "{a:going to}" }
    ],
    "else": "{a:will}: قرار الآن، رأي، وعد، عرض" },
  { type: "groups", title: "استخدامات will", hub: "will + الفعل الأصلي",
    groups: [
      { label: "قرار لحظي", items: ["I'll get it."] },
      { label: "توقع برأيك", items: ["I think it'll rain."] },
      { label: "وعد", items: ["I won't tell anyone."] },
      { label: "عرض", items: ["I'll help you."] }
    ] }
],

19: [
  { type: "groups", title: "المضارع بمعنى المستقبل",
    groups: [
      { label: "ترتيب مع شخص", sub: "المضارع المستمر", items: ["I'm meeting Ali at 6."] },
      { label: "جدول رسمي", sub: "المضارع البسيط", tone: "alt", items: ["The train leaves at 7."] },
      { label: "بعد أدوات الزمن", sub: "المضارع البسيط", tone: "muted", items: ["when I arrive", "as soon as she comes"] }
    ] },
  { type: "transform", title: "لا will بعد when",
    rows: [
      { words: ["I'll", "call", "you", "x:when", "s:I", "-a:will", "v:arrive."], arrow: "تصحيح" },
      { words: ["I'll", "call", "you", "x:when", "s:I", "v:arrive."] }
    ],
    links: [[0, 6, 5]] }
],

20: [
  { type: "timeline", title: "حدث سيكون جاريًا في لحظة مستقبلية",
    marks: [
      { k: "span", from: 0.3, to: 0.8, label: "I'll be flying" },
      { k: "point", at: 0.55, tone: "alt", label: "this time tomorrow" }
    ] },
  { type: "chain", title: "التركيب",
    steps: [
      { t: "{a:will}" }, { t: "{a:be}" }, { t: "{v:verb + ing}", s: "flying · working" }
    ], arrows: ["+", "+"] }
],

21: [
  { type: "timeline", title: "النظر إلى الوراء من نقطة مستقبلية",
    marks: [
      { k: "point", at: 0.35, tone: "alt", label: "I'll have finished" },
      { k: "point", at: 0.8, label: "by Friday" },
      { k: "arrow", from: 0.35, to: 0.8, tone: "muted", label: "يكتمل قبلها" }
    ],
    caption: "`by` + وقت مستقبلي هي العلامة الأهم لهذا الزمن." },
  { type: "chain", title: "التركيب",
    steps: [{ t: "{a:will}" }, { t: "{a:have}" }, { t: "{v:v3}", s: "finished · paid · reached" }],
    arrows: ["+", "+"] }
],

22: [
  { type: "timeline", title: "مستقبل داخل الماضي",
    marks: [
      { k: "point", at: -0.75, label: "I thought..." },
      { k: "point", at: -0.3, tone: "alt", label: "...it would rain." },
      { k: "arrow", from: -0.75, to: -0.3, tone: "muted", label: "مستقبل ذلك الوقت" }
    ] },
  { type: "transform", title: "will تصبح would",
    rows: [
      { label: "قالت", words: ["s:\"I", "a:will", "v:help.\""], arrow: "نقل" },
      { label: "نقلنا كلامها", words: ["She said", "s:she", "a:would", "v:help."] }
    ],
    links: [[0, 0, 1], [0, 1, 2], [0, 2, 3]] }
],

23: [
  { type: "flow", title: "اختر صيغة المستقبل",
    steps: [
      { q: "قرار تتخذه الآن، أو وعد، أو رأي؟", yes: "{a:will}" },
      { q: "خطة مقررة أو دليل تراه؟", yes: "{a:be going to}" },
      { q: "موعد مرتب مع شخص؟", yes: "{a:am} {v:meeting}" },
      { q: "جدول رسمي؟", yes: "The train {v:leaves} at 7." }
    ],
    "else": "{a:will be} + ing · {a:will have} + v3" },
  { type: "scale", title: "درجات اليقين في المستقبل", ends: ["أقل يقينًا", "أكثر يقينًا"],
    items: [
      { label: "will definitely", v: 95 },
      { label: "will probably", v: 80 },
      { label: "is likely to", v: 70 },
      { label: "may / might", v: 45 },
      { label: "is unlikely to", v: 25 },
      { label: "definitely won't", v: 5 }
    ] }
],

24: [
  { type: "transform", title: "المفعول يصبح فاعلًا",
    rows: [
      { label: "مبني للمعلوم", words: ["s:People", "v:speak", "x:Arabic", "in Morocco."], arrow: "مجهول" },
      { label: "مبني للمجهول", words: ["s:Arabic", "+a:is", "v:spoken", "in Morocco."] }
    ],
    links: [[0, 2, 0, "مفعول ← فاعل"], [0, 1, 2]],
    caption: "الفاعل الأصلي (People) يختفي لأنه غير مهم، وفعل `be` يحمل الزمن." },
  { type: "matrix", title: "be يحمل الزمن، والفعل يبقى v3",
    cols: ["الزمن", "مبني للمعلوم", "مبني للمجهول"],
    rows: [
      ["المضارع البسيط", "They {v:build} it.", "It {a:is} {v:built}."],
      ["المضارع المستمر", "They {a:are} {v:building} it.", "It {a:is being} {v:built}."],
      ["المضارع التام", "They {a:have} {v:built} it.", "It {a:has been} {v:built}."],
      ["الماضي", "They {v:built} it.", "It {a:was} {v:built}."],
      ["المستقبل", "They {a:will} {v:build} it.", "It {a:will be} {v:built}."]
    ] }
],

25: [
  { type: "transform", title: "مجهول في الماضي",
    rows: [
      { words: ["-s:Someone", "v:stole", "x:my wallet."], arrow: "مجهول" },
      { words: ["s:My wallet", "+a:was", "v:stolen."] }
    ],
    links: [[0, 2, 0], [0, 1, 2]] },
  { type: "groups", title: "ثلاث صيغ للماضي",
    groups: [
      { label: "ماضٍ بسيط", items: ["{a:was / were} + {v:v3}"] },
      { label: "ماضٍ مستمر", items: ["{a:was being} + {v:v3}"] },
      { label: "ماضٍ تام", items: ["{a:had been} + {v:v3}"] }
    ] }
],

26: [
  { type: "transform", title: "مجهول في المستقبل",
    rows: [
      { words: ["s:They", "a:will", "v:announce", "x:the results."], arrow: "مجهول" },
      { words: ["s:The results", "a:will", "+a:be", "v:announced."] }
    ],
    links: [[0, 3, 0], [0, 1, 1], [0, 2, 3]] },
  { type: "groups", title: "الصيغ",
    groups: [
      { label: "will", items: ["{a:will be} + {v:v3}"] },
      { label: "going to", items: ["{a:is going to be} + {v:v3}"] },
      { label: "المستقبل التام", tone: "alt", items: ["{a:will have been} + {v:v3}"] }
    ] }
],

27: [
  { type: "chain", title: "التركيب مع الأفعال الناقصة",
    steps: [
      { t: "{a:must · should · can}", s: "الفعل الناقص" },
      { t: "{a:be}", s: "ثابتة" },
      { t: "{v:done · banned}", s: "التصريف الثالث" }
    ], arrows: ["+", "+"] },
  { type: "groups", title: "الحاضر والماضي", vs: true,
    groups: [
      { label: "الآن / المستقبل", items: ["It {a:should be} {v:done}."] },
      { label: "الماضي (لم يحدث)", tone: "alt", items: ["It {a:should have been} {v:done}."] }
    ] }
],

28: [
  { type: "transform", title: "طريقتان لنقل رأي عام",
    rows: [
      { label: "الأصل", words: ["s:People", "v:say", "that", "s:he", "v:is", "rich."], arrow: "It + مجهول" },
      { label: "الطريقة الأولى", words: ["+s:It", "a:is", "v:said", "that", "s:he", "v:is", "rich."], arrow: "الفاعل + to" },
      { label: "الطريقة الثانية", words: ["s:He", "a:is", "v:said", "+a:to be", "rich."] }
    ],
    links: [[0, 1, 2], [1, 4, 0], [1, 2, 2], [1, 5, 3]] },
  { type: "groups", title: "من قام بالعمل؟", vs: true,
    groups: [
      { label: "أنا بنفسي", items: ["I cut my hair."] },
      { label: "شخص آخر", tone: "alt", items: ["I {a:had} my hair {v:cut}."] }
    ] }
],

29: [
  { type: "matrix", title: "الأنواع الأربعة",
    cols: ["النوع", "جزء if", "النتيجة", "المعنى"],
    rows: [
      ["0", "{v:present}", "{v:present}", "حقيقة دائمة"],
      ["1", "{v:present}", "{a:will} + {v:verb}", "ممكن في المستقبل"],
      ["2", "{v:past}", "{a:would} + {v:verb}", "خيال في الحاضر"],
      ["3", "{a:had} + {v:v3}", "{a:would have} + {v:v3}", "ماضٍ لم يحدث"]
    ] },
  { type: "scale", title: "كم هو واقعي؟", ends: ["خيال", "واقع"],
    items: [
      { label: "النوع 0", v: 100, note: "يحدث دائمًا" },
      { label: "النوع 1", v: 65, note: "ممكن فعلًا" },
      { label: "النوع 2", v: 20, note: "غير واقعي الآن" },
      { label: "النوع 3", v: 3, note: "فات الأوان" }
    ] },
  { type: "flow", title: "أي نوع أستخدم؟",
    steps: [
      { q: "تتحدث عن الماضي؟", yes: "النوع 3" },
      { q: "حقيقة علمية أو عامة؟", yes: "النوع 0" },
      { q: "ممكن أن يحدث فعلًا؟", yes: "النوع 1" }
    ],
    "else": "النوع 2" }
],

30: [
  { type: "timeline", title: "الشرط المختلط: ماضٍ ← نتيجة الآن",
    marks: [
      { k: "point", at: -0.6, tone: "alt", label: "If I had taken the job," },
      { k: "arrow", from: -0.6, to: 0, tone: "muted" },
      { k: "point", at: 0, label: "I would be rich now." }
    ] },
  { type: "groups", title: "أدوات بديلة لـ if", hub: "بدائل if",
    groups: [
      { label: "unless", sub: "إلا إذا = if not", items: ["unless you study"] },
      { label: "as long as", sub: "بشرط", items: ["provided that"] },
      { label: "in case", sub: "احتياطًا", items: ["in case it rains"] },
      { label: "otherwise", sub: "وإلا", items: ["Hurry, otherwise..."] }
    ] }
]
});
