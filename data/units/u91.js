window.UNITS = window.UNITS || {};
window.UNITS[91] = {
  id: 91,
  title: "Substitution",
  ar: "الاستبدال لتجنب التكرار",
  idea: "بدل تكرار اسم أو جملة نستبدلها بكلمة قصيرة: `one / ones` بدل الاسم المعدود، و`so / not` بدل جملة كاملة (`I think so`)، و`do so` بدل الفعل وما بعده.",
  uses: [
    ["one / ones", "I don't like the red car. I prefer the blue one."],
    ["so بعد think / hope / expect / suppose", "“Will it rain?” “I think so.”"],
    ["not للنفي", "“Is he coming?” “I hope not.”"],
    ["do so (رسمي)", "Many people want to stop smoking, but few do so."]
  ],
  formula: [
    ["one", "a big house and a small {x:one} · these shoes and those {x:ones}"],
    ["so", "I {v:think} {x:so}. · I {v:hope} {x:so}. · I {v:'m afraid} {x:so}."],
    ["not", "I {v:hope} {x:not}. · I'm {v:afraid} {x:not}. · I {v:don't think} {x:so}."],
    ["do so", "If you want to leave, you may {x:do so}."]
  ],
  notes: [
    { title: "one لا مع غير المعدود",
      body: "لا نقول `the white one` عن `rice`. مع غير المعدود نحذف الاسم أو نكرره.",
      en: "I prefer white rice to brown. (not: brown one)" },
    { title: "I don't think so أشيع",
      body: "`I think not` رسمية جدًا. الأطبع `I don't think so`.",
      en: "“Is it expensive?” “I {v:don't think} {x:so}.”" },
    { title: "so في أول الجملة",
      body: "`So I heard / So it seems` للتأكيد على معلومة.",
      en: "“They got married.” “{x:So} I heard.”" }
  ],
  examples: [
    ["This phone is old. I need a new {x:one}.", "هذا الهاتف قديم. أحتاج واحدًا جديدًا."],
    ["“Is the shop open?” “I {v:think} {x:so}.”", "هل المحل مفتوح؟ أظن ذلك."],
    ["“Will we be late?” “I {v:hope} {x:not}.”", "هل سنتأخر؟ أتمنى ألا يحدث."],
    ["Which shoes do you prefer, the black {x:ones} or the brown {x:ones}?", "أي حذاء تفضل، الأسود أم البني؟"],
    ["Visitors who wish to park must {x:do so} in the main car park.", "على الزوار الراغبين في الوقوف فعل ذلك في الموقف الرئيسي."]
  ],
  mistakes: [
    ["I think it.", "I think so.", "`think so`."],
    ["I hope no.", "I hope not.", "`hope not`."],
    ["I like the red shoes, not the blue one.", "I like the red shoes, not the blue ones.", "جمع: `ones`."],
    ["I don't think.", "I don't think so.", "نحتاج so."]
  ],
  ielts: {
    text: "في **Speaking** الإجابة بـ `I think so` وحدها قصيرة جدًا؛ أتبعها بسبب: `I think so, because...`. وفي **Writing** استبدال الكلمات بـ `one / ones / this / do so` يرفع **Coherence and Cohesion**.",
    en: "Will cities become more crowded? I think so, mainly because jobs are concentrated there."
  },
  questions: [
    { t: "mcq", q: "My laptop is slow. I need a faster ___.", o: ["it", "one", "ones", "that"], a: 1, why: "`one` بدل laptop." },
    { t: "mcq", q: "“Is it going to rain?” “I hope ___.”", o: ["no", "not", "don't", "so not"], a: 1, why: "`I hope not`." },
    { t: "mcq", q: "“Will he pass?” “I think ___.”", o: ["it", "that", "so", "yes"], a: 2, why: "`I think so`." },
    { t: "mcq", q: "These apples are sweet, but those ___ are sour.", o: ["one", "ones", "it", "-"], a: 1, why: "جمع: `ones`." },
    { t: "mcq", q: "“Is the museum open on Friday?” “I don't think ___.”", o: ["so", "not", "it", "that"], a: 0, why: "`I don't think so`." },
    { t: "fill", q: "“Did you fail?” “I'm afraid ___.” (= yes, sadly)", a: ["so"], why: "`I'm afraid so`." },
    { t: "fill", q: "“Can you come?” “I'm afraid ___.” (= no, sadly)", a: ["not"], why: "`I'm afraid not`." },
    { t: "fill", q: "I don't like the green shirt. Can I see the white ___?", a: ["one"], why: "`one`." },
    { t: "fix", q: "“Is he at home?” “I think it.”", a: ["I think so."], why: "`so`." },
    { t: "fix", q: "“Will it be cold?” “I hope no.”", a: ["I hope not."], why: "`not`." },
    { t: "fix", q: "I prefer the old shoes to the new one.", a: ["I prefer the old shoes to the new ones."], why: "`ones`." },
    { t: "rewrite", q: "“Will she accept?” “I expect that she will accept.” (Use: so)", ask: "اختصر الرد.", a: ["I expect so."], why: "`I expect so`." }
  ]
};
