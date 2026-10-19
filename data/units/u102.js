window.UNITS = window.UNITS || {};
window.UNITS[102] = {
  id: 102,
  title: "Adverbs of frequency",
  ar: "ظروف التكرار",
  idea: "ظروف التكرار تجيب عن «كم مرة؟»: `always (100%) > usually > often > sometimes > occasionally > rarely / seldom > never (0%)`. وموقعها **قبل الفعل الأساسي**، و**بعد فعل be** والفعل المساعد.",
  uses: [
    ["قبل الفعل الأساسي", "I usually drink tea."],
    ["بعد be", "She is always late."],
    ["بعد المساعد", "I have never been to China. / You can always call me."],
    ["عبارات التكرار في النهاية", "once a week, twice a month, every day"]
  ],
  formula: [
    ["فعل عادي", "{s:I} {x:often} {v:read} at night."],
    ["be", "{s:He} {v:is} {x:never} on time."],
    ["مساعد", "{s:We} {a:have} {x:always} {v:lived} here."],
    ["عبارة", "{s:I} {v:go} to the gym {x:three times a week}."]
  ],
  notes: [
    { title: "sometimes في البداية",
      body: "`sometimes, usually, often` يمكن وضعها في أول الجملة للتأكيد. `always` و`never` لا تأتي في البداية عادة.",
      en: "{x:Sometimes} I work from home." },
    { title: "never = منفية",
      body: "لا نجمع `never` مع `not`.",
      en: "I {x:never} eat fast food. (not: I don't never)" },
    { title: "hardly ever",
      body: "= نادرًا جدًا.",
      en: "I {x:hardly ever} watch TV." },
    { title: "سؤال How often",
      body: "للسؤال عن التكرار نستخدم `How often`، والإجابة الأفضل بعبارة تكرار دقيقة.",
      en: "{q:How often} do you exercise? — {x:About twice a week}." }
  ],
  examples: [
    ["I {x:always} pray Fajr at the mosque.", "أصلي الفجر دائمًا في المسجد."],
    ["She is {x:usually} very busy on Mondays.", "عادة ما تكون مشغولة جدًا يوم الاثنين."],
    ["We {x:rarely} eat out.", "نادرًا ما نأكل خارج البيت."],
    ["Have you {x:ever} been to Japan?", "هل زرت اليابان من قبل؟"],
    ["I check the market {x:twice a day}.", "أتابع السوق مرتين في اليوم."]
  ],
  mistakes: [
    ["I go always to work by car.", "I always go to work by car.", "قبل الفعل الأساسي."],
    ["She always is tired.", "She is always tired.", "بعد be."],
    ["I don't never smoke.", "I never smoke.", "`never` منفية."],
    ["I visit my parents one time in a week.", "I visit my parents once a week.", "`once a week`."]
  ],
  ielts: {
    text: "**Speaking Part 1** مليء بأسئلة التكرار (`How often do you...?`). أجب بدقة: `I tend to go about twice a week` أفضل من `Yes, sometimes`. وتعبير `tend to` بديل جيد لـ usually.",
    en: "I tend to read in the evenings, usually for about an hour, but I hardly ever read on weekdays when I'm busy."
  },
  questions: [
    { t: "mcq", q: "I ___ coffee in the morning.", o: ["drink usually", "usually drink", "usually am drinking", "drinking usually"], a: 1, why: "قبل الفعل." },
    { t: "mcq", q: "He ___ late for meetings.", o: ["often is", "is often", "often", "is often being"], a: 1, why: "بعد be." },
    { t: "mcq", q: "I have ___ seen snow.", o: ["never", "don't never", "not never", "ever not"], a: 0, why: "`never` بعد المساعد." },
    { t: "mcq", q: "We go to the beach ___ a month.", o: ["one time", "once", "one", "ones"], a: 1, why: "`once a month`." },
    { t: "mcq", q: "“How often do you travel?” “___.”", o: ["Two weeks", "About twice a year", "Yes, I travel", "Next week"], a: 1, why: "إجابة تكرار." },
    { t: "fill", q: "I ___ ever eat fast food. Maybe once a year.", a: ["hardly"], why: "`hardly ever`." },
    { t: "fill", q: "She goes swimming ___ a week. (2 times)", a: ["twice"], why: "`twice`." },
    { t: "fill", q: "Have you ___ been to Morocco?", a: ["ever"], why: "`ever` في السؤال." },
    { t: "fix", q: "I go sometimes to the cinema.", a: ["I sometimes go to the cinema.", "Sometimes I go to the cinema."], why: "قبل الفعل." },
    { t: "fix", q: "My brother never is angry.", a: ["My brother is never angry."], why: "بعد be." },
    { t: "fix", q: "I don't never drink soda.", a: ["I never drink soda.", "I don't ever drink soda."], why: "لا نفي مزدوج." },
    { t: "rewrite", q: "I go to the gym on Sunday, Tuesday and Thursday. (Use: three times a week)", ask: "أعد الصياغة.", a: ["I go to the gym three times a week."], why: "`three times a week`." }
  ]
};
