window.UNITS = window.UNITS || {};
window.UNITS[19] = {
  id: 19,
  title: "The present for future events",
  ar: "المضارع للتعبير عن المستقبل",
  idea: "نستخدم أزمنة المضارع للمستقبل في حالتين: **المضارع المستمر** لترتيبات مع آخرين حُدد وقتها، و**المضارع البسيط** للجداول والمواعيد الرسمية. وكذلك بعد `when, if, before, after, until, as soon as` عند الحديث عن المستقبل.",
  uses: [
    ["ترتيب شخصي محدد الوقت", "I'm meeting the bank manager on Sunday."],
    ["جدول أو موعد رسمي", "The flight leaves at 6:40 tomorrow."],
    ["بعد أدوات الزمن في المستقبل", "I'll call you when I arrive."]
  ],
  formula: [
    ["ترتيب", "{s:We} {a:are} {v:flying} to Cairo on Monday."],
    ["جدول", "{s:The exam} {v:starts} at 9 a.m. tomorrow."],
    ["أداة زمن", "{s:I}{a:'ll} {v:text} you {x:as soon as} the meeting {v:finishes}."]
  ],
  notes: [
    { title: "المستمر للترتيبات",
      body: "إذا كان هناك موعد مع شخص أو حجز، فالمضارع المستمر هو الأكثر طبيعية. يأتي عادة مع وقت محدد.",
      en: "I{a:'m} {v:seeing} the dentist at 4." },
    { title: "البسيط للجداول",
      body: "مواعيد القطارات والطائرات والمحاضرات والمسلسلات: أشياء لا نتحكم بها.",
      en: "The conference {v:begins} on 3 May." },
    { title: "أدوات الزمن",
      body: "`when, before, after, until, as soon as, by the time, once` + المضارع البسيط (أو التام) حتى لو المعنى مستقبل.",
      en: "Don't leave {x:until} I {v:come} back. · {x:After} I {a:have} {v:finished}, I'll call you." }
  ],
  examples: [
    ["{q:What} {a:are} {s:you} {v:doing} tonight?", "ماذا ستفعل الليلة؟"],
    ["{s:My brother} {a:is} {v:getting} married in June.", "أخي سيتزوج في يونيو."],
    ["{s:The train} {v:arrives} at 10:15.", "يصل القطار الساعة 10:15."],
    ["{s:Ramadan} {v:starts} next week.", "يبدأ رمضان الأسبوع القادم."],
    ["{s:I}{a:'ll} {v:wait} here {x:until} you {v:finish}.", "سأنتظر هنا حتى تنتهي."]
  ],
  mistakes: [
    ["What do you do tonight?", "What are you doing tonight?", "للسؤال عن خطط الليلة نستخدم المضارع المستمر. `What do you do?` تعني «ما مهنتك؟»."],
    ["I'll tell him when I will see him.", "I'll tell him when I see him.", "بعد `when` نستخدم المضارع."],
    ["The plane is leaving at 7 according to the timetable.", "The plane leaves at 7 according to the timetable.", "الجدول الرسمي: المضارع البسيط (والمستمر مقبول أحيانًا، لكن البسيط هو الأنسب هنا)."]
  ],
  ielts: {
    text: "قد يسألك الممتحن في **Speaking Part 1** عن خططك القريبة. والأهم: قاعدة `when / as soon as` + مضارع تتكرر في **Writing** و**Speaking**، ووضع `will` بعدها خطأ شائع يلاحظه المصحح.",
    en: "Once I finish this course, I'm starting a new job in Riyadh."
  },
  questions: [
    { t: "mcq", q: "I ___ my cousin at the airport tomorrow at 5.", o: ["meet", "am meeting", "will meeting", "met"], a: 1,
      why: "ترتيب شخصي بوقت محدد: المضارع المستمر." },
    { t: "mcq", q: "The bus ___ at 8:30 every morning, so don't be late tomorrow.", o: ["leaves", "is leaving", "will leaving", "leave"], a: 0,
      why: "جدول ثابت: المضارع البسيط." },
    { t: "mcq", q: "I'll call you when I ___ the results.", o: ["will get", "get", "am getting", "got"], a: 1,
      why: "بعد `when` للمستقبل: المضارع البسيط." },
    { t: "mcq", q: "“Are you free on Thursday?” “No, I ___ to Jeddah.”", o: ["drive", "am driving", "drove", "have driven"], a: 1,
      why: "خطة مرتبة: `am driving`." },
    { t: "fill", q: "The course ___ (start) on 1 September.", a: ["starts"],
      why: "موعد رسمي: `starts`." },
    { t: "fill", q: "We ___ (have) a party on Saturday. Can you come?", a: ["are having", "'re having"],
      why: "ترتيب: `are having`." },
    { t: "fill", q: "Wait here until I ___ (come) back.", a: ["come"],
      why: "بعد `until` المضارع البسيط." },
    { t: "fill", q: "As soon as she ___ (arrive), we'll start the meeting.", a: ["arrives"],
      why: "بعد `as soon as` المضارع البسيط." },
    { t: "fix", q: "I will send you the file after I will finish it.", a: ["I will send you the file after I finish it.", "I'll send you the file after I finish it.", "I will send you the file after I have finished it."],
      why: "بعد `after` لا نستخدم will." },
    { t: "fix", q: "What do you do this weekend?", a: ["What are you doing this weekend?"],
      why: "للخطط القريبة: المضارع المستمر." },
    { t: "fix", q: "The film will start at 8 p.m. tonight, according to the cinema website.", a: ["The film starts at 8 p.m. tonight, according to the cinema website."],
      why: "موعد من جدول رسمي: المضارع البسيط هو الأنسب." },
    { t: "rewrite", q: "I have an appointment with the doctor tomorrow at 10. (Use: see, present continuous)", ask: "اكتب جملة واحدة.",
      a: ["I am seeing the doctor tomorrow at 10.", "I'm seeing the doctor tomorrow at 10.", "I'm seeing the doctor at 10 tomorrow.", "I am seeing the doctor at 10 tomorrow."],
      why: "ترتيب محدد: `I'm seeing the doctor...`." }
  ]
};
