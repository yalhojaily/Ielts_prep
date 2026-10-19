window.UNITS = window.UNITS || {};
window.UNITS[36] = {
  id: 36,
  title: "Open questions",
  ar: "الأسئلة المفتوحة",
  idea: "السؤال المغلق جوابه نعم أو لا. السؤال **المفتوح** يطلب معلومة أو رأيًا أو شرحًا، ويبدأ بأداة استفهام أو بعبارة مثل `What do you think about...?`. تكوينه مثل أي سؤال: الأداة ثم الترتيب المقلوب.",
  uses: [
    ["طلب معلومة", "Where did you grow up?"],
    ["طلب رأي", "What do you think of the new policy?"],
    ["طلب شرح أو وصف", "How does the system work?"],
    ["أدوات مركبة", "What kind of / How long / What time / How come"]
  ],
  formula: [
    ["مغلق", "{a:Do} {s:you} {v:like} it? → Yes / No"],
    ["مفتوح", "{q:What} {a:do} {s:you} {v:like} about it?"],
    ["رأي", "{q:What} {a:do} {s:you} {v:think} {x:of / about} ...?"],
    ["preposition في النهاية", "{q:Who} {a:did} {s:you} {v:talk} {x:to}?"]
  ],
  notes: [
    { title: "حرف الجر في آخر السؤال",
      body: "في الإنجليزية الطبيعية يأتي حرف الجر غالبًا في نهاية السؤال.",
      en: "{q:What} are you looking {x:at}? · {q:Who} is this gift {x:for}? · {q:Where} are you {x:from}?" },
    { title: "How come = Why (عامي)",
      body: "بعد `How come` لا نقلب الترتيب.",
      en: "{q:How come} you {v:are} late? = {q:Why} {a:are} you late?" },
    { title: "تحويل المغلق إلى مفتوح",
      body: "في المحادثة الأسئلة المفتوحة تجعل الطرف الآخر يتكلم أكثر.",
      en: "Did you enjoy it? → {q:What} {a:did} you {v:enjoy} most about it?" }
  ],
  examples: [
    ["{q:What} {a:do} {s:you} {v:do} in your free time?", "ماذا تفعل في وقت فراغك؟"],
    ["{q:How} {a:did} {s:you} {v:learn} to invest?", "كيف تعلمت الاستثمار؟"],
    ["{q:What kind of} books {a:do} {s:you} {v:read}?", "ما نوع الكتب التي تقرأها؟"],
    ["{q:Who} {a:are} {s:you} {v:waiting} for?", "من تنتظر؟"],
    ["{q:What} {a:would} {s:you} {v:change} about your city?", "ماذا ستغير في مدينتك؟"]
  ],
  mistakes: [
    ["For who is this gift?", "Who is this gift for?", "في الكلام الطبيعي حرف الجر في النهاية (`For whom` رسمية جدًا)."],
    ["What you think about it?", "What do you think about it?", "ينقص `do`."],
    ["How come are you here?", "How come you are here?", "بعد `How come` ترتيب الجملة الخبرية."]
  ],
  ielts: {
    text: "أسئلة **Speaking Part 3** مفتوحة دائمًا (`Why do you think...? How has... changed?`). لا تجب بجملة واحدة؛ الممتحن يريد سببًا ومثالًا. ومعرفة صيغة السؤال تساعدك على اختيار الزمن الصحيح للإجابة.",
    en: "Why do you think young people prefer online shopping? — I'd say it's mainly because it's convenient..."
  },
  questions: [
    { t: "mcq", q: "What are you looking ___?", o: ["for", "to", "on", "from"], a: 0, why: "`look for` = يبحث عن، وحرف الجر في النهاية." },
    { t: "mcq", q: "Where ___ you from?", o: ["do", "are", "is", "did"], a: 1, why: "`Where are you from?`" },
    { t: "mcq", q: "How come you ___ to the party?", o: ["didn't come", "did you not come", "not came", "didn't came"], a: 0, why: "بعد `How come` ترتيب خبري." },
    { t: "mcq", q: "___ of music do you listen to?", o: ["What kind", "Which kind's", "How kind", "What's kind"], a: 0, why: "`What kind of`." },
    { t: "fill", q: "Who did you go to the cinema ___?", a: ["with"], why: "`go with someone`." },
    { t: "fill", q: "What do you think ___ the new manager?", a: ["of", "about"], why: "`think of / about`." },
    { t: "fill", q: "What ___ you do if you won the lottery?", a: ["would"], why: "سؤال افتراضي: `would`." },
    { t: "fill", q: "Who is this letter ___? — It's for you.", a: ["for"], why: "`for` في النهاية." },
    { t: "fix", q: "What you are doing?", a: ["What are you doing?"], why: "الترتيب: مساعد ثم فاعل." },
    { t: "fix", q: "Who you were talking to?", a: ["Who were you talking to?"], why: "`were` قبل الفاعل." },
    { t: "fix", q: "How come did he leave early?", a: ["How come he left early?"], why: "بعد `How come` ترتيب خبري." },
    { t: "rewrite", q: "Did you like the hotel? (Make an open question with: What)", ask: "حوّل السؤال المغلق إلى مفتوح.",
      a: ["What did you like about the hotel?", "What did you think of the hotel?", "What did you think about the hotel?", "What was the hotel like?"], why: "سؤال مفتوح يطلب رأيًا." }
  ]
};
