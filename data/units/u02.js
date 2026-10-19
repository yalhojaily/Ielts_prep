window.UNITS = window.UNITS || {};
window.UNITS[2] = {
  id: 2,
  title: "The present simple negative",
  ar: "نفي المضارع البسيط",
  idea: "لنفي المضارع البسيط نضيف فعلًا مساعدًا هو `do not` أو `does not` قبل الفعل الأساسي. والمهم: عندما نستخدم `does` يعود الفعل الأساسي إلى صورته الأصلية **بدون** `-s`، لأن `does` أخذت العلامة.",
  uses: [
    ["نفي عادة", "I don't eat meat."],
    ["نفي حقيقة", "Penguins don't fly."],
    ["نفي مع be: نضع not بعد الفعل مباشرة بدون do", "She isn't at home."]
  ],
  formula: [
    ["I / you / we / they", "{s:I / You / We / They} {a:do} {n:not} {v:work} → {a:don't} {v:work}"],
    ["he / she / it", "{s:He / She / It} {a:does} {n:not} {v:work} → {a:doesn't} {v:work}"],
    ["فعل be", "{s:I} {v:am} {n:not} · {s:he} {v:is} {n:not} → {v:isn't} · {s:they} {v:are} {n:not} → {v:aren't}"]
  ],
  notes: [
    { title: "الـ s تنتقل إلى does",
      body: "في الإثبات نقول `he works`، وفي النفي `he doesn't work`. العلامة لا تظهر مرتين. هذه أكثر نقطة يقع فيها الخطأ.",
      en: "He {v:works}. → He {a:doesn't} {v:work}. · She {v:has} a car. → She {a:doesn't} {v:have} a car." },
    { title: "فعل be لا يحتاج do",
      body: "مع `am / is / are` نضع `not` بعدها مباشرة. لا نقول `don't be` في الجمل الخبرية.",
      en: "I {v:am} {n:not} tired. · They {v:aren't} ready." },
    { title: "الصيغة المختصرة والكاملة",
      body: "`don't` و`doesn't` شائعتان في الكلام والكتابة غير الرسمية. في المقال الأكاديمي (IELTS Writing Task 2) الأفضل كتابة `do not` و`does not` كاملة.",
      en: "Many students {a:do} {n:not} {v:have} access to the internet." }
  ],
  examples: [
    ["{s:I} {a:don't} {v:like} spicy food.", "لا أحب الطعام الحار."],
    ["{s:My sister} {a:doesn't} {v:drive}.", "أختي لا تقود السيارة."],
    ["{s:This shop} {a:doesn't} {v:open} on Fridays.", "هذا المحل لا يفتح يوم الجمعة."],
    ["{s:We} {a:don't} {v:have} classes on Saturday.", "ليس لدينا دروس يوم السبت."],
    ["{s:He} {v:isn't} a doctor. He's a nurse.", "هو ليس طبيبًا، إنه ممرض."]
  ],
  mistakes: [
    ["He doesn't works here.", "He doesn't work here.", "بعد `doesn't` يعود الفعل إلى أصله بدون `-s`."],
    ["She don't like coffee.", "She doesn't like coffee.", "مع she/he/it نستخدم `doesn't` وليس `don't`."],
    ["I not understand.", "I don't understand.", "في العربية نضع «لا» قبل الفعل مباشرة، أما في الإنجليزية فلا بد من فعل مساعد: `don't`."],
    ["He doesn't busy.", "He isn't busy.", "`busy` صفة وليست فعلًا، فنستخدم `isn't` (نفي be)."]
  ],
  ielts: {
    text: "في **Writing Task 2** تحتاج النفي كثيرًا عند عرض الرأي المعاكس أو المشكلات. اكتب الصيغة الكاملة `does not` في المقال، واستخدم المختصرة في **Speaking** لتبدو طبيعيًا.",
    en: "Some people argue that technology does not improve the quality of education."
  },
  questions: [
    { t: "mcq", q: "My brother ___ coffee.", o: ["don't drink", "doesn't drink", "doesn't drinks", "not drink"], a: 1,
      why: "`My brother` مفرد غائب فنستخدم `doesn't`، والفعل بعدها بدون s: `drink`." },
    { t: "mcq", q: "We ___ on Fridays.", o: ["doesn't work", "not work", "don't work", "aren't work"], a: 2,
      why: "مع `we` نستخدم `don't` + الفعل الأصلي." },
    { t: "mcq", q: "The children ___ hungry.", o: ["don't", "doesn't", "aren't", "isn't"], a: 2,
      why: "`hungry` صفة فنحتاج نفي فعل be، و`children` جمع فنستخدم `aren't`." },
    { t: "mcq", q: "It ___ much in summer here.", o: ["doesn't rain", "don't rain", "doesn't rains", "isn't rain"], a: 0,
      why: "`It` مفرد غائب: `doesn't` + `rain` بدون s." },
    { t: "fill", q: "She ___ (not / eat) meat.", a: ["doesn't eat", "does not eat"],
      why: "she + `doesn't` + الفعل الأصلي `eat`." },
    { t: "fill", q: "I ___ (not / know) the answer.", a: ["don't know", "do not know"],
      why: "I + `don't` + `know`." },
    { t: "fill", q: "My phone ___ (not / work) properly.", a: ["doesn't work", "does not work"],
      why: "`My phone` مفرد غائب: `doesn't work`." },
    { t: "fill", q: "They ___ (not / be) at home now.", a: ["aren't", "are not"],
      why: "نفي be مع they: `aren't`." },
    { t: "fix", q: "He doesn't speaks French.", a: ["He doesn't speak French.", "He does not speak French."],
      why: "بعد `doesn't` الفعل يكون بدون s: `speak`." },
    { t: "fix", q: "My mother don't watch TV.", a: ["My mother doesn't watch TV.", "My mother does not watch TV."],
      why: "`My mother` مفرد غائب فنستخدم `doesn't`." },
    { t: "fix", q: "I not like this weather.", a: ["I don't like this weather.", "I do not like this weather."],
      why: "النفي يحتاج الفعل المساعد `don't`، لا نضع `not` وحدها قبل الفعل." },
    { t: "rewrite", q: "She has a car.", ask: "حوّل الجملة إلى النفي.",
      a: ["She doesn't have a car.", "She does not have a car."],
      why: "`has` تعود إلى `have` بعد `doesn't`." },
    { t: "rewrite", q: "The bank opens on Saturdays.", ask: "حوّل الجملة إلى النفي.",
      a: ["The bank doesn't open on Saturdays.", "The bank does not open on Saturdays."],
      why: "`opens` تصبح `doesn't open`: العلامة s انتقلت إلى does." },
    { t: "rewrite", q: "I am interested in sports.", ask: "حوّل الجملة إلى النفي.",
      a: ["I am not interested in sports.", "I'm not interested in sports."],
      why: "مع فعل be نضع `not` بعده مباشرة، بدون `do`." }
  ]
};
