'use strict'

const questions = {
    html: [
        {
            question: 'HTML5-in hansı elementi sənəd və ya bölməyə başlıq və qeydləri daxil edən sahəni müəyyənləşdirmək üçün istifadə olunur?',
            options: ['<section>', '<header>', '<article>', '<aside>'],
            correctAnswer: 1,
        },
        {
            question: 'Formada elementin doldurulmasının məcburi olduğunu müəyyənləşdirmək üçün hansı HTML5 atributundan istifadə olunur?',
            options: ['tələb olunan', 'məcburi', 'əsas', 'məcburi-sahə'],
            correctAnswer: 0,
        },
        {
            question: 'HTML5-də səs fayllarının brauzerə oxunması üçün hansı element istifadə olunur?',
            options: ['<audio>', '<sound>', '<music>', '<media>'],
            correctAnswer: 0,
        },
        {
            question: 'Hiperlinki təyin etmək üçün HTML5 hansı tag istifadə olunur?',
            options: ['<hyperlink>', '<a>', '<link>', '<ref>'],
            correctAnswer: 1,
        },
        {
            question: 'Formanın göndərilməsindən sonra istifadəçini yönləndirmək üçün hansı HTML5 atributu istifadə olunur?',
            options: ['link', 'action', 'url', 'form-action'],
            correctAnswer: 3,
        },
    ],
    css: [
        {
            question: 'CSS-də z-index nəyə lazımdır?',
            options: ['Rəngləri dəyişmək üçün', 'Elementlərin üst-üstə qatlanmasını nizamlamaq üçün', 'Şəkil böyütmək üçün', 'Elementləri sağa və sola hərəkət etdirmək üçün'],
            correctAnswer: 1, // Doğru cavab - ikinci variant (indeksləmə 0-dan başlayır)
        },
        {
            question: 'CSS-də pseudo-elementlər hansı məqsədlə istifadə olunur?',
            options: ['Elementləri seçmək üçün', 'Əlavə funksiyalar təyin etmək üçün', 'İstifadəçiyə xəbərdarlıq verilməsi üçün', 'Elementin hansı hissəsinə təsir etmək üçün'],
            correctAnswer: 3, // Doğru cavab - dördüncü variant
        },
        {
            question: 'CSS-dən istifadə edərək hər hüceyrəyə istifadəçinin nəyi daxil edəcəyini müəyyənləşdirə bilərik?',
            options: ['Qırmızı və ya yaşıl rəng', 'Səsli fayl', 'Yazı və ya hərf simvolları', 'Şəkil'],
            correctAnswer: 0, // Doğru cavab - birinci variant
        },
        {
            question: 'CSS-də float atributu nəyə lazımdır?',
            options: [
                'Elementləri sıralamaq üçün',
                'Elementləri səhifənin sağına yaxınlaşdırmaq üçün',
                'Elementləri başqa elementlərin arasında sürüşdürmək üçün',
                'Elementləri öz-bözünə yaxınlaşdırmaq üçün',
            ],
            correctAnswer: 2, // Doğru cavab - üçüncü variant
        },
        {
            question: 'CSS-də grid sistemi hansı məqsədlə istifadə olunur?',
            options: ['Formanı düzəltmək üçün', 'Şəkilləri yuxarı-döşəmək üçün', 'Yazı hissəsini bölmək üçün', 'Bölməli veb layihələr yaratmaq üçün'],
            correctAnswer: 3, // Doğru cavab - dördüncü variant
        },
    ],
    js: [
        {
            question: "JavaScript-də 'closure' nədir?",
            options: [
                'Funksiyaların daxilindəki dəyişənləri gizlətmək üçün istifadə olunan texniki',
                'Funksiyalar arasında məlumatın paylaşılması üçün istifadə olunan texniki',
                'Funksiyaların daxilindəki dəyişənləri qlobal dəyişənlər kimi istifadə etmək üçün texniki',
                'Funksiyaların daxilindəki dəyişənləri təyin etmək üçün istifadə olunan texniki',
            ],
            correctAnswer: 0, // Doğru cavab - birinci variant (indeksləmə 0-dan başlayır)
        },
        {
            question: "JavaScript-də 'hoisting' hansı məqsədlə istifadə olunur?",
            options: [
                'Dəyişənləri yuxarıya kaldırmaq üçün',
                'Funksiyaların icra edilməsinin sırasını dəyişdirmək üçün',
                'Funksiyaların daxilindəki dəyişənləri yuxarıya kaldırmaq üçün',
                'Kodu daha oxunaqlı etmək üçün',
            ],
            correctAnswer: 2, // Doğru cavab - üçüncü variant
        },
        {
            question: "JavaScript-də 'prototype' nəyə əsaslanır?",
            options: ['Obyektlər', 'Funksiyalar', 'Dizayn şablonları', 'Modullar'],
            correctAnswer: 1, // Doğru cavab - ikinci variant
        },
        {
            question: "JavaScript-də 'callback' funksiyalar hansı məqsədlə istifadə olunur?",
            options: [
                'Daxil edilmiş funksiyanı geri çağırmak üçün',
                'Asinxron işləmlər üçün məlumatı göndərmək üçün',
                'Eventləri dinləmək üçün',
                'Formaların əməliyyatlarını idarə etmək üçün',
            ],
            correctAnswer: 0, // Doğru cavab - birinci variant
        },
        {
            question: "JavaScript-də 'strict mode' hansı məqsədlə istifadə olunur?",
            options: ['Kodu daha səliqəli etmək üçün', 'Dəyişənləri dəqiq nizamlamaq üçün', 'Xəta mesajlarını göstərmək üçün', 'Əlavə funksiyalar təyin etmək üçün'],
            correctAnswer: 0, // Doğru cavab - birinci variant
        },
    ],
}

