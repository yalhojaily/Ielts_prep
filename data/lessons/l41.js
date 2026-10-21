window.LESSONS = window.LESSONS || {};
window.LESSONS[41] = {
  steps: [
    { k: "الفكرة", h: "Yes وحدها جافة: أضف *المساعد*",
      why: [
        "الإجابة بـ `Yes` أو `No` وحدها صحيحة لكنها قد تبدو جافة أو غير مهذبة. الأطبع أن تضيف الضمير والفعل المساعد الذي بدأ به السؤال.",
        "ولا تكرر الفعل الأساسي: `Yes, I like` خطأ، لأن المساعد يختصر الفعل كله."
      ],
      show: [{ t: "build", lab: "اختر السؤال",
        opts: [["Do you smoke?", "{a:Do} you smoke? — No, {s:I} {a:don't}.", "", 0], ["Is it far?", "{a:Is} it far? — Yes, {s:it} {a:is}.", "", 0], ["Can you come?", "{a:Can} you come? — Yes, {s:I} {a:can}.", "", 0],
               ["Has she left?", "{a:Has} she left? — No, {s:she} {a:hasn't}.", "", 0], ["Did the meeting finish?", "{a:Did} the meeting finish? — Yes, {s:it} {a:did}.", "the meeting ← it", 0]],
        groups: [{ h: "Yes / No + ضمير + نفس المساعد" }] }],
      check: { q: "Can you swim? — Yes, I ___.", o: ["do", "can", "swim"], a: 1, why: "السؤال بـ `Can` فالجواب `Yes, I can.`" } },

    { k: "لا اختصار في الإثبات", h: "Yes, I am · No, I'm not",
      why: [
        "في الإجابة المثبتة يأتي المساعد في آخر الجملة، ولا يمكن اختصار كلمة في آخر الجملة: `Yes, I am` وليس `Yes, I'm`.",
        "أما في النفي فالاختصار طبيعي: `No, I'm not` أو `No, she isn't`."
      ],
      show: [{ t: "compare", cols: [
        { h: "إثبات: كامل", c: "verb", en: ["Yes, I {a:am}.", "Yes, she {a:is}.", "Yes, they {a:have}."] },
        { h: "نفي: مختصر", c: "neg", en: ["No, I{a:'m not}.", "No, she {a:isn't}.", "No, they {a:haven't}."] }
      ] }],
      check: { q: "Are you married? — Yes, ___.", o: ["I'm", "I am"], a: 1, why: "لا نختصر في آخر الإجابة المثبتة." } },

    { k: "الرأي القصير", h: "I think so · I hope not",
      why: [
        "عندما لا تكون متأكدًا، أو تعبّر عن رأي، استخدم `so` و`not` بدل تكرار الجملة.",
        "`I think so` = أظن ذلك. `I hope not` = أتمنى ألا يحدث."
      ],
      show: [{ t: "ex", items: [["Will it rain? — I {v:think} {k:so}.", "أظن ذلك"], ["Will it rain? — I {v:hope} {k:not}.", "أتمنى ألا"], ["Is he coming? — I {v:don't think} {k:so}.", "لا أظن"]] }],
      check: { q: "Will the exam be difficult? — I hope ___.", o: ["no", "not", "don't"], a: 1, why: "`I hope not` = أتمنى ألا يكون." } }
  ],
  sum: [
    { h: "القاعدة", en: ["{a:Do} you…? — Yes, I {a:do}."] },
    { h: "الضمير", en: ["Is your brother here? — Yes, {s:he} is."] },
    { h: "لا اختصار", en: ["Yes, I {a:am}. · No, I'm not."] },
    { h: "الرأي", en: ["I think so. · I hope not."] }
  ]
};
