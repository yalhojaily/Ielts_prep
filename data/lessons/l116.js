window.LESSONS = window.LESSONS || {};
window.LESSONS[116] = {
  steps: [
    { k: "make أم do", h: "make = تصنع *شيئًا جديدًا* · do = تؤدي *عملًا*",
      why: [
        "كلاهما «يفعل»، والفرق التقريبي: `make` عندما ينتج شيء لم يكن موجودًا (قرار، خطأ، مال، خطة). `do` لأداء نشاط أو مهمة (واجب، عمل، رياضة).",
        "لكن كثيرًا منها يُحفظ كعبارات ثابتة. اضغط لترى."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["mistake", "{v:make} a mistake", "", 0], ["decision", "{v:make} a decision", "", 0], ["money", "{v:make} money", "", 0], ["progress", "{v:make} progress", "", 0], ["homework", "{v:do} homework", "", 1], ["business", "{v:do} business", "", 1], ["research", "{v:do} research", "", 1], ["exercise", "{v:do} exercise", "", 1]],
        groups: [{ h: "make", sub: "mistake · decision · money · plan · effort" }, { h: "do", sub: "homework · business · research · your best" }] },
        { t: "fix", items: [["I did a mistake.", "I {v:made} a mistake.", ""]] }],
      check: { q: "We need to ___ a decision today.", o: ["do", "make"], a: 1, why: "`make a decision`." } },

    { k: "أزواج الاتجاه", h: "borrow / lend · bring / take",
      why: [
        "هذه الأزواج تختلف في **الاتجاه**: `borrow` = تأخذ من غيرك (تستعير). `lend` = تعطي غيرك (تُعير).",
        "`bring` = أحضِر **إلى هنا** (نحو المتكلم). `take` = خذ **إلى هناك**."
      ],
      show: [{ t: "compare", cols: [
        { h: "نحوي ←", c: "subj", en: ["Can I {v:borrow} your pen?", "{v:Bring} it to me."] },
        { h: "→ بعيدًا عني", c: "accent", en: ["Can you {v:lend} me your pen?", "{v:Take} it to the office."] }
      ] },
        { t: "fix", items: [["Can you borrow me your car?", "Can you {v:lend} me your car?", ""]] }],
      check: { q: "Could you ___ me 100 riyals?", o: ["borrow", "lend"], a: 1, why: "تطلب أن يعطيك ← `lend`." } },

    { k: "أزواج المعنى", h: "lose / miss · fun / funny",
      why: [
        "`lose` = تفقد شيئًا (مفاتيح). `miss` = يفوتك شيء (حافلة، فرصة) أو تشتاق لشخص.",
        "`fun` = ممتع (تجربة). `funny` = مضحك (نكتة). «كانت الحفلة funny» تعني أنها مضحكة!"
      ],
      show: [{ t: "ex", items: [["I {v:lost} my keys.", "فقدت"], ["I {v:missed} the bus.", "فاتني"], ["The trip was {k:fun}.", "ممتعة"], ["The joke was {k:funny}.", "مضحكة"]] },
        { t: "fix", items: [["I lost the bus.", "I {v:missed} the bus.", ""], ["The party was very funny.", "The party was a lot of {k:fun}.", ""]] }],
      check: { q: "Hurry or we'll ___ the train!", o: ["lose", "miss"], a: 1, why: "يفوتنا القطار ← `miss`." } },

    { k: "أزواج الكتابة", h: "rise / raise · affect / effect",
      why: [
        "`rise` لازم (يرتفع وحده)، و`raise` متعدٍّ (يرفع شيئًا). مهم جدًا في Task 1.",
        "`affect` **فعل** (يؤثر)، و`effect` **اسم** (تأثير). وكذلك `remember` (يتذكر) / `remind` (يذكّر غيره)."
      ],
      show: [{ t: "compare", cols: [
        { h: "لازم / فعل", c: "subj", en: ["Prices {v:rise}.", "It {v:affects} health.", "I {v:remember} his name."] },
        { h: "متعدٍّ / اسم", c: "accent", en: ["They {v:raise} prices.", "It has an {o:effect} on health.", "{v:Remind} me to call him."] }
      ] }],
      check: { q: "Pollution ___ our health.", o: ["effects", "affects"], a: 1, why: "نحتاج فعلًا ← `affects`." } }
  ],
  sum: [
    { h: "make / do", en: ["make a mistake · do homework"] },
    { h: "الاتجاه", en: ["borrow (آخذ) · lend (أعطي)"] },
    { h: "المعنى", en: ["lose keys · miss the bus · fun ≠ funny"] },
    { h: "الكتابة", en: ["rise / raise · affect (v) / effect (n)"] }
  ]
};
