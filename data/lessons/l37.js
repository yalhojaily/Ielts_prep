window.LESSONS = window.LESSONS || {};
window.LESSONS[37] = {
  steps: [
    { k: "الفكرة", h: "من *فعل*؟ أم على من *وقع* الفعل؟",
      why: [
        "في جملة `Ali called Sara` يوجد شخصان: `Ali` الفاعل (هو الذي اتصل)، و`Sara` المفعول (وقع عليها الاتصال).",
        "`Who` قد تسأل عن أي منهما، وطريقة بناء السؤال **تختلف** حسب الجواب الذي تريده."
      ],
      show: [{ t: "build", lab: "عمّن تسأل؟",
        opts: [["عن الفاعل", "{q:Who} {v:called} Sara?", "الجواب: **Ali** called Sara. ← لا did", 0], ["عن المفعول", "{q:Who} {a:did} {s:Ali} {v:call}?", "الجواب: Ali called **Sara**. ← مع did", 1]],
        groups: [{ h: "سؤال الفاعل", sub: "الترتيب العادي، بلا do", res: "{q:Who} {v:called}…?" }, { h: "سؤال المفعول", sub: "الترتيب المقلوب مع do", res: "{q:Who} {a:did}… {v:call}?" }] }],
      check: { q: "___ you? — Ali called me.", o: ["Who did call", "Who called"], a: 1, why: "الجواب `Ali` هو الفاعل ← سؤال فاعل بلا did." } },

    { k: "لماذا بلا do؟", h: "أداة الاستفهام *تحل محل* الفاعل",
      why: [
        "في سؤال الفاعل، `Who` تجلس في مكان الفاعل نفسه في الجملة. لم يتحرك شيء، فلا نحتاج قلبًا ولا `do`.",
        "أما في سؤال المفعول فـ `Who` تتقدم من آخر الجملة إلى أولها، فنحتاج ترتيب السؤال الكامل."
      ],
      show: [{ t: "trans", items: [
        { h: "سؤال الفاعل", from: "{s:Someone} {v:broke} the window.", to: "{q:Who} {v:broke} the window?", chg: ["Who مكان Someone", "لا تغيير آخر"] },
        { h: "سؤال المفعول", from: "You {v:saw} {o:someone}.", to: "{q:Who} {a:did} you {v:see}?", chg: ["Who تقدمت", "أضفنا did"] }
      ] }],
      check: { q: "___ this book? — Naguib Mahfouz wrote it.", o: ["Who wrote", "Who did write"], a: 0, why: "الجواب هو الكاتب (الفاعل) ← بلا did." } },

    { k: "كيف تعرف", h: "اكتب الجواب أولًا",
      why: [
        "الحيلة السهلة: تخيّل الجواب. إذا كان الجواب هو من **قام** بالفعل ← سؤال فاعل بلا do.",
        "وفي سؤال الفاعل بالمضارع يأخذ الفعل `s` غالبًا، لأن `Who` تُعامل كمفرد: `Who lives here?`"
      ],
      show: [{ t: "ex", items: [["{q:Who} {v:knows} the answer?", "الجواب: Sara knows. (فاعل)"], ["{q:Which team} {v:won} the match?", "الجواب: Al-Hilal won. (فاعل)"], ["{q:What} {a:did} you {v:write} in the essay?", "الجواب: I wrote **a story**. (مفعول)"]] },
        { t: "fix", items: [["Who live here?", "{q:Who} {v:lives} here?", ""], ["Who you met at the party?", "{q:Who} {a:did} you {v:meet} at the party?", "سؤال مفعول يحتاج did."]] }],
      check: { q: "Who ___ here? — My uncle.", o: ["live", "lives", "does live"], a: 1, why: "سؤال فاعل بالمضارع ← `lives`." } },

    { k: "What happened", h: "What happened? دائمًا بلا did",
      why: [
        "`What happened?` سؤال عن الفاعل دائمًا: الشيء الذي حدث هو الفاعل. لذلك لا نقول `What did happen?`.",
        "ومثلها: `What makes you happy?` و`What causes the problem?`"
      ],
      show: [{ t: "big", items: ["{q:What} {v:happened} to your car?", "{q:What} {v:makes} you happy?"] }],
      check: { q: "Choose the correct question.", o: ["What did happen?", "What happened?"], a: 1, why: "`What` هنا فاعل ← بلا did." } }
  ],
  sum: [
    { h: "سؤال الفاعل", en: ["{q:Who} {v:called} you?"] },
    { h: "سؤال المفعول", en: ["{q:Who} {a:did} you {v:call}?"] },
    { h: "الحيلة", txt: "تخيّل الجواب: هل هو من فعل؟" },
    { h: "دائمًا", en: ["{q:What} {v:happened}?"] }
  ]
};
