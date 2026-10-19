window.UNITS = window.UNITS || {};
window.UNITS[58] = {
  id: 58,
  title: "Permission, requests, and offers",
  ar: "الإذن والطلب والعرض",
  idea: "نطلب الإذن بـ `Can I / Could I / May I` (من الأقل إلى الأكثر رسمية). ونطلب من غيرنا بـ `Can you / Could you / Would you`. ونعرض المساعدة بـ `Shall I / Can I / Would you like`. وكلما زادت الرسمية كان الطلب أطول وأكثر تهذيبًا.",
  uses: [
    ["طلب إذن", "Could I use your phone?"],
    ["طلب من شخص", "Would you mind closing the window?"],
    ["عرض", "Shall I carry that for you? / Would you like a drink?"],
    ["إعطاء الإذن أو رفضه", "Yes, of course. / I'm afraid you can't."]
  ],
  formula: [
    ["إذن", "{a:Can / Could / May} {s:I} {v:sit} here?"],
    ["طلب", "{a:Can / Could / Would} {s:you} {v:help} me?"],
    ["مهذب جدًا", "{a:Would} you {v:mind} {v:helping} me? · {a:Do} you {v:mind} if I {v:open} the window?"],
    ["عرض", "{a:Shall} I {v:help}? · {a:Would} you {v:like} me {a:to} {v:help}?"]
  ],
  notes: [
    { title: "Would you mind",
      body: "بعدها `-ing`. والإجابة بالموافقة تكون **بالنفي**: `No, not at all` = لا أمانع.",
      en: "{a:Would} you {v:mind} {v:waiting}? — No, not at all." },
    { title: "Could في الطلب ليس ماضيًا",
      body: "`Could you...?` هنا تعني التهذيب، لا الماضي.",
      en: "{a:Could} you {v:send} me the file, please?" },
    { title: "I was wondering if...",
      body: "أكثر الصيغ تهذيبًا، مناسبة للرسائل الرسمية.",
      en: "I {a:was} {v:wondering} if you {a:could} {v:help} me." }
  ],
  examples: [
    ["{a:May} {s:I} {v:ask} a question?", "هل لي أن أطرح سؤالًا؟"],
    ["{a:Could} {s:you} {v:repeat} that, please?", "هل يمكنك إعادة ذلك من فضلك؟"],
    ["{a:Would} {s:you} {v:like} me {a:to} {v:drive}?", "هل تريدني أن أقود؟"],
    ["{a:Do} {s:you} {v:mind} if I {v:sit} here?", "هل تمانع إن جلست هنا؟"],
    ["I {a:was} {v:wondering} if I {a:could} {v:leave} early today.", "كنت أتساءل إن كان بإمكاني المغادرة مبكرًا اليوم."]
  ],
  mistakes: [
    ["Would you mind to open the door?", "Would you mind opening the door?", "`mind + -ing`."],
    ["Can you to help me?", "Can you help me?", "لا to."],
    ["Do you want that I help you?", "Shall I help you? / Would you like me to help you?", "العرض: `Shall I` أو `Would you like me to`."],
    ["“Would you mind waiting?” “Yes.” (meaning OK)", "“No, not at all.”", "`Yes` هنا تعني «نعم أمانع»."]
  ],
  ielts: {
    text: "في **Speaking**: `Could you repeat the question, please?` مسموحة ولا تخفض درجتك. وفي **General Writing Task 1** الطلبات المهذبة أساسية: `I would be grateful if you could...`, `Would it be possible to...?`",
    en: "I would be grateful if you could send me further details about the course."
  },
  questions: [
    { t: "mcq", q: "___ I use your charger, please?", o: ["Could", "Would", "Shall", "Do"], a: 0, why: "طلب إذن: `Could I`." },
    { t: "mcq", q: "Would you mind ___ the music down?", o: ["to turn", "turning", "turn", "turned"], a: 1, why: "`mind + -ing`." },
    { t: "mcq", q: "Your bags look heavy. ___ I help you?", o: ["Shall", "Will", "Would", "Must"], a: 0, why: "عرض: `Shall I`." },
    { t: "mcq", q: "“Do you mind if I open the window?” “___ It's hot.”", o: ["Yes, I do.", "No, go ahead.", "Yes, please.", "No, I mind."], a: 1, why: "موافقة: `No, go ahead`." },
    { t: "mcq", q: "Would you like ___ some coffee?", o: ["drink", "to drink", "drinking", "for drink"], a: 1, why: "`would like + to`." },
    { t: "fill", q: "___ you tell me the time, please?", a: ["Could", "Can", "Would"], why: "طلب: `Could you`." },
    { t: "fill", q: "Would you like me ___ (call) a taxi?", a: ["to call"], why: "`would like + sb + to`." },
    { t: "fill", q: "Do you mind if I ___ (smoke)?", a: ["smoke"], why: "`if I smoke`." },
    { t: "fix", q: "Would you mind to wait outside?", a: ["Would you mind waiting outside?"], why: "`mind waiting`." },
    { t: "fix", q: "Do you want that I carry it?", a: ["Shall I carry it?", "Would you like me to carry it?", "Do you want me to carry it?"], why: "عرض المساعدة." },
    { t: "fix", q: "May you help me?", a: ["Could you help me?", "Can you help me?", "Would you help me?"], why: "`May` لطلب الإذن لنفسك فقط (May I)." },
    { t: "rewrite", q: "Open the window. (Make it a polite request with: Could you)", ask: "حوّل الأمر إلى طلب مهذب.", a: ["Could you open the window, please?", "Could you open the window?", "Could you please open the window?"], why: "`Could you + verb`." }
  ]
};
