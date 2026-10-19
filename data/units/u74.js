window.UNITS = window.UNITS || {};
window.UNITS[74] = {
  id: 74,
  title: "Numbers",
  ar: "الأعداد",
  idea: "هناك **الأعداد الأصلية** (`one, two, three`) للعد، و**الترتيبية** (`first, second, third`) للترتيب والتواريخ. ولقراءة الأرقام الكبيرة والكسور والنسب المئوية والتواريخ قواعد ثابتة مهمة جدًا في الاستماع.",
  uses: [
    ["عدد أصلي", "three books, 250 people"],
    ["عدد ترتيبي", "the first time, the 21st century"],
    ["الكسور والنسب", "a half, two thirds, 25 percent"],
    ["التواريخ والسنوات", "the fifth of May, nineteen ninety-five"]
  ],
  formula: [
    ["مئات وآلاف", "350 = three hundred {x:and} fifty · 2,500 = two thousand five hundred"],
    ["لا s", "{x:three hundred} people (not: hundreds) · {x:two million} riyals"],
    ["s مع of", "{x:hundreds of} people · {x:millions of} dollars"],
    ["ترتيبي", "1st first · 2nd second · 3rd third · 5th fifth · 12th twelfth · 20th twentieth"]
  ],
  notes: [
    { title: "hundred بلا s بعد عدد",
      body: "`five hundred`، لكن `hundreds of` بمعنى «المئات من».",
      en: "{x:three thousand} visitors · {x:thousands of} visitors" },
    { title: "قراءة السنوات",
      body: "نقسم السنة إلى جزأين: `1998 = nineteen ninety-eight`. وبعد 2000: `two thousand and five` أو `twenty twenty-four`.",
      en: "1985 = nineteen eighty-five · 2007 = two thousand and seven · 2026 = twenty twenty-six" },
    { title: "الكسور",
      body: "`1/2 a half, 1/3 a third, 1/4 a quarter, 3/4 three quarters, 2/3 two thirds`. والفاصلة العشرية `point`: `2.5 = two point five`.",
      en: "{x:two thirds} of the students · {x:three point five} percent" },
    { title: "التاريخ",
      body: "نكتب `5 May` ونقرأ `the fifth of May` أو `May the fifth`.",
      en: "My birthday is on {x:the 3rd of March}." }
  ],
  examples: [
    ["The city has a population of {x:two million}.", "عدد سكان المدينة مليونان."],
    ["{x:Hundreds of} people attended the event.", "حضر مئات الأشخاص الفعالية."],
    ["It's my {x:first} visit to Egypt.", "إنها زيارتي الأولى لمصر."],
    ["Prices rose by {x:three point two} percent.", "ارتفعت الأسعار بنسبة 3.2%."],
    ["About {x:a quarter} of the population is under 15.", "نحو ربع السكان تحت 15 سنة."]
  ],
  mistakes: [
    ["three hundreds people", "three hundred people", "بعد العدد بلا s."],
    ["thousand of people", "thousands of people", "مع of: `thousands`."],
    ["the twenty-one century", "the twenty-first century", "الترتيبي: `twenty-first`."],
    ["two point five percents", "two point five percent", "`percent` بلا s."]
  ],
  ielts: {
    text: "الأرقام أساس **Listening Section 1** (أسعار، تواريخ، أرقام هواتف) و**Writing Task 1** (الرسوم البيانية). تدرّب على كتابة `fifteen / fifty` و`thirteen / thirty` لأنها تختلط في الاستماع.",
    en: "Just over a third of households owned a computer in 2000, compared with almost 90 percent in 2020."
  },
  questions: [
    { t: "mcq", q: "Two ___ people live in this city.", o: ["millions", "million", "millions of", "million of"], a: 1, why: "بعد العدد بلا s." },
    { t: "mcq", q: "___ of people visit Makkah every year.", o: ["Million", "Millions", "Two millions", "Millions people"], a: 1, why: "`Millions of`." },
    { t: "mcq", q: "This is my ___ time in Riyadh.", o: ["three", "third", "threeth", "thirdth"], a: 1, why: "ترتيبي: `third`." },
    { t: "mcq", q: "How do you say 1/4?", o: ["a fourth one", "a quarter", "one four", "a forth"], a: 1, why: "`a quarter`." },
    { t: "mcq", q: "We live in the ___ century.", o: ["twenty-one", "twenty-first", "twentieth-first", "twenty-oneth"], a: 1, why: "`twenty-first`." },
    { t: "mcq", q: "How do you read 2.75?", o: ["two comma seventy-five", "two point seven five", "two dot seventy-fives", "two and seventy-five"], a: 1, why: "`point` ثم الأرقام منفردة." },
    { t: "fill", q: "The building has twenty ___ (floor). The office is on the twelfth.", ask: "اكتب الكلمة بالجمع.", a: ["floors"], why: "`twenty floors`." },
    { t: "fill", q: "There were about five ___ people at the stadium. (5,000)", a: ["thousand"], why: "بلا s." },
    { t: "fill", q: "Two ___ of the students passed. (2/3)", a: ["thirds"], why: "`two thirds`." },
    { t: "fix", q: "The phone costs three thousands riyals.", a: ["The phone costs three thousand riyals."], why: "بلا s." },
    { t: "fix", q: "Hundred of birds flew over the lake.", a: ["Hundreds of birds flew over the lake."], why: "`Hundreds of`." },
    { t: "fix", q: "It was my two visit to the museum.", a: ["It was my second visit to the museum."], why: "ترتيبي: `second`." }
  ]
};
