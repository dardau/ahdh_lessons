import {chapters} from './curriculum.js';
export const topics = [
  {
    "id": 0,
    "title": "To be",
    "subtitle": "Кто я и как я себя чувствую",
    "rule": "am / is / are описывают состояние, профессию и местоположение. В прошлом: was / were. В вопросе be ставится перед подлежащим; для отрицания добавь not.",
    "example": "I am a student. My classmates are kind. Yesterday I was tired.",
    "tip": "Не пропускай be: My studio is small. Но перед обычным глаголом оно не нужно: I work.",
    "questions": [
      {
        "id": "0-0",
        "prompt": "I ___ a student.",
        "answer": "am",
        "options": [
          "am",
          "is",
          "are"
        ],
        "why": "С I используется am."
      },
      {
        "id": "0-1",
        "prompt": "My classmates ___ kind.",
        "answer": "are",
        "options": [
          "are",
          "is",
          "am"
        ],
        "why": "Множественное число: are."
      },
      {
        "id": "0-2",
        "prompt": "Yesterday I ___ tired.",
        "answer": "was",
        "options": [
          "was",
          "am",
          "were"
        ],
        "why": "С I в прошлом — was."
      },
      {
        "id": "0-3",
        "prompt": "___ your studio new?",
        "answer": "Is",
        "options": [
          "Is",
          "Does",
          "Are"
        ],
        "why": "Для вопроса переставь is перед your studio."
      }
    ]
  },
  {
    "id": 1,
    "title": "Present Simple / Continuous",
    "subtitle": "Привычки и то, что происходит сейчас",
    "rule": "Present Simple: I work; she works. Вопросы do/does, отрицания don't/doesn't. Present Continuous: am/is/are + verb-ing для действия сейчас или временной ситуации.",
    "example": "I usually create videos. Today I am updating our website.",
    "tip": "После does глагол без -s: Does she work?",
    "questions": [
      {
        "id": "1-0",
        "prompt": "I usually ___ videos.",
        "answer": "create",
        "options": [
          "create",
          "am creating",
          "creates"
        ],
        "why": "Usually обозначает привычку."
      },
      {
        "id": "1-1",
        "prompt": "Right now I ___ English.",
        "answer": "am practising",
        "options": [
          "am practising",
          "practise",
          "practises"
        ],
        "why": "Действие сейчас: am + ing."
      },
      {
        "id": "1-2",
        "prompt": "She ___ with clients every day.",
        "answer": "works",
        "options": [
          "works",
          "work",
          "is work"
        ],
        "why": "В Simple после she добавляется -s."
      },
      {
        "id": "1-3",
        "prompt": "___ you work on Sundays?",
        "answer": "Do",
        "options": [
          "Do",
          "Are",
          "Does"
        ],
        "why": "С you и обычным глаголом нужен do."
      }
    ]
  },
  {
    "id": 2,
    "title": "State verbs",
    "subtitle": "Что я знаю, люблю и хочу",
    "rule": "Know, understand, want, need, believe обычно описывают состояние и не используются в Continuous. Некоторые глаголы меняют смысл: I think = считаю; I am thinking = обдумываю.",
    "example": "I want to study abroad. I am thinking about a new idea.",
    "tip": "I don't understand — не I am not understanding. Но think может быть действием.",
    "questions": [
      {
        "id": "2-0",
        "prompt": "I ___ this idea is useful.",
        "answer": "think",
        "options": [
          "think",
          "am thinking",
          "thinking"
        ],
        "why": "Здесь think означает мнение."
      },
      {
        "id": "2-1",
        "prompt": "I ___ more practice.",
        "answer": "need",
        "options": [
          "need",
          "am needing",
          "needs"
        ],
        "why": "Need обычно глагол состояния."
      },
      {
        "id": "2-2",
        "prompt": "She ___ how it works.",
        "answer": "knows",
        "options": [
          "knows",
          "is knowing",
          "know"
        ],
        "why": "Состояние + третье лицо: knows."
      },
      {
        "id": "2-3",
        "prompt": "I ___ about our next video right now.",
        "answer": "am thinking",
        "options": [
          "am thinking",
          "think",
          "thinks"
        ],
        "why": "Обдумывание — процесс, поэтому Continuous."
      }
    ]
  },
  {
    "id": 3,
    "title": "Past Simple / Continuous",
    "subtitle": "Как прошёл день",
    "rule": "Past Simple — завершённое событие: worked, went, drove. Past Continuous — процесс в конкретный момент прошлого: was/were + ing. Процесс часто служит фоном для короткого события.",
    "example": "I was studying when my phone rang. Then I drove home.",
    "tip": "После did/didn't нужна начальная форма: didn't go, не didn't went.",
    "questions": [
      {
        "id": "3-0",
        "prompt": "Yesterday I ___ home.",
        "answer": "drove",
        "options": [
          "drove",
          "drive",
          "have driven"
        ],
        "why": "Есть завершённое время yesterday."
      },
      {
        "id": "3-1",
        "prompt": "At 8 p.m. I ___ a video.",
        "answer": "was editing",
        "options": [
          "was editing",
          "edited usually",
          "am editing"
        ],
        "why": "Процесс в момент прошлого: was editing."
      },
      {
        "id": "3-2",
        "prompt": "I was reading when my phone ___.",
        "answer": "rang",
        "options": [
          "rang",
          "was ring",
          "rings"
        ],
        "why": "Короткое событие на фоне процесса."
      },
      {
        "id": "3-3",
        "prompt": "I didn't ___ the lecture.",
        "answer": "understand",
        "options": [
          "understand",
          "understood",
          "understands"
        ],
        "why": "После didn't — начальная форма."
      }
    ]
  },
  {
    "id": 4,
    "title": "Past Simple / Present Perfect",
    "subtitle": "Опыт и конкретное прошлое",
    "rule": "Past Simple используется с завершённым временем: yesterday, last year. Present Perfect: have/has + V3 связывает прошлое с настоящим: опыт без точной даты, текущий результат, ещё не законченный период.",
    "example": "I launched it last year. I have already updated the page.",
    "tip": "Не используй Present Perfect с yesterday. Been, done, written — формы V3.",
    "questions": [
      {
        "id": "4-0",
        "prompt": "I ___ the page yesterday.",
        "answer": "updated",
        "options": [
          "updated",
          "have updated",
          "have update"
        ],
        "why": "Yesterday требует Past Simple."
      },
      {
        "id": "4-1",
        "prompt": "I have never ___ to London.",
        "answer": "been",
        "options": [
          "been",
          "went",
          "was"
        ],
        "why": "После have нужна V3: been."
      },
      {
        "id": "4-2",
        "prompt": "She ___ already finished the video.",
        "answer": "has",
        "options": [
          "has",
          "have",
          "did"
        ],
        "why": "С she: has + finished."
      },
      {
        "id": "4-3",
        "prompt": "We ___ three orders so far.",
        "answer": "have received",
        "options": [
          "have received",
          "received yesterday",
          "receives"
        ],
        "why": "So far означает к настоящему моменту."
      }
    ]
  },
  {
    "id": 5,
    "title": "Past Perfect",
    "subtitle": "Что произошло раньше другого события",
    "rule": "Past Perfect: had + V3. Нужен, чтобы показать событие раньше другой точки в прошлом. Если последовательность очевидна, не обязательно использовать его в каждом рассказе.",
    "example": "When I arrived, the lecture had already started.",
    "tip": "Не путай has и had: had относится к более раннему прошлому.",
    "questions": [
      {
        "id": "5-0",
        "prompt": "When I arrived, the lecture ___ already started.",
        "answer": "had",
        "options": [
          "had",
          "has",
          "have"
        ],
        "why": "Началась до моего прихода."
      },
      {
        "id": "5-1",
        "prompt": "I couldn't log in because I ___ my password.",
        "answer": "had forgotten",
        "options": [
          "had forgotten",
          "have forgot",
          "forget"
        ],
        "why": "Забыла пароль до попытки войти."
      },
      {
        "id": "5-2",
        "prompt": "After she had ___ the file, she sent it.",
        "answer": "checked",
        "options": [
          "checked",
          "check",
          "checking"
        ],
        "why": "После had нужна третья форма глагола. У правильного check это checked."
      },
      {
        "id": "5-3",
        "prompt": "By the time we called, they ___ left.",
        "answer": "had",
        "options": [
          "had",
          "have",
          "are"
        ],
        "why": "Ушли до другого события в прошлом."
      }
    ]
  },
  {
    "id": 6,
    "title": "Future forms",
    "subtitle": "Планы студии и поездки",
    "rule": "Will — решение сейчас, обещание или прогноз. Be going to — намерение или прогноз по признакам. Present Continuous — согласованная будущая встреча. После if/when в обычных будущих условиях используем Present Simple.",
    "example": "I'll help you. I'm going to study tonight. I'm meeting a client at two.",
    "tip": "Часто несколько форм возможны; выбор зависит от смысла и контекста.",
    "questions": [
      {
        "id": "6-0",
        "prompt": "The phone is ringing. I ___ answer it.",
        "answer": "will",
        "options": [
          "will",
          "am",
          "was"
        ],
        "why": "Решение принято сейчас."
      },
      {
        "id": "6-1",
        "prompt": "We have booked a call. We ___ the client tomorrow.",
        "answer": "are meeting",
        "options": [
          "are meeting",
          "met",
          "have met"
        ],
        "why": "Согласованная встреча: Continuous."
      },
      {
        "id": "6-2",
        "prompt": "Look at those clouds! It ___ rain.",
        "answer": "is going to",
        "options": [
          "is going to",
          "is",
          "has"
        ],
        "why": "Прогноз по видимым признакам."
      },
      {
        "id": "6-3",
        "prompt": "When I ___ home, I'll call you.",
        "answer": "get",
        "options": [
          "get",
          "will get",
          "got"
        ],
        "why": "После when о будущем — Present Simple."
      }
    ]
  },
  {
    "id": 7,
    "title": "Modal verbs",
    "subtitle": "Возможности и обязательства",
    "rule": "Can — способность; could — вежливая просьба/возможность; should — совет; must/have to — необходимость. После модального глагола — начальная форма без to. Mustn't = запрещено; don't have to = необязательно.",
    "example": "I can drive. You should take a break. We don't have to work tonight.",
    "tip": "Can to speak — ошибка; правильно can speak.",
    "questions": [
      {
        "id": "7-0",
        "prompt": "I can ___ a car.",
        "answer": "drive",
        "options": [
          "drive",
          "to drive",
          "driving"
        ],
        "why": "После can — начальная форма."
      },
      {
        "id": "7-1",
        "prompt": "You ___ share your password. It's forbidden.",
        "answer": "mustn't",
        "options": [
          "mustn't",
          "don't have to",
          "could"
        ],
        "why": "Mustn't выражает запрет."
      },
      {
        "id": "7-2",
        "prompt": "It's optional, so you ___ attend.",
        "answer": "don't have to",
        "options": [
          "don't have to",
          "mustn't",
          "can't"
        ],
        "why": "Don't have to = необязательно."
      },
      {
        "id": "7-3",
        "prompt": "___ you help me, please?",
        "answer": "Could",
        "options": [
          "Could",
          "Mustn't",
          "Shouldn't"
        ],
        "why": "Could you — вежливая просьба."
      }
    ]
  },
  {
    "id": 8,
    "title": "Prepositions",
    "subtitle": "Время, место и движение",
    "rule": "At 9 / at night; on Monday / on Instagram; in October / in Astana. Go to university, но go home без to. Interested in; good at; depend on. Предлоги учим в сочетаниях.",
    "example": "I study in Astana. I post on Instagram. I go home at six.",
    "tip": "In the morning, но at night. Для точного времени — at.",
    "questions": [
      {
        "id": "8-0",
        "prompt": "We meet ___ Monday.",
        "answer": "on",
        "options": [
          "on",
          "in",
          "at"
        ],
        "why": "С днями недели — on."
      },
      {
        "id": "8-1",
        "prompt": "I post videos ___ Instagram.",
        "answer": "on",
        "options": [
          "on",
          "in",
          "at"
        ],
        "why": "Устойчивое сочетание on Instagram."
      },
      {
        "id": "8-2",
        "prompt": "The call starts ___ 10.",
        "answer": "at",
        "options": [
          "at",
          "on",
          "in"
        ],
        "why": "Точное время: at."
      },
      {
        "id": "8-3",
        "prompt": "I'm interested ___ technology.",
        "answer": "in",
        "options": [
          "in",
          "on",
          "at"
        ],
        "why": "Interested in — устойчивое сочетание."
      }
    ]
  },
  {
    "id": 9,
    "title": "Adjectives / Adverbs",
    "subtitle": "Какой результат и как я работаю",
    "rule": "Прилагательное описывает предмет: a clear explanation. Наречие — действие: explain clearly. После be/look/feel часто прилагательное: I feel tired. Good → well; fast → fast.",
    "example": "She speaks clearly. Her explanation is clear.",
    "tip": "Не каждое наречие заканчивается на -ly. Hard = усердно; hardly = едва.",
    "questions": [
      {
        "id": "9-0",
        "prompt": "She explains things ___.",
        "answer": "clearly",
        "options": [
          "clearly",
          "clear",
          "clearness"
        ],
        "why": "Как объясняет? Нужно наречие."
      },
      {
        "id": "9-1",
        "prompt": "The explanation is ___.",
        "answer": "clear",
        "options": [
          "clear",
          "clearly",
          "clearness"
        ],
        "why": "После is описываем качество."
      },
      {
        "id": "9-2",
        "prompt": "He speaks English ___.",
        "answer": "well",
        "options": [
          "well",
          "good",
          "goodly"
        ],
        "why": "Наречие от good — well."
      },
      {
        "id": "9-3",
        "prompt": "I feel ___ today.",
        "answer": "tired",
        "options": [
          "tired",
          "tiredly",
          "tiringly"
        ],
        "why": "После feel — прилагательное."
      }
    ]
  },
  {
    "id": 10,
    "title": "Comparatives / Superlatives",
    "subtitle": "Сравниваем идеи",
    "rule": "Короткие прилагательные: faster / the fastest. Длинные: more useful / the most useful. Good → better → the best. As ... as выражает равенство.",
    "example": "This version is simpler than the old one. It's our best video.",
    "tip": "Не more better. Обычно than после сравнительной, the перед превосходной.",
    "questions": [
      {
        "id": "10-0",
        "prompt": "This task is ___ than that one.",
        "answer": "easier",
        "options": [
          "easier",
          "easiest",
          "more easyer"
        ],
        "why": "Easy → easier."
      },
      {
        "id": "10-1",
        "prompt": "This is ___ useful tool in our studio.",
        "answer": "the most",
        "options": [
          "the most",
          "more",
          "most than"
        ],
        "why": "Превосходная степень: the most useful."
      },
      {
        "id": "10-2",
        "prompt": "My English is ___ than before.",
        "answer": "better",
        "options": [
          "better",
          "more better",
          "best"
        ],
        "why": "Неправильная сравнительная форма: better."
      },
      {
        "id": "10-3",
        "prompt": "This video is as ___ as that one.",
        "answer": "good",
        "options": [
          "good",
          "better",
          "best"
        ],
        "why": "As + базовая форма + as."
      }
    ]
  },
  {
    "id": 11,
    "title": "-ing / -ed adjectives",
    "subtitle": "Что я чувствую и что вызывает чувство",
    "rule": "Interested, bored, excited, tired описывают испытываемое чувство. Interesting, boring, exciting, tiring — то, что его вызывает. Здесь речь о прилагательных, а не обо всех окончаниях -ing/-ed.",
    "example": "The book is interesting. I am interested in it.",
    "tip": "Человек тоже может быть interesting: он вызывает интерес. Правило не равно «человек/вещь».",
    "questions": [
      {
        "id": "11-0",
        "prompt": "The lecture was ___. I wanted to hear more.",
        "answer": "interesting",
        "options": [
          "interesting",
          "interested",
          "interest"
        ],
        "why": "Лекция вызывает интерес."
      },
      {
        "id": "11-1",
        "prompt": "I was ___ after a long day.",
        "answer": "tired",
        "options": [
          "tired",
          "tiring",
          "tire"
        ],
        "why": "Моё состояние — tired."
      },
      {
        "id": "11-2",
        "prompt": "This news is really ___.",
        "answer": "exciting",
        "options": [
          "exciting",
          "excited",
          "excite"
        ],
        "why": "Новость вызывает воодушевление."
      },
      {
        "id": "11-3",
        "prompt": "She felt ___ because the task was repetitive.",
        "answer": "bored",
        "options": [
          "bored",
          "boring",
          "bore"
        ],
        "why": "Она испытывает скуку: bored."
      }
    ]
  },
  {
    "id": 12,
    "title": "Passive voice",
    "subtitle": "Когда важен результат",
    "rule": "Passive: be в нужном времени + V3. Present: is created. Past: was created. Future: will be created. Исполнитель необязателен; при необходимости — by.",
    "example": "The video was created by our studio. Orders are processed online.",
    "tip": "Не теряй be: the site was built, не the site built, если сайт построили.",
    "questions": [
      {
        "id": "12-0",
        "prompt": "The video ___ by our studio yesterday.",
        "answer": "was created",
        "options": [
          "was created",
          "created",
          "is creating"
        ],
        "why": "Прошлое, пассив: was + V3."
      },
      {
        "id": "12-1",
        "prompt": "Orders ___ online every day.",
        "answer": "are processed",
        "options": [
          "are processed",
          "process",
          "is processed"
        ],
        "why": "Множественное число, Present Passive."
      },
      {
        "id": "12-2",
        "prompt": "The website will ___ tomorrow.",
        "answer": "be launched",
        "options": [
          "be launched",
          "launched",
          "be launch"
        ],
        "why": "Will be + V3."
      },
      {
        "id": "12-3",
        "prompt": "This photo was ___ last year.",
        "answer": "taken",
        "options": [
          "taken",
          "took",
          "take"
        ],
        "why": "V3 от take — taken."
      }
    ]
  },
  {
    "id": 13,
    "title": "Conditionals",
    "subtitle": "Если, то…",
    "rule": "Zero: if + Present, Present — закономерность. First: if + Present, will + verb — реальное будущее. Second: if + Past, would + verb — гипотетическое настоящее/будущее. Third: if + had V3, would have V3 — нереальное прошлое.",
    "example": "If I practise, I'll improve. If I had more time, I would read more.",
    "tip": "В First Conditional обычно не ставим will сразу после if.",
    "questions": [
      {
        "id": "13-0",
        "prompt": "If you heat ice, it ___.",
        "answer": "melts",
        "options": [
          "melts",
          "would melt",
          "had melted"
        ],
        "why": "Zero Conditional: общая закономерность."
      },
      {
        "id": "13-1",
        "prompt": "If I practise tomorrow, I ___ more confident.",
        "answer": "will feel",
        "options": [
          "will feel",
          "would feel",
          "felt"
        ],
        "why": "First Conditional: реальное будущее."
      },
      {
        "id": "13-2",
        "prompt": "If I had more time, I ___ more.",
        "answer": "would read",
        "options": [
          "would read",
          "will read",
          "have read"
        ],
        "why": "Second: гипотетическая ситуация."
      },
      {
        "id": "13-3",
        "prompt": "If I had left earlier, I ___ the bus.",
        "answer": "would have caught",
        "options": [
          "would have caught",
          "will catch",
          "would catch"
        ],
        "why": "Third: несостоявшаяся возможность в прошлом."
      }
    ]
  }
];
for (const topic of topics) {
  topic.chapter = chapters[topic.id];
  topic.questions.push(...topic.chapter.drills.map(([prompt,answers,why],i)=>{
    const [answer,...accept]=answers.split('|');
    return {id:topic.id+'-'+(i+4),type:'text',prompt,answer,accept,why};
  }));
}
export const days = [
{title:"Начни с себя",label:"FOUNDATIONS",topics:[0,1],prompt:"Write 4 sentences: who you are, what you usually do, what you are doing today, and one question.",listen:"I am a university student. I usually make videos for my studio. Today I am learning English. My classmates are kind.",question:"What is the speaker doing today?",answer:"Learning English"},
{title:"Расскажи историю",label:"YOUR EVERYDAY LIFE",topics:[2,3],prompt:"Tell us about yesterday in 4 sentences. Include: I was … when … . What did you enjoy?",listen:"Yesterday I was editing a video when my phone rang. A client wanted to discuss a new idea. I knew what to do. We booked a call.",question:"What interrupted the editing?",answer:"A phone call"},
{title:"Замечай свой прогресс",label:"EXPERIENCE",topics:[4,5],prompt:"Describe your experience: two things you have done, one event with a date, and something that happened before it.",listen:"I have tried several ideas. Last month I launched a small project. Before I launched it, I had talked to three customers. I have learned a lot.",question:"Who did the speaker talk to before the launch?",answer:"Three customers"},
{title:"Планы, которые работают",label:"FUTURE YOU",topics:[6,7],prompt:"Write a plan for tomorrow: one arrangement, one intention, one promise, and one piece of advice to yourself.",listen:"I am meeting a customer tomorrow at ten. We are going to discuss a website. I can explain our services. I should prepare three questions.",question:"When is the customer meeting?",answer:"Tomorrow at ten"},
{title:"Объясняй ясно",label:"CLEAR COMMUNICATION",topics:[8,9],prompt:"Write a short invitation to a studio call. Include the day, time, platform, and what you will explain clearly.",listen:"Our meeting is on Friday at two. We will meet online. Please speak slowly and explain your idea clearly. I am interested in your project.",question:"How does the speaker ask the other person to speak?",answer:"Slowly"},
{title:"Выбирай и сравнивай",label:"IDEAS & FEELINGS",topics:[10,11],prompt:"Compare two projects in 4 sentences. Which is more interesting? Which makes you feel excited? Explain why.",listen:"The new video is shorter than the old one. It is also more interesting. I am excited about the result. It is our best version so far.",question:"How does the speaker feel about the result?",answer:"Excited"},
{title:"Собери всё вместе",label:"YOUR NEXT CHAPTER",topics:[12,13],prompt:"Pitch your studio in 6 sentences: what it does, a past result, a future plan, a passive sentence and two different conditionals.",listen:"Our videos are created for small businesses. If a customer shares an idea, we will suggest a format. If we had a bigger team, we would take more orders.",question:"What would a bigger team allow?",answer:"Taking more orders"}
];
export const readings = [
["Create something new","A business can offer a service that already exists. It can also create a new solution. These are different ways to build a company. Before you choose your idea, ask what it will change for your customers.","Что может измениться для клиента твоей студии?","already exists — уже существует; solution — решение; choose — выбирать"],
["Start with a question","Imagine that you want to launch a new service. You believe it will be useful, but belief is not enough. Talk to people. Ask about their last experience. Listen before you explain your idea.","Какой вопрос ты задашь потенциальному клиенту?","believe — верить; enough — достаточно; experience — опыт"],
["Notice the difference","Two studios may use the same tools. Their results can still be different. One studio understands its customers better. Another tells clearer stories. A useful difference does not always come from a new tool.","Чем студии могут отличаться при одинаковых инструментах?","tools — инструменты; still — всё же; clearer — более понятные"],
["Make a small promise","A big plan can be exciting. A small promise can help you act today. Choose one result that you can finish. Tell a teammate when it will be ready. After you finish, decide what comes next.","Какое небольшое обещание ты можешь выполнить?","promise — обещание; teammate — товарищ по команде; ready — готово"],
["Find your first customers","A good product needs a way to reach people. Some customers find a studio through videos. Others hear about it from friends. Try one channel, record the results, and decide what to improve.","Какие два канала привлечения упомянуты?","reach — достигать; through — через; record — записывать"],
["Build with other people","A team needs more than excitement. People need to know who does each task. They also need a way to discuss problems. Clear agreements make it easier to work together when motivation is low.","Что помогает команде, когда мотивация снижается?","agreement — договорённость; task — задача; together — вместе"],
["Choose the next step","You do not need to predict your whole future today. Look at what you have learned this week. Which tasks have become easier? Which still need practice? Choose one next step and give it a realistic deadline.","Что стало проще за неделю, а что требует практики?","predict — предсказывать; whole — весь; deadline — срок"]
];
