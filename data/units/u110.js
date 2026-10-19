window.UNITS = window.UNITS || {};
window.UNITS[110] = {
  id: 110,
  title: "Coordinating conjunctions",
  ar: "أدوات العطف",
  idea: "أدوات العطف تربط **كلمتين أو جملتين متساويتين**. أشهرها FANBOYS: `for, and, nor, but, or, yet, so`. أهمها: `and` (إضافة)، `but` (تناقض)، `or` (اختيار)، `so` (نتيجة). وقبلها فاصلة عند ربط جملتين كاملتين.",
  uses: [
    ["and: إضافة", "I like tea and coffee."],
    ["but: تناقض", "It's cheap, but it's good quality."],
    ["or: اختيار", "Do you want tea or coffee?"],
    ["so: نتيجة", "It was raining, so we stayed home."]
  ],
  formula: [
    ["جملتان", "{s:Clause}{x:,} {x:and / but / or / so / yet} {s:clause}."],
    ["كلمات", "{v:fast} {x:and} {v:cheap} · {v:now} {x:or} {v:never}"],
    ["nor", "He doesn't smoke, {x:nor} {a:does} he drink coffee. (قلب بعد nor)"]
  ],
  notes: [
    { title: "لا تبدأ الجملة الرسمية بـ And / But",
      body: "في **Writing** الأفضل `However,` و`In addition,` في أول الجملة بدل `But` و`And`.",
      en: "Prices rose. {x:However}, demand stayed high. (better than: But demand...)" },
    { title: "so ليست because",
      body: "`so` تأتي قبل النتيجة، و`because` قبل السبب.",
      en: "I was tired, {x:so} I slept. · I slept {x:because} I was tired." },
    { title: "yet = but (أقوى)",
      body: "`yet` تعبر عن تناقض مفاجئ.",
      en: "He's rich, {x:yet} he lives simply." }
  ],
  examples: [
    ["I studied hard, {x:but} I didn't pass.", "ذاكرت بجد لكنني لم أنجح."],
    ["We can take a taxi {x:or} walk.", "يمكننا أخذ سيارة أجرة أو المشي."],
    ["The shop was closed, {x:so} we went home.", "كان المحل مغلقًا فعدنا للبيت."],
    ["She speaks Arabic, English {x:and} French.", "تتحدث العربية والإنجليزية والفرنسية."],
    ["The task was difficult, {x:yet} she finished it in an hour.", "كانت المهمة صعبة، ومع ذلك أنهتها في ساعة."]
  ],
  mistakes: [
    ["Because I was tired, so I slept.", "Because I was tired, I slept. / I was tired, so I slept.", "لا نجمع `because` و`so`."],
    ["Although it was cold, but we went out.", "Although it was cold, we went out.", "لا نجمع `although` و`but`."],
    ["I like football and also I like tennis.", "I like football and tennis.", "تجنب التكرار."]
  ],
  ielts: {
    text: "خطأ `Although..., but...` و`Because..., so...` من أكثر الأخطاء شيوعًا عند العرب، لأن العربية تقبل «مع أنه... لكن». في الإنجليزية أداة واحدة فقط.",
    en: "Online learning is flexible, but it requires a lot of self-discipline, so it does not suit everyone."
  },
  questions: [
    { t: "mcq", q: "I wanted to go out, ___ it was raining.", o: ["and", "but", "so", "or"], a: 1, why: "تناقض: `but`." },
    { t: "mcq", q: "It was late, ___ we went to bed.", o: ["but", "or", "so", "because"], a: 2, why: "نتيجة: `so`." },
    { t: "mcq", q: "Would you like rice ___ bread?", o: ["or", "and", "so", "but"], a: 0, why: "اختيار: `or`." },
    { t: "mcq", q: "Although it was expensive, ___ I bought it.", o: ["but", "so", "-", "and"], a: 2, why: "لا نضيف `but` بعد although." },
    { t: "mcq", q: "He's very young, ___ he's very wise.", o: ["so", "yet", "or", "for"], a: 1, why: "تناقض: `yet`." },
    { t: "fill", q: "I was hungry, ___ I made a sandwich.", a: ["so"], why: "نتيجة: `so`." },
    { t: "fill", q: "She studied medicine ___ became a doctor.", a: ["and"], why: "إضافة: `and`." },
    { t: "fill", q: "Hurry up, ___ you'll miss the bus.", a: ["or"], why: "`or` = وإلا." },
    { t: "fix", q: "Because I was ill, so I stayed at home.", a: ["Because I was ill, I stayed at home.", "I was ill, so I stayed at home."], why: "أداة واحدة." },
    { t: "fix", q: "Although he is rich, but he is not happy.", a: ["Although he is rich, he is not happy.", "He is rich, but he is not happy."], why: "أداة واحدة." },
    { t: "fix", q: "I like coffee, so I don't like tea.", a: ["I like coffee, but I don't like tea."], why: "تناقض: `but`." },
    { t: "rewrite", q: "I missed the bus. I was late for work. (Join with: so)", ask: "اربط الجملتين.", a: ["I missed the bus, so I was late for work."], why: "`, so`." }
  ]
};
