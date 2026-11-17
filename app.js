const appState = {
  activeGrade: 'هفتم',
  activeLesson: null,
  language: 'dr',
  progress: {
    completedLessons: 3,
    quizzes: 2,
    overall: 48,
  },
};

const lessonsByGrade = {
  هفتم: [
    {
      id: 'g7-1',
      title: 'اعداد و عملیات پایه',
      focus: 'حساب',
      short: 'آشنایی با اعداد، جمع، تفریق، ضرب و تقسیم.',
      description: 'در این درس شما با اعداد طبیعی، صحیح، ترتیبو عملیات و کاربردهای آن‌ها در محاسبهٔ روزمره آشنا می‌شوید.',
      objectives: [
        'تشخیص اعداد و ترتیب آن‌ها',
        'انجام عملیات جمع و تفریق با دقت',
        'محاسبهٔ ضرب و تقسیم در مسائل ساده',
        'استفاده ��ز قانون ترتیب عملیات',
      ],
      video: 'https://www.youtube.com/results?search_query=math+grade+7+basic+operations',
      examples: ['2 + 7 × 3 = 23', '15 - 5 = 10', '8 × 6 = 48'],
    },
    {
      id: 'g7-2',
      title: 'کسرها و اعشار',
      focus: 'حساب',
      short: 'درک کسرها، تساوی و تبدیل به اعشار.',
      description: 'در این بخش، مفهوم کسر و اعشار بررسی می‌شود و راه‌های جمع، تفریق، ضرب و ساده‌سازی آن‌ها آموزش داده می‌شود.',
      objectives: [
        'شناخت صورت و مخرج',
        'مقایسهٔ کسرها',
        'تبدیل کسر به اعشار و برعکس',
        'کاربرد درصد و نسبت',
      ],
      video: 'https://www.youtube.com/results?search_query=fractions+and+decimals+grade+7',
      examples: ['1/2 = 0.5', '3/4 + 1/4 = 1', '25% = 1/4'],
    },
    {
      id: 'g7-3',
      title: 'هندسه: زاویه و شکل‌ها',
      focus: 'هندسه',
      short: 'آشنایی با انواع زاویه، چند ضلعی و اشکال هندسی.',
      description: 'در این درس، زاویه‌ها، انواع مثلث‌ها، متوازی‌الأضلاع و سطح محاس��ه‌شدهٔ اشکال بررسی می‌شوند.',
      objectives: [
        'تشخیص زاویه‌های راست و تند و باز',
        'شکل‌گیری چند ضلعی‌ها',
        'محاسبهٔ محیط و مساحت ساده',
        'کاربرد هندسه در زندگی روزمره',
      ],
      video: 'https://www.youtube.com/results?search_query=geometry+grade+7+angles+shapes',
      examples: ['مثلث متساوی‌الاضلاع = 3 ضلع برابر', 'مساحت مستطیل = طول × عرض'],
    },
  ],
  هشتم: [
    {
      id: 'g8-1',
      title: 'معادله‌های ساده',
      focus: 'الجبر',
      short: 'حل معادله‌ها با استفاده از متغیرها.',
      description: 'در این درس، مفهوم مجهول و معادله آموخته می‌شود و روش‌های سادهٔ حل آن‌ها آموزش داده می‌شود.',
      objectives: ['تشخیص متغیر', 'جمع و تفریق در معادله', 'ضرب و تقسیم در معادله', 'نقش تعادل در معادله'],
      video: 'https://www.youtube.com/results?search_query=algebra+simple+equations+grade+8',
      examples: ['x + 5 = 12 → x = 7', '3y = 18 → y = 6'],
    },
    {
      id: 'g8-2',
      title: 'توان و ریشه',
      focus: 'اعداد',
      short: 'توان، پایه و ریشهٔ دوم کمی از اعداد.',
      description: 'در این درس، نحوهٔ نمایش اعداد به صورت توان، قوانین ضرب و تقسیم توان‌ها و مفهوم ریشه بررسی می‌شود.',
      objectives: ['توان با پایه و توان', 'قانون ضرب توان‌ها', 'روش ساده‌سازی ریشه', 'حساب عددی ساده'],
      video: 'https://www.youtube.com/results?search_query=powers+and+roots+grade+8',
      examples: ['2^3 = 8', 'sqrt(16)=4'],
    },
    {
      id: 'g8-3',
      title: 'نسبت و تناسب',
      focus: 'حساب',
      short: 'نسبت، تناسب و کاربرد آن در مقیاس‌سازی.',
      description: 'این درس به نسبت و تناسب در زندگی و نقشه‌کشی، آشنایی با مقیاس و محاسبهٔ نسبتی مناسب می‌پردازد.',
      objectives: ['تشخیص نسبت', 'حل تناسب ساده', 'مقیاس و نقشه', 'کاربرد نسبت در مسایل'],
      video: 'https://www.youtube.com/results?search_query=ratio+and+proportion+grade+8',
      examples: ['2:3 = 4:6', 'مقیاس 1:100'],
    },
  ],
  نهم: [
    {
      id: 'g9-1',
      title: 'دستگاه معادله‌ها',
      focus: 'الجبر',
      short: 'حل دستگاه دو معادله‌ای با دو مجهول.',
      description: 'در این درس، راه‌های حذف و جایگذاری برای حل دستگاه معادله‌ها آموزش داده می‌شود.',
      objectives: ['دستگاه معادله‌ها', 'روش جایگذاری', 'روش حذف', 'تفسیر جواب'],
      video: 'https://www.youtube.com/results?search_query=system+of+equations+grade+9',
      examples: ['x+y=7', 'x-y=3'],
    },
    {
      id: 'g9-2',
      title: 'تابع و نمودار',
      focus: 'ریاضی',
      short: 'مفهوم تابع و رسم نمودار تابع خطی.',
      description: 'شاگردان با تابع، ورودی و خروجی و روش رسم نمودار خطی آشنا می‌شوند.',
      objectives: ['مفهوم تابع', 'رسم نمودار', 'نقاط روی محور', 'تفسیر شیب'],
      video: 'https://www.youtube.com/results?search_query=functions+and+graphs+grade+9',
      examples: ['y = 2x + 1', 'شیب = 2'],
    },
    {
      id: 'g9-3',
      title: 'مثلثات مقدماتی',
      focus: 'مثلثات',
      short: 'معرفی نسب��‌های مثلثاتی در مثلث قائم‌الزاویه.',
      description: 'در این درس، نسبت‌های سینوس، کسینوس و تانژانت به صورت ساده و کاربردی آموزش داده می‌شوند.',
      objectives: ['مثلث قائم‌الزاویه', 'sin و cos', 'tan و کاربرد', 'حل مسائل ساده'],
      video: 'https://www.youtube.com/results?search_query=trigonometry+basic+grade+9',
      examples: ['sin 30° = 1/2', 'tan 45° = 1'],
    },
  ],
  دهم: [
    {
      id: 'g10-1',
      title: 'هندسه تحلیلی',
      focus: 'هندسه',
      short: 'مختصات، فاصله و معادلهٔ خط.',
      description: 'مفهوم مختصات و معادلهٔ خط در صفحه بررسی می‌شود و شیب خط و فاصلهٔ دو نقطه آموزش داده می‌شود.',
      objectives: ['مختصات', 'فاصله دو نقطه', 'معادلهٔ خط', 'شیب'],
      video: 'https://www.youtube.com/results?search_query=analytic+geometry+grade+10',
      examples: ['خط y = mx + b', 'فاصله = sqrt((x2-x1)^2 + (y2-y1)^2)'],
    },
    {
      id: 'g10-2',
      title: 'انتخابی: مثلثات',
      focus: 'مثلثات',
      short: 'رابطه‌های مثلثاتی و حل مسائل زاویه‌ای.',
      description: 'در این درس، نسبت‌های مثلثاتی و کاربرد آن‌ها در حل مسئله‌های واقعی و هندسی بررسی می‌شود.',
      objectives: ['sin, cos, tan', 'رابطهٔ هم‌ارزی', 'حل مثلث', 'کاربرد در دایره'],
      video: 'https://www.youtube.com/results?search_query=trigonometry+grade+10+advance',
      examples: ['sin^2 + cos^2 = 1'],
    },
    {
      id: 'g10-3',
      title: 'آمار و احتمال',
      focus: 'آمار',
      short: 'جمع‌آوری داده‌ها و محاسبهٔ احتمال.',
      description: 'شاگردان با میانگین، داده‌های آماری، احتمال رویدادها و آنالیز ساده آشنا می‌شوند.',
      objectives: ['میانگین', 'میانه', 'احتمال', 'نمودار'],
      video: 'https://www.youtube.com/results?search_query=statistics+and+probability+grade+10',
      examples: ['P(E) = favorable / total'],
    },
  ],
  یازدهم: [
    {
      id: 'g11-1',
      title: 'جبر پیشرفته',
      focus: 'الجبر',
      short: 'چندجمله‌ای‌ها، تجزیه و معادله‌های درجه دوم.',
      description: 'در این درس، معادله‌های درجه دوم، عوامل مشترک و تجزیه بررسی می‌شوند.',
      objectives: ['تجزیه', 'فرمول معادلهٔ درجه دوم', 'رابطهٔ ریشه‌ها', 'حل مسائل'],
      video: 'https://www.youtube.com/results?search_query=advanced+algebra+grade+11',
      examples: ['x^2 - 5x + 6 = 0'],
    },
    {
      id: 'g11-2',
      title: 'حد و پیوستگی',
      focus: 'حسابان',
      short: 'مفهوم حد در نزدیک‌شدن به یک مقدار.',
      description: 'در این درس، مفهوم نزدیک‌شدن، رفتار تابع در نزدیکی یک عدد و حد آن بررسی می‌شود.',
      objectives: ['حد چپ و راست', 'حد در بی‌نهایت', 'پیوستگی', 'استفاده در مشتق'],
      video: 'https://www.youtube.com/results?search_query=limits+and+continuity+grade+11',
      examples: ['lim(x→2) (x^2-4)/(x-2) = 4'],
    },
    {
      id: 'g11-3',
      title: 'توابع نمایی و لگاریتمی',
      focus: 'ریاضی',
      short: 'رشد exponential و مدل‌سازی.',
      description: 'این درس به تابع نمایی، لگاریتم و کاربرد آن در رشد و کاهش می‌پردازد.',
      objectives: ['تابع نمایی', 'لگاریتم', 'مدل‌سازی', 'بررسی نمودار'],
      video: 'https://www.youtube.com/results?search_query=exponential+and+logarithmic+functions+grade+11',
      examples: ['y = 2^x', 'log_2 8 = 3'],
    },
  ],
  دوازدهم: [
    {
      id: 'g12-1',
      title: 'مشتق و کاربرد آن',
      focus: 'حسابان',
      short: 'ضریب تغییر و کاربرد در بهینه‌سازی.',
      description: 'در این درس، مفهوم مشتق و کاربرد آن برای تعیین آهنگ تغییر و حل مسائل بهینه‌سازی آموزش داده می‌شود.',
      objectives: ['تعریف مشتق', 'قوانین مشتق��گیری', 'ماکزیمم و مینیمم', 'نرخ رشد'],
      video: 'https://www.youtube.com/results?search_query=derivatives+grade+12',
      examples: ['d/dx (x^2)=2x'],
    },
    {
      id: 'g12-2',
      title: 'انتگرال',
      focus: 'حسابان',
      short: 'مفهوم انتگرال و مساحت زیر نمودار.',
      description: 'این درس، انتگرال نامعین و معین، قانون‌های انتگرال‌گیری و کاربرد آن‌ها در محاسبهٔ سطح را آموزش می‌دهد.',
      objectives: ['انتگرال نامعین', 'انتگرال معین', 'مساحت زیر نمودار', 'کاربرد در فیزیک'],
      video: 'https://www.youtube.com/results?search_query=integrals+grade+12',
      examples: ['∫ x^2 dx = x^3/3 + C'],
    },
    {
      id: 'g12-3',
      title: 'بردارها و ماتریس‌ها',
      focus: 'ریاضی عالی',
      short: 'مفهوم بردار، ماتریس و کاربردهای خطی.',
      description: 'در این درس، مباحث بردارها، ضرب اسکالر، ماتریس‌ها و سیستم‌های خطی بررسی می‌شوند.',
      objectives: ['بردار', 'ضرب نقطه‌ای', 'ماتریس', 'حل سیستم خطی'],
      video: 'https://www.youtube.com/results?search_query=vectors+and+matrices+grade+12',
      examples: ['A = [[1,2],[3,4]]'],
    },
  ],
};

