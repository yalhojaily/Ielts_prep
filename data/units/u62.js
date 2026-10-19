window.UNITS = window.UNITS || {};
window.UNITS[62] = {
  id: 62,
  title: "Possibility",
  ar: "الإمكان والاحتمال",
  idea: "`may, might, could` تعبر عن احتمال في الحاضر أو المستقبل. `could` أيضًا للاحتمال النظري (`It could be dangerous`). و`can` للإمكان العام (`It can be cold in winter`). وللماضي: `may / might / could have + v3`.",
  uses: [
    ["احتمال حاضر أو مستقبل", "He may be in a meeting."],
    ["إمكان عام (أحيانًا يحدث)", "Driving in the city can be stressful."],
    ["احتمال ماضٍ لم يحدث", "You could have been killed!"],
    ["ربما حدث في الماضي", "She might have missed the bus."]
  ],
  formula: [
    ["حاضر / مستقبل", "{s:It} {a:may / might / could} {v:rain}."],
    ["عام", "{s:Smoking} {a:can} {v:cause} cancer."],
    ["ماضٍ", "{s:They} {a:may / might / could have} {v:left}."],
    ["نفي", "{s:She} {a:may not / might not} {v:know}."]
  ],
  notes: [
    { title: "could have = كان ممكنًا لكنه لم يحدث",
      body: "تعبر عن فرصة ضائعة أو خطر نجونا منه.",
      en: "You {a:could have} {v:asked} me for help! · We {a:could have} {v:won}." },
    { title: "maybe ليست may be",
      body: "`maybe` ظرف بمعنى ربما ويأتي في أول الجملة. `may be` فعل.",
      en: "{x:Maybe} he's right. = He {a:may} {v:be} right." }
  ],
  examples: [
    ["{s:The flight} {a:could} {v:be} delayed because of the storm.", "قد تتأخر الرحلة بسبب العاصفة."],
    ["{s:Investing} {a:can} {v:be} risky.", "الاستثمار قد يكون محفوفًا بالمخاطر."],
    ["{s:I} {a:might not} {v:have} time to call.", "قد لا يكون لدي وقت للاتصال."],
    ["{s:He} {a:may have} {v:taken} the wrong road.", "ربما سلك الطريق الخطأ."],
    ["{s:You} {a:could have} {v:told} me earlier!", "كان بإمكانك إخباري أبكر!"]
  ],
  mistakes: [
    ["May be he is sick.", "Maybe he is sick. / He may be sick.", "`Maybe` كلمة واحدة في أول الجملة."],
    ["It could rained.", "It could have rained. / It could rain.", "بعد الفعل الناقص فعل أصلي أو `have + v3`."],
    ["He might comes.", "He might come.", "لا s."]
  ],
  ielts: {
    text: "في **Writing Task 2** هذه الأفعال أساس التحفظ: `This could lead to...`, `It may be argued that...`, `Technology can sometimes...`. تجنب الأحكام المطلقة.",
    en: "Social media can be a useful tool, but excessive use may have a negative effect on mental health."
  },
  questions: [
    { t: "mcq", q: "Take a jacket. It ___ get cold later.", o: ["might", "must", "can't", "should have"], a: 0, why: "احتمال: `might`." },
    { t: "mcq", q: "Winters in Tabuk ___ be very cold.", o: ["can", "must", "might have", "should"], a: 0, why: "إمكان عام: `can`." },
    { t: "mcq", q: "You ___ been hurt! Be more careful.", o: ["could have", "could", "can have", "must"], a: 0, why: "خطر نجونا منه: `could have`." },
    { t: "mcq", q: "___ he's stuck in traffic.", o: ["May be", "Maybe", "Might", "Could"], a: 1, why: "الظرف: `Maybe`." },
    { t: "mcq", q: "She ___ not know about the meeting.", o: ["may", "can", "must", "should"], a: 0, why: "`may not` = ربما لا." },
    { t: "fill", q: "He isn't here. He ___ (might / go) home already.", a: ["might have gone", "may have gone"], why: "ماضٍ محتمل." },
    { t: "fill", q: "We ___ (could / win) if we had trained more.", a: ["could have won"], why: "فرصة ضائعة." },
    { t: "fill", q: "Too much sugar ___ (can / cause) health problems.", a: ["can cause"], why: "`can cause`." },
    { t: "fix", q: "May be it will rain.", a: ["Maybe it will rain.", "It may rain."], why: "`Maybe`." },
    { t: "fix", q: "She could missed the train.", a: ["She could have missed the train."], why: "`could have missed`." },
    { t: "fix", q: "They might to come later.", a: ["They might come later."], why: "لا to." },
    { t: "rewrite", q: "Perhaps she forgot about the appointment. (Use: may have)", ask: "أعد الصياغة.", a: ["She may have forgotten about the appointment."], why: "`may have forgotten`." }
  ]
};
