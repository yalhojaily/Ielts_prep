window.UNITS = window.UNITS || {};
window.UNITS[29] = {
  id: 29,
  title: "Conditional sentences",
  ar: "جمل الشرط (الأنواع الأربعة)",
  idea: "جملة الشرط فيها جزءان: **الشرط** (`if...`) و**النتيجة**. نوع الجملة يحدده مدى واقعية الشرط: حقيقة دائمة (0)، احتمال حقيقي (1)، خيال في الحاضر (2)، خيال في الماضي لم يحدث (3).",
  uses: [
    ["النوع 0: حقيقة عامة", "If you heat ice, it melts."],
    ["النوع 1: احتمال حقيقي في المستقبل", "If it rains, I'll stay home."],
    ["النوع 2: موقف خيالي أو غير محتمل الآن", "If I had more time, I would learn Chinese."],
    ["النوع 3: ماضٍ لم يحدث (ندم أو تخيّل)", "If I had studied, I would have passed."]
  ],
  formula: [
    ["0", "{x:If} + {v:present}, {v:present}"],
    ["1", "{x:If} + {v:present}, {a:will} + {v:verb}"],
    ["2", "{x:If} + {v:past}, {a:would} + {v:verb}"],
    ["3", "{x:If} + {a:had} + {v:v3}, {a:would have} + {v:v3}"]
  ],
  notes: [
    { title: "لا will ولا would بعد if",
      body: "أكثر خطأ في جمل الشرط: وضع `will` أو `would` في جزء if.",
      en: "{x:If} I {v:see} him, I{a:'ll} {v:tell} him. (not: If I will see)" },
    { title: "If I were",
      body: "في النوع الثاني نستخدم `were` مع كل الضمائر في الأسلوب الرسمي، خاصة في `If I were you` للنصيحة.",
      en: "{x:If} I {v:were} you, I {a:would} {v:accept} the offer." },
    { title: "الترتيب والفاصلة",
      body: "يمكن البدء بأي جزء. إذا بدأت بـ `if` ضع فاصلة بين الجزأين، وإذا بدأت بالنتيجة فلا فاصلة.",
      en: "{x:If} it rains, we'll stay in. · We'll stay in {x:if} it rains." },
    { title: "unless = if not",
      body: "`unless` تعني «إلا إذا»، وبعدها فعل مثبت.",
      en: "I won't go {x:unless} you {v:come} with me." }
  ],
  examples: [
    ["{x:If} {s:you} {v:mix} red and white, {s:you} {v:get} pink.", "إذا خلطت الأحمر والأبيض تحصل على الوردي."],
    ["{x:If} {s:the price} {v:falls}, {s:I}{a:'ll} {v:buy} more shares.", "إذا انخفض السعر سأشتري أسهمًا أكثر."],
    ["{x:If} {s:I} {v:lived} near the sea, {s:I}{a:'d} {v:swim} every day.", "لو كنت أسكن قرب البحر لسبحت كل يوم."],
    ["{x:If} {s:we} {a:had} {v:left} earlier, {s:we} {a:wouldn't have} {v:missed} the flight.", "لو غادرنا أبكر لما فاتتنا الرحلة."],
    ["{s:I} {a:wouldn't} {v:do} that {x:if} I {v:were} you.", "لو كنت مكانك لما فعلت ذلك."]
  ],
  mistakes: [
    ["If I will have time, I will call you.", "If I have time, I will call you.", "لا `will` بعد if."],
    ["If I would be rich, I would travel.", "If I were rich, I would travel.", "لا `would` بعد if."],
    ["If I had studied, I would pass.", "If I had studied, I would have passed.", "النوع الثالث: `would have + v3`."],
    ["If I was you, I'd see a doctor.", "If I were you, I'd see a doctor.", "`If I were you` هي الصيغة الصحيحة للنصيحة."]
  ],
  ielts: {
    text: "جمل الشرط من أقوى مؤشرات **Grammatical Range** في الاختبار. في **Writing Task 2** النوع الأول والثاني لعرض النتائج (`If governments invested more..., ...would`). وفي **Speaking Part 3** للفرضيات (`If I were in charge...`).",
    en: "If governments invested more in public transport, fewer people would rely on private cars."
  },
  questions: [
    { t: "mcq", q: "If you heat water to 100°C, it ___.", o: ["boils", "will boiling", "would boil", "boiled"], a: 0,
      why: "حقيقة علمية: النوع 0." },
    { t: "mcq", q: "If it ___ tomorrow, we'll cancel the trip.", o: ["will rain", "rains", "rained", "would rain"], a: 1,
      why: "النوع 1: `if` + مضارع." },
    { t: "mcq", q: "If I ___ a million riyals, I would buy a farm.", o: ["have", "had", "will have", "would have"], a: 1,
      why: "خيال: النوع 2 بالماضي." },
    { t: "mcq", q: "If she had asked me, I ___ her.", o: ["would help", "will help", "would have helped", "helped"], a: 2,
      why: "النوع 3: `would have helped`." },
    { t: "mcq", q: "If I ___ you, I'd take the job.", o: ["am", "was being", "were", "would be"], a: 2,
      why: "`If I were you`." },
    { t: "mcq", q: "You won't pass ___ you study harder.", o: ["if", "unless", "when", "because"], a: 1,
      why: "`unless` = إلا إذا." },
    { t: "fill", q: "If you ___ (not / hurry), you'll be late.", a: ["don't hurry", "do not hurry"],
      why: "النوع 1: مضارع منفي بعد if." },
    { t: "fill", q: "If I ___ (know) his number, I would call him.", a: ["knew"],
      why: "النوع 2: `knew`." },
    { t: "fill", q: "If we had left earlier, we ___ (catch) the train.", a: ["would have caught", "'d have caught"],
      why: "النوع 3: `would have caught`." },
    { t: "fill", q: "If you press this button, the machine ___ (stop).", a: ["stops", "will stop"],
      why: "نتيجة ثابتة (0) أو مستقبلية (1)." },
    { t: "fix", q: "If I will see her, I will tell her.", a: ["If I see her, I will tell her.", "If I see her, I'll tell her."],
      why: "لا `will` بعد if." },
    { t: "fix", q: "If I would have money, I would buy a house.", a: ["If I had money, I would buy a house.", "If I had money, I'd buy a house."],
      why: "النوع 2: الماضي بعد if." },
    { t: "fix", q: "If he had trained harder, he would win.", a: ["If he had trained harder, he would have won.", "If he had trained harder, he'd have won."],
      why: "النوع 3: `would have won`." },
    { t: "rewrite", q: "I didn't know you were ill, so I didn't visit you. (Begin with: If I had known ...)", ask: "اكتب جملة شرط من النوع الثالث.",
      a: ["If I had known you were ill, I would have visited you.", "If I had known you were ill, I'd have visited you.", "If I had known that you were ill, I would have visited you."],
      why: "ماضٍ لم يحدث: `had known ... would have visited`." }
  ]
};
