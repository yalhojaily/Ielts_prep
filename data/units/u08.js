window.UNITS = window.UNITS || {};
window.UNITS[8] = {
  id: 8,
  title: "The past simple negative",
  ar: "نفي الماضي البسيط",
  idea: "نفي الماضي البسيط سهل لأنه واحد مع كل الضمائر: `did not` (أو `didn't`) + الفعل في **صورته الأصلية**. علامة الماضي انتقلت إلى `did`، فلا نكتب الفعل في الماضي بعدها.",
  uses: [
    ["نفي حدث في الماضي", "I didn't sleep well last night."],
    ["نفي مع be: wasn't / weren't بدون did", "The test wasn't difficult."]
  ],
  formula: [
    ["كل الضمائر", "{s:I / You / He / She / We / They} {a:did} {n:not} {v:go} → {a:didn't} {v:go}"],
    ["فعل be", "{s:I / he / she / it} {v:was} {n:not} → {v:wasn't} · {s:you / we / they} {v:were} {n:not} → {v:weren't}"]
  ],
  notes: [
    { title: "الفعل يعود لأصله",
      body: "في الإثبات `She went`، وفي النفي `She didn't go`. لا نقول `didn't went` لأن الماضي لا يظهر مرتين.",
      en: "He {v:bought} a car. → He {a:didn't} {v:buy} a car." },
    { title: "be لا تحتاج did",
      body: "مع الصفات والأماكن نستخدم `wasn't / weren't`.",
      en: "We {v:weren't} at home. · It {v:wasn't} expensive." },
    { title: "في الكتابة الرسمية",
      body: "في **Writing Task 2** اكتب `did not` كاملة بدل `didn't`.",
      en: "The government {a:did} {n:not} {v:expect} such a large increase." }
  ],
  examples: [
    ["{s:I} {a:didn't} {v:have} breakfast this morning.", "لم أتناول الإفطار هذا الصباح."],
    ["{s:She} {a:didn't} {v:call} me back.", "لم تعاود الاتصال بي."],
    ["{s:We} {a:didn't} {v:know} about the change.", "لم نكن نعلم بالتغيير."],
    ["{s:The hotel} {v:wasn't} very clean.", "لم يكن الفندق نظيفًا جدًا."],
    ["{s:They} {v:weren't} happy with the result.", "لم يكونوا راضين عن النتيجة."]
  ],
  mistakes: [
    ["I didn't went to work.", "I didn't go to work.", "بعد `didn't` الفعل في صورته الأصلية."],
    ["He didn't was at home.", "He wasn't at home.", "مع be لا نستخدم `did`."],
    ["She not came yesterday.", "She didn't come yesterday.", "النفي يحتاج `didn't`، و`came` تعود إلى `come`."],
    ["They didn't liked it.", "They didn't like it.", "لا نضيف `-ed` بعد `didn't`."]
  ],
  ielts: {
    text: "في **Speaking Part 2 و3** عندما تقارن الماضي بالحاضر (`People didn't use to...` أو `In the past, children didn't have...`). وفي **Writing Task 1** عند وصف بيانات ماضية: `Sales did not change significantly in 2010.`",
    en: "When I was younger, I didn't really enjoy reading, but now it's one of my favourite hobbies."
  },
  questions: [
    { t: "mcq", q: "I ___ my keys this morning.", o: ["didn't found", "didn't find", "don't found", "wasn't find"], a: 1,
      why: "`didn't` + الفعل الأصلي `find`." },
    { t: "mcq", q: "The film ___ very interesting.", o: ["didn't", "didn't be", "wasn't", "weren't"], a: 2,
      why: "`interesting` صفة، و`the film` مفرد: `wasn't`." },
    { t: "mcq", q: "We ___ at the party last night.", o: ["weren't", "wasn't", "didn't", "didn't were"], a: 0,
      why: "مع `we` نستخدم `weren't`." },
    { t: "mcq", q: "She ___ the email until Monday.", o: ["didn't read", "didn't readed", "not read", "wasn't read"], a: 0,
      why: "`didn't` + `read` (الصورة الأصلية)." },
    { t: "fill", q: "He ___ (not / come) to the meeting.", a: ["didn't come", "did not come"],
      why: "`didn't` + `come`." },
    { t: "fill", q: "I ___ (not / understand) the question.", a: ["didn't understand", "did not understand"],
      why: "`didn't` + `understand`." },
    { t: "fill", q: "The shops ___ (not / be) open on Friday morning.", a: ["weren't", "were not"],
      why: "الفاعل جمع + be: `weren't`." },
    { t: "fill", q: "My brother ___ (not / pass) his driving test.", a: ["didn't pass", "did not pass"],
      why: "`didn't` + `pass`." },
    { t: "fix", q: "I didn't saw him at the station.", a: ["I didn't see him at the station.", "I did not see him at the station."],
      why: "بعد `didn't` نستخدم `see` وليس `saw`." },
    { t: "fix", q: "She didn't was tired.", a: ["She wasn't tired.", "She was not tired."],
      why: "مع الصفة نستخدم `wasn't` بدون `did`." },
    { t: "fix", q: "We not visited the museum.", a: ["We didn't visit the museum.", "We did not visit the museum."],
      why: "النفي يحتاج `didn't`، و`visited` تعود إلى `visit`." },
    { t: "rewrite", q: "They won the match.", ask: "حوّل الجملة إلى النفي.",
      a: ["They didn't win the match.", "They did not win the match."],
      why: "`won` تعود إلى `win` بعد `didn't`." },
    { t: "rewrite", q: "I was hungry.", ask: "حوّل الجملة إلى النفي.",
      a: ["I wasn't hungry.", "I was not hungry."],
      why: "نفي be: `wasn't`." }
  ]
};
