window.LESSONS = window.LESSONS || {};
window.LESSONS[87] = {
  steps: [
    { k: "الفكرة", h: "سلّط *الضوء* على جزء من الجملة",
      why: [
        "في الكلام نرفع صوتنا على الكلمة المهمة. في الكتابة لا يوجد صوت، فنستخدم تركيبًا يضع الجزء المهم في البداية.",
        "`It was … who / that …` يحدد بالضبط ما نؤكده. اختر الجزء وراقب."
      ],
      show: [{ t: "build", lab: "ماذا تريد أن تؤكد؟",
        opts: [["عادي", "Ali called me yesterday.", "بلا تأكيد", 0], ["الشخص", "It was {k:Ali} who called me yesterday.", "علي (لا غيره)", 1], ["الزمن", "It was {k:yesterday} that Ali called me.", "أمس (لا اليوم)", 1], ["المفعول", "It was {k:me} that Ali called.", "أنا (لا غيري)", 1]],
        groups: [{ h: "جملة عادية" }, { h: "It was … who / that" }] }],
      check: { q: "It was my father ___ taught me to invest.", o: ["which", "who"], a: 1, why: "شخص ← `who`." } },

    { k: "What … is", h: "What I need is… = الشيء الذي أحتاجه هو…",
      why: [
        "طريقة ثانية للتأكيد: نبدأ بـ `What` + جملة، ثم `is / was`، ثم الشيء المؤكد في الآخر.",
        "مفيدة جدًا في Speaking للتعبير عن الرأي: `What I love about Madinah is its calm.` ولا نضيف `it` قبل is."
      ],
      show: [{ t: "ex", items: [["{k:What} I need {v:is} more time.", ""], ["{k:What} surprised me {v:was} the size of the city.", ""], ["{k:All} I want {v:is} a cup of tea.", "All = الشيء الوحيد"]] },
        { t: "fix", items: [["What I need it is sleep.", "{k:What} I need {v:is} sleep.", ""]] }],
      check: { q: "What I love about my job ___ the people.", o: ["it is", "is"], a: 1, why: "لا `it` بعد جملة What." } },

    { k: "The reason", h: "The reason is *that*… لا because",
      why: [
        "تراكيب مشابهة: `The reason why…`, `The place where…`.",
        "خطأ شائع: `The reason is because…` (تكرار المعنى). الصحيح `The reason is that…`."
      ],
      show: [{ t: "ex", items: [["{k:The reason why} I left {v:was} the salary.", ""], ["{k:The place where} we met {v:was} a café.", ""]] },
        { t: "fix", items: [["The reason is because I was tired.", "The reason is {k:that} I was tired.", ""]] }],
      check: { q: "The reason I'm late is ___ the traffic was terrible.", o: ["because", "that"], a: 1, why: "`The reason is that…`" } }
  ],
  sum: [
    { h: "It … who / that", en: ["It was {k:Ali} who called."] },
    { h: "What … is", en: ["{k:What} I need is time."] },
    { h: "All", en: ["{k:All} I want is tea."] },
    { h: "The reason", en: ["The reason is {k:that}…"] }
  ]
};
