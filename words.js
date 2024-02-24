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
    {
        en: 'Against',
        ru: 'Против',
    },
    {
        en: 'Casual',
        ru: 'Повседневный',
    },
    {
        en: 'Choose',
        ru: 'Выбирать',
    },
    {
        en: 'Formal',
        ru: 'Формальный',
    },
    {
        en: 'Informal',
        ru: 'Неформальный',
    },
    {
        en: 'Journalist',
        ru: 'Журналист',
    },
    {
        en: 'Nowadays',
        ru: 'В наше время',
    },
    {
        en: 'Useful',
        ru: 'Полезный',
    },
    {
        en: 'Walk',
        ru: 'Гулять',
    },
    {
        en: 'Wear',
        ru: 'Носить',
    },
    {
        en: 'Worried',
        ru: 'Взволнованный, обеспокоенный',
    },
    {
        en: 'After',
        ru: 'После',
    },
    {
        en: 'Close',
        ru: 'Закрывать',
    },
    {
        en: 'Could',
        ru: 'Мог, мог бы',
    },
    {
        en: 'Door',
        ru: 'Дверь',
    },
    {
        en: 'Example',
        ru: 'Пример',
    },
    {
        en: 'Floor',
        ru: 'Пол',
    },
    {
        en: 'Give',
        ru: 'Давать',
    },
    {
        en: 'Homework',
        ru: 'Домашнее задание',
    },
    {
        en: 'Later',
        ru: 'Позже',
    },
    {
        en: 'Letter',
        ru: 'Письмо',
    },
    {
        en: 'Open',
        ru: 'Открывать',
    },
    {
        en: 'Put',
        ru: 'Класть',
    },
    {
        en: 'Smoke',
        ru: 'Курить',
    },
    {
        en: 'Stop',
        ru: 'Останавливаться, стоп',
    },
    {
        en: 'Story',
        ru: 'История',
    },
    {
        en: 'Swim',
        ru: 'Плавать',
    },
    {
        en: 'Table',
        ru: 'Стол',
    },
    {
        en: 'Window',
        ru: 'Окно',
    },
    {
        en: 'Afternoon',
        ru: 'Днем',
    },
    {
        en: 'Ask',
        ru: 'Спрашивать, просить',
    },
    {
        en: 'Bike',
        ru: 'Велосипед',
    },
    {
        en: 'Careful',
        ru: 'Осторожный',
    },
    {
        en: 'Check',
        ru: 'Проверять',
    },
    {
        en: 'Continue',
        ru: 'Продолжать',
    },
    {
        en: 'Email',
        ru: 'Электронная почта',
    },
    {
        en: 'Evening',
        ru: 'Вечер',
    },
    {
        en: 'Horse',
        ru: 'Лошадь',
    },
    {
        en: 'Information',
        ru: 'Информация',
    },
    {
        en: 'Lose',
        ru: 'Терять',
    },
    {
        en: 'Meet',
        ru: 'Встречать',
    },
    {
        en: 'Must',
        ru: 'Должен',
    },
    {
        en: "O'clock",
        ru: 'Час',
    },
    {
        en: 'Please',
        ru: 'Пожалуйста',
    },
    {
        en: 'Ride',
        ru: 'Ездить, кататься',
    },
    {
        en: 'Should',
        ru: 'Следует',
    },
    {
        en: 'Something',
        ru: 'Что-то',
    },
    {
        en: 'Stay',
        ru: 'Оставаться',
    },
    {
        en: 'Today',
        ru: 'Сегодня',
    },
    {
        en: 'Try',
        ru: 'Пытаться, стараться',
    },
    {
        en: 'Urgently',
        ru: 'Срочно',
    },
    {
        en: 'Win',
        ru: 'Выиграть',
    },
    {
        en: 'Right now',
        ru: 'Прямо сейчас',
    },
    {
        en: 'Believe',
        ru: 'Верить',
    },
    {
        en: 'Drive',
        ru: 'Водить машину, ехать',
    },
    {
        en: 'Eye',
        ru: 'Глаз',
    },
    {
        en: 'Finish',
        ru: 'Заканчивать',
    },
    {
        en: 'God',
        ru: 'Бог',
    },
    {
        en: 'Last',
        ru: 'Последний',
    },
    {
        en: "Let's",
        ru: 'Давай',
    },
    {
        en: 'Message',
        ru: 'Сообщение',
    },
    {
        en: 'Send',
        ru: 'Отправить',
    },
    {
        en: 'Serious',
        ru: 'Серьезный',
    },
    {
        en: 'Sleep',
        ru: 'Спать',
    },
    {
        en: 'Start',
        ru: 'Начало, начинать',
    },
    {
        en: 'Take',
        ru: 'Брать',
    },
    {
        en: 'Almost',
        ru: 'Почти',
    },
    {
        en: 'Begin',
        ru: 'Начинать',
    },
    {
        en: 'Build',
        ru: 'Строить',
    },
    {
        en: 'Cheaply',
        ru: 'Дешево',
    },
    {
        en: 'Cup',
        ru: 'Чашка',
    },
    {
        en: 'Easily',
        ru: 'Легко',
    },
    {
        en: 'Expensively',
        ru: 'Дорого',
    },
    {
        en: 'Faster',
        ru: 'Быстрее',
    },
    {
        en: 'Glass',
        ru: 'Стакан',
    },
    {
        en: 'Goods',
        ru: 'Товар',
    },
    {
        en: 'Grammar',
        ru: 'Грамматика',
    },
    {
        en: 'Hate',
        ru: 'Ненавидеть',
    },
    {
        en: 'Improve',
        ru: 'Улучшать',
    },
    {
        en: 'Kind',
        ru: 'Добрый',
    },
    {
        en: 'Listening',
        ru: 'Аудирование',
    },
    {
        en: 'Morning',
        ru: 'Утро',
    },
    {
        en: 'Offer',
        ru: 'Предложение',
    },
    {
        en: 'Product',
        ru: 'Продукт',
    },
    {
        en: 'Rarely',
        ru: 'Редко',
    },
    {
        en: 'Rule',
        ru: 'Правило',
    },
    {
        en: 'Run',
        ru: 'Бегать',
    },
    {
        en: 'Slide',
        ru: 'Слайд',
    },
    {
        en: 'Soon',
        ru: 'Скоро',
    },
    {
        en: 'Speaking',
        ru: 'Речь',
    },
    {
        en: 'Stand up',
        ru: 'Встать',
    },
    {
        en: 'Stand',
        ru: 'Стоять',
    },
    {
        en: 'Wait',
        ru: 'Ждать',
    },
    {
        en: 'Advice',
        ru: 'Совет',
    },
    {
        en: 'Back',
        ru: 'Назад',
    },
    {
        en: 'Breakfast',
        ru: 'Завтрак',
    },
    {
        en: 'Bring',
        ru: 'Приносить',
    },
    {
        en: 'Dinner',
        ru: 'Ужин',
    },
    {
        en: 'First',
        ru: 'Первый',
    },
    {
        en: 'Follow',
        ru: 'Следовать',
    },
    {
        en: 'Great',
        ru: 'Большой',
    },
    {
        en: 'Lunch',
        ru: 'Обед',
    },
    {
        en: 'Museum',
        ru: 'Музей',
    },
    {
        en: 'Pleasure',
        ru: 'Удовольствие',
    },
    {
        en: 'Podcast',
        ru: 'Подкаст',
    },
    {
        en: 'Present',
        ru: 'Подарок',
    },
    {
        en: 'Project',
        ru: 'Проект',
    },
    {
        en: 'Recommendation',
        ru: 'Рекомендация',
    },
    {
        en: 'Sandwich',
        ru: 'Бутерброд',
    },
    {
        en: 'Second',
        ru: 'Второй',
    },
    {
        en: 'Theatre',
        ru: 'Театр',
    },
    {
        en: 'Third',
        ru: 'Третий',
    },
    {
        en: 'Tomorrow',
        ru: 'Завтра',
    },
    {
        en: 'Will',
        ru: 'Будет',
    },
    {
        en: 'Immediately',
        ru: 'Немедленно',
    },
    {
        en: 'Mobile phone',
        ru: 'Мобильный телефон',
    },
    {
        en: 'Office',
        ru: 'Офис',
    },
    {
        en: 'Party',
        ru: 'Вечеринка',
    },
    {
        en: 'Pass',
        ru: 'Сдавать',
    },
    {
        en: 'Refuse',
        ru: 'Отказываться',
    },
    {
        en: 'Restaurant',
        ru: 'Ресторан',
    },
    {
        en: 'Sign',
        ru: 'Подписать',
    },
    {
        en: 'Spain',
        ru: 'Испания',
    },
    {
        en: 'Successful',
        ru: 'Успешный',
    },
    {
        en: 'Supermarket',
        ru: 'Супермаркет',
    },
    {
        en: 'Tonight',
        ru: 'Сегодня вечером',
    },
    {
        en: 'Arrive',
        ru: 'Прибывать',
    },
    {
        en: 'Basketball',
        ru: 'Баскетбол',
    },
    {
        en: 'Convenient',
        ru: 'Удобный',
    },
    {
        en: 'Disagree',
        ru: 'Не соглашаться',
    },
    {
        en: 'Funny',
        ru: 'Смешной, забавный',
    },
    {
        en: 'Hard',
        ru: 'Тяжелый, усердно',
    },
    {
        en: 'Harder',
        ru: 'Усерднее',
    },
    {
        en: 'Higher',
        ru: 'Выше',
    },
    {
        en: 'Holiday',
        ru: 'Отпуск',
    },
    {
        en: 'Join',
        ru: 'Присоединиться',
    },
    {
        en: 'Laugh',
        ru: 'Смеяться',
    },
    {
        en: 'Match',
        ru: 'Матч',
    },
    {
        en: 'Ocean',
        ru: 'Океан',
    },
    {
        en: 'Rent',
        ru: 'Арендовать, аренда',
    },
    {
        en: 'Sea',
        ru: 'Море',
    },
    {
        en: 'Shopping',
        ru: 'Ходить по магазинам',
    },
    {
        en: 'Solve',
        ru: 'Решать',
    },
    {
        en: 'Summer',
        ru: 'Лето',
    },
    {
        en: 'Volleyball',
        ru: 'Волейбол',
    },
    {
        en: 'Absent',
        ru: 'Отсутствовать',
    },
    {
        en: 'Beach',
        ru: 'Пляж',
    },
    {
        en: 'Canada',
        ru: 'Канада',
    },
    {
        en: 'Else',
        ru: 'Еще',
    },
    {
        en: 'Gym',
        ru: 'Зал',
    },
    {
        en: 'Graduate',
        ru: 'Окончить',
    },
    {
        en: 'Long',
        ru: 'Длинный',
    },
    {
        en: 'News',
        ru: 'Новости',
    },
    {
        en: 'Surprise',
        ru: 'Удивлять',
    },
    {
        en: 'Whose',
        ru: 'Чей',
    },
    {
        en: 'Preset',
        ru: 'Присутствующий',
    },
    {
        en: 'Last',
        ru: 'Длиться',
    },
    {
        en: 'Invite',
        ru: 'Приглашать',
    },
    {
        en: 'Lend',
        ru: 'Одалживать',
    },
    {
        en: 'Opportunity',
        ru: 'Возможность',
    },
    {
        en: 'Picnic',
        ru: 'Пикник',
    },
    {
        en: 'Prepare',
        ru: 'Подготовить',
    },
    {
        en: 'Return',
        ru: 'Возвращаться',
    },
    {
        en: 'Weekend',
        ru: 'Выходные',
    },
    {
        en: 'Zoo',
        ru: 'Зоопарк',
    },
    {
        en: 'Walk',
        ru: 'Walk',
    },
    {
        en: 'Ago',
        ru: 'Назад',
    },
    {
        en: 'App',
        ru: 'Приложение',
    },
    {
        en: 'Compare',
        ru: 'Сравнивать',
    },
    {
        en: 'Fail',
        ru: 'Провалить',
    },
    {
        en: 'France',
        ru: 'Франция',
    },
    {
        en: 'High',
        ru: 'Высокий, высоко',
    },
    {
        en: 'Jump',
        ru: 'Прыгать',
    },
    {
        en: 'Link',
        ru: 'Ссылка',
    },
    {
        en: 'Move',
        ru: 'Двигаться',
    },
    {
        en: 'Quickly',
        ru: 'Быстро',
    },
    {
        en: 'Save',
        ru: 'Сохранять',
    },
    {
        en: 'Share',
        ru: 'Делиться',
    },
    {
        en: 'Training',
        ru: 'Тренировка',
    },
    {
        en: 'Trip',
        ru: 'Поездка',
    },
    {
        en: 'Yesterday',
        ru: 'Вчера',
    },
    {
        en: 'Correct',
        ru: 'Исправлять',
    },
    {
        en: 'Anything',
        ru: 'Что-либо',
    },
    {
        en: 'Badminton',
        ru: 'Бадминтон',
    },
    {
        en: 'Explain',
        ru: 'Объяснять',
    },
    {
        en: 'Forget',
        ru: 'Забывать',
    },
    {
        en: 'Friday',
        ru: 'Пятница',
    },
    {
        en: 'Lock',
        ru: 'Запирать',
    },
    {
        en: 'Monday',
        ru: 'Понедельник',
    },
    {
        en: 'Night',
        ru: 'Ночь',
    },
    {
        en: 'Past',
        ru: 'Прошлое',
    },
    {
        en: 'Physical',
        ru: 'Физический',
    },
    {
        en: 'Saturday',
        ru: 'Суббота',
    },
    {
        en: 'Sound',
        ru: 'Звук, звучать',
    },
    {
        en: 'Sunday',
        ru: 'Воскресенье',
    },
    {
        en: 'Thursday',
        ru: 'Четверг',
    },
    {
        en: 'Tuesday',
        ru: 'Вторник',
    },
    {
        en: 'Wednesday',
        ru: 'Среда',
    },
    {
        en: 'Word',
        ru: 'Слово',
    },
    {
        en: 'Country house',
        ru: 'Загородный дом',
    },
    {
        en: 'Before',
        ru: 'Перед, до',
    },
    {
        en: 'Beginning',
        ru: 'Начало',
    },
    {
        en: 'Birthday',
        ru: 'День рождения',
    },
    {
        en: 'End',
        ru: 'Конец',
    },
    {
        en: 'Large',
        ru: 'Большой',
    },
    {
        en: 'Marry',
        ru: 'Выйти замуж, жениться',
    },
    {
        en: 'Modern',
        ru: 'Современный',
    },
    {
        en: 'Produce',
        ru: 'Производить',
    },
    {
        en: 'Secret',
        ru: 'Секрет',
    },
    {
        en: 'Social',
        ru: 'Социальный, общественный',
    },
    {
        en: 'Society',
        ru: 'Общество',
    },
    {
        en: 'Surname',
        ru: 'Фамилия',
    },
    {
        en: 'Technology',
        ru: 'Технология',
    },
    {
        en: 'Decide',
        ru: 'Решать',
    },
    {
        en: 'Earlier',
        ru: 'Раньше',
    },
    {
        en: 'Sweater',
        ru: 'Свитер',
    },
    {
        en: 'Winter',
        ru: 'Зима',
    },
    {
        en: 'Final',
        ru: 'Окончательный',
    },
    {
        en: 'Happily',
        ru: 'Счастливо',
    },
    {
        en: 'Include',
        ru: 'Включать',
    },
    {
        en: 'Interview',
        ru: 'Интервью',
    },
    {
        en: 'Left',
        ru: 'Налево',
    },
    {
        en: 'Turn',
        ru: 'Поворачивать',
    },
    {
        en: 'Right',
        ru: 'Направо',
    },
    {
        en: 'Offer',
        ru: 'Предлагать',
    },
    {
        en: 'Hope',
        ru: 'Надеяться',
    },
    {
        en: 'Table tennis',
        ru: 'Настольный теннис',
    },
    {
        en: 'Animal',
        ru: 'Животное',
    },
    {
        en: 'Body',
        ru: 'Тело',
    },
    {
        en: 'Cry',
        ru: 'Плакать',
    },
    {
        en: 'Depend',
        ru: 'Зависеть',
    },
    {
        en: 'Face',
        ru: 'Лицо',
    },
    {
        en: 'Forest',
        ru: 'Лес',
    },
    {
        en: 'Hair',
        ru: 'Волосы',
    },
    {
        en: 'Kill',
        ru: 'Убивать',
    },
    {
        en: 'Kiss',
        ru: 'Поцелуй, целовать',
    },
    {
        en: 'Minute',
        ru: 'Минута',
    },
    {
        en: 'Myself',
        ru: 'Сам',
    },
    {
        en: 'Suddenly',
        ru: 'Вдруг',
    },
    {
        en: 'Wash',
        ru: 'Мыть',
    },
    {
        en: 'Achieve',
        ru: 'Достигать',
    },
    {
        en: 'Aim',
        ru: 'Цель',
    },
    {
        en: 'Always',
        ru: 'Всегда',
    },
    {
        en: 'Celebrate',
        ru: 'Праздновать',
    },
    {
        en: 'Die',
        ru: 'Умирать',
    },
    {
        en: 'Everyone',
        ru: 'Все, каждый',
    },
    {
        en: 'Longer',
        ru: 'Дольше',
    },
    {
        en: 'Discover',
        ru: 'Обнаружить',
    },
    {
        en: 'Armchair',
        ru: 'Кресло',
    },
    {
        en: 'Article',
        ru: 'статья',
    },
    {
        en: 'Beautifully',
        ru: 'Красиво',
    },
    {
        en: 'Break',
        ru: 'Ломать',
    },
    {
        en: 'Camel',
        ru: 'Верблюд',
    },
    {
        en: 'Chair',
        ru: 'Стул',
    },
    {
        en: 'Cut',
        ru: 'Резать',
    },
    {
        en: 'Favourite',
        ru: 'Любимый',
    },
    {
        en: 'Finger',
        ru: 'Палец',
    },
    {
        en: 'Flower',
        ru: 'Цветок',
    },
    {
        en: 'Fly',
        ru: 'Лететь',
    },
    {
        en: 'Himself',
        ru: 'Сам',
    },
    {
        en: 'Keep',
        ru: 'Хранить, держать',
    },
    {
        en: 'Loudly',
        ru: 'Громко',
    },
    {
        en: 'Pen',
        ru: 'Ручка',
    },
    {
        en: 'Perfectly',
        ru: 'Идеально',
    },
    {
        en: 'Promise',
        ru: 'Обещать, обещание',
    },
    {
        en: 'Sing',
        ru: 'Петь',
    },
    {
        en: 'The United Kingdom',
        ru: 'Соединенное королевство',
    },
    {
        en: 'sit down',
        ru: 'Садиться',
    },
    {
        en: 'break down',
        ru: 'Ломаться',
    },
    {
        en: 'Studies',
        ru: 'Учеба',
    },
    {
        en: 'Bridge',
        ru: 'Мост',
    },
    {
        en: 'Championship',
        ru: 'Чемпионат',
    },
    {
        en: 'Competition',
        ru: 'Соревнование',
    },
    {
        en: 'India',
        ru: 'Индия',
    },
    {
        en: 'Key',
        ru: 'Ключ',
    },
    {
        en: 'Lawyer',
        ru: 'Адвокат',
    },
    {
        en: 'Mathematics',
        ru: 'Математика',
    },
    {
        en: 'Mean',
        ru: 'Означать',
    },
    {
        en: 'Phrase',
        ru: 'Фраза',
    },
    {
        en: 'Quietly',
        ru: 'Тихо',
    },
    {
        en: 'Sentence',
        ru: 'Предложение',
    },
    {
        en: 'Sorry',
        ru: 'Извиняться',
    },
    {
        en: 'Wallet',
        ru: 'Бумажник',
    },
    {
        en: 'Banana',
        ru: 'Банан',
    },
    {
        en: 'Beer',
        ru: 'Пиво',
    },
    {
        en: 'Copy',
        ru: 'Копия',
    },
    {
        en: 'Desk',
        ru: 'Письменный стол',
    },
    {
        en: 'Fall',
        ru: 'Падать',
    },
    {
        en: 'Kilo',
        ru: 'Кило',
    },
    {
        en: 'Paper',
        ru: 'Бумага',
    },
    {
        en: 'Potatoes',
        ru: 'Картошка',
    },
    {
        en: 'Then',
        ru: 'Затем',
    },
    {
        en: 'Then',
        ru: 'Затем',
    },
    {
        en: 'Tree',
        ru: 'Дерево',
    },
    {
        en: 'Wine',
        ru: 'Вино',
    },
    {
        en: 'Too',
        ru: 'Слишком',
    },
    {
        en: 'As',
        ru: 'Как',
    },
    {
        en: 'Be away',
        ru: 'Отсутствовать',
    },
    {
        en: 'Famous',
        ru: 'Известный',
    },
    {
        en: 'Gift',
        ru: 'Подарок',
    },
    {
        en: 'Guest',
        ru: 'Гость',
    },
    {
        en: 'Hungry',
        ru: 'Голодный',
    },
    {
        en: 'Ill',
        ru: 'Больной',
    },
    {
        en: 'Normal',
        ru: 'Нормальный',
    },
    {
        en: 'Be out',
        ru: 'Быть не дома',
    },
    {
        en: 'Special',
        ru: 'Особенный, специальный',
    },
    {
        en: 'Terrible',
        ru: 'Ужасный',
    },
    {
        en: 'Tired',
        ru: 'Уставший',
    },
    {
        en: 'Village',
        ru: 'Деревня',
    },
    {
        en: 'Worst',
        ru: 'Худший',
    },
    {
        en: 'Alone',
        ru: 'Одинокий, один',
    },
    {
        en: 'Autumn',
        ru: 'Осень',
    },
    {
        en: 'Garden',
        ru: 'Сад',
    },
    {
        en: 'Healthy',
        ru: 'Здоровый',
    },
    {
        en: 'Ineffective',
        ru: 'Неэффективный',
    },
    {
        en: 'Pocket',
        ru: 'Карман',
    },
    {
        en: 'Spring',
        ru: 'Весна',
    },
    {
        en: 'Bathroom',
        ru: 'Ванная',
    },
    {
        en: 'Century',
        ru: 'Век',
    },
    {
        en: 'Living room',
        ru: 'Гостиная',
    },
    {
        en: 'Optimistic',
        ru: 'Оптимистичный',
    },
    {
        en: 'Pessimistic',
        ru: 'Пессимистичный',
    },
    {
        en: 'Behind',
        ru: 'За',
    },
    {
        en: 'Classroom',
        ru: 'Классная комната',
    },
    {
        en: 'Corner',
        ru: 'Угол',
    },
    {
        en: 'Incorrect',
        ru: 'Неправильный',
    },
    {
        en: 'Unusual',
        ru: 'Необычный',
    },
    {
        en: 'Yard',
        ru: 'Двор',
    },
    {
        en: 'Dentist',
        ru: 'Зубной врач, стоматолог',
    },
    {
        en: 'Engineer',
        ru: 'Инженер',
    },
    {
        en: 'Impossible',
        ru: 'Невозможно',
    },
    {
        en: 'Lonely',
        ru: 'Одинокий',
    },
    {
        en: 'Motivating',
        ru: 'Мотивирующий',
    },
    {
        en: 'At all',
        ru: 'Вовсе, совсем',
    },
    {
        en: 'But',
        ru: 'Но',
    },
    {
        en: 'Contract',
        ru: 'Контракт',
    },
    {
        en: 'Fence',
        ru: 'Забор',
    },
    {
        en: 'Herself',
        ru: 'Сама',
    },
    {
        en: 'Homemade',
        ru: 'Домашний',
    },
    {
        en: 'Hot',
        ru: 'Горячий',
    },
    {
        en: 'Hour',
        ru: 'Час',
    },
    {
        en: 'Meeting',
        ru: 'Встреча',
    },
    {
        en: 'Over',
        ru: 'Через',
    },
    {
        en: 'River',
        ru: 'Река',
    },
    {
        en: 'Rope',
        ru: 'Веревка',
    },
    {
        en: 'Sooner',
        ru: 'Скорее',
    },
    {
        en: 'Street',
        ru: 'Улица',
    },
    {
        en: 'Yourself',
        ru: 'Сам',
    },
    {
        en: 'By',
        ru: 'По, у',
    },
    {
        en: 'Factor',
        ru: 'Фактор',
    },
    {
        en: 'Most',
        ru: 'Большинство',
    },
    {
        en: 'Smoking',
        ru: 'Курение',
    },
    {
        en: 'Topic',
        ru: 'Тема',
    },
    {
        en: 'Artist',
        ru: 'Художник',
    },
    {
        en: 'A bit',
        ru: 'Немного',
    },
    {
        en: 'Company',
        ru: 'Компания',
    },
    {
        en: 'Ground',
        ru: 'Земля',
    },
    {
        en: 'Happiness',
        ru: 'Счастье',
    },
    {
        en: 'Kindness',
        ru: 'Доброта',
    },
    {
        en: 'Parcel',
        ru: 'Посылка',
    },
    {
        en: 'Pie',
        ru: 'Пирог',
    },
    {
        en: 'Process',
        ru: 'Процесс',
    },
    {
        en: 'Accident',
        ru: 'Авария',
    },
    {
        en: 'Alcohol',
        ru: 'Алкоголь',
    },
    {
        en: 'Bill',
        ru: 'Счет',
    },
    {
        en: 'Cafe',
        ru: 'Кафе',
    },
    {
        en: 'Chance',
        ru: 'Шанс',
    },
    {
        en: 'Criminal',
        ru: 'Преступник',
    },
    {
        en: 'Health',
        ru: 'Здоровье',
    },
    {
        en: 'If',
        ru: 'Если',
    },
    {
        en: 'Point',
        ru: 'Точка',
    },
    {
        en: 'Screen',
        ru: 'Экран',
    },
    {
        en: 'View',
        ru: 'Вид, зрение',
    },
    {
        en: 'Bicycle',
        ru: 'Велосипед',
    },
    {
        en: 'Butter',
        ru: 'Масло',
    },
    {
        en: 'Cheese',
        ru: 'Сыр',
    },
    {
        en: 'Desert',
        ru: 'Пустыня',
    },
    {
        en: 'Donkey',
        ru: 'Осел',
    },
    {
        en: 'Egg',
        ru: 'Яйцо',
    },
    {
        en: 'Hand',
        ru: 'Рука',
    },
    {
        en: 'Head',
        ru: 'Голова',
    },
    {
        en: 'Knowledge',
        ru: 'Знания',
    },
    {
        en: 'Material',
        ru: 'Материал',
    },
    {
        en: 'Several',
        ru: 'Несколько',
    },
    {
        en: 'Between',
        ru: 'Между',
    },
    {
        en: 'Blogger',
        ru: 'Блоггер',
    },
    {
        en: 'Cell Phone',
        ru: 'Мобильный телефон',
    },
    {
        en: 'Circus',
        ru: 'Цирк',
    },
    {
        en: 'Delicious',
        ru: 'Вкусный',
    },
    {
        en: 'Dictionary',
        ru: 'Словарь',
    },
    {
        en: 'Fashionable',
        ru: 'Модный',
    },
    {
        en: 'Just',
        ru: 'Просто',
    },
    {
        en: 'Mostly',
        ru: 'В основном',
    },
    {
        en: 'Speech',
        ru: 'Речь',
    },
    {
        en: 'Accent',
        ru: 'Акцент',
    },
    {
        en: 'Appreciate',
        ru: 'Ценить',
    },
    {
        en: 'Area',
        ru: 'Область',
    },
    {
        en: 'Brilliant',
        ru: 'Блестящий',
    },
    {
        en: 'Classical',
        ru: 'Классический',
    },
    {
        en: 'Cycling',
        ru: 'Катание на велосипеде',
    },
    {
        en: 'Department',
        ru: 'Отдел',
    },
    {
        en: 'Enjoy',
        ru: 'Обожать',
    },
    {
        en: 'Excellent',
        ru: 'Отличный',
    },
    {
        en: 'Experience',
        ru: 'Опыт',
    },
    {
        en: 'Jogging',
        ru: 'Бег трусцой',
    },
    {
        en: 'Swimming pool',
        ru: 'Бассейн',
    },
    {
        en: 'Twice',
        ru: 'Дважды',
    },
    {
        en: 'Vocabulary',
        ru: 'Словарь',
    },
    {
        en: 'Shop assistant',
        ru: 'Продавец',
    },
    {
        en: 'Advanced',
        ru: 'Продвинутый',
    },
    {
        en: 'Baby',
        ru: 'Ребенок',
    },
    {
        en: 'Basic',
        ru: 'Основной, базовый',
    },
    {
        en: 'Black',
        ru: 'Черный',
    },
    {
        en: 'Blonde',
        ru: 'Светлый',
    },
    {
        en: 'Blue',
        ru: 'Синий',
    },
    {
        en: 'Building',
        ru: 'Здание',
    },
    {
        en: 'Cold',
        ru: 'Холодный',
    },
    {
        en: 'Colour',
        ru: 'Цвет',
    },
    {
        en: 'Device',
        ru: 'Устройство',
    },
    {
        en: 'Effect',
        ru: 'Эффект',
    },
    {
        en: 'Financial',
        ru: 'Финансовый',
    },
    {
        en: 'Fresh',
        ru: 'Свежий',
    },
    {
        en: 'Fruit',
        ru: 'Фрукты',
    },
    {
        en: 'Green',
        ru: 'Зеленый',
    },
    {
        en: 'Intermediate',
        ru: 'Средний',
    },
    {
        en: 'Low',
        ru: 'Низкий',
    },
    {
        en: 'Pencil',
        ru: 'Карандаш',
    },
    {
        en: 'Pleasant',
        ru: 'Приятный',
    },
    {
        en: 'Positive',
        ru: 'Позитивный, положительный',
    },
    {
        en: 'Profitable',
        ru: 'Прибыльный',
    },
    {
        en: 'Short',
        ru: 'Короткий',
    },
    {
        en: 'Small',
        ru: 'Маленький',
    },
    {
        en: 'Strong',
        ru: 'Сильный',
    },
    {
        en: 'Town',
        ru: 'Город',
    },
    {
        en: 'Vegetables',
        ru: 'Овощи',
    },
    {
        en: 'Voice',
        ru: 'Голос',
    },
    {
        en: 'Warm',
        ru: 'Теплый',
    },
    {
        en: 'Achievement',
        ru: 'Достижение',
    },
    {
        en: 'Amazing',
        ru: 'Удивительный',
    },
    {
        en: 'Common',
        ru: 'Распространенный',
    },
    {
        en: 'Detail',
        ru: 'Деталь',
    },
    {
        en: 'Event',
        ru: 'Событие',
    },
    {
        en: 'Expert',
        ru: 'Эксперт',
    },
    {
        en: 'Friendly',
        ru: 'Дружелюбный',
    },
    {
        en: 'Generous',
        ru: 'Щедрый',
    },
    {
        en: 'Guy',
        ru: 'Парень',
    },
    {
        en: 'Hospitable',
        ru: 'Гостеприимный',
    },
    {
        en: 'Number',
        ru: 'Число, номер',
    },
    {
        en: 'Partner',
        ru: 'Партнер',
    },
    {
        en: 'Realise',
        ru: 'Осознавать',
    },
    {
        en: 'Unique',
        ru: 'Уникальный',
    },
    {
        en: 'Custom',
        ru: 'Обычай',
    },
    {
        en: 'Differently',
        ru: 'По другому, иначе',
    },
    {
        en: 'Extremely',
        ru: 'Чрезвычайно',
    },
    {
        en: 'Fantastic',
        ru: 'Фантастический',
    },
    {
        en: 'Huge',
        ru: 'Огромный',
    },
    {
        en: 'Learner',
        ru: 'Ученик',
    },
    {
        en: 'Lovely',
        ru: 'Прекрасный',
    },
    {
        en: 'Official',
        ru: 'Официальный',
    },
    {
        en: 'Roof',
        ru: 'Крыша',
    },
    {
        en: 'Shock',
        ru: 'Шок, шокировать',
    },
    {
        en: 'Solution',
        ru: 'Решение',
    },
    {
        en: 'Statement',
        ru: 'Утверждение',
    },
    {
        en: 'Success',
        ru: 'Успех',
    },
    {
        en: 'Typical',
        ru: 'Типичный',
    },
    {
        en: 'Waste',
        ru: 'Трата, тритить',
    },
    {
        en: 'Boss',
        ru: 'Босс',
    },
    {
        en: 'Carefully',
        ru: 'Осторожно',
    },
    {
        en: 'Credit card',
        ru: 'Кредитная карта',
    },
    {
        en: 'Elder sister',
        ru: 'Старшая сестра',
    },
    {
        en: 'Following',
        ru: 'Следующий',
    },
    {
        en: 'Freelancer',
        ru: 'Фрилансер',
    },
    {
        en: 'Greatly',
        ru: 'Значительно, очень сильно',
    },
    {
        en: 'Hang',
        ru: 'Вешать',
    },
    {
        en: 'Inspire',
        ru: 'Вдохновлять',
    },
    {
        en: 'Interrupt',
        ru: 'Прерывать',
    },
    {
        en: 'Lots of',
        ru: 'Много',
    },
    {
        en: 'Opinion',
        ru: 'Мнение',
    },
    {
        en: 'Others',
        ru: 'Другие',
    },
    {
        en: 'Patient',
        ru: 'Пациент',
    },
    {
        en: 'Picture',
        ru: 'Картина',
    },
    {
        en: 'Poster',
        ru: 'Плакат',
    },
    {
        en: 'Sale',
        ru: 'Продажа, распродажа',
    },
    {
        en: 'Shoes',
        ru: 'Обувь',
    },
    {
        en: 'Store',
        ru: 'Магазин',
    },
    {
        en: 'Online store',
        ru: 'Интернет магазин',
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