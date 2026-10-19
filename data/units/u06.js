window.UNITS = window.UNITS || {};
window.UNITS[6] = {
  id: 6,
  title: "Imperatives",
  ar: "صيغة الأمر",
  idea: "صيغة الأمر هي الفعل في صورته الأصلية **بدون فاعل**: `Open the door.` نستخدمها للأوامر والتعليمات والنصائح والتحذيرات. وللنهي نضع `Don't` قبل الفعل. ولاقتراح شيء نفعله معًا نستخدم `Let's`.",
  uses: [
    ["تعليمات وإرشادات", "Turn left at the traffic lights."],
    ["تحذير", "Be careful! The floor is wet."],
    ["دعوة أو عرض", "Have some more tea."],
    ["اقتراح جماعي", "Let's start the meeting."]
  ],
  formula: [
    ["أمر", "{v:Close} the window. · {v:Be} quiet."],
    ["نهي", "{a:Don't} {v:close} the window. · {a:Don't} {v:be} late."],
    ["اقتراح", "{a:Let's} {v:go}. · {a:Let's} {n:not} {v:wait}."],
    ["تلطيف", "{x:Please} {v:sit} down. · {v:Sit} down, {x:please}."]
  ],
  notes: [
    { title: "لا فاعل ولا to",
      body: "لا نقول `You open the door` ولا `To open the door` كأمر. الفعل وحده في أول الجملة.",
      en: "{v:Read} the question carefully." },
    { title: "النهي مع be",
      body: "مع الصفات نستخدم `be`، وفي النهي `Don't be`. هذا هو الموضع الوحيد الذي يأتي فيه `do` مع `be`.",
      en: "{v:Be} patient. · {a:Don't} {v:be} nervous." },
    { title: "Let's للاقتراح، ونفيه Let's not",
      body: "`Let's` = `Let us`، ويأتي بعدها الفعل الأصلي. للنفي: `Let's not`.",
      en: "{a:Let's} {v:take} a break. · {a:Let's} {n:not} {v:argue} about it." },
    { title: "صيغة الأمر قد تبدو حادة",
      body: "في الطلب من شخص (خصوصًا في العمل) الأمر المباشر قد يبدو فظًا. أضف `please` أو استخدم `Could you...?` (القاعدة 58).",
      en: "{v:Send} me the file. → Could you send me the file, please?" }
  ],
  examples: [
    ["{v:Write} your name at the top of the page.", "اكتب اسمك أعلى الصفحة."],
    ["{a:Don't} {v:forget} your passport.", "لا تنسَ جواز سفرك."],
    ["{v:Take} the second street on the right.", "خذ الشارع الثاني على اليمين."],
    ["{a:Don't} {v:be} afraid to make mistakes.", "لا تخف من الوقوع في الأخطاء."],
    ["{a:Let's} {v:meet} after the prayer.", "لنلتقِ بعد الصلاة."]
  ],
  mistakes: [
    ["Don't to touch it.", "Don't touch it.", "بعد `Don't` يأتي الفعل الأصلي بدون `to`."],
    ["Not be late.", "Don't be late.", "النهي يحتاج `Don't`، لا `Not` وحدها."],
    ["Let's to go.", "Let's go.", "بعد `Let's` الفعل الأصلي بدون `to`."],
    ["Let's don't wait.", "Let's not wait.", "نفي `Let's` هو `Let's not`."]
  ],
  ielts: {
    text: "قراءة التعليمات بدقة أساس النجاح: `Write NO MORE THAN TWO WORDS`، `Complete the notes below`، `Choose the correct letter`. كثير من الدرجات تضيع بسبب تجاهل الأمر في التعليمات وليس بسبب الإجابة. وفي **Writing Task 1 (General)** قد تكتب رسالة فيها تعليمات أو طلب، فاستخدم الصيغة اللطيفة.",
    en: "Please let me know if you need any further information."
  },
  questions: [
    { t: "mcq", q: "___ the door, please. It's cold.", o: ["You close", "Closing", "Close", "To close"], a: 2,
      why: "صيغة الأمر: الفعل الأصلي وحده في أول الجملة." },
    { t: "mcq", q: "___ late for the interview!", o: ["Don't be", "Not be", "Don't", "Be not"], a: 0,
      why: "النهي مع صفة: `Don't be`." },
    { t: "mcq", q: "Let's ___ a taxi.", o: ["to take", "taking", "take", "takes"], a: 2,
      why: "بعد `Let's` الفعل الأصلي." },
    { t: "mcq", q: "It's late. Let's ___ TV tonight.", o: ["don't watch", "not watch", "not to watch", "no watch"], a: 1,
      why: "نفي `Let's`: `Let's not` + الفعل." },
    { t: "mcq", q: "___ careful with that knife.", o: ["Is", "Are", "Be", "Being"], a: 2,
      why: "أمر مع صفة: `Be careful`." },
    { t: "fill", q: "___ (not / touch) the screen. It's broken.", a: ["Don't touch", "Do not touch"],
      why: "النهي: `Don't` + `touch`." },
    { t: "fill", q: "___ (not / worry). Everything will be fine.", a: ["Don't worry", "Do not worry"],
      why: "`Don't worry` عبارة شائعة جدًا." },
    { t: "fill", q: "___ (be) quiet in the library.", a: ["Be"],
      why: "`Be` + صفة." },
    { t: "fix", q: "Don't to park here.", a: ["Don't park here.", "Do not park here."],
      why: "لا نضع `to` بعد `Don't`." },
    { t: "fix", q: "Not forget to call your mother.", a: ["Don't forget to call your mother.", "Do not forget to call your mother."],
      why: "النهي يبدأ بـ `Don't`." },
    { t: "fix", q: "Let's going to the park.", a: ["Let's go to the park."],
      why: "بعد `Let's` الفعل الأصلي `go`." },
    { t: "rewrite", q: "You must not shout in class.", ask: "حوّل الجملة إلى نهي بصيغة الأمر.",
      a: ["Don't shout in class.", "Do not shout in class."],
      why: "نحذف الفاعل و`must not` ونبدأ بـ `Don't`." },
    { t: "rewrite", q: "Shall we have lunch now?", ask: "اكتب اقتراحًا يبدأ بـ Let's.",
      a: ["Let's have lunch now."],
      why: "`Let's` + الفعل الأصلي `have`." }
  ]
};
