window.UNITS = window.UNITS || {};
window.UNITS[37] = {
  id: 37,
  title: "Object and subject questions",
  ar: "السؤال عن الفاعل والسؤال عن المفعول",
  idea: "إذا كانت أداة الاستفهام (`who / what / which`) تسأل عن **الفاعل**، فلا نستخدم `do / does / did`، ويبقى الترتيب كالجملة الخبرية. أما إذا سألت عن **المفعول** فنستخدم الترتيب المعتاد مع المساعد.",
  uses: [
    ["سؤال عن الفاعل (بدون did)", "Who called you? — Ali called me."],
    ["سؤال عن المفعول (مع did)", "Who did you call? — I called Ali."]
  ],
  formula: [
    ["فاعل", "{q:Who} {v:broke} the window? {x:(Someone broke it)}"],
    ["مفعول", "{q:Who} {a:did} {s:you} {v:see}? {x:(You saw someone)}"],
    ["what فاعل", "{q:What} {v:happened}? · {q:What} {v:makes} you happy?"]
  ],
  notes: [
    { title: "كيف تعرف؟",
      body: "اكتب الجواب أولًا. إذا كانت الإجابة هي من **قام** بالفعل فهو سؤال فاعل.",
      en: "{s:Sara} {v:helped} me. → {q:Who} {v:helped} you? · Sara {v:helped} {s:me}. → {q:Who} {a:did} Sara {v:help}?" },
    { title: "الفعل مع المفرد",
      body: "في سؤال الفاعل بالمضارع يأخذ الفعل `-s` عادة: `Who lives here?`",
      en: "{q:Who} {v:knows} the answer? · {q:What} {v:causes} the problem?" },
    { title: "What happened",
      body: "`What happened?` دائمًا سؤال فاعل. لا تقل `What did happen?`",
      en: "{q:What} {v:happened} to your car?" }
  ],
  examples: [
    ["{q:Who} {v:wrote} this book?", "من كتب هذا الكتاب؟"],
    ["{q:What} {a:did} {s:you} {v:write} in the essay?", "ماذا كتبت في المقال؟"],
    ["{q:Which team} {v:won} the match?", "أي فريق فاز بالمباراة؟"],
    ["{q:Who} {v:lives} in that house?", "من يسكن ذلك البيت؟"],
    ["{q:What} {v:caused} the crash?", "ما الذي سبب الحادث؟"]
  ],
  mistakes: [
    ["Who did call you?", "Who called you?", "سؤال عن الفاعل: لا `did`."],
    ["What did happen?", "What happened?", "`What` هنا فاعل."],
    ["Who you met at the party?", "Who did you meet at the party?", "سؤال عن المفعول: نحتاج `did`."],
    ["Who live here?", "Who lives here?", "سؤال الفاعل المفرد: `lives`."]
  ],
  ielts: {
    text: "خطأ `Who did...` و`What did happen` يلاحظه الممتحن بسهولة. وفي **Listening** و**Reading** فهم سؤال الفاعل والمفعول يمنعك من الخلط بين من فعل ومن وقع عليه الفعل.",
    en: "What made you choose this career? — Mainly my father; he worked in finance too."
  },
  questions: [
    { t: "mcq", q: "Who ___ the Mona Lisa?", o: ["did paint", "painted", "did painted", "paint"], a: 1, why: "سؤال عن الفاعل: `painted`." },
    { t: "mcq", q: "What ___ at the meeting yesterday?", o: ["did happen", "happened", "was happened", "happen"], a: 1, why: "`What happened`." },
    { t: "mcq", q: "Who ___ you invite to your wedding?", o: ["did", "was", "has", "are"], a: 0, why: "سؤال عن المفعول (أنت دعوت شخصًا): `did`." },
    { t: "mcq", q: "Which bus ___ to the city centre?", o: ["does go", "goes", "go", "did go"], a: 1, why: "`Which bus` فاعل: `goes`." },
    { t: "mcq", q: "Who ___ English in your family?", o: ["speaks", "does speak", "speak", "do speak"], a: 0, why: "سؤال عن الفاعل المفرد: `speaks`." },
    { t: "fill", q: "Who ___ (tell) you about the party? — Ahmed told me.", a: ["told"], why: "Ahmed هو الفاعل: `told`." },
    { t: "fill", q: "Who did you ___ (tell)? — I told my brother.", a: ["tell"], why: "سؤال المفعول: `did you tell`." },
    { t: "fill", q: "What ___ (make) you so happy today?", a: ["makes", "made"], why: "`What` فاعل." },
    { t: "fix", q: "Who did win the race?", a: ["Who won the race?"], why: "سؤال الفاعل: `won`." },
    { t: "fix", q: "Who you saw at the mall?", a: ["Who did you see at the mall?"], why: "سؤال المفعول: `did you see`." },
    { t: "fix", q: "What did cause the fire?", a: ["What caused the fire?"], why: "`What` فاعل: `caused`." },
    { t: "rewrite", q: "Somebody took my pen. (Ask about the person)", ask: "اكتب السؤال.", a: ["Who took my pen?"], why: "سؤال عن الفاعل: `Who took...?`" },
    { t: "rewrite", q: "Nora visited somebody. (Ask about the person)", ask: "اكتب السؤال.", a: ["Who did Nora visit?"], why: "سؤال عن المفعول: `Who did Nora visit?`" }
  ]
};
