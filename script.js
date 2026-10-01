/* =====================================================
   STEPANYAN IT GROUP
   JAVASCRIPT
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 500);

});



/* =====================================================
   HEADER SCROLL
===================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            document.body.classList.remove("no-scroll");

        });

    });



/* =====================================================
   THEME
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("stepanyan-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    themeToggle.textContent =
        isLight ? "☾" : "☼";


    localStorage.setItem(
        "stepanyan-theme",
        isLight ? "light" : "dark"
    );

});



/* =====================================================
   FAQ
===================================================== */

document
    .querySelectorAll(".faq-question")
    .forEach(button => {

        button.addEventListener("click", () => {

            const item =
                button.closest(".faq-item");

            const answer =
                item.querySelector(".faq-answer");


            const isOpen =
                item.classList.contains("open");


            document
                .querySelectorAll(".faq-item")
                .forEach(other => {

                    other.classList.remove("open");

                    const otherAnswer =
                        other.querySelector(".faq-answer");

                    otherAnswer.style.maxHeight = null;

                });


            if (!isOpen) {

                item.classList.add("open");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });



/* =====================================================
   REVEAL ON SCROLL
===================================================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("currentYear")
    .textContent =
    new Date().getFullYear();



/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const translations = {


    ka: {

        nav_home: "მთავარი",
        nav_services: "სერვისები",
        nav_projects: "პროექტები",
        nav_process: "პროცესი",
        nav_pricing: "ფასები",
        nav_faq: "FAQ",
        nav_contact: "კონტაქტი",
        nav_cta: "დავიწყოთ",


        hero_title_1:
            "ვქმნით ვებსაიტებს,",

        hero_title_2:
            "რომლებიც მუშაობენ.",

        hero_description:
            "STEPANYAN IT GROUP — თანამედროვე ვებ-დეველოპმენტის ბრენდი მცირე ბიზნესებისა და პირადი პროექტებისთვის. სწრაფი, responsive და მრავალენოვანი ვებსაიტები.",

        hero_projects:
            "პროექტების ნახვა",

        hero_contact:
            "დაგვიკავშირდი",

        hero_note:
            "პატარა ვებგვერდები 10 ₾-დან",


        trust_one:
            "Responsive",

        trust_two:
            "ენა",

        trust_three:
            "Ready",

        trust_four:
            "Workflow",


        services_title:
            "ყველაფერი, რაც თანამედროვე ვებსაიტს სჭირდება.",

        services_description:
            "ვქმნით მარტივიდან ფუნქციურ ვებპროექტებამდე — დიზაინი, კოდი, responsive სტრუქტურა და გაშვება.",


        service_1_title:
            "Landing Page",

        service_1_text:
            "თანამედროვე ერთგვერდიანი საიტი პროდუქტის, სერვისის ან პირადი ბრენდისთვის.",


        service_2_title:
            "ბიზნეს ვებსაიტი",

        service_2_text:
            "პროფესიონალური საიტი კომპანიისთვის, მაღაზიისთვის ან მომსახურებისთვის.",


        service_3_title:
            "Online Store",

        service_3_text:
            "პროდუქციის კატალოგი, კალათა, შეკვეთის ფორმა და სხვა ფუნქციები.",


        service_4_title:
            "Multilingual",

        service_4_text:
            "რამდენიმე ენაზე მუშაობა ერთი ვებსაიტის ფარგლებში.",


        service_5_title:
            "Redesign",

        service_5_text:
            "ძველი საიტის ვიზუალური და ფუნქციური განახლება.",


        service_6_title:
            "Deployment",

        service_6_text:
            "GitHub Pages-ზე ან შესაბამის ჰოსტინგზე საიტის გაშვება.",


        project_title:
            "რეალური პროექტი.",

        project_description:
            "ერთ-ერთი ვებპროექტი, რომელიც STEPANYAN IT GROUP-ის მიერ არის შექმნილი.",

        project_text:
            "ონლაინ მაღაზიის ვებპროექტი ახალციხისთვის. საიტს აქვს პროდუქციის ძიება, კატეგორიები, კალათა, შეკვეთის ფუნქცია, რამდენიმე ენა და დამატებითი ფუნქციები.",

        project_button:
            "Live Project",


        process_title:
            "იდეიდან გაშვებამდე.",

        process_description:
            "მარტივი და გასაგები სამუშაო პროცესი.",

        process_1:
            "მოთხოვნა",

        process_2:
            "დიზაინი",

        process_3:
            "დეველოპმენტი",

        process_4:
            "ტესტირება",

        process_5:
            "გაშვება",


        pricing_title:
            "მარტივი და ხელმისაწვდომი ფასები.",

        pricing_description:
            "საბოლოო ფასი დამოკიდებულია პროექტის ფუნქციებსა და მოცულობაზე.",

        popular:
            "STARTER",


        price_1_title:
            "პატარა ვებსაიტი",

        price_1_desc:
            "მარტივი საიტი პირადი პროექტის, სერვისის ან მცირე ბიზნესისთვის.",


        price_2_title:
            "ვებგვერდის მომსახურება",

        price_2_desc:
            "უკვე შექმნილი ვებგვერდის საბაზისო ტექნიკური მხარდაჭერა.",


        price_3_title:
            "Custom Project",

        price_3_desc:
            "ონლაინ მაღაზია, რთული ფუნქციები, ინდივიდუალური დიზაინი და სხვა.",


        choose:
            "შეკვეთა",

        support_button:
            "მომსახურების დაწყება",

        contact_us:
            "დაგვიკავშირდი",


        pricing_note:
            "პირველი 3 თვის შემდეგ ვებგვერდის მომსახურება შეადგენს 10 ₾-ს თვეში.",


        faq_title:
            "ხშირად დასმული კითხვები.",


        faq_1_q:
            "გაქვთ ფიზიკური ოფისი?",

        faq_1_a:
            "STEPANYAN IT GROUP მუშაობს დისტანციურად. პროექტებზე მუშაობა ხდება ონლაინ.",


        faq_2_q:
            "რამდენი ღირს ვებსაიტი?",

        faq_2_a:
            "პატარა ვებსაიტის ფასი იწყება 10 ₾-დან. უფრო რთული პროექტებისთვის ფასი განისაზღვრება ფუნქციების მიხედვით.",


        faq_3_q:
            "რა ღირს ყოველთვიური მომსახურება?",

        faq_3_a:
            "პირველი 3 თვის განმავლობაში მომსახურება ღირს 5 ₾ თვეში. მეოთხე თვიდან — 10 ₾ თვეში.",


        faq_4_q:
            "შეგიძლიათ საიტი რამდენიმე ენაზე გააკეთოთ?",

        faq_4_a:
            "დიახ. პროექტის საჭიროებიდან გამომდინარე შესაძლებელია ქართული, ინგლისური, რუსული და სხვა ენების დამატება.",


        faq_5_q:
            "შეგიძლიათ ჩემი საიტის GitHub Pages-ზე გაშვება?",

        faq_5_a:
            "დიახ. სტატიკური ვებსაიტების შემთხვევაში შესაძლებელია GitHub Pages-ის გამოყენება.",


        faq_6_q:
            "შემიძლია კოდი ჩემთან მქონდეს?",

        faq_6_a:
            "დიახ. პროექტის წყარო შეიძლება გადმოგეცეთ ღია კოდის სახით, რათა შემდგომ თავადაც შეძლოთ მისი შეცვლა.",


        contact_title:
            "გაქვს იდეა? შევქმნათ.",

        contact_description:
            "მომწერე რა ტიპის ვებსაიტი გჭირდება, რა ფუნქციები უნდა ჰქონდეს და დაგიკავშირდები.",

        form_name:
            "სახელი",

        form_service:
            "რა გჭირდება?",

        form_message:
            "შეტყობინება",

        form_button:
            "შეტყობინების გაგზავნა",

        form_note:
            "ფორმა გახსნის თქვენს Email პროგრამას შეტყობინების გასაგზავნად.",


        footer_text:
            "Remote digital studio — თანამედროვე ვებსაიტები მცირე ბიზნესებისა და პირადი პროექტებისთვის.",

        footer_services:
            "სერვისები",

        footer_company:
            "ინფორმაცია"

    },


    en: {

        nav_home: "Home",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_process: "Process",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_cta: "Start Project",


        hero_title_1:
            "We build websites",

        hero_title_2:
            "that work.",

        hero_description:
            "STEPANYAN IT GROUP — a remote web development brand for small businesses and personal projects. Fast, responsive and multilingual websites.",

        hero_projects:
            "View Projects",

        hero_contact:
            "Contact Us",

        hero_note:
            "Small websites from 10 ₾",


        trust_one:
            "Responsive",

        trust_two:
            "Languages",

        trust_three:
            "Ready",

        trust_four:
            "Workflow",


        services_title:
            "Everything a modern website needs.",

        services_description:
            "From simple landing pages to functional web projects — design, code, responsive structure and launch.",


        service_1_title:
            "Landing Page",

        service_1_text:
            "A modern one-page website for a product, service or personal brand.",


        service_2_title:
            "Business Website",

        service_2_text:
            "A professional website for a company, store or service.",


        service_3_title:
            "Online Store",

        service_3_text:
            "Product catalog, cart, order forms and other features.",


        service_4_title:
            "Multilingual",

        service_4_text:
            "Multiple languages within one website.",


        service_5_title:
            "Redesign",

        service_5_text:
            "Visual and functional modernization of an existing website.",


        service_6_title:
            "Deployment",

        service_6_text:
            "Website deployment to GitHub Pages or suitable hosting.",


        project_title:
            "A real project.",

        project_description:
            "One of the web projects created by STEPANYAN IT GROUP.",

        project_text:
            "An online store website for Akhaltsikhe. It includes product search, categories, shopping cart, ordering, multiple languages and additional features.",

        project_button:
            "Live Project",


        process_title:
            "From idea to launch.",

        process_description:
            "A simple and transparent workflow.",

        process_1:
            "Brief",

        process_2:
            "Design",

        process_3:
            "Development",

        process_4:
            "Testing",

        process_5:
            "Launch",


        pricing_title:
            "Simple and accessible pricing.",

        pricing_description:
            "The final price depends on project features and scope.",

        popular:
            "STARTER",


        price_1_title:
            "Small Website",

        price_1_desc:
            "A simple website for a personal project, service or small business.",


        price_2_title:
            "Website Support",

        price_2_desc:
            "Basic technical support for an existing website.",


        price_3_title:
            "Custom Project",

        price_3_desc:
            "Online stores, complex features, custom design and more.",


        choose:
            "Order",

        support_button:
            "Start Support",

        contact_us:
            "Contact Us",


        pricing_note:
            "After the first 3 months, website support costs 10 ₾ per month.",


        faq_title:
            "Frequently asked questions.",


        faq_1_q:
            "Do you have a physical office?",

        faq_1_a:
            "STEPANYAN IT GROUP works remotely. Projects are handled online.",


        faq_2_q:
            "How much does a website cost?",

        faq_2_a:
            "Small websites start from 10 ₾. More complex projects are priced according to their features.",


        faq_3_q:
            "How much is monthly support?",

        faq_3_a:
            "Support costs 5 ₾ per month for the first 3 months. From the fourth month it is 10 ₾ per month.",


        faq_4_q:
            "Can you create multilingual websites?",

        faq_4_a:
            "Yes. Georgian, English, Russian and other languages can be added depending on the project.",


        faq_5_q:
            "Can you deploy my website to GitHub Pages?",

        faq_5_a:
            "Yes. GitHub Pages can be used for suitable static websites.",


        faq_6_q:
            "Can I have the source code?",

        faq_6_a:
            "Yes. The project source code can be provided so you can modify it yourself.",


        contact_title:
            "Have an idea? Let's build it.",

        contact_description:
            "Tell me what kind of website you need and what features you want.",

        form_name:
            "Name",

        form_service:
            "What do you need?",

        form_message:
            "Message",

        form_button:
            "Send Message",

        form_note:
            "The form will open your email application to send the message.",


        footer_text:
            "Remote digital studio — modern websites for small businesses and personal projects.",

        footer_services:
            "Services",

        footer_company:
            "Information"

    },


    ru: {

        nav_home: "Главная",
        nav_services: "Услуги",
        nav_projects: "Проекты",
        nav_process: "Процесс",
        nav_pricing: "Цены",
        nav_faq: "FAQ",
        nav_contact: "Контакты",
        nav_cta: "Начать",


        hero_title_1:
            "Создаём сайты",

        hero_title_2:
            "которые работают.",

        hero_description:
            "STEPANYAN IT GROUP — удалённый бренд веб-разработки для малого бизнеса и личных проектов. Быстрые, адаптивные и многоязычные сайты.",

        hero_projects:
            "Посмотреть проекты",

        hero_contact:
            "Связаться",

        hero_note:
            "Небольшие сайты от 10 ₾",


        trust_one:
            "Responsive",

        trust_two:
            "Языка",

        trust_three:
            "Ready",

        trust_four:
            "Workflow",


        services_title:
            "Всё необходимое для современного сайта.",

        services_description:
            "От простых лендингов до функциональных веб-проектов — дизайн, код, адаптивность и запуск.",


        service_1_title:
            "Landing Page",

        service_1_text:
            "Современный одностраничный сайт для продукта, услуги или личного бренда.",


        service_2_title:
            "Бизнес-сайт",

        service_2_text:
            "Профессиональный сайт для компании, магазина или услуги.",


        service_3_title:
            "Online Store",

        service_3_text:
            "Каталог товаров, корзина, форма заказа и другие функции.",


        service_4_title:
            "Multilingual",

        service_4_text:
            "Несколько языков в рамках одного сайта.",


        service_5_title:
            "Redesign",

        service_5_text:
            "Визуальное и функциональное обновление существующего сайта.",


        service_6_title:
            "Deployment",

        service_6_text:
            "Размещение сайта на GitHub Pages или подходящем хостинге.",


        project_title:
            "Реальный проект.",

        project_description:
            "Один из веб-проектов, созданных STEPANYAN IT GROUP.",

        project_text:
            "Онлайн-магазин для Ахалцихе. Сайт включает поиск товаров, категории, корзину, заказ, несколько языков и дополнительные функции.",

        project_button:
            "Открыть проект",


        process_title:
            "От идеи до запуска.",

        process_description:
            "Простой и понятный рабочий процесс.",

        process_1:
            "Задача",

        process_2:
            "Дизайн",

        process_3:
            "Разработка",

        process_4:
            "Тестирование",

        process_5:
            "Запуск",


        pricing_title:
            "Простые и доступные цены.",

        pricing_description:
            "Итоговая стоимость зависит от функций и объёма проекта.",

        popular:
            "STARTER",


        price_1_title:
            "Небольшой сайт",

        price_1_desc:
            "Простой сайт для личного проекта, услуги или малого бизнеса.",


        price_2_title:
            "Обслуживание сайта",

        price_2_desc:
            "Базовая техническая поддержка уже созданного сайта.",


        price_3_title:
            "Custom Project",

        price_3_desc:
            "Интернет-магазины, сложные функции, индивидуальный дизайн и другое.",


        choose:
            "Заказать",

        support_button:
            "Начать обслуживание",

        contact_us:
            "Связаться",


        pricing_note:
            "После первых 3 месяцев обслуживание сайта стоит 10 ₾ в месяц.",


        faq_title:
            "Часто задаваемые вопросы.",


        faq_1_q:
            "У вас есть физический офис?",

        faq_1_a:
            "STEPANYAN IT GROUP работает удалённо. Работа над проектами проходит онлайн.",


        faq_2_q:
            "Сколько стоит сайт?",

        faq_2_a:
            "Стоимость небольшого сайта начинается от 10 ₾. Более сложные проекты рассчитываются по функциям.",


        faq_3_q:
            "Сколько стоит ежемесячное обслуживание?",

        faq_3_a:
            "Первые 3 месяца обслуживание стоит 5 ₾ в месяц. С четвёртого месяца — 10 ₾ в месяц.",


        faq_4_q:
            "Можете сделать сайт на нескольких языках?",

        faq_4_a:
            "Да. В зависимости от проекта можно добавить грузинский, английский, русский и другие языки.",


        faq_5_q:
            "Можете разместить сайт на GitHub Pages?",

        faq_5_a:
            "Да. GitHub Pages подходит для соответствующих статических сайтов.",


        faq_6_q:
            "Могу ли я получить исходный код?",

        faq_6_a:
            "Да. Исходный код проекта может быть передан вам для дальнейшего редактирования.",


        contact_title:
            "Есть идея? Создадим.",

        contact_description:
            "Напишите, какой сайт вам нужен и какие функции должны быть.",

        form_name:
            "Имя",

        form_service:
            "Что вам нужно?",

        form_message:
            "Сообщение",

        form_button:
            "Отправить сообщение",

        form_note:
            "Форма откроет вашу почтовую программу для отправки сообщения.",


        footer_text:
            "Удалённая digital studio — современные сайты для малого бизнеса и личных проектов.",

        footer_services:
            "Услуги",

        footer_company:
            "Информация"

    }

};



/* =====================================================
   LANGUAGE SWITCH
===================================================== */

const langButtons =
    document.querySelectorAll(".lang-btn");


function changeLanguage(lang) {

    if (!translations[lang]) return;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (translations[lang][key]) {

                element.textContent =
                    translations[lang][key];

            }

        });


    langButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });


    document.documentElement
        .setAttribute("lang", lang);


    localStorage.setItem(
        "stepanyan-language",
        lang
    );

}


langButtons.forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(
            button.dataset.lang
        );

    });

});


const savedLanguage =
    localStorage.getItem(
        "stepanyan-language"
    );


if (savedLanguage) {

    changeLanguage(savedLanguage);

}



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    /*
       IMPORTANT:
       შეცვალე ეს Email შენი რეალური Email-ით.
    */

    const recipient =
        "YOUR_EMAIL@example.com";


    const subject =
        encodeURIComponent(
            "STEPANYAN IT GROUP — New Project Request"
        );


    const body =
        encodeURIComponent(

            `Name: ${name}

Email: ${email}

Service: ${service}

Message:

${message}

--------------------------------
STEPANYAN IT GROUP
`
        );


    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

});



/* =====================================================
   ESCAPE KEY — CLOSE MOBILE MENU
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("open");

        document.body.classList.remove("no-scroll");

    }

});
