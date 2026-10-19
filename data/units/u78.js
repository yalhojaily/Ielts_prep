window.UNITS = window.UNITS || {};
window.UNITS[78] = {
  id: 78,
  title: "Reflexive pronouns",
  ar: "الضمائر الانعكاسية",
  idea: "الضمائر المنتهية بـ `-self / -selves` تُستخدم عندما يكون **الفاعل والمفعول شخصًا واحدًا** (`I hurt myself`)، أو **للتوكيد** (`I did it myself` = بنفسي). و`by myself` تعني «وحدي».",
  uses: [
    ["الفاعل = المفعول", "She cut herself."],
    ["التوكيد", "The manager himself called me."],
    ["by + -self = وحده", "He lives by himself."],
    ["each other = بعضهم بعضًا", "They love each other."]
  ],
  formula: [
    ["مفرد", "{s:myself, yourself, himself, herself, itself}"],
    ["جمع", "{s:ourselves, yourselves, themselves}"],
    ["by", "{x:by} {s:myself} = alone"]
  ],
  notes: [
    { title: "-selves أم each other؟",
      body: "`They hurt themselves` = كل واحد آذى نفسه. `They hurt each other` = آذى أحدهما الآخر.",
      en: "They looked at {s:themselves}. · They looked at {s:each other}." },
    { title: "أفعال لا تأخذ -self",
      body: "`relax, feel, concentrate, wash, shave, dress` عادة بلا ضمير انعكاسي.",
      en: "I relaxed. (not: relaxed myself) · I feel tired." },
    { title: "عبارات شائعة",
      body: "`Help yourself` (تفضل خذ)، `Enjoy yourself` (استمتع)، `Make yourself at home` (البيت بيتك).",
      en: "Please help {s:yourself} to some food." }
  ],
  examples: [
    ["{s:I} taught {s:myself} to code.", "علمت نفسي البرمجة."],
    ["{s:The door} closes by {s:itself}.", "الباب يُغلق تلقائيًا."],
    ["Did you {v:enjoy} {s:yourselves} at the party?", "هل استمتعتم بالحفلة؟"],
    ["{s:She} prefers to travel by {s:herself}.", "تفضل السفر وحدها."],
    ["{s:We} built the house {s:ourselves}.", "بنينا البيت بأنفسنا."]
  ],
  mistakes: [
    ["He hurt him. (himself)", "He hurt himself.", "الفاعل والمفعول نفس الشخص."],
    ["They blamed theirselves.", "They blamed themselves.", "`themselves`."],
    ["I relaxed myself on the beach.", "I relaxed on the beach.", "`relax` بلا -self."],
    ["They don't talk to themselves anymore. (meaning: to each other)", "They don't talk to each other anymore.", "التبادل: `each other`."]
  ],
  ielts: {
    text: "في **Speaking Part 2** عن إنجاز شخصي: `I taught myself...`, `I did it by myself`. وفي **Writing Task 2**: `People should take care of themselves`, `Children learn to express themselves`.",
    en: "I taught myself to play the guitar by watching online videos."
  },
  questions: [
    { t: "mcq", q: "Be careful! Don't cut ___.", o: ["you", "yourself", "yourselves", "your"], a: 1, why: "`yourself`." },
    { t: "mcq", q: "They introduced ___ to the group.", o: ["theirselves", "themselves", "them", "theirself"], a: 1, why: "`themselves`." },
    { t: "mcq", q: "She lives by ___.", o: ["her", "herself", "hers", "she"], a: 1, why: "`by herself` = وحدها." },
    { t: "mcq", q: "Ali and Sara send messages to ___ every day.", o: ["themselves", "each other", "theirselves", "them"], a: 1, why: "تبادل: `each other`." },
    { t: "mcq", q: "I felt ___ after the long day.", o: ["tired myself", "tired", "myself tired", "me tired"], a: 1, why: "`feel` بلا -self." },
    { t: "fill", q: "We painted the house ___.", a: ["ourselves"], why: "`ourselves`." },
    { t: "fill", q: "The machine turns ___ off automatically.", a: ["itself"], why: "`itself`." },
    { t: "fill", q: "Please help ___ to some dates.", a: ["yourself", "yourselves"], why: "`help yourself`." },
    { t: "fix", q: "He taught him to swim. (He learned alone)", a: ["He taught himself to swim."], why: "`himself`." },
    { t: "fix", q: "They enjoyed theirselves at the beach.", a: ["They enjoyed themselves at the beach."], why: "`themselves`." },
    { t: "fix", q: "I concentrated myself on my work.", a: ["I concentrated on my work."], why: "بلا -self." },
    { t: "rewrite", q: "She went to the cinema alone. (Use: by herself)", ask: "أعد الصياغة.", a: ["She went to the cinema by herself."], why: "`by herself`." }
  ]
};
