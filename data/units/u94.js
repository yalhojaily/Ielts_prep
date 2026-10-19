window.UNITS = window.UNITS || {};
window.UNITS[94] = {
  id: 94,
  title: "Comparative adjectives",
  ar: "صيغة المقارنة",
  idea: "للمقارنة بين شيئين: الصفة القصيرة (مقطع واحد) نضيف لها `-er` + `than` (`taller than`). والطويلة (مقطعان أو أكثر) نضع قبلها `more` + `than` (`more expensive than`). وبعض الصفات شاذة (`good → better`).",
  uses: [
    ["قصيرة + -er", "Riyadh is bigger than Madinah."],
    ["طويلة + more", "Gold is more expensive than silver."],
    ["شاذة", "good → better, bad → worse, far → further"],
    ["less للعكس", "This phone is less expensive than that one."]
  ],
  formula: [
    ["قصيرة", "old → {v:older} · big → {v:bigger} · nice → {v:nicer}"],
    ["-y", "easy → {v:easier} · happy → {v:happier} · busy → {v:busier}"],
    ["طويلة", "{x:more} beautiful · {x:more} important · {x:more} comfortable"],
    ["شاذة", "good → {v:better} · bad → {v:worse} · far → {v:farther / further} · much / many → {v:more} · little → {v:less}"]
  ],
  notes: [
    { title: "مضاعفة الحرف",
      body: "صفة قصيرة تنتهي بساكن-علة-ساكن: نضاعف الأخير.",
      en: "big → {v:bigger} · hot → {v:hotter} · thin → {v:thinner}" },
    { title: "التقوية",
      body: "`much, far, a lot` = بكثير. `a bit, slightly, a little` = بقليل. لا نقول `very bigger`.",
      en: "{x:much} cheaper · {x:far} more expensive · {x:slightly} older (not: very cheaper)" },
    { title: "than + ضمير",
      body: "في الكلام `than me`، وفي الرسمي `than I am`.",
      en: "He's taller {x:than} me. = He's taller {x:than} I am." }
  ],
  examples: [
    ["Jeddah is {v:hotter} than Abha.", "جدة أكثر حرارة من أبها."],
    ["This book is {x:more} {v:interesting} than the film.", "هذا الكتاب أكثر إثارة من الفيلم."],
    ["My new job is {x:much} {v:better}.", "عملي الجديد أفضل بكثير."],
    ["Flying is {x:less} tiring than driving.", "الطيران أقل إرهاقًا من القيادة."],
    ["Prices are {v:higher} than last year.", "الأسعار أعلى من العام الماضي."]
  ],
  mistakes: [
    ["more bigger", "bigger", "لا نجمع -er و more."],
    ["He is taller from me.", "He is taller than me.", "`than` لا from."],
    ["more good", "better", "شاذة."],
    ["very cheaper", "much cheaper", "`much` لا very."]
  ],
  ielts: {
    text: "المقارنة هي قلب **Writing Task 1**: `higher than`, `significantly more popular than`, `slightly lower than`. وفي **Task 2** مقالات المقارنة بين خيارين. التقوية بـ `much / significantly / slightly` ترفع الدقة.",
    en: "The number of female students was significantly higher than that of male students in 2020."
  },
  questions: [
    { t: "mcq", q: "My brother is ___ than me.", o: ["tall", "taller", "more tall", "tallest"], a: 1, why: "قصيرة: `taller`." },
    { t: "mcq", q: "This exam was ___ than the last one.", o: ["more easy", "easyer", "easier", "most easy"], a: 2, why: "`-y → -ier`." },
    { t: "mcq", q: "Health is ___ than money.", o: ["importanter", "more important", "most important", "important"], a: 1, why: "طويلة: `more`." },
    { t: "mcq", q: "Today's weather is ___ than yesterday's.", o: ["badder", "more bad", "worse", "worst"], a: 2, why: "شاذة: `worse`." },
    { t: "mcq", q: "Riyadh is ___ bigger than Taif.", o: ["very", "much", "more", "too"], a: 1, why: "التقوية: `much`." },
    { t: "mcq", q: "This hotel is ___ expensive than the other. It's cheaper.", o: ["less", "more", "few", "little"], a: 0, why: "`less expensive`." },
    { t: "fill", q: "Summer is ___ (hot) than winter.", a: ["hotter"], why: "مضاعفة t: `hotter`." },
    { t: "fill", q: "Your phone is ___ (good) than mine.", a: ["better"], why: "`better`." },
    { t: "fill", q: "This sofa is more ___ (comfort) than the chair.", a: ["comfortable"], why: "`more comfortable`." },
    { t: "fix", q: "My car is more faster than yours.", a: ["My car is faster than yours."], why: "لا more مع -er." },
    { t: "fix", q: "She is more intelligent from her brother.", a: ["She is more intelligent than her brother."], why: "`than`." },
    { t: "fix", q: "The new phone is very cheaper.", a: ["The new phone is much cheaper.", "The new phone is a lot cheaper.", "The new phone is far cheaper."], why: "`much cheaper`." },
    { t: "rewrite", q: "Ali is 30. Omar is 25. (Use: older)", ask: "اكتب جملة مقارنة.", a: ["Ali is older than Omar."], why: "`older than`." }
  ]
};
