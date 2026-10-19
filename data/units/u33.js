window.UNITS = window.UNITS || {};
window.UNITS[33] = {
  id: 33,
  title: "Wishes and regrets",
  ar: "التمني والندم",
  idea: "`wish` و`If only` تعبّران عن رغبة في أن يكون الواقع مختلفًا. والقاعدة: **نرجع زمنًا إلى الوراء**. للحاضر نستخدم الماضي البسيط، وللماضي نستخدم الماضي التام، وللإزعاج من سلوك شخص نستخدم `would`.",
  uses: [
    ["تمنٍّ عن الحاضر", "I wish I lived closer to work."],
    ["ندم على الماضي", "I wish I had studied harder."],
    ["انزعاج وطلب تغيير", "I wish you would stop talking."],
    ["قدرة غير موجودة", "I wish I could speak French."]
  ],
  formula: [
    ["حاضر", "{s:I} {a:wish} {s:I} {v:had} more time. · {s:I} {a:wish} {s:I} {v:were} taller."],
    ["ماضٍ", "{s:I} {a:wish} {s:I} {a:had} {v:listened}."],
    ["إزعاج", "{s:I} {a:wish} {s:he} {a:would} {v:call} me."],
    ["قدرة", "{s:I} {a:wish} {s:I} {a:could} {v:drive}."]
  ],
  notes: [
    { title: "If only أقوى",
      body: "`If only` بنفس قواعد `wish` لكنها أكثر عاطفية.",
      en: "{x:If only} I {a:had} {v:known}!" },
    { title: "لا would مع نفسك",
      body: "لا نقول `I wish I would`، بل `I wish I could` أو `I wish I + past`.",
      en: "I wish I {a:could} {v:stop} smoking. (not: I wish I would)" },
    { title: "regret و should have",
      body: "طرق أخرى للندم: `I regret + -ing` و`I should have + v3`.",
      en: "I {v:regret} {v:selling} those shares. · I {a:should have} {v:kept} them." },
    { title: "hope للواقع الممكن",
      body: "`hope` لشيء ممكن الحدوث، و`wish` لشيء غير واقعي.",
      en: "I {v:hope} you {v:pass}. · I {a:wish} I {v:were} younger." }
  ],
  examples: [
    ["{s:I} {a:wish} {s:I} {v:knew} the answer.", "ليتني أعرف الإجابة."],
    ["{s:She} {a:wishes} {s:she} {a:hadn't} {v:said} that.", "تتمنى لو لم تقل ذلك."],
    ["{x:If only} {s:we} {a:had} {v:bought} that land ten years ago!", "ليتنا اشترينا تلك الأرض قبل عشر سنوات!"],
    ["{s:I} {a:wish} {s:it} {a:would} {v:stop} raining.", "ليت المطر يتوقف."],
    ["{s:I} {a:should have} {v:invested} earlier.", "كان عليّ أن أستثمر أبكر."]
  ],
  mistakes: [
    ["I wish I have a bigger house.", "I wish I had a bigger house.", "التمني عن الحاضر: الماضي."],
    ["I wish I didn't eat so much yesterday.", "I wish I hadn't eaten so much yesterday.", "الندم على الماضي: الماضي التام."],
    ["I wish I would speak English well.", "I wish I could speak English well.", "لا `I wish I would`."],
    ["I wish you pass the exam.", "I hope you pass the exam.", "للأمنية الممكنة: `hope`."]
  ],
  ielts: {
    text: "سؤال شائع في **Speaking Part 2**: `Describe something you regret` أو في Part 1: `Is there anything you wish you had learned as a child?` جهّز جملة أو جملتين بـ `I wish I had...` و`I should have...`.",
    en: "Looking back, I wish I had started learning English earlier. I should have taken it more seriously at school."
  },
  questions: [
    { t: "mcq", q: "I wish I ___ more free time.", o: ["have", "had", "will have", "would have"], a: 1, why: "حاضر: `had`." },
    { t: "mcq", q: "I wish I ___ that email. It was a mistake.", o: ["didn't send", "hadn't sent", "wouldn't send", "don't send"], a: 1, why: "ندم ماضٍ: `hadn't sent`." },
    { t: "mcq", q: "I wish my neighbours ___ so much noise.", o: ["wouldn't make", "don't make", "won't make", "hadn't make"], a: 0, why: "انزعاج: `wouldn't make`." },
    { t: "mcq", q: "I wish I ___ swim. Everyone else is in the pool.", o: ["can", "could", "would", "will"], a: 1, why: "قدرة غير موجودة: `could`." },
    { t: "mcq", q: "I ___ you have a safe journey.", o: ["wish", "hope", "would", "regret"], a: 1, why: "أمنية ممكنة: `hope`." },
    { t: "fill", q: "I wish I ___ (be) taller.", a: ["were", "was"], why: "حاضر: `were` (أو was في الكلام)." },
    { t: "fill", q: "If only I ___ (not / lose) my passport!", a: ["hadn't lost", "had not lost"], why: "ندم: `hadn't lost`." },
    { t: "fill", q: "She wishes she ___ (live) in a bigger city.", a: ["lived"], why: "حاضر: `lived`." },
    { t: "fill", q: "I regret ___ (not / study) harder at school.", a: ["not studying"], why: "`regret` + `-ing`، والنفي `not` قبله." },
    { t: "fix", q: "I wish I know her phone number.", a: ["I wish I knew her phone number."], why: "حاضر: `knew`." },
    { t: "fix", q: "I wish I didn't go to that party last night.", a: ["I wish I hadn't gone to that party last night.", "I wish I had not gone to that party last night."], why: "ماضٍ: `hadn't gone`." },
    { t: "fix", q: "I wish I would be rich.", a: ["I wish I were rich.", "I wish I was rich."], why: "حاضر: `were`." },
    { t: "rewrite", q: "I'm sorry I didn't buy that house. (Begin with: I wish ...)", ask: "أعد الصياغة.",
      a: ["I wish I had bought that house.", "I wish I'd bought that house."], why: "ندم على الماضي: `had bought`." }
  ]
};
