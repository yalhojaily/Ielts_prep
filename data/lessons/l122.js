window.LESSONS = window.LESSONS || {};
window.LESSONS[122] = {
 "steps": [
  {
   "k": "الفكرة",
   "h": "أكثر سبب للدرجة المنخفضة: *سوء قراءة* السؤال",
   "why": [
    "قد تكتب مقالًا ممتازًا لغويًا عن سؤال آخر. المصحح لا يقيّم جودة الكتابة فقط، بل **مدى إجابتها عن السؤال المحدد**.",
    "لذلك أول مهارة في Task 2 قراءة السؤال بدقة: ما نوعه؟ ما الموضوع المحدد؟ كم جزءًا؟"
   ],
   "show": [
    {
     "t": "chain",
     "items": [
      {
       "h": "الموضوع العام",
       "en": "technology",
       "ar": "لا تكتب عنه وحده"
      },
      {
       "h": "الفكرة المحددة",
       "en": "children using phones at school",
       "ar": "هذا ما تكتب عنه"
      },
      {
       "h": "المطلوب",
       "en": "agree or disagree?",
       "ar": "شكل الإجابة"
      }
     ]
    }
   ],
   "check": {
    "q": "Question: 'Children should not be allowed to use phones at school.' Your essay should focus on…",
    "o": [
     "phones in general",
     "children's phone use at school"
    ],
    "a": 1,
    "why": "الفكرة المحددة لا الموضوع العام."
   }
  },
  {
   "k": "الأنواع",
   "h": "خمسة أنواع، ولكل نوع *شكل*",
   "why": [
    "كل نوع يحدد شكل المقال. اختر النوع وراقب ما يطلبه."
   ],
   "show": [
    {
     "t": "build",
     "lab": "اختر نوع السؤال",
     "opts": [
      [
       "رأي",
       "To what extent do you {k:agree or disagree}?",
       "موقفك هو الإجابة · فقرتان تدعمانه",
       0
      ],
      [
       "نقاش",
       "{k:Discuss both views} and {k:give your own opinion}.",
       "فقرة لكل رأي · ورأيك واضح",
       0
      ],
      [
       "مزايا وعيوب",
       "Do the advantages {k:outweigh} the disadvantages?",
       "فقرة لكل جانب · وحكم: أيهما أكبر",
       1
      ],
      [
       "مشكلة وحل",
       "What are the {k:causes}? What {k:solutions} can you suggest?",
       "فقرة للأسباب · فقرة للحلول",
       1
      ],
      [
       "مزدوج",
       "{k:Why} is this happening? Is it {k:positive or negative}?",
       "فقرة لكل سؤال",
       1
      ]
     ],
     "groups": [
      {
       "h": "موقف ورأي"
      },
      {
       "h": "تحليل وحكم"
      }
     ]
    }
   ],
   "check": {
    "q": "'Discuss both views and give your own opinion.' How many things must you do?",
    "o": [
     "One: give my opinion",
     "Three: view A, view B, and my opinion"
    ],
    "a": 1,
    "why": "الرأيان + رأيك."
   }
  },
  {
   "k": "الكلمات المفتاحية",
   "h": "ضع خطًا تحت *كلمات الأمر*",
   "why": [
    "بعض الكلمات الصغيرة تغيّر المطلوب كله: `both`، `your own`، `outweigh`، `why`، `how`، `extent`.",
    "تجاهل كلمة منها يعني إهمال جزء من السؤال، وهذا يحد درجة Task Response مهما كانت لغتك ممتازة."
   ],
   "show": [
    {
     "t": "ex",
     "items": [
      [
       "Discuss {k:both} views and give {k:your own} opinion.",
       "كلمتان = جزءان إضافيان"
      ],
      [
       "Do the advantages {k:outweigh} the disadvantages?",
       "يطلب حكمًا لا قائمة"
      ],
      [
       "{k:Why} is this happening? {k:Is it} a positive or negative development?",
       "سؤالان = فقرتان"
      ],
      [
       "To what {k:extent} do you agree?",
       "يمكن أن توافق جزئيًا"
      ]
     ]
    }
   ],
   "check": {
    "q": "Which word means you must decide which side is greater?",
    "o": [
     "outweigh",
     "discuss"
    ],
    "a": 0,
    "why": "`outweigh`."
   }
  },
  {
   "k": "موافق جزئيًا؟",
   "h": "To what extent: *جزئيًا* مسموح",
   "why": [
    "في سؤال `To what extent` يمكنك أن توافق تمامًا، أو تعارض تمامًا، أو توافق جزئيًا. كلها صحيحة **بشرط** أن يكون موقفك واضحًا ومتسقًا من المقدمة حتى الخاتمة.",
    "الخطأ ليس الموقف الجزئي، بل الموقف الغامض الذي يتغير أثناء المقال."
   ],
   "show": [
    {
     "t": "compare",
     "cols": [
      {
       "h": "واضح",
       "c": "verb",
       "en": [
        "I partly agree: technology has simplified daily tasks, but it has made work life more stressful."
       ]
      },
      {
       "h": "غامض",
       "c": "neg",
       "en": [
        "There are many opinions about this topic, and both sides have good points."
       ]
      }
     ]
    }
   ],
   "check": {
    "q": "Is a partly-agree position acceptable?",
    "o": [
     "Yes, if it is clear and consistent",
     "No, you must choose one side completely"
    ],
    "a": 0,
    "why": "المهم الوضوح والاتساق."
   }
  }
 ],
 "sum": [
  {
   "h": "الأنواع",
   "txt": "رأي · نقاش · مزايا وعيوب · مشكلة وحل · مزدوج"
  },
  {
   "h": "اقرأ",
   "txt": "الموضوع العام ← الفكرة المحددة ← المطلوب"
  },
  {
   "h": "كلمات الأمر",
   "en": [
    "both · your own opinion · outweigh · why · extent"
   ]
  },
  {
   "h": "الموقف",
   "txt": "واضح ومتسق من البداية للنهاية"
  }
 ],
 "apply": [
  {
   "p": "حدّد نوع هذا السؤال، والفكرة المحددة، وعدد الأجزاء المطلوبة (بالإنجليزية).",
   "use": "Type: … · Specific topic: … · Parts: …",
   "m": [
    "Type: discussion. Specific topic: whether university should focus on job skills or on knowledge for its own sake. Parts: three — view A, view B and my own opinion."
   ],
   "c": [
    [
     "ذكرت النوع",
     "\\b(discussion|discuss)\\b"
    ],
    [
     "ذكرت عدد الأجزاء أو الرأي الشخصي",
     "\\b(three|3|own opinion|my opinion)\\b"
    ]
   ],
   "task": "Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake. Discuss both views and give your own opinion."
  },
  {
   "p": "اكتب جملتين تشرح فيهما ما يجب أن يغطيه مقال عن هذا السؤال المزدوج.",
   "use": "Paragraph 1 will explain why … · Paragraph 2 will …",
   "m": [
    "The first body paragraph will explain why more adults are choosing to study online, such as flexibility and lower cost. The second will evaluate whether this is a positive development, and I will argue that it is largely positive."
   ],
   "c": [
    [
     "غطيت السؤال الأول (لماذا)",
     "\\b(why|reasons?|because|causes?)\\b"
    ],
    [
     "غطيت السؤال الثاني (إيجابي أم سلبي)",
     "\\b(positive|negative|development)\\b"
    ]
   ],
   "task": "More and more adults are choosing to study online rather than attend classes in person. Why is this happening? Is it a positive or negative development?"
  }
 ],
 "applyMode": "writing"
};
