window.UNITS = window.UNITS || {};
window.UNITS[7] = {
  id: 7,
  title: "The past simple",
  ar: "الماضي البسيط",
  idea: "نستخدم الماضي البسيط لحدث **انتهى** في وقت محدد في الماضي. الفعل له صورة واحدة مع جميع الضمائر: `I worked, she worked, they worked`. الأفعال المنتظمة تأخذ `-ed`، والشاذة لها صور يجب حفظها.",
  uses: [
    ["حدث انتهى في وقت معروف", "I visited Istanbul in 2019."],
    ["سلسلة أحداث متتابعة في قصة", "He opened the door, looked around and left."],
    ["عادة أو وضع في الماضي انتهى", "She lived in Cairo for ten years."]
  ],
  formula: [
    ["منتظم", "{s:I / You / He / She / We / They} {v:worked} yesterday."],
    ["شاذ", "{s:She} {v:went} home. · {s:We} {v:saw} a film. · {s:He} {v:bought} a car."],
    ["فعل be", "{s:I / he / she / it} {v:was} · {s:you / we / they} {v:were}"]
  ],
  notes: [
    { title: "تهجئة -ed",
      body: "الفعل المنتهي بـ e نضيف `-d` فقط. الساكن + y يصبح `-ied`. الفعل القصير ساكن-علة-ساكن نضاعف الحرف الأخير.",
      en: "live → {v:lived} · study → {v:studied} · play → {v:played} · stop → {v:stopped} · plan → {v:planned}" },
    { title: "أهم الأفعال الشاذة",
      body: "احفظها في مجموعات حسب الشكل، فهي الأكثر استخدامًا في الكلام.",
      en: "go → {v:went} · have → {v:had} · make → {v:made} · take → {v:took} · get → {v:got} · see → {v:saw} · come → {v:came} · buy → {v:bought} · think → {v:thought} · teach → {v:taught} · put → {v:put} · cut → {v:cut}" },
    { title: "كلمات تدل عليه",
      body: "`yesterday, last week, last year, in 2010, ago, when I was a child`. كلمة `ago` تأتي **بعد** المدة: `three years ago`.",
      en: "I {v:started} this job two years {x:ago}." },
    { title: "was أم were؟",
      body: "`was` مع I/he/she/it، و`were` مع you/we/they. ولا نضع `was` قبل فعل ماضٍ آخر.",
      en: "It {v:was} cold. · They {v:were} at the meeting." }
  ],
  examples: [
    ["{s:I} {v:finished} my degree in 2015.", "أنهيت دراستي الجامعية عام 2015."],
    ["{s:We} {v:went} to Abha last summer.", "ذهبنا إلى أبها الصيف الماضي."],
    ["{s:She} {v:studied} medicine in Egypt.", "درست الطب في مصر."],
    ["{s:The meeting} {v:was} very long.", "كان الاجتماع طويلًا جدًا."],
    ["{s:He} {v:bought} his first shares ten years ago.", "اشترى أول أسهمه قبل عشر سنوات."]
  ],
  mistakes: [
    ["I was go to the market.", "I went to the market.", "لا نضع `was` قبل الفعل. الماضي البسيط كلمة واحدة: `went`."],
    ["Yesterday I buyed a phone.", "Yesterday I bought a phone.", "`buy` شاذ: `bought`."],
    ["Before three years I moved here.", "Three years ago I moved here.", "ترجمة حرفية لـ «قبل ثلاث سنوات». الصحيح `three years ago`."],
    ["They was happy.", "They were happy.", "مع `they` نستخدم `were`."]
  ],
  ielts: {
    text: "في **Speaking Part 2** كثير من البطاقات تطلب وصف تجربة سابقة (`Describe a time when...`)، فيكون الماضي البسيط هو العمود الفقري لإجابتك. أخطاء الأفعال الشاذة هنا تُلاحظ فورًا.",
    en: "I remember the day I got my first job. I felt nervous, but the interview went really well."
  },
  questions: [
    { t: "mcq", q: "We ___ a great film last night.", o: ["see", "saw", "seen", "was see"], a: 1,
      why: "`last night` وقت منتهٍ، و`see` شاذ: `saw`." },
    { t: "mcq", q: "She ___ in London from 2010 to 2014.", o: ["lives", "was live", "lived", "living"], a: 2,
      why: "فترة انتهت في الماضي: `lived`." },
    { t: "mcq", q: "The children ___ very tired after the trip.", o: ["was", "were", "are", "did"], a: 1,
      why: "`The children` جمع: `were`." },
    { t: "mcq", q: "I moved to Riyadh five years ___.", o: ["before", "ago", "last", "since"], a: 1,
      why: "`ago` تأتي بعد المدة: `five years ago`." },
    { t: "fill", q: "He ___ (stop) the car and got out.", a: ["stopped"],
      why: "`stop` نضاعف p ثم نضيف ed: `stopped`." },
    { t: "fill", q: "I ___ (study) English at school for six years.", a: ["studied"],
      why: "ساكن + y يصبح `ied`: `studied`." },
    { t: "fill", q: "My father ___ (teach) me how to swim.", a: ["taught"],
      why: "`teach` شاذ: `taught`." },
    { t: "fill", q: "We ___ (have) a big lunch at my grandmother's house.", a: ["had"],
      why: "`have` شاذ: `had`." },
    { t: "fill", q: "They ___ (plan) the whole trip themselves.", a: ["planned"],
      why: "`plan` قصير منتهٍ بساكن-علة-ساكن، فنضاعف n: `planned`." },
    { t: "fix", q: "I was meet my friend yesterday.", a: ["I met my friend yesterday."],
      why: "لا نستخدم `was` مع فعل الماضي. `meet` شاذ: `met`." },
    { t: "fix", q: "She goed to the bank this morning.", a: ["She went to the bank this morning."],
      why: "`go` شاذ: `went`." },
    { t: "fix", q: "Before two weeks I started a new course.", a: ["Two weeks ago I started a new course.", "I started a new course two weeks ago."],
      why: "نقول `two weeks ago` وليس `before two weeks`." },
    { t: "rewrite", q: "I take the bus to work. (Begin with: Yesterday, ...)", ask: "أعد كتابة الجملة في الماضي مبتدئًا بالكلمة المعطاة.",
      a: ["Yesterday, I took the bus to work.", "Yesterday I took the bus to work."],
      why: "`take` شاذ: `took`." },
    { t: "rewrite", q: "They are at the conference. (Begin with: Last week, ...)", ask: "أعد كتابة الجملة في الماضي مبتدئًا بالكلمة المعطاة.",
      a: ["Last week, they were at the conference.", "Last week they were at the conference."],
      why: "`are` في الماضي `were`." }
  ]
};
