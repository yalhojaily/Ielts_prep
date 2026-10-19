window.UNITS = window.UNITS || {};
window.UNITS[114] = {
  id: 114,
  title: "Prefixes",
  ar: "البادئات",
  idea: "البادئة جزء يُضاف إلى **أول الكلمة** ليغيّر معناها دون تغيير نوعها. أهمها بادئات **النفي** (`un-, in-, im-, il-, ir-, dis-`) التي تعطي العكس، وبادئات المعنى (`re-` إعادة، `pre-` قبل، `over-` أكثر من اللازم، `mis-` خطأ).",
  uses: [
    ["النفي", "happy → unhappy, possible → impossible"],
    ["re- = من جديد", "write → rewrite, build → rebuild"],
    ["mis- = بشكل خاطئ", "understand → misunderstand"],
    ["over- / under-", "overcrowded, underpaid"]
  ],
  formula: [
    ["un-", "{x:un}happy · {x:un}able · {x:un}employed · {x:un}fair"],
    ["in- / im- / il- / ir-", "{x:in}correct · {x:im}possible (قبل p/m) · {x:il}legal (قبل l) · {x:ir}regular (قبل r)"],
    ["dis-", "{x:dis}agree · {x:dis}like · {x:dis}appear · {x:dis}honest"],
    ["أخرى", "{x:re}use · {x:pre}view · {x:mis}take · {x:over}work · {x:co}operate · {x:inter}national"]
  ],
  notes: [
    { title: "قاعدة im / il / ir",
      body: "`im-` قبل p, m, b. `il-` قبل l. `ir-` قبل r. لكنها ليست قاعدة مطلقة، فاحفظ الشائع.",
      en: "{x:im}patient · {x:im}mature · {x:il}logical · {x:ir}relevant" },
    { title: "بادئات تتطلب الحفظ",
      body: "لا نقول `unpossible` ولا `inhappy`. كل كلمة لها بادئتها.",
      en: "{x:un}comfortable · {x:in}convenient · {x:dis}satisfied" }
  ],
  examples: [
    ["The instructions were {x:un}clear.", "كانت التعليمات غير واضحة."],
    ["It's {x:il}legal to park here.", "الوقوف هنا مخالف للقانون."],
    ["I think you {x:mis}understood me.", "أظنك أسأت فهمي."],
    ["Please {x:re}write this paragraph.", "أعد كتابة هذه الفقرة من فضلك."],
    ["Many nurses are {x:under}paid.", "كثير من الممرضين يتقاضون أقل مما يستحقون."]
  ],
  mistakes: [
    ["unpossible", "impossible", "`im-` قبل p."],
    ["inlegal", "illegal", "`il-` قبل l."],
    ["unagree", "disagree", "`dis-`."],
    ["inhonest", "dishonest", "`dis-`."]
  ],
  ielts: {
    text: "البادئات طريقة سريعة لتوسيع مفرداتك في **Writing Task 2**: `unemployment`, `overpopulation`, `irreversible`, `inadequate`, `unsustainable`. وتساعدك على تخمين معاني الكلمات في **Reading**.",
    en: "Overpopulation and unemployment are serious problems, and some of the damage to the environment may be irreversible."
  },
  questions: [
    { t: "mcq", q: "It's ___ to finish this in one hour.", o: ["unpossible", "impossible", "inpossible", "dispossible"], a: 1, why: "`impossible`." },
    { t: "mcq", q: "Driving without a licence is ___.", o: ["unlegal", "illegal", "inlegal", "dislegal"], a: 1, why: "`illegal`." },
    { t: "mcq", q: "I ___ with you completely.", o: ["unagree", "disagree", "misagree", "inagree"], a: 1, why: "`disagree`." },
    { t: "mcq", q: "Sorry, I ___ the question.", o: ["disunderstood", "misunderstood", "ununderstood", "reunderstood"], a: 1, why: "`misunderstood`." },
    { t: "mcq", q: "The bus was ___. There was no space to stand.", o: ["undercrowded", "overcrowded", "miscrowded", "precrowded"], a: 1, why: "`overcrowded`." },
    { t: "fill", q: "That's not correct. It's ___correct.", a: ["in"], why: "`incorrect`." },
    { t: "fill", q: "He's ___employed. He's looking for a job.", a: ["un"], why: "`unemployed`." },
    { t: "fill", q: "The information is ___relevant to the topic.", a: ["ir"], why: "`irrelevant`." },
    { t: "fill", q: "Please ___read your essay before you submit it.", a: ["re"], why: "`reread`." },
    { t: "fix", q: "The service was very unsatisfied.", a: ["The service was very unsatisfactory."], why: "`unsatisfactory` للشيء." },
    { t: "fix", q: "He is very unhonest.", a: ["He is very dishonest."], why: "`dishonest`." },
    { t: "fix", q: "She is very inpatient with her students.", a: ["She is very impatient with her students."],
      why: "قبل p نستخدم `im-`: `impatient`." }
  ]
};
