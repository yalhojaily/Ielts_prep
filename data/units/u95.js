window.UNITS = window.UNITS || {};
window.UNITS[95] = {
  id: 95,
  title: "Two comparatives together",
  ar: "مقارنتان معًا",
  idea: "تكرار صيغة المقارنة (`bigger and bigger`) يعني **تغيرًا مستمرًا** (يزداد باستمرار). وتركيب `the + comparative ..., the + comparative` يعني **كلما ... كلما**: `The more you practise, the better you get`.",
  uses: [
    ["تغير مستمر (قصيرة)", "It's getting colder and colder."],
    ["تغير مستمر (طويلة)", "Life is becoming more and more expensive."],
    ["كلما ... كلما", "The sooner we start, the sooner we finish."],
    ["عبارة مختصرة", "The more, the better."]
  ],
  formula: [
    ["تكرار", "{v:-er} {x:and} {v:-er} · {x:more and more} + adjective"],
    ["the ... the", "{x:The} {v:older} I get, {x:the} {v:wiser} I become."],
    ["مع أسماء", "{x:The more} money you have, {x:the more} you spend."]
  ],
  notes: [
    { title: "لا تكرر more مع -er",
      body: "`more and more expensive` صحيحة. `more and more bigger` خطأ.",
      en: "{v:bigger and bigger} · {x:more and more} popular" },
    { title: "the + comparative بلا تكرار الفعل",
      body: "في تركيب كلما، يأتي الفاعل والفعل بعد المقارنة.",
      en: "{x:The harder} you {v:work}, {x:the more} you {v:earn}." },
    { title: "less and less",
      body: "للتناقص المستمر.",
      en: "People read {x:less and less}." }
  ],
  examples: [
    ["The city is getting {v:bigger and bigger}.", "المدينة تكبر وتكبر."],
    ["Online shopping is becoming {x:more and more} popular.", "التسوق الإلكتروني يزداد شعبية."],
    ["{x:The more} I read, {x:the more} I learn.", "كلما قرأت أكثر تعلمت أكثر."],
    ["{x:The higher} the price, {x:the lower} the demand.", "كلما ارتفع السعر انخفض الطلب."],
    ["“When should we leave?” “{x:The sooner}, {x:the better}.”", "متى نغادر؟ كلما أسرع كان أفضل."]
  ],
  mistakes: [
    ["more and more bigger", "bigger and bigger", "لا more مع -er."],
    ["More you study, more you know.", "The more you study, the more you know.", "نحتاج `the`."],
    ["The more I practise, the more good I become.", "The more I practise, the better I become.", "`better`."]
  ],
  ielts: {
    text: "مثالية في **Writing Task 1** لوصف الاتجاهات (`increasingly popular`, `more and more people`) وفي **Task 2** لعرض علاقة سبب ونتيجة: `The more cars there are, the worse the pollution becomes.`",
    en: "The more people rely on cars, the more serious traffic congestion becomes."
  },
  questions: [
    { t: "mcq", q: "It's getting ___.", o: ["dark and dark", "darker and darker", "more and more dark", "more darker"], a: 1, why: "قصيرة: `darker and darker`." },
    { t: "mcq", q: "Electric cars are becoming ___ popular.", o: ["more and more", "most and most", "more popular and", "popularer and"], a: 0, why: "طويلة: `more and more`." },
    { t: "mcq", q: "___ you exercise, the healthier you'll be.", o: ["More", "The more", "Most", "The most"], a: 1, why: "`The more`." },
    { t: "mcq", q: "The older he gets, ___ he becomes.", o: ["the calmer", "calmer", "the more calm", "more calmer"], a: 0, why: "`the calmer`." },
    { t: "mcq", q: "People are reading ___ books these days.", o: ["less and less", "fewer and fewer", "few and few", "little and little"], a: 1, why: "معدود: `fewer and fewer`." },
    { t: "fill", q: "Prices are going up. Food is getting ___ and ___ expensive.", ask: "اكتب الكلمة الناقصة مرة واحدة.", a: ["more"], why: "`more and more expensive`." },
    { t: "fill", q: "The ___ (soon) we leave, the earlier we'll arrive.", a: ["sooner"], why: "`The sooner`." },
    { t: "fill", q: "The weather got ___ and ___ (hot).", ask: "اكتب كلمة المقارنة مرة واحدة.", a: ["hotter"], why: "`hotter and hotter`." },
    { t: "fix", q: "The city is getting more and more bigger.", a: ["The city is getting bigger and bigger."], why: "`bigger and bigger`." },
    { t: "fix", q: "More you practise, better you speak.", a: ["The more you practise, the better you speak.", "The more you practice, the better you speak."], why: "`The more ..., the better`." },
    { t: "rewrite", q: "If you work harder, you will earn more. (Use: The harder ..., the more ...)", ask: "أعد الصياغة.", a: ["The harder you work, the more you will earn.", "The harder you work, the more you earn.", "The harder you work, the more you'll earn."], why: "`The harder ..., the more ...`." },
    { t: "rewrite", q: "Cities are growing all the time. (Use: bigger and bigger)", ask: "أعد الصياغة.", a: ["Cities are getting bigger and bigger.", "Cities are growing bigger and bigger.", "Cities are becoming bigger and bigger."], why: "`bigger and bigger`." }
  ]
};
