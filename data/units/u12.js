window.UNITS = window.UNITS || {};
window.UNITS[12] = {
  id: 12,
  title: "The present perfect continuous",
  ar: "المضارع التام المستمر",
  idea: "يركّز على **مدة النشاط واستمراره** من الماضي حتى الآن، أو على نشاط انتهى للتو وأثره ظاهر. صيغته `have / has been` + الفعل مع `-ing`.",
  uses: [
    ["نشاط بدأ في الماضي وما زال مستمرًا", "I've been waiting for an hour."],
    ["نشاط انتهى للتو وأثره ظاهر", "Your eyes are red. Have you been crying?"],
    ["السؤال عن المدة بـ How long", "How long have you been learning English?"]
  ],
  formula: [
    ["إثبات", "{s:I / you / we / they} {a:have been} {v:working} · {s:he / she / it} {a:has been} {v:working}"],
    ["نفي", "{s:She} {a:hasn't been} {v:sleeping} well."],
    ["سؤال", "{q:How long} {a:have} {s:you} {a:been} {v:living} here?"]
  ],
  notes: [
    { title: "التام أم التام المستمر؟",
      body: "التام البسيط يركّز على **النتيجة والكمية** (`I've written three emails`). التام المستمر يركّز على **النشاط والمدة** (`I've been writing emails all morning`).",
      en: "I {a:have} {v:read} 50 pages. · I {a:have been} {v:reading} for two hours." },
    { title: "أفعال الحالة تبقى في التام البسيط",
      body: "`know, have (يملك), like, believe` لا تأتي بـ -ing.",
      en: "I {a:have} {v:known} her for years. (not: have been knowing)" },
    { title: "work, live, study بالصيغتين",
      body: "مع هذه الأفعال المعنى متقارب جدًا: `I've lived / I've been living here for ten years`. المستمر يوحي بأن الوضع مؤقت أكثر.",
      en: "She {a:has been} {v:working} here since March." }
  ],
  examples: [
    ["{s:It}'{a:s been} {v:raining} all day.", "تمطر طوال اليوم."],
    ["{s:I}'{a:ve been} {v:trying} to call you.", "أحاول الاتصال بك (منذ فترة)."],
    ["{s:We} {a:have been} {v:saving} for a house since 2021.", "ندّخر لشراء بيت منذ 2021."],
    ["{s:You}'re out of breath. {a:Have} {s:you} {a:been} {v:running}?", "أنفاسك متقطعة. هل كنت تجري؟"],
    ["{s:Prices} {a:have been} {v:rising} steadily.", "الأسعار ترتفع بثبات."]
  ],
  mistakes: [
    ["I am waiting here for an hour.", "I have been waiting here for an hour.", "مع `for` + مدة حتى الآن نستخدم التام المستمر."],
    ["She has been knowing him for years.", "She has known him for years.", "`know` فعل حالة."],
    ["I have been wrote five emails.", "I have written five emails.", "مع العدد والنتيجة نستخدم التام البسيط بالتصريف الثالث."],
    ["How long are you studying English?", "How long have you been studying English?", "سؤال المدة حتى الآن يحتاج التام المستمر."]
  ],
  ielts: {
    text: "سؤال `How long have you been...?` شائع في **Speaking Part 1**. وفي **Writing Task 2** يفيد لوصف اتجاهات مستمرة: `Governments have been investing heavily in...`",
    en: "I've been working in investment for about eight years, and I've been learning English seriously for the last two."
  },
  questions: [
    { t: "mcq", q: "I ___ for you for 30 minutes!", o: ["wait", "am waiting", "have been waiting", "was waiting"], a: 2,
      why: "نشاط مستمر حتى الآن مع `for`: `have been waiting`." },
    { t: "mcq", q: "How long ___ here?", o: ["do you live", "have you been living", "are you living", "you have lived"], a: 1,
      why: "سؤال عن المدة حتى الآن." },
    { t: "mcq", q: "She ___ three books this month.", o: ["has been reading", "has read", "is reading", "reads"], a: 1,
      why: "عدد ونتيجة (three books): التام البسيط." },
    { t: "mcq", q: "I ___ him since we were at school.", o: ["have been knowing", "have known", "know", "am knowing"], a: 1,
      why: "`know` فعل حالة: `have known`." },
    { t: "fill", q: "It ___ (snow) since this morning.", a: ["has been snowing", "'s been snowing"],
      why: "نشاط مستمر منذ الصباح: `has been snowing`." },
    { t: "fill", q: "My hands are dirty because I ___ (work) in the garden.", a: ["have been working", "'ve been working"],
      why: "نشاط انتهى للتو وأثره ظاهر." },
    { t: "fill", q: "They ___ (build) that bridge for two years.", a: ["have been building", "'ve been building"],
      why: "نشاط مستمر مع `for`." },
    { t: "fill", q: "How long ___ you ___ (learn) to drive?", ask: "اكتب الكلمات بالترتيب، مثل: have been learning", a: ["have been learning"],
      why: "`How long have you been learning...?`" },
    { t: "fix", q: "I am working here since 2019.", a: ["I have been working here since 2019.", "I've been working here since 2019."],
      why: "مع `since` لنشاط مستمر حتى الآن." },
    { t: "fix", q: "She has been finished the project.", a: ["She has finished the project."],
      why: "للنتيجة نستخدم التام البسيط: `has finished`." },
    { t: "fix", q: "We have been waited for the results.", a: ["We have been waiting for the results."],
      why: "بعد `have been` نحتاج `-ing`." },
    { t: "rewrite", q: "He started running two hours ago. He is still running. (Use: for)", ask: "اكتب جملة واحدة بالمضارع التام المستمر.",
      a: ["He has been running for two hours.", "He's been running for two hours."],
      why: "بدأ وما زال مستمرًا: `has been running for two hours`." }
  ]
};