const quizBank = [
  {
    question: 'اگر 3x + 5 = 20 باشد، مقدار x چه است؟',
    options: ['3', '4', '5', '6'],
    answer: '5',
  },
  {
    question: 'مساحت مستطیل با طول 8 و عرض 5 چند است؟',
    options: ['13', '40', '45', '26'],
    answer: '40',
  },
  {
    question: 'در مثلث قائم‌الزاویه، sin 30° برابر است با؟',
    options: ['1', '1/2', '√3/2', '0'],
    answer: '1/2',
  },
  {
    question: 'مقدار 2^3 چند است؟',
    options: ['4', '6', '8', '9'],
    answer: '8',
  },
];

const translations = {
  dr: {
    start: 'شروع یادگیری',
    print: 'چاپ فورم',
    chooseGrade: 'انتخاب صنف',
    lessonList: 'فهرست آموزشی',
    selected: 'درس انتخاب‌شده',
    interactive: 'تمرین تعاملی',
    quiz: 'آزمون کوتاه',
    printForms: 'فورم‌های قابل چاپ',
    dashboard: 'داشبورد شاگرد',
    learningPath: 'مسیر آموزش',
    overview: 'چکیده',
    watchVideo: 'مشاهده ویدیوی درس',
    printForm: 'چاپ فورم',
    details: 'جزئیات',
    lessonProgress: 'پیشرفت درس',
    quizCount: 'آزمون‌های انجام‌شده',
    completedLessons: 'درس‌های تکمیل‌شده',
    overviewText: 'از حساب تا ریاضیات عالی، با تمرین‌ها و فورم‌های چاپی آفلاین.',
  },
  fa: {
    start: 'شروع یادگیری',
    print: 'چاپ فرم',
    chooseGrade: 'انتخاب پایه',
    lessonList: 'فهرست آموزشی',
    selected: 'درس انتخاب‌شده',
    interactive: 'تمرین تعاملی',
    quiz: 'آزمون کوتاه',
    printForms: 'فرم‌های قابل چاپ',
    dashboard: 'داشبورد دانش‌آموز',
    learningPath: 'مسیر آموزش',
    overview: 'چکیده',
    watchVideo: 'مشاهده ویدیوی درس',
    printForm: 'چاپ فرم',
    details: 'جزئیات',
    lessonProgress: 'پیشرفت درس',
    quizCount: 'آزمون‌های انجام‌شده',
    completedLessons: 'درس‌های تکمیل‌شده',
    overviewText: 'از حساب تا ریاضیات عالی، با تمرین‌ها و فرم‌های چاپی آفلاین.',
  },
};

