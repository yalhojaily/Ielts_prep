window.LESSONS = window.LESSONS || {};
window.LESSONS[79] = {
  steps: [
    { k: "البناء", h: "قطعتان تصنعان 12 كلمة",
      why: [
        "هذه الضمائر تبنى من قطعتين: البداية (`some / any / no / every`) والنهاية (`one / body` للأشخاص، `thing` للأشياء، `where` للأماكن).",
        "تعلّم القطع، وستفهم الكلمات الاثنتي عشرة كلها."
      ],
      show: [{ t: "table", head: ["", "أشخاص", "أشياء", "أماكن"], rows: [
        ["some (بعض / ما)", "someone", "something", "somewhere"], ["any (أي)", "anyone", "anything", "anywhere"],
        ["no (لا)", "no one / nobody", "nothing", "nowhere"], ["every (كل)", "everyone", "everything", "everywhere"]] }],
      check: { q: "I left my keys ___ in the house, but I can't find them.", o: ["somewhere", "anywhere", "nowhere"], a: 0, why: "مكان ما (إثبات) ← `somewhere`." } },

    { k: "some أم any", h: "نفس قاعدة some و any",
      why: [
        "`some-` في الإثبات والعرض. `any-` في النفي والسؤال.",
        "و`no-` منفية بنفسها، فالفعل معها **مثبت**: `I saw nobody` = `I didn't see anybody`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["إثبات", "{s:Someone} is at the door.", "", 0], ["عرض", "Would you like {s:something} to drink?", "عرض ← some", 0], ["نفي", "I didn't see {s:anyone}.", "", 1], ["سؤال", "Is {s:anything} wrong?", "", 1], ["no-", "I saw {s:nobody}.", "فعل مثبت", 2]],
        groups: [{ h: "some-" }, { h: "any-" }, { h: "no- + فعل مثبت" }] },
        { t: "fix", items: [["I didn't see nobody.", "I didn't see {s:anybody}. / I saw {s:nobody}.", ""]] }],
      check: { q: "Nobody ___.", o: ["didn't come", "came"], a: 1, why: "`Nobody` منفية ← فعل مثبت." } },

    { k: "فعل مفرد", h: "everyone *is*… رغم أن المعنى جمع",
      why: [
        "كل هذه الضمائر تأخذ **فعلًا مفردًا**، حتى `everyone` و`everybody` اللتين معناهما «الجميع».",
        "لكن عند الإشارة إليها لاحقًا نستخدم `they / their`: `Everyone brought their lunch.`"
      ],
      show: [{ t: "ex", items: [["{s:Everybody} {v:is} happy.", "لا are"], ["{s:Nothing} {v:is} impossible.", ""], ["{s:Everyone} brought {s:their} own lunch.", "their للإحالة"]] }],
      check: { q: "Everybody ___ him.", o: ["know", "knows"], a: 1, why: "`Everybody` ← فعل مفرد." } },

    { k: "الصفة بعده", h: "something interesting · someone else",
      why: [
        "الصفة تأتي عادة قبل الاسم، لكن مع هذه الضمائر تأتي **بعدها**: `something new`, `nothing important`.",
        "وكذلك `else` (آخر / غير): `someone else`, `anything else`."
      ],
      show: [{ t: "fix", items: [["Do you want interesting something?", "Do you want {s:something} {k:interesting}?", ""]] },
        { t: "ex", items: [["Is there {s:anything} {k:else}?", "شيء آخر؟"], ["{s:Anyone} can learn.", "any في الإثبات = أي شخص (لا يهم)"]] }],
      check: { q: "I want to try ___.", o: ["new something", "something new"], a: 1, why: "الصفة بعد الضمير." } }
  ],
  sum: [
    { h: "البناء", en: ["some/any/no/every + one/thing/where"] },
    { h: "الاستخدام", en: ["someone (إثبات) · anyone (نفي/سؤال)"] },
    { h: "فعل مفرد", en: ["Everyone {v:is}…"] },
    { h: "الصفة بعده", en: ["something {k:new} · someone {k:else}"] }
  ]
};
