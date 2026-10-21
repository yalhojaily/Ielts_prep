window.LESSONS = window.LESSONS || {};
window.LESSONS[97] = {
  steps: [
    { k: "الفكرة", h: "الأعلى بين *ثلاثة* فأكثر",
      why: [
        "المقارنة بين شيئين: `taller`. لتحديد الأعلى في مجموعة (ثلاثة فأكثر): `the tallest`.",
        "قصيرة ← `the` + `est`. طويلة ← `the most` + صفة. و`the` إجبارية دائمًا."
      ],
      show: [{ t: "build", lab: "اختر الصفة",
        opts: [["tall", "{k:the} {v:tall|est}", "", 0], ["big", "{k:the} {v:bigg|est}", "مضاعفة", 0], ["easy", "{k:the} {v:eas|iest}", "", 0], ["beautiful", "{k:the most} {v:beautiful}", "", 1], ["expensive", "{k:the most} {v:expensive}", "", 1], ["good", "{k:the} {v:best}", "شاذ", 2], ["bad", "{k:the} {v:worst}", "شاذ", 2]],
        groups: [{ h: "the -est" }, { h: "the most" }, { h: "شاذ" }] },
        { t: "fix", items: [["He is tallest boy in the class.", "He is {k:the} tallest boy…", ""], ["the most biggest", "{k:the} biggest", ""]] }],
      check: { q: "This is ___ restaurant in town.", o: ["most expensive", "the most expensive", "the expensivest"], a: 1, why: "طويلة ← `the most`." } },

    { k: "in أم of", h: "in the world · of the year",
      why: [
        "بعد صيغة التفضيل: `in` + مكان أو مجموعة كبيرة (`in the world, in my family, in the class`).",
        "و`of` + عدد أو فترة (`of all, of the three, of the year`). `the best of the world` خطأ شائع."
      ],
      show: [{ t: "compare", cols: [{ h: "in + مكان / مجموعة", c: "subj", en: ["the tallest building {k:in} the world", "the biggest city {k:in} Saudi Arabia"] }, { h: "of + عدد / فترة", c: "accent", en: ["the youngest {k:of} the three", "the hottest month {k:of} the year"] }] }],
      check: { q: "He's the best player ___ the world.", o: ["of", "in"], a: 1, why: "مكان ← `in`." } },

    { k: "one of", h: "one of the best + *جمع*",
      why: [
        "`one of the` + تفضيل + اسم **جمع**: أحد أفضل اللاعبين (من بين لاعبين كثر).",
        "`one of the best player` خطأ شائع جدًا."
      ],
      show: [{ t: "big", items: ["Riyadh is {k:one of the} biggest {v:cities} in the region."] },
        { t: "fix", items: [["one of the best player", "{k:one of the} best {v:players}", ""]] }],
      check: { q: "She's one of the most talented ___ I know.", o: ["artist", "artists"], a: 1, why: "بعد `one of the` ← جمع." } },

    { k: "ever", h: "the best … I've *ever* seen",
      why: [
        "بعد صيغة التفضيل يأتي كثيرًا `I have ever` + تصريف ثالث، بمعنى «في حياتي كلها».",
        "ممتاز في IELTS Speaking Part 2 عندما تصف أفضل تجربة."
      ],
      show: [{ t: "ex", items: [["It's {k:the best} film I{a:'ve} {k:ever} {v:seen}.", ""], ["the most delicious meal I{a:'ve} {k:ever} {v:eaten}", ""]] }],
      check: { q: "It's the most beautiful place I ___.", o: ["ever saw", "have ever seen"], a: 1, why: "`I have ever` + v3." } }
  ],
  sum: [
    { h: "قصيرة", en: ["{k:the} tallest · {k:the} biggest"] },
    { h: "طويلة", en: ["{k:the most} beautiful"] },
    { h: "in / of", en: ["in the world · of the year"] },
    { h: "one of", en: ["one of the best {v:players}"] }
  ]
};
