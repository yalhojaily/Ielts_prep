window.LESSONS = window.LESSONS || {};
window.LESSONS[102] = {
  steps: [
    { k: "السلّم", h: "كم مرة؟ من 0٪ إلى 100٪",
      why: [
        "ظروف التكرار تجيب عن «كم مرة؟». رتّبها على سلّم لتختار الأدق.",
        "اضغط على كل كلمة لتراها في الجملة. (تعلمت مكانها في الدرس الأول، وهنا التفاصيل.)"
      ],
      show: [{ t: "scale", cap: "من أبدًا إلى دائمًا",
        items: [["never", 0, "0%"], ["hardly ever", 10, ""], ["rarely", 20, "نادرًا"], ["occasionally", 35, ""], ["sometimes", 50, "أحيانًا"], ["often", 70, "غالبًا"], ["usually", 85, "عادةً"], ["always", 100, "100%"]],
        lines: ["I [] {v:eat} out."], start: 4 }],
      check: { q: "\"I hardly ever watch TV\" means I watch TV…", o: ["very often", "almost never"], a: 1, why: "`hardly ever` = نادرًا جدًا." } },

    { k: "المكان", h: "قبل الفعل · بعد be والمساعد",
      why: [
        "كما تعلمت في الدرس الأول: ظرف التكرار يصف الحدث، فيأتي **قبل** الفعل الأساسي.",
        "لكن **بعد** `be` و**بعد** المساعد الأول (`have, can, will`)."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["فعل عادي", "{s:I} {k:usually} {v:drink} tea.", "قبل الفعل", 0], ["be", "{s:She} {a:is} {k:always} late.", "بعد be", 1], ["مساعد", "{s:I} {a:have} {k:never} {v:been} to China.", "بعد المساعد", 1], ["modal", "{s:You} {a:can} {k:always} {v:call} me.", "بعد المساعد", 1]],
        groups: [{ h: "قبل الفعل الأساسي" }, { h: "بعد be / المساعد" }] },
        { t: "fix", items: [["I go always to work by car.", "I {k:always} go to work by car.", ""], ["She always is tired.", "She is {k:always} tired.", ""]] }],
      check: { q: "We ___ here since 2010.", o: ["always have lived", "have always lived"], a: 1, why: "ظرف التكرار بعد المساعد `have`: `have always lived`." } },

    { k: "never و sometimes", h: "never = منفية · sometimes في الأول",
      why: [
        "`never` منفية بنفسها، فلا نجمعها مع `not`: `I don't never` خطأ.",
        "`sometimes, usually, often` يمكن وضعها في أول الجملة للتأكيد، أما `always` و`never` فلا."
      ],
      show: [{ t: "ex", items: [["{k:Sometimes} I work from home.", "في الأول ✓"], ["I {k:never} eat fast food.", "لا don't never"]] },
        { t: "fix", items: [["I don't never smoke.", "I {k:never} smoke.", ""]] }],
      check: { q: "Choose the correct sentence.", o: ["Always I pray at the mosque.", "I always pray at the mosque."], a: 1, why: "`always` لا تأتي في أول الجملة." } },

    { k: "عبارات دقيقة", h: "once a week · How often…?",
      why: [
        "للتكرار الدقيق نستخدم عبارات في **آخر** الجملة: `once a week, twice a month, three times a year, every day`.",
        "في IELTS عندما يُسأل `How often…?` أجب بعبارة دقيقة، فهي أقوى من `sometimes`."
      ],
      show: [{ t: "map", cols: [{ h: "How often do you exercise?", c: "qw", k: "o", rows: [["1 مرة", "once a week"], ["2", "twice a month"], ["3+", "three times a year"]] }] },
        { t: "fix", items: [["I visit my parents one time in a week.", "I visit my parents {k:once a week}.", ""]] }],
      check: { q: "I go to the gym ___.", o: ["two times in a week", "twice a week"], a: 1, why: "`twice a week`." } }
  ],
  sum: [
    { h: "السلّم", en: ["never · rarely · sometimes · often · usually · always"] },
    { h: "المكان", en: ["I {k:usually} drink · She is {k:always} late"] },
    { h: "never", en: ["I never smoke. (لا don't never)"] },
    { h: "دقيق", en: ["once a week · twice a month"] }
  ]
};
