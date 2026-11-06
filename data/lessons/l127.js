window.LESSONS = window.LESSONS || {};
window.LESSONS[127] = {
 "steps": [
  {
   "k": "الفكرة",
   "h": "الخاتمة *تغلق* ولا تفتح",
   "why": [
    "الخاتمة ليست فقرة جسم ثالثة. وظيفتها أن تعيد موقفك بوضوح وتذكّر القارئ بأهم سببين، في جملتين أو ثلاث.",
    "إذا تذكرت فكرة جديدة وأنت تكتب الخاتمة، فاتركها. فكرة بلا تطوير تضر أكثر مما تنفع."
   ],
   "show": [
    {
     "t": "essay",
     "h": "خاتمة نموذجية",
     "paras": [
      {
       "lab": "إعادة الموقف",
       "en": "{k:In conclusion}, although working from home can leave some employees feeling isolated, I firmly believe that its advantages are greater.",
       "note": "الموقف نفسه الذي في المقدمة، بكلمات مختلفة، مع اعتراف بالرأي الآخر."
      },
      {
       "lab": "الخلاصة",
       "en": "The time saved on commuting and the flexibility to organise one's day contribute significantly to both productivity and well-being.",
       "note": "الفكرتان الرئيسيتان من فقرتي الجسم، بإيجاز، بلا أمثلة جديدة."
      }
     ]
    }
   ],
   "check": {
    "q": "Should you add a new argument in the conclusion?",
    "o": [
     "No",
     "Yes, if it is a good idea"
    ],
    "a": 0,
    "why": "لا أفكار جديدة."
   }
  },
  {
   "k": "الاتساق",
   "h": "المقدمة والخاتمة *تتطابقان*",
   "why": [
    "اقرأ مقدمتك وخاتمتك متتاليتين. يجب أن تقولا الشيء نفسه بكلمات مختلفة. أي تناقض بينهما يجعل الموقف غامضًا.",
    "الخطأ الشائع: مقدمة متحفظة («أوافق جزئيًا»)، ثم خاتمة متحمسة («أوافق تمامًا») لأن الكاتب اقتنع أثناء الكتابة."
   ],
   "show": [
    {
     "t": "compare",
     "cols": [
      {
       "h": "متسق",
       "c": "verb",
       "en": [
        "Intro: …I partly agree…",
        "Conclusion: …while the benefits are real, the drawbacks cannot be ignored…"
       ]
      },
      {
       "h": "متناقض",
       "c": "neg",
       "en": [
        "Intro: …I partly agree…",
        "Conclusion: …I completely agree that…"
       ]
      }
     ]
    }
   ],
   "check": {
    "q": "Intro: 'I disagree.' Which conclusion fits?",
    "o": [
     "Overall, I remain unconvinced that this policy would be effective.",
     "To conclude, I strongly support this policy."
    ],
    "a": 0,
    "why": "الموقف نفسه."
   }
  },
  {
   "k": "البدايات",
   "h": "In conclusion · To conclude · *Overall*",
   "why": [
    "هذه البدايات آمنة ومقبولة. `In conclusion` شائعة جدًا لكنها صحيحة تمامًا، والمصحح لا يعاقب عليها.",
    "تجنب `At the end` (تعني نهاية حدث أو مكان) و`Finally` (لآخر نقطة في قائمة)."
   ],
   "show": [
    {
     "t": "fix",
     "items": [
      [
       "At the end, I think…",
       "{k:In conclusion}, I believe…",
       ""
      ],
      [
       "Finally, I think the advantages are greater.",
       "{k:To conclude}, I believe the advantages are greater.",
       "`Finally` لآخر نقطة لا للخاتمة"
      ],
      [
       "In conclusion, also pollution is a problem.",
       "In conclusion, … (بلا فكرة جديدة)",
       ""
      ]
     ]
    }
   ],
   "check": {
    "q": "Which opening is correct for a conclusion?",
    "o": [
     "At the end,",
     "To conclude,"
    ],
    "a": 1,
    "why": "`To conclude`."
   }
  }
 ],
 "sum": [
  {
   "h": "الوظيفة",
   "txt": "إعادة الموقف + تلخيص الفكرتين"
  },
  {
   "h": "البداية",
   "en": [
    "In conclusion, · To conclude, · Overall,"
   ]
  },
  {
   "h": "الممنوع",
   "txt": "فكرة جديدة · مثال جديد · موقف مختلف"
  },
  {
   "h": "الطول",
   "txt": "2–3 جمل"
  }
 ],
 "apply": [
  {
   "p": "هذه مقدمة وفكرتا جسم. اكتب الخاتمة (جملتان أو ثلاث).",
   "use": "In conclusion, although…, I believe… because… and…",
   "m": [
    "In conclusion, although banning cars from city centres would inconvenience some drivers, I believe it would bring considerable benefits. Cleaner air and safer, quieter streets would greatly improve the quality of life for those who live and work in these areas."
   ],
   "c": [
    [
     "بداية صحيحة",
     "^(in conclusion|to conclude|overall|to sum up|in summary)"
    ],
    [
     "لم تستخدم `At the end`",
     "!\\bat the end\\b"
    ],
    [
     "أعدت الموقف نفسه (يؤيد المنع)",
     null
    ],
    [
     "ذكرت الفكرتين: الهواء النظيف والشوارع الأكثر أمانًا",
     null
    ]
   ],
   "long": true,
   "min": 30,
   "task": "Intro: …I believe that banning cars from city centres would be highly beneficial. Body 1: cleaner air and better health. Body 2: safer, quieter streets for pedestrians. — Write the conclusion."
  },
  {
   "p": "اكتب خاتمة لمقال نقاش (رأيك: التعليم يجب أن يركز على مهارات العمل، مع قيمة للمعرفة).",
   "use": "To conclude, both views have merit, but…",
   "m": [
    "To conclude, while knowledge for its own sake has undeniable value, I believe universities should give priority to the skills graduates need in the workplace, since most students attend university to improve their career prospects."
   ],
   "c": [
    [
     "بداية صحيحة",
     "^(in conclusion|to conclude|overall|to sum up|in summary)"
    ],
    [
     "رأي واضح",
     "\\b(I (believe|think|would argue)|in my (view|opinion))\\b"
    ]
   ],
   "long": true,
   "min": 25
  }
 ],
 "applyMode": "writing"
};
