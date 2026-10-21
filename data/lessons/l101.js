window.LESSONS = window.LESSONS || {};
window.LESSONS[101] = {
  steps: [
    { k: "أربع كلمات", h: "already · yet · still · just",
      why: [
        "هذه الكلمات الأربع تتحدث عن علاقة الحدث بالوقت المتوقع. كل واحدة لها معنى ومكان:",
        "`already` = بالفعل (أسرع من المتوقع). `yet` = بعد (لم يحدث). `still` = ما زال. `just` = للتو."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["already", "I{a:'ve} {k:already} {v:eaten}.", "أكلت بالفعل (أسرع من المتوقع)", 0], ["just", "She{a:'s} {k:just} {v:left}.", "غادرت للتو", 0], ["yet ?", "{a:Have} you {v:finished} {k:yet}?", "هل انتهيت بعد؟", 1], ["yet ✗", "I {a:haven't} {v:finished} {k:yet}.", "لم أنتهِ بعد", 1], ["still", "He {k:still} {v:lives} with his parents.", "ما زال", 2]],
        groups: [{ h: "قبل الفعل", sub: "already · just" }, { h: "في النهاية", sub: "yet (نفي وسؤال)" }, { h: "قبل الفعل / بعد be", sub: "still" }] }],
      check: { q: "I haven't decided ___.", o: ["already", "yet", "still"], a: 1, why: "في نهاية النفي ← `yet`." } },

    { k: "المواقع", h: "أين أضع كل كلمة؟",
      why: [
        "`already, just, still` **قبل** الفعل الأساسي و**بعد** `be`.",
        "`yet` و`any more` في **آخر** الجملة. و`still` قبل `haven't` للتعبير عن نفاد الصبر: `I still haven't received my order!`"
      ],
      show: [{ t: "ex", items: [["She {a:is} {k:still} asleep.", "بعد be"], ["He {k:still} {v:works} here.", "قبل الفعل"], ["I {k:still} {a:haven't} {v:received} my order!", "نفاد صبر"]] },
        { t: "fix", items: [["He lives still here.", "He {k:still} lives here.", ""], ["I have finished yet.", "I have {k:already} finished.", "yet لا تأتي في الإثبات"]] }],
      check: { q: "Are you ___ working at the bank?", o: ["yet", "still"], a: 1, why: "ما زلت ← `still`." } },

    { k: "لم يعد", h: "no longer = not … any more",
      why: [
        "للتعبير عن شيء توقف: `no longer` قبل الفعل (رسمي)، أو `not … any more / any longer` في النهاية.",
        "لا نجمع بينهما: `don't … no longer` نفي مزدوج."
      ],
      show: [{ t: "compare", cols: [{ h: "رسمي", c: "accent", en: ["He {k:no longer} works here."] }, { h: "عادي", c: "subj", en: ["He doesn't work here {k:any more}."] }] },
        { t: "fix", items: [["I don't work there no longer.", "I {k:no longer} work there. / I don't work there {k:any longer}.", ""]] }],
      check: { q: "She ___ lives in Jeddah. She moved to Riyadh.", o: ["still", "no longer"], a: 1, why: "توقف ← `no longer`." } },

    { k: "ago و before", h: "ago من *الآن* · before من نقطة *ماضية*",
      why: [
        "`ago` تحسب من **الآن** إلى الوراء، وتأتي مع الماضي البسيط.",
        "`before` تحسب من نقطة في الماضي، وتأتي مع الماضي التام (وفي الكلام المنقول)."
      ],
      show: [{ t: "ex", items: [["I met him two years {k:ago}.", "من الآن"], ["I had met him two years {k:before}.", "من نقطة ماضية"]] },
        { t: "fix", items: [["I have seen him two days ago.", "I {v:saw} him two days ago.", "ago مع الماضي البسيط"]] }],
      check: { q: "I ___ him two days ago.", o: ["have seen", "saw"], a: 1, why: "`ago` ← ماضٍ بسيط." } }
  ],
  sum: [
    { h: "already / just", en: ["I've {k:already} / {k:just} eaten."] },
    { h: "yet", en: ["Have you finished {k:yet}?"] },
    { h: "still", en: ["He {k:still} lives here."] },
    { h: "توقف", en: ["no longer · not … any more"] }
  ]
};
