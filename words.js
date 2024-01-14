const words = [
    {
        en: 'I',
        ru: 'Я',
    },
    {
        en: 'Speak',
        ru: 'Говорить',
    },
    {
        en: 'English',
        ru: 'Английский',
    },
    {
        en: 'Can',
        ru: 'Мочь, уметь',
    },
    {
        en: 'Understand',
        ru: 'Понимать',
    },
    {
        en: 'You',
        ru: 'Ты, тебе',
    },
    {
        en: 'It',
        ru: 'Это',
    },
    {
        en: 'Very',
        ru: 'Очень',
    },
    {
        en: 'Well',
        ru: 'Хорошо',
    },
    {
        en: 'Work',
        ru: 'Работа',
    },
    {
        en: 'Study',
        ru: 'Учиться',
    },
    {
        en: 'And',
        ru: 'И',
    },
    {
        en: 'Learn',
        ru: 'Учиться, изучать',
    },
    {
        en: 'Like',
        ru: 'Нравиться',
    },
    {
        en: 'This',
        ru: 'Этот',
    },
    {
        en: 'Online',
        ru: 'Онлайн',
    },
    {
        en: 'Place',
        ru: 'Место',
    },
    {
        en: 'City',
        ru: 'Город',
    },
    {
        en: 'Live',
        ru: 'Жить',
    },
    {
        en: 'In',
        ru: 'В',
    },
    {
        en: 'Russia',
        ru: 'Россия',
    },
    {
        en: 'New York',
        ru: 'Нью Йорк',
    },
    {
        en: 'Country',
        ru: 'Страна',
    },
    {
        en: 'We',
        ru: 'Мы',
    },
    {
        en: 'They',
        ru: 'Они',
    },
    {
        en: 'Help',
        ru: 'Помогать, помощь',
    },
    {
        en: 'Me',
        ru: 'Меня, мне',
    },
    {
        en: 'Really',
        ru: 'Очень, действительно',
    },
    {
        en: 'Want',
        ru: 'Хотеть',
    },
    {
        en: 'Lesson',
        ru: 'Урок',
    },
    {
        en: 'Video',
        ru: 'Видео',
    },
    {
        en: 'Program',
        ru: 'Программа',
    },
    {
        en: 'See',
        ru: 'Видеть',
    },
    {
        en: 'My',
        ru: 'Мой',
    },
    {
        en: 'Result',
        ru: 'Результат',
    },
    {
        en: 'Russian',
        ru: 'Русский',
    },
    {
        en: 'Know',
        ru: 'Знать',
    },
    {
        en: 'Go',
        ru: 'Идти, ехать',
    },
    {
        en: 'To',
        ru: 'в, к, чтобы',
    },
    {
        en: 'School',
        ru: 'Школа',
    },
    {
        en: 'Often',
        ru: 'Часто',
    },
    {
        en: 'Here',
        ru: 'Здесь, сюда',
    },
    {
        en: 'There',
        ru: 'Там, туда',
    },
    {
        en: 'Language',
        ru: 'Язык',
    },
    {
        en: 'Every',
        ru: 'Каждый',
    },
    {
        en: 'Day',
        ru: 'День',
    },
    {
        en: 'Do',
        ru: 'Делать',
    },
    {
        en: 'Travel',
        ru: 'Путешествовать',
    },
    {
        en: 'Year',
        ru: 'Год',
    },
    {
        en: 'Travelling',
        ru: 'Путешествие',
    },
    {
        en: 'Game',
        ru: 'Игра',
    },
    {
        en: 'Play',
        ru: 'Играть',
    },
    {
        en: 'Football',
        ru: 'Футбол',
    },
    {
        en: 'So',
        ru: 'Так, такой',
    },
    {
        en: 'Also',
        ru: 'Также, тоже',
    },
    {
        en: 'Think',
        ru: 'Думать',
    },
    {
        en: 'About',
        ru: 'О, об',
    },
    {
        en: 'Sometimes',
        ru: 'Иногда',
    },
    {
        en: 'Love',
        ru: 'Любить, любовь',
    },
    {
        en: 'Song',
        ru: 'Песня',
    },
    {
        en: 'Music',
        ru: 'Музыка',
    },
    {
        en: 'Read',
        ru: 'Читать',
    },
    {
        en: 'Book',
        ru: 'Книга',
    },
    {
        en: 'More',
        ru: 'Больше',
    },
    {
        en: 'Practice',
        ru: 'Практика',
    },
    {
        en: 'These',
        ru: 'Эти',
    },
    {
        en: 'Usually',
        ru: 'Обычно',
    },
    {
        en: 'Buy',
        ru: 'Купить',
    },
    {
        en: 'Thing',
        ru: 'Вещь',
    },
    {
        en: 'Absolutely',
        ru: 'Абсолютно, полностью',
    },
    {
        en: 'Agree',
        ru: 'Соглашаться',
    },
    {
        en: 'Better',
        ru: 'Лучше',
    },
    {
        en: 'Cost',
        ru: 'Стоить',
    },
    {
        en: 'Dollar',
        ru: 'Доллар',
    },
    {
        en: 'Euro',
        ru: 'Евро',
    },
    {
        en: 'Far',
        ru: 'Далеко, далекий',
    },
    {
        en: 'Feel',
        ru: 'Чувствовать',
    },
    {
        en: 'Fifty',
        ru: 'Пятьдесят',
    },
    {
        en: 'He',
        ru: 'Он',
    },
    {
        en: 'Less',
        ru: 'Меньше',
    },
    {
        en: 'Make',
        ru: 'Делать',
    },
    {
        en: 'Mistake',
        ru: 'Ошибка',
    },
    {
        en: 'Much',
        ru: 'Много',
    },
    {
        en: 'Near',
        ru: 'Рядом, около',
    },
    {
        en: 'Pound',
        ru: 'Фунт',
    },
    {
        en: 'Problem',
        ru: 'Проблема',
    },
    {
        en: 'She',
        ru: 'Она',
    },
    { 
        en: 'Ten',
        ru: 'Десять',
    },
    {
        en: 'That',
        ru: 'Тот',
    },
    {
        en: 'Ticket',
        ru: 'Билет',
    },
    {
        en: 'Together',
        ru: 'Вместе',
    },
    {
        en: 'Twenty',
        ru: 'Двадцать',
    },
    {
        en: 'With',
        ru: 'С',
    },
    {
        en: 'Call',
        ru: 'Звонить, звонок',
    },
    {
        en: 'Happen',
        ru: 'Случаться, происходить',
    },
    {
        en: 'Hear',
        ru: 'Слышать',
    },
    {
        en: 'How',
        ru: 'Как',
    },
    {
        en: 'Idea',
        ru: 'Идея',
    },
    {
        en: 'Little',
        ru: 'Мало',
    },
    {
        en: 'A lot',
        ru: 'Много',
    },
    {
        en: 'On',
        ru: 'На',
    },
    {
        en: 'People',
        ru: 'Люди',
    },
    {
        en: 'Person',
        ru: 'Человек',
    },
    {
        en: 'Say',
        ru: 'Говорить',
    },
    {
        en: 'Tell',
        ru: 'Сказать, рассказывать',
    },
    {
        en: 'Too',
        ru: 'Также, тоже',
    },
    {
        en: 'Tv',
        ru: 'Телевизор',
    },
    {
        en: 'Us',
        ru: 'Нам, нас',
    },
    {
        en: 'Watch',
        ru: 'Смотреть',
    },
    {
        en: 'Why',
        ru: 'Зачем',
    },
    {
        en: 'Apple',
        ru: 'Яблоко',
    },
    {
        en: 'Boy',
        ru: 'Мальчик',
    },
    {
        en: 'Brother',
        ru: 'Брат',
    },
    {
        en: 'Bus',
        ru: 'Автобус',
    },
    {
        en: 'Car',
        ru: 'Машина',
    },
    {
        en: 'Free',
        ru: 'Бесплатный, свободный',
    },
    {
        en: 'Girl',
        ru: 'Девочка, девушка',
    },
    {
        en: 'Have',
        ru: 'Иметь',
    },
    {
        en: 'Hotel',
        ru: 'Отель',
    },
    {
        en: 'House',
        ru: 'Дом',
    },
    {
        en: 'Job',
        ru: 'Работа',
    },
    {
        en: 'Man',
        ru: 'Мужчина',
    },
    {
        en: 'Money',
        ru: 'Деньги',
    },
    {
        en: 'One',
        ru: 'Один',
    },
    {
        en: 'Orange',
        ru: 'Апельсин',
    },
    {
        en: 'Question',
        ru: 'Вопрос',
    },
    {
        en: 'Sister',
        ru: 'Сестра',
    },
    {
        en: 'Some',
        ru: 'Некоторые, немного',
    },
    {
        en: 'Teacher',
        ru: 'Учитель',
    },
    {
        en: 'Time',
        ru: 'Время',
    },
    {
        en: 'Two',
        ru: 'Два',
    },
    {
        en: 'University',
        ru: 'Университет',
    },
    {
        en: 'Woman',
        ru: 'Женщина',
    },
    {
        en: 'Your',
        ru: 'Твой, ваш',
    },
    {
        en: 'Bank',
        ru: 'Банк',
    },
    {
        en: 'Coffee',
        ru: 'Кофе',
    },
    {
        en: 'Computer',
        ru: 'Компьютер',
    },
    {
        en: 'Different',
        ru: 'Разные',
    },
    {
        en: 'Drink',
        ru: 'Пить',
    },
    {
        en: 'Eat',
        ru: 'Есть',
    },
    {
        en: 'Exercise',
        ru: 'Упражнение',
    },
    {
        en: 'Family',
        ru: 'Семья',
    },
    {
        en: 'Fish',
        ru: 'Рыба',
    },
    {
        en: 'Juice',
        ru: 'Сок',
    },
    {
        en: 'Milk',
        ru: 'Молоко',
    },
    {
        en: 'Motivation',
        ru: 'Мотивация',
    },
    {
        en: 'Progress',
        ru: 'Прогресс',
    },
    {
        en: 'Sport',
        ru: 'Спорт',
    },
    {
        en: 'Student',
        ru: 'Студент',
    },
    {
        en: 'Taxi',
        ru: 'Такси',
    },
    {
        en: 'Tea',
        ru: 'Чай',
    },
    {
        en: 'Water',
        ru: 'Вода',
    },
    {
        en: 'Airport',
        ru: 'Аэропорт',
    },
    {
        en: 'Apartment',
        ru: 'Квартира, апартаменты',
    },
    {
        en: 'Cake',
        ru: 'Торт',
    },
    {
        en: 'Child',
        ru: 'Ребенок',
    },
    {
        en: 'Children',
        ru: 'Дети',
    },
    {
        en: 'Chocolate',
        ru: 'Шоколад',
    },
    {
        en: 'Daughter',
        ru: 'Дочь',
    },
    {
        en: 'Four',
        ru: 'Четыре',
    },
    {
        en: 'German',
        ru: 'Немецкий',
    },
    {
        en: 'Meat',
        ru: 'Мясо',
    },
    {
        en: 'Men',
        ru: 'Мужчины',
    },
    {
        en: 'Seafood',
        ru: 'Морепродукты',
    },
    {
        en: 'Son',
        ru: 'Сын',
    },
    {
        en: 'Spanish',
        ru: 'Испанский',
    },
    {
        en: 'Three',
        ru: 'Три',
    },
    {
        en: 'Women',
        ru: 'Женщины',
    },
    {
        en: 'Boyfriend',
        ru: 'Парень, друг парень',
    },
    {
        en: 'Ice cream',
        ru: 'Мороженое',
    },
    {
        en: 'Foreign',
        ru: 'Иностранный',
    },
    {
        en: 'Girlfriend',
        ru: 'Девушка, подружка девушка',
    },
    {
        en: 'Hospital',
        ru: 'Пицца',
    },
    {
        en: 'Pizza',
        ru: 'Пицца',
    },
    {
        en: 'Swimming',
        ru: 'Плавание',
    },
    {
        en: 'Be',
        ru: 'Быть',
    },
    {
        en: 'Become',
        ru: 'Становиться',
    },
    {
        en: 'Businessman',
        ru: 'Бизнесмен',
    },
    {
        en: 'Correctly',
        ru: 'Правильно',
    },
    {
        en: 'Designer',
        ru: 'Дизайнер',
    },
    {
        en: 'Doctor',
        ru: 'Доктор',
    },
    {
        en: 'Fluently',
        ru: 'Свовбодно, бегло',
    },
    {
        en: 'Happy',
        ru: 'Счастливый',
    },
    {
        en: 'Her',
        ru: 'Ей',
    },
    {
        en: 'Him',
        ru: 'Ему',
    },
    {
        en: 'Manager',
        ru: 'Менеджер',
    },
    {
        en: 'New',
        ru: 'Новый',
    },
    {
        en: 'Now',
        ru: 'Сейчас',
    },
    {
        en: 'Programmer',
        ru: 'Программист',
    },
    {
        en: 'Them',
        ru: 'Их, им',
    },
    {
        en: 'Visit',
        ru: 'Посещать',
    },
    {
        en: 'Without',
        ru: 'Без',
    },
    {
        en: 'Would',
        ru: 'Бы',
    },
    {
        en: 'Abroad',
        ru: 'За границей',
    },
    {
        en: 'China',
        ru: 'Китай',
    },
    {
        en: 'England',
        ru: 'Англия',
    },
    {
        en: 'Father',
        ru: 'Отец',
    },
    {
        en: 'Germany',
        ru: 'Германия',
    },
    {
        en: 'His',
        ru: 'Его',
    },
    {
        en: 'Italy',
        ru: 'Италия',
    },
    {
        en: 'Japan',
        ru: 'Япония',
    },
    {
        en: 'Month',
        ru: 'Месяц',
    },
    {
        en: 'Mother',
        ru: 'Мама',
    },
    {
        en: 'Next',
        ru: 'Следующий',
    },
    {
        en: 'The united states',
        ru: 'Соединенные штаты америки',
    },
    {
        en: 'Their',
        ru: 'Их',
    },
    {
        en: 'Week',
        ru: 'Неделя',
    },
    {
        en: 'Big',
        ru: 'Большой',
    },
    {
        en: 'Business',
        ru: 'Бизнес',
    },
    {
        en: 'Control',
        ru: 'Контроль, контролировать',
    },
    {
        en: 'Course',
        ru: 'Курс',
    },
    {
        en: 'Education',
        ru: 'Образование',
    },
    {
        en: 'Food',
        ru: 'Еда',
    },
    {
        en: 'For',
        ru: 'Для',
    },
    {
        en: 'Future',
        ru: 'Будущее',
    },
    {
        en: 'Not',
        ru: 'Не',
    },
    {
        en: 'Our',
        ru: 'Наш',
    },
    {
        en: 'Pay',
        ru: 'Платить',
    },
    {
        en: 'Politics',
        ru: 'Политика',
    },
    {
        en: 'Situation',
        ru: 'Ситуация',
    },
    {
        en: 'Spend',
        ru: 'Проводить, тратить',
    },
    {
        en: 'Talk',
        ru: 'Говорить, разговор',
    },
    {
        en: 'Tennis',
        ru: 'Теннис',
    },
    {
        en: 'Those',
        ru: 'Те',
    },
    {
        en: 'Any',
        ru: 'Любой, какой-либо',
    },
    {
        en: 'Cat',
        ru: 'Кот',
    },
    {
        en: 'Dog',
        ru: 'Собака',
    },
    {
        en: 'Exam',
        ru: 'Экзамен',
    },
    {
        en: 'Friend',
        ru: 'Друг',
    },
    {
        en: 'Interest',
        ru: 'Интересовать',
    },
    {
        en: 'Interesting',
        ru: 'Интересный',
    },
    {
        en: 'Internet',
        ru: 'Интернет',
    },
    {
        en: 'Maths',
        ru: 'Математика',
    },
    {
        en: 'Motivate',
        ru: 'Мотивировать',
    },
    {
        en: 'Only',
        ru: 'Только',
    },
    {
        en: 'Plan',
        ru: 'План',
    },
    {
        en: 'Sell',
        ru: 'Продавать',
    },
    {
        en: 'Service',
        ru: 'Услуга, сервис',
    },
    {
        en: 'Subject',
        ru: 'Предмет, тема',
    },
    {
        en: 'Teach',
        ru: 'Учить, преподавать',
    },
    {
        en: 'Test',
        ru: 'Тест',
    },
    {
        en: 'Use',
        ru: 'Использовать',
    },
    {
        en: 'Worry',
        ru: 'Волноваться, беспокоиться',
    },
    {
        en: 'Address',
        ru: 'Адрес',
    },
    {
        en: 'Again',
        ru: 'Опять',
    },
    {
        en: 'Another',
        ru: 'Другой',
    },
    {
        en: 'Bad',
        ru: 'Плохой',
    },
    {
        en: 'Because',
        ru: 'Потому что',
    },
    {
        en: 'Communicate',
        ru: 'Общаться',
    },
    {
        en: 'Fast',
        ru: 'Быстро, быстрый',
    },
    {
        en: 'Get',
        ru: 'Получать',
    },
    {
        en: 'Good',
        ru: 'Хороший',
    },
    {
        en: 'Name',
        ru: 'Имя',
    },
    {
        en: 'Need',
        ru: 'Нуждаться',
    },
    {
        en: 'Other',
        ru: 'Другие',
    },
    {
        en: 'Prefer',
        ru: 'Предпочитать',
    },
    {
        en: 'Professionally',
        ru: 'Профессионально',
    },
    {
        en: 'Remember',
        ru: 'Помнить',
    },
    {
        en: 'Slowly',
        ru: 'Медленно',
    },
    {
        en: 'Website',
        ru: 'сайт',
    },
    {
        en: 'Who',
        ru: 'кто, кого',
    },
    {
        en: 'Boring',
        ru: 'Скучный',
    },
    {
        en: 'Chinese',
        ru: 'Китайский',
    },
    {
        en: 'Cinema',
        ru: 'Кино, кинотеатр',
    },
    {
        en: 'Dancing',
        ru: 'Танцы',
    },
    {
        en: 'Find',
        ru: 'Находить',
    },
    {
        en: 'Intensively',
        ru: 'Интенсивно',
    },
    {
        en: 'Many',
        ru: 'Много',
    },
    {
        en: 'Movie',
        ru: 'Фильм',
    },
    {
        en: 'Or',
        ru: 'Или',
    },
    {
        en: 'Park',
        ru: 'Парк',
    },
    {
        en: 'Reading',
        ru: 'Чтение',
    },
    {
        en: 'Real',
        ru: 'Реальный',
    },
    {
        en: 'Show',
        ru: 'Показывать',
    },
    {
        en: 'Singing',
        ru: 'Пение',
    },
    {
        en: 'Support',
        ru: 'Поддержка, поддерживать',
    },
    {
        en: 'Train',
        ru: 'Тренироваться',
    },
    {
        en: 'Weather',
        ru: 'Погода',
    },
    {
        en: 'Write',
        ru: 'Писать',
    },
    {
        en: 'Actor',
        ru: 'Актер',
    },
    {
        en: 'Actress',
        ru: 'Актриса',
    },
    {
        en: 'Change',
        ru: 'Менять',
    },
    {
        en: 'Cheap',
        ru: 'Дешевый',
    },
    {
        en: 'Discuss',
        ru: 'Обсуждать',
    },
    {
        en: 'Expensive',
        ru: 'Дорогой',
    },
    {
        en: 'Five',
        ru: 'Пять',
    },
    {
        en: 'Forty',
        ru: 'Сорок',
    },
    {
        en: 'From',
        ru: 'Из',
    },
    {
        en: 'One hundred',
        ru: 'Сто',
    },
    {
        en: 'Important',
        ru: 'Важный',
    },
    {
        en: 'Listen',
        ru: 'Слушать',
    },
    {
        en: 'Look',
        ru: 'Смотреть',
    },
    {
        en: 'Method',
        ru: 'Метод',
    },
    {
        en: 'Phone',
        ru: 'Телефон',
    },
    {
        en: 'Seem',
        ru: 'Казаться',
    },
    {
        en: 'Seven',
        ru: 'Семь',
    },
    {
        en: 'Strange',
        ru: 'Странный',
    },
    {
        en: 'Than',
        ru: 'Чем',
    },
    {
        en: 'Thirty',
        ru: 'Тридцать',
    },
    {
        en: 'Thousand',
        ru: 'Тысяча',
    },
    {
        en: 'Application',
        ru: 'Приложение',
    },
    {
        en: 'Clothes',
        ru: 'Одежда',
    },
    {
        en: 'Come',
        ru: 'Приходить',
    },
    {
        en: 'Cook',
        ru: 'Готовить',
    },
    {
        en: 'Cooking',
        ru: 'Готовка',
    },
    {
        en: 'Dance',
        ru: 'Танцевать',
    },
    {
        en: 'Early',
        ru: 'Рано',
    },
    {
        en: 'Enough',
        ru: 'Достаточно',
    },
    {
        en: 'Get up',
        ru: 'Вставать',
    },
    {
        en: 'Group',
        ru: 'Группа',
    },
    {
        en: 'Home',
        ru: 'Дом, домой',
    },
    {
        en: 'Late',
        ru: 'Поздно',
    },
    {
        en: 'Order',
        ru: 'Заказ, заказывать',
    },
    {
        en: 'Pet',
        ru: 'Домашнее животное',
    },
    {
        en: 'Profession',
        ru: 'Профессия',
    },
    {
        en: 'Recommend',
        ru: 'Рекомендовать',
    },
    {
        en: 'Shop',
        ru: 'Магазин',
    },
    {
        en: 'Toy',
        ru: 'Игрушка',
    },
    {
        en: 'Wake up',
        ru: 'Просыпаться',
    },
    {
        en: 'All',
        ru: 'Все',
    },
    {
        en: 'Document',
        ru: 'Документ',
    },
    {
        en: 'Download',
        ru: 'Скачать',
    },
    {
        en: 'File',
        ru: 'Файл',
    },
    {
        en: 'Island',
        ru: 'Остров',
    },
    {
        en: 'Leave',
        ru: 'Покидать, уезжать',
    },
    {
        en: 'Level',
        ru: 'Уровень',
    },
    {
        en: 'Regularly',
        ru: 'Регулярно',
    },
    {
        en: 'Sad',
        ru: 'Печальный',
    },
    {
        en: 'Unhappy',
        ru: 'Несчастный',
    },
    {
        en: 'What',
        ru: 'Что, какой',
    },
    {
        en: 'When',
        ru: 'Когда',
    },
    {
        en: 'Where',
        ru: 'Где',
    },
    {
        en: 'Which',
        ru: 'Который',
    },
    {
        en: 'Angry',
        ru: 'Злой',
    },
    {
        en: 'At',
        ru: 'В, на',
    },
    {
        en: 'Best',
        ru: 'Лучший',
    },
    {
        en: 'Busy',
        ru: 'Занятый',
    },
    {
        en: 'Fact',
        ru: 'Факт',
    },
    {
        en: 'Husband',
        ru: 'Муж',
    },
    {
        en: 'Million',
        ru: 'Миллион',
    },
    {
        en: 'Old',
        ru: 'Старый',
    },
    {
        en: 'Right',
        ru: 'Правильный',
    },
    {
        en: 'Room',
        ru: 'Комната',
    },
    {
        en: 'Secretary',
        ru: 'Секретарь',
    },
    {
        en: 'Singer',
        ru: 'Певец',
    },
    {
        en: 'Sixty',
        ru: 'Шестьдесят',
    },
    {
        en: 'Sure',
        ru: 'Уверен',
    },
    {
        en: 'Wife',
        ru: 'Жена',
    },
    {
        en: 'Wonderful',
        ru: 'Прекрасный, замечательный',
    },
    {
        en: 'Young',
        ru: 'Молодой',
    },
    {
        en: 'Alright',
        ru: 'В порядке',
    },
    {
        en: 'American',
        ru: 'Американский, американец',
    },
    {
        en: 'Beautiful',
        ru: 'Красивый',
    },
    {
        en: 'Dangerous',
        ru: 'Опасный',
    },
    {
        en: 'Difficult',
        ru: 'Сложный, трудный',
    },
    {
        en: 'Easy',
        ru: 'Легко, легкий',
    },
    {
        en: 'Effective',
        ru: 'Эффективный',
    },
    {
        en: 'Eight',
        ru: 'Восемь',
    },
    {
        en: 'Eighteen',
        ru: 'Восемнадцать',
    },
    {
        en: 'Fine',
        ru: 'Хорошо, в порядке',
    },
    {
        en: 'Hard-working',
        ru: 'Трудолюбивый',
    },
    {
        en: 'Lazy',
        ru: 'Ленивый',
    },
    {
        en: 'Married',
        ru: 'Женат, замужем',
    },
    {
        en: 'Ok',
        ru: 'Окей, в порядке',
    },
    {
        en: 'Parents',
        ru: 'Родители',
    },
    {
        en: 'Poor',
        ru: 'Бедный',
    },
    {
        en: 'Possible',
        ru: 'Возможный',
    },
    {
        en: 'Ready',
        ru: 'Готов',
    },
    {
        en: 'Rich',
        ru: 'Богатый',
    },
    {
        en: 'Seventy',
        ru: 'Семьдесят',
    },
    {
        en: 'Single',
        ru: 'Холост',
    },
    {
        en: 'Smart',
        ru: 'Умный',
    },
    {
        en: 'Afraid',
        ru: 'Бояться',
    },
    {
        en: 'Answer',
        ru: 'Ответ, отвечать',
    },
    {
        en: 'Correct',
        ru: 'Правильный',
    },
    {
        en: 'Decision',
        ru: 'Решение',
    },
    {
        en: 'Of',
        ru: 'Из',
    },
    {
        en: 'Popular',
        ru: 'Популярный',
    },
    {
        en: 'Assistant',
        ru: 'Помощник',
    },
    {
        en: 'Brazil',
        ru: 'Бразилия',
    },
    {
        en: 'Cheaper',
        ru: 'Дешевле',
    },
    {
        en: 'Choice',
        ru: 'Выбор',
    },
    {
        en: 'Colleague',
        ru: 'Коллега',
    },
    {
        en: 'Director',
        ru: 'Директор',
    },
    {
        en: 'Driver',
        ru: 'Водитель',
    },
    {
        en: 'Kitchen',
        ru: 'Кухня',
    },
    {
        en: 'Native speaker',
        ru: 'Носитель языка',
    },
    {
        en: 'Price',
        ru: 'Цена',
    },
    {
        en: 'Professional',
        ru: 'Профессиональный',
    },
    {
        en: 'Trainer',
        ru: 'Тренер',
    },
    {
        en: 'Worker',
        ru: 'Работник, рабочий',
    },
    {
        en: 'Bag',
        ru: 'Сумка',
    },
    {
        en: 'Box',
        ru: 'Коробка',
    },
    {
        en: 'Dress',
        ru: 'Платье',
    },
    {
        en: 'Jeans',
        ru: 'Джинсы',
    },
    {
        en: 'Pair',
        ru: 'Пара',
    },
    {
        en: 'Trousers',
        ru: 'Брюки',
    },
    {
        en: 'Upset',
        ru: 'Расстроен',
    },
    {
        en: 'Worse',
        ru: 'Хуже',
    },
    {
        en: 'Wrong',
        ru: 'Неправильный',
    },
    {
        en: 'Each',
        ru: 'Каждый',
    },
    {
        en: 'Lie',
        ru: 'Лежать',
    },
    {
        en: 'Moment',
        ru: 'Момент',
    },
    {
        en: 'Necessary',
        ru: 'Необходимо',
    },
    {
        en: 'Photo',
        ru: 'Фото',
    },
    {
        en: 'Relax',
        ru: 'Отдыхать, расслабляться',
    },
    {
        en: 'Simple',
        ru: 'Простой',
    },
    {
        en: 'Smile',
        ru: 'Улыбаться',
    },
    {
        en: 'Sofa',
        ru: 'Диван',
    },
    {
        en: 'Text',
        ru: 'Текст',
    },
    {
        en: 'Tradition',
        ru: 'Традиция',
    },
    {
        en: 'Under',
        ru: 'Под',
    },
    {
        en: 'Writer',
        ru: 'Писатель',
    },
    {
        en: 'America',
        ru: 'Америка',
    },
    {
        en: 'Dancer',
        ru: 'Танцор',
    },
    {
        en: 'Earn',
        ru: 'Зарабатывать',
    },
    {
        en: 'Everything',
        ru: 'Все',
    },
    {
        en: 'Fat',
        ru: 'Толстый',
    },
    {
        en: 'Life',
        ru: 'Жизнь',
    },
    {
        en: 'Reality',
        ru: 'Реальность',
    },
    {
        en: 'The same',
        ru: 'Тот же самый',
    },
    {
        en: 'Tasty',
        ru: 'Вкусный',
    },
    {
        en: 'Team',
        ru: 'Команда',
    },
]

module.exports = words;

// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },