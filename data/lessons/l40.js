window.LESSONS = window.LESSONS || {};
window.LESSONS[40] = {
  steps: [
    { k: "الفكرة", h: "«حقًا؟» بالإنجليزية: Did you?",
      why: [
        "عندما يخبرك أحد بشيء، في العربية تقول «حقًا؟» أو «صحيح؟». في الإنجليزية الرد الطبيعي سؤال قصير: الفعل المساعد + الضمير.",
        "هذا الرد يُظهر أنك تستمع وتهتم، وهو مهم جدًا لتبدو طبيعيًا في المحادثة."
      ],
      show: [{ t: "map", cols: [{ h: "يقول ← ترد", c: "be", k: "a", rows: [["I went to Japan.", "Did you?"], ["She's leaving the company.", "Is she?"], ["I've just bought a car.", "Have you?"]] }] }],
      check: { q: "\"I love cooking.\" — \"___\"", o: ["Love you?", "Do you?", "Are you?"], a: 1, why: "الجملة بفعل عادي في المضارع ← `Do you?`" } },

    { k: "طابق الجملة", h: "نفس الزمن، ونفس الإثبات أو النفي",
      why: [
        "الرد القصير يطابق جملة المتكلم تمامًا: نفس الزمن، ونفس المساعد، وإذا كانت منفية يكون الرد منفيًا.",
        "(بعكس الذيل الذي يعكس النفي.) والفاعل يتحول إلى ضمير: `My sister` ← `she`."
      ],
      show: [{ t: "build", lab: "اختر ما قاله صديقك",
        opts: [["We've moved.", "“We{a:'ve} {v:moved}.” — “{a:Have} {s:you}?”", "", 0], ["My sister works there.", "“My sister {v:works} there.” — “{a:Does} {s:she}?”", "", 0],
               ["It's my birthday.", "“It{a:'s} my birthday.” — “{a:Is} {s:it}? Happy birthday!”", "", 0], ["They didn't win.", "“They {a:didn't} win.” — “{a:Didn't} {s:they}? That's a shame.”", "منفي ← رد منفي", 1]],
        groups: [{ h: "مثبت ← رد مثبت" }, { h: "منفي ← رد منفي" }] }],
      check: { q: "\"He isn't coming.\" — \"___\"", o: ["Is he?", "Isn't he?"], a: 1, why: "الجملة منفية ← الرد منفي `Isn't he?`" } },

    { k: "So / Neither", h: "وأنا كذلك: So do I · Neither do I",
      why: [
        "للموافقة («وأنا أيضًا») بعد جملة **مثبتة**: `So` + المساعد + الفاعل.",
        "بعد جملة **منفية** («ولا أنا»): `Neither` + المساعد + الفاعل. لاحظ أن الترتيب مقلوب: المساعد قبل الفاعل."
      ],
      show: [{ t: "compare", cols: [
        { h: "بعد مثبت: So", c: "verb", en: ["“I like tea.” “{k:So} {a:do} I.”", "“I'm tired.” “{k:So} {a:am} I.”"] },
        { h: "بعد منفي: Neither", c: "neg", en: ["“I can't swim.” “{k:Neither} {a:can} I.”", "“I didn't go.” “{k:Neither} {a:did} I.”"] }
      ] },
        { t: "fix", items: [["“I like coffee.” “So I do.”", "“{k:So} {a:do} I.”", "المساعد قبل الفاعل."], ["“I don't eat fish.” “So don't I.”", "“{k:Neither} {a:do} I.”", ""]] }],
      check: { q: "\"I haven't finished.\" — \"___\"", o: ["So have I.", "Neither have I.", "Neither I have."], a: 1, why: "بعد منفي ← `Neither` + المساعد `have` + `I`." } },

    { k: "سؤال بكلمة", h: "Who? · Where to? · Who with?",
      why: ["أحيانًا تريد معلومة واحدة فقط، فتسأل بأداة الاستفهام وحدها أو مع حرف جر."],
      show: [{ t: "map", cols: [{ h: "يقول ← تسأل", c: "qw", k: "q", rows: [["I'm going out.", "Where to?"], ["I met someone famous.", "Who?"], ["I'm travelling next week.", "Who with?"]] }] }],
      check: { q: "\"I'm going to the cinema tonight.\" — \"___\" (you want to know the companion)", o: ["Who with?", "Where to?"], a: 0, why: "تسأل عن الرفيق ← `Who with?`" } }
  ],
  sum: [
    { h: "الاهتمام", en: ["“I went to Japan.” “{a:Did} you?”"] },
    { h: "طابق", txt: "نفس الزمن والنفي", en: ["“He isn't…” “{a:Isn't} he?”"] },
    { h: "وأنا أيضًا", en: ["{k:So} {a:do} I. · {k:Neither} {a:do} I."] },
    { h: "بكلمة", en: ["Who? · Where to? · Who with?"] }
  ]
};
