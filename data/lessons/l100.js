window.LESSONS = window.LESSONS || {};
window.LESSONS[100] = {
  steps: [
    { k: "الفكرة", h: "اضبط *قوة* الصفة",
      why: [
        "ظروف الدرجة تأتي قبل الصفة مباشرة وتتحكم في قوتها، مثل مفتاح الصوت.",
        "اضغط على كل درجة لترى الجملة. استخدامها بدقة يرفع درجة Lexical Resource."
      ],
      show: [{ t: "scale", cap: "من الأضعف إلى الأقوى",
        items: [["slightly", 10, "قليلًا"], ["a bit", 25, ""], ["fairly", 45, "إلى حد ما"], ["quite", 58, ""], ["rather", 70, ""], ["very", 82, "جدًا"], ["extremely", 100, "للغاية"]],
        lines: ["The hotel was [] expensive."], start: 5 }],
      check: { q: "Which is the strongest?", o: ["fairly cold", "slightly cold", "extremely cold"], a: 2, why: "`extremely` أقوى درجة." } },

    { k: "rather و a bit", h: "rather و a bit للسلبي غالبًا",
      why: [
        "`rather` = إلى حد ما، وتأتي غالبًا مع صفات **سلبية** أو مفاجئة: `rather expensive`.",
        "`a bit` غير رسمية، مع السلبي غالبًا، ولا تأتي قبل صفة + اسم: `a bit cold` (✓) لكن لا `a bit cold day`."
      ],
      show: [{ t: "ex", items: [["It's {k:rather} expensive.", "سلبي"], ["The test was {k:rather} difficult.", ""], ["I'm {k:a bit} tired.", "غير رسمي"]] },
        { t: "fix", items: [["a bit expensive car", "a {k:rather} expensive car", ""]] }],
      check: { q: "Natural choice: \"The food was ___ salty.\"", o: ["a bit", "a bit of"], a: 0, why: "`a bit` + صفة مباشرة." } },

    { k: "مع المقارنة", h: "much better · *لا* very better",
      why: [
        "مع صيغة المقارنة (`-er / more`) لا نستخدم `very`، بل `much, far, a lot` للتقوية و`slightly, a bit` للتخفيف.",
        "و`very much tired` خطأ: `very tired`."
      ],
      show: [{ t: "compare", cols: [{ h: "مع الصفة العادية", c: "subj", en: ["{k:very} good", "{k:extremely} hot"] }, { h: "مع المقارنة", c: "accent", en: ["{k:much} better", "{k:slightly} cheaper", "{k:far} bigger"] }] },
        { t: "fix", items: [["It's very better.", "It's {k:much} better.", ""], ["very much tired", "{k:very} tired", ""]] }],
      check: { q: "This phone is ___ cheaper than that one.", o: ["very", "much"], a: 1, why: "مع المقارنة ← `much`." } },

    { k: "too ≠ very", h: "too = *مشكلة*",
      why: [
        "`very` تقوية محايدة أو إيجابية. `too` تعني «أكثر من اللازم» وفيها مشكلة (التفصيل في الدرس 104).",
        "`The test was too easy, I loved it` متناقضة."
      ],
      show: [{ t: "compare", cols: [{ h: "very: محايد", c: "verb", en: ["It's {k:very} hot. (OK)"] }, { h: "too: مشكلة", c: "neg", en: ["It's {k:too} hot to go out."] }] }],
      check: { q: "The film was ___ good! I loved it.", o: ["too", "very"], a: 1, why: "إيجابي ← `very`." } }
  ],
  sum: [
    { h: "قوي", en: ["extremely · really · very"] },
    { h: "متوسط", en: ["quite · fairly · rather"] },
    { h: "ضعيف", en: ["slightly · a bit"] },
    { h: "مقارنة", en: ["{k:much} better (لا very)"] }
  ]
};
