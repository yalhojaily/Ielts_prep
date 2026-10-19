window.UNITS = window.UNITS || {};
window.UNITS[88] = {
  id: 88,
  title: "Inversion",
  ar: "القلب (تقديم الفعل المساعد للتأكيد)",
  idea: "في الأسلوب الرسمي، عندما نبدأ الجملة بكلمة **منفية أو مقيّدة** (`Never, Rarely, Not only, Hardly, Only then`) نقلب الترتيب كأنه سؤال: المساعد قبل الفاعل. هذا يضيف قوة وتأكيدًا.",
  uses: [
    ["Never / Rarely / Seldom", "Never have I seen such a beautiful view."],
    ["Not only ... but also", "Not only is it cheap, but it is also fast."],
    ["Hardly / No sooner ... than", "Hardly had I arrived when it started to rain."],
    ["Only + زمن", "Only then did I understand."]
  ],
  formula: [
    ["قلب", "{x:Never} {a:have} {s:I} {v:seen}... (= I have never seen)"],
    ["بلا مساعد: do", "{x:Rarely} {a:do} {s:we} {v:eat} out. (= We rarely eat out)"],
    ["not only", "{x:Not only} {a:did} {s:he} {v:win}, {x:but} he {x:also} broke the record."],
    ["شرط", "{a:Had} {s:I} {v:known}... (= If I had known)"]
  ],
  notes: [
    { title: "متى نستخدمه؟",
      body: "في الكتابة الرسمية والخطب. في الكلام اليومي نادر. جملة واحدة في المقال تكفي.",
      en: "{x:Not only} {a:does} pollution harm health, {x:but} it {x:also} damages the economy." },
    { title: "only + ظرف",
      body: "القلب يكون في الجزء الرئيسي، لا بعد only مباشرة.",
      en: "{x:Only after} the meeting {a:did} {s:I} {v:realise} the problem." },
    { title: "Little",
      body: "`Little did I know` = لم أكن أعلم أبدًا.",
      en: "{x:Little} {a:did} {s:I} {v:know} that my life would change." }
  ],
  examples: [
    ["{x:Never} {a:have} {s:I} {v:felt} so happy.", "لم أشعر أبدًا بهذه السعادة."],
    ["{x:Rarely} {a:does} {s:he} {v:make} mistakes.", "نادرًا ما يخطئ."],
    ["{x:Not only} {a:is} {s:she} smart, but she's also kind.", "ليست ذكية فقط، بل لطيفة أيضًا."],
    ["{x:No sooner} {a:had} {s:we} {v:sat} down {x:than} the phone rang.", "ما إن جلسنا حتى رن الهاتف."],
    ["{a:Should} {s:you} {v:need} help, please call.", "إن احتجت مساعدة، اتصل من فضلك."]
  ],
  mistakes: [
    ["Never I have seen this.", "Never have I seen this.", "نقلب: `have I`."],
    ["Not only he is rich, but also famous.", "Not only is he rich, but he is also famous.", "نقلب بعد Not only."],
    ["Rarely we go out.", "Rarely do we go out.", "نضيف `do`."],
    ["Hardly I had arrived when...", "Hardly had I arrived when...", "`had I`."]
  ],
  ielts: {
    text: "في **Writing Task 2** جملة واحدة بالقلب (`Not only does..., but it also...`) تظهر مدى تحكمك في القواعد وترفع **Grammatical Range**. لكن خطأ فيها يضرك أكثر من فائدتها، فتدرب عليها جيدًا قبل الاستخدام.",
    en: "Not only does regular exercise improve physical health, but it also reduces stress."
  },
  questions: [
    { t: "mcq", q: "Never ___ such a delicious meal.", o: ["I have eaten", "have I eaten", "I ate", "did I ate"], a: 1, why: "`have I eaten`." },
    { t: "mcq", q: "Rarely ___ late for work.", o: ["he is", "is he", "does he", "he does"], a: 1, why: "be: `is he`." },
    { t: "mcq", q: "Not only ___ the exam, but he also got the highest mark.", o: ["he passed", "did he pass", "he did pass", "passed he"], a: 1, why: "`did he pass`." },
    { t: "mcq", q: "Hardly had I closed my eyes ___ the alarm rang.", o: ["than", "when", "then", "that"], a: 1, why: "`Hardly ... when`." },
    { t: "mcq", q: "No sooner had we left ___ it started raining.", o: ["when", "than", "then", "that"], a: 1, why: "`No sooner ... than`." },
    { t: "fill", q: "Seldom ___ we see such talent.", a: ["do"], why: "`do we see`." },
    { t: "fill", q: "Little ___ I know what was going to happen.", a: ["did"], why: "`Little did I know`." },
    { t: "fill", q: "___ I known, I would have helped. (= If I had known)", a: ["Had"], why: "`Had I known`." },
    { t: "fix", q: "Never I have been so tired.", a: ["Never have I been so tired."], why: "قلب." },
    { t: "fix", q: "Not only she speaks French, but she also speaks German.", a: ["Not only does she speak French, but she also speaks German."], why: "`does she speak`." },
    { t: "fix", q: "Only then I understood the problem.", a: ["Only then did I understand the problem."], why: "`did I understand`." },
    { t: "rewrite", q: "I have never heard such nonsense. (Begin with: Never ...)", ask: "أعد الصياغة بالقلب.", a: ["Never have I heard such nonsense."], why: "`Never have I heard`." }
  ]
};
