window.UNITS = window.UNITS || {};
window.UNITS[11] = {
  id: 11,
  title: "The present perfect simple",
  ar: "المضارع التام",
  idea: "المضارع التام يربط **الماضي بالحاضر**. الحدث وقع في الماضي لكن الوقت **غير محدد** أو له أثر الآن، أو بدأ في الماضي وما زال مستمرًا. صيغته `have / has` + التصريف الثالث للفعل (past participle).",
  uses: [
    ["تجربة في حياتك دون ذكر متى", "I have visited Japan twice."],
    ["حدث قريب له نتيجة الآن", "I've lost my keys. (I can't open the door now)"],
    ["وضع بدأ في الماضي ومستمر (since / for)", "She has worked here since 2018."],
    ["حدث في فترة لم تنتهِ بعد", "I've drunk three coffees today."]
  ],
  formula: [
    ["إثبات", "{s:I / you / we / they} {a:have} {v:finished} · {s:he / she / it} {a:has} {v:finished}"],
    ["نفي", "{s:I} {a:haven't} {v:seen} it. · {s:She} {a:hasn't} {v:called}."],
    ["سؤال", "{a:Have} {s:you} {x:ever} {v:been} to Egypt? · {a:Has} {s:he} {v:arrived}?"]
  ],
  notes: [
    { title: "التصريف الثالث",
      body: "المنتظم مثل الماضي: `worked, played`. الشاذ له صورة خاصة يجب حفظها.",
      en: "go → went → {v:gone} · see → saw → {v:seen} · write → wrote → {v:written} · take → took → {v:taken} · do → did → {v:done} · eat → ate → {v:eaten} · be → was → {v:been}" },
    { title: "for و since",
      body: "`for` + مدة (`for ten years, for two days`). `since` + نقطة بداية (`since 2015, since Monday, since I was a child`).",
      en: "I {a:have} {v:known} him {x:for} ten years / {x:since} 2014." },
    { title: "الماضي البسيط أم التام؟",
      body: "إذا ذكرت وقتًا منتهيًا (`yesterday, in 2019, last week, ago`) استخدم **الماضي البسيط**. التام لا يأتي مع وقت ماضٍ محدد.",
      en: "I {v:saw} that film last week. · I {a:have} {v:seen} that film. (no time)" },
    { title: "ever, never, already, yet, just",
      body: "`ever` في السؤال، `never` للنفي، `already` (بالفعل) و`just` (للتو) قبل التصريف الثالث، و`yet` (بعد) في نهاية النفي والسؤال.",
      en: "I've {x:just} {v:eaten}. · Have you finished {x:yet}? · She's {x:already} {v:left}." },
    { title: "been أم gone؟",
      body: "`He has gone to Jeddah` = ذهب وما زال هناك. `He has been to Jeddah` = زارها ثم عاد.",
      en: "She {a:has} {v:gone} out. · I {a:have} {v:been} to Paris twice." }
  ],
  examples: [
    ["{s:I} {a:have} {v:lived} in Madinah all my life.", "عشت في المدينة طوال حياتي."],
    ["{a:Have} {s:you} ever {v:invested} in gold?", "هل استثمرت في الذهب من قبل؟"],
    ["{s:She} {a:hasn't} {v:finished} her report yet.", "لم تنهِ تقريرها بعد."],
    ["{s:The price} {a:has} {v:doubled} since last year.", "تضاعف السعر منذ العام الماضي."],
    ["{s:We}'{a:ve} just {v:arrived}.", "وصلنا للتو."]
  ],
  mistakes: [
    ["I have seen him yesterday.", "I saw him yesterday.", "`yesterday` وقت منتهٍ: الماضي البسيط."],
    ["I live here since 2015.", "I have lived here since 2015.", "مع `since` للحاضر الممتد نستخدم المضارع التام، لا المضارع البسيط كما في العربية «أسكن هنا منذ»."],
    ["She has went home.", "She has gone home.", "بعد `has` التصريف الثالث `gone`."],
    ["I have worked here since five years.", "I have worked here for five years.", "مع المدة نستخدم `for`."]
  ],
  ielts: {
    text: "من أكثر الأزمنة وزنًا في الاختبار. في **Writing Task 2** لوصف التغيرات حتى الآن (`has increased`, `have become`). وفي **Speaking** للحديث عن الخبرات (`I've always been interested in...`). وفي **Task 1** لا تستخدمه مع سنوات منتهية في الرسم البياني.",
    en: "Technology has changed the way we work, and many companies have moved their services online."
  },
  questions: [
    { t: "mcq", q: "I ___ this book three times.", o: ["read", "have read", "has read", "am reading"], a: 1,
      why: "تجربة دون وقت محدد: `have read`." },
    { t: "mcq", q: "She ___ in this company since 2020.", o: ["works", "worked", "has worked", "have worked"], a: 2,
      why: "مع `since` ووضع مستمر: `has worked`." },
    { t: "mcq", q: "We ___ the museum last Friday.", o: ["have visited", "visited", "has visited", "visit"], a: 1,
      why: "`last Friday` وقت منتهٍ: الماضي البسيط." },
    { t: "mcq", q: "I've known him ___ ten years.", o: ["since", "for", "ago", "from"], a: 1,
      why: "مدة زمنية: `for`." },
    { t: "mcq", q: "Ahmed isn't here. He ___ to the bank.", o: ["has been", "has gone", "went", "have gone"], a: 1,
      why: "ذهب وما زال هناك: `has gone`." },
    { t: "fill", q: "___ you ever ___ (eat) sushi?", ask: "اكتب الكلمتين بالترتيب، مثل: Have eaten", a: ["Have eaten"],
      why: "`Have you ever eaten...?` والتصريف الثالث لـ eat هو `eaten`." },
    { t: "fill", q: "I can't find my phone. I think I ___ (lose) it.", a: ["have lost", "'ve lost"],
      why: "حدث له نتيجة الآن: `have lost`." },
    { t: "fill", q: "He ___ (not / write) the email yet.", a: ["hasn't written", "has not written"],
      why: "`yet` مع النفي في المضارع التام، و`write` تصريفها الثالث `written`." },
    { t: "fill", q: "The number of tourists ___ (increase) since 2015.", a: ["has increased"],
      why: "تغيّر من الماضي حتى الآن مع `since`." },
    { t: "fix", q: "I have finished my homework yesterday.", a: ["I finished my homework yesterday."],
      why: "مع `yesterday` نستخدم الماضي البسيط." },
    { t: "fix", q: "She has took the medicine.", a: ["She has taken the medicine."],
      why: "التصريف الثالث لـ take هو `taken`." },
    { t: "fix", q: "I am here since Monday.", a: ["I have been here since Monday.", "I've been here since Monday."],
      why: "وضع بدأ في الماضي ومستمر: `have been`." },
    { t: "rewrite", q: "I started learning English three years ago. (Use: for)", ask: "أعد صياغة الجملة بالمضارع التام.",
      a: ["I have learned English for three years.", "I have learnt English for three years.", "I have been learning English for three years.", "I've learned English for three years.", "I've learnt English for three years.", "I've been learning English for three years."],
      why: "بدأ قبل ثلاث سنوات وما زال مستمرًا: `have learned ... for three years`." }
  ]
};
