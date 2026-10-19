window.UNITS = window.UNITS || {};
window.UNITS[48] = {
  id: 48,
  title: "Reported speech overview",
  ar: "مراجعة الكلام المنقول",
  idea: "أربع خطوات لنقل أي كلام: 1) اختر فعل النقل (`said, told, asked, advised`...). 2) غيّر الضمائر. 3) أرجع الزمن خطوة. 4) غيّر كلمات الزمان والمكان. وللأسئلة: ترتيب خبري. وللأوامر: `to + verb`.",
  uses: [
    ["جملة خبرية", "“I'm busy.” → She said she was busy."],
    ["سؤال", "“Are you OK?” → He asked if I was OK."],
    ["أمر", "“Sit down.” → He told me to sit down."],
    ["فعل يصف الكلام", "“Sorry I'm late.” → He apologised for being late."]
  ],
  formula: [
    ["خبر", "{s:He} {v:said} (that) ... {x:+ backshift}"],
    ["سؤال", "{s:He} {v:asked} {q:wh-} / {x:if} + {s:subject} + {v:verb}"],
    ["أمر", "{s:He} {v:told} {s:me} ({n:not}) {a:to} + {v:verb}"]
  ],
  notes: [
    { title: "جدول الإرجاع المختصر",
      body: "`present → past` · `past → past perfect` · `present perfect → past perfect` · `will → would` · `can → could` · `may → might` · `must → had to`.",
      en: "" },
    { title: "كلمات الزمان",
      body: "`today → that day` · `yesterday → the day before` · `tomorrow → the next day` · `last week → the week before` · `ago → before`.",
      en: "“I came two days {x:ago}.” → He said he had come two days {x:before}." }
  ],
  examples: [
    ["“I've been here since Monday.” → {s:She} {v:said} she {a:had been} there since Monday.", "قالت إنها هناك منذ الاثنين."],
    ["“What time does it start?” → {s:He} {v:asked} what time it {v:started}.", "سأل متى يبدأ."],
    ["“Please call me.” → {s:She} {v:asked} {s:me} {a:to} {v:call} her.", "طلبت مني أن أتصل بها."],
    ["“You should invest.” → {s:He} {v:advised} {s:me} {a:to} {v:invest}.", "نصحني بالاستثمار."]
  ],
  mistakes: [
    ["He asked me what did I want.", "He asked me what I wanted.", "سؤال منقول: ترتيب خبري."],
    ["She told me to don't worry.", "She told me not to worry.", "`not to`."],
    ["He said me he was tired.", "He told me he was tired.", "`told me`."],
    ["They said they will come tomorrow.", "They said they would come the next day.", "إرجاع الزمن وكلمة الزمان."]
  ],
  ielts: {
    text: "لا يُختبر في **IELTS** كدرس مستقل، لكنه يظهر في كل قصة تحكيها في **Speaking Part 2**، وفي نقل الآراء في **Writing Task 2**. الدقة في جملتين أهم من الكثرة.",
    en: "When I told my father I wanted to study abroad, he asked me how I would pay for it and advised me to apply for a scholarship."
  },
  questions: [
    { t: "mcq", q: "“I'll help you.” → She said she ___ me.", o: ["will help", "would help", "helps", "had help"], a: 1, why: "`would`." },
    { t: "mcq", q: "“Is it raining?” → He asked ___.", o: ["is it raining", "if it was raining", "was it raining", "that it was raining"], a: 1, why: "`if` + ترتيب خبري." },
    { t: "mcq", q: "“Don't forget!” → She reminded me ___.", o: ["don't forget", "not to forget", "to not forget", "not forget"], a: 1, why: "`not to`." },
    { t: "mcq", q: "“I met him yesterday.” → She said she had met him ___.", o: ["yesterday", "the day before", "tomorrow", "the next day"], a: 1, why: "`the day before`." },
    { t: "mcq", q: "“Sorry, I broke it.” → He apologised ___ it.", o: ["to break", "for breaking", "breaking", "of breaking"], a: 1, why: "`apologise for + -ing`." },
    { t: "fill", q: "“Where do you work?” → She asked me where I ___.", a: ["worked"], why: "`worked`." },
    { t: "fill", q: "“I can't come.” → He told me he ___ come.", a: ["couldn't", "could not"], why: "`couldn't`." },
    { t: "fill", q: "“Please wait here.” → She asked us ___ there.", a: ["to wait"], why: "`asked us to wait`." },
    { t: "fill", q: "“I have finished.” → He said he ___ finished.", a: ["had"], why: "`had finished`." },
    { t: "fix", q: "She asked me where was the station.", a: ["She asked me where the station was."], why: "ترتيب خبري." },
    { t: "fix", q: "He said me that he loved the city.", a: ["He told me that he loved the city.", "He told me he loved the city."], why: "`told me`." },
    { t: "rewrite", q: "“Will you marry me?” he asked her.", ask: "انقل السؤال بدءًا بـ He asked her ...", a: ["He asked her if she would marry him.", "He asked her whether she would marry him."], why: "`if she would marry him`." }
  ]
};
