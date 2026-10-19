window.UNITS = window.UNITS || {};
window.UNITS[14] = {
  id: 14,
  title: "The past perfect continuous",
  ar: "الماضي التام المستمر",
  idea: "يصف نشاطًا **استمر فترة** قبل نقطة أو حدث في الماضي. هو مثل المضارع التام المستمر لكن منقول إلى الماضي. صيغته `had been` + الفعل مع `-ing`.",
  uses: [
    ["مدة نشاط حتى حدث ماضٍ", "I had been waiting for an hour when the bus finally came."],
    ["سبب حالة في الماضي", "He was tired because he had been working all night."]
  ],
  formula: [
    ["إثبات", "{s:I / you / he / she / we / they} {a:had been} {v:working}"],
    ["نفي", "{s:She} {a:hadn't been} {v:sleeping} well."],
    ["سؤال", "{q:How long} {a:had} {s:you} {a:been} {v:waiting}?"]
  ],
  notes: [
    { title: "مقارنة بالماضي التام البسيط",
      body: "`had been doing` يركز على المدة والنشاط. `had done` يركز على اكتمال الحدث أو نتيجته.",
      en: "She {a:had been} {v:writing} for hours. · She {a:had} {v:written} three chapters." },
    { title: "يحتاج نقطة ماضية مرجعية",
      body: "لا يأتي وحده؛ لا بد من حدث ماضٍ أو وقت ماضٍ نقيس إليه: `when..., by the time..., before...`.",
      en: "{x:When} I {v:met} her, she {a:had been} {v:living} in Paris for two years." }
  ],
  examples: [
    ["{s:The ground} was wet. {s:It} {a:had been} {v:raining}.", "كانت الأرض مبتلة. كانت تمطر."],
    ["{s:We} {a:had been} {v:driving} for six hours when we {v:stopped}.", "كنا نقود منذ ست ساعات عندما توقفنا."],
    ["{s:He} {a:had been} {v:working} there for ten years before he {v:retired}.", "كان يعمل هناك عشر سنوات قبل أن يتقاعد."],
    ["{s:Her eyes} were red. {s:She} {a:had been} {v:crying}.", "كانت عيناها حمراوين. كانت تبكي."]
  ],
  mistakes: [
    ["I was waiting for two hours when he came.", "I had been waiting for two hours when he came.", "مع مدة (`for two hours`) قبل حدث ماضٍ نحتاج الماضي التام المستمر."],
    ["They had been knew each other.", "They had known each other.", "`know` فعل حالة، فنستخدم الماضي التام البسيط."],
    ["She had been work there.", "She had been working there.", "بعد `had been` نحتاج `-ing`."]
  ],
  ielts: {
    text: "استخدام نادر نسبيًا، لكن جملة واحدة صحيحة منه في **Speaking Part 2** ترفع انطباع **Grammatical Range**. لا تجبر نفسك عليه؛ استخدمه عندما تحكي سبب شيء حدث.",
    en: "I had been planning that trip for months, so I was really disappointed when it was cancelled."
  },
  questions: [
    { t: "mcq", q: "When I arrived, she ___ for over an hour.", o: ["waited", "has been waiting", "had been waiting", "was wait"], a: 2,
      why: "مدة نشاط حتى حدث ماضٍ." },
    { t: "mcq", q: "He was exhausted because he ___ all day.", o: ["had been working", "has been working", "is working", "had been work"], a: 0,
      why: "سبب حالة في الماضي، مع التركيز على النشاط." },
    { t: "mcq", q: "By the time I finished, I ___ six pages.", o: ["had been writing", "had written", "wrote", "was writing"], a: 1,
      why: "عدد ونتيجة (six pages): الماضي التام البسيط." },
    { t: "mcq", q: "They ___ each other for years before they got married.", o: ["had been knowing", "had known", "have known", "were knowing"], a: 1,
      why: "`know` فعل حالة: `had known`." },
    { t: "fill", q: "The road was wet because it ___ (rain).", a: ["had been raining", "'d been raining"],
      why: "أثر ظاهر لنشاط سبقه." },
    { t: "fill", q: "We ___ (drive) for hours before we found a hotel.", a: ["had been driving", "'d been driving"],
      why: "مدة نشاط قبل حدث ماضٍ." },
    { t: "fill", q: "How long ___ you ___ (study) English before you took the test?", ask: "اكتب الكلمات بالترتيب، مثل: had been studying", a: ["had been studying"],
      why: "`How long had you been studying...?`" },
    { t: "fill", q: "She ___ (not / sleep) well, so she felt terrible.", a: ["hadn't been sleeping", "had not been sleeping"],
      why: "نفي: `hadn't been sleeping`." },
    { t: "fix", q: "I had been study for three hours when you called.", a: ["I had been studying for three hours when you called."],
      why: "بعد `had been` نحتاج `studying`." },
    { t: "fix", q: "He has been working there for 20 years when he retired.", a: ["He had been working there for 20 years when he retired."],
      why: "النقطة المرجعية ماضية (`retired`)، فنستخدم `had been`." },
    { t: "fix", q: "They were playing for an hour before it started to rain.", a: ["They had been playing for an hour before it started to rain."],
      why: "مدة (`for an hour`) قبل حدث ماضٍ: `had been playing`." },
    { t: "rewrite", q: "I started waiting at 5. The doctor called me at 7. (Begin with: I had been ...)", ask: "اكتب جملة واحدة تبدأ بالكلمات المعطاة.",
      a: ["I had been waiting for two hours when the doctor called me.", "I had been waiting for two hours before the doctor called me.", "I had been waiting for two hours when the doctor called me in."],
      why: "مدة الانتظار (ساعتان) قبل الحدث الماضي." }
  ]
};
