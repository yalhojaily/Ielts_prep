window.UNITS = window.UNITS || {};
window.UNITS[70] = {
  id: 70,
  title: "Countable and uncountable nouns",
  ar: "الأسماء المعدودة وغير المعدودة",
  idea: "الأسماء **المعدودة** لها مفرد وجمع (`a book, two books`). **غير المعدودة** ليس لها جمع ولا تأخذ `a / an` (`water, advice, information`). وكثير مما هو معدود في العربية غير معدود في الإنجليزية: «معلومات، نصائح، أثاث، أمتعة، أخبار».",
  uses: [
    ["معدود", "a chair, chairs / an idea, ideas"],
    ["غير معدود", "furniture, information, advice, news, luggage, equipment, research, homework"],
    ["كمية من غير المعدود", "a piece of advice, a glass of water, a bottle of oil"],
    ["كلمات بمعنيين", "a coffee (كوب) / coffee (المادة)"]
  ],
  formula: [
    ["معدود", "{x:a / an / many / a few / few} + {v:books}"],
    ["غير معدود", "{x:much / a little / little} + {v:money} · (no a / an, no -s)"],
    ["كلاهما", "{x:some / any / a lot of / lots of / no / the}"]
  ],
  notes: [
    { title: "قائمة الفخاخ",
      body: "`advice, information, news, furniture, luggage, baggage, equipment, research, knowledge, evidence, progress, traffic, accommodation, homework, work (عمل), weather`. كلها بلا s وبلا a.",
      en: "Can you give me {x:some} {v:advice}? (not: an advice / advices)" },
    { title: "work و job",
      body: "`work` غير معدود (عمل بشكل عام)، و`job` معدود (وظيفة).",
      en: "I have a lot of {v:work}. · She has {x:a} new {v:job}." },
    { title: "كلمات معدودة وغير معدودة",
      body: "`time` (الوقت/مرة)، `experience` (خبرة/تجربة)، `paper` (ورق/صحيفة)، `room` (مساحة/غرفة).",
      en: "I don't have much {v:time}. · I've been there three {v:times}." }
  ],
  examples: [
    ["Could you give me some {v:information}?", "هل تعطيني بعض المعلومات؟"],
    ["We bought new {v:furniture} for the living room.", "اشترينا أثاثًا جديدًا لغرفة الجلوس."],
    ["He gave me {x:a piece of} {v:advice}.", "أعطاني نصيحة."],
    ["How much {v:luggage} do you have?", "كم لديك من الأمتعة؟"],
    ["There's too much {v:traffic} today.", "الزحمة شديدة اليوم."]
  ],
  mistakes: [
    ["She gave me many advices.", "She gave me a lot of advice.", "`advice` غير معدود."],
    ["I need an information.", "I need some information.", "لا a ولا s."],
    ["We have a lot of homeworks.", "We have a lot of homework.", "`homework` غير معدود."],
    ["How many money?", "How much money?", "`money` غير معدود: `much`."]
  ],
  ielts: {
    text: "في **Writing Task 2** كلمات مثل `research, evidence, knowledge, information, equipment, pollution` شائعة جدًا، وجمعها بـ s خطأ يتكرر عند الطلاب. احفظ القائمة جيدًا.",
    en: "Research shows that students who receive regular feedback make faster progress."
  },
  questions: [
    { t: "mcq", q: "Can you give me some ___?", o: ["advices", "advice", "an advice", "advise"], a: 1, why: "`advice` غير معدود." },
    { t: "mcq", q: "We need ___ information about the course.", o: ["a", "an", "more", "many"], a: 2, why: "`more` مع غير المعدود." },
    { t: "mcq", q: "How ___ luggage are you taking?", o: ["many", "much", "a", "few"], a: 1, why: "غير معدود: `much`." },
    { t: "mcq", q: "She found ___ job in a bank.", o: ["a", "an", "some", "much"], a: 0, why: "`job` معدود: `a job`." },
    { t: "mcq", q: "I'd like ___ of cake, please.", o: ["a piece", "a", "one", "many"], a: 0, why: "`a piece of cake`." },
    { t: "mcq", q: "There ___ a lot of furniture in the room.", o: ["are", "is", "were", "have"], a: 1, why: "غير معدود: فعل مفرد." },
    { t: "fill", q: "I have too much ___ (work) to do today.", a: ["work"], why: "`work` غير معدود بلا s." },
    { t: "fill", q: "How ___ times have you been to Egypt?", a: ["many"], why: "`times` (مرات) معدود." },
    { t: "fill", q: "Recent ___ (research) shows that sleep affects memory.", a: ["research"], why: "غير معدود بلا s." },
    { t: "fix", q: "They bought new furnitures.", a: ["They bought new furniture."], why: "`furniture` غير معدود." },
    { t: "fix", q: "There are many evidences to support this.", a: ["There is a lot of evidence to support this.", "There is much evidence to support this.", "There is plenty of evidence to support this."], why: "`evidence` غير معدود." },
    { t: "fix", q: "I need an advice.", a: ["I need some advice.", "I need a piece of advice.", "I need advice."], why: "لا `an`." },
    { t: "fix", q: "The weathers are nice today.", a: ["The weather is nice today."], why: "`weather` غير معدود." }
  ]
};
