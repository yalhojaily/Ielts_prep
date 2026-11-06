window.LESSONS = window.LESSONS || {};
window.LESSONS[130] = {
 "steps": [
  {
   "k": "الفكرة",
   "h": "outweigh = *ميزان*، لا قائمة",
   "why": [
    "تخيل ميزانًا: في كفة المزايا وفي الأخرى العيوب. السؤال: أي الكفتين أثقل؟ المصحح لا يريد قائمة طويلة، بل حكمًا مدعومًا.",
    "والحكم لا يُبنى على العدد (ثلاث مزايا مقابل عيبين)، بل على **الأهمية**: ما الأكثر تأثيرًا؟ وهل يمكن معالجة العيوب؟"
   ],
   "show": [
    {
     "t": "decide",
     "q": "هل يحتوي السؤال على outweigh؟",
     "opts": [
      {
       "lab": "نعم",
       "h": "احكم بوضوح",
       "en": [
        "I believe the advantages clearly outweigh the drawbacks."
       ],
       "txt": "فقرة للأضعف ثم للأقوى"
      },
      {
       "lab": "لا",
       "h": "اعرض الجانبين",
       "en": [
        "What are the advantages and disadvantages?"
       ],
       "txt": "الحكم اختياري"
      }
     ]
    }
   ],
   "check": {
    "q": "You list three advantages and two disadvantages. Does that prove the advantages outweigh?",
    "o": [
     "No, importance matters, not number",
     "Yes"
    ],
    "a": 0,
    "why": "الأهمية."
   }
  },
  {
   "k": "مقال كامل",
   "h": "مقال *Band 8* (المزايا أكبر)",
   "why": [
    "لاحظ أن الفقرة الأولى تعترف بالعيوب بجدية، ثم تبدأ الثانية بـ `Nevertheless` لتنتقل إلى الحكم."
   ],
   "show": [
    {
     "t": "essay",
     "h": "Advantages outweigh",
     "task": "In many countries, more and more people are working from home rather than in an office. Do the advantages of this trend outweigh the disadvantages?",
     "paras": [
      {
       "lab": "المقدمة",
       "en": "In recent years, {k:a growing proportion of} employees have begun to do their jobs remotely rather than commuting to an office. Although this shift has created some genuine difficulties, {k:I believe that its advantages clearly outweigh its drawbacks}.",
       "note": "إعادة صياغة دقيقة (`a growing proportion of`) + حكم صريح."
      },
      {
       "lab": "الجسم 1: العيوب (الأضعف)",
       "en": "{k:The main disadvantage} of remote working is the loss of day-to-day contact between colleagues. Ideas that might once have emerged from a casual conversation in the corridor now require a scheduled video call, and new employees in particular may find it harder to learn from more experienced staff. Some workers also struggle to separate their professional and personal lives when their kitchen table {k:doubles as} a desk, which can lead to longer hours and, eventually, burnout. For employers, too, maintaining a shared culture becomes more challenging when staff rarely meet.",
       "note": "عيبان مطوّران بأمثلة حية. `might once have emerged` و`doubles as` مفردات وتراكيب دقيقة."
      },
      {
       "lab": "الجسم 2: المزايا (الأقوى)",
       "en": "{k:Nevertheless, these problems are outweighed by} the considerable benefits. The most obvious of these is the time saved on commuting, which in large cities can amount to several hours a week. Employees can devote this time to their families, exercise or rest, and many report that they are more productive as a result. Remote work also widens opportunities: a talented designer living in a small town, or a parent who cannot work fixed hours, can now compete for positions that were previously out of reach. {k:Moreover, most of the drawbacks can be reduced} through sensible measures, such as regular office days for teamwork and clear limits on working hours.",
       "note": "تبدأ بالحكم، ثم مزيتان، ثم الحجة الحاسمة: العيوب قابلة للمعالجة. هذا هو «لماذا تتفوق»."
      },
      {
       "lab": "الخاتمة",
       "en": "{k:In conclusion}, while working from home can weaken collaboration and blur the boundary between work and home life, the gains in time, well-being and opportunity are far greater, particularly when employers manage the arrangement carefully.",
       "note": "الحكم نفسه + الخلاصة + شرط ذكي من الفقرة الثانية."
      }
     ]
    }
   ],
   "check": {
    "q": "What argument finally tips the balance in Body 2?",
    "o": [
     "The drawbacks can be reduced, while the benefits remain",
     "Remote work is popular"
    ],
    "a": 0,
    "why": "العيوب قابلة للمعالجة."
   }
  },
  {
   "k": "لغة الحكم",
   "h": "عبارات *الموازنة*",
   "why": [
    "هذه العبارات تُظهر للمصحح أنك تحكم ولا تعدّد فقط."
   ],
   "show": [
    {
     "t": "ex",
     "items": [
      [
       "The advantages {k:clearly outweigh} the drawbacks.",
       "حكم قوي"
      ],
      [
       "{k:On balance}, the benefits are greater.",
       "حكم بعد موازنة"
      ],
      [
       "These problems {k:are outweighed by} the benefits.",
       "مبني للمجهول"
      ],
      [
       "{k:The drawbacks, though real, are} relatively minor.",
       "تقليل من العيوب"
      ],
      [
       "{k:Most of these drawbacks can be} reduced through…",
       "لماذا يتفوق"
      ]
     ]
    }
   ],
   "check": {
    "q": "Which phrase shows a judgement after weighing both sides?",
    "o": [
     "On balance,",
     "For example,"
    ],
    "a": 0,
    "why": "`On balance`."
   }
  },
  {
   "k": "الفخاخ",
   "h": "لا *تتهرب* من الحكم",
   "why": [
    "«المزايا والعيوب متساوية» يبدو تهربًا. والحكم الذي يظهر في الخاتمة فقط يجعل المقال يبدو بلا اتجاه."
   ],
   "show": [
    {
     "t": "fix",
     "items": [
      [
       "The advantages are outweigh the disadvantages.",
       "The advantages {k:outweigh} the disadvantages.",
       "فعل"
      ],
      [
       "Both sides are equal.",
       "{k:On balance}, the advantages slightly outweigh…",
       "اختر جانبًا"
      ],
      [
       "(judgement only in the conclusion)",
       "{k:I believe that}… (in the introduction too)",
       "من البداية"
      ]
     ]
    }
   ],
   "check": {
    "q": "Where should your judgement first appear?",
    "o": [
     "In the introduction",
     "Only in the conclusion"
    ],
    "a": 0,
    "why": "في المقدمة."
   }
  }
 ],
 "sum": [
  {
   "h": "المطلوب",
   "txt": "حكم: أي الجانبين أكبر ولماذا"
  },
  {
   "h": "الشكل",
   "txt": "الأضعف أولًا ← الأقوى ثانيًا"
  },
  {
   "h": "اللغة",
   "en": [
    "clearly outweigh · On balance, · are outweighed by"
   ]
  },
  {
   "h": "لماذا يتفوق",
   "txt": "الأهمية، أو إمكان معالجة العيوب"
  }
 ],
 "apply": [
  {
   "p": "اكتب مقال مزايا وعيوب كاملًا (250+ كلمة).",
   "use": "Intro (judgement) → weaker side → stronger side → Conclusion",
   "m": [
    "Plan — Judgement: disadvantages outweigh. Body 1: advantages — convenience, choice, lower prices. Body 2: disadvantages — local shops close, town centres decline, packaging waste and delivery traffic. Conclusion: the social and environmental costs are greater."
   ],
   "c": [
    [
     "حكم صريح",
     "\\b(outweigh|on balance|far greater|more significant)\\b"
    ],
    [
     "لم تكتب `are outweigh`",
     "!\\b(are|is) outweigh\\b"
    ],
    [
     "خاتمة صحيحة",
     "\\b(in conclusion|to conclude|overall|to sum up|in summary)\\b"
    ],
    [
     "مثال واحد على الأقل",
     "\\b(for (example|instance)|such as)\\b"
    ],
    [
     "لم تبدأ بـ `Nowadays`",
     "!^\\s*nowadays\\b"
    ]
   ],
   "long": true,
   "min": 250,
   "task": "Many people now buy most of their goods online rather than in local shops. Do the advantages of this trend outweigh the disadvantages?"
  }
 ],
 "applyMode": "writing"
};
