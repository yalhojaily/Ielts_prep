window.UNITS = window.UNITS || {};
window.UNITS[84] = {
  id: 84,
  title: "Question words with “-ever”",
  ar: "أدوات الاستفهام مع -ever",
  idea: "إضافة `-ever` إلى أداة الاستفهام تعطي معنى **«أيّ ... (لا يهم)»** أو **«مهما»**: `whatever` (أي شيء / مهما)، `whoever` (أي شخص)، `wherever` (أينما)، `whenever` (متى ما)، `however` (مهما / بأي طريقة).",
  uses: [
    ["لا يهم أي", "You can sit wherever you like."],
    ["مهما (تنازل)", "Whatever happens, I'll support you."],
    ["كلما", "Whenever I visit, she cooks for me."],
    ["however + صفة = مهما كان", "However hard I try, I can't do it."]
  ],
  formula: [
    ["whatever", "{x:Whatever} you decide, tell me."],
    ["whoever", "{x:Whoever} finishes first wins."],
    ["wherever / whenever", "Call me {x:whenever} you need help."],
    ["however", "{x:However} rich he is, he's not happy."]
  ],
  notes: [
    { title: "however بمعنيين",
      body: "في أول الجملة مع فاصلة تعني «ومع ذلك» (رابط). ومع صفة أو ظرف تعني «مهما».",
      en: "{x:However}, the plan failed. · {x:However} much it costs, I'll buy it." },
    { title: "no matter + wh",
      body: "= نفس معنى -ever، وتستخدم كثيرًا.",
      en: "{x:No matter what} you say, I won't change my mind." },
    { title: "لا will بعدها",
      body: "مثل أدوات الزمن، نستخدم المضارع للمستقبل.",
      en: "{x:Whatever} {v:happens} tomorrow... (not: will happen)" }
  ],
  examples: [
    ["Take {x:whatever} you need.", "خذ ما تحتاجه."],
    ["{x:Whoever} called, I'm not available.", "أيًا كان المتصل، لست متاحًا."],
    ["She follows him {x:wherever} he goes.", "تتبعه أينما ذهب."],
    ["{x:Whenever} I hear this song, I think of my childhood.", "كلما سمعت هذه الأغنية تذكرت طفولتي."],
    ["{x:No matter how} busy I am, I always read.", "مهما كنت مشغولًا، أقرأ دائمًا."]
  ],
  mistakes: [
    ["Whatever will happen, stay calm.", "Whatever happens, stay calm.", "لا will."],
    ["However I try hard, I fail.", "However hard I try, I fail.", "الصفة بعد however مباشرة."],
    ["No matter you say, I won't go.", "No matter what you say, I won't go.", "`no matter what`."]
  ],
  ielts: {
    text: "قليلة الاستخدام لكنها مؤثرة في **Speaking Part 3** عند التعبير عن موقف ثابت: `Whatever the cost, education should be free.` أو `No matter how advanced technology becomes...`",
    en: "No matter how advanced technology becomes, I don't think robots will ever replace good teachers."
  },
  questions: [
    { t: "mcq", q: "You can choose ___ colour you like.", o: ["whatever", "however", "whoever", "wherever"], a: 0, why: "أي شيء: `whatever`." },
    { t: "mcq", q: "___ wins the match will get the trophy.", o: ["Whatever", "Whoever", "Wherever", "However"], a: 1, why: "أي شخص: `Whoever`." },
    { t: "mcq", q: "___ I go, I take my phone with me.", o: ["Whatever", "Whoever", "Wherever", "However"], a: 2, why: "أينما: `Wherever`." },
    { t: "mcq", q: "___ hard he works, he never gets promoted.", o: ["Whatever", "However", "Whenever", "No matter"], a: 1, why: "`However + صفة`." },
    { t: "mcq", q: "No matter ___ you do, don't give up.", o: ["what", "that", "which", "-"], a: 0, why: "`No matter what`." },
    { t: "fill", q: "Visit us ___ you are in Madinah.", a: ["whenever"], why: "متى ما: `whenever`." },
    { t: "fill", q: "___ happens, I'll be there for you.", a: ["Whatever"], why: "`Whatever happens`." },
    { t: "fill", q: "Give it to ___ is at the reception.", a: ["whoever"], why: "`whoever`." },
    { t: "fix", q: "Whatever will happen, don't worry.", a: ["Whatever happens, don't worry."], why: "لا will." },
    { t: "fix", q: "However you are tired, you must finish.", a: ["However tired you are, you must finish."], why: "الصفة بعد however." },
    { t: "fix", q: "No matter where will you go, I'll find you.", a: ["No matter where you go, I'll find you.", "Wherever you go, I'll find you."], why: "ترتيب خبري وبلا will." },
    { t: "rewrite", q: "It doesn't matter what you say. I won't change my mind. (Begin with: Whatever ...)", ask: "اكتب جملة واحدة.", a: ["Whatever you say, I won't change my mind.", "Whatever you say, I will not change my mind."], why: "`Whatever you say`." }
  ]
};
