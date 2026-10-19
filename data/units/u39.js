window.UNITS = window.UNITS || {};
window.UNITS[39] = {
  id: 39,
  title: "Question tags",
  ar: "الأسئلة الذيلية",
  idea: "السؤال الذيلي جملة قصيرة في آخر الكلام مثل «أليس كذلك؟». القاعدة: **جملة مثبتة ← ذيل منفي**، و**جملة منفية ← ذيل مثبت**. الذيل يكرر الفعل المساعد نفسه مع ضمير الفاعل.",
  uses: [
    ["طلب تأكيد", "You're from Jeddah, aren't you?"],
    ["مع do / does / did عندما لا يوجد مساعد", "She works here, doesn't she?"],
    ["جملة منفية", "They didn't call, did they?"]
  ],
  formula: [
    ["مثبت → منفي", "{s:It} {a:is} cold, {a:isn't} {s:it}?"],
    ["منفي → مثبت", "{s:You} {a:can't} swim, {a:can} {s:you}?"],
    ["بلا مساعد", "{s:He} {v:lives} here, {a:doesn't} {s:he}? · {s:You} {v:went}, {a:didn't} {s:you}?"]
  ],
  notes: [
    { title: "حالات خاصة",
      body: "`I am` ← `aren't I?`. الأمر ← `will you?`. `Let's` ← `shall we?`. `There is` ← `isn't there?`.",
      en: "I'm late, {a:aren't} I? · Open the door, {a:will} you? · Let's go, {a:shall} we?" },
    { title: "الكلمات المنفية المعنى",
      body: "`never, nobody, nothing, hardly` تجعل الجملة منفية، فالذيل مثبت.",
      en: "You {x:never} eat meat, {a:do} you? · {x:Nobody} called, {a:did} they?" },
    { title: "النبرة",
      body: "نبرة نازلة = متأكد وتطلب الموافقة. نبرة صاعدة = سؤال حقيقي.",
      en: "It's a nice day, isn't it? ↘ · You're coming, aren't you? ↗" }
  ],
  examples: [
    ["{s:You}{a:'ve} {v:met} my brother, {a:haven't} {s:you}?", "قابلت أخي، أليس كذلك؟"],
    ["{s:The exam} {a:wasn't} hard, {a:was} {s:it}?", "لم يكن الاختبار صعبًا، صحيح؟"],
    ["{s:She} {a:will} {v:help}, {a:won't} {s:she}?", "ستساعد، أليس كذلك؟"],
    ["{s:They} {v:sold} the house, {a:didn't} {s:they}?", "باعوا البيت، أليس كذلك؟"],
    ["{s:There}'s a problem, {a:isn't} {s:there}?", "هناك مشكلة، أليس كذلك؟"]
  ],
  mistakes: [
    ["You are tired, isn't it?", "You are tired, aren't you?", "الذيل يكرر الفاعل كضمير، لا نستخدم `isn't it` لكل شيء."],
    ["She likes tea, isn't she?", "She likes tea, doesn't she?", "الفعل `likes` بلا مساعد: `doesn't`."],
    ["I am right, amn't I?", "I am right, aren't I?", "الصيغة الخاصة: `aren't I`."],
    ["He never smokes, doesn't he?", "He never smokes, does he?", "`never` تجعل الجملة منفية."]
  ],
  ielts: {
    text: "في **Speaking** لا تحتاجها كثيرًا، لكنها تجعل كلامك طبيعيًا في **Part 3** عند تأكيد فكرة: `That's a common problem, isn't it?`. وفي **Listening** تأتي في الحوارات فلا تخلط معناها.",
    en: "Prices have gone up a lot recently, haven't they?"
  },
  questions: [
    { t: "mcq", q: "You're a teacher, ___?", o: ["isn't it", "aren't you", "don't you", "are you"], a: 1, why: "`You are` ← `aren't you`." },
    { t: "mcq", q: "He doesn't eat meat, ___?", o: ["doesn't he", "does he", "is he", "isn't he"], a: 1, why: "منفي ← مثبت: `does he`." },
    { t: "mcq", q: "I'm late, ___?", o: ["amn't I", "aren't I", "am not I", "isn't it"], a: 1, why: "`aren't I`." },
    { t: "mcq", q: "Let's start, ___?", o: ["shall we", "will we", "let's we", "don't we"], a: 0, why: "`Let's` ← `shall we`." },
    { t: "mcq", q: "Nobody came, ___?", o: ["didn't they", "did they", "did he", "came they"], a: 1, why: "`Nobody` منفي، ونستخدم `they`." },
    { t: "fill", q: "She can drive, ___ she?", a: ["can't"], why: "`can` ← `can't`." },
    { t: "fill", q: "They went to Turkey, ___ they?", a: ["didn't"], why: "ماضٍ بلا مساعد: `didn't`." },
    { t: "fill", q: "You haven't seen my phone, ___ you?", a: ["have"], why: "منفي ← مثبت: `have`." },
    { t: "fill", q: "There isn't any milk, ___ there?", a: ["is"], why: "`There isn't` ← `is there`." },
    { t: "fix", q: "She works in a bank, isn't she?", a: ["She works in a bank, doesn't she?"], why: "`works` ← `doesn't she`." },
    { t: "fix", q: "You will call me, will you?", a: ["You will call me, won't you?"], why: "مثبت ← منفي: `won't you`." },
    { t: "fix", q: "He never listens, doesn't he?", a: ["He never listens, does he?"], why: "`never` منفية." },
    { t: "rewrite", q: "The weather was nice. (Add a question tag)", ask: "أضف السؤال الذيلي.", a: ["The weather was nice, wasn't it?"], why: "`was` ← `wasn't it`." }
  ]
};
