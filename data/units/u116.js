window.UNITS = window.UNITS || {};
window.UNITS[116] = {
  id: 116,
  title: "Easily confused phrases",
  ar: "كلمات وعبارات يكثر الخلط بينها",
  idea: "بعض الكلمات متقاربة في الشكل أو المعنى لكنها مختلفة في الاستخدام. أشهرها عند العرب: `make / do`، `say / tell`، `borrow / lend`، `lose / miss`، `fun / funny`، `rise / raise`، `bring / take`، `affect / effect`.",
  uses: [
    ["make / do", "make a mistake, make a decision / do homework, do business"],
    ["borrow / lend", "Can I borrow your pen? / Can you lend me your pen?"],
    ["lose / miss", "I lost my keys. / I missed the bus."],
    ["fun / funny", "The trip was fun. / The joke was funny."]
  ],
  formula: [
    ["make", "{v:make} a mistake / a decision / money / a plan / progress / an effort / a phone call"],
    ["do", "{v:do} homework / the dishes / business / research / your best / exercise / a favour"],
    ["rise / raise", "Prices {v:rise}. (لازم) · They {v:raise} prices. (متعدٍّ)"],
    ["affect / effect", "It {v:affects} (فعل) health. · It has an {v:effect} (اسم) on health."]
  ],
  notes: [
    { title: "bring / take",
      body: "`bring` = أحضر إلى هنا. `take` = خذ إلى هناك.",
      en: "{v:Bring} it to me. · {v:Take} it to the office." },
    { title: "remember / remind",
      body: "`remember` = يتذكر. `remind` = يذكّر غيره.",
      en: "I {v:remember} his name. · {v:Remind} me to call him." },
    { title: "lie / lay",
      body: "`lie` = يستلقي (لازم). `lay` = يضع شيئًا (متعدٍّ).",
      en: "I {v:lie} down. · {v:Lay} the book on the table." },
    { title: "economic / economical",
      body: "`economic` = متعلق بالاقتصاد. `economical` = موفّر.",
      en: "{v:economic} growth · an {v:economical} car" }
  ],
  examples: [
    ["I {v:made} a big mistake.", "ارتكبت خطأ كبيرًا."],
    ["She {v:does} her homework every evening.", "تؤدي واجبها كل مساء."],
    ["Could you {v:lend} me 100 riyals?", "هل تقرضني 100 ريال؟"],
    ["I {v:missed} my flight.", "فاتتني الرحلة."],
    ["Stress {v:affects} your sleep.", "التوتر يؤثر على نومك."]
  ],
  mistakes: [
    ["I did a mistake.", "I made a mistake.", "`make a mistake`."],
    ["Can you borrow me your car?", "Can you lend me your car?", "`lend` للإعطاء."],
    ["I lost the bus.", "I missed the bus.", "`miss`."],
    ["The party was very funny.", "The party was a lot of fun.", "`fun` = ممتع، `funny` = مضحك."]
  ],
  ielts: {
    text: "هذه الأزواج تؤثر مباشرة على **Lexical Resource** وخاصة الـ collocations: `make a decision`, `do research`, `have an effect on`, `raise awareness`. وفي **Task 1**: `Prices rose` لا `Prices raised`.",
    en: "Governments should do more research and make better decisions to raise awareness of the effects of pollution."
  },
  questions: [
    { t: "mcq", q: "Have you ___ your homework?", o: ["made", "done", "did", "make"], a: 1, why: "`do homework`." },
    { t: "mcq", q: "We need to ___ a decision today.", o: ["do", "make", "take of", "have to"], a: 1, why: "`make a decision`." },
    { t: "mcq", q: "Can I ___ your charger?", o: ["lend", "borrow", "rent to", "give"], a: 1, why: "`borrow` = يستعير." },
    { t: "mcq", q: "Hurry up or we'll ___ the train.", o: ["lose", "miss", "loss", "fail"], a: 1, why: "`miss`." },
    { t: "mcq", q: "Prices ___ by 5% last month.", o: ["raised", "rose", "rised", "were risen"], a: 1, why: "لازم: `rose`." },
    { t: "mcq", q: "Pollution ___ our health.", o: ["effects", "affects", "is effect", "affect on"], a: 1, why: "فعل: `affects`." },
    { t: "fill", q: "The weather can have a big ___ on your mood.", a: ["effect", "impact", "influence"], why: "اسم: `effect`." },
    { t: "fill", q: "Please ___ me to buy milk on the way home.", a: ["remind"], why: "`remind`." },
    { t: "fill", q: "I'm going to ___ some exercise before dinner.", a: ["do"], why: "`do exercise`." },
    { t: "fix", q: "He did a lot of money last year.", a: ["He made a lot of money last year."], why: "`make money`." },
    { t: "fix", q: "Can you borrow me your book?", a: ["Can you lend me your book?", "Can I borrow your book?"], why: "`lend me`." },
    { t: "fix", q: "The government decided to rise taxes.", a: ["The government decided to raise taxes."], why: "متعدٍّ: `raise`." }
  ]
};
