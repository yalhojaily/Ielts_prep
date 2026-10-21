window.LESSONS = window.LESSONS || {};
window.LESSONS[54] = {
  steps: [
    { k: "الفكرة", h: "فعل + حرف جر *ثابت*",
      why: [
        "كثير من الأفعال مرتبط بحرف جر معيّن لا يتغير: `depend on`, `listen to`, `wait for`.",
        "حرف الجر غالبًا **يختلف** عن العربية (يعتمد «على» = `on`، لكن يبحث «عن» = `look for`)، لذلك احفظ الفعل وحرفه معًا كأنهما كلمة واحدة."
      ],
      show: [{ t: "table", head: ["حرف الجر", "أفعال"], rows: [
        ["on", "depend · rely · insist · concentrate · spend (money)"], ["to", "listen · belong · reply · object"], ["for", "wait · apply · pay · look"],
        ["about", "think · worry · complain · dream"], ["of", "consist · approve · dream"], ["in", "believe · succeed · specialise"], ["with", "agree · deal · cope"]] }],
      check: { q: "It depends ___ the weather.", o: ["of", "on", "from"], a: 1, why: "`depend on`." } },

    { k: "حرف جر + ing", h: "بعد حرف الجر: فعل + *ing*",
      why: [
        "إذا جاء بعد حرف الجر فعل، يكون دائمًا بصيغة `ing` (القاعدة نفسها في الدرس 51).",
        "انتبه لـ `look forward to`: هنا `to` حرف جر، لذلك بعدها `ing` لا فعل أصلي: `looking forward to seeing you`."
      ],
      show: [{ t: "ex", items: [["She {v:succeeded} {k:in} {v:passing} the exam.", ""], ["I {v:apologise} {k:for} {v:being} late.", ""], ["I'm {v:looking forward} {k:to} {v:seeing} you.", "to هنا حرف جر"]] },
        { t: "fix", items: [["I'm looking forward to see you.", "I'm looking forward to {v:seeing} you.", ""]] }],
      check: { q: "He's thinking of ___ to Jeddah.", o: ["move", "to move", "moving"], a: 2, why: "بعد حرف الجر `of` ← `ing`." } },

    { k: "فخ العربية", h: "حرف جر في العربية… *ولا شيء* في الإنجليزية",
      why: [
        "بعض الأفعال في العربية تحتاج حرف جر، بينما في الإنجليزية متعدية مباشرة. وأشهرها `discuss` و`enter`.",
        "والعكس: `listen` في الإنجليزية تحتاج `to`."
      ],
      show: [{ t: "fix", items: [
        ["We discussed about the problem.", "We {v:discussed} the problem.", "«ناقش عن» ← discuss بلا حرف جر"],
        ["He entered to the room.", "He {v:entered} the room.", ""],
        ["Listen me!", "{v:Listen} {k:to} me!", ""]
      ] }],
      check: { q: "Let's ___ the plan.", o: ["discuss about", "discuss"], a: 1, why: "`discuss` متعدٍّ بلا حرف جر." } },

    { k: "حرف يغيّر المعنى", h: "agree with / on / to",
      why: ["أحيانًا الفعل نفسه يأخذ حروفًا مختلفة بمعانٍ مختلفة. اضغط على كل واحد."],
      show: [{ t: "build", lab: "اختر",
        opts: [["agree with", "I {v:agree} {k:with} you.", "مع شخص أو رأي", 0], ["agree on", "We {v:agreed} {k:on} a price.", "اتفقنا على قرار", 0], ["agree to", "He {v:agreed} {k:to} the plan.", "وافق على طلب", 0],
               ["think about", "I'm {v:thinking} {k:about} the offer.", "أفكر فيه بتمعن", 1], ["think of", "What do you {v:think} {k:of} my idea?", "رأيك / فكرة تخطر", 1]],
        groups: [{ h: "agree" }, { h: "think" }] }],
      check: { q: "I completely agree ___ you.", o: ["with", "on", "to"], a: 0, why: "مع شخص ← `agree with`." } }
  ],
  sum: [
    { h: "ثابت", en: ["depend {k:on} · listen {k:to} · wait {k:for}"] },
    { h: "+ ing", en: ["succeed in {v:passing} · look forward to {v:seeing}"] },
    { h: "بلا حرف", en: ["discuss it · enter the room"] },
    { h: "يتغير المعنى", en: ["agree with / on / to"] }
  ]
};
