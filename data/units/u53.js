window.UNITS = window.UNITS || {};
window.UNITS[53] = {
  id: 53,
  title: "Verb patterns with objects",
  ar: "أنماط الأفعال مع المفعول",
  idea: "بعض الأفعال تحتاج **مفعولًا (شخصًا) قبل الفعل الثاني**: `want someone to do`. وبعضها بعده فعل أصلي بلا to: `make / let someone do`. وأفعال أخرى تأخذ مفعولين: `give someone something`.",
  uses: [
    ["فعل + شخص + to", "I want you to come. / She asked me to wait."],
    ["make / let + شخص + فعل أصلي", "He made me laugh. / Let me help."],
    ["help + شخص + (to) فعل", "She helped me (to) move."],
    ["مفعولان", "He gave me a gift. / He gave a gift to me."]
  ],
  formula: [
    ["+ sb + to", "{v:want, ask, tell, advise, allow, encourage, expect, invite, persuade, remind, warn} + {s:sb} + {a:to} {v:verb}"],
    ["+ sb + verb", "{v:make, let} + {s:sb} + {v:verb}"],
    ["مفعولان", "{v:give, send, show, lend, buy, bring, offer} + {s:sb} + {x:sth}"]
  ],
  notes: [
    { title: "want لا تأخذ that",
      body: "لا نقول `I want that you come` (ترجمة من «أريد أن تأتي»). الصحيح `I want you to come`.",
      en: "I {v:want} {s:you} {a:to} {v:help} me." },
    { title: "make و let",
      body: "`make` = أجبر أو تسبب، و`let` = سمح. كلاهما بعده فعل أصلي **بلا to**. وفي المجهول `be made to`.",
      en: "My boss {v:made} {s:me} {v:work} late. · {v:Let} {s:me} {v:know}. · I {a:was} {v:made} {a:to} {v:wait}." },
    { title: "ترتيب المفعولين",
      body: "الشخص أولًا بلا حرف جر، أو الشيء أولًا ثم `to / for` + الشخص.",
      en: "She {v:sent} {s:me} a message. = She {v:sent} a message {x:to} me. · He {v:bought} a gift {x:for} his wife." }
  ],
  examples: [
    ["{s:My parents} {v:encouraged} {s:me} {a:to} {v:study} abroad.", "شجعني والداي على الدراسة في الخارج."],
    ["{s:The film} {v:made} {s:me} {v:cry}.", "جعلني الفيلم أبكي."],
    ["{s:They} {v:don't let} {s:us} {v:use} phones in class.", "لا يسمحون لنا باستخدام الهواتف في الفصل."],
    ["{a:Could} you {v:lend} {s:me} your pen?", "هل تعيرني قلمك؟"],
    ["{s:I} {v:expect} {s:him} {a:to} {v:call} soon.", "أتوقع أن يتصل قريبًا."]
  ],
  mistakes: [
    ["I want that you help me.", "I want you to help me.", "`want + sb + to`."],
    ["He made me to wait.", "He made me wait.", "بعد `make` فعل أصلي بلا to."],
    ["Let me to explain.", "Let me explain.", "بعد `let` بلا to."],
    ["She explained me the problem.", "She explained the problem to me.", "`explain` لا تأخذ مفعولين."]
  ],
  ielts: {
    text: "في **Writing Task 2** تراكيب مثل `allow people to`, `encourage students to`, `force companies to` أساسية لعرض الحلول. و`make people + verb` تفيد في وصف الأسباب.",
    en: "Higher taxes on fuel would encourage people to use public transport and make companies invest in cleaner technology."
  },
  questions: [
    { t: "mcq", q: "My manager wants me ___ the report today.", o: ["finish", "to finish", "finishing", "that I finish"], a: 1, why: "`want + sb + to`." },
    { t: "mcq", q: "The teacher made us ___ the essay again.", o: ["to write", "write", "writing", "wrote"], a: 1, why: "`make + sb + verb`." },
    { t: "mcq", q: "My father didn't let me ___ out late.", o: ["to go", "go", "going", "went"], a: 1, why: "`let + sb + verb`." },
    { t: "mcq", q: "He reminded me ___ the bills.", o: ["pay", "paying", "to pay", "for paying"], a: 2, why: "`remind + sb + to`." },
    { t: "mcq", q: "Can you show ___?", o: ["me the way", "to me the way", "the way me", "me to the way"], a: 0, why: "الشخص أولًا بلا حرف جر." },
    { t: "fill", q: "She asked me ___ (close) the window.", a: ["to close"], why: "`ask + sb + to`." },
    { t: "fill", q: "Let me ___ (help) you.", a: ["help"], why: "بعد `let` فعل أصلي." },
    { t: "fill", q: "The doctor advised him ___ (stop) smoking.", a: ["to stop"], why: "`advise + sb + to`." },
    { t: "fill", q: "I was made ___ (wait) for two hours.", a: ["to wait"], why: "في المجهول: `be made to`." },
    { t: "fix", q: "I want that you come with me.", a: ["I want you to come with me."], why: "`want you to`." },
    { t: "fix", q: "The movie made me to laugh.", a: ["The movie made me laugh."], why: "بلا to." },
    { t: "fix", q: "They don't allow us use the lift.", a: ["They don't allow us to use the lift.", "They do not allow us to use the lift."], why: "`allow + sb + to`." },
    { t: "rewrite", q: "“You should apply for the job,” my friend said to me. (Use: encouraged)", ask: "أعد الصياغة.", a: ["My friend encouraged me to apply for the job."], why: "`encourage + sb + to`." }
  ]
};
