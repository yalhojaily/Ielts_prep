window.LESSONS = window.LESSONS || {};
window.LESSONS[19] = {
  steps: [
    { k: "الفكرة", h: "المضارع يتحدث عن المستقبل *أحيانًا*",
      why: [
        "ليس كل حديث عن المستقبل يحتاج `will`. إذا كان الشيء **مرتبًا مسبقًا** فهو موجود الآن في جدولك أو في جدول رسمي، لذلك نستخدم المضارع.",
        "حالتان: ترتيب شخصي مع آخرين ← المضارع المستمر. جدول رسمي لا تتحكم فيه ← المضارع البسيط."
      ],
      show: [{ t: "compare", cols: [
        { h: "ترتيب شخصي ← مستمر", c: "accent", txt: "موعد مع شخص، حجز، اتفاق", en: ["I{a:'m} {v:meeting} the manager on Sunday.", "We{a:'re} {v:flying} to Cairo on Monday."] },
        { h: "جدول رسمي ← بسيط", c: "subj", txt: "قطار، طائرة، محاضرة، مباراة", en: ["The flight {v:leaves} at 6:40 tomorrow.", "The exam {v:starts} at 9 a.m."] }
      ] }],
      check: { q: "What ___ tonight? Do you want to come out?", o: ["do you do", "are you doing"], a: 1, why: "السؤال عن ترتيبات الليلة الشخصية ← المضارع المستمر." } },

    { k: "الترتيبات", h: "موعد مع *شخص* أو حجز",
      why: [
        "المضارع المستمر هو الأكثر طبيعية عندما يكون هناك اتفاق مع آخرين أو حجز، ومعه غالبًا وقت محدد.",
        "تخيّل أن الموعد مكتوب في تقويمك: لقد بدأ الترتيب فعلًا."
      ],
      show: [{ t: "cards", items: [
        { i: "calendar", h: "موعد", en: "I'm seeing the dentist at 4." },
        { i: "users", h: "اتفاق مع أشخاص", en: "We're having dinner with Ali." },
        { i: "heart", h: "حدث مقرر", en: "My brother is getting married in June." }
      ] }],
      check: { q: "I ___ my boss at 3 (it's in my calendar).", o: ["will meet", "am meeting"], a: 1, why: "ترتيب محدد مع شخص ← المضارع المستمر." } },

    { k: "الجداول", h: "مواعيد لا تتحكم فيها",
      why: [
        "القطارات والطائرات والمحاضرات والمؤتمرات لها جداول ثابتة. الجدول حقيقة، والحقائق مكانها المضارع البسيط.",
        "لذلك `The plane leaves at 7` وليس `is leaving` عندما تتحدث عن الجدول."
      ],
      show: [{ t: "ex", items: [["The train {v:arrives} at 10:15.", "حسب الجدول"], ["The conference {v:begins} on 3 May.", "موعد رسمي"], ["The course {v:starts} on Sunday at 4.", ""]] }],
      check: { q: "According to the timetable, the bus ___ at 8.", o: ["leaves", "is leaving", "will leaving"], a: 0, why: "جدول رسمي ← المضارع البسيط." } },

    { k: "بعد أدوات الزمن", h: "when · until · as soon as + *مضارع*",
      why: [
        "بعد `when, before, after, until, as soon as, once` نستخدم المضارع حتى لو كان المعنى مستقبلًا.",
        "السبب: الجملة الأخرى (`I'll call you`) فيها `will` وتوضح أننا نتكلم عن المستقبل. ويمكن استخدام المضارع التام لتأكيد الاكتمال: `after I have finished`."
      ],
      show: [{ t: "build", lab: "اختر الأداة",
        opts: [["when", "I{a:'ll} {v:call} you {k:when} I {v:arrive}.", "", 0], ["as soon as", "I{a:'ll} {v:text} you {k:as soon as} the meeting {v:finishes}.", "", 0],
               ["until", "Don't leave {k:until} I {v:come} back.", "", 0], ["after", "I{a:'ll} {v:call} you {k:after} I {a:have} {v:finished}.", "المضارع التام يؤكد الاكتمال", 0]],
        groups: [{ h: "بعد الأداة: مضارع، لا will" }] }],
      check: { q: "I'll tell him when I ___ him.", o: ["will see", "see"], a: 1, why: "بعد `when` المضارع البسيط للمستقبل." } }
  ],
  sum: [
    { h: "ترتيب شخصي", en: ["I{a:'m} {v:meeting} Ali at 6."] },
    { h: "جدول رسمي", en: ["The flight {v:leaves} at 6:40."] },
    { h: "بعد أدوات الزمن", en: ["I'll call you {k:when} I {v:arrive}."] },
    { h: "تذكّر", txt: "لا will بعد when / until / as soon as" }
  ]
};
