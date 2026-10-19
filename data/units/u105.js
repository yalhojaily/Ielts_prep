window.UNITS = window.UNITS || {};
window.UNITS[105] = {
  id: 105,
  title: "Prepositions",
  ar: "حروف الجر: مقدمة",
  idea: "حرف الجر يربط الاسم أو الضمير بباقي الجملة ليعبر عن **المكان أو الزمان أو الاتجاه أو الطريقة**. بعده يأتي **اسم أو ضمير مفعول أو -ing**، لا فعل أصلي. واختيار حرف الجر في الإنجليزية لا يتطابق غالبًا مع العربية، فالأفضل حفظه مع الكلمة.",
  uses: [
    ["حرف جر + اسم", "in the box, on Monday"],
    ["حرف جر + ضمير مفعول", "with me, for them"],
    ["حرف جر + -ing", "before leaving, without asking"],
    ["في نهاية السؤال", "Who are you talking to?"]
  ],
  formula: [
    ["مكان", "{x:in, on, at, under, next to, between, behind, opposite}"],
    ["زمان", "{x:at, on, in, before, after, during, since, for, until, by}"],
    ["اتجاه", "{x:to, into, out of, through, across, along, towards}"],
    ["أخرى", "{x:with, without, by, about, like, for, of}"]
  ],
  notes: [
    { title: "بعد حرف الجر -ing",
      body: "إذا جاء فعل بعد حرف جر فيكون بصيغة `-ing` دائمًا.",
      en: "Thank you {x:for} {v:helping}. · She left {x:without} {v:saying} goodbye." },
    { title: "حرف الجر + ضمير المفعول",
      body: "`between you and me` لا `between you and I`.",
      en: "This is {x:for} {s:him}. · Come {x:with} {s:us}." },
    { title: "حروف جر مركبة",
      body: "`because of, in front of, next to, instead of, according to, due to, in spite of`.",
      en: "The match was cancelled {x:because of} the rain." }
  ],
  examples: [
    ["The keys are {x:on} the table.", "المفاتيح على الطاولة."],
    ["I'll see you {x:after} the meeting.", "سأراك بعد الاجتماع."],
    ["We walked {x:along} the beach.", "مشينا على طول الشاطئ."],
    ["Instead {x:of} complaining, try to fix it.", "بدل الشكوى، حاول الإصلاح."],
    ["{x:According to} the report, prices will rise.", "وفقًا للتقرير، سترتفع الأسعار."]
  ],
  mistakes: [
    ["Thank you for help me.", "Thank you for helping me.", "بعد حرف الجر: `-ing`."],
    ["This is for she.", "This is for her.", "ضمير المفعول."],
    ["I am married with her.", "I am married to her.", "`married to`."],
    ["It depends of you.", "It depends on you.", "`depend on`."]
  ],
  ielts: {
    text: "حروف الجر صغيرة لكن أخطاءها كثيرة جدًا، وتؤثر في **Grammatical Accuracy**. ركز على الأنماط المتكررة في الاختبار: `in my opinion`, `on the other hand`, `in terms of`, `due to`, `according to`, `at the same time`.",
    en: "On the other hand, according to recent research, people who work from home are more productive in terms of output."
  },
  questions: [
    { t: "mcq", q: "She left without ___ goodbye.", o: ["say", "to say", "saying", "said"], a: 2, why: "بعد حرف الجر: `-ing`." },
    { t: "mcq", q: "Can you come ___ me to the bank?", o: ["with", "by", "for", "to"], a: 0, why: "`with me`." },
    { t: "mcq", q: "The flight was delayed ___ the storm.", o: ["because", "because of", "due", "since of"], a: 1, why: "+ اسم: `because of`." },
    { t: "mcq", q: "This gift is for ___.", o: ["she", "her", "hers", "herself"], a: 1, why: "ضمير مفعول." },
    { t: "mcq", q: "___ the weather forecast, it will rain tomorrow.", o: ["According", "According to", "According of", "Accorded to"], a: 1, why: "`According to`." },
    { t: "fill", q: "I'm interested ___ learning Japanese.", a: ["in"], why: "`interested in`." },
    { t: "fill", q: "He's married ___ my cousin.", a: ["to"], why: "`married to`." },
    { t: "fill", q: "I had tea instead ___ coffee.", a: ["of"], why: "`instead of`." },
    { t: "fill", q: "We walked ___ the park to get home. (from one side to the other)", a: ["through", "across"], why: "`through / across`." },
    { t: "fix", q: "Thank you for invite me.", a: ["Thank you for inviting me."], why: "`for inviting`." },
    { t: "fix", q: "This is between you and I.", a: ["This is between you and me."], why: "`me`." },
    { t: "fix", q: "The match was cancelled because the rain.", a: ["The match was cancelled because of the rain."], why: "`because of`." }
  ]
};
