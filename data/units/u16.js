window.UNITS = window.UNITS || {};
window.UNITS[16] = {
  id: 16,
  title: "Past tenses overview",
  ar: "مراجعة أزمنة الماضي",
  idea: "اسأل نفسك ثلاثة أسئلة: هل الوقت **منتهٍ ومحدد**؟ (ماضٍ بسيط). هل كان الحدث **جاريًا** في لحظة؟ (ماضٍ مستمر). هل وقع **قبل** حدث ماضٍ آخر؟ (ماضٍ تام). وإذا كان مرتبطًا **بالحاضر** فهو مضارع تام.",
  uses: [
    ["وقت منتهٍ ← الماضي البسيط", "I graduated in 2014."],
    ["جارٍ في لحظة ماضية ← الماضي المستمر", "I was studying at midnight."],
    ["قبل حدث ماضٍ ← الماضي التام", "I had already eaten when they arrived."],
    ["مرتبط بالحاضر ← المضارع التام", "I have worked here since 2015."]
  ],
  formula: [
    ["ماضٍ بسيط", "{s:She} {v:called} me yesterday."],
    ["ماضٍ مستمر", "{s:She} {a:was} {v:driving} when she called."],
    ["ماضٍ تام", "{s:She} {a:had} {v:left} before I called."],
    ["مضارع تام", "{s:She} {a:has} {v:called} three times today."]
  ],
  notes: [
    { title: "قصة بثلاثة أزمنة",
      body: "الماضي المستمر للخلفية، والبسيط للأحداث الرئيسية، والتام لما حدث قبلها.",
      en: "It {a:was} {v:raining}. I {v:got} to the airport late and {v:discovered} that my flight {a:had} already {v:left}." },
    { title: "المضارع التام أم الماضي البسيط؟",
      body: "المحك: هل هناك وقت منتهٍ؟ `this year` (لم ينته) مع التام، و`last year` (انتهى) مع البسيط.",
      en: "I {a:have} {v:travelled} a lot this year. · I {v:travelled} a lot last year." },
    { title: "used to للعادة المنتهية",
      body: "للتأكيد على أن العادة لم تعد موجودة.",
      en: "I {a:used to} {v:smoke}, but I {v:stopped} in 2018." }
  ],
  examples: [
    ["{s:I} {v:met} my wife while I {a:was} {v:studying} in London.", "قابلت زوجتي بينما كنت أدرس في لندن."],
    ["{x:When} I {v:arrived}, everyone {a:had} {v:gone} home.", "عندما وصلت كان الجميع قد عادوا إلى بيوتهم."],
    ["{s:I}'{a:ve} never {v:been} to Morocco.", "لم أزر المغرب أبدًا."],
    ["{s:We} {a:used to} {v:live} next to the mosque.", "كنا نسكن بجوار المسجد."],
    ["{s:She} {a:had been} {v:working} for hours, so she {v:was} exhausted.", "كانت تعمل منذ ساعات، فكانت منهكة."]
  ],
  mistakes: [
    ["I have visited Rome last summer.", "I visited Rome last summer.", "`last summer` وقت منتهٍ."],
    ["When the phone rang, I had a shower.", "When the phone rang, I was having a shower.", "إذا كان الاستحمام جاريًا عند الرنين فهو ماضٍ مستمر."],
    ["When I arrived, the meeting already finished.", "When I arrived, the meeting had already finished.", "الانتهاء قبل الوصول: ماضٍ تام."],
    ["I am living here since 2010.", "I have lived here since 2010.", "حالة مستمرة حتى الآن مع `since`."]
  ],
  ielts: {
    text: "في **Speaking Part 2** القصة الجيدة تمزج هذه الأزمنة بشكل طبيعي. وفي **Writing Task 1** الماضي البسيط هو الأساس للبيانات الماضية، مع `had` + تصريف ثالث بعد `By + سنة`.",
    en: "Between 1990 and 2000 the figure rose sharply, and by 2010 it had doubled."
  },
  questions: [
    { t: "mcq", q: "I ___ my wallet. Can you lend me some money?", o: ["lost", "have lost", "had lost", "was losing"], a: 1,
      why: "حدث له نتيجة الآن: المضارع التام." },
    { t: "mcq", q: "While I ___ to work, I saw an accident.", o: ["drove", "was driving", "had driven", "have driven"], a: 1,
      why: "حدث طويل جارٍ: ماضٍ مستمر." },
    { t: "mcq", q: "When we got to the cinema, the film ___.", o: ["already started", "has already started", "had already started", "was already start"], a: 2,
      why: "البدء قبل الوصول: ماضٍ تام." },
    { t: "mcq", q: "Shakespeare ___ many famous plays.", o: ["has written", "wrote", "had written", "was writing"], a: 1,
      why: "شخص توفي وحياته انتهت: الماضي البسيط." },
    { t: "mcq", q: "I ___ three cups of coffee so far today.", o: ["drank", "had drunk", "have drunk", "was drinking"], a: 2,
      why: "`so far today` فترة لم تنتهِ: المضارع التام." },
    { t: "mcq", q: "When I was a child, I ___ afraid of dogs.", o: ["used to be", "have been", "had been", "was being"], a: 0,
      why: "حالة ماضية انتهت: `used to be` (و`was` صحيحة أيضًا لكنها ليست من الخيارات)." },
    { t: "fill", q: "She ___ (live) in Paris for five years before she moved to Riyadh.", a: ["had lived", "had been living"],
      why: "مدة قبل حدث ماضٍ: ماضٍ تام." },
    { t: "fill", q: "I ___ (see) him at the mosque last Friday.", a: ["saw"],
      why: "وقت منتهٍ: `saw`." },
    { t: "fill", q: "What ___ you ___ (do) when I called you?", ask: "اكتب الكلمتين بالترتيب، مثل: were doing", a: ["were doing"],
      why: "سؤال عن حدث جارٍ: `were doing`." },
    { t: "fix", q: "I have bought this car in 2020.", a: ["I bought this car in 2020."],
      why: "`in 2020` وقت منتهٍ." },
    { t: "fix", q: "When I came home, my mother cooked, so dinner was ready.", a: ["When I came home, my mother had cooked, so dinner was ready."],
      why: "الطبخ قبل الوصول (العشاء جاهز): ماضٍ تام." },
    { t: "fix", q: "I was knowing her for many years.", a: ["I had known her for many years.", "I knew her for many years.", "I have known her for many years."],
      why: "`know` فعل حالة لا يأتي بـ -ing." },
    { t: "rewrite", q: "I was reading. Then the lights went out. (Join with: when)", ask: "اربط الجملتين بالكلمة المعطاة.",
      a: ["I was reading when the lights went out."],
      why: "الحدث الجاري + `when` + الحدث القصير." }
  ]
};
