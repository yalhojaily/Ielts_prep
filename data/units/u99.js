window.UNITS = window.UNITS || {};
window.UNITS[99] = {
  id: 99,
  title: "Comparative and superlative adverbs",
  ar: "المقارنة والتفضيل في الظروف",
  idea: "الظروف المنتهية بـ `-ly` نقارنها بـ `more / most`: `more carefully`, `the most carefully`. والظروف القصيرة (`fast, hard, early, late`) تأخذ `-er / -est`. والشاذة: `well → better → best`، `badly → worse → worst`.",
  uses: [
    ["-ly → more", "Please speak more slowly."],
    ["قصيرة → -er", "He runs faster than me."],
    ["شاذة", "She sings better than her sister."],
    ["تفضيل", "Of all the students, Ali worked the hardest."]
  ],
  formula: [
    ["-ly", "slowly → {x:more} slowly → {x:the most} slowly"],
    ["قصيرة", "fast → {v:faster} → {v:the fastest} · early → {v:earlier} → {v:the earliest}"],
    ["شاذة", "well → {v:better} → {v:best} · badly → {v:worse} → {v:worst} · far → {v:further}"]
  ],
  notes: [
    { title: "لا -er مع -ly",
      body: "`quicklier` خطأ. الصحيح `more quickly`. (في الكلام قد تسمع `quicker` كظرف، لكن في الاختبار التزم بـ more quickly.)",
      en: "{x:more} {v:quickly} (not: quicklier)" },
    { title: "as ... as مع الظروف",
      body: "للمساواة نضع الظرف في صورته الأصلية بين `as` و`as`.",
      en: "He doesn't drive {x:as} {v:carefully} {x:as} his wife." }
  ],
  examples: [
    ["Could you speak {x:more} {v:clearly}?", "هل يمكنك التحدث بوضوح أكثر؟"],
    ["I get up {v:earlier} than my brother.", "أستيقظ أبكر من أخي."],
    ["She did {v:better} in the second test.", "أبلت أفضل في الاختبار الثاني."],
    ["Of all my friends, Omar lives {v:the furthest} away.", "من بين أصدقائي، عمر يسكن الأبعد."],
    ["Prices rose {x:more} {v:sharply} in 2022.", "ارتفعت الأسعار بحدة أكبر في 2022."]
  ],
  mistakes: [
    ["She drives carefuller than me.", "She drives more carefully than me.", "`more carefully`."],
    ["He plays more good.", "He plays better.", "شاذة."],
    ["I arrived more early.", "I arrived earlier.", "قصيرة: `earlier`."],
    ["He worked the most hard.", "He worked the hardest.", "قصيرة: `the hardest`."]
  ],
  ielts: {
    text: "في **Writing Task 1** للمقارنة بين سرعة التغيرات: `Sales in Asia grew more rapidly than in Europe.` وفي **Speaking** عند الحديث عن تحسنك: `I can speak more confidently now.`",
    en: "Prices in the city rose more rapidly than in rural areas, and the gap widened further after 2015."
  },
  questions: [
    { t: "mcq", q: "Can you walk ___? I can't keep up.", o: ["slowlier", "more slowly", "slower than", "most slowly"], a: 1, why: "`more slowly`." },
    { t: "mcq", q: "My brother runs ___ than me.", o: ["fast", "faster", "more fast", "fastly"], a: 1, why: "`faster`." },
    { t: "mcq", q: "She speaks English ___ than her husband.", o: ["better", "more good", "weller", "best"], a: 0, why: "`better`." },
    { t: "mcq", q: "Who works ___ in your team?", o: ["the hardest", "the most hard", "hardest than", "more harder"], a: 0, why: "`the hardest`." },
    { t: "mcq", q: "I did ___ in the second exam than the first. I failed.", o: ["badder", "worse", "more bad", "worst"], a: 1, why: "`worse`." },
    { t: "fill", q: "Please drive more ___ (careful).", a: ["carefully"], why: "`more carefully`." },
    { t: "fill", q: "I usually arrive ___ (early) than my colleagues.", a: ["earlier"], why: "`earlier`." },
    { t: "fill", q: "Of all the runners, she finished the ___ (fast).", a: ["fastest"], why: "`the fastest`." },
    { t: "fix", q: "He speaks more fluent than me.", a: ["He speaks more fluently than me.", "He speaks more fluently than I do."], why: "ظرف: `fluently`." },
    { t: "fix", q: "She cooks gooder than her mother.", a: ["She cooks better than her mother.", "She cooks better than her mother does."], why: "`better`." },
    { t: "fix", q: "Prices increased quicklier this year.", a: ["Prices increased more quickly this year."], why: "`more quickly`." },
    { t: "rewrite", q: "Sara sings well. Nora sings better. Huda sings best. (Who sings the best?)", ask: "أجب بجملة كاملة.", a: ["Huda sings the best.", "Huda sings best."], why: "`the best`." }
  ]
};
