window.UNITS = window.UNITS || {};
window.UNITS[73] = {
  id: 73,
  title: "Compound nouns",
  ar: "الأسماء المركبة",
  idea: "الاسم المركب يتكون من كلمتين أو أكثر تعملان كاسم واحد: `bus stop`, `toothbrush`. **الكلمة الأخيرة** هي الأساس، والأولى تصفها كالصفة. وفي العربية الترتيب معكوس: «موقف الحافلات» = `bus stop`.",
  uses: [
    ["اسم + اسم", "car park, credit card, coffee shop"],
    ["صفة + اسم", "high school, greenhouse"],
    ["-ing + اسم", "swimming pool, waiting room"],
    ["كلمة واحدة أو بشرطة أو منفصلة", "bedroom, mother-in-law, post office"]
  ],
  formula: [
    ["الترتيب", "{x:bus} + {v:stop} = موقف الحافلات (stop هو الأساس)"],
    ["الجمع", "bus {v:stops} · credit {v:cards} (الجمع في الكلمة الأخيرة)"],
    ["الأولى مفرد", "a {x:shoe} shop (not: shoes shop) · a {x:ten-minute} walk"]
  ],
  notes: [
    { title: "الكلمة الأولى مفردة",
      body: "حتى لو كان المعنى جمعًا: `a book shop` (يبيع كتبًا)، `a three-year course`.",
      en: "a {x:five-star} hotel (not: five-stars) · a {x:20-year-old} man" },
    { title: "الاستثناء: -in-law و passer-by",
      body: "الجمع في الكلمة الأساسية الأولى.",
      en: "{v:mothers}-in-law · {v:passers}-by" },
    { title: "الترتيب يغيّر المعنى",
      body: "تبديل الكلمتين يغيّر الشيء الأساسي، لأن الكلمة الأخيرة هي الأساس دائمًا.",
      en: "a {x:race} horse (حصان سباق) · a {x:horse} race (سباق خيول)" }
  ],
  examples: [
    ["Is there a {x:bus} {v:stop} near here?", "هل يوجد موقف حافلات قريب؟"],
    ["I left my {x:sun}{v:glasses} in the car.", "تركت نظارتي الشمسية في السيارة."],
    ["It's a {x:ten-minute} {v:walk} to the station.", "المحطة على بعد عشر دقائق مشيًا."],
    ["We stayed in a {x:five-star} {v:hotel}.", "أقمنا في فندق خمس نجوم."],
    ["{x:Air} {v:pollution} is a serious problem.", "تلوث الهواء مشكلة خطيرة."]
  ],
  mistakes: [
    ["stop bus", "bus stop", "الأساس في الآخر."],
    ["a five-stars hotel", "a five-star hotel", "الأولى مفردة."],
    ["a shoes shop", "a shoe shop", "الأولى مفردة."],
    ["two credits card", "two credit cards", "الجمع في الأخيرة."]
  ],
  ielts: {
    text: "الأسماء المركبة تجعل كتابتك أقصر وأكثر طبيعية: `traffic congestion`, `energy consumption`, `job opportunities`, `life expectancy`, `living standards`. وهي من أكثر المصطلحات في **Writing Task 1 و2**.",
    en: "Life expectancy has risen, and living standards have improved in most countries."
  },
  questions: [
    { t: "mcq", q: "Where's the nearest ___?", o: ["station bus", "bus station", "buses station", "station of bus"], a: 1, why: "`bus station`." },
    { t: "mcq", q: "It's a ___ flight.", o: ["three-hours", "three-hour", "three hours'", "hours three"], a: 1, why: "الأولى مفردة: `three-hour`." },
    { t: "mcq", q: "I need two ___.", o: ["toothbrushs", "teethbrushes", "toothbrushes", "tooth brushs"], a: 2, why: "الجمع في الأخيرة." },
    { t: "mcq", q: "My sister has two ___.", o: ["brother-in-laws", "brothers-in-law", "brothers-in-laws", "brother-ins-law"], a: 1, why: "`brothers-in-law`." },
    { t: "mcq", q: "___ is a problem in big cities.", o: ["Traffic congestion", "Congestion traffic", "Traffics congestion", "Congestion of traffics"], a: 0, why: "`traffic congestion`." },
    { t: "fill", q: "A room where you wait is a ___ room.", a: ["waiting"], why: "`waiting room`." },
    { t: "fill", q: "A shop that sells books is a ___ shop.", a: ["book"], why: "مفرد: `book shop`." },
    { t: "fill", q: "A boy who is ten years old is a ten-___-old boy.", a: ["year"], why: "مفرد: `ten-year-old`." },
    { t: "fix", q: "We stayed in a four-stars hotel.", a: ["We stayed in a four-star hotel."], why: "مفرد." },
    { t: "fix", q: "Is there a park car nearby?", a: ["Is there a car park nearby?"], why: "`car park`." },
    { t: "fix", q: "He works in a shoes factory.", a: ["He works in a shoe factory."], why: "مفرد." },
    { t: "rewrite", q: "The expectancy of life has increased. (Use a compound noun)", ask: "أعد الصياغة.", a: ["Life expectancy has increased."], why: "`life expectancy`." }
  ]
};
