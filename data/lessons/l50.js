window.LESSONS = window.LESSONS || {};
window.LESSONS[50] = {
  steps: [
    { k: "الفكرة", h: "حدث *يتحرك* أم حالة *ثابتة*؟",
      why: [
        "الصيغة المستمرة (`ing`) تعني شيئًا يجري ويتغير وله بداية ونهاية قريبة: `I'm reading`.",
        "لكن أفعال **الحالة** تصف وضعًا ثابتًا في الذهن أو الشعور أو الملكية، لا يجري ولا يتحرك. لذلك لا تأتي عادةً بـ `ing`، حتى لو كان المعنى «الآن»."
      ],
      show: [{ t: "compare", cols: [
        { h: "حدث ← مستمر ممكن", c: "verb", en: ["I{a:'m} {v:reading} a book.", "She{a:'s} {v:writing} an email."] },
        { h: "حالة ← بسيط دائمًا", c: "accent", en: ["I {v:know} the answer.", "It {v:costs} 50 riyals."] }
      ] }],
      check: { q: "I ___ you.", o: ["am not believing", "don't believe"], a: 1, why: "`believe` فعل حالة ذهنية ← بسيط." } },

    { k: "أربع عائلات", h: "عائلات أفعال الحالة",
      why: ["احفظها في مجموعات حسب المعنى، فهذا أسهل من حفظ قائمة طويلة:"],
      show: [{ t: "cards", items: [
        { i: "bulb", h: "الذهن", tags: ["know", "believe", "understand", "remember", "think (=رأي)"] },
        { i: "heart", h: "المشاعر والرغبات", tags: ["like", "love", "hate", "want", "need", "prefer"] },
        { i: "box", h: "الملكية", tags: ["have (=يملك)", "own", "belong", "possess"] },
        { i: "eye", h: "الحواس والوصف", tags: ["seem", "appear", "sound", "cost", "weigh"] }
      ] }],
      check: { q: "This book ___ to me.", o: ["is belonging", "belongs"], a: 1, why: "`belong` من عائلة الملكية ← بسيط." } },

    { k: "معنيان", h: "نفس الفعل: حالة أم حدث؟",
      why: [
        "بعض الأفعال تغيّر عائلتها حسب المعنى. إذا كان المعنى **حالة** ← بسيط. إذا كان **نشاطًا** ← يقبل `ing`.",
        "اضغط على كل فعل لترى المعنيين."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["have: يملك", "She {v:has} a big house.", "حالة ← بسيط", 0], ["have: يتناول", "She{a:'s} {v:having} lunch.", "نشاط ← مستمر", 1],
               ["think: رأي", "I {v:think} it's good.", "حالة", 0], ["think: يفكر", "I{a:'m} {v:thinking} about it.", "نشاط", 1],
               ["see: يفهم", "I {v:see} what you mean.", "حالة", 0], ["see: يقابل", "I{a:'m} {v:seeing} the doctor tomorrow.", "نشاط (موعد)", 1],
               ["taste: له طعم", "The soup {v:tastes} good.", "حالة", 0], ["taste: يتذوق", "She{a:'s} {v:tasting} the soup.", "نشاط", 1]],
        groups: [{ h: "حالة ← بسيط" }, { h: "نشاط ← مستمر" }] }],
      check: { q: "She ___ a big house.", o: ["is having", "has"], a: 1, why: "`have` بمعنى يملك ← حالة ← بسيط." } },

    { k: "في الاختبار", h: "I'm loving it… *لا* في الاختبار",
      why: [
        "قد تسمع في الإعلانات والكلام العامي `I'm loving it`، وهذا استعمال حديث غير رسمي.",
        "في IELTS التزم بالقاعدة: أفعال الحالة في الصيغة البسيطة، ومع المدة استخدم المضارع التام البسيط."
      ],
      show: [{ t: "fix", items: [["I am knowing him for years.", "I {a:have} {v:known} him for years.", ""], ["I'm not believing you.", "I {v:don't believe} you.", ""]] }],
      check: { q: "I ___ him since 2015.", o: ["have been knowing", "have known"], a: 1, why: "`know` حالة ← المضارع التام البسيط." } }
  ],
  sum: [
    { h: "حدث", en: ["I{a:'m} {v:reading}."] },
    { h: "حالة", en: ["know · want · own · seem → بسيط"] },
    { h: "معنيان", en: ["She {v:has} a car. / She's {v:having} lunch."] },
    { h: "مع المدة", en: ["I've {v:known} him for years."] }
  ]
};