const gradeTabs = document.getElementById('gradeTabs');
const lessonGrid = document.getElementById('lessonGrid');
const lessonDetail = document.getElementById('lessonDetail');
const detailTitle = document.getElementById('detailTitle');
const quizCard = document.getElementById('quizCard');
const printForms = document.getElementById('printForms');
const overallProgress = document.getElementById('overallProgress');
const progressBar = document.getElementById('progressBar');
const quizCount = document.getElementById('quizCount');
const lessonCount = document.getElementById('lessonCount');

function renderGradeTabs() {
  const grades = Object.keys(lessonsByGrade);
  gradeTabs.innerHTML = grades
    .map(
      grade => `
        <button class="grade-tab ${grade === appState.activeGrade ? 'active' : ''}" data-grade="${grade}">
          ${grade}
        </button>
      `
    )
    .join('');

  document.querySelectorAll('.grade-tab').forEach(button => {
    button.addEventListener('click', () => {
      appState.activeGrade = button.dataset.grade;
      appState.activeLesson = lessonsByGrade[appState.activeGrade][0];
      renderEverything();
    });
  });
}

function renderLessons() {
  const items = lessonsByGrade[appState.activeGrade];
  lessonGrid.innerHTML = items
    .map(
      lesson => `
        <article class="lesson-card">
          <span class="small-tag">${lesson.focus}</span>
          <h4>${lesson.title}</h4>
          <p>${lesson.short}</p>
          <div class="meta">
            <span>صنف: ${appState.activeGrade}</span>
            <span>درس ${items.indexOf(lesson) + 1}</span>
          </div>
          <button type="button" data-lesson-id="${lesson.id}">نمایش جزئیات</button>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.lesson-card button').forEach(button => {
    button.addEventListener('click', () => {
      const selected = items.find(item => item.id === button.dataset.lessonId);
      appState.activeLesson = selected;
      renderLessonDetail();
      document.getElementById('lessonDetailSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderLessonDetail() {
  const lesson = appState.activeLesson || lessonsByGrade[appState.activeGrade][0];
  detailTitle.textContent = lesson.title;

  lessonDetail.innerHTML = `
    <div class="lesson-content">
      <h4>${lesson.title}</h4>
      <p>${lesson.description}</p>
      <ul>
        ${lesson.objectives.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <aside class="lesson-aside">
      <h4>فعالیت‌های درس</h4>
      <p>نمونه‌ها:</p>
      <ul>
        ${lesson.examples.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <a href="${lesson.video}" target="_blank" rel="noopener noreferrer">${translations[appState.language].watchVideo}</a>
      <button type="button" class="print-btn" data-print-lesson="${lesson.id}">${translations[appState.language].printForm}</button>
    </aside>
  `;

  document.querySelector('[data-print-lesson]')?.addEventListener('click', () => printLesson(lesson));
}

function renderQuiz() {
  const currentQuestion = quizBank[0];
  quizCard.innerHTML = `
    <h4>${translations[appState.language].quiz}</h4>
    <p>${currentQuestion.question}</p>
    <div class="quiz-options">
      ${currentQuestion.options
        .map(
          option => `
            <button class="option-btn" data-answer="${option}" type="button">${option}</button>
          `
        )
        .join('')}
    </div>
    <button class="quiz-submit" type="button">تأیید جواب</button>
    <div class="quiz-result" id="quizResult"></div>
  `;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
      button.dataset.selected = 'true';
    });
  });

  document.querySelector('.quiz-submit').addEventListener('click', () => {
    const selected = document.querySelector('.option-btn.selected');
    const resultBox = document.getElementById('quizResult');
    if (!selected) {
      resultBox.textContent = 'لطفاً یک جواب را انتخاب کنید.';
      return;
    }

    const chosen = selected.dataset.answer;
    const correct = chosen === currentQuestion.answer;
    resultBox.textContent = correct
      ? '✅ جواب شما درست است.'
      : `❌ جواب درست: ${currentQuestion.answer}`;

    appState.progress.quizzes += 1;
    appState.progress.overall = Math.min(100, Math.max(appState.progress.overall, 60));
    updateDashboard();
  });
}

function renderPrintForms() {
  const forms = [
    {
      title: 'کاربرگهٔ حساب',
      desc: 'تمرین جمع، تفریق، ضرب و تقسیم برای سطح پایه.',
    },
    {
      title: 'کاربرگهٔ الجبر',
      desc: 'معادله‌ها، متغیرها و عبارت‌های ساده.',
    },
    {
      title: 'کاربرگهٔ هندسه',
      desc: 'زاویه‌ها، محیط، مساحت و شکل‌های هندسی.',
    },
    {
      title: 'کاربرگهٔ مثلثات',
      desc: 'نسبت‌های مثلثاتی و راه‌حل ساده.',
    },
  ];

  printForms.innerHTML = forms
    .map(
      form => `
        <div class="print-form">
          <h4>${form.title}</h4>
          <p>${form.desc}</p>
          <button class="print-btn" type="button" data-print-form="${form.title}">${translations[appState.language].printForm}</button>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('[data-print-form]').forEach(button => {
    button.addEventListener('click', () => {
      const title = button.dataset.printForm;
      const content = `
        <h2>${title}</h2>
        <ul>
          <li>1) 12 + 7 = ?</li>
          <li>2) 3x + 2 = 20</li>
          <li>3) محاسبهٔ مساحت مستطیل 6 × 4</li>
          <li>4) sin 30° = ?</li>
        </ul>
      `;
      printHtml(content, title);
    });
  });
}

function updateDashboard() {
  overallProgress.textContent = `${appState.progress.overall}%`;
  progressBar.style.width = `${appState.progress.overall}%`;
  quizCount.textContent = String(appState.progress.quizzes);
  lessonCount.textContent = String(appState.progress.completedLessons);
}

function printLesson(lesson) {
  const html = `
    <h2>${lesson.title}</h2>
    <h3>${lesson.focus}</h3>
    <p>${lesson.description}</p>
    <ul>
      ${lesson.objectives.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p><strong>نمونه:</strong> ${lesson.examples.join(' / ')}</p>
  `;
  printHtml(html, lesson.title);
}

function printHtml(content, title) {
  const w = window.open('', '_blank', 'width=900,height=700');
  w.document.write(`
    <html dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <style>
          body { font-family: Tahoma, sans-serif; padding: 24px; line-height: 1.8; }
          h2 { color: #4c1d95; }
          ul { padding-right: 18px; }
          @media print { body { padding: 12px; } }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 500);
}

function setupLanguageSwitch() {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      appState.language = button.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(item => item.classList.toggle('active', item === button));
      renderEverything();
    });
  });
}

function renderEverything() {
  renderGradeTabs();
  renderLessons();
  if (!appState.activeLesson) {
    appState.activeLesson = lessonsByGrade[appState.activeGrade][0];
  }
  renderLessonDetail();
  renderQuiz();
  renderPrintForms();
  updateDashboard();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

document.getElementById('printWorkshopBtn').addEventListener('click', () => {
  const sample = `
    <h2>کاربرگهٔ آموزشی</h2>
    <ol>
      <li>محاسبهٔ 14 + 8 = ?</li>
      <li>حل معادلهٔ x + 5 = 11</li>
      <li>مساحت مستطیل 9 × 4</li>
      <li>sin 45° = ?</li>
    </ol>
  `;
  printHtml(sample, 'کاربرگهٔ آموزشی');
});

registerServiceWorker();
setupLanguageSwitch();
appState.activeGrade = Object.keys(lessonsByGrade)[0];
appState.activeLesson = lessonsByGrade[appState.activeGrade][0];
renderEverything();

