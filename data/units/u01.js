window.UNITS = window.UNITS || {};
window.UNITS[1] = {
  id: 1,
  title: "The present simple",
  ar: "المضارع البسيط",
  idea: "نستخدم المضارع البسيط للحديث عن أشياء **ثابتة أو متكررة**: عادات، حقائق، جداول مواعيد. لا يصف ما يحدث الآن في هذه اللحظة، بل ما هو صحيح بشكل عام.",
  uses: [
    ["عادات وأفعال متكررة", "I drink coffee every morning."],
    ["حقائق عامة وعلمية", "Water boils at 100 degrees."],
    ["أوضاع دائمة (العمل، السكن)", "She works in a bank."],
    ["جداول ومواعيد ثابتة", "The train leaves at 7:30."]
  ],
  formula: [
    ["I / you / we / they", "{s:I / You / We / They} {v:work} {x:every day.}"],
    ["he / she / it", "{s:He / She / It} {v:works} {x:every day.}"],
    ["فعل be", "{s:I} {v:am} · {s:he / she / it} {v:is} · {s:you / we / they} {v:are}"],
    ["فعل have", "{s:I / you / we / they} {v:have} · {s:he / she / it} {v:has}"]
  ],
  notes: [
    { title: "قاعدة الـ s مع he / she / it",
      body: "مع الضمائر المفردة الغائبة، أو أي اسم مفرد مثل `my father` و`the company`، نضيف `-s` إلى الفعل. هذا أكثر خطأ يتكرر في الكتابة، فراجعه في كل جملة.",
      en: "{s:My father} {v:reads} the news. · {s:The company} {v:employs} 200 people." },
    { title: "متى نكتب -es ؟",
      body: "إذا انتهى الفعل بـ `s, ss, sh, ch, x, o, z` نضيف `-es`.",
      en: "watch → {v:watches} · go → {v:goes} · fix → {v:fixes} · do → {v:does}" },
    { title: "الفعل المنتهي بـ y",
      body: "إذا سبق `y` حرف ساكن نحذف `y` ونكتب `-ies`. وإذا سبقها حرف علة نضيف `-s` فقط.",
      en: "study → {v:studies} · carry → {v:carries} · play → {v:plays} · enjoy → {v:enjoys}" },
    { title: "ظروف التكرار",
      body: "كلمات مثل `always, usually, often, sometimes, never` تأتي **قبل** الفعل الأساسي، لكنها تأتي **بعد** فعل `be`.",
      en: "She {x:often} {v:visits} her parents. · He {v:is} {x:always} late." }
  ],
  examples: [
    ["{s:My brother} {v:lives} in Riyadh.", "يسكن أخي في الرياض."],
    ["{s:We} usually {v:eat} dinner at nine.", "نتناول العشاء عادةً في التاسعة."],
    ["{s:The sun} {v:rises} in the east.", "تشرق الشمس من الشرق."],
    ["{s:The museum} {v:opens} at 10 a.m. on Fridays.", "يفتح المتحف العاشرة صباحًا يوم الجمعة."],
    ["{s:Ahmed} {v:speaks} three languages.", "يتحدث أحمد ثلاث لغات."]
  ],
  mistakes: [
    ["He work in a hospital.", "He works in a hospital.", "نسيان `-s` مع المفرد الغائب. في العربية يتغير الفعل بحرف في أوله (يعمل/تعمل)، أما في الإنجليزية فالعلامة في آخره."],
    ["She is work here.", "She works here.", "لا نضع `is` مع المضارع البسيط. فعل `be` لا يجتمع مع فعل أساسي في هذه الصيغة."],
    ["My friends lives in Jeddah.", "My friends live in Jeddah.", "الفاعل جمع (`friends`) فلا نضيف `-s` للفعل."],
    ["He haves a car.", "He has a car.", "الفعل `have` شاذ: مع he/she/it يصبح `has`."]
  ],
  ielts: {
    text: "في **Speaking Part 1** معظم الأسئلة عن حياتك وعاداتك (`Do you work or study?`)، والإجابة تكون بالمضارع البسيط. وفي **Writing Task 1** عند وصف عملية (process) أو خريطة ثابتة تستخدمه أيضًا. خطأ `-s` المتكرر يخفض درجة Grammatical Range and Accuracy بشكل مباشر.",
    en: "I work in finance, so I usually start my day early and read the market news before nine."
  },
  questions: [
    { t: "mcq", q: "She ___ to work by bus every day.", o: ["go", "goes", "going", "is go"], a: 1,
      why: "الفاعل `she` مفرد غائب، والفعل `go` ينتهي بـ o فيصبح `goes`." },
    { t: "mcq", q: "My parents ___ in a small village.", o: ["lives", "is live", "live", "living"], a: 2,
      why: "`My parents` جمع، فيبقى الفعل بدون `-s`." },
    { t: "mcq", q: "Water ___ at 0 degrees Celsius.", o: ["freeze", "freezes", "is freeze", "freezing"], a: 1,
      why: "حقيقة علمية، و`water` اسم مفرد (غير معدود) فيأخذ `-s`." },
    { t: "mcq", q: "He ___ two sisters and a brother.", o: ["have", "haves", "has", "is have"], a: 2,
      why: "`have` مع he/she/it يصبح `has`." },
    { t: "fill", q: "My son ___ (study) English every evening.", a: ["studies"],
      why: "الفعل ينتهي بحرف ساكن + y، فنحذف y ونضيف `-ies`: `studies`." },
    { t: "fill", q: "The shop ___ (close) at 11 p.m.", a: ["closes"],
      why: "`The shop` مفرد، ونضيف `-s` لموعد ثابت: `closes`." },
    { t: "fill", q: "She ___ (watch) the news after dinner.", a: ["watches"],
      why: "الفعل ينتهي بـ ch فنضيف `-es`: `watches`." },
    { t: "fill", q: "My brother ___ (play) football on Fridays.", a: ["plays"],
      why: "قبل y حرف علة (a)، فنضيف `-s` فقط: `plays`، وليس plaies." },
    { t: "fill", q: "We ___ (be) from Madinah.", a: ["are"],
      why: "مع `we` نستخدم `are`." },
    { t: "fix", q: "He work in a big company.", a: ["He works in a big company."],
      why: "الفاعل `He` مفرد غائب فيجب `works`." },
    { t: "fix", q: "She is teach mathematics at a school.", a: ["She teaches mathematics at a school."],
      why: "لا نضع `is` قبل فعل أساسي في المضارع البسيط. الصحيح `teaches` (ينتهي بـ ch فنضيف es)." },
    { t: "fix", q: "My friends always comes late.", a: ["My friends always come late."],
      why: "`My friends` جمع فلا نضيف `-s`." },
    { t: "rewrite", q: "I always drink tea in the morning. (Begin with: My father ...)", ask: "أعد كتابة الجملة مبتدئًا بالكلمات المعطاة.",
      a: ["My father always drinks tea in the morning."],
      why: "بتغيير الفاعل إلى مفرد غائب يتغير الفعل إلى `drinks`، ويبقى `always` قبل الفعل." },
    { t: "rewrite", q: "He is late. (Add the word: always)", ask: "أضف الكلمة في مكانها الصحيح.",
      a: ["He is always late."],
      why: "ظرف التكرار يأتي **بعد** فعل `be`." }
  ]
};
