document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       STEPANYAN IT GRUP
       MAIN JAVASCRIPT
    ===================================================== */


    /* =====================================================
       PRELOADER
    ===================================================== */

    const preloader =
        document.getElementById("preloader");


    window.addEventListener("load", function () {

        setTimeout(function () {

            if (preloader) {
                preloader.classList.add("hide");
            }

        }, 500);

    });



    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const mobileNavigation =
        document.getElementById(
            "mobileNavigation"
        );


    if (
        mobileMenuButton &&
        mobileNavigation
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileNavigation.classList.toggle(
                        "open"
                    );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        const mobileLinks =
            mobileNavigation.querySelectorAll(
                "a"
            );


        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNavigation.classList.remove(
                        "open"
                    );


                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (mobileNavigation) {

                    mobileNavigation.classList.remove(
                        "open"
                    );

                }

                if (mobileMenuButton) {

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }



    /* =====================================================
       FAQ
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item) {

            const question =
                item.querySelector(
                    ".faq-question"
                );


            if (!question) return;


            question.addEventListener(
                "click",
                function () {


                    const wasActive =
                        item.classList.contains(
                            "active"
                        );


                    faqItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "active"
                            );

                        }
                    );


                    if (!wasActive) {

                        item.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );



    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    const languageButton =
        document.getElementById(
            "languageButton"
        );


    const translations = {


        KA: {

            nav_services: "სერვისები",
            nav_projects: "პროექტები",
            nav_process: "პროცესი",
            nav_pricing: "ფასები",
            nav_contact: "კონტაქტი",
            nav_whatsapp: "WhatsApp-ზე დაკავშირება",

            hero_badge:
                "DIGITAL IT GROUP • ONLINE",

            hero_title_1:
                "იდეა",

            hero_title_2:
                "ციფრულ რეალობად.",

            hero_description:
                "STEPANYAN IT GRUP არის დამწყები ციფრული IT ჯგუფი, რომელიც ქმნის თანამედროვე ვებგვერდებს, ონლაინ მაღაზიებს და მარტივ ციფრულ გადაწყვეტილებებს მცირე ბიზნესებისთვის.",

            hero_button_pricing:
                "პაკეტების ნახვა",

            hero_button_contact:
                "დაგვიკავშირდი",

            stat_one:
                "დან იწყება",

            stat_two:
                "Responsive",

            stat_three:
                "ციფრული სერვისი",


            services_title_1:
                "რას ვაკეთებთ",

            services_title_2:
                "ციფრულად.",

            services_description:
                "ვქმნით ვებპროდუქტებს, რომლებიც პატარა ბიზნესსაც აძლევს შესაძლებლობას ჰქონდეს თანამედროვე ონლაინ სივრცე.",


            service_one_title:
                "ვებგვერდი",

            service_one_text:
                "თანამედროვე ბიზნესის, კომპანიის ან პირადი ბრენდის ვებგვერდი.",

            service_two_title:
                "ონლაინ მაღაზია",

            service_two_text:
                "პროდუქციის კატალოგი, ძიება, კალათა და შეკვეთის ფუნქციები.",

            service_three_title:
                "Landing Page",

            service_three_text:
                "ერთი ძლიერი გვერდი პროდუქტის, მომსახურების ან ახალი ბიზნესის წარმოსაჩენად.",

            service_four_title:
                "UI / Design",

            service_four_text:
                "ფერები, სტრუქტურა, ღილაკები და მომხმარებლის თანამედროვე გამოცდილება.",


            beginner_title:
                "ვიწყებთ პატარა ნაბიჯით. ვაშენებთ დიდ იდეებს.",

            beginner_text:
                "STEPANYAN IT GRUP არის დამწყები ციფრული IT ჯგუფი. ჩვენ ჯერ ვვითარდებით, ვსწავლობთ და ვქმნით საკუთარ გამოცდილებას რეალურ პროექტებზე. ამიტომ ჩვენი ფასები ხელმისაწვდომია, ხოლო თითოეულ პროექტს ყურადღებით და ინდივიდუალურად ვუდგებით.",


            project_title_1:
                "ჩვენი პროექტი.",

            project_title_2:
                "რეალური ნამუშევარი.",

            project_text:
                "ონლაინ მაღაზიის პროექტი, რომელიც შექმნილია პროდუქციის ონლაინ წარმოსაჩენად და მომხმარებლისთვის მარტივი შეკვეთის პროცესის შესაქმნელად.",

            project_button:
                "პროექტის ნახვა ↗",


            process_title_1:
                "იდეიდან",

            process_title_2:
                "ვებგვერდამდე.",

            process_one_title:
                "იდეა",

            process_one_text:
                "ვიგებთ რა გჭირდება და რა მიზანი აქვს შენს ვებგვერდს.",

            process_two_title:
                "დიზაინი",

            process_two_text:
                "ვქმნით ვიზუალურ სტრუქტურას და თანამედროვე მომხმარებლის ინტერფეისს.",

            process_three_title:
                "განვითარება",

            process_three_text:
                "დიზაინს ვაქცევთ რეალურ, ფუნქციონალურ ვებგვერდად.",

            process_four_title:
                "გაშვება",

            process_four_text:
                "ვამოწმებთ ვებგვერდს და ვამზადებთ ონლაინ გამოსაქვეყნებლად.",


            pricing_title_1:
                "აირჩიე",

            pricing_title_2:
                "შენი პაკეტი.",

            pricing_description:
                "ხელმისაწვდომი საწყისი პაკეტები და ინდივიდუალური შეთავაზებები უფრო დიდი პროექტებისთვის.",


            starter_description:
                "მარტივი და თანამედროვე ვებგვერდი მცირე ბიზნესისთვის.",

            starter_one:
                "✓ თანამედროვე დიზაინი",

            starter_two:
                "✓ Mobile Responsive",

            starter_three:
                "✓ საკონტაქტო ინფორმაცია",

            starter_four:
                "✓ WhatsApp კავშირი",

            starter_five:
                "✓ ძირითადი SEO სტრუქტურა",


            business_description:
                "უფრო სრულყოფილი ვებგვერდი ბიზნესისთვის.",

            business_one:
                "✓ ყველაფერი Starter-იდან",

            business_two:
                "✓ რამდენიმე გვერდი",

            business_three:
                "✓ სერვისები / პროდუქტები",

            business_four:
                "✓ თანამედროვე ანიმაციები",

            business_five:
                "✓ დამატებითი ფუნქციები",

            business_six:
                "✓ WhatsApp ინტეგრაცია",


            store_description:
                "ონლაინ მაღაზიისთვის საჭირო ძირითადი ფუნქციონალი.",

            store_one:
                "✓ პროდუქციის კატალოგი",

            store_two:
                "✓ კატეგორიები",

            store_three:
                "✓ პროდუქტის ძიება",

            store_four:
                "✓ კალათა",

            store_five:
                "✓ შეკვეთის სისტემა",

            store_six:
                "✓ WhatsApp შეკვეთა",


            order_button:
                "შეკვეთა →",

            consultation_button:
                "კონსულტაცია →",


            support_title:
                "ტექნიკური მხარდაჭერა",

            support_text:
                "ვებგვერდის მცირე ცვლილებები, ტექნიკური დახმარება, სტატუსის კონტროლი და კონსულტაცია.",

            support_first:
                "პირველი 3 თვე",

            support_after:
                "მე-4 თვიდან",


            why_title_1:
                "პატარა ჯგუფი.",

            why_title_2:
                "დიდი ყურადღება.",

            why_one:
                "ვებგვერდი უნდა გამოიყურებოდეს კარგად ტელეფონზე, ტაბლეტსა და კომპიუტერზე.",

            why_two:
                "თანამედროვე ვიზუალური სტრუქტურა, სუფთა დიზაინი და მარტივი ნავიგაცია.",

            why_three:
                "მომხმარებელს შეუძლია პირდაპირ WhatsApp-ზე დაგვიკავშირდეს.",

            why_four:
                "ჩვენ დამწყები ჯგუფი ვართ და გამოცდილებას რეალურ პროექტებზე ვაგროვებთ.",


            faq_title_1:
                "ხშირად",

            faq_title_2:
                "დასმული კითხვები.",

            faq_one_q:
                "ნამდვილად 10 ₾ ღირს ვებგვერდი?",

            faq_one_a:
                "Starter პაკეტის საწყისი ფასი არის 10 ₾. საბოლოო ფასი შეიძლება შეიცვალოს, თუ პროექტს დამატებითი ფუნქციები ან დიდი მოცულობა აქვს.",

            faq_two_q:
                "რამდენ ხანში მზადდება?",

            faq_two_a:
                "ვადები დამოკიდებულია პროექტის მოცულობასა და საჭირო ფუნქციებზე. მარტივი გვერდი უფრო სწრაფად მზადდება, დიდი პროექტი კი მეტ დროს მოითხოვს.",

            faq_three_q:
                "მობილურზე იმუშავებს?",

            faq_three_a:
                "დიახ. ვებგვერდის დიზაინი გათვლილია ტელეფონზე, ტაბლეტსა და კომპიუტერზე.",

            faq_four_q:
                "როგორ დაგიკავშირდეთ?",

            faq_four_a:
                "ყველაზე მარტივი გზაა WhatsApp. დააჭირე WhatsApp-ის ღილაკს და პირდაპირ მოგვწერე.",


            cta_title_1:
                "გაქვს იდეა?",

            cta_title_2:
                "დავიწყოთ.",

            cta_text:
                "მოგვწერე WhatsApp-ზე და მოგვიყევი, როგორი ვებგვერდი ან ონლაინ პროექტი გჭირდება.",

            cta_button:
                "მოგვწერე WhatsApp-ზე",


            footer_description:
                "დამწყები ციფრული IT ჯგუფი, რომელიც ქმნის თანამედროვე ვებპროდუქტებს."

        },


        EN: {

            nav_services: "Services",
            nav_projects: "Projects",
            nav_process: "Process",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            nav_whatsapp: "Contact on WhatsApp",

            hero_badge:
                "DIGITAL IT GROUP • ONLINE",

            hero_title_1:
                "Your idea",

            hero_title_2:
                "into digital reality.",

            hero_description:
                "STEPANYAN IT GRUP is a beginner digital IT group creating modern websites, online stores and simple digital solutions for small businesses.",

            hero_button_pricing:
                "View packages",

            hero_button_contact:
                "Contact us",

            stat_one:
                "starting from",

            stat_two:
                "Responsive",

            stat_three:
                "Digital service",


            services_title_1:
                "What we build",

            services_title_2:
                "digitally.",

            services_description:
                "We create practical web products that give small businesses a modern online presence.",

            service_one_title:
                "Websites",

            service_one_text:
                "Modern websites for businesses, companies and personal brands.",

            service_two_title:
                "Online Stores",

            service_two_text:
                "Product catalogs, search, cart and ordering functionality.",

            service_three_title:
                "Landing Pages",

            service_three_text:
                "Focused pages for products, services and new businesses.",

            service_four_title:
                "UI / Design",

            service_four_text:
                "Modern structure, visual design and simple user experience.",


            beginner_title:
                "Small steps. Big ideas.",

            beginner_text:
                "STEPANYAN IT GRUP is a beginner digital IT group. We are developing our skills and building experience through real projects. That is why our prices are accessible and every project receives individual attention.",


            project_title_1:
                "Our project.",

            project_title_2:
                "Real work.",

            project_text:
                "An online store project created to present products online and provide customers with a simple ordering experience.",

            project_button:
                "View project ↗",


            process_title_1:
                "From idea",

            process_title_2:
                "to website.",

            process_one_title:
                "Idea",

            process_one_text:
                "We understand what you need and what your website should achieve.",

            process_two_title:
                "Design",

            process_two_text:
                "We create the visual structure and user interface.",

            process_three_title:
                "Development",

            process_three_text:
                "We turn the design into a functional website.",

            process_four_title:
                "Launch",

            process_four_text:
                "We test the website and prepare it for online launch.",


            pricing_title_1:
                "Choose",

            pricing_title_2:
                "your package.",

            pricing_description:
                "Affordable starter packages and custom offers for larger projects.",


            starter_description:
                "A simple and modern website for a small business.",

            starter_one:
                "✓ Modern design",

            starter_two:
                "✓ Mobile responsive",

            starter_three:
                "✓ Contact information",

            starter_four:
                "✓ WhatsApp connection",

            starter_five:
                "✓ Basic SEO structure",


            business_description:
                "A more complete website for a business.",

            business_one:
                "✓ Everything in Starter",

            business_two:
                "✓ Multiple pages",

            business_three:
                "✓ Services / products",

            business_four:
                "✓ Modern animations",

            business_five:
                "✓ Additional features",

            business_six:
                "✓ WhatsApp integration",


            store_description:
                "Core functionality for an online store.",

            store_one:
                "✓ Product catalog",

            store_two:
                "✓ Categories",

            store_three:
                "✓ Product search",

            store_four:
                "✓ Shopping cart",

            store_five:
                "✓ Ordering system",

            store_six:
                "✓ WhatsApp orders",


            order_button:
                "Order →",

            consultation_button:
                "Consultation →",


            support_title:
                "Technical support",

            support_text:
                "Small website changes, technical assistance, status checks and consultation.",

            support_first:
                "First 3 months",

            support_after:
                "From month 4",


            why_title_1:
                "Small group.",

            why_title_2:
                "Big attention.",

            why_one:
                "The website should work beautifully on phones, tablets and computers.",

            why_two:
                "Modern visual structure, clean design and simple navigation.",

            why_three:
                "Customers can contact us directly through WhatsApp.",

            why_four:
                "We are a beginner group and we build experience through real projects.",


            faq_title_1:
                "Frequently",

            faq_title_2:
                "asked questions.",

            faq_one_q:
                "Does a website really start at 10 ₾?",

            faq_one_a:
                "The Starter package starts at 10 ₾. The final price may change depending on additional features and project size.",

            faq_two_q:
                "How long does a project take?",

            faq_two_a:
                "Timing depends on the size and features of the project. Simple pages take less time while larger projects require more development.",

            faq_three_q:
                "Will it work on mobile?",

            faq_three_a:
                "Yes. The website is designed for phones, tablets and computers.",

            faq_four_q:
                "How can I contact you?",

            faq_four_a:
                "The easiest way is WhatsApp. Click the WhatsApp button and send us a message.",


            cta_title_1:
                "Have an idea?",

            cta_title_2:
                "Let's build.",

            cta_text:
                "Message us on WhatsApp and tell us what kind of website or online project you need.",

            cta_button:
                "Message on WhatsApp",


            footer_description:
                "A beginner digital IT group creating modern web products."

        },


        RU: {

            nav_services: "Услуги",
            nav_projects: "Проекты",
            nav_process: "Процесс",
            nav_pricing: "Цены",
            nav_contact: "Контакты",
            nav_whatsapp: "Связаться в WhatsApp",

            hero_badge:
                "DIGITAL IT GROUP • ONLINE",

            hero_title_1:
                "Ваша идея",

            hero_title_2:
                "в цифровую реальность.",

            hero_description:
                "STEPANYAN IT GRUP — начинающая цифровая IT-группа, создающая современные сайты, интернет-магазины и простые цифровые решения для малого бизнеса.",

            hero_button_pricing:
                "Посмотреть пакеты",

            hero_button_contact:
                "Связаться",

            stat_one:
                "начиная от",

            stat_two:
                "Responsive",

            stat_three:
                "Цифровой сервис",


            services_title_1:
                "Что мы создаём",

            services_title_2:
                "в цифровом мире.",

            services_description:
                "Мы создаём практичные веб-продукты, которые помогают малому бизнесу получить современное присутствие в интернете.",

            service_one_title:
                "Веб-сайты",

            service_one_text:
                "Современные сайты для бизнеса, компаний и личных брендов.",

            service_two_title:
                "Интернет-магазины",

            service_two_text:
                "Каталог товаров, поиск, корзина и оформление заказов.",

            service_three_title:
                "Landing Page",

            service_three_text:
                "Фокусированные страницы для продуктов, услуг и новых бизнесов.",

            service_four_title:
                "UI / Design",

            service_four_text:
                "Современная структура, визуальный дизайн и удобный интерфейс.",


            beginner_title:
                "Маленькие шаги. Большие идеи.",

            beginner_text:
                "STEPANYAN IT GRUP — начинающая цифровая IT-группа. Мы развиваем навыки и получаем опыт на реальных проектах. Поэтому наши цены доступны, а к каждому проекту мы подходим индивидуально.",


            project_title_1:
                "Наш проект.",

            project_title_2:
                "Реальная работа.",

            project_text:
                "Проект интернет-магазина, созданный для представления товаров онлайн и удобного оформления заказов.",

            project_button:
                "Посмотреть проект ↗",


            process_title_1:
                "От идеи",

            process_title_2:
                "до сайта.",

            process_one_title:
                "Идея",

            process_one_text:
                "Определяем, что вам нужно и какую задачу должен решать сайт.",

            process_two_title:
                "Дизайн",

            process_two_text:
                "Создаём визуальную структуру и современный интерфейс.",

            process_three_title:
                "Разработка",

            process_three_text:
                "Превращаем дизайн в функциональный сайт.",

            process_four_title:
                "Запуск",

            process_four_text:
                "Проверяем сайт и готовим его к публикации.",


            pricing_title_1:
                "Выберите",

            pricing_title_2:
                "свой пакет.",

            pricing_description:
                "Доступные стартовые пакеты и индивидуальные предложения для больших проектов.",


            starter_description:
                "Простой и современный сайт для малого бизнеса.",

            starter_one:
                "✓ Современный дизайн",

            starter_two:
                "✓ Mobile Responsive",

            starter_three:
                "✓ Контактная информация",

            starter_four:
                "✓ WhatsApp",

            starter_five:
                "✓ Базовая SEO-структура",


            business_description:
                "Более полный сайт для бизнеса.",

            business_one:
                "✓ Всё из Starter",

            business_two:
                "✓ Несколько страниц",

            business_three:
                "✓ Услуги / товары",

            business_four:
                "✓ Современные анимации",

            business_five:
                "✓ Дополнительные функции",

            business_six:
                "✓ WhatsApp интеграция",


            store_description:
                "Основные функции для интернет-магазина.",

            store_one:
                "✓ Каталог товаров",

            store_two:
                "✓ Категории",

            store_three:
                "✓ Поиск товаров",

            store_four:
                "✓ Корзина",

            store_five:
                "✓ Система заказов",

            store_six:
                "✓ Заказы через WhatsApp",


            order_button:
                "Заказать →",

            consultation_button:
                "Консультация →",


            support_title:
                "Техническая поддержка",

            support_text:
                "Небольшие изменения, техническая помощь, контроль статуса сайта и консультации.",

            support_first:
                "Первые 3 месяца",

            support_after:
                "С 4-го месяца",


            why_title_1:
                "Небольшая группа.",

            why_title_2:
                "Большое внимание.",

            why_one:
                "Сайт должен хорошо работать на телефоне, планшете и компьютере.",

            why_two:
                "Современная структура, чистый дизайн и простая навигация.",

            why_three:
                "Клиенты могут напрямую связаться с нами через WhatsApp.",

            why_four:
                "Мы начинающая группа и получаем опыт на реальных проектах.",


            faq_title_1:
                "Часто",

            faq_title_2:
                "задаваемые вопросы.",

            faq_one_q:
                "Действительно сайт начинается от 10 ₾?",

            faq_one_a:
                "Стартовая цена пакета Starter — 10 ₾. Итоговая цена зависит от функций и объёма проекта.",

            faq_two_q:
                "Сколько времени занимает создание?",

            faq_two_a:
                "Срок зависит от объёма и функций. Простые страницы создаются быстрее, большие проекты требуют больше времени.",

            faq_three_q:
                "Будет работать на телефоне?",

            faq_three_a:
                "Да. Сайт адаптирован для телефонов, планшетов и компьютеров.",

            faq_four_q:
                "Как с вами связаться?",

            faq_four_a:
                "Проще всего через WhatsApp. Нажмите кнопку WhatsApp и напишите нам.",


            cta_title_1:
                "Есть идея?",

            cta_title_2:
                "Давайте начнём.",

            cta_text:
                "Напишите нам в WhatsApp и расскажите, какой сайт или онлайн-проект вам нужен.",

            cta_button:
                "Написать в WhatsApp",


            footer_description:
                "Начинающая цифровая IT-группа, создающая современные веб-продукты."

        },


        AM: {

            nav_services: "Ծառայություններ",
            nav_projects: "Նախագծեր",
            nav_process: "Գործընթաց",
            nav_pricing: "Գներ",
            nav_contact: "Կապ",
            nav_whatsapp: "Կապ WhatsApp-ով",

            hero_badge:
                "DIGITAL IT GROUP • ONLINE",

            hero_title_1:
                "Քո գաղափարը",

            hero_title_2:
                "թվային իրականության մեջ։",

            hero_description:
                "STEPANYAN IT GRUP-ը սկսնակ թվային IT խումբ է, որը ստեղծում է ժամանակակից կայքեր, առցանց խանութներ և պարզ թվային լուծումներ փոքր բիզնեսների համար։",

            hero_button_pricing:
                "Դիտել փաթեթները",

            hero_button_contact:
                "Կապ հաստատել",

            stat_one:
                "սկսած",

            stat_two:
                "Responsive",

            stat_three:
                "Թվային ծառայություն",


            services_title_1:
                "Ինչ ենք ստեղծում",

            services_title_2:
                "թվային աշխարհում։",

            services_description:
                "Մենք ստեղծում ենք գործնական վեբ արտադրանքներ, որոնք փոքր բիզնեսին տալիս են ժամանակակից առցանց ներկայություն։",

            service_one_title:
                "Վեբկայքեր",

            service_one_text:
                "Ժամանակակից կայքեր բիզնեսների, ընկերությունների և անձնական բրենդների համար։",

            service_two_title:
                "Առցանց խանութներ",

            service_two_text:
                "Ապրանքների կատալոգ, որոնում, զամբյուղ և պատվերի ֆունկցիաներ։",

            service_three_title:
                "Landing Page",

            service_three_text:
                "Ուժեղ էջ ապրանքների, ծառայությունների կամ նոր բիզնեսի համար։",

            service_four_title:
                "UI / Design",

            service_four_text:
                "Ժամանակակից կառուցվածք, դիզայն և պարզ օգտագործման փորձ։",


            beginner_title:
                "Փոքր քայլեր։ Մեծ գաղափարներ։",

            beginner_text:
                "STEPANYAN IT GRUP-ը սկսնակ թվային IT խումբ է։ Մենք զարգացնում ենք մեր հմտությունները և փորձ ենք ձեռք բերում իրական նախագծերի միջոցով։ Այդ պատճառով մեր գները մատչելի են, իսկ յուրաքանչյուր նախագծին մոտենում ենք անհատապես։",


            project_title_1:
                "Մեր նախագիծը։",

            project_title_2:
                "Իրական աշխատանք։",

            project_text:
                "Առցանց խանութի նախագիծ, որը ստեղծվել է ապրանքները առցանց ներկայացնելու և պատվերի պարզ գործընթաց ապահովելու համար։",

            project_button:
                "Դիտել նախագիծը ↗",


            process_title_1:
                "Գաղափարից",

            process_title_2:
                "մինչև կայք։",

            process_one_title:
                "Գաղափար",

            process_one_text:
                "Հասկանում ենք, թե ինչ է պետք և ինչ նպատակ ունի կայքը։",

            process_two_title:
                "Դիզայն",

            process_two_text:
                "Ստեղծում ենք ժամանակակից տեսողական կառուցվածք և ինտերֆեյս։",

            process_three_title:
                "Մշակում",

            process_three_text:
                "Դիզայնը վերածում ենք իրական ֆունկցիոնալ կայքի։",

            process_four_title:
                "Գործարկում",

            process_four_text:
                "Ստուգում ենք կայքը և պատրաստում առցանց հրապարակման համար։",


            pricing_title_1:
                "Ընտրիր",

            pricing_title_2:
                "քո փաթեթը։",

            pricing_description:
                "Մատչելի մեկնարկային փաթեթներ և անհատական առաջարկներ մեծ նախագծերի համար։",


            starter_description:
                "Պարզ և ժամանակակից կայք փոքր բիզնեսի համար։",

            starter_one:
                "✓ Ժամանակակից դիզայն",

            starter_two:
                "✓ Mobile Responsive",

            starter_three:
                "✓ Կոնտակտային տվյալներ",

            starter_four:
                "✓ WhatsApp կապ",

            starter_five:
                "✓ Հիմնական SEO կառուցվածք",


            business_description:
                "Ավելի ամբողջական կայք բիզնեսի համար։",

            business_one:
                "✓ Ամեն ինչ Starter-ից",

            business_two:
                "✓ Մի քանի էջ",

            business_three:
                "✓ Ծառայություններ / ապրանքներ",

            business_four:
                "✓ Ժամանակակից անիմացիաներ",

            business_five:
                "✓ Լրացուցիչ ֆունկցիաներ",

            business_six:
                "✓ WhatsApp ինտեգրում",


            store_description:
                "Հիմնական ֆունկցիաներ առցանց խանութի համար։",

            store_one:
                "✓ Ապրանքների կատալոգ",

            store_two:
                "✓ Կատեգորիաներ",

            store_three:
                "✓ Ապրանքների որոնում",

            store_four:
                "✓ Զամբյուղ",

            store_five:
                "✓ Պատվերի համակարգ",

            store_six:
                "✓ WhatsApp պատվերներ",


            order_button:
                "Պատվիրել →",

            consultation_button:
                "Խորհրդատվություն →",


            support_title:
                "Տեխնիկական աջակցություն",

            support_text:
                "Փոքր փոփոխություններ, տեխնիկական օգնություն, կայքի վիճակի վերահսկում և խորհրդատվություն։",

            support_first:
                "Առաջին 3 ամիս",

            support_after:
                "4-րդ ամսից",


            why_title_1:
                "Փոքր խումբ։",

            why_title_2:
                "Մեծ ուշադրություն։",

            why_one:
                "Կայքը պետք է լավ աշխատի հեռախոսի, պլանշետի և համակարգչի վրա։",

            why_two:
                "Ժամանակակից կառուցվածք, մաքուր դիզայն և պարզ նավիգացիա։",

            why_three:
                "Հաճախորդները կարող են անմիջապես կապվել մեզ հետ WhatsApp-ով։",

            why_four:
                "Մենք սկսնակ խումբ ենք և փորձ ենք ձեռք բերում իրական նախագծերի միջոցով։",


            faq_title_1:
                "Հաճախ",

            faq_title_2:
                "տրվող հարցեր։",

            faq_one_q:
                "Իսկապե՞ս կայքը սկսվում է 10 ₾-ից։",

            faq_one_a:
                "Starter փաթեթի մեկնարկային գինը 10 ₾ է։ Վերջնական գինը կախված է նախագծի ծավալից և ֆունկցիաներից։",

            faq_two_q:
                "Որքա՞ն ժամանակ է պահանջվում։",

            faq_two_a:
                "Ժամկետը կախված է նախագծի ծավալից և ֆունկցիաներից։ Պարզ էջերը պատրաստվում են ավելի արագ։",

            faq_three_q:
                "Կաշխատի՞ հեռախոսի վրա։",

            faq_three_a:
                "Այո։ Կայքը հարմարեցված է հեռախոսների, պլանշետների և համակարգիչների համար։",

            faq_four_q:
                "Ինչպե՞ս կապվել ձեզ հետ։",

            faq_four_a:
                "Ամենահեշտ տարբերակը WhatsApp-ն է։ Սեղմեք WhatsApp կոճակը և գրեք մեզ։",


            cta_title_1:
                "Գաղափար ունե՞ս։",

            cta_title_2:
                "Սկսենք։",

            cta_text:
                "Գրեք մեզ WhatsApp-ով և պատմեք, թե ինչ կայք կամ առցանց նախագիծ է անհրաժեշտ։",

            cta_button:
                "Գրել WhatsApp-ով",


            footer_description:
                "Սկսնակ թվային IT խումբ, որը ստեղծում է ժամանակակից վեբ արտադրանքներ."

        }

    };



    /* =====================================================
       LANGUAGE SWITCHING
    ===================================================== */

    const languageOrder =
        ["KA", "EN", "RU", "AM"];


    let currentLanguage =
        localStorage.getItem(
            "stepanyanLanguage"
        ) || "KA";


    function applyLanguage(language) {

        const dictionary =
            translations[language];


        if (!dictionary) return;


        document.documentElement
            .setAttribute(
                "lang",
                language.toLowerCase()
            );


        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    dictionary[key] !== undefined
                ) {

                    element.textContent =
                        dictionary[key];

                }

            }
        );


        if (languageButton) {

            languageButton.textContent =
                language;

        }


        localStorage.setItem(
            "stepanyanLanguage",
            language
        );

    }


    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                let index =
                    languageOrder.indexOf(
                        currentLanguage
                    );


                index++;


                if (
                    index >=
                    languageOrder.length
                ) {

                    index = 0;

                }


                currentLanguage =
                    languageOrder[index];


                applyLanguage(
                    currentLanguage
                );

            }
        );

    }


    applyLanguage(
        currentLanguage
    );



    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        12;


                    window.scrollTo({

                        top: position,

                        behavior: "smooth"

                    });

                }
            );

        }
    );



    /* =====================================================
       WHATSAPP SAFETY
    ===================================================== */

    const whatsappNumber =
        "995500224822";


    window.stepanyanWhatsApp =
        function (message) {

            const url =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    message
                );


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        };



    /* =====================================================
       FINAL CONSOLE
    ===================================================== */

    console.log(
        "%cSTEPANYAN IT GRUP",
        "font-size:22px;font-weight:900;color:#8b5cf6;"
    );


    console.log(
        "%cDigital IT Group • Web • Design • Development",
        "font-size:12px;color:#22d3ee;"
    );

});
