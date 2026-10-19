window.UNITS = window.UNITS || {};
window.UNITS[98] = {
  id: 98,
  title: "Adverbs of manner",
  ar: "ظروف الحال (الكيفية)",
  idea: "ظرف الحال يصف **كيف** يحدث الفعل، ويتكون غالبًا بإضافة `-ly` إلى الصفة: `quick → quickly`. الصفة تصف الاسم، والظرف يصف الفعل: `a careful driver` لكن `He drives carefully`. ويأتي عادة **بعد الفعل أو المفعول**.",
  uses: [
    ["الظرف بعد الفعل", "She speaks slowly."],
    ["بعد المفعول", "He did the work carefully."],
    ["شاذة", "good → well, fast → fast, hard → hard, late → late"],
    ["الصفة بعد فعل الربط لا الظرف", "She looks happy. (not happily)"]
  ],
  formula: [
    ["-ly", "quick → {v:quickly} · careful → {v:carefully} · easy → {v:easily} · gentle → {v:gently}"],
    ["شاذة", "good → {v:well} · fast → {v:fast} · hard → {v:hard} · early → {v:early}"],
    ["الموقع", "{s:He} {v:opened} the door {x:quietly}. (not: opened quietly the door)"]
  ],
  notes: [
    { title: "well و good",
      body: "`good` صفة، و`well` ظرف. لكن `well` صفة أيضًا بمعنى «بصحة جيدة».",
      en: "She is a {x:good} cook. She cooks {x:well}. · I'm not {x:well} today." },
    { title: "hardly و lately ليستا ظرفي hard و late",
      body: "`hardly` = بالكاد، و`lately` = مؤخرًا. معنى مختلف تمامًا.",
      en: "He works {x:hard}. (بجد) · He {x:hardly} works. (بالكاد يعمل)" },
    { title: "صفات تنتهي بـ -ly",
      body: "`friendly, lovely, lonely, ugly` صفات. للظرف نقول `in a friendly way`.",
      en: "She smiled {x:in a friendly way}." }
  ],
  examples: [
    ["Please drive {v:carefully}.", "قُد بحذر من فضلك."],
    ["He speaks English {v:fluently}.", "يتحدث الإنجليزية بطلاقة."],
    ["She did {v:well} in the exam.", "أبلت حسنًا في الاختبار."],
    ["They work {v:hard} every day.", "يعملون بجد كل يوم."],
    ["Prices rose {v:sharply} last year.", "ارتفعت الأسعار بحدة العام الماضي."]
  ],
  mistakes: [
    ["He drives careful.", "He drives carefully.", "يصف الفعل: ظرف."],
    ["She sings very good.", "She sings very well.", "`well`."],
    ["He speaks fluently English.", "He speaks English fluently.", "لا نفصل الفعل عن المفعول."],
    ["I worked hardly.", "I worked hard.", "`hard` ظرف، و`hardly` = بالكاد."]
  ],
  ielts: {
    text: "أساسية في **Writing Task 1**: `increased sharply`, `fell slightly`, `rose steadily`, `dropped dramatically`. وتبديلها بصيغة صفة + اسم (`a sharp increase`) يرفع التنوع.",
    en: "Sales rose steadily until 2015 and then fell dramatically over the next two years."
  },
  questions: [
    { t: "mcq", q: "She speaks very ___.", o: ["quiet", "quietly", "quieter", "quietness"], a: 1, why: "يصف الفعل: `quietly`." },
    { t: "mcq", q: "He plays football ___.", o: ["good", "well", "goodly", "best"], a: 1, why: "`well`." },
    { t: "mcq", q: "I worked ___ all week.", o: ["hardly", "hard", "harder", "hardy"], a: 1, why: "`hard` ظرف." },
    { t: "mcq", q: "The number of visitors increased ___.", o: ["dramatic", "dramatically", "drama", "dramatical"], a: 1, why: "ظرف." },
    { t: "mcq", q: "You look ___ today.", o: ["happily", "happy", "happiness", "happier than"], a: 1, why: "فعل ربط + صفة." },
    { t: "mcq", q: "He drives too ___.", o: ["fastly", "fast", "faster than", "quick"], a: 1, why: "`fast` ظرف بلا -ly." },
    { t: "fill", q: "Please listen ___ (careful).", a: ["carefully"], why: "`carefully`." },
    { t: "fill", q: "She answered the questions ___ (easy).", a: ["easily"], why: "`y → ily`." },
    { t: "fill", q: "The prices fell ___ (slight) in March.", a: ["slightly"], why: "`slightly`." },
    { t: "fix", q: "He speaks English very good.", a: ["He speaks English very well."], why: "`well`." },
    { t: "fix", q: "She did carefully her homework.", a: ["She did her homework carefully."], why: "الظرف بعد المفعول." },
    { t: "fix", q: "Drive slow, please.", a: ["Drive slowly, please.", "Please drive slowly."], why: "`slowly`." },
    { t: "rewrite", q: "She is a beautiful singer. (Begin with: She sings ...)", ask: "أعد الصياغة بالظرف.", a: ["She sings beautifully."], why: "`beautifully`." }
  ]
};