const html = document.documentElement
const selectedCategory = document.querySelector('[data-selected-category]')
const optionsElements = document.querySelectorAll('.option')
let questionGenerated = false
let currentQuestion
let answeredQuestionsCount = 0
let correctAnswersCount = 0 // Добавленная переменная для подсчета правильных ответов
let wrongAnswersCount = 0 // Добавленная переменная для подсчета неправильных ответов
const totalQuestionsCount = 5 // Установите общее количество вопросов здесь
const askedQuestions = [] // Массив для отслеживания уже заданных вопросов

const handleSelectCategory = e => {
    const startBtn = document.querySelector('.start-button')
    const selectedCategoryBtn = e.target.closest('.category-btn')

    if (selectedCategoryBtn) {
        selectedCategory.dataset.selectedCategory = selectedCategoryBtn.dataset.category
        html.classList.remove('html', 'css', 'js')
        html.classList.add(selectedCategory.dataset.selectedCategory)
        startBtn.disabled = false
    }
}

const startGame = () => {
    document.querySelector('.start-content').classList.add('hidden')
    html.classList.add('quiz')
}

const renderQuestionAndAnswers = () => {
    const category = selectedCategory.dataset.selectedCategory

    optionsElements.forEach(option => {
        option.classList.remove('correct', 'wrong')
    })

    let availableQuestions = questions[category].filter(question => !askedQuestions.includes(question)) // Получаем список доступных вопросов
    if (availableQuestions.length === 0) {
        // Если все вопросы были уже заданы, очищаем массив и заново заполняем
        askedQuestions.length = 0
        availableQuestions = questions[category]
    }

    const randomQuestionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[randomQuestionIndex]
    askedQuestions.push(currentQuestion) // Добавляем текущий вопрос в массив уже заданных вопросов
    const answersElements = document.querySelectorAll('.option code')
    const quizTitle = document.querySelector('.quiz-text')
    quizTitle.textContent = currentQuestion.question

    currentQuestion.options.forEach((option, index) => {
        answersElements[index].textContent = option
    })

    return currentQuestion
}

const checkAnswer = (selectedOption, question) => {
    const correctAnswerId = question.correctAnswer.toString()

    optionsElements.forEach(option => {
        option.classList.remove('correct', 'wrong')
        if (option.id === correctAnswerId) {
            option.classList.add('correct')
        } else {
            option.classList.add('wrong')
        }
    })

    return selectedOption.id === correctAnswerId
}

const selectOption = e => {
    optionsElements.forEach(option => option.classList.remove('selected'))
    const elem = e.target.closest('.option')
    elem.classList.add('selected')
}

const handleConfirmAnswer = () => {
    const selectedOption = document.querySelector('.option.selected')
    if (selectedOption && !questionGenerated) {
        const isCorrect = checkAnswer(selectedOption, currentQuestion)
        selectedOption.classList.add(isCorrect ? 'correct' : 'wrong')

        questionGenerated = true
        setTimeout(() => {
            questionGenerated = false
            currentQuestion = renderQuestionAndAnswers()
            updateAnswerClasses()
            updateResult(isCorrect)
        }, 1500)
        updateProgressBar()
        answeredQuestionsCount++
    }
}

const updateResult = isCorrect => {
    const resultElement = document.querySelector('.result')
    resultElement.classList.replace('scale-0', 'scale-100')
    if (isCorrect) {
        correctAnswersCount++
    } else {
        wrongAnswersCount++
    }
    resultElement.textContent = `Correct: ${correctAnswersCount}, Wrong: ${wrongAnswersCount}`
}

const updateAnswerClasses = () => {
    optionsElements.forEach(option => {
        option.classList.remove('selected')
    })
}

const updateProgressBar = () => {
    const progressBar = document.querySelector('.progress-bar')
    const answeredQuestionsPercentage = (answeredQuestionsCount / totalQuestionsCount) * 100

    const newWidth = Math.min(answeredQuestionsPercentage + 20, 100)
    progressBar.style.width = newWidth + '%'
}

html.addEventListener('click', e => {
    const target = e.target

    if (target.closest('.category-btn')) {
        handleSelectCategory(e)
    } else if (target.closest('.start-button')) {
        startGame()
        renderQuestionAndAnswers()
    } else if (target.closest('.option')) {
        selectOption(e)
    } else if (target.closest('.confirm-button')) {
        handleConfirmAnswer()
    }
})
