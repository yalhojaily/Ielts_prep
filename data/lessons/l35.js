window.LESSONS = window.LESSONS || {};
window.LESSONS[35] = {
  steps: [
    { k: "الفكرة", h: "كل أداة تطلب *نوعًا* من المعلومة",
      why: [
        "أداة الاستفهام تخبر السامع بنوع الجواب الذي تريده: شخص؟ مكان؟ سبب؟",
        "وبعدها يأتي ترتيب السؤال المعتاد: **الأداة + المساعد + الفاعل + الفعل**."
      ],
      show: [{ t: "table", head: ["الأداة", "تسأل عن", "مثال"], rows: [
        ["who", "شخص", "{q:Who} is your teacher?"], ["what", "شيء", "{q:What} do you do?"], ["which", "اختيار من خيارات محددة", "{q:Which} colour, blue or red?"],
        ["where", "مكان", "{q:Where} do you live?"], ["when", "زمان", "{q:When} did it start?"], ["why", "سبب", "{q:Why} are you late?"],
        ["whose", "لمن (الملكية)", "{q:Whose} phone is this?"], ["how", "كيف / طريقة", "{q:How} did you learn?"]] }],
      check: { q: "___ phone is this? — It's mine.", o: ["Who's", "Whose", "Who"], a: 1, why: "السؤال عن المالك ← `Whose`. (`Who's` = `Who is`)" } },

    { k: "how + صفة", h: "how + كلمة = سؤال عن مقدار",
      why: [
        "`how` وحدها تسأل عن الطريقة. لكن إذا جاءت بعدها صفة أو ظرف صارت سؤالًا عن مقدار:",
        "اضغط على كل واحدة لترى ماذا تسأل."
      ],
      show: [{ t: "build", lab: "اختر",
        opts: [["How old", "{q:How old} {a:is} {s:he}?", "العمر", 0], ["How far", "{q:How far} {a:is} {s:the station}?", "المسافة", 0], ["How long", "{q:How long} {a:have} {s:you} {v:lived} here?", "المدة", 0],
               ["How often", "{q:How often} {a:do} {s:you} {v:exercise}?", "التكرار", 0], ["How much", "{q:How much} {a:is} {s:it}?", "السعر / غير المعدود", 0], ["How many", "{q:How many} brothers {a:do} {s:you} {v:have}?", "العدد (جمع معدود)", 0]],
        groups: [{ h: "How + صفة = كم؟" }] }],
      check: { q: "___ do you check your portfolio? — Once a week.", o: ["How long", "How often", "How much"], a: 1, why: "الجواب عن التكرار ← `How often`." } },

    { k: "much أم many", h: "how much للمادة، how many للعدد",
      why: [
        "`how many` مع الأشياء التي نعدّها وتأتي بالجمع (`brothers, books`).",
        "`how much` مع ما لا نعدّه (`water, money, time`) وللسؤال عن السعر."
      ],
      show: [{ t: "compare", cols: [
        { h: "How many + جمع", c: "subj", en: ["{q:How many} books?", "{q:How many} people?"] },
        { h: "How much + غير معدود", c: "accent", en: ["{q:How much} money?", "{q:How much} time?", "{q:How much} is it? (السعر)"] }
      ] }],
      check: { q: "___ money do you have?", o: ["How many", "How much"], a: 1, why: "`money` غير معدود ← `How much`." } },

    { k: "what أم which", h: "which عندما تكون الخيارات *محددة*",
      why: [
        "`what` لسؤال مفتوح بلا خيارات معروفة. `which` عندما يختار السامع من خيارات أمامه أو معروفة.",
        "ماذا تريد للعشاء؟ (مفتوح) ← `What`. أيهما تريد، هذا أم ذاك؟ ← `Which`."
      ],
      show: [{ t: "compare", cols: [
        { h: "what: مفتوح", c: "subj", en: ["{q:What} do you want for dinner?"] },
        { h: "which: من خيارات", c: "accent", en: ["{q:Which} one do you want, this or that?", "{q:Which} university did you go to?"] }
      ] }],
      check: { q: "___ do you prefer, tea or coffee?", o: ["What", "Which"], a: 1, why: "خياران محددان ← `Which`." } },

    { k: "What … like?", h: "What is it like? = صِفه لي",
      why: [
        "`like` هنا ليست «يحب»، بل بمعنى «مثل». السؤال يعني: كيف هو؟ صفه لي.",
        "سؤال شائع جدًا في IELTS Speaking: `What's your hometown like?`"
      ],
      show: [{ t: "map", cols: [{ h: "السؤال ← الجواب", c: "qw", k: "o", rows: [["What's your city like?", "It's quiet and green."], ["What's the weather like?", "It's hot and sunny."], ["What's your boss like?", "He's strict but fair."]] }] }],
      check: { q: "\"What is your brother like?\" asks about his…", o: ["hobbies", "personality / description"], a: 1, why: "`What … like?` تسأل عن الوصف والشخصية." } }
  ],
  sum: [
    { h: "الترتيب", en: ["{q:Where} {a:do} {s:you} {v:work}?"] },
    { h: "how + صفة", en: ["How old / far / long / often"] },
    { h: "much / many", en: ["How {k:many} books · How {k:much} money"] },
    { h: "like", en: ["What's it {k:like}? = صفه"] }
  ]
};
