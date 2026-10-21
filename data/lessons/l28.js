window.LESSONS = window.LESSONS || {};
window.LESSONS[28] = {
  steps: [
    { k: "It is said that", h: "رأي عام *بلا* قائل محدد",
      why: [
        "عندما تنقل رأيًا يقوله «الناس» دون أن تعرف من بالضبط، استخدم: `It is` + فعل رأي بالتصريف الثالث + `that`.",
        "هذا أسلوب رسمي ممتاز للمقالات والأخبار، ويغنيك عن `People say that…`."
      ],
      show: [{ t: "trans", items: [{ from: "People believe that the city is 3,000 years old.", to: "{s:It} {a:is} {v:believed} that the city is 3,000 years old.", chg: ["`People` اختفت", "It + is + v3 + that"] }] },
        { t: "cards", items: [{ i: "chat", h: "أفعال هذا التركيب", tags: ["said", "believed", "thought", "known", "reported", "expected", "estimated", "considered"] }] }],
      check: { q: "___ that 2 million people visited the city.", o: ["It is estimated", "It estimates", "They are estimated"], a: 0, why: "`It is` + `estimated` + `that`." } },

    { k: "He is said to", h: "نبدأ *بالشخص* بدل It",
      why: [
        "نفس المعنى، لكن نبدأ بالشخص أو الشيء الذي نتكلم عنه، ثم `is said to` + الفعل الأصلي.",
        "إذا كان الحدث المنقول **أسبق** من القول، نستخدم `to have` + التصريف الثالث."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["It… that", "{s:It} {a:is} {v:said} that he is very rich.", "", 0], ["He… to be", "{s:He} {a:is} {v:said} to be very rich.", "حاضر", 1], ["He… to have", "{s:He} {a:is} {v:said} to {a:have} {v:left} the country.", "حدث سابق ← to have + v3", 1]],
        groups: [{ h: "It is said that + جملة" }, { h: "Subject + is said to + فعل" }] }],
      check: { q: "She is believed ___ the best.", o: ["being", "to be", "that be"], a: 1, why: "بعد `is believed` يأتي `to` + الفعل الأصلي." } },

    { k: "have something done", h: "خدمة يقوم بها *غيرك*",
      why: [
        "`I cut my hair` تعني أنك قصصت شعرك بنفسك! إذا قصه الحلاق فقل: `I had my hair cut.`",
        "الترتيب: `have` + الشيء + التصريف الثالث. و`get` بنفس المعنى في الكلام اليومي."
      ],
      show: [{ t: "compare", cols: [
        { h: "فعلته بنفسي", c: "subj", en: ["I {v:repaired} my car."] },
        { h: "فعله غيري لي", c: "accent", en: ["I {a:had} {o:my car} {v:repaired}.", "I need to {a:get} {o:my car} {v:serviced}."] }
      ] },
        { t: "formula", rows: [["الترتيب", "{a:have / get} + {o:something} + {v:v3}"]] }],
      check: { q: "I ___ last week (at the optician).", o: ["tested my eyes", "had my eyes tested"], a: 1, why: "الفحص قام به غيرك ← `had my eyes tested`." } },

    { k: "get", h: "get بدل be في الكلام اليومي",
      why: [
        "في الحديث اليومي يستعمل الناس `get` بدل `be` في المجهول، خصوصًا مع الأحداث المفاجئة أو السيئة.",
        "في الكتابة الرسمية استخدم `be`."
      ],
      show: [{ t: "compare", cols: [{ h: "كلام", c: "subj", en: ["He {a:got} {v:arrested}.", "My phone {a:got} {v:broken}."] }, { h: "كتابة رسمية", c: "accent", en: ["He {a:was} {v:arrested}."] }] }],
      check: { q: "Which is more informal?", o: ["The window was broken.", "The window got broken."], a: 1, why: "`got broken` أسلوب كلام يومي." } }
  ],
  sum: [
    { h: "رأي عام", en: ["{s:It} {a:is} {v:said} that…"] },
    { h: "بالشخص", en: ["He {a:is} {v:said} to be… / to have left"] },
    { h: "خدمة", en: ["I {a:had} my hair {v:cut}."] },
    { h: "get", en: ["He {a:got} {v:arrested}. (كلام)"] }
  ]
};
