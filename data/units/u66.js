window.UNITS = window.UNITS || {};
window.UNITS[66] = {
  id: 66,
  title: "“No / none”",
  ar: "No و None",
  idea: "`no` تأتي **قبل الاسم** وتعني «لا يوجد أي»: `There's no milk`. و`none` تأتي **وحدها** (بلا اسم بعدها) أو مع `of`: `None of my friends came`. وكلاهما يجعل الجملة منفية، فلا نضيف `not`.",
  uses: [
    ["no + اسم", "I have no time."],
    ["none وحدها", "“How many tickets are left?” “None.”"],
    ["none of + the / my / them", "None of the students passed."],
    ["not any = no", "I don't have any money. = I have no money."]
  ],
  formula: [
    ["no", "{x:no} + noun: {x:no} problem, {x:no} people, {x:no} water"],
    ["none", "{x:none} (alone) · {x:none of} + the / my / these / us / them"],
    ["not any", "I {a:don't} have {x:any} = I have {x:no}"]
  ],
  notes: [
    { title: "لا نفي مزدوج",
      body: "`I don't have no money` خطأ في الإنجليزية الرسمية. استخدم `no` أو `not any`، لا الاثنين.",
      en: "I have {x:no} money. · I {a:don't} have {x:any} money." },
    { title: "none of + مفرد أو جمع",
      body: "بعد `none of + جمع` يصح الفعل المفرد (أرسم) والجمع (أشيع).",
      en: "{x:None of} my friends {v:has / have} a car." },
    { title: "no one / nobody / nothing / nowhere",
      body: "كلمات منفية أيضًا، تأتي مع فعل مثبت.",
      en: "{x:Nobody} {v:called}. · There's {x:nothing} to eat." }
  ],
  examples: [
    ["There's {x:no} need to hurry.", "لا داعي للعجلة."],
    ["{x:No} students were absent.", "لم يتغيب أي طالب."],
    ["{x:None of} us knew the answer.", "لا أحد منا كان يعرف الإجابة."],
    ["I wanted some cake, but there was {x:none} left.", "أردت كعكًا، لكن لم يبقَ شيء."],
    ["“Do you have any questions?” “{x:No}, {x:none}.”", "هل لديك أسئلة؟ لا، لا شيء."]
  ],
  mistakes: [
    ["I don't have no time.", "I have no time. / I don't have any time.", "لا نفي مزدوج."],
    ["None students came.", "No students came. / None of the students came.", "قبل الاسم مباشرة: `no`."],
    ["No of my friends came.", "None of my friends came.", "مع of: `none`."],
    ["Nobody didn't call.", "Nobody called.", "`Nobody` منفية بنفسها."]
  ],
  ielts: {
    text: "في **Writing Task 1** مفيد لوصف القيم الصفرية: `None of the countries recorded...`, `There was no change in...`. ويضيف تنوعًا بدل `didn't` المتكررة.",
    en: "There was no significant change in the figures, and none of the regions exceeded 20%."
  },
  questions: [
    { t: "mcq", q: "There's ___ sugar in my tea.", o: ["none", "no", "not", "any"], a: 1, why: "قبل الاسم: `no`." },
    { t: "mcq", q: "___ of my colleagues speak Chinese.", o: ["No", "None", "Not", "Nothing"], a: 1, why: "مع of: `None`." },
    { t: "mcq", q: "“How much money do you have?” “___.”", o: ["No", "None", "Not", "Nobody"], a: 1, why: "وحدها: `None`." },
    { t: "mcq", q: "I ___ any brothers.", o: ["have no", "don't have", "have none", "not have"], a: 1, why: "`don't have any`." },
    { t: "mcq", q: "___ called while I was out.", o: ["Nobody", "None", "No", "Not anybody"], a: 0, why: "`Nobody` + فعل مثبت." },
    { t: "fill", q: "There were ___ seats left on the train.", a: ["no"], why: "قبل الاسم: `no`." },
    { t: "fill", q: "I looked for milk, but there was ___.", a: ["none"], why: "وحدها: `none`." },
    { t: "fill", q: "___ of the answers were correct.", a: ["None"], why: "`None of`." },
    { t: "fix", q: "I don't know nothing about it.", a: ["I don't know anything about it.", "I know nothing about it."], why: "لا نفي مزدوج." },
    { t: "fix", q: "None people came to the party.", a: ["No people came to the party.", "Nobody came to the party.", "None of the people came to the party."], why: "قبل الاسم: `No`." },
    { t: "fix", q: "Nobody didn't understand the question.", a: ["Nobody understood the question."], why: "`Nobody` منفية." },
    { t: "rewrite", q: "I don't have any free time this week. (Use: no)", ask: "أعد الصياغة.", a: ["I have no free time this week."], why: "`have no`." }
  ]
};
