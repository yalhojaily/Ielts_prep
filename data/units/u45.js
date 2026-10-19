window.UNITS = window.UNITS || {};
window.UNITS[45] = {
  id: 45,
  title: "Reporting verbs",
  ar: "أفعال النقل",
  idea: "بدل `say` و`tell` نستطيع استخدام أفعال تصف **نوع الكلام**: وعد، نصيحة، اعتذار، رفض... كل فعل له **نمط** بعده يجب حفظه: `to + verb`، أو `someone + to + verb`، أو `-ing`، أو `that`.",
  uses: [
    ["verb + to", "She promised to help. / He refused to pay."],
    ["verb + someone + to", "He advised me to rest. / She asked me to wait."],
    ["verb + -ing", "He suggested going out. / She denied stealing it."],
    ["verb + that", "He explained that the road was closed."]
  ],
  formula: [
    ["+ to", "{v:agree, offer, promise, refuse, threaten, decide} + {a:to} {v:verb}"],
    ["+ someone + to", "{v:advise, ask, encourage, invite, remind, warn, tell, order} + {s:sb} + {a:to} {v:verb}"],
    ["+ -ing", "{v:suggest, deny, admit, recommend} + {v:-ing}"],
    ["+ preposition + -ing", "{v:apologise for, accuse sb of, insist on, blame sb for} + {v:-ing}"]
  ],
  notes: [
    { title: "suggest لا يأخذ to",
      body: "أكثر خطأ شائع. نقول `suggest going` أو `suggest that we go`، لا `suggest to go` ولا `suggest me to`.",
      en: "He {v:suggested} {v:taking} a taxi. · He {v:suggested} that we {v:take} a taxi." },
    { title: "النفي مع to",
      body: "النفي يأتي قبل `to`.",
      en: "She warned me {n:not} {a:to} {v:be} late." },
    { title: "explain لا يأخذ شخصًا مباشرة",
      body: "نقول `explain something to someone`.",
      en: "He {v:explained} the rule {x:to} me. (not: explained me)" }
  ],
  examples: [
    ["{s:He} {v:promised} {a:to} {v:send} the money.", "وعد بإرسال المال."],
    ["{s:The teacher} {v:encouraged} {s:us} {a:to} {v:read} more.", "شجعنا المعلم على القراءة أكثر."],
    ["{s:She} {v:admitted} {v:making} a mistake.", "اعترفت بأنها أخطأت."],
    ["{s:He} {v:apologised} for {v:being} late.", "اعتذر عن تأخره."],
    ["{s:They} {v:refused} {a:to} {v:accept} the offer.", "رفضوا قبول العرض."]
  ],
  mistakes: [
    ["He suggested me to see a doctor.", "He suggested that I see a doctor. / He advised me to see a doctor.", "`suggest` لا يأخذ شخصًا + to."],
    ["She explained me the problem.", "She explained the problem to me.", "`explain something to someone`."],
    ["He apologised to be late.", "He apologised for being late.", "`apologise for + -ing`."],
    ["They denied to take the money.", "They denied taking the money.", "`deny + -ing`."]
  ],
  ielts: {
    text: "أفعال النقل ترفع **Lexical Resource** و**Grammatical Range** معًا. في **Writing Task 2** استخدم `argue, claim, suggest, point out` لعرض الآراء بدلًا من `say` المتكررة.",
    en: "Some experts argue that homework is unnecessary, while others point out that it helps students develop discipline."
  },
  questions: [
    { t: "mcq", q: "She promised ___ me with my project.", o: ["helping", "to help", "help", "that help"], a: 1, why: "`promise to`." },
    { t: "mcq", q: "My friend suggested ___ to the new restaurant.", o: ["to go", "going", "me to go", "go"], a: 1, why: "`suggest + -ing`." },
    { t: "mcq", q: "The doctor advised me ___ sugar.", o: ["to avoid", "avoiding", "avoid", "for avoiding"], a: 0, why: "`advise someone to`." },
    { t: "mcq", q: "He denied ___ the window.", o: ["to break", "breaking", "break", "that break"], a: 1, why: "`deny + -ing`." },
    { t: "mcq", q: "She apologised ___ late.", o: ["to be", "for being", "being", "of being"], a: 1, why: "`apologise for + -ing`." },
    { t: "mcq", q: "They warned us ___ swim there.", o: ["not to", "to not", "don't", "not"], a: 0, why: "`warn someone not to`." },
    { t: "fill", q: "He refused ___ (answer) the question.", a: ["to answer"], why: "`refuse to`." },
    { t: "fill", q: "She reminded me ___ (lock) the door.", a: ["to lock"], why: "`remind someone to`." },
    { t: "fill", q: "He admitted ___ (cheat) in the exam.", a: ["cheating"], why: "`admit + -ing`." },
    { t: "fill", q: "They accused him ___ stealing the money.", a: ["of"], why: "`accuse someone of`." },
    { t: "fix", q: "He suggested me to take a break.", a: ["He suggested that I take a break.", "He suggested that I should take a break.", "He suggested taking a break."], why: "`suggest` لا يأخذ `me to`." },
    { t: "fix", q: "The teacher explained us the rule.", a: ["The teacher explained the rule to us."], why: "`explain something to someone`." },
    { t: "rewrite", q: "“I'll pay you back tomorrow,” he said. (Use: promised)", ask: "انقل الكلام بالفعل المعطى.", a: ["He promised to pay me back the next day.", "He promised to pay me back the following day.", "He promised that he would pay me back the next day."], why: "`promise to` + فعل." }
  ]
};
