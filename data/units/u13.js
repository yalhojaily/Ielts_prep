window.UNITS = window.UNITS || {};
window.UNITS[13] = {
  id: 13,
  title: "The past perfect simple",
  ar: "الماضي التام",
  idea: "الماضي التام هو **الماضي قبل الماضي**. إذا كان عندنا حدثان في الماضي، نستخدمه للحدث الذي وقع **أولًا**. صيغته `had` + التصريف الثالث، وهي نفسها مع كل الضمائر.",
  uses: [
    ["الحدث الأسبق من حدثين ماضيين", "When I arrived, the train had left."],
    ["سبب حدث ماضٍ", "She was tired because she hadn't slept."],
    ["تجربة حتى نقطة في الماضي", "I had never seen snow before I went to Canada."]
  ],
  formula: [
    ["إثبات", "{s:I / you / he / she / we / they} {a:had} {v:finished}"],
    ["نفي", "{s:She} {a:hadn't} {v:eaten} anything."],
    ["سؤال", "{a:Had} {s:you} {v:met} him before?"]
  ],
  notes: [
    { title: "ترتيب الأحداث يغيّر المعنى",
      body: "`When I got home, my wife cooked dinner` = وصلت ثم طبخت. `When I got home, my wife had cooked dinner` = الطعام جاهز قبل وصولي.",
      en: "When I {v:got} home, she {a:had} {v:cooked} dinner." },
    { title: "مع before و after",
      body: "مع `before` و`after` الترتيب واضح، فالماضي التام اختياري: `After he left, I went to bed` صحيحة.",
      en: "{x:After} she {a:had} {v:finished}, she {v:left}." },
    { title: "by the time",
      body: "`by the time` (عندما/بحلول وقت) تأتي كثيرًا مع الماضي التام.",
      en: "{x:By the time} we {v:arrived}, the film {a:had} {v:started}." },
    { title: "الاختصار 'd",
      body: "`I'd, she'd, they'd` قد تعني `had` أو `would`. إذا جاء بعدها تصريف ثالث فهي `had`.",
      en: "She'd {v:gone}. = She {a:had} {v:gone}." }
  ],
  examples: [
    ["{s:I} {v:realised} I {a:had} {v:left} my wallet at home.", "أدركت أنني نسيت محفظتي في البيت."],
    ["{s:The meeting} {a:had} already {v:started} when we {v:arrived}.", "كان الاجتماع قد بدأ عندما وصلنا."],
    ["{s:He} {v:failed} because he {a:hadn't} {v:studied}.", "رسب لأنه لم يذاكر."],
    ["{s:I} {a:had} never {v:flown} before that trip.", "لم أكن قد ركبت طائرة قبل تلك الرحلة."],
    ["{a:Had} {s:you} {v:heard} of the company before?", "هل كنت قد سمعت بالشركة من قبل؟"]
  ],
  mistakes: [
    ["When we arrived, the film already started.", "When we arrived, the film had already started.", "الفيلم بدأ قبل الوصول، فنحتاج الماضي التام."],
    ["I had went there before.", "I had gone there before.", "بعد `had` التصريف الثالث."],
    ["I had seen him yesterday.", "I saw him yesterday.", "لا نستخدم الماضي التام إذا لم يكن هناك حدث ماضٍ آخر نقارن به."],
    ["She didn't had eaten.", "She hadn't eaten.", "النفي `hadn't` مباشرة بدون `did`."]
  ],
  ielts: {
    text: "في **Speaking Part 2** يجعل قصتك أكثر نضجًا عند ذكر خلفية الحدث. وفي **Writing Task 1** مع `by + year`: `By 2010, the figure had reached 50%.` وهو تركيب يحبه المصححون.",
    en: "By the end of the period, the number of users had risen to almost three million."
  },
  questions: [
    { t: "mcq", q: "When I got to the station, the train ___.", o: ["left", "has left", "had left", "was leave"], a: 2,
      why: "القطار غادر قبل وصولي: `had left`." },
    { t: "mcq", q: "She was nervous because she ___ on a plane before.", o: ["never was", "had never been", "has never been", "never had be"], a: 1,
      why: "تجربة حتى نقطة في الماضي: `had never been`." },
    { t: "mcq", q: "By 2015, the population ___ to 5 million.", o: ["grew", "has grown", "had grown", "grows"], a: 2,
      why: "`By + سنة ماضية`: الماضي التام." },
    { t: "mcq", q: "I ___ my friend at the mall yesterday.", o: ["had met", "met", "have met", "had meet"], a: 1,
      why: "حدث واحد في وقت محدد: الماضي البسيط." },
    { t: "fill", q: "When we arrived at the restaurant, they ___ (close) the kitchen.", a: ["had closed", "'d closed"],
      why: "الإغلاق حدث قبل الوصول." },
    { t: "fill", q: "He couldn't pay because he ___ (lose) his wallet.", a: ["had lost", "'d lost"],
      why: "السبب حدث قبل: `had lost`." },
    { t: "fill", q: "I ___ (not / see) the film, so I didn't understand the joke.", a: ["hadn't seen", "had not seen"],
      why: "نفي الماضي التام: `hadn't seen`." },
    { t: "fill", q: "By the time the police came, the thieves ___ (escape).", a: ["had escaped", "'d escaped"],
      why: "`By the time` + الماضي التام للحدث الأسبق." },
    { t: "fix", q: "When I woke up, my father already went to work.", a: ["When I woke up, my father had already gone to work."],
      why: "الذهاب للعمل سبق الاستيقاظ: `had already gone`." },
    { t: "fix", q: "They had ate before we came.", a: ["They had eaten before we came."],
      why: "التصريف الثالث لـ eat هو `eaten`." },
    { t: "fix", q: "She didn't had finished her work.", a: ["She hadn't finished her work.", "She had not finished her work."],
      why: "النفي `hadn't` بدون `did`." },
    { t: "rewrite", q: "The guests left. Then we arrived. (Begin with: When we arrived, ...)", ask: "اربط الجملتين بالبداية المعطاة.",
      a: ["When we arrived, the guests had left.", "When we arrived, the guests had already left."],
      why: "الحدث الأسبق (مغادرة الضيوف) بالماضي التام." }
  ]
};
