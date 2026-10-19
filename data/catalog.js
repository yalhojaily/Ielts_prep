// فهرس القواعد بنفس ترتيب الكتاب. available: true للوحدات التي كُتب محتواها.
window.CATALOG = [
  { ar: "الحاضر", en: "Present", color: "red", units: [
    [1, "The present simple"], [2, "The present simple negative"], [3, "Present simple questions"],
    [4, "The present continuous"], [5, "Present tenses overview"], [6, "Imperatives"] ] },
  { ar: "الماضي", en: "Past", color: "teal", units: [
    [7, "The past simple"], [8, "The past simple negative"], [9, "Past simple questions"],
    [10, "The past continuous"], [11, "The present perfect simple"], [12, "The present perfect continuous"],
    [13, "The past perfect simple"], [14, "The past perfect continuous"], [15, "“Used to” and “would”"],
    [16, "Past tenses overview"] ] },
  { ar: "المستقبل", en: "Future", color: "purple", units: [
    [17, "The future with “going to”"], [18, "The future with “will”"], [19, "The present for future events"],
    [20, "The future continuous"], [21, "The future perfect"], [22, "The future in the past"], [23, "Future overview"] ] },
  { ar: "المبني للمجهول", en: "Passive", color: "orange", units: [
    [24, "The passive"], [25, "The passive in the past"], [26, "The passive in the future"],
    [27, "The passive with modals"], [28, "Other passive constructions"] ] },
  { ar: "الشرط والتمني", en: "Conditionals", color: "olive", units: [
    [29, "Conditional sentences"], [30, "Other conditional sentences"], [31, "Conditional sentences overview"],
    [32, "Future possibilities"], [33, "Wishes and regrets"] ] },
  { ar: "الأسئلة", en: "Questions", color: "blue", units: [
    [34, "Forming questions"], [35, "Question words"], [36, "Open questions"], [37, "Object and subject questions"],
    [38, "Indirect questions"], [39, "Question tags"], [40, "Short questions"], [41, "Short answers"], [42, "Questions overview"] ] },
  { ar: "الكلام المنقول", en: "Reported speech", color: "red", units: [
    [43, "Reported speech"], [44, "Tenses in reported speech"], [45, "Reporting verbs"],
    [46, "Reported speech with negatives"], [47, "Reported questions"], [48, "Reported speech overview"] ] },
  { ar: "الأفعال وأنماطها", en: "Verbs", color: "teal", units: [
    [49, "Types of verbs"], [50, "Action and state verbs"], [51, "Infinitives and participles"], [52, "Verb patterns"],
    [53, "Verb patterns with objects"], [54, "Verb patterns with prepositions"], [55, "Phrasal verbs"] ] },
  { ar: "الأفعال الناقصة", en: "Modal verbs", color: "purple", units: [
    [56, "Modal verbs"], [57, "Ability"], [58, "Permission, requests, and offers"], [59, "Suggestions and advice"],
    [60, "Obligations"], [61, "Making deductions"], [62, "Possibility"] ] },
  { ar: "أدوات التعريف والمحددات", en: "Articles & determiners", color: "orange", units: [
    [63, "Articles"], [64, "Articles overview"], [65, "“This / that / these / those”"], [66, "“No / none”"],
    [67, "“Each / every”"], [68, "“Either / neither / both”"] ] },
  { ar: "الأسماء", en: "Nouns", color: "olive", units: [
    [69, "Singular and plural nouns"], [70, "Countable and uncountable nouns"], [71, "Subject-verb agreement"],
    [72, "Abstract and concrete nouns"], [73, "Compound nouns"] ] },
  { ar: "الأعداد والكميات", en: "Numbers & quantity", color: "blue", units: [
    [74, "Numbers"], [75, "Quantity"], [76, "Approximate quantity"] ] },
  { ar: "الضمائر والملكية", en: "Pronouns", color: "red", units: [
    [77, "Personal pronouns"], [78, "Reflexive pronouns"], [79, "Indefinite pronouns"], [80, "Possession"] ] },
  { ar: "جمل الصلة", en: "Relative clauses", color: "teal", units: [
    [81, "Defining relative clauses"], [82, "Non-defining relative clauses"], [83, "Other relative structures"],
    [84, "Question words with “-ever”"] ] },
  { ar: "تراكيب الجملة", en: "Sentence structure", color: "purple", units: [
    [85, "“There”"], [86, "Introductory “it”"], [87, "Shifting focus"], [88, "Inversion"],
    [89, "Ellipsis"], [90, "Shortening infinitives"], [91, "Substitution"] ] },
  { ar: "الصفات والمقارنة", en: "Adjectives", color: "orange", units: [
    [92, "Adjectives"], [93, "Gradable and non-gradable adjectives"], [94, "Comparative adjectives"],
    [95, "Two comparatives together"], [96, "“As… as” comparisons"], [97, "Superlative adjectives"] ] },
  { ar: "الظروف", en: "Adverbs", color: "olive", units: [
    [98, "Adverbs of manner"], [99, "Comparative and superlative adverbs"], [100, "Adverbs of degree"],
    [101, "Adverbs of time"], [102, "Adverbs of frequency"], [103, "“So” and “such”"], [104, "“Enough” and “too”"] ] },
  { ar: "حروف الجر", en: "Prepositions", color: "blue", units: [
    [105, "Prepositions"], [106, "Prepositions of place"], [107, "Prepositions of time"],
    [108, "Other prepositions"], [109, "Dependent prepositions"] ] },
  { ar: "أدوات الربط", en: "Linking words", color: "red", units: [
    [110, "Coordinating conjunctions"], [111, "Subordinating conjunctions"], [112, "More linking words"],
    [113, "Linking words overview"] ] },
  { ar: "بناء الكلمات", en: "Word building", color: "teal", units: [
    [114, "Prefixes"], [115, "Suffixes"] ] },
  { ar: "مهارات المحادثة", en: "Conversation", color: "purple", units: [
    [116, "Easily confused phrases"], [117, "Sequencing and organizing"], [118, "Correcting and changing the subject"],
    [119, "Deciding and hedging"], [120, "Making conversation"] ] }
];

// الوحدات المكتملة (عند إضافة وحدة: أنشئ data/units/uNN.js وأضف رقمها هنا)
window.AVAILABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

// قواعد ذات أولوية عالية لاختبار IELTS
window.IELTS_PRIORITY = [1, 4, 5, 7, 10, 11, 12, 13, 18, 21, 24, 25, 27, 29, 30, 33, 38, 43, 44, 50, 51, 52, 56, 61, 62, 63, 70, 71, 75, 81, 82, 86, 88, 94, 97, 100, 109, 110, 111, 112, 113, 119];
