window.LESSONS = window.LESSONS || {};
window.LESSONS[55] = {
  steps: [
    { k: "الفكرة", h: "كلمة صغيرة *تغيّر* المعنى كله",
      why: [
        "الفعل المركب = فعل + كلمة صغيرة (`up, out, off, on, down`). المعنى الجديد غالبًا لا علاقة له بمعنى الفعل الأصلي.",
        "`give` = يعطي، لكن `give up` = يستسلم أو يقلع عن. لذلك احفظ كل فعل مركب ككلمة جديدة."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["give up", "I {v:gave up} smoking.", "أقلع عن / استسلم", 0], ["find out", "I {v:found out} the truth.", "اكتشف", 0], ["look up", "{v:Look up} the word.", "ابحث عن معلومة", 0], ["turn down", "She {v:turned down} the offer.", "رفض", 0],
               ["set up", "They {v:set up} a company.", "أسّس", 0], ["put off", "Don't {v:put off} the meeting.", "أجّل", 0], ["carry on", "{v:Carry on}!", "استمر", 0], ["figure out", "I can't {v:figure out} the problem.", "أفهم / أحل", 0]],
        groups: [{ h: "فعل + كلمة صغيرة = معنى جديد" }] }],
      check: { q: "\"They set up a company\" means:", o: ["They closed it.", "They started it."], a: 1, why: "`set up` = أسّس." } },

    { k: "ينفصل", h: "المفعول بين الجزأين أو بعدهما",
      why: [
        "بعض الأفعال المركبة **تنفصل**: يمكن وضع المفعول بين الجزأين أو بعدهما.",
        "لكن إذا كان المفعول **ضميرًا** (`it, him, me`) فيجب أن يكون في الوسط: `Turn it off`، لا `Turn off it`."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["اسم بعدهما", "{v:Turn off} {o:the TV}.", "صحيح", 0], ["اسم في الوسط", "{v:Turn} {o:the TV} {v:off}.", "صحيح", 0], ["ضمير في الوسط", "{v:Turn} {o:it} {v:off}.", "الضمير يجب أن يكون في الوسط", 0], ["ضمير بعدهما", "{v:Turn off} {d:it}.", "خطأ!", 1]],
        groups: [{ h: "صحيح" }, { h: "خطأ" }] }],
      check: { q: "Can you pick ___ at 7?", o: ["up me", "me up"], a: 1, why: "الضمير `me` يأتي بين الجزأين." } },

    { k: "لا ينفصل", h: "أفعال لا تنفصل أبدًا",
      why: [
        "بعضها لا ينفصل: المفعول دائمًا بعد الجزأين، حتى لو كان ضميرًا: `look after them`.",
        "والثلاثية (فعل + كلمتين) لا تنفصل كذلك: `look forward to, run out of, get on with, put up with`."
      ],
      show: [{ t: "ex", items: [["I'm {v:looking for} my keys.", "أبحث عن"], ["She {v:looks after} {o:them}.", "تعتني بهم"], ["We {v:ran out of} petrol.", "نفد منا"], ["I can't {v:put up with} the noise.", "أتحمل"]] }],
      check: { q: "Who will look ___ while you're away?", o: ["the kids after", "after the kids"], a: 1, why: "`look after` لا ينفصل." } },

    { k: "في الكتابة", h: "في المقال: الفعل *المفرد* أفضل",
      why: [
        "الأفعال المركبة طبيعية جدًا في الكلام (Speaking) وتجعلك تبدو طليقًا.",
        "لكن في Writing Task 2 الأفعال المفردة الرسمية أنسب غالبًا."
      ],
      show: [{ t: "map", cols: [{ h: "كلام ← كتابة رسمية", c: "accent", k: "v", rows: [["go up", "increase"], ["look into", "investigate"], ["put off", "postpone"], ["find out", "discover"], ["cut down on", "reduce"]] }] }],
      check: { q: "Best for an academic essay:", o: ["Prices went up sharply.", "Prices increased sharply."], a: 1, why: "`increase` أكثر رسمية من `go up`." } }
  ],
  sum: [
    { h: "معنى جديد", en: ["give up · find out · set up · put off"] },
    { h: "ينفصل", en: ["turn {o:it} off (لا turn off it)"] },
    { h: "لا ينفصل", en: ["look after {o:them} · run out of"] },
    { h: "في المقال", en: ["go up → increase"] }
  ]
};
