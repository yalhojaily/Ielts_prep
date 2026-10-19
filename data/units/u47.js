window.UNITS = window.UNITS || {};
window.UNITS[47] = {
  id: 47,
  title: "Reported questions",
  ar: "نقل الأسئلة",
  idea: "عند نقل سؤال نستخدم `asked` أو `wanted to know` أو `wondered`. وتصبح الجملة **خبرية الترتيب** (الفاعل قبل الفعل) بلا `do / did`، ونرجع الزمن، ولا نضع علامة استفهام. لسؤال نعم/لا نضيف `if` أو `whether`.",
  uses: [
    ["سؤال بأداة استفهام", "“Where do you live?” → He asked me where I lived."],
    ["سؤال نعم/لا", "“Are you married?” → She asked if I was married."],
    ["الطلبات", "“Can you help me?” → He asked me to help him."]
  ],
  formula: [
    ["wh-", "{s:He} {v:asked} {q:where} {s:I} {v:worked}."],
    ["yes / no", "{s:She} {v:asked} {x:if / whether} {s:I} {a:had} {v:eaten}."],
    ["طلب", "{s:They} {v:asked} {s:me} {a:to} {v:wait}."]
  ],
  notes: [
    { title: "لا قلب ولا do",
      body: "مثل السؤال غير المباشر تمامًا (القاعدة 38)، مع إرجاع الزمن.",
      en: "“What {a:did} you {v:buy}?” → She asked what I {a:had} {v:bought}." },
    { title: "نقطة لا علامة استفهام",
      body: "الجملة المنقولة خبرية، فتنتهي بنقطة.",
      en: "He asked me how old I {v:was}." }
  ],
  examples: [
    ["{s:The officer} {v:asked} {q:what} {s:my name} {v:was}.", "سألني الضابط عن اسمي."],
    ["{s:She} {v:wanted} to know {x:if} {s:I} {a:could} {v:drive}.", "أرادت أن تعرف إن كنت أستطيع القيادة."],
    ["{s:He} {v:asked} {s:me} {q:why} {s:I} {a:had} {v:left} my job.", "سألني لماذا تركت عملي."],
    ["{s:They} {v:asked} {x:whether} {s:the hotel} {v:had} a pool.", "سألوا هل في الفندق مسبح."]
  ],
  mistakes: [
    ["He asked me where did I live.", "He asked me where I lived.", "لا `did`، والترتيب خبري."],
    ["She asked me was I tired.", "She asked me if I was tired.", "سؤال نعم/لا: `if`."],
    ["He asked me what is my name.", "He asked me what my name was.", "ترتيب خبري وإرجاع الزمن."],
    ["They asked me that I was ready.", "They asked me if I was ready.", "لا `that` مع `asked`."]
  ],
  ielts: {
    text: "قد يُطلب في **Speaking Part 2** وصف مقابلة أو محادثة: `The interviewer asked me why I wanted the job.` التركيب الصحيح هنا يميّز B2 عن B1 بوضوح.",
    en: "The interviewer asked me what my greatest strength was and whether I was willing to relocate."
  },
  questions: [
    { t: "mcq", q: "“Where are you going?” → He asked me where ___.", o: ["was I going", "I was going", "I am going", "did I go"], a: 1, why: "ترتيب خبري + إرجاع الزمن." },
    { t: "mcq", q: "“Do you like sushi?” → She asked ___ I liked sushi.", o: ["that", "if", "do", "what"], a: 1, why: "نعم/لا: `if`." },
    { t: "mcq", q: "“What did you eat?” → He asked what I ___.", o: ["did eat", "had eaten", "ate did", "have eaten"], a: 1, why: "`ate → had eaten`." },
    { t: "mcq", q: "“Can you close the window?” → She asked me ___ the window.", o: ["to close", "close", "if close", "closing"], a: 0, why: "طلب: `asked me to`." },
    { t: "fill", q: "“How old are you?” → She asked me how old I ___.", a: ["was"], why: "`was`." },
    { t: "fill", q: "“Have you finished?” → He asked ___ I had finished.", a: ["if", "whether"], why: "`if / whether`." },
    { t: "fill", q: "“When will you arrive?” → They asked when I ___ arrive.", a: ["would"], why: "`will → would`." },
    { t: "fix", q: "She asked me where did I buy it.", a: ["She asked me where I had bought it.", "She asked me where I bought it."], why: "لا `did`." },
    { t: "fix", q: "He asked me was I hungry.", a: ["He asked me if I was hungry.", "He asked me whether I was hungry."], why: "نضيف `if`." },
    { t: "fix", q: "They asked what is the time.", a: ["They asked what the time was."], why: "ترتيب خبري وإرجاع الزمن." },
    { t: "rewrite", q: "“Why are you late?” the teacher asked me.", ask: "انقل السؤال بدءًا بـ The teacher asked me ...", a: ["The teacher asked me why I was late."], why: "`why I was late`." },
    { t: "rewrite", q: "“Do you work here?” she asked him.", ask: "انقل السؤال بدءًا بـ She asked him ...", a: ["She asked him if he worked there.", "She asked him whether he worked there."], why: "`if he worked there` مع `here → there`." }
  ]
};
