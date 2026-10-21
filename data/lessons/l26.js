window.LESSONS = window.LESSONS || {};
window.LESSONS[26] = {
  steps: [
    { k: "الفكرة", h: "will be + التصريف الثالث",
      why: [
        "للمستقبل نضع `be` بعد `will` أو `going to`، ثم التصريف الثالث.",
        "`be` هنا ضرورية لأنها التي تجعل الجملة مجهولة. بدونها `will announce` تعني أن الفاعل هو من يعلن."
      ],
      show: [{ t: "build", lab: "اختر الصيغة",
        opts: [["will", "{s:The results} {a:will be} {v:announced} on Monday.", "", 0], ["going to", "{s:The stadium} {a:is going to be} {v:demolished}.", "خطة مقررة", 0], ["will have been", "{s:The bridge} {a:will have been} {v:finished} by 2030.", "اكتمال قبل موعد", 0]],
        groups: [{ h: "be دائمًا قبل التصريف الثالث" }] },
        { t: "fix", items: [["The results will announced.", "The results {a:will be} {v:announced}.", "لا تنسَ `be`."], ["It will be finish soon.", "It {a:will be} {v:finished} soon.", ""]] }],
      check: { q: "The building is going to ___.", o: ["demolish", "be demolished", "demolished"], a: 1, why: "المبنى لا يهدم نفسه ← `be demolished`." } },

    { k: "النفي والسؤال", h: "won't be · Will … be?",
      why: ["النفي والسؤال يتبعان `will` كالعادة، و`be` تبقى في مكانها قبل التصريف الثالث."],
      show: [{ t: "formula", rows: [["نفي", "{s:It} {a:won't be} {v:finished} today."], ["سؤال", "{a:Will} {s:it} {a:be} {v:delivered} tomorrow?"]] }],
      check: { q: "___ the package be delivered today?", o: ["Is", "Will", "Does"], a: 1, why: "السؤال في المستقبل المجهول يبدأ بـ `Will`." } },

    { k: "الإعلانات", h: "لغة الإعلانات الرسمية",
      why: [
        "الإعلانات والرسائل الرسمية تفضّل المجهول لأنها تركّز على **الإجراء** وعلى من يتأثر به، لا على الموظف الذي سيقوم به.",
        "ستراها كثيرًا في Listening (إعلانات المطارات والجامعات)."
      ],
      show: [{ t: "ex", items: [["Passengers {a:will be} {v:informed} of any changes.", "سيُبلّغ المسافرون بأي تغيير."], ["You {a:will be} {v:contacted} by email.", "سيُتواصل معك بالبريد."], ["The new metro line {a:will be} {v:opened} next year.", ""]] }],
      check: { q: "Best for an official notice:", o: ["We will send your card next week.", "Your card will be sent next week."], a: 1, why: "الإعلان الرسمي يركّز على البطاقة ← مجهول." } }
  ],
  sum: [
    { h: "will", en: ["{a:will be} + {v:done}"] },
    { h: "going to", en: ["{a:is going to be} + {v:done}"] },
    { h: "مستقبل تام", en: ["{a:will have been} + {v:done}"] },
    { h: "تذكّر", txt: "be ضرورية قبل التصريف الثالث" }
  ]
};
