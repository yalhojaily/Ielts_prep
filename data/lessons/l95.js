window.LESSONS = window.LESSONS || {};
window.LESSONS[95] = {
  steps: [
    { k: "التكرار", h: "bigger and bigger = يزداد *باستمرار*",
      why: [
        "تكرار صيغة المقارنة مع `and` يعني تغيّرًا مستمرًا: يكبر ويكبر.",
        "مع الصفة القصيرة نكرر الكلمة: `colder and colder`. ومع الطويلة نكرر `more`: `more and more expensive`. ولا نجمع بينهما."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["قصيرة", "It's getting {v:colder and colder}.", "", 0], ["قصيرة", "The city is getting {v:bigger and bigger}.", "", 0], ["طويلة", "Life is becoming {k:more and more} expensive.", "", 1], ["تناقص", "People read {k:less and less}.", "", 1]],
        groups: [{ h: "-er and -er" }, { h: "more and more + صفة" }] },
        { t: "fix", items: [["more and more bigger", "{v:bigger and bigger}", ""]] }],
      check: { q: "Online shopping is becoming ___.", o: ["more and more popular", "popularer and popularer"], a: 0, why: "صفة طويلة ← `more and more`." } },

    { k: "كلما… كلما", h: "The more…, the better",
      why: [
        "تركيب `the + مقارنة…, the + مقارنة…` يعني «كلما… كلما…»: كلما تمرنت أكثر صرت أفضل.",
        "لا تنسَ `the` في الجزأين، وبعد المقارنة يأتي الفاعل والفعل."
      ],
      show: [{ t: "big", items: ["{k:The more} you {v:practise}, {k:the better} you {v:get}."], cap: "كلما تمرنت أكثر، صرت أفضل" },
        { t: "ex", items: [["{k:The sooner} we start, {k:the sooner} we finish.", ""], ["{k:The more} money you have, {k:the more} you spend.", "مع اسم"], ["{k:The more}, {k:the better}.", "عبارة مختصرة"]] },
        { t: "fix", items: [["More you study, more you know.", "{k:The more} you study, {k:the more} you know.", ""], ["…the more good I become.", "…{k:the better} I become.", ""]] }],
      check: { q: "___ I read, the more I learn.", o: ["More", "The more"], a: 1, why: "التركيب يحتاج `the`." } }
  ],
  sum: [
    { h: "تغير مستمر", en: ["bigger and bigger", "more and more expensive"] },
    { h: "تناقص", en: ["less and less"] },
    { h: "كلما", en: ["{k:The more} you practise, {k:the better} you get."] },
    { h: "انتبه", txt: "the في الجزأين" }
  ]
};
