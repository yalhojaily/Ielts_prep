window.UNITS = window.UNITS || {};
window.UNITS[42] = {
  id: 42,
  title: "Questions overview",
  ar: "مراجعة الأسئلة",
  idea: "كل أنواع الأسئلة تعود إلى قاعدتين: **قلب المساعد والفاعل** (أو إضافة do)، و**الاستثناءات**: سؤال الفاعل والسؤال غير المباشر لا يقلبان الترتيب.",
  uses: [
    ["عادي: مساعد قبل الفاعل", "Where do you live?"],
    ["سؤال الفاعل: بلا do", "Who lives here?"],
    ["غير مباشر: ترتيب خبري", "Do you know where he lives?"],
    ["ذيلي وقصير: مساعد + ضمير", "He lives here, doesn't he? / Does he?"]
  ],
  formula: [
    ["مباشر", "{q:What} {a:did} {s:she} {v:say}?"],
    ["فاعل", "{q:Who} {v:said} that?"],
    ["غير مباشر", "Tell me {q:what} {s:she} {v:said}."],
    ["ذيلي", "{s:She} {v:said} it, {a:didn't} {s:she}?"]
  ],
  notes: [
    { title: "خطوات تكوين أي سؤال",
      body: "1) حدد الزمن. 2) هل يوجد مساعد؟ إن لا، أضف do/does/did. 3) هل تسأل عن الفاعل؟ إن نعم، لا تقلب. 4) هل السؤال غير مباشر؟ إن نعم، لا تقلب.",
      en: "She has finished. → {a:Has} she {v:finished}? → Do you know {x:if} she {a:has} {v:finished}?" },
    { title: "حرف الجر في النهاية",
      body: "في الأسئلة يأتي حرف الجر عادةً في آخر السؤال لا في أوله.",
      en: "{q:Who} did you go {x:with}? · {q:What} is it {x:for}?" }
  ],
  examples: [
    ["{q:How long} {a:have} {s:you} {v:been} waiting?", "منذ متى تنتظر؟"],
    ["{q:Who} {v:invented} the internet?", "من اخترع الإنترنت؟"],
    ["Could you tell me {q:where} {s:the exit} {a:is}?", "هل يمكنك إخباري أين المخرج؟"],
    ["{s:You}'re coming, {a:aren't} {s:you}?", "ستأتي، أليس كذلك؟"],
    ["{q:What} {a:would} {s:you} {v:do} in my position?", "ماذا كنت ستفعل لو كنت مكاني؟"]
  ],
  mistakes: [
    ["Who did break the cup?", "Who broke the cup?", "سؤال الفاعل."],
    ["Can you tell me what time is it?", "Can you tell me what time it is?", "غير مباشر: ترتيب خبري."],
    ["Where you went last night?", "Where did you go last night?", "سؤال عادي: نضيف `did`."],
    ["You like it, isn't it?", "You like it, don't you?", "الذيل يطابق الفعل والفاعل."]
  ],
  ielts: {
    text: "هذه القاعدة تُختبر بشكل غير مباشر في كل أجزاء IELTS. أكثر ما يهمك: فهم أسئلة الممتحن بسرعة، وطرح سؤال توضيح غير مباشر بشكل صحيح، وعدم الخطأ في `What happened` و`Who + verb`.",
    en: "Sorry, could you explain what you mean by “public facilities”?"
  },
  questions: [
    { t: "mcq", q: "Who ___ you this book?", o: ["did give", "gave", "did gave", "give"], a: 1, why: "سؤال الفاعل: `gave`." },
    { t: "mcq", q: "Do you know where ___?", o: ["does she live", "she lives", "lives she", "she does live"], a: 1, why: "غير مباشر: `she lives`." },
    { t: "mcq", q: "She's never been abroad, ___?", o: ["has she", "hasn't she", "is she", "isn't she"], a: 0, why: "`never` منفية ← `has she`." },
    { t: "mcq", q: "“I don't like spicy food.” “Neither ___ I.”", o: ["don't", "do", "am", "like"], a: 1, why: "`Neither do I`." },
    { t: "mcq", q: "How long ___ you known each other?", o: ["did", "are", "have", "do"], a: 2, why: "`How long have you known`." },
    { t: "mcq", q: "Which of you ___ the window?", o: ["did open", "opened", "do open", "opening"], a: 1, why: "`Which of you` فاعل." },
    { t: "fill", q: "What ___ (happen) after I left?", a: ["happened"], why: "سؤال فاعل." },
    { t: "fill", q: "I wonder why she ___ (not / reply).", a: ["didn't reply", "hasn't replied", "did not reply", "has not replied"], why: "غير مباشر: ترتيب خبري." },
    { t: "fill", q: "Who are you waiting ___?", a: ["for"], why: "`wait for` وحرف الجر في النهاية." },
    { t: "fix", q: "What did happen to your phone?", a: ["What happened to your phone?"], why: "سؤال فاعل." },
    { t: "fix", q: "Could you tell me how much does it cost?", a: ["Could you tell me how much it costs?"], why: "غير مباشر." },
    { t: "fix", q: "Why you didn't call me?", a: ["Why didn't you call me?"], why: "المساعد قبل الفاعل." },
    { t: "rewrite", q: "Is the library open on Fridays? (Begin with: Do you know ...)", ask: "حوّل إلى سؤال غير مباشر.", a: ["Do you know if the library is open on Fridays?", "Do you know whether the library is open on Fridays?"], why: "`if` + ترتيب خبري." }
  ]
};
