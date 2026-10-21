window.LESSONS = window.LESSONS || {};
window.LESSONS[9] = {
  steps: [
    { k: "الفكرة", h: "السؤال يبدأ بـ *Did*",
      why: [
        "تعلمت في المضارع أن السؤال يبدأ بالمساعد `Do / Does`. في الماضي المساعد هو `Did`، وهو واحد مع **كل** الضمائر.",
        "ولأن `Did` تحمل علامة الماضي، يعود الفعل بعد الفاعل إلى أصله."
      ],
      show: [{ t: "trans", items: [
        { from: "{s:You} {v:enjoyed} the trip.", to: "{a:Did} {s:you} {v:enjoy} the trip?", chg: ["`Did` في الأول", "`enjoyed` تعود إلى `enjoy`"] }
      ] }],
      check: { q: "___ you see the news?", o: ["Do", "Did", "Were"], a: 1, why: "سؤال عن حدث في الماضي بفعل عادي، فنبدأ بـ `Did`." } },

    { k: "Q·A·S·V", h: "مع أداة الاستفهام: الترتيب نفسه",
      why: [
        "الترتيب لا يتغير بين المضارع والماضي: **Q** أداة الاستفهام ← **A** `did` ← **S** الفاعل ← **V** الفعل الأصلي.",
        "أكثر خطأ عند العرب: حذف `did` كما في «أين ذهبت؟»، فيقولون `Where you went?`."
      ],
      show: [{ t: "chain", items: [{ h: "Q", en: "{q:Where}" }, { h: "A", en: "{a:did}" }, { h: "S", en: "{s:you}" }, { h: "V", en: "{v:go}?" }] },
        { t: "fix", items: [["Where you went?", "{q:Where} {a:did} {s:you} {v:go}?", ""], ["Did you saw it?", "{a:Did} {s:you} {v:see} it?", "لا ماضي بعد `did`."]] }],
      check: { q: "What time ___?", o: ["you arrived", "did you arrive", "did you arrived"], a: 1, why: "Q (`What time`) ← `did` ← `you` ← `arrive` (أصلي)." } },

    { k: "مع be", h: "Was / Were: نقلب الترتيب فقط",
      why: [
        "`was / were` لا تحتاج `did`، تمامًا كما في النفي. نقدمها على الفاعل.",
        "`Did he was late?` خطأ، لأن الجملة فيها `be` أصلًا."
      ],
      show: [{ t: "compare", cols: [
        { h: "فيها be: نقلب", c: "be", en: ["{s:He} {a:was} late.", "{a:Was} {s:he} late?"] },
        { h: "فعل عادي: نضيف Did", c: "verb", en: ["{s:He} {v:left} early.", "{a:Did} {s:he} {v:leave} early?"] }
      ] }],
      check: { q: "___ you at home yesterday?", o: ["Did", "Were", "Was"], a: 1, why: "`at home` مكان، والجملة بفعل be، ومع `you` نستخدم `Were`." } },

    { k: "How was…?", h: "سؤال الانطباع والإجابة القصيرة",
      why: [
        "`How was…?` من أكثر الأسئلة في الحديث اليومي ومقابلة IELTS: كيف كانت عطلتك؟ كيف كان الاختبار؟",
        "والإجابة القصيرة تكرر المساعد: `Yes, I did.` / `No, she didn't.`"
      ],
      show: [{ t: "map", cols: [
        { h: "سؤال ← جواب", c: "be", k: "a", rows: [["Did you sleep well?", "Yes, I did."], ["Did they call?", "No, they didn't."], ["Was it expensive?", "No, it wasn't."]] },
        { h: "How was…?", c: "qw", k: "q", rows: [["How was your weekend?", "Great, thanks!"], ["How was the exam?", "Not bad."]] }
      ] }],
      check: { q: "Did you enjoy the film? — Yes, I ___.", o: ["enjoyed", "did", "was"], a: 1, why: "السؤال بـ `Did` فالجواب القصير `Yes, I did.`" } }
  ],
  sum: [
    { h: "نعم أو لا", en: ["{a:Did} {s:you} {v:go}?"] },
    { h: "بأداة استفهام", en: ["{q:Where} {a:did} {s:she} {v:go}?"] },
    { h: "مع be", en: ["{a:Was} {s:it} expensive?", "{a:Were} {s:you} there?"] },
    { h: "جواب قصير", en: ["Yes, I {a:did}. · No, I {a:didn't}."] }
  ]
};
